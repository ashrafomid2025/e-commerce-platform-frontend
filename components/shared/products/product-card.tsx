import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";

function ProductCard({ product }: { product: any }) {
  return (
    <Card>
      <CardHeader></CardHeader>
      <CardContent>
        <h1>{product.id}</h1>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
