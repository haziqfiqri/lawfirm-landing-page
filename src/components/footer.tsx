// "use client";

import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <React.Fragment>
      <footer className="bg-[#E9E2DB] flex flex-col">
        <div className="px-4 pt-12 container sm:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl">
          <div className="flex">
            <h1 className="font-instrument-sans-regular text-base font-medium text-[#072240] leading-normal tracking-wide">
              All lawyers at Chambers of Zainul Rijal are regulated by the
              &nbsp;
              <Link
                href={"https://www.malaysianbar.org.my/"}
                target="_blank"
                className="underline"
              >
                Malaysian Bar Council
              </Link>
              .
            </h1>
          </div>
          <div className="flex gap-10">
            <div className="flex flex-col w-full">
              <h1 className="w-fit font-instrument-sans-regular text-base font-semibold text-[#072240]">
                Pages
              </h1>
              <Link
                href={"/about-us/our-company"}
                className="py-3 w-fit font-instrument-sans-regular text-base font-medium text-[#072240] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#8F6F4C] after:transition-all after:duration-300 hover:after:w-full"
              >
                About Us
              </Link>
              <Link
                href={"/our-services/find-a-lawyer"}
                className="py-3 w-fit font-instrument-sans-regular text-base font-medium text-[#072240] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#8F6F4C] after:transition-all after:duration-300 hover:after:w-full"
              >
                Find a Lawyer
              </Link>
              <Link
                href={"/our-services/enquiry-now"}
                className="py-3 w-fit font-instrument-sans-regular text-base font-medium text-[#072240] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#8F6F4C] after:transition-all after:duration-300 hover:after:w-full"
              >
                Enquiry Now
              </Link>
              <Link
                href={"/latest-insights"}
                className="py-3 w-fit font-instrument-sans-regular text-base font-medium text-[#072240] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#8F6F4C] after:transition-all after:duration-300 hover:after:w-full"
              >
                Blogs & Articles
              </Link>
            </div>
            <div className="flex flex-col  w-full">
              <h1 className="w-fit font-instrument-sans-regular text-base font-semibold text-[#072240]">
                Links
              </h1>
              <Link
                target="_blank"
                href={
                  "https://sapc.malaysianbar.org.my:10343/FirmRegistration/GetFirmRegistrationDetail?firmRegistrationNo=tAEX%2fNeenQKj0VyRRpCuQFMVxUHJ50shfdC6dZr6lB0%3d&serialNo=kvMSBwWJGBx8ijHs8eNXNw%3d%3d"
                }
                className="py-3 w-fit font-instrument-sans-regular text-base font-medium text-[#072240] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#8F6F4C] after:transition-all after:duration-300 hover:after:w-full"
              >
                Malaysian Bar
              </Link>
              <Link
                target="_blank"
                href={"https://www.facebook.com/profile.php?id=100057158302243"}
                className="py-3 w-fit font-instrument-sans-regular text-base font-medium text-[#072240] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#8F6F4C] after:transition-all after:duration-300 hover:after:w-full"
              >
                Facebook
              </Link>
              <Link
                href={"/"}
                className="py-3 w-fit font-instrument-sans-regular text-base font-medium text-[#072240] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#8F6F4C] after:transition-all after:duration-300 hover:after:w-full"
              >
                Instagram
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="w-fit font-instrument-sans-regular text-xl font-semibold text-[#072240]">
              Subscribe Email Notification
            </h1>
            <h1 className="font-instrument-sans-regular text-base font-medium text-[#072240] tracking-wide">
              Be the first in line to receive the latest updates and promotions,
              delivered directly to your inbox.
            </h1>
            <div className="flex">
              <input
                className="w-full px-4 py-2 border border-[#8F6F4C] placeholder:text-[#072240] font-instrument-sans-regular text-base font-medium"
                placeholder="Email Address"
              />
            </div>
            <div className="flex">
              <button
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
                <span className="relative z-10">Subscribe</span>
              </button>
            </div>
            <div className="flex gap-4"></div>
          </div>
        </div>
        <div className="px-4 container sm:mx-auto max-w-7xl ">
          <hr className="h-px mt-8 mb-2 bg-gray-400 border-0"></hr>
        </div>
        <div className="px-4 pb-12 container sm:mx-auto flex flex-col lg:flex-row  justify-between max-w-7xl">
          <h1 className="font-instrument-sans-regular text-base font-medium text-[#072240] leading-loose tracking-wide">
            Chambers of Zainul Rijal © 2025. All Rights Reserved.
          </h1>
          <div className="flex flex-wrap md:gap-4">
            <Link
              href={"/"}
              className="pb-3 w-fit font-instrument-sans-regular text-base font-medium text-[#072240] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#8F6F4C] after:transition-all after:duration-300 hover:after:w-full"
            >
              Disclaimer
            </Link>
            <Link
              href={"/"}
              className="pb-3 w-fit font-instrument-sans-regular text-base font-medium text-[#072240] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#8F6F4C] after:transition-all after:duration-300 hover:after:w-full"
            >
              Personal Data Protection Notice
            </Link>
            <Link
              href={"/"}
              className="pb-3 w-fit font-instrument-sans-regular text-base font-medium text-[#072240] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#8F6F4C] after:transition-all after:duration-300 hover:after:w-full"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
