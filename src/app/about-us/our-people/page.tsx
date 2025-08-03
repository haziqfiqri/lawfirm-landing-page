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
              At Chambers of Zainul Rijal (CZAR) and Shariah Chambers of Zainul Rijal (SCZAR), 
              we pride ourselves on a spectrum of legal expertise that is both broad and deep. 
              This allows us to deliver comprehensive and meticulously tailored legal solutions 
              to a diverse clientele, encompassing individuals, businesses, and organisations. 
              Our integrated approach ensures that whether your needs fall squarely within civil 
              litigation, require nuanced Shariah counsel, or bridge aspects of both, you receive 
              cohesive and strategic advice.
              <br />
              <br />
              Our legal teams are not only proficient in established disciplines of law but are also 
              keenly attuned to emerging legal trends and complexities. This commitment to 
              staying at the forefront of legal developments ensures we are thoroughly equipped 
              to navigate even the most intricate and challenging cases with skill, foresight, and 
              unwavering dedication to your best interests. We strive to be your trusted advisors 
              across every facet of your legal journey.
            </p>
          </div>
          <div className="flex flex-col mt-12">
            <div className="flex flex-col mb-12">
              <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
                Organization Chart
              </h1>
            </div>
            <Image
              src={"/assets/section-banners/org_chart.png"}
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
