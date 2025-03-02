import React from "react";
import whyus from "@/data/whyus.json";
import {
  Award,
  Earth,
  HeartHandshake,
  LucideIcon,
  Scale,
  ThumbsUp,
  Users,
} from "lucide-react";

export default function WhyUs() {
  const iconMap: Record<string, LucideIcon> = {
    Scale: Scale,
    Award: Award,
    Users: Users,
    ThumbsUp: ThumbsUp,
    Earth: Earth,
    HeartHandshake: HeartHandshake,
  };
  return (
    <React.Fragment>
      <section className="flex flex-col gap-4.5">
        <div className="flex justify-center my-12">
          <h1 className="font-tinos-regular font-normal text-4xl text-[#8F6F4C]">
            Why Choose Us
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {whyus.map((item, index) => {
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
