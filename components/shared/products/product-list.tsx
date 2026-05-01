import React from "react";
import ProductCard from "./product-card";

function ProductList({
  productList,
  title,
}: {
  productList: any;
  title?: string;
}) {
  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">{title ? title : "New Arrivals"}</h2>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productList.data.length > 0 &&
          productList.data.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

export default ProductList;
