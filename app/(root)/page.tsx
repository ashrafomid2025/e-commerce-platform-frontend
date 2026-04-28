import Hero from "@/components/Hero";
import ProductList from "@/components/shared/products/product-list";
import { getProducts } from "@/lib/actions/product.action";
import Image from "next/image";

export default async function Home() {
  const products = [
    {
      id: 1,
      name: "iPhone 17",
    },
    {
      id: 2,
      name: "iPhone 12",
    },
    {
      id: 3,
      name: "iPhone 14",
    },
    {
      id: 4,
      name: "iPhone 16",
    },
    {
      id: 5,
      name: "iPhone 9",
    },
  ];
  return (
    <div>
      <Hero />
      <ProductList productList={products} title="Newest Arrivals" />
    </div>
  );
}
