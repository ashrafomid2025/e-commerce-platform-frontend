import Hero from "@/components/Hero";
import { getProducts } from "@/lib/actions/product.action";
import Image from "next/image";

export default async function Home() {
  return (
    <div>
      <Hero />
    </div>
  );
}
