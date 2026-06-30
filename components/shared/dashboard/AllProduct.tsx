"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchAllProducts } from "@/lib/actions/product.action";
import React, { useEffect, useState } from "react";

function AllProduct() {
  const [products, setProducts] = useState<
    | {
        id: number;
        man_date: Date;
        expire_date: Date;
        name: string;
        price: number;
        productDetails: {};
      }[]
    | null
  >(null);
  useEffect(() => {
    async function getProducts() {
      const data = await fetchAllProducts();

      setProducts(data);
    }
    getProducts();
  }, []);
  if (!products) {
    return;
  }
  return (
    <div className="max-w-6xl overflow-x-auto mx-auto">
      <Table className="w-full">
        <TableCaption>All products</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Manafacturer Date</TableHead>
            <TableHead>Expire Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((x) => {
            return (
              <TableRow key={x.id}>
                <TableCell>{x.name}</TableCell>
                <TableCell>{x.price}</TableCell>
                <TableCell>{x.man_date.toString()}</TableCell>
                <TableCell>{x.expire_date.toString()}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default AllProduct;
