import React from "react";
import DashboardHeader from "./DashboardHeader";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { PackagePlus } from "lucide-react";

function AddProductMainSection({
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
        <div className="w-full max-w-5xl mx-auto border p-5 border-gray-300 rounded-md dark:border-gray-100 ">
          <div className="flex w-full flex-col items-center">
            <PackagePlus size={32} />
            <h1 className="text-3xl my-4 font-semibold text-gray-400 dark:text-stone-100">
              Add New Products
            </h1>
          </div>
          <form action="">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="product_name">Product Name</Label>
                <Input
                  type="text"
                  id="product_name"
                  placeholder="Product name"
                  name="product_name"
                />
              </div>
              <div className="flex flex-col gap-3">
                <Label htmlFor="product_price">Product Name</Label>
                <Input
                  type="number"
                  id="product_price"
                  placeholder="Product price"
                  name="product_price"
                />
              </div>
              <div className="flex flex-col gap-3">
                <Label htmlFor="product_name">Stock</Label>
                <Input
                  type="number"
                  id="product_stock"
                  placeholder="product stock"
                  name="product_brand"
                />
              </div>
              <div className="flex flex-col gap-3">
                <Label htmlFor="product_name">Man Date</Label>
                <Input
                  type="date"
                  id="product_man_date"
                  placeholder="Product manafacturer date"
                  name="product_man_date"
                />
              </div>
              <div className="flex flex-col gap-3">
                <Label htmlFor="product_expire_date">Expire Date Name</Label>
                <Input
                  type="date"
                  id="product_expire_date"
                  placeholder="Product Expire date"
                  name="product_expire_date"
                />
              </div>
            </div>
            <div className="w-full flex justify-center  my-4">
              <Button type="submit" variant="outline" className="px-12">
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProductMainSection;
