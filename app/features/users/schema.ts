import { bigint, pgTable, varchar, timestamp, boolean } from "drizzle-orm/pg-core";

export const jobs = pgTable("user",{
    user_id : bigint({mode : "number"}).primaryKey().generatedAlwaysAsIdentity(),
    name : varchar({length : 255}).notNull(),
    email : varchar({length : 255}).notNull(),
    password : varchar({length : 255}).notNull(),
    avatar_url : varchar({length : 255}).notNull(),
    created_at : timestamp({mode : "date"}).defaultNow().notNull(),
    updated_at : timestamp({mode : "date"}).defaultNow().notNull(),
    deleted_at : timestamp({mode : "date"}).defaultNow(),
    is_active : boolean().notNull().default(true),
    is_admin : boolean().notNull().default(false),
});