import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Bell, PanelRightOpen } from "lucide-react";
import React from "react";
import ToggleTheme from "../header/toggle-mode";

function DashboardHeader({
  setShowText,
  showText,
}: {
  setShowText: any;
  showText: boolean;
}) {
  return (
    <div className="w-full">
      <div className="w-full py-1.5 px-0 flex justify-between ">
        <div className="flex items-center space-x-2.5">
          <PanelRightOpen onClick={() => setShowText(!showText)} />
          <span>Ecommerce App</span>
        </div>
        <div className="flex items-center gap-4 px-3">
          <Input placeholder="Search.." />
          <div className="p-2 border relative rounded-md bg-white dark:bg-black">
            <Bell size={20} />
            <p className="absolute -top-2 px-1.5 rounded-lg text-white bg-red-500 -right-2">
              2
            </p>
          </div>
          <ToggleTheme />
        </div>
      </div>
      <Separator />
    </div>
  );
}

export default DashboardHeader;
