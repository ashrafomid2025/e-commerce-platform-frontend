import Image from "next/image";
import React from "react";

function Loading() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image src="/loader.gif" alt="please wait ..." height={100} width={100} />
    </div>
  );
}

export default Loading;
