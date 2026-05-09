"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./product-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getAllProducts, getProducts } from "@/lib/actions/product.action";
import { ProductInfo } from "@/types";

function AllProductList({
  limit,

  title,
}: {
  limit?: number;
  title?: string;
}) {
  const [link, setLink] = useState("http://localhost:8000/api/products?page=1");
  const [list, setList] = useState<any>([]);

  useEffect(() => {
    async function getData() {
      const products = await getAllProducts(link);
      setList(products);
    }
    getData();
  }, [link]);

  console.log(link);
  if (list.length == 0) {
    return null;
  }
  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">{title ? title : "New Arrivals"}</h2>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {list.data.length > 0 &&
          list.data.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
      <div className="w-full pt-4 md:pt-6 max-w-md mx-auto flex justify-between items-center">
        {list.meta.links.map((link: any) => (
          <Button
            onClick={() =>
              setLink(
                link.url
                  ? link.url
                  : `http://localhost:8000/api/products?page=${list.meta.current_page}`,
              )
            }
            key={link.label}
            variant={link.active ? "default" : "outline"}
            dangerouslySetInnerHTML={{ __html: link.label }}
          />
        ))}
      </div>
    </div>
  );
}

export default AllProductList;
