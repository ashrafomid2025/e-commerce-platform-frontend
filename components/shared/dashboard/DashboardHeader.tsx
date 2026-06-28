"use client";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Bell,
  LayoutDashboardIcon,
  Menu,
  Package,
  PanelRightOpen,
  ScanEye,
  ShoppingCart,
  SquareUserRound,
  X,
} from "lucide-react";
import React, { useState } from "react";
import ToggleTheme from "../header/toggle-mode";
import Image from "next/image";
import Link from "next/link";

function DashboardHeader({
  setShowText,
  showText,
}: {
  setShowText: any;
  showText: boolean;
}) {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="w-full px-4 md:px-0">
      <div className="w-full md:py-1.5 py-2.5 px-0 flex justify-between ">
        <div className="flex items-center space-x-2.5">
          <PanelRightOpen onClick={() => setShowText(!showText)} />
          <span>Ecommerce App</span>
        </div>
        <div className="md:flex hidden items-center gap-4 px-3">
          <Input placeholder="Search.." />
          <div className="p-2 border relative rounded-md bg-white dark:bg-black">
            <Bell size={20} />
            <p className="absolute -top-2 px-1.5 rounded-lg text-white bg-red-500 -right-2">
              2
            </p>
          </div>
          <ToggleTheme />
        </div>
        <div className="md:hidden">
          <Menu onClick={() => setNavOpen(true)} />
        </div>
      </div>
      <Separator />
      <div
        className={`absolute bg-white/50 backdrop-blur-md ${navOpen ? "flex" : "hidden"} flex-col px-4 py-8 top-0 left-0 w-full min-h-screen`}
      >
        <div className="w-full flex pb-2 items-center justify-between">
          <Image
            src="./images/logo.svg"
            alt="logo"
            className="w-12 h-12
          "
            height={80}
            width={80}
          />
          <div className="flex gap-2 items-center">
            <ToggleTheme />
            <X onClick={() => setNavOpen(false)} />
          </div>
        </div>
        <Separator />
        <div className="flex flex-col gap-4">
          <Link href="" className="flex space-x-2 items-center w-fit">
            <LayoutDashboardIcon />
            <span className={`${showText ? "block" : "hidden"}`}>
              Dashboard
            </span>
          </Link>
          <Link href="" className="flex space-x-2 items-center w-fit">
            <Package />
            <span
              className={`${showText ? "block" : "hidden"} hover:text-black/60`}
            >
              Products
            </span>
          </Link>
          <div className="flex space-x-2 items-center w-fit">
            <SquareUserRound />
            <span className={`${showText ? "block" : "hidden"}`}>Customer</span>
          </div>
          <div className="flex space-x-2 items-center w-fit">
            <ShoppingCart />
            <span className={`${showText ? "block" : "hidden"}`}>Cart</span>
          </div>
          <div className="flex space-x-2 items-center w-fit">
            <ScanEye />
            <span className={`${showText ? "block" : "hidden"}`}>Reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
