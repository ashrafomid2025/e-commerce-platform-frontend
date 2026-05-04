import AllProductList from "@/components/shared/products/all-product-list";

import { getProducts } from "@/lib/actions/product.action";
import React from "react";

async function ProductPage() {
  return (
    <div>
      <AllProductList title="All Products" />
    </div>
  );
}

export default ProductPage;
