import {
    pgTable,
    uuid,
    varchar,
    timestamp,
    boolean,
    integer,
    text,
    primaryKey,
    foreignKey,
    pgPolicy,
  } from "drizzle-orm/pg-core";
  import { sql } from "drizzle-orm";
  import { authUid, authUsers, authenticatedRole } from "drizzle-orm/supabase";

  
  export const profiles = pgTable("profiles", {
    user_id: uuid("user_id").primaryKey().references(() => authUsers.id, { onDelete: "cascade" }),
    name: varchar("name", { length: 30 }).unique(),
    email: varchar("email", { length: 50 }).unique(),
    password: varchar("password", { length: 50 }),
    avatar_url: text("avatar_url"),
    created_at: timestamp("created_at").defaultNow().notNull(),
    updated_at: timestamp("updated_at").defaultNow().notNull(),
    deleted_at: timestamp("deleted_at"),  
    is_active: boolean("is_active").default(true).notNull(),
    is_admin: boolean("is_admin").default(false).notNull(),
  },
  (table) => ([
    pgPolicy("Users can manage their own profile.", {
      for: "all",
      to: authenticatedRole,
      using: sql`${authUid} = ${table.user_id}`,
      withCheck: sql`${authUid} = ${table.user_id}`,
    })
  ]));
  
  
  /**
   * Master data for user roles (e.g., Frontend, Backend).
   */
  export const roles = pgTable("roles", {
    role_id: uuid("role_id").primaryKey().defaultRandom(),
    name: varchar("name", { length: 55 }).notNull().unique(),
    description: varchar("description", { length: 255 }),
    created_at: timestamp("created_at").defaultNow().notNull(),
    updated_at: timestamp("updated_at").defaultNow().notNull(),
    deleted_at: timestamp("deleted_at"),
  },
  (table) => ([
    pgPolicy("Authenticated users can view roles.", {
      for: "select",
      to: authenticatedRole,
      using: sql`true`,
    })
  ]));
  
  
  /**
   * Master data for tech stacks (e.g., React, Node.js).
   */
  export const techstacks = pgTable("techstacks", {
    techstack_id: uuid("techstack_id").primaryKey().defaultRandom(),
    name: varchar("name", { length: 55 }).notNull().unique(),
    role_id: uuid("role_id").references(() => roles.role_id), // A tech stack can be primarily associated with a role
    description: varchar("description", { length: 255 }),
    created_at: timestamp("created_at").defaultNow().notNull(),
    updated_at: timestamp("updated_at").defaultNow().notNull(),
    deleted_at: timestamp("deleted_at"),
  },
  (table) => ([
    pgPolicy("Authenticated users can view tech stacks.", {
      for: "select",
      to: authenticatedRole,
      using: sql`true`,
    })
  ]));
  
  
  /**
   * Join table connecting users and their selected tech stacks (Many-to-Many).
   */
  export const user_tech_stacks = pgTable("user_tech_stacks", {
      user_id: uuid("user_id").notNull().references(() => profiles.user_id, { onDelete: "cascade" }),
      techstack_id: uuid("techstack_id").notNull().references(() => techstacks.techstack_id, { onDelete: "cascade" }),
      created_at: timestamp("created_at").defaultNow().notNull(),
      updated_at: timestamp("updated_at").defaultNow().notNull(),
      deleted_at: timestamp("deleted_at"),
    }, (table) => ({
      pk: primaryKey({ columns: [table.user_id, table.techstack_id] }),
      policies: [
        pgPolicy("Users can manage their own tech stacks.", {
          for: "all",
          to: authenticatedRole,
          using: sql`${authUid} = ${table.user_id}`,
          withCheck: sql`${authUid} = ${table.user_id}`,
        })
      ]
    })
  );
  
  
  /**
   * Scenarios are high-level learning modules (e.g., "Build a Kanban Board").
   */
  export const scenarios = pgTable("scenarios", {
    scenario_id: uuid("scenario_id").primaryKey().defaultRandom(),
    name: varchar("name", { length: 55 }).notNull(),
    description: varchar("description", { length: 255 }),
    level: integer("level").notNull(), // 1 for Crawl, 2 for Walk, 3 for Run
    is_premium: boolean("is_premium").default(false).notNull(),
    created_at: timestamp("created_at").defaultNow().notNull(),
    updated_at: timestamp("updated_at").defaultNow().notNull(),
    deleted_at: timestamp("deleted_at"),
  },
  (table) => ([
    pgPolicy("Authenticated users can view scenarios.", {
      for: "select",
      to: authenticatedRole,
      using: sql`true`,
    })
  ]));
  
  
  /**
   * Tasks are the individual, actionable steps within a scenario.
   */
  export const tasks = pgTable("tasks", {
    task_id: uuid("task_id").primaryKey().defaultRandom(),
    scenario_id: uuid("scenario_id").references(() => scenarios.scenario_id),
    role_id: uuid("role_id").references(() => roles.role_id),
    user_teach_stack_id: uuid("user_teach_stack_id").references(() => techstacks.techstack_id),
    title: varchar("title", { length: 255 }).notNull(),
    description: text("description"),
    prerequisite: text("prerequisite"), // Array of task_ids
    unlock_feature: text("unlock_feature"),
    trigger_npc_task: text("trigger_npc_task"), // Array of task_ids for AI
    code_template: text("code_template"),
    created_at: timestamp("created_at").defaultNow().notNull(),
    updated_at: timestamp("updated_at").defaultNow().notNull(),
    deleted_at: timestamp("deleted_at"),
  },
  (table) => ([
    pgPolicy("Authenticated users can view tasks.", {
      for: "select",
      to: authenticatedRole,
      using: sql`true`,
    })
  ]));
  
  
  /**
   * Tracks the progress of a user for a specific task.
   */
  export const user_progress = pgTable("user_progress", {
      user_progress_id: uuid("user_progress_id").primaryKey().defaultRandom(),
      user_id: uuid("user_id").notNull().references(() => profiles.user_id, { onDelete: "cascade" }),
      task_id: uuid("task_id").notNull().references(() => tasks.task_id, { onDelete: "cascade" }),
      status: text("status", { enum: ["todo", "in_progress", "completed", "needs_revision"] }).default("todo").notNull(),
      score: integer("score").default(0),
      submitted_code: text("submitted_code"),
      feedback: text("feedback"),
      completed_at: timestamp("completed_at"),
      created_at: timestamp("created_at").defaultNow().notNull(),
      updated_at: timestamp("updated_at").defaultNow().notNull(),
      deleted_at: timestamp("deleted_at"),
    },
    (table) => ([
      pgPolicy("Users can manage their own progress.", {
        for: "all",
        to: authenticatedRole,
        using: sql`${authUid} = ${table.user_id}`,
        withCheck: sql`${authUid} = ${table.user_id}`,
      })
    ])
  );
  
  export const career_sessions = pgTable("career_sessions", {
    user_progress_id: uuid("user_progress_id").primaryKey(),
    user_id: uuid("user_id").references(() => profiles.user_id, { onDelete: "cascade" }),
    session_type: text("session_type").notNull(),
    transcript: text("transcript").notNull(),
    feedback: text("feedback").notNull(),
    created_at: timestamp("created_at").defaultNow().notNull(),
    updated_at: timestamp("updated_at").defaultNow().notNull(),
    deleted_at: timestamp("deleted_at"),
  });
  
  // ... Other tables like forum_threads, forum_posts, subscriptions can be added here following the same pattern.
  