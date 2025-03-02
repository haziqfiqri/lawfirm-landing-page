import React from "react";
import contacts from "@/data/contacts.json";
import { Printer, Clock, LucideIcon, Scale, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function OfficeLocation() {
  const iconMap: Record<string, LucideIcon> = {
    Clock: Clock,
    Printer: Printer,
    Mail: Mail,
    Phone: Phone,
  };
  return (
    <React.Fragment>
      <section className="flex flex-col gap-10 lg:flex-row lg:gap-0 my-12">
        <div className="w-full lg:w-1/3 flex flex-col gap-4">
          <h1 className="font-tinos-regular font-normal text-3xl text-[#8F6F4C]">
            Chambers of Zainul Rijal Address
          </h1>
          <p className="font-instrument-sans-regular text-base font-medium text-[#072240]">
            No. 15-5 Floor Jalan USJ 9/5Q, Subang Business Centre, 47620 UEP
            Subang Jaya Selangor, Malaysia
          </p>
          <p className="font-instrument-sans-regular text-base font-medium text-[#072240]">
            Mon – Fri (9.00 AM - 5 PM) / Sat (10.00 AM - 2.00 PM)
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              target="_blank"
              href={
                "https://www.google.com/maps/dir//czarlaw/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x31cc4d47d5e9cf13:0x75dcff10a4322c01?sa=X&ved=1t:3061&ictx=111"
              }
              className="w-full"
            >
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
                <span className="relative z-10">Google Maps</span>
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
                <span className="relative z-10">Waze</span>
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-2/3 grid grid-cols-1 space-y-4 sm:space-y-0 sm:grid-cols-2 lg:grid-cols-3">
          {contacts.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Scale;
            return (
              <div
                className="flex flex-col gap-4 items-center text-center"
                key={index}
              >
                <IconComponent
                  className="text-xl text-[#8F6F4C]"
                  size={55}
                  strokeWidth={1}
                />
                <h1 className="font-tinos-regular font-normal text-xl text-[#8F6F4C]">
                  {item.point}
                </h1>
                <p className="font-instrument-sans-regular text-base font-medium text-[#072240]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </React.Fragment>
  );
}
