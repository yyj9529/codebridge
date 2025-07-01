CREATE TABLE "roles" (
	"role_id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(55) NOT NULL,
	"description" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "techstacks" (
	"techstack_id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(55) NOT NULL,
	"role_id" uuid  NOT NULL,
	"description" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "user_teach_stacks" (
	"user_teach_stack_id" uuid PRIMARY KEY NOT NULL,
	"user_id" uuid NOT NULL,
	"techstack_id" uuid NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
ALTER TABLE "techstacks" ADD CONSTRAINT "techstacks_role_id_roles_role_id_fk" FOREIGN KEY ("role_id") REFERENCES "public"."roles"("role_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_teach_stacks" ADD CONSTRAINT "user_teach_stacks_techstack_id_techstacks_techstack_id_fk" FOREIGN KEY ("techstack_id") REFERENCES "public"."techstacks"("techstack_id") ON DELETE no action ON UPDATE no action;