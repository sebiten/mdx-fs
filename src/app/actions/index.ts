"use server";

import { redirect } from "next/navigation";
import { createClient } from "../utils/supabase/server";

export const handleLogOut = async () => {
  const supabase = createClient();
  await supabase.auth.signOut();
  redirect("/");
};
