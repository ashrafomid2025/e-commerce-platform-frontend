import ProductList from "@/components/shared/products/product-list";
import { getProducts } from "@/lib/actions/product.action";
import React from "react";

async function ProductPage() {
  const products = await getProducts();
  return (
    <div>
      <ProductList productList={products} title="All Products" />
    </div>
  );
}

export default ProductPage;
