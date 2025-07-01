import { defineConfig } from "drizzle-kit";

//schema 데이터베이스의 구조를 설명하는곳

export default defineConfig({
    schema: "./app/features/**/schema.ts",
    out: "./app/migrations",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URL!,  
    },
});