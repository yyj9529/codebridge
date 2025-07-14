ALTER TABLE "roles" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "techstacks" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "scenarios" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "tasks" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "user_progress" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "profiles" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE POLICY "Authenticated users can view roles." ON "roles" AS PERMISSIVE FOR SELECT TO "authenticated" USING (true);--> statement-breakpoint
CREATE POLICY "Authenticated users can view tech stacks." ON "techstacks" AS PERMISSIVE FOR SELECT TO "authenticated" USING (true);--> statement-breakpoint
CREATE POLICY "Authenticated users can view scenarios." ON "scenarios" AS PERMISSIVE FOR SELECT TO "authenticated" USING (true);--> statement-breakpoint
CREATE POLICY "Authenticated users can view tasks." ON "tasks" AS PERMISSIVE FOR SELECT TO "authenticated" USING (true);--> statement-breakpoint
CREATE POLICY "Users can manage their own progress." ON "user_progress" AS PERMISSIVE FOR ALL TO "authenticated" USING ((select auth.uid()) = "user_progress"."user_id") WITH CHECK ((select auth.uid()) = "user_progress"."user_id");--> statement-breakpoint
CREATE POLICY "Users can manage their own profile." ON "profiles" AS PERMISSIVE FOR ALL TO "authenticated" USING ((select auth.uid()) = "profiles"."id") WITH CHECK ((select auth.uid()) = "profiles"."id");