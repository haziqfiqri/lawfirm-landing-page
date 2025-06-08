import Breadcrumbs from "@/components/breadcrumbs";
import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

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

export default function Page() {
  return (
    <React.Fragment>
      <section className="relative flex min-h-64 lg:min-h-96 bg-[url('/assets/section-banners/section-banner-founder.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
        <div className="relative px-4 container sm:mx-auto max-w-7xl">
          <div className="flex flex-col h-full justify-center">
            <h1 className="font-tinos-regular font-normal text-4xl text-white">
              Meet Founder
            </h1>
          </div>
        </div>
      </section>
      <div className="container px-4 sm:mx-auto grid grid-cols-1 max-w-7xl">
        <Breadcrumbs items={["Home", "About Us", "Meet Founder"]} />
        <div className="flex flex-col-reverse lg:flex-row-reverse gap-10 my-10">
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
              Dato&apos; Haji Zainul Rijal Bin Abu Bakar
            </h1>
            <p className="font-instrument-sans-regular text-base font-regular text-[#072240] text-justify">
              It is with great pleasure that I present the Chambers of Zainul
              Rijal (CZAR), a firm that stands as a testament to a lifelong
              commitment to the law and the pursuit of justice. Having founded
              Messrs Zainul Rijal Talha & Amir in 1996, I have witnessed the
              evolution of the legal landscape in Malaysia, and it is with this
              experience and foresight that CZAR was established in 2020.
              <br />
              <br />
              CZAR represents a continuation of the values that have guided my
              career: unwavering integrity, a commitment to excellence, and a
              deep compassion for those we serve. We believe in upholding the
              highest ethical standards while providing our clients with the
              best possible legal representation. But more than that, we believe
              in a holistic approach to justice, one that recognizes the
              complexities of human relationships and the need for solutions
              that go beyond the adversarial.
              <br />
              <br />
              Muhammad Akmal bin Abu Bakar as Managing Partner brings a fresh
              perspective and a dynamic energy to the firm. His dedication and
              keen legal mind complement our established foundation, ensuring
              that CZAR remains at the forefront of legal innovation.
              <br />
              <br />
              At CZAR, we understand that the law is not merely a set of rules,
              but a powerful instrument for positive change. We are committed to
              using our expertise to serve our clients, to mentor the next
              generation of legal professionals, and to contribute to a more
              just and equitable society. We see the law differently, and we
              invite you to experience the difference that this vision makes.
            </p>
            <div className="flex flex-col gap-2.5 mt-4">
              <h1 className="font-tinos-regular font-normal text-base text-[#8F6F4C]">
                Founder & Partner Principal
              </h1>
              <Image
                src="/signature.svg"
                width={0}
                height={0}
                sizes="100vw 100vh"
                className="min-w-52 h-full object-contain"
                alt=""
                loading="lazy"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex">
            <Image
              src={
                "/assets/teams-png/DATO_HAJI_ZAINUL_RIJAL_BIN_ABU_BAKAR_FULL.png"
              }
              width={0}
              height={0}
              sizes="100vw 100vh"
              className="w-full h-full object-contain"
              alt={"alt"}
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 mt-10">
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
              Hallmarks of His Legal Career
            </h1>
            <p className="font-instrument-sans-regular text-base font-regular text-[#072240] text-justify max-w-lg">
              His distinguished career is marked by a deep commitment to
              justice, a breadth of expertise, and an unwavering dedication to
              the legal profession.
            </p>
          </div>
          <div className="w-full lg:w-1/2 grid grid-cols-1 mb-12">
            <Accordion
              type="multiple"
              className="w-full"
              defaultValue={hallmarks.map((_, index) => `item-${index}`)}
            >
              {hallmarks.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger
                    className={cn(
                      "font-tinos-regular font-normal text-xl text-[#8F6F4C]",
                      index === 0 && "pt-0"
                    )}
                  >
                    {item.header}
                  </AccordionTrigger>
                  <AccordionContent className="font-instrument-sans-regular text-base font-normal text-[#072240]">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 mt-10">
          <div className="w-full flex flex-col gap-4">
            <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
              Expert Witness and International Speaker
            </h1>
            <p className="font-instrument-sans-regular text-base font-regular text-[#072240] text-justify">
              Globally recognized legal authority serving as expert witness in
              European and Commonwealth courts while delivering influential
              presentations at prestigious conferences across Asia, Europe, the
              Middle East, and North America. Dato&apos; Zainul Rijal&apos;s
              expertise is recognized internationally.
            </p>
            <p className="font-instrument-sans-regular text-base font-regular text-[#072240] text-justify">
              He has served as an expert witness in courts in Australia,
              Denmark, Luxembourg, and the United Kingdom. He is also a
              sought-after speaker, having presented papers in various countries
              including Singapore, Australia, New Zealand, Bahrain, Jordan,
              Egypt, the United Kingdom, Switzerland, Hong Kong, and the United
              States.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 my-10">
          <div className="w-full flex flex-col gap-4">
            <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
              Academic Leadership
            </h1>
            <p className="font-instrument-sans-regular text-base font-regular text-[#072240] text-justify">
              Appointed Adjunct Professor at Multimedia University while serving
              on the Advisory Council for multiple law faculties and as Industry
              Advisor across six prominent Malaysian universities. Active member
              of the Federal Territories Islamic Religious Council (MAIWP).
            </p>
            <p className="font-instrument-sans-regular text-base font-regular text-[#072240] text-justify">
              Providing strategic guidance on religious and legal matters
              affecting Malaysia&apos;s capital region. These distinguished
              appointments highlight a career dedicated to advancing legal
              education, shaping policy, and establishing the foundational
              expertise that drives CZAR&apos;s commitment to excellence in
              legal practice.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
