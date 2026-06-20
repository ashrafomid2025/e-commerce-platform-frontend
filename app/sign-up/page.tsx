"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUp } from "@/lib/actions/auth.action";
import { useRouter } from "next/navigation";
import React, { useActionState } from "react";

function page() {
  const [data, func, pending] = useActionState(signUp, {
    message: "",
    success: false,
  });
  const router = useRouter();
  if (data.success) {
    localStorage.setItem("token", data.message.message);

    router.push("/");
  }
  return (
    <div className="w-full min-h-screen p-4 flex justify-center items-center">
      <Card className="w-full md:w-5/12 lg:w-4/12">
        <CardHeader>
          <CardTitle>
            <span className="font-bold md:text-2xl uppercase">
              Sign Up new user
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form action={func} className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">name</Label>
              <Input id="name" name="name" type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">email</Label>
              <Input type="email" id="email" name="email" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" name="password" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
              />
              {!data.success && data.message == "not match" && (
                <div>
                  <span className="text-sm text-red-500">
                    The passwords not matched
                  </span>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                type="text"
                id="phoneNumber"
                name="phone_number"
                className="w-full"
              />
            </div>
            <Button disabled={pending} type="submit">
              {pending ? "Signing Up..." : "Sign Up"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default page;
