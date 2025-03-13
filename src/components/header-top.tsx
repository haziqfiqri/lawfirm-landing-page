import { MessageCircleQuestion, UserSearch, Phone, Scale } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function HeaderTop() {
  return (
    <React.Fragment>
      <div className="px-4 py-4 container sm:mx-auto flex gap-4 flex-row-reverse max-w-7xl">
        <Link
          href={"tel:+603-80819551"}
          className="flex items-center gap-1.5 w-fit font-instrument-sans-regular text-xs font-medium text-[#072240]"
        >
          <Phone strokeWidth={1.3} size={20} className="text-[#072240]" />
          Office : +603-80819551
        </Link>
        <Link
          href={"/"}
          className="flex items-center gap-1.5 w-fit font-instrument-sans-regular text-xs font-medium text-[#072240]"
        >
          <MessageCircleQuestion
            strokeWidth={1.3}
            size={20}
            className="text-[#072240]"
          />
          Inquiry Form
        </Link>
        <Link
          href={"/our-services/legal-practices"}
          className="hidden sm:flex items-center gap-1.5 w-fit font-instrument-sans-regular text-xs font-medium text-[#072240]"
        >
          <Scale strokeWidth={1.3} size={20} className="text-[#072240]" />
          Practices Areas
        </Link>
        <Link
          href={"/our-services/find-our-experts"}
          className="hidden sm:flex items-center gap-1.5 w-fit font-instrument-sans-regular text-xs font-medium text-[#072240]"
        >
          <UserSearch strokeWidth={1.3} size={20} className="text-[#072240]" />
          Find Our Experts
        </Link>
      </div>
    </React.Fragment>
  );
}
