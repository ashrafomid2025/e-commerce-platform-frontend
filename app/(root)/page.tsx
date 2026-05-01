import Hero from "@/components/Hero";
import ProductList from "@/components/shared/products/product-list";
import { getProducts } from "@/lib/actions/product.action";
import Image from "next/image";

export default async function Home() {
  const products = await getProducts();
  console.log(products);
  return (
    <div>
      <Hero />
      <ProductList productList={products} title="Newest Arrivals" />
    </div>
  );
}
