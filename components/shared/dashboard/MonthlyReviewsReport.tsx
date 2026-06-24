"use client";
import { ArrowUpRight, Star } from "lucide-react";
import React, { useEffect, useState } from "react";

function MonthlyReviewsReport() {
  const [currentMonthReport, setCurrentMonthReport] = useState<{
    reviews: number;
  }>({ reviews: 0 });
  const [previousMonthReviewsCount, setPreviousMonthReviewsCount] = useState<{
    allPreviousMonthReviews: number;
  }>({ allPreviousMonthReviews: 0 });
  useEffect(() => {
    async function getPreviousMonthReport() {
      const data = await fetch(
        "http://localhost:8000/api/dashboard/previous-month-reviews",
      );
      const response = await data.json();
      setPreviousMonthReviewsCount(response);
    }

    async function getReportOfReview() {
      const data = await fetch(
        "http://localhost:8000/api/dashboard/all-reviews",
        {
          method: "GET",
          headers: {
            accept: "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );
      const response = await data.json();
      return response;
    }
    async function currentReports() {
      const data = await getReportOfReview();
      setCurrentMonthReport(data);
    }
    currentReports();
    getPreviousMonthReport();
  }, []);
  return (
    <div className="flex flex-col space-y-3">
      <span className="flex gap-1 items-center dark:text-stone-50 text-gray-500 text-sm">
        <Star size={18} /> Reviewed Products
      </span>
      <span className="text-gray-400 text-xs dark:text-stone-100">
        {previousMonthReviewsCount.allPreviousMonthReviews} previous month
      </span>
      <span className="text-2xl font-bold">{currentMonthReport.reviews}</span>
      <span className="flex gap-1 items-center text-xs">
        <ArrowUpRight size={18} className="text-green-600" /> 55.5% vs previous
        month
      </span>
    </div>
  );
}

export default MonthlyReviewsReport;
