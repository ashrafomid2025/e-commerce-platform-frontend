import { getProducts } from "@/lib/actions/product.action";
import Image from "next/image";

export default async function Home() {
  const products = await getProducts();

  return (
    <div>
      <p>Latest Arrivals</p>
    </div>
  );
}
