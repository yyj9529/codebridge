export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      career_sessions: {
        Row: {
          created_at: string
          deleted_at: string | null
          feedback: string
          session_type: string
          transcript: string
          updated_at: string
          user_id: string | null
          user_progress_id: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          feedback: string
          session_type: string
          transcript: string
          updated_at?: string
          user_id?: string | null
          user_progress_id: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          feedback?: string
          session_type?: string
          transcript?: string
          updated_at?: string
          user_id?: string | null
          user_progress_id?: string
        }
        Relationships: []
      }
      forum_posts: {
        Row: {
          content: string
          created_at: string
          deleted_at: string | null
          forum_post_id: string
          forum_thread_id: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          content: string
          created_at?: string
          deleted_at?: string | null
          forum_post_id: string
          forum_thread_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          content?: string
          created_at?: string
          deleted_at?: string | null
          forum_post_id?: string
          forum_thread_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      forum_threads: {
        Row: {
          content: string
          created_at: string
          deleted_at: string | null
          forum_thread_id: string
          title: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          content: string
          created_at?: string
          deleted_at?: string | null
          forum_thread_id: string
          title: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          content?: string
          created_at?: string
          deleted_at?: string | null
          forum_thread_id?: string
          title?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string
          created_at: string
          deleted_at: string | null
          email: string
          is_active: boolean
          is_admin: boolean
          name: string
          password: string
          updated_at: string
          user_id: number
        }
        Insert: {
          avatar_url: string
          created_at?: string
          deleted_at?: string | null
          email: string
          is_active?: boolean
          is_admin?: boolean
          name: string
          password: string
          updated_at?: string
          user_id: number
        }
        Update: {
          avatar_url?: string
          created_at?: string
          deleted_at?: string | null
          email?: string
          is_active?: boolean
          is_admin?: boolean
          name?: string
          password?: string
          updated_at?: string
          user_id?: number
        }
        Relationships: []
      }
      roles: {
        Row: {
          created_at: string
          deleted_at: string | null
          description: string
          name: string
          role_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          description: string
          name: string
          role_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          description?: string
          name?: string
          role_id?: string
          updated_at?: string
        }
        Relationships: []
      }
      scenarios: {
        Row: {
          created_at: string
          deleted_at: string | null
          description: string
          is_premium: boolean
          level: number
          name: string
          scenario_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          description: string
          is_premium: boolean
          level: number
          name: string
          scenario_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          description?: string
          is_premium?: boolean
          level?: number
          name?: string
          scenario_id?: string
          updated_at?: string
        }
        Relationships: []
      }
      subsriptions: {
        Row: {
          created_at: string
          deleted_at: string | null
          status: string
          stripe_customer_id: string
          stripe_subscription_id: string
          subsription_id: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          status: string
          stripe_customer_id: string
          stripe_subscription_id: string
          subsription_id: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          status?: string
          stripe_customer_id?: string
          stripe_subscription_id?: string
          subsription_id?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      tasks: {
        Row: {
          code_template: string
          created_at: string
          deleted_at: string | null
          description: string
          prerequisite: string
          role_id: string | null
          scenario_id: string | null
          task_id: string
          title: string
          trigger_npc_task: string
          unlock_feature: string
          updated_at: string
          user_teach_stack_id: string | null
        }
        Insert: {
          code_template: string
          created_at?: string
          deleted_at?: string | null
          description: string
          prerequisite: string
          role_id?: string | null
          scenario_id?: string | null
          task_id: string
          title: string
          trigger_npc_task: string
          unlock_feature: string
          updated_at?: string
          user_teach_stack_id?: string | null
        }
        Update: {
          code_template?: string
          created_at?: string
          deleted_at?: string | null
          description?: string
          prerequisite?: string
          role_id?: string | null
          scenario_id?: string | null
          task_id?: string
          title?: string
          trigger_npc_task?: string
          unlock_feature?: string
          updated_at?: string
          user_teach_stack_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tasks_role_id_roles_role_id_fk"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["role_id"]
          },
          {
            foreignKeyName: "tasks_scenario_id_scenarios_scenario_id_fk"
            columns: ["scenario_id"]
            isOneToOne: false
            referencedRelation: "scenarios"
            referencedColumns: ["scenario_id"]
          },
          {
            foreignKeyName: "tasks_user_teach_stack_id_techstacks_techstack_id_fk"
            columns: ["user_teach_stack_id"]
            isOneToOne: false
            referencedRelation: "techstacks"
            referencedColumns: ["techstack_id"]
          },
        ]
      }
      techstacks: {
        Row: {
          created_at: string
          deleted_at: string | null
          description: string
          name: string
          role_id: string
          techstack_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          description: string
          name: string
          role_id: string
          techstack_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          description?: string
          name?: string
          role_id?: string
          techstack_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "techstacks_role_id_roles_role_id_fk"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["role_id"]
          },
        ]
      }
      user_progress: {
        Row: {
          created_at: string
          deleted_at: string | null
          feedback: string
          score: string
          status: string
          submitted_code: string
          task_id: string | null
          updated_at: string
          user_progress_id: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          feedback: string
          score: string
          status: string
          submitted_code: string
          task_id?: string | null
          updated_at?: string
          user_progress_id: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          feedback?: string
          score?: string
          status?: string
          submitted_code?: string
          task_id?: string | null
          updated_at?: string
          user_progress_id?: string
        }
        Relationships: []
      }
      user_teach_stacks: {
        Row: {
          created_at: string
          deleted_at: string | null
          techstack_id: string
          updated_at: string
          user_id: string | null
          user_teach_stack_id: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          techstack_id: string
          updated_at?: string
          user_id?: string | null
          user_teach_stack_id: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          techstack_id?: string
          updated_at?: string
          user_id?: string | null
          user_teach_stack_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_teach_stacks_techstack_id_techstacks_techstack_id_fk"
            columns: ["techstack_id"]
            isOneToOne: false
            referencedRelation: "techstacks"
            referencedColumns: ["techstack_id"]
          },
        ]
      }
      user_tech_stacks: {
        Row: {
          created_at: string
          deleted_at: string | null
          techstack_id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          techstack_id: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          techstack_id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      user_available_tasks: {
        Row: {
          description: string | null
          role_name: string | null
          scenario_name: string | null
          task_id: string | null
          techstack_name: string | null
          title: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
