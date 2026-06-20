"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { LayoutDashboardIcon, Package, SquareUserRound } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

function page() {
  const [showText, setShowText] = useState(true);
  return (
    <div className="w-full min-h-screen flex justify-between">
      <div className="max-w-3xs w-full h-full">
        <Card className="rounded-none   flex flex-col justify-between py-1 h-full min-h-screen">
          <div className="">
            <CardHeader className="px-2 py-2">
              <CardTitle className="flex w-fit gap-2 items-center">
                <Image
                  src="./images/logo.svg"
                  alt="logo"
                  height={30}
                  width={30}
                />
                <span
                  className={`${showText ? "block" : "hidden"} text-xl font-bold`}
                >
                  Prostore
                </span>
              </CardTitle>
            </CardHeader>
            <Separator />
            <CardContent className="p-0 px-2 mt-4">
              <ScrollArea>
                <div className="flex flex-col space-y-4">
                  <div className="flex space-x-2 items-center w-fit">
                    <LayoutDashboardIcon />
                    <span className={`${showText ? "block" : "hidden"}`}>
                      Dashboard
                    </span>
                  </div>
                  <div className="flex space-x-2 items-center w-fit">
                    <Package />
                    <span className={`${showText ? "block" : "hidden"}`}>
                      Products
                    </span>
                  </div>
                  <div className="flex space-x-2 items-center w-fit">
                    <SquareUserRound />
                    <span className={`${showText ? "block" : "hidden"}`}>
                      Customers
                    </span>
                  </div>
                  <div className="flex space-x-2 items-center w-fit">
                    <LayoutDashboardIcon />
                    <span className={`${showText ? "block" : "hidden"}`}>
                      Manage Users
                    </span>
                  </div>
                  <div className="flex space-x-2 items-center w-fit">
                    <LayoutDashboardIcon />
                    <span className={`${showText ? "block" : "hidden"}`}></span>
                  </div>
                </div>
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </CardContent>
          </div>
          <div>
            <CardDescription></CardDescription>

            <CardFooter className="">
              <span className="text-xs">Dashboard build with shadcn</span>
            </CardFooter>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default page;
