"use client";
import React, { useState } from "react";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function HeaderBottom() {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <div className="bg-[#E9E2DB] px-4 container sm:mx-auto flex justify-between items-center max-w-7xl">
        <Link href={"/"} className="flex items-center py-3">
          <Image
            src={"/assets/company_logo.svg"}
            width={0}
            height={0}
            sizes="100vw 100vh"
            className="w-44 brightness-75"
            alt="company_logo"
          />
        </Link>

        {/* Mobile Menu */}
        <div className="flex md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button>
                <AlignJustify className="text-[#8F6F4C]" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-[#E9E2DB] w-[85%] p-0 data-[state=open]:animate-slide-in-right data-[state=closed]:animate-slide-out-right"
            >
              <SheetHeader className="px-4 pt-6">
                <SheetTitle className="text-[#8F6F4C] font-instrument-sans-regular text-left">
                  Chambers of Zainul Rijal
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col py-6 px-4">
                <Link
                  href="/"
                  className="py-4 font-instrument-sans-regular text-base font-medium text-[#8F6F4C] border-b border-[#8F6F4C]/20"
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>

                <div className="py-4 border-b border-[#8F6F4C]/20">
                  <p className="font-instrument-sans-regular text-base font-medium text-[#8F6F4C] mb-2">
                    Our Services
                  </p>
                  <div className="flex flex-col gap-2 mt-2">
                    <Link
                      href="/our-services/find-a-lawyer"
                      className="text-[#072240] text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Find a lawyer
                    </Link>
                    <Link
                      href="/our-services/legal-practices"
                      className="text-[#072240] text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Practice Areas
                    </Link>
                    <Link
                      href="/"
                      className="text-[#072240] text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Lawyer Appointment
                    </Link>
                    <Link
                      href="/"
                      className="text-[#072240] text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Enquiry Form
                    </Link>
                  </div>
                </div>

                <Link
                  href="/latest-insights"
                  className="py-4 font-instrument-sans-regular text-base font-medium text-[#8F6F4C] border-b border-[#8F6F4C]/20"
                  onClick={() => setOpen(false)}
                >
                  Latest Insights
                </Link>

                <div className="py-4 border-b border-[#8F6F4C]/20">
                  <p className="font-instrument-sans-regular text-base font-medium text-[#8F6F4C] mb-2">
                    About Us
                  </p>
                  <div className="flex flex-col gap-2 mt-2">
                    <Link
                      href="/about-us/contact-us"
                      className="text-[#072240] text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Contact Us
                    </Link>
                    <Link
                      href="/about-us/our-company"
                      className="text-[#072240] text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Our Company
                    </Link>
                    <Link
                      href="/about-us/meet-founder"
                      className="text-[#072240] text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Meet The Founder
                    </Link>
                    <Link
                      href="/about-us/our-people"
                      className="text-[#072240] text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Our People
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Menu - Unchanged */}
        <NavigationMenu className="bg-[#E9E2DB] hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="pb-2 font-instrument-sans-regular text-base font-medium text-[#8F6F4C] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#072240] after:transition-all after:duration-300 hover:after:w-full">
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                disableIcon={true}
                className="font-instrument-sans-regular text-base font-medium text-[#8F6F4C] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#072240] after:transition-all after:duration-300 hover:after:w-full"
              >
                Our Services
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-[#E9E2DB]">
                <ul className="flex flex-col lg:flex-row gap-10 py-8">
                  <li className="flex w-full lg:w-3/5">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex gap-4 h-full w-full select-none justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted no-underline outline-none"
                        href="/our-services/legal-practices"
                      >
                        <div className="w-full h-full lg:w-80 lg:h-52 aspect-video p-1.5 bg-[#8F6F4C]">
                          <Image
                            src={
                              "/assets/section-banners/section-banner-navigation-2.jpg"
                            }
                            width={0}
                            height={0}
                            sizes="100vw 100vh"
                            className="w-full h-full object-cover aspect-video"
                            alt={"alt"}
                          />
                        </div>
                        <div className="flex flex-col gap-4">
                          <h1 className="font-instrument-sans-regular text-base font-medium text-[#8F6F4C] text-justify tracking-tight">
                            Your legal needs are unique. We provide tailored
                            legal solutions across various practice areas,
                            delivered with a commitment to understanding your
                            specific situation. Let us guide you towards the
                            best possible outcome.
                          </h1>
                          <p className="font-instrument-sans-regular text-base font-regular text-[#072240]">
                            Learn more
                          </p>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li className="w-full lg:w-2/5 grid grid-cols-2 gap-x-10 gap-y-10 h-fit">
                    <ListItem
                      href="/our-services/find-a-lawyer"
                      title="Find a lawyer"
                      className="p-0 h-fit"
                    >
                      <span className="text-[#072240]">
                        Get to know our firm&apos; lawyers.
                      </span>
                    </ListItem>
                    <ListItem
                      href="/our-services/legal-practices"
                      title="Practice Areas"
                      className="p-0"
                    >
                      Discover our areas and practices.
                    </ListItem>
                    <ListItem
                      href="/"
                      title="Lawyer Appointment"
                      className="p-0"
                    >
                      Book an appointment with a lawyer.
                    </ListItem>
                    <ListItem href="/" title="Enquiry Form" className="p-0">
                      Reach out to us for legal inquiry.
                    </ListItem>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/latest-insights" legacyBehavior passHref>
                <NavigationMenuLink className="pb-2 font-instrument-sans-regular text-base font-medium text-[#8F6F4C] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#072240] after:transition-all after:duration-300 hover:after:w-full">
                  Latest Insights
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about-us/meet-founder" legacyBehavior passHref>
                <NavigationMenuLink className="pb-2 font-instrument-sans-regular text-base font-medium text-[#8F6F4C] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#072240] after:transition-all after:duration-300 hover:after:w-full">
                  Meet The Founder
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                disableIcon={true}
                className="font-instrument-sans-regular text-base font-medium text-[#8F6F4C] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#072240] after:transition-all after:duration-300 hover:after:w-full"
              >
                About Us
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-[#E9E2DB]">
                <ul className="flex flex-col lg:flex-row gap-10 py-8">
                  <li className="flex w-full lg:w-3/5">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex gap-4 h-full w-full select-none justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted no-underline outline-none"
                        href="/about-us/our-company"
                      >
                        <div className="w-full h-full lg:w-80 lg:h-52 aspect-video p-1.5 bg-[#8F6F4C]">
                          <Image
                            src={
                              "/assets/section-banners/section-banner-navigation-1.jpg"
                            }
                            width={0}
                            height={0}
                            sizes="100vw 100vh"
                            className="w-full h-full object-cover aspect-video"
                            alt={"alt"}
                          />
                        </div>
                        <div className="flex flex-col gap-4">
                          <h1 className="font-instrument-sans-regular text-base font-medium text-[#8F6F4C] text-justify tracking-tight">
                            For 24 years, our firm has been dedicated to
                            providing exceptional legal counsel. We&apos;ve
                            built a legacy of trust and expertise, guiding
                            clients through complex legal landscapes with
                            unwavering commitment.
                          </h1>
                          <p className="font-instrument-sans-regular text-base font-regular text-[#072240]">
                            Learn more
                          </p>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li className="w-full lg:w-2/5 grid grid-cols-2 gap-x-10 gap-y-10 h-fit">
                    <ListItem
                      href="/about-us/contact-us"
                      title="Contact Us"
                      className="p-0 h-fit"
                    >
                      <span className="text-[#072240]">
                        Locate and reach us out physically.
                      </span>
                    </ListItem>
                    <ListItem
                      href="/about-us/our-company"
                      title="Our Company"
                      className="p-0"
                    >
                      Get to know our law firm in details.
                    </ListItem>
                    {/* <ListItem
                      href="/about-us/meet-founder"
                      title="Meet The Founder"
                      className="p-0"
                    >
                      Read the story of our firm founder.
                    </ListItem> */}
                    <ListItem
                      href="/about-us/our-people"
                      title="Our People"
                      className="p-0"
                    >
                      Discover the people of this law firm.
                    </ListItem>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </React.Fragment>
  );
}

// ListItem component remains unchanged
const ListItem = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<typeof Link> & {
    title: string;
  }
>(({ className, title, children, ...props }, ref) => {
  return (
    <Link
      ref={ref as React.Ref<HTMLAnchorElement>}
      className={cn(
        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
        className
      )}
      {...props}
    >
      <div className="font-instrument-sans-regular text-base font-medium text-[#8F6F4C] leading-none">
        {title}
      </div>
      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
        {children}
      </p>
    </Link>
  );
});
ListItem.displayName = "ListItem";
