-- Step 1.1: 지난 한 주간의 사용자별 학습 성과를 조회하는 PostgreSQL 함수 생성
-- 이 함수는 특정 사용자의 지난 7일간의 활동을 요약하여 반환합니다.

CREATE OR REPLACE FUNCTION get_user_weekly_summary(p_user_id UUID)
RETURNS TABLE(
    completed_tasks_count BIGINT,
    total_score_earned BIGINT,
    last_active_day TEXT
)
AS $$
BEGIN
    RETURN QUERY
    SELECT
        -- user_progress 테이블에 score 컬럼이 없어, 임시로 COUNT(*)를 사용합니다. 
        -- 실제 점수 컬럼 이름으로 수정해주세요.
        COUNT(*) AS completed_tasks_count,
        SUM(CAST(up.score AS BIGINT)) AS total_score_earned,
        TO_CHAR(MAX(up.updated_at), 'YYYY-MM-DD') AS last_active_day
    FROM
        public.user_progress up
    WHERE
        -- user_progress 테이블에 user_id 컬럼이 없습니다. 
        -- 실제 사용자 ID와 연결된 컬럼으로 수정이 필요합니다.
        up.user_id = p_user_id 
        AND up.status = 'completed'
        AND up.updated_at >= NOW() - INTERVAL '7 days';
END;
$$ LANGUAGE plpgsql;

-- Step 1.2: 이메일 발송을 트리거할 Supabase Edge Function을 호출하는 함수 생성
-- 보안상의 이유로, pg_cron은 직접 외부 네트워크 요청을 할 수 없습니다.
-- 대신, pg_net 확장 기능을 사용하여 내부적으로 Edge Function의 HTTP 엔드포인트를 호출하는 것이 표준적인 방법입니다.

CREATE OR REPLACE FUNCTION trigger_send_weekly_reports()
RETURNS TEXT AS $$
DECLARE
    edge_function_url TEXT := 'https://ukmxytzqnltrkicffuzm.supabase.co/functions/v1/send-weekly-reports';
    -- 참고: 위 URL의 프로젝트 REF는 현재 프로젝트 ID로 설정했습니다.
    -- 참고: 이 함수는 Supabase의 'service_role' 키를 사용하여 호출되므로, RLS 정책을 우회할 수 있습니다.
    response TEXT;
BEGIN
    SELECT
        net.http_post(
            url := edge_function_url,
            headers := jsonb_build_object(
                'Content-Type', 'application/json',
                'Authorization', 'Bearer ' || current_setting('app.supabase.service_role_key') 
            ),
            body := jsonb_build_object('secret', current_setting('app.cron.secret')) -- 무단 호출을 막기 위한 시크릿 키
        )
    INTO response;

    RETURN response;
END;
$$ LANGUAGE plpgsql;

-- =================================================================
-- PHASE 3: 작업 스케줄링 (DevOps' Role)
-- 목표: 매주 정해진 시간에 이메일 발송 프로세스를 자동으로 실행하도록 pg_cron을 설정합니다.
-- 이 쿼리는 Supabase 대시보드의 SQL Editor에서 한 번만 실행하면 됩니다.
-- =================================================================

-- 먼저, pg_cron 확장이 활성화되어 있는지 확인합니다.
-- Supabase Dashboard > Database > Extensions 에서 'pg_cron'을 검색하여 활성화할 수 있습니다.

-- 매주 월요일 오전 9시 (UTC 기준)에 'trigger_send_weekly_reports' 함수를 실행하도록 스케줄을 등록합니다.
-- Cron 문법: (분 시 일 월 요일)
-- '0 9 * * 1' -> 매주 월요일, 9시 0분에 실행
SELECT cron.schedule(
    'send-weekly-reports-job', -- 작업의 고유한 이름
    '0 9 * * 1',               -- Cron 스케줄 표현식
    $$ SELECT trigger_send_weekly_reports(); $$ -- 실행할 SQL 명령
); 