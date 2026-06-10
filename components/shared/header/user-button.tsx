"use client";
import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserIcon } from "lucide-react";
import { getUser } from "@/lib/actions/auth.action";

type User = { id: number; name: string; email: string; phone_number: string };
function UserButton() {
  function handleLogOut() {
    localStorage.removeItem("token");
  }
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const token = (localStorage.getItem("token") as string) || "";
    async function getUsers(): Promise<User> {
      return await getUser(token);
    }
    async function setU() {
      setUser(await getUsers());
      console.log(getUsers());
    }
    setU();
  }, [user]);
  {
    if (user) {
      return (
        <div className="flex space-x-2">
          <span className="text-sm px-3 py-2 rounded-full bg-gray-300 text-white">
            {user.name.toUpperCase().slice(0, 1)}
          </span>
          <Button onClick={handleLogOut}>Sign Out</Button>
        </div>
      );
    } else {
      return (
        <Button asChild variant="default">
          <Link href="/sign-in">Sign In</Link>
        </Button>
      );
    }
  }
}

export default UserButton;
