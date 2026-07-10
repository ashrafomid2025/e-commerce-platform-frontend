"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { storeProduct } from "@/lib/actions/product.action";
import React, { useActionState } from "react";

function ProductForm() {
  const [data, action] = useActionState(storeProduct, {
    data: "",
    status: false,
  });

  if (data.data) {
    console.log(data.data);
  }
  return (
    <form action={action} encType={"multipart/form-data"}>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="product_name">Product Name</Label>
          <Input
            type="text"
            id="product_name"
            placeholder="Product name"
            name="name"
          />
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="product_price">Product Price</Label>
          <Input
            type="number"
            id="product_price"
            placeholder="Product price"
            name="price"
          />
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="product_stock">Stock</Label>
          <Input
            type="number"
            id="product_stock"
            placeholder="product stock"
            name="stock"
          />
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="product_name">Man Date</Label>
          <Input
            type="date"
            id="product_man_date"
            placeholder="Product manafacturer date"
            name="man_date"
          />
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="product_expire_date">Expire Date Name</Label>
          <Input
            type="date"
            id="product_expire_date"
            placeholder="Product Expire date"
            name="expire_date"
          />
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="product_brand">Brand</Label>
          <Input
            type="text"
            id="product_brand"
            placeholder="Product brand/company"
            name="brand"
          />
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="product_category">Product Category</Label>
          <Input
            type="text"
            id="product_category"
            placeholder="Product Expire date"
            name="category"
          />
        </div>

        <div className="flex flex-col gap-3">
          <Label htmlFor="product_image1">Product Image 1</Label>
          <Input
            type="file"
            accept="image/*"
            id="product_image1"
            name="img_url1"
          />
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="product_image2">Product Image 2</Label>
          <Input
            type="file"
            id="product_image2"
            accept="image/*"
            name="img_url2"
          />
        </div>

        <div className="flex flex-col gap-3">
          <Label htmlFor="product_description">Product Description</Label>
          <Textarea
            className="w-full h-32 resize-none"
            id="product_description"
            placeholder="Product product Description"
            name="description"
          />
        </div>
      </div>
      <div className="w-full flex justify-center  my-4">
        <Button type="submit" variant="outline" className="px-12">
          Save
        </Button>
      </div>
    </form>
  );
}

export default ProductForm;
