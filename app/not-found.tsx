import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/constants";
import Image from "next/image";
import React from "react";

function NotFound() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="shodaw-md border py-4 px-8 flex flex-col items-center space-y-3.5 rounded-md">
        <Image src="/images/logo.svg" alt={APP_NAME} height={52} width={52} />
        <p className="text-destructive text-base font-medium">Not Found</p>
        <p className="text-xs ">The Page you are looking for is not Found.</p>
        <Button variant="default">Go to Home</Button>
      </div>
    </div>
  );
}

export default NotFound;
