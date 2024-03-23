"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { createBrowserClient } from "@supabase/ssr";
import { usePathname } from "next/navigation";

interface ILoginFormProps {}

export default function LoginForm() {
  const pathname = usePathname();
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const handleLogin = () => {
    supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: location.origin + "/auth/callback?next=" + pathname,
      },
    });
  };

  return (
    <div>
      <Button
        variant="outline"
        className="flex items-center gap-2"
        onClick={handleLogin}
      >
        <FcGoogle />
        Login
      </Button>
    </div>
  );
}
