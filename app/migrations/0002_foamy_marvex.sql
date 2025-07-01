CREATE TABLE "scenarios" (
	"scenario_id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(55) NOT NULL,
	"description" varchar(255) NOT NULL,
	"level" integer NOT NULL,
	"is_premium" boolean NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "tasks" (
	"task_id" uuid PRIMARY KEY NOT NULL,
	"scenario_id" uuid,
	"role_id" uuid,
	"user_teach_stack_id" uuid,
	"title" varchar(55) NOT NULL,
	"description" varchar(255) NOT NULL,
	"prerequisite" varchar(255) NOT NULL,
	"unlock_feature" varchar(255) NOT NULL,
	"trigger_npc_task" varchar(255) NOT NULL,
	"code_template" varchar(5000) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "user_progress" (
	"user_progress_id" uuid PRIMARY KEY NOT NULL,
	"task_id" uuid,
	"status" varchar(55) NOT NULL,
	"score" text NOT NULL,
	"submitted_code" text NOT NULL,
	"feedback" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_scenario_id_scenarios_scenario_id_fk" FOREIGN KEY ("scenario_id") REFERENCES "public"."scenarios"("scenario_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_role_id_roles_role_id_fk" FOREIGN KEY ("role_id") REFERENCES "public"."roles"("role_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_user_teach_stack_id_techstacks_techstack_id_fk" FOREIGN KEY ("user_teach_stack_id") REFERENCES "public"."techstacks"("techstack_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_progress" ADD CONSTRAINT "user_progress_task_id_tasks_task_id_fk" FOREIGN KEY ("task_id") REFERENCES "public"."tasks"("task_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_teach_stacks" DROP COLUMN "user_id";