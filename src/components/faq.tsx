import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import questions from "@/data/questions.json";

export default function Faq() {
  return (
    <React.Fragment>
      <section className="flex flex-col gap-4.5">
        <div className="flex justify-center my-12">
          <h1 className="font-tinos-regular font-normal text-4xl text-[#8F6F4C]">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="grid grid-cols-1 mb-12">
          <Accordion
            type="multiple"
            className="w-full"
            defaultValue={questions.map((_, index) => `item-${index}`)}
          >
            {questions.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="font-tinos-regular font-normal text-xl text-[#8F6F4C]">
                  {item.header}
                </AccordionTrigger>
                <AccordionContent className="font-instrument-sans-regular text-base font-normal text-[#072240]">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </React.Fragment>
  );
}
