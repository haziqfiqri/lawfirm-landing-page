import React from "react";
import { ITeamsItem } from "./teams-item";
import Image from "next/image";
// import Link from "next/link";

export default function ProfileHero({ data }: { data: ITeamsItem }) {
  return (
    <React.Fragment>
      <div className="flex w-full bg-[#F1E7DD] pt-12">
        <div className="container px-4 sm:mx-auto max-w-7xl grid grid-cols-1">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 flex">
              <Image
                src={data.source ?? "/assets/teams-png/default-team.png"}
                width={0}
                height={0}
                sizes="100vw 100vh"
                className="w-full min-h-96 object-contain aspect-video"
                alt={data.name}
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center gap-6">
              <div className="flex flex-col gap-2.5">
                <h1 className="font-tinos-regular font-normal text-3xl text-[#8F6F4C]">
                  {data.name}
                </h1>
                <p className="font-tinos-regular text-3xl font-medium text-[#072240]">
                  {data.role}
                </p>
              </div>
              {/* <div className="flex gap-4">
                <Link
                  href={`/our-services/find-a-lawyer/profile/${data.id}`}
                  className="w-full"
                >
                  <button
                    className="
                            w-full
                            font-instrument-sans-regular 
                            text-base 
                            font-semibold 
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
                    disabled
                  >
                    <span className="relative z-10">Make Appointment</span>
                  </button>
                </Link>
                <Link
                  target="_blank"
                  href={
                    "https://ul.waze.com/ul?place=ChIJE8_p1UdNzDERASwypBD_3HU&ll=3.04608010%2C101.58766070&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
                  }
                  className="w-full"
                >
                  <button
                    className="
                        w-full
                        font-instrument-sans-regular 
                        text-base 
                        font-semibold
                        border border-[#8F6F4C]
                        text-[#8F6F4C]
                        px-6 
                        py-3 
                        relative 
                        overflow-hidden 
                        bg-white
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
                    disabled
                  >
                    <span className="relative z-10">Whatsapp</span>
                  </button>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
