import React from "react";
import ProductCard from "./product-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function ProductList({
  limit,
  productList,
  title,
}: {
  limit?: number;
  productList: any;
  title?: string;
}) {
  const totalPage = productList.meta.last_page;
  console.log(totalPage);
  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">{title ? title : "New Arrivals"}</h2>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productList.data.length > 0 &&
          productList.data
            .slice(0, limit ? limit : productList.data.length)
            .map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
      {productList.meta.links.map((btn: any) => (
        <Link href="" key={btn.label}>
          <Button>{btn.label}</Button>
        </Link>
      ))}
      <div className="w-full flex my-4 justify-center">
        {/* <Button>View All Products</Button> */}
      </div>
    </div>
  );
}

export default ProductList;
