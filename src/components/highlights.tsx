"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  //   CarouselNext,
  //   CarouselPrevious,
} from "@/components/ui/carousel";
import banners from "@/data/banners.json";
import Image from "next/image";

export default function Highlights() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <React.Fragment>
      <section className="flex flex-col gap-4.5">
        <div className="flex justify-center my-12">
          <h1 className="font-tinos-regular font-normal text-4xl text-[#8F6F4C]">
            Latest Highlights
          </h1>
        </div>
        <Carousel
          plugins={[plugin.current]}
          className="w-full mb-12"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {banners.map((item, index) => (
              <CarouselItem key={index}>
                <Card className="rounded-none">
                  <CardContent className="flex w-full h-96 items-center justify-center p-1.5 bg-[#8F6F4C]">
                    <Image
                      src={item.src}
                      width={0}
                      height={0}
                      sizes="100vw 100vh"
                      className="w-full h-full object-cover"
                      alt={item.alt}
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
      </section>
    </React.Fragment>
  );
}
