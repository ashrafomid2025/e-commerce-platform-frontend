import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductPrice from "./product-price";

function ProductCard({ product }: { product: any }) {
  console.log(product.images[0].img_url);
  return (
    <Card>
      <CardHeader className="p-0 h-72">
        <Link href={`products/${product.id}`}>
          <Image
            src={`http://localhost:8000/storage/${product.images[0].img_url}`}
            alt={product.name}
            className="h-full w-full object-cover"
            height={300}
            width={300}
            unoptimized
          />
        </Link>
      </CardHeader>
      <CardContent className="px-4 flex flex-col gap-1.5">
        <span className="text-xs font-normal"> {product.brand}</span>
        <span className="text-sm font-medium">{product.name}</span>
        <div className="flex justify-between items-center space-y-2">
          <span>4/5 Stars</span>
          <ProductPrice price={product.price.toString()} />
        </div>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
