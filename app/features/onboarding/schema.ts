import { pgTable, varchar, timestamp, uuid, pgSchema } from "drizzle-orm/pg-core";


export const roles = pgTable("roles",{
    role_id : uuid().primaryKey(),
    name : varchar({length : 55}).notNull(),
    description : varchar({length : 255}).notNull(),
    created_at : timestamp({mode : "date"}).defaultNow().notNull(),
    updated_at : timestamp({mode : "date"}).defaultNow().notNull(),
    deleted_at : timestamp({mode : "date"}),
});

export const tech_stacks = pgTable("techstacks",{
    techstack_id : uuid().primaryKey(),
    name : varchar({length : 55}).notNull(),
    role_id : uuid().primaryKey().references(() => roles.role_id),
    description : varchar({length : 255}).notNull(),
    created_at : timestamp({mode : "date"}).defaultNow().notNull(),
    updated_at : timestamp({mode : "date"}).defaultNow().notNull(),
    deleted_at : timestamp({mode : "date"}),
});

export const user_teach_stacks = pgTable("user_teach_stacks",{
    user_teach_stack_id : uuid().primaryKey().primaryKey(),
    techstack_id : uuid().primaryKey().references(() => tech_stacks.techstack_id),
    created_at : timestamp({mode : "date"}).defaultNow().notNull(),
    updated_at : timestamp({mode : "date"}).defaultNow().notNull(),
    deleted_at : timestamp({mode : "date"}),
});

