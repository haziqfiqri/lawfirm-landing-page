import Breadcrumbs from "@/components/breadcrumbs";
import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <React.Fragment>
      <section className="relative flex min-h-64 lg:min-h-96 bg-[url('/assets/section-banners/section-banner-people.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
        <div className="relative px-4 container sm:mx-auto max-w-7xl">
          <div className="flex flex-col h-full justify-center">
            <h1 className="font-tinos-regular font-normal text-4xl text-white">
              Our People
            </h1>
          </div>
        </div>
      </section>
      <div className="container px-4 sm:mx-auto grid grid-cols-1 max-w-7xl">
        <Breadcrumbs items={["Home", "About Us", "Our People"]} />
        <div className="flex flex-col mt-12">
          <div className="flex flex-col">
            <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
              The Heart of CZAR and SCZAR
            </h1>
          </div>
          <div className="flex p-1.5 bg-[#8F6F4C] mt-10">
            <Image
              src={"/assets/section-banners/section-banner-company-team.jpg"}
              width={0}
              height={0}
              sizes="100vw 100vh"
              className="w-full h-full object-cover aspect-video"
              alt={"alt"}
            />
          </div>
          <div className="flex mt-10">
            <p className="font-instrument-sans-regular text-base font-medium text-[#072240] text-justify">
              At CZAR, we believe that our people are our greatest asset. Our
              team is a dynamic blend of seasoned veterans and energetic young
              lawyers, all united by a shared passion for the law and a
              commitment to our clients. The firm is led by the visionary
              Dato&apos; Haji Zainul Rijal bin Abu Bakar, whose extensive
              experience and esteemed reputation provide an unparalleled
              foundation for success. He is ably supported by Muhammad Akmal bin
              Abu Bakar, the Managing Partner, whose fresh perspectives and
              innovative ideas are driving CZAR into the future.
              <br />
              <br />
              Our team of lawyers and Syarie counsel possess in depth knowledge
              and practical experience in their respective fields. They are not
              only skilled advocates but also compassionate advisors, dedicated
              to understanding each client&apos;s unique needs and crafting
              tailored legal solutions. Our dedicated support staff plays a
              vital role in ensuring the smooth operation of the firm. Their
              professionalism, efficiency, and commitment to client service are
              integral to the CZAR experience.
            </p>
          </div>
          <div className="flex flex-col mt-12">
            <div className="flex flex-col mb-12">
              <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
                Organization Chart
              </h1>
            </div>
            <Image
              src={"/assets/section-banners/organization_chart.svg"}
              width={0}
              height={0}
              sizes="100vw 100vh"
              className="w-full h-full object-contain aspect-video"
              alt={"alt"}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
