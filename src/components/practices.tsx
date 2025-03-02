"use client";

import React, { useEffect, useState } from "react";
import ServicesItem from "./services-item";
import services from "@/data/services.json";
import Link from "next/link";

export default function Practices() {
  const [displayCount, setDisplayCount] = useState(3);

  useEffect(() => {
    const updateDisplayCount = () => {
      if (window.innerWidth >= 1024) {
        setDisplayCount(6);
      } else if (window.innerWidth >= 768) {
        setDisplayCount(4);
      } else {
        setDisplayCount(4);
      }
    };

    updateDisplayCount();

    window.addEventListener("resize", updateDisplayCount);

    return () => window.removeEventListener("resize", updateDisplayCount);
  }, []);

  return (
    <React.Fragment>
      <section className="flex flex-col gap-4.5">
        <div className="flex justify-center my-12">
          <h1 className="font-tinos-regular font-normal text-4xl text-[#8F6F4C]">
            Legal Practice Areas
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-y-5 gap-x-8">
          {services.slice(0, displayCount).map((item, index) => (
            <ServicesItem item={item} key={index} />
          ))}
        </div>
        <Link
          href={"/our-services/legal-practices"}
          className="self-center my-12"
        >
          <button
            className="
                font-instrument-sans-regular 
                text-base 
                font-normal 
                text-white 
                px-6 
                py-3 
                relative 
                overflow-hidden 
                bg-gradient-to-br 
                from-[#8F6F4C] 
                to-[#CC9E52]
                transition-all 
                duration-300
                hover:text-white
                after:absolute 
                after:bottom-0 
                after:left-0 
                after:h-full 
                after:w-0 
                after:bg-[#072240] 
                after:transition-all 
                after:duration-300 
                hover:after:w-full
              "
          >
            <span className="relative z-10">View All Practice Areas</span>
          </button>
        </Link>
      </section>
    </React.Fragment>
  );
}
