import Breadcrumbs from "@/components/breadcrumbs";
import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <React.Fragment>
      <section className="relative flex min-h-64 lg:min-h-96 bg-[url('/assets/section-banners/section-banner-founder.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
        <div className="relative px-4 container sm:mx-auto max-w-7xl">
          <div className="flex flex-col h-full justify-center">
            <h1 className="font-tinos-regular font-normal text-4xl text-white">
              Meet Founder
            </h1>
          </div>
        </div>
      </section>
      <div className="container px-4 sm:mx-auto grid grid-cols-1 max-w-7xl">
        <Breadcrumbs items={["Home", "About Us", "Meet Founder"]} />
        <div className="flex flex-col-reverse lg:flex-row gap-10 my-10">
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
              Dato&apos; Haji Zainul Rijal Bin Abu Bakar
            </h1>
            <p className="font-instrument-sans-regular text-base font-medium text-[#072240] text-justify">
              It is with great pleasure that I present the Chambers of Zainul
              Rijal (CZAR), a firm that stands as a testament to a lifelong
              commitment to the law and the pursuit of justice. Having founded
              Messrs Zainul Rijal Talha & Amir in 1996, I have witnessed the
              evolution of the legal landscape in Malaysia, and it is with this
              experience and foresight that CZAR was established in 2020.
              <br />
              <br />
              CZAR represents a continuation of the values that have guided my
              career: unwavering integrity, a commitment to excellence, and a
              deep compassion for those we serve. We believe in upholding the
              highest ethical standards while providing our clients with the
              best possible legal representation. But more than that, we believe
              in a holistic approach to justice, one that recognizes the
              complexities of human relationships and the need for solutions
              that go beyond the adversarial.
              <br />
              <br />
              Muhammad Akmal bin Abu Bakar as Managing Partner brings a fresh
              perspective and a dynamic energy to the firm. His dedication and
              keen legal mind complement our established foundation, ensuring
              that CZAR remains at the forefront of legal innovation.
              <br />
              <br />
              At CZAR, we understand that the law is not merely a set of rules,
              but a powerful instrument for positive change. We are committed to
              using our expertise to serve our clients, to mentor the next
              generation of legal professionals, and to contribute to a more
              just and equitable society. We see the law differently, and we
              invite you to experience the difference that this vision makes.
            </p>
            <div className="flex flex-col gap-2.5 mt-4">
              <h1 className="font-tinos-regular font-normal text-base text-[#8F6F4C]">
                Founder & Partner Principal
              </h1>
              <Image
                src="/signature.svg"
                width={0}
                height={0}
                sizes="100vw 100vh"
                className="w-52 h-full object-contain"
                alt=""
                loading="lazy"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex">
            <Image
              src={
                "/assets/teams-png/DATO_HAJI_ZAINUL_RIJAL_BIN_ABU_BAKAR_FULL.png"
              }
              width={0}
              height={0}
              sizes="100vw 100vh"
              className="w-full h-full object-contain"
              alt={"alt"}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
