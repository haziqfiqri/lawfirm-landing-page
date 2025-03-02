import Breadcrumbs from "@/components/breadcrumbs";
// import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import news from "@/data/news.json";

export default function Page() {
  return (
    <React.Fragment>
      <section className="relative flex min-h-64 lg:min-h-96 bg-[url('/assets/section-banners/section-banner-blog.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
        <div className="relative px-4 container sm:mx-auto max-w-7xl">
          <div className="flex flex-col h-full justify-center">
            <h1 className="font-tinos-regular font-normal text-4xl text-white">
              Latest Insights
            </h1>
          </div>
        </div>
      </section>
      <div className="bg-[#F6F3F1]">
        <div className="container px-4 sm:mx-auto grid grid-cols-1 max-w-7xl bg-[#F6F3F1]">
          <Breadcrumbs items={["Home", "Latest Insights"]} />

          <div className="flex flex-col lg:flex-row my-12">
            <div className="w-full lg:w-1/4 flex flex-col gap-4 mb-10 lg:mb-0">
              <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
                Category
              </h1>
              <div className="flex flex-row flex-wrap gap-4 lg:flex-col lg:gap-4">
                <Button className="border-0 shadow-none justify-start p-0 text-[#072240] font-instrument-sans-regular text-base font-medium">
                  <span className="pb-3 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#8F6F4C] after:transition-all after:duration-300 hover:after:w-full">
                    All Articles
                  </span>
                </Button>
                <Button className="border-0 shadow-none justify-start p-0 text-[#072240] font-instrument-sans-regular text-base font-medium">
                  <span className="pb-3 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#8F6F4C] after:transition-all after:duration-300 hover:after:w-full">
                    External Articles
                  </span>
                </Button>
                <Button className="border-0 shadow-none justify-start p-0 text-[#072240] font-instrument-sans-regular text-base font-medium">
                  <span className="pb-3 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#8F6F4C] after:transition-all after:duration-300 hover:after:w-full">
                    Website Articles
                  </span>
                </Button>
              </div>
            </div>
            <div className="w-full lg:w-3/4 flex flex-col gap-10">
              {news.map((item, index) => (
                <div
                  className="flex flex-col md:flex-row gap-4 w-fit"
                  key={index}
                >
                  <div className="aspect-video p-1.5 bg-[#8F6F4C]">
                    <Image
                      src={item.src}
                      width={0}
                      height={0}
                      sizes="100vw 100vh"
                      className="min-w-full min-h-full md:min-w-80 md:min-h-60 object-cover aspect-video"
                      alt={item.alt}
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <h1 className="font-tinos-regular font-normal text-xl text-[#8F6F4C] line-clamp-2">
                      {item.title}
                    </h1>
                    <p className="font-instrument-sans-regular text-base font-normal text-[#072240] line-clamp-3">
                      {item.description}
                    </p>
                    <button className="py-1.5 w-fit font-tinos-regular text-sm font-light text-[#8F6F4C] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#072240] after:transition-all after:duration-300 group-hover:after:w-full">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
