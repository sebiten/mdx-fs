import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import LoginForm from "./LoginForm";

interface INavBarProps {}

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center">
      <div className="group">
        <Link href="/">Daily Blog</Link>
        <div className="h-1 w-0 group-hover:w-full transition-all bg-green-500"></div>
      </div>
      <LoginForm/>
    </nav>
  );
}
