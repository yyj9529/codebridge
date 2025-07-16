-- 이 VIEW는 각 사용자별로 "현재 수행 가능한" 과제 목록을 미리 계산해 둡니다.
CREATE OR REPLACE VIEW public.user_available_tasks AS
SELECT
    t.task_id,
    t.title,
    t.description,
    s.name as scenario_name,
    r.name as role_name,
    ts.name as techstack_name
FROM
    public.tasks t
JOIN public.scenarios s ON t.scenario_id = s.scenario_id
JOIN public.roles r ON t.role_id = r.role_id
JOIN public.techstacks ts ON t.user_teach_stack_id = ts.techstack_id
JOIN public.user_teach_stacks uts ON uts.techstack_id = t.user_teach_stack_id

-- 사용자가 이미 진행 중이거나 완료한 과제는 제외합니다.
LEFT JOIN public.user_progress up ON up.task_id = t.task_id;
    SELECT * FROM user_available_tasks;