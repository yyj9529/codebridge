import { pgTable, varchar, timestamp, uuid, integer, boolean, text } from "drizzle-orm/pg-core";
import { roles } from "../onboarding/schema";
import { tech_stacks } from "../onboarding/schema";  


export const scenarios = pgTable("scenarios",{
    scenario_id : uuid().primaryKey(),
    name : varchar({length : 55}).notNull(),
    description : varchar({length : 255}).notNull(),
    level : integer().notNull(),
    is_premium : boolean().notNull(),
    created_at : timestamp({mode : "date"}).defaultNow().notNull(),
    updated_at : timestamp({mode : "date"}).defaultNow().notNull(),
    deleted_at : timestamp({mode : "date"}),
});

export const tasks = pgTable("tasks",{
    task_id : uuid().primaryKey(),
    scenario_id : uuid().references(() => scenarios.scenario_id),
    role_id : uuid().references(() => roles.role_id),
    user_teach_stack_id : uuid().references(() =>tech_stacks.techstack_id ),
    title : varchar({length : 55}).notNull(),
    description : varchar({length : 255}).notNull(),
    prerequisite : varchar({length : 255}).notNull(),
    unlock_feature : varchar({length : 255}).notNull(),
    trigger_npc_task : varchar({length : 255}).notNull(),
    code_template : varchar({length : 5000}).notNull(),
    created_at : timestamp({mode : "date"}).defaultNow().notNull(),
    updated_at : timestamp({mode : "date"}).defaultNow().notNull(),
    deleted_at : timestamp({mode : "date"}),
});

export const user_progress = pgTable("user_progress",{
    user_progress_id : uuid().primaryKey(),
    task_id : uuid().references(() => tasks.task_id),
    status : varchar({length : 55}).notNull(),
    score : text().notNull(),
    submitted_code : text().notNull(),
    feedback : text().notNull(),
    created_at : timestamp({mode : "date"}).defaultNow().notNull(),
    updated_at : timestamp({mode : "date"}).defaultNow().notNull(),
    deleted_at : timestamp({mode : "date"}),
});