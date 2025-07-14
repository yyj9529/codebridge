CREATE TABLE "career_sessions" (
	"user_progress_id" uuid PRIMARY KEY NOT NULL,
	"user_id" uuid,
	"session_type" text NOT NULL,
	"transcript" text NOT NULL,
	"feedback" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "forum_posts" (
	"forum_post_id" uuid PRIMARY KEY NOT NULL,
	"forum_thread_id" uuid,
	"user_id" uuid,
	"content" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "forum_threads" (
	"forum_thread_id" uuid PRIMARY KEY NOT NULL,
	"user_id" uuid,
	"title" varchar(255) NOT NULL,
	"content" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "subsriptions" (
	"subsription_id" uuid PRIMARY KEY NOT NULL,
	"user_id" uuid,
	"stripe_customer_id" uuid NOT NULL,
	"stripe_subscription_id" uuid NOT NULL,
	"status" varchar(55) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint

--> statement-breakpoint
ALTER TABLE "career_sessions" ADD CONSTRAINT "career_sessions_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("user_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "forum_posts" ADD CONSTRAINT "forum_posts_forum_thread_id_forum_threads_forum_thread_id_fk" FOREIGN KEY ("forum_thread_id") REFERENCES "public"."forum_threads"("forum_thread_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "forum_posts" ADD CONSTRAINT "forum_posts_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("user_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "forum_threads" ADD CONSTRAINT "forum_threads_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("user_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "subsriptions" ADD CONSTRAINT "subsriptions_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("user_id") ON DELETE no action ON UPDATE no action;