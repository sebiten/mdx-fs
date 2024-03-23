"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { createBrowserClient } from "@supabase/ssr";
import { usePathname } from "next/navigation";
import { LogOutIcon } from "lucide-react";
import { handleLogOut } from "@/app/actions";
import { SubmitButton } from "../ui/submit-button";

interface ILoginFormProps {}

export default function LoginForm() {
  const pathname = usePathname();
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const handleLogin = (e: any) => {
    e.preventDefault();
    supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: location.origin + "/auth/callback?next=" + pathname,
      },
    });
  };

  return (
    <form className="flex gap-2 ">
      <Button
        variant="outline"
        className="flex items-center gap-2"
        onClick={handleLogin}
      >
        <FcGoogle />
        Login
      </Button>
      <SubmitButton
        pendingText="Loggin out..."
        variant="outline"
        className="flex items-center gap-2"
        formAction={handleLogOut}
      >
        <LogOutIcon />
        LogOut
      </SubmitButton>
    </form>
  );
}
