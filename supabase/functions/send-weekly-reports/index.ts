// import { createClient } from '@supabase/supabase-js'
// import { Resend } from 'resend' // 이메일 발송을 위한 Resend 라이브러리 예시

// // Resend API 키는 환경 변수로 관리합니다.
// const resend = new Resend(Deno.env.get('RESEND_API_KEY'))

// // Supabase 클라이언트는 서비스 역할 키(service_role_key)를 사용하여 생성합니다.
// // 이를 통해 RLS 정책을 우회하여 모든 사용자의 정보를 조회할 수 있습니다.
// const supabaseAdmin = createClient(
//   Deno.env.get('SUPABASE_URL') ?? '',
//   Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
// )

// Deno.serve(async (req) => {
//   // 1. 무단 호출 방지를 위한 시크릿 키 검증
//   const payload = await req.json()
//   if (payload.secret !== Deno.env.get('CRON_SECRET')) {
//     return new Response('Unauthorized', { status: 401 })
//   }

//   // 2. 이메일을 수신할 모든 활성 사용자 목록 조회
//   // 'profiles' 테이블로 수정했습니다. 'user' 테이블은 존재하지 않습니다.
//   const { data: users, error: userError } = await supabaseAdmin
//     .from('profiles')
//     .select('user_id, name, email')
//     .eq('is_active', true)

//   if (userError) {
//     console.error('Error fetching users:', userError)
//     return new Response(userError.message, { status: 500 })
//   }

//   // 3. 각 사용자에 대해 반복하며 주간 리포트 이메일 발송
//   if (users) {
//     for (const user of users) {
//       // 3a. DB 함수를 호출하여 해당 유저의 주간 성과 데이터 가져오기
//       const { data: summary, error: summaryError } = await supabaseAdmin.rpc(
//         'get_user_weekly_summary',
//         { p_user_id: user.user_id }
//       )
  
//       if (summaryError || !summary || summary.length === 0) {
//         console.warn(`No summary for user ${user.user_id}, skipping.`)
//         continue
//       }
  
//       const { completed_tasks_count, total_score_earned } = summary[0]
  
//       // 3b. 이메일 내용 생성
//       const emailHtml = `
//         <h1>Hi ${user.name},</h1>
//         <p>Here's your CodeBridge weekly summary!</p>
//         <ul>
//           <li><strong>Tasks Completed:</strong> ${completed_tasks_count}</li>
//           <li><strong>XP Earned:</strong> ${total_score_earned}</li>
//         </ul>
//         <p>Great work last week! Keep up the momentum and start your next challenge.</p>
//         <a href="https://your-codebridge-url.com/dashboard">Continue Learning</a>
//       `
  
//       // 3c. 이메일 발송
//       try {
//         await resend.emails.send({
//           from: 'CodeBridge <reports@yourdomain.com>',
//           to: user.email,
//           subject: 'Your CodeBridge Weekly Progress Report',
//           html: emailHtml,
//         })
//         console.log(`Report sent to ${user.email}`)
//       } catch (emailError) {
//         console.error(`Failed to send email to ${user.email}:`, emailError)
//       }
//     }
//   }


//   return new Response('Weekly reports process started.', {
//     headers: { 'Content-Type': 'application/json' },
//   })
// }) 