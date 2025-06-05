import { createClient } from "@supabase/supabase-js";

// 👇 paste your real values here from Supabase
const supabaseUrl = "https://wfexcafkgftquannugkq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndmZXhjYWZrZ2Z0cXVhbm51Z2txIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwNTcxMzQsImV4cCI6MjA2NDYzMzEzNH0.vk3sJjQCSZpYoKbDgA6mpk88l187ZhhFjSLVTNmryAo";

export const supabase = createClient(supabaseUrl, supabaseKey);
