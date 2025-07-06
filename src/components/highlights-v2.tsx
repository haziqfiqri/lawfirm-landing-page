"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
const hallmarks = [
  {
    header: "Advocate and Solicitor of the High Court of Malaya",
    content:
      "Demonstrating his mastery of civil law and his right to represent clients in the highest courts of the land.",
  },
  {
    header: "Sharie Lawyer",
    content:
      "Expert Islamic legal counsel across Peninsular Malaysia, serving Johor, Melaka, KL, Putrajaya, Labuan, Selangor, Negeri Sembilan, Terengganu, Kelantan, Pulau Pinang, and Perak with specialized Shariah jurisprudence.",
  },
  {
    header: "Founder of the legal firm Tetuan Chambers of Zainul Rijal (CZAR)",
    content:
      "Testament to his entrepreneurial spirit and his vision for a modern, forward thinking legal practice.",
  },
  {
    header: "Founder of the legal firm Tetuan Chambers of Zainul Rijal (Shariah) (SCZAR)",
    content:
      "Dedication to provide legal services in Islamic jurisprudence.",
  },
  {
    header: "Darjah Dato' Paduka Mahkota Perak (DPMP)",
    content:
      "A recipient which carries the title Dato', an honor bestowed by the Sultan of Perak in recognition of his significant contributions to society.",
  },
  {
    header: "Columnist for Utusan Malaysia",
    content:
      "Regular contributor to Malaysia's prominent national newspaper, offering expert legal analysis on contemporary Shariah issues for public education.",
  },
  {
    header: "Advisor for Muslim Lawyers Association of Malaysia (PPMM)",
    content:
      "Providing strategic guidance and Islamic legal expertise to Malaysia's premier Muslim legal association, supporting ethical advocacy within the nation's dual legal framework.",
  },
  {
    header:
      "Former President of the Syarie Lawyers Body of the Federal Territories",
    content:
      "Led the prestigious association of Syarie legal practitioners in Malaysia's Federal Territories, advancing professional standards and Shariah legal excellence.",
  },
  {
    header:
      "Former President of the Syarie Lawyers Association of Malaysia (PGSM)",
    content:
      "Provided national leadership for Malaysia's premier Shariah legal organization, driving professional excellence and advancing Islamic jurisprudence across the country.",
  },
  {
    header:
      "Former President of the Muslim Lawyers Association of Malaysia (PPMM)",
    content:
      "Led Malaysia's principal Muslim legal organization, enhancing professional standards and advocating for Islamic jurisprudence in Malaysia's legal landscape.",
  },
  {
    header: "Former Member of the Technical Committee on Civil and Shariah Law",
    content:
      "Contributed expert guidance in harmonizing Malaysia's dual legal system, shaping national legal policy and legislative frameworks.",
  },
  {
    header:
      "Former Member of the Rules Committee of the Shariah Judiciary Department of Malaysia (JKSM), Selangor, and Perak",
    content:
      "Helped develop and refine procedural frameworks for Malaysia's Shariah courts across multiple jurisdictions, ensuring judicial efficacy.",
  },
  {
    header: "Certified Mediator",
    content:
      "Professionally qualified to facilitate dialogue and guide disputing parties toward mutually beneficial resolutions within Islamic legal contexts.",
  },
  {
    header: "Certified Conciliator",
    content:
      "Specialized in reconciling differences through structured dialogue, with particular expertise in family and matrimonial dispute resolution.",
  },
  {
    header: "Certified Arbitrator",
    content:
      "Authorized to render binding decisions in disputes, combining Shariah principles with international best practices in alternative dispute resolution.",
  },
  {
    header:
      "Chief Trainer in professional Mediation and Conciliation in Malaysia",
    content:
      "Leading expert developing Malaysia's next generation of dispute resolution professionals through comprehensive training programs.",
  },
  {
    header:
      "Assistant Commissioner (Associate) of the Malaysian Civil Defence Force (APM)",
    content:
      "Serves in advisory capacity to Malaysia's national emergency response organization, bridging legal expertise with civil defense initiatives.",
  },
  {
    header:
      "Reference Panel for the Establishment of a Shariah Court in Thailand",
    content:
      "International legal consultant providing expertise to Thailand in developing Shariah judicial frameworks based on Malaysian best practices.",
  },
];

export default function HighlightsV2() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <React.Fragment>
      <section className="flex flex-col h-auto">
        <Carousel
          plugins={[plugin.current]}
          className="w-full mb-12"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {hallmarks.map((item, index) => (
              <CarouselItem key={index}>
                <Card className="rounded h-full flex flex-col justify-center">
                    <CardHeader>
                        <h1 className="font-tinos-regular font-normal text-xl text-[#8F6F4C]">
                            {item.header}
                        </h1>
                    </CardHeader>
                    <CardContent>
                        <p className="font-instrument-sans-regular text-base font-normal text-[#072240]">
                            {item.content}
                        </p>
                    </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </React.Fragment>
  );
}
