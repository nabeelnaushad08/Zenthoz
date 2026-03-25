export interface LeadData {
  name: string;
  email: string;
  phone: string;
  business_name?: string;
  industry?: string;
  message?: string;
  package?: string;
  source?: string;
}

let supabaseInstance: any = null;

function getSupabase() {
  if (typeof window === "undefined") return null;

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey || supabaseUrl === "your_supabase_url_here") {
    return null;
  }

  if (!supabaseInstance) {
    const { createClient } = require("@supabase/supabase-js");
    supabaseInstance = createClient(supabaseUrl, supabaseKey);
  }

  return supabaseInstance;
}

export async function submitLead(data: LeadData) {
  const supabase = getSupabase();

  if (!supabase) {
    console.log("Supabase not configured - lead data:", data);
    // In production, you'd send to a different endpoint or email
    return { success: true, mock: true };
  }

  const { error } = await supabase.from("leads").insert([
    {
      ...data,
      created_at: new Date().toISOString(),
      status: "new",
    },
  ]);

  if (error) {
    console.error("Supabase error:", error);
    throw error;
  }

  return { success: true };
}
