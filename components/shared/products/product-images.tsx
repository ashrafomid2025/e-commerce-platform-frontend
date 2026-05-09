"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";

function ProductImages({ images }: { images: any[] }) {
  const [imageIndex, setImageIndex] = useState<number>(0);
  return (
    <div className="w-full space-y-4">
      <div className="w-full h-80">
        <Image
          src={`http://localhost:8000/storage/${images[imageIndex].img_url}`}
          alt={images[imageIndex]}
          height={300}
          width={300}
          className="w-full h-full object-fill"
          unoptimized
        />
      </div>
      <div className="flex gap-2.5">
        <Image
          src={`http://localhost:8000/storage/${images[0].img_url}`}
          onClick={() => setImageIndex(0)}
          alt=""
          className={cn(
            "rounded-md border-2 w-28 h-28",
            imageIndex === 0 ? "border-orange-400 " : "",
          )}
          height={100}
          width={100}
          unoptimized
        />
        <Image
          src={`http://localhost:8000/storage/${images[1].img_url}`}
          onClick={() => setImageIndex(1)}
          alt=""
          className={cn(
            "rounded-md border-2 w-28 h-28",
            imageIndex === 1 ? "border-orange-400 " : "",
          )}
          height={100}
          width={100}
          unoptimized
        />
      </div>
    </div>
  );
}

export default ProductImages;
