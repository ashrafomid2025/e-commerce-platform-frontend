import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  LayoutDashboardIcon,
  Package,
  ScanEye,
  ShoppingCart,
  SquareUserRound,
} from "lucide-react";
import Image from "next/image";
import React from "react";

function DashboardSidebar({ showText }: { showText: boolean }) {
  return (
    <Card
      className={`rounded-none ${showText ? "w-3xs" : "w-fit"} transition-all duration-300 bg-stone-50 dark:bg-black flex flex-col justify-between py-1 h-full min-h-screen`}
    >
      <div className="">
        <CardHeader className="px-2 py-2">
          <CardTitle className="flex w-fit gap-2 items-center">
            <Image src="./images/logo.svg" alt="logo" height={30} width={30} />
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
                  Customer
                </span>
              </div>
              <div className="flex space-x-2 items-center w-fit">
                <ShoppingCart />
                <span className={`${showText ? "block" : "hidden"}`}>Cart</span>
              </div>
              <div className="flex space-x-2 items-center w-fit">
                <ScanEye />
                <span className={`${showText ? "block" : "hidden"}`}>
                  Reviews
                </span>
              </div>
            </div>
            <ScrollBar orientation="vertical" />
          </ScrollArea>
        </CardContent>
      </div>
      <div>
        <CardDescription></CardDescription>

        <CardFooter className={`hidden md:block px-1 py-2`}>
          <span className={`text-xs ${showText ? "block" : "hidden"} `}>
            {new Date().getFullYear()} &copy; Sharifi Programming Academy
          </span>
        </CardFooter>
      </div>
    </Card>
  );
}

export default DashboardSidebar;
