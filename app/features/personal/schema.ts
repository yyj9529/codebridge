import { pgTable, varchar, timestamp, uuid, pgSchema, text } from "drizzle-orm/pg-core";

export const users = pgSchema("auth").table("users",{
    user_id : uuid().primaryKey(),
});

export const subsriptions = pgTable("subsriptions",{
    subsription_id : uuid().primaryKey(),
    user_id : uuid().references(() => users.user_id),
    stripe_customer_id : uuid().notNull(),
    stripe_subscription_id : uuid().notNull(),
    status : varchar({length : 55}).notNull(),
    created_at : timestamp({mode : "date"}).defaultNow().notNull(),
    updated_at : timestamp({mode : "date"}).defaultNow().notNull(),
    deleted_at : timestamp({mode : "date"}),
});

export const career_sessions = pgTable("career_sessions",{
    user_progress_id : uuid().primaryKey(),
    user_id : uuid().references(() => users.user_id),
    session_type : text().notNull(),
    transcript : text().notNull(),
    feedback : text().notNull(),
    created_at : timestamp({mode : "date"}).defaultNow().notNull(),
    updated_at : timestamp({mode : "date"}).defaultNow().notNull(),
    deleted_at : timestamp({mode : "date"}),
});

export const forum_threads = pgTable("forum_threads",{
    forum_thread_id : uuid().primaryKey(),
    user_id : uuid().references(() => users.user_id),
    title : varchar({length : 255}).notNull(),
    content : text().notNull(),
    created_at : timestamp({mode : "date"}).defaultNow().notNull(),
    updated_at : timestamp({mode : "date"}).defaultNow().notNull(),
    deleted_at : timestamp({mode : "date"}),
});

export const forum_posts = pgTable("forum_posts",{
    forum_post_id : uuid().primaryKey(),
    forum_thread_id : uuid().references(() => forum_threads.forum_thread_id),
    user_id : uuid().references(() => users.user_id),
    content : text().notNull(),
    created_at : timestamp({mode : "date"}).defaultNow().notNull(),
    updated_at : timestamp({mode : "date"}).defaultNow().notNull(),
    deleted_at : timestamp({mode : "date"}),
});
