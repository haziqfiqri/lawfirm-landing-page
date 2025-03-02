import Breadcrumbs from "@/components/breadcrumbs";
import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <React.Fragment>
      <section className="relative flex min-h-64 lg:min-h-96 bg-[url('/assets/section-banners/section-banner-company.jpg')] bg-cover bg-bottom">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
        <div className="relative px-4 container sm:mx-auto max-w-7xl">
          <div className="flex flex-col h-full justify-center">
            <h1 className="font-tinos-regular font-normal text-4xl text-white">
              Our Company
            </h1>
          </div>
        </div>
      </section>
      <div className="container px-4 sm:mx-auto grid grid-cols-1 max-w-7xl">
        <Breadcrumbs items={["Home", "About Us", "Our Company"]} />
        <div className="flex flex-col mt-12">
          <div className="flex flex-col gap-4">
            <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
              We See The Law Differently.
            </h1>
            <p className="font-instrument-sans-regular text-base font-medium text-[#072240] text-justify">
              Nestled in the bustling hub of Subang Jaya, Selangor Darul Ehsan,
              the esteemed Chambers of Zainul Rijal (CZAR) stands as a beacon of
              legal prowess. Established on June 26, 2020, by the highly
              respected Dato&apos; Haji Zainul Rijal bin Abu Bakar, CZAR carries
              forward a distinguished legacy from its predecessor, Messrs Zainul
              Rijal Talha & Amir, which served with distinction for 24 years
              since 1996.
              <br />
              <br />
              With the addition of Muhammad Akmal bin Abu Bakar as Managing
              Partner, CZAR seamlessly blends its rich heritage with a
              forward-thinking approach. Our team is renowned for its mastery of
              complex legal landscapes, skillfully navigating both civil law and
              the intricate world of Shariah. We have championed justice in
              landmark civil and public interest cases, some of which have
              reached the Federal Court, leaving an indelible mark on legal
              precedent.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row bg-[#E9E2DB] mt-10">
          <div className="w-full lg:w-3/5 h-full aspect-video p-1.5 bg-[#8F6F4C]">
            <Image
              src={"/assets/section-banners/section-banner-company-2.jpg"}
              width={0}
              height={0}
              sizes="100vw 100vh"
              className="w-full h-full object-cover aspect-video"
              alt={"alt"}
            />
          </div>
          <div className="w-full lg:w-2/5 flex flex-col gap-10 justify-center p-6 lg:p-10">
            <div className="flex flex-col gap-3.5">
              <h1 className="font-instrument-sans-regular text-base font-medium text-[#072240] text-justify uppercase tracking-widest">
                Our Vision
              </h1>
              <p className="font-tinos-regular font-normal text-xl text-[#8F6F4C] text-justify tracking-tight">
                To be a leading force in shaping a just and equitable society,
                recognized for our expertise, holistic approach to legal
                solutions, and unwavering commitment to our clients and the
                community.
              </p>
            </div>
            <div className="flex flex-col gap-3.5">
              <h1 className="font-instrument-sans-regular text-base font-medium text-[#072240] text-justify uppercase tracking-widest">
                Our Mission
              </h1>
              <p className="font-tinos-regular font-normal text-xl text-[#8F6F4C] text-justify tracking-tight">
                To provide exceptional legal services with integrity,
                compassion, and innovation, championing justice and empowering
                our clients while upholding the highest ethical standards.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 my-10">
          <div className="flex flex-col gap-4">
            <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
              Our Values
            </h1>
            <p className="font-instrument-sans-regular text-base font-medium text-[#072240] text-justify">
              These principles are not mere words but are the bedrock upon which
              the firm&apos;s practice is built. Every case, every client, and
              every interaction is approached with an unwavering dedication to
              these ideals. The firm&apos;s lawyers are not only legal experts
              but also trusted advisors and compassionate advocates, dedicated
              to achieving the best possible outcomes for those they represent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2.5">
              <h1 className="font-tinos-regular font-normal text-xl text-[#8F6F4C]">
                Integrity
              </h1>
              <p className="font-instrument-sans-regular text-base font-medium text-[#072240] text-justify">
                Upholding honesty, ethics, and trust in every legal endeavor.
              </p>
            </div>
            <div className="flex flex-col gap-2.5">
              <h1 className="font-tinos-regular font-normal text-xl text-[#8F6F4C]">
                Excellence
              </h1>
              <p className="font-instrument-sans-regular text-base font-medium text-[#072240] text-justify">
                Delivering top-tier legal solutions with precision and
                expertise.
              </p>
            </div>
            <div className="flex flex-col gap-2.5">
              <h1 className="font-tinos-regular font-normal text-xl text-[#8F6F4C]">
                Compassion
              </h1>
              <p className="font-instrument-sans-regular text-base font-medium text-[#072240] text-justify">
                Advocating with empathy, understanding, and client-focused care.
              </p>
            </div>
            <div className="flex flex-col gap-2.5">
              <h1 className="font-tinos-regular font-normal text-xl text-[#8F6F4C]">
                Innovation
              </h1>
              <p className="font-instrument-sans-regular text-base font-medium text-[#072240] text-justify">
                Embracing modern solutions to navigate complex legal challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
