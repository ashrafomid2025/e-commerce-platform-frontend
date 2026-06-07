"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import login from "@/lib/actions/auth.action";
import Link from "next/link";
import React, { useActionState } from "react";

function LoginPage() {
  const [state, action] = useActionState(login, {
    data: "",
    success: false,
  });
  if (state.data !== "something went wrong") {
    localStorage.setItem("token", state.data);
  }
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <Card className="w-full max-w-sm">
        <form action={action}>
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                  required
                />
                {state.errors && (
                  <div className="flex gap-3 flex-wrap">
                    {state.errors?.email.map((e: string) => (
                      <div className="text-red-500 text-sm border px-3 rounded-md py-1.5">
                        {e}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" name="password" type="password" required />
                {state.errors && (
                  <div className=" flex gap-4 flex-wrap">
                    {state.errors?.password.map((x: string) => (
                      <div className="text-sm text-red-500 border rounded-md px-3 py-1.5">
                        {x}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              login
            </Button>
            <Button variant="ghost" className="w-full hover:bg-transparent">
              Already Have an acount?{" "}
              <Link className="link underline" href="sign-up">
                Sign Up
              </Link>
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

export default LoginPage;
