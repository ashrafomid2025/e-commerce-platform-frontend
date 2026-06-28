import {
  ArrowUpRight,
  CircleDollarSign,
  ShoppingBasket,
  Star,
  UserCheck2Icon,
} from "lucide-react";
import React from "react";
import MonthlyReviewsReport from "./MonthlyReviewsReport";

function OverallReport() {
  return (
    <div className="max-w-6xl bg-white dark:bg-gray-800/65 w-full p-5 my-4 mx-auto grid border rounded-2xl grid-cols-1 md:grid-cols-4">
      <div className="md:border-r border-b py-2 border-gray-300">
        <div className="flex flex-col space-y-3">
          <span className="flex gap-1 items-center dark:text-stone-50 text-gray-500 text-sm">
            <CircleDollarSign size={18} /> Monthly Revenue
          </span>
          <span className="text-gray-400 text-xs dark:text-stone-100">
            4000 previous month
          </span>
          <span className="text-2xl font-bold">8000</span>
          <span className="flex gap-1 items-center text-xs">
            <ArrowUpRight size={18} className="text-green-600" /> 24.5% vs
            previous month
          </span>
        </div>
      </div>
      <div className="md:border-r border-b py-2 ml-2 border-gray-300">
        <MonthlyReviewsReport />
      </div>
      <div className="md:border-r border-b py-2 ml-2 border-gray-300">
        <div className="flex flex-col space-y-3">
          <span className="flex gap-1 items-center dark:text-stone-50 text-gray-500 text-sm">
            <UserCheck2Icon size={18} /> New Customer
          </span>
          <span className="text-gray-400 text-xs dark:text-stone-100">
            4000 previous month
          </span>
          <span className="text-2xl font-bold">5000</span>
          <span className="flex gap-1 items-center text-xs">
            <ArrowUpRight size={18} className="text-green-600" /> 40.5% vs
            previous month
          </span>
        </div>
      </div>
      <div className="md:border-r md:border-b-0 border-b py-2 ml-2 border-gray-300">
        <div className="flex flex-col space-y-3">
          <span className="flex gap-1 items-center dark:text-stone-50 text-gray-500 text-sm">
            <ShoppingBasket size={18} /> Total Products
          </span>
          <span className="text-gray-400 text-xs dark:text-stone-100">
            4000 previous month
          </span>
          <span className="text-2xl font-bold">5500</span>
          <span className="flex gap-1 items-center text-xs">
            <ArrowUpRight size={18} className="text-green-600" /> 28.5% vs
            previous month
          </span>
        </div>
      </div>
    </div>
  );
}

export default OverallReport;
