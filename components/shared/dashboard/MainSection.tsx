import React from "react";
import DashboardHeader from "./DashboardHeader";
import OverallReport from "./OverallReport";

function MainSection({
  setShowText,
  showText,
}: {
  setShowText: any;
  showText: boolean;
}) {
  return (
    <div className="w-full flex flex-col ">
      <DashboardHeader setShowText={setShowText} showText={showText} />
      <div className="px-5">
        <OverallReport />
      </div>
    </div>
  );
}

export default MainSection;
