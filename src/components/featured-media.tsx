import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function FeaturedMedia() {
  return (
    <React.Fragment>
      <section className="flex flex-col gap-4.5">
        <div className="flex justify-center my-12">
          <h1 className="font-tinos-regular font-normal text-4xl text-[#8F6F4C]">
            Featured In Media
          </h1>
        </div>
        <Marquee
          className="mb-12"
          autoFill={true}
          loop={0}
          gradient={true}
          gradientColor="rgb(255, 255, 255)"
        >
          <div className="flex gap-10 pl-10">
            <Image
              src="/assets/medias/tv_1.webp"
              width={120}
              height={120}
              className="object-contain"
              alt="media"
            />
            <Image
              src="/assets/medias/tv_2.webp"
              width={120}
              height={120}
              className="object-contain"
              alt="media"
            />
            <Image
              src="/assets/medias/tv_3.webp"
              width={120}
              height={120}
              className="object-contain"
              alt="media"
            />
            <Image
              src="/assets/medias/tv_4.webp"
              width={120}
              height={120}
              className="object-contain"
              alt="media"
            />
            <Image
              src="/assets/medias/tv_5.webp"
              width={120}
              height={120}
              className="object-contain"
              alt="media"
            />
            <Image
              src="/assets/medias/tv_6.png"
              width={120}
              height={120}
              className="object-contain"
              alt="media"
            />
          </div>
        </Marquee>
      </section>
    </React.Fragment>
  );
}
