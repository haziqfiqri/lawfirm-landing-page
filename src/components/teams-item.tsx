import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface ITeamsItem {
  id?: string;
  name: string;
  role: string;
  source: string | null;
  practices: Array<string>;
  languages: Array<string>;
  qualifications: Array<string>;
}

export default function TeamsItem({ item }: { item: ITeamsItem }) {
  return (
    <React.Fragment>
      <div className="flex flex-col gap-4">
        <div className="bg-[#F1E7DD]">
          <Image
            src={item.source ?? "/assets/teams-png/default-team.png"}
            width={0}
            height={0}
            sizes="100vw 100vh"
            className="w-full h-full object-contain"
            alt={item.name}
          />
        </div>
        <div className="flex flex-col">
          <h1 className="font-tinos-regular font-normal text-xl text-[#072240] line-clamp-2">
            {item.name}
          </h1>
          <p className="font-instrument-sans-regular text-base font-normal text-[#072240] line-clamp-3">
            {item.role}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Link href={`/our-services/find-our-experts/profile/${item.id}`}>
            <button
              className="
                w-full
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
              <span className="relative z-10">View Profile</span>
            </button>
          </Link>
          {/* <button
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
            <span className="relative z-10">Make Appointment</span>
          </button> */}
        </div>
      </div>
    </React.Fragment>
  );
}
