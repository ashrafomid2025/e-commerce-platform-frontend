import React from "react";
import DashboardHeader from "./DashboardHeader";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { PackagePlus } from "lucide-react";
import ProductForm from "./ProductForm";
import AllUsers from "./all-users";

function CustomerMainSection({
  showText,
  setShowText,
}: {
  showText: boolean;
  setShowText: any;
}) {
  return (
    <div className="w-full flex flex-col">
      <DashboardHeader showText={showText} setShowText={setShowText} />
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-5xl mx-auto  p-5 border-gray-300 rounded-md dark:border-gray-100 ">
          <AllUsers />
        </div>
      </div>
    </div>
  );
}

export default CustomerMainSection;
