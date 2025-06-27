import { type RouteConfig, index, route, prefix, layout } from "@react-router/dev/routes";

export default [
    ...prefix("/auth",[
        layout("features/auth/layouts/auth-layout.tsx",[
            route("/login", "features/auth/pages/login-page.tsx"),
            route("/join", "features/auth/pages/join-page.tsx"),
            route("/join/job-selection", "features/auth/pages/jobselection-page.tsx"),
            ...prefix("/otp",[
                route("/start", "features/auth/pages/otp-start-page.tsx"),
                route("/complete", "features/auth/pages/otp-complete-page.tsx"),
            ]),
            ...prefix("/social/:provider",[
                route("/start", "features/auth/pages/social-start-page.tsx"),
                route("/complete", "features/auth/pages/social-complete-page.tsx"),
            ]),
        ]),
    ]),

    index("common/pages/home-page.tsx"),
    route("/scenarios", "features/scenarios/scenarios.tsx"),
    route("/personal", "features/personal/personal-dashboard.tsx"),
] satisfies RouteConfig;
