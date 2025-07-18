import { createBrowserClient, createServerClient, type CookieOptions } from "@supabase/ssr";
import type { Database  as SupabaseDatabase} from "~/../database.types";    
import type { MergeDeep, SetNonNullable , SetFieldType } from "type-fest";
import * as cookie from "cookie";

type Database = MergeDeep<SupabaseDatabase, {
    public: {
        Views: {
            user_available_tasks: {
                Row: SetFieldType<SetNonNullable<SupabaseDatabase["public"]["Views"]["user_available_tasks"]["Row"], "task_id" | "title" | "description" | "scenario_name" | "role_name" | "techstack_name">,"description","string"|null>;
            }
        }
    }
}>

export const browserClient = createBrowserClient<Database>(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!
);

export const makeSSRClient = (request: Request) => {
  const cookies = cookie.parse(request.headers.get('Cookie') ?? '');
  const headers = new Headers();

  const client = createServerClient<Database>(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookies[name];
        },
        set(name: string, value: string, options: CookieOptions) {
          headers.append('Set-Cookie', cookie.serialize(name, value, options));
        },
        remove(name: string, options: CookieOptions) {
          headers.append('Set-Cookie', cookie.serialize(name, '', options));
        },
      },
    }
  );

  return {
    client,
    headers,
  };
};
//클라이언트는 어떻게 로그인한 유저를 알수 있을까? 쿠키 
//이 클라이언트는 자동으로 특정 쿠키를 찾고,쿠키를 사용하여 supabase와 통신해 누가 우리 애플리케이션을 사용하는지 알아냄
//이 코드가 브라우저에서 실행되면 클라이언트는 자동으로 브라우저의 쿠키에 접근해 쿠키를 가져와 쿠키에서 토큰을 추출함
//해당토큰을 사용해 supabase와 통신함
//이 클라이언트는 자동으로 특정 쿠키를 찾고,쿠키를 사용하여 supabase와 통신해 누가 우리 애플리케이션을 사용하는지 알아냄


//Browser
//Client Cookies ---> supabase Server ---> who is the user?
//만약 클라이언트가 브라우저에서 실행중이면 클라이언트는 쿠키를 받을수 있음
//클라이언트는 supabase 서버에게 알려줄수 있음
//클라이언트가 우리에게 어떤 사용자가 로그인한건지 알려줄수 있음

//브라우저 로직을 보면 유저가 로그인 했을떄 supabase가 쿠키를 줌 그리고 기본적으로 브라우저 클라이언트는 해당 쿠키를 사용자 브라우저에 넣음 (해당쿠키를 관리)
//우릴 위해 알아서 모든작업을 해줌(Server에서는 X)

//서버사이드 렌더링 loader()
//Server
//어떻게 클라이언트가 어떤 유저가 로그인했는지 알수 있을까? 만약 createClient()가 브라우저에서 작동하고 있지 않은 경우
//우리가 직접 브라우저로 부터 쿠키를 가져와 클라이언트에게 전달해줘야함
//Browser Send Cookies ---> loader() receives cookies ---> Supabase SSC(cookies) ---> Supabase Server ---> Who is the user?
//만약 서버에 있다면 브라우저가 우리의 loader 함수에 쿠키를 보냄
//loader 함수가 그 쿠키를 받음
//loader함수는 그 쿠키를 supabase서버사이드 클라이언트에게 보내줌
//클라이언트는 그 쿠키를 받아 supabase 서버와 통신함
//최종적으로 우리에게 어떤 사용자가 로그인했는지 알려줌


//브라우저가 서버로 요청을 보낼때마가, 브라우저의 쿠키가 서버로 전송됨
//우리가 할일은 그 쿠키를 잡아서 그걸 Supabase SSC에게 전달해 주는것임
//오늘날 대부분의 웹 인증은 SERVER방식
//브라우저가 쿠키를 보내고 그 쿠키를 다시 받아서 데이터베이스에서 그 쿠키를 가진 사용자를 검색
//그러면 사용자 정보를 알수 있음
// const client = createClient<Database>(
//     process.env.SUPABASE_URL!,
//     process.env.SUPABASE_ANON_KEY!
// )

// client.auth.getUser()

// export const browserClient = createBrowserClient<Database>(
//     "https://ukmxytzqnltrkicffuzm.supabase.co",
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrbXh5dHpxbmx0cmtpY2ZmdXptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1NjUzNDcsImV4cCI6MjA2NTE0MTM0N30.XfF8I5Z0AhPXXf6F4BmwBWQIT18AvE5cDQQfvo_Xifo"
// )

//export default client;

// export const adminClient = createClient<Database>(
//     process.env.SUPABASE_URL!,
//     process.env.SUPABASE_SERVICE_ROLE_KEY!
// )




