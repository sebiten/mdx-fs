import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import LoginForm from "./LoginForm";
import { createClient } from "@/app/utils/supabase/server";
import Image from "next/image";
import { User2 } from "lucide-react";

interface INavBarProps {}

export default async function NavBar() {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();
  return (
    <nav className="flex justify-between items-center">
      <div className="group flex gap-4 items-center">
        <div className="flex items-center justify-center">
          {data.user?.app_metadata ? (
            <Image
              width={50}
              height={50}
              alt="asd"
              src={data.user?.user_metadata.picture}
              className="rounded-full mx-auto"
            />
          ) : (
            <User2 scale={2}/>
          )}
        </div>
        <Link href="/">Daily Blog</Link>
      </div>
      <LoginForm />
    </nav>
  );
}
