"use client";

import React from "react";
import { Search as SearchIcon } from "lucide-react";

export default function Search({
  onSearchChange,
  placeholder,
}: {
  onSearchChange: (query: string) => void;
  placeholder: string;
}) {
  return (
    <React.Fragment>
      <div className="flex justify-center items-center w-full mt-12 py-12 px-4 bg-[#E9E2DB]">
        <div className="container px-4 sm:mx-auto flex max-w-7xl">
          <div className="flex w-full relative">
            <input
              type="text"
              placeholder={placeholder || "Enter keyword"}
              className="w-full px-4 py-2 border border-[#8F6F4C] placeholder:text-[#072240] font-instrument-sans-regular text-base font-medium"
              onChange={(e) => onSearchChange(e.target.value)}
            />
            <SearchIcon
              className="absolute right-2 top-2.5 text-[#8F6F4C]"
              size={20}
              strokeWidth={1.3}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
