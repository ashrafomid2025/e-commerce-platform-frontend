"use client";
import React, { useState } from "react";
import { Input } from "../../ui/input";
import { div } from "framer-motion/client";

function SearchInput() {
  const [value, setValue] = useState("");
  return (
    <div className="w-full">
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Seach Products"
      />
    </div>
  );
}

export default SearchInput;
