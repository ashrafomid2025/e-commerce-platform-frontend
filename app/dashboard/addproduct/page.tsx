"use client";
import AddProductMainSection from "@/components/shared/dashboard/AddProductMainSection";
import MainSection from "@/components/shared/dashboard/MainSection";
import DashboardSidebar from "@/components/shared/dashboard/Sidebar";

import React, { useState } from "react";

function AddProductPage() {
  const [showText, setShowText] = useState(true);
  return (
    <div className="w-full bg-stone-50 dark:bg-black min-h-screen flex justify-start gap-1">
      <div className={`${showText ? "w-3xs hidden md:block " : "w-fit"}`}>
        <DashboardSidebar showText={showText} />
      </div>
      <AddProductMainSection showText={showText} setShowText={setShowText} />
    </div>
  );
}

export default AddProductPage;
