import Breadcrumbs from "@/components/breadcrumbs";
import React from "react";
import Image from "next/image";
import {
  // Accordion,
  // AccordionContent,
  // AccordionItem,
  // AccordionTrigger,
} from "@/components/ui/accordion";
// import { cn } from "@/lib/utils";
import HighlightsV2 from "@/components/highlights-v2";

// const hallmarks = [
//   {
//     header: "Advocate and Solicitor of the High Court of Malaya",
//     content:
//       "Demonstrating his mastery of civil law and his right to represent clients in the highest courts of the land.",
//   },
//   {
//     header: "Sharie Lawyer",
//     content:
//       "Expert Islamic legal counsel across Peninsular Malaysia, serving Johor, Melaka, KL, Putrajaya, Labuan, Selangor, Negeri Sembilan, Terengganu, Kelantan, Pulau Pinang, and Perak with specialized Shariah jurisprudence.",
//   },
//   {
//     header: "Founder of the legal firm Tetuan Chambers of Zainul Rijal (CZAR)",
//     content:
//       "Testament to his entrepreneurial spirit and his vision for a modern, forward thinking legal practice.",
//   },
//   {
//     header: "Founder of the legal firm Tetuan Chambers of Zainul Rijal (Shariah) (SCZAR)",
//     content:
//       "Dedication to provide legal services in Islamic jurisprudence.",
//   },
//   {
//     header: "Darjah Dato' Paduka Mahkota Perak (DPMP)",
//     content:
//       "A recipient which carries the title Dato', an honor bestowed by the Sultan of Perak in recognition of his significant contributions to society.",
//   },
//   {
//     header: "Columnist for Utusan Malaysia",
//     content:
//       "Regular contributor to Malaysia's prominent national newspaper, offering expert legal analysis on contemporary Shariah issues for public education.",
//   },
//   {
//     header: "Advisor for Muslim Lawyers Association of Malaysia (PPMM)",
//     content:
//       "Providing strategic guidance and Islamic legal expertise to Malaysia's premier Muslim legal association, supporting ethical advocacy within the nation's dual legal framework.",
//   },
//   {
//     header:
//       "Former President of the Syarie Lawyers Body of the Federal Territories",
//     content:
//       "Led the prestigious association of Syarie legal practitioners in Malaysia's Federal Territories, advancing professional standards and Shariah legal excellence.",
//   },
//   {
//     header:
//       "Former President of the Syarie Lawyers Association of Malaysia (PGSM)",
//     content:
//       "Provided national leadership for Malaysia's premier Shariah legal organization, driving professional excellence and advancing Islamic jurisprudence across the country.",
//   },
//   {
//     header:
//       "Former President of the Muslim Lawyers Association of Malaysia (PPMM)",
//     content:
//       "Led Malaysia's principal Muslim legal organization, enhancing professional standards and advocating for Islamic jurisprudence in Malaysia's legal landscape.",
//   },
//   {
//     header: "Former Member of the Technical Committee on Civil and Shariah Law",
//     content:
//       "Contributed expert guidance in harmonizing Malaysia's dual legal system, shaping national legal policy and legislative frameworks.",
//   },
//   {
//     header:
//       "Former Member of the Rules Committee of the Shariah Judiciary Department of Malaysia (JKSM), Selangor, and Perak",
//     content:
//       "Helped develop and refine procedural frameworks for Malaysia's Shariah courts across multiple jurisdictions, ensuring judicial efficacy.",
//   },
//   {
//     header: "Certified Mediator",
//     content:
//       "Professionally qualified to facilitate dialogue and guide disputing parties toward mutually beneficial resolutions within Islamic legal contexts.",
//   },
//   {
//     header: "Certified Conciliator",
//     content:
//       "Specialized in reconciling differences through structured dialogue, with particular expertise in family and matrimonial dispute resolution.",
//   },
//   {
//     header: "Certified Arbitrator",
//     content:
//       "Authorized to render binding decisions in disputes, combining Shariah principles with international best practices in alternative dispute resolution.",
//   },
//   {
//     header:
//       "Chief Trainer in professional Mediation and Conciliation in Malaysia",
//     content:
//       "Leading expert developing Malaysia's next generation of dispute resolution professionals through comprehensive training programs.",
//   },
//   {
//     header:
//       "Assistant Commissioner (Associate) of the Malaysian Civil Defence Force (APM)",
//     content:
//       "Serves in advisory capacity to Malaysia's national emergency response organization, bridging legal expertise with civil defense initiatives.",
//   },
//   {
//     header:
//       "Reference Panel for the Establishment of a Shariah Court in Thailand",
//     content:
//       "International legal consultant providing expertise to Thailand in developing Shariah judicial frameworks based on Malaysian best practices.",
//   },
// ];

const certificates = [
  {
    src: 'BRUNEI_001.webp',
    alt: 'brunei_cert',
    header: 'Brunei Sharia Court',
    content: 'Sharia Lawyer Certificate'
  },
  {
    src: 'KELANTAN_001.webp',
    alt: 'kelantan_cert',
    header: 'Kelantan Sharia Court',
    content: 'Sharia Lawyer Certificate'
  },
  {
    src: 'KL_001.webp',
    alt: 'kl_cert1',
    header: 'Wilayah Perseketuan Sharia Court',
    content: 'Sharia Lawyer Certificate'
  },
  {
    src: 'MELAKA_001.webp',
    alt: 'melaka_cert',
    header: 'Melaka Sharia Court',
    content: 'Sharia Lawyer Certificate'
  },
  {
    src: 'N9_001.webp',
    alt: 'n9_cert',
    header: 'Negeri Sembilan Sharia Court',
    content: 'Sharia Lawyer Certificate'
  },
  {
    src: 'PERAK_001.webp',
    alt: 'perak_cert',
    header: 'Perak Sharia Court',
    content: 'Sharia Lawyer Certificate'
  },
  {
    src: 'SELANGOR_001.webp',
    alt: 'selangor_cert',
    header: 'Selangor Sharia Court',
    content: 'Sharia Lawyer Certificate'
  },
  {
    src: 'SYARIE_2024_001.webp',
    alt: 'syarie_cert',
    header: 'Pulau Pinang Sharia Court',
    content: 'Sharia Lawyer Certificate'
  },
]

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
          <div className="w-full flex flex-col gap-4">
            <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
              Dato&apos; Haji Zainul Rijal Bin Abu Bakar
            </h1>
            <p className="font-instrument-sans-regular text-base font-regular text-[#072240] text-justify">
                It is with great pleasure and immense pride that I present the Chambers of Zainul 
                Rijal (CZAR) and its esteemed counterpart, the Shariah Chambers of Zainul Rijal 
                (SCZAR). Together, these firms stand as a testament to a lifelong commitment to the 
                law and an unwavering pursuit of justice in its many forms. My journey in the legal 
                field began with the founding of Messrs Zainul Rijal Talha & Amir in 1996, a period 
                during which I witnessed firsthand the dynamic evolution of the legal landscape in 
                Malaysia. It was this invaluable experience and a keen foresight for the growing 
                need for specialized legal services that led to the establishment of CZAR in 2020, 
                focusing on civil law. Recognizing the equally vital and distinct domain of Islamic 
                jurisprudence, SCZAR was subsequently established in 2022 to provide dedicated 
                expertise in Shariah law.
              <br />
              <br />
                CZAR and SCZAR represent a continuation and an amplification of the core values 
                that have been the bedrock of my career: unwavering integrity in every action, 
                a relentless commitment to achieving excellence for our clients, and a profound 
                compassion for those we are privileged to serve. We firmly believe in upholding the 
                highest ethical standards, ensuring that our clients receive not only the best possible 
                legal representation but also counsel that is both sound and principled. More 
                than just navigating legal complexities, we are dedicated to a holistic approach to 
                justice. This philosophy acknowledges the intricate tapestry of human relationships 
                and underscores our commitment to finding solutions that transcend the often
                limiting adversarial nature of legal disputes, now enhanced by our integrated civil 
                and Shariah capabilities.
              <br />
              <br />
                This unique dual-expertise structure is born from the understanding that the needs 
                of our clients often traverse the perceived boundaries of civil and Shariah law. 
                By fostering a seamless synergy between CZAR and SCZAR, we aim to provide 
                comprehensive, nuanced, and effective legal solutions that are tailored to the 
                specific circumstances of each individual and entity we represent. Our vision is to 
                be a beacon where the diverse streams of legal thought converge, offering clarity 
                and resolution. This is the essence of our motto, “We See The Law Differently” – not 
                merely as a set of rules, but as a dynamic instrument for achieving fairness, equity, 
                and harmony in society.
              <br />
              <br />
                We are committed to not only upholding the letter of the law but also its spirit, ensuring 
                that justice is accessible and meaningful. As we look to the future, we are dedicated 
                to continuous learning, mentoring the next generation of legal professionals, and 
                contributing positively to the ongoing development of the Malaysian legal system. 
                We invite you to experience the dedication, expertise, and compassionate service 
                that define the Chambers of Zainul Rijal and the Shariah Chambers of Zainul Rijal.
            </p>
            <div className="flex flex-col gap-2.5 mt-4">
              <h1 className="font-tinos-regular font-normal text-base text-[#8F6F4C]">
                Principal Partner at Chambers of Zainul Rijal  (CZAR) & Shariah Chambers of Zainul Rijal (SCZAR)
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
          {/* <div className="w-full lg:w-1/2 flex">
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
          </div> */}
        </div>
        <div className="flex flex-col lg:flex-row gap-10 mt-10 h-fit">
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
          <div className="w-full lg:w-1/2 flex flex-col">
            <HighlightsV2/>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 mt-10">
          <div className="w-full flex flex-col gap-4">
            <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
              Expert Witness and International Speaker
            </h1>
            <p className="font-instrument-sans-regular text-base font-regular text-[#072240] text-justify">
                Dato&apos; Zainul Rijal&apos;s expertise is recognized 
                internationally. He has served as an expert 
                witness in courts in Australia, Denmark, 
                Luxembourg, and the United Kingdom. He is 
                also a sought-after speaker, having presented 
                papers in various countries including Singapore, 
                Australia, New Zealand, Bahrain, Jordan, 
                Egypt, the United Kingdom, Switzerland, 
                Hong Kong, and the United States.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 my-10">
          <div className="w-full flex flex-col gap-4">
            <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
              Academic and Community Contributions
            </h1>
            <p className="font-instrument-sans-regular text-base font-regular text-[#072240] text-justify">
              He was also appointed as an Adjunct 
              Professor at Multimedia University. He also 
              serves as a member of the Advisory Council 
              for the Faculty of Law/Shariah and Industry 
              Advisor for six public and private universities. 
              He was also appointed as a Member of the 
              Federal Territories Islamic Religious Council 
              (MAIWP).
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-10 my-10">
          <div className="flex flex-col gap-4">
            <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
              Professional Certificates
            </h1>
            <p className="font-instrument-sans-regular text-base font-medium text-[#072240] text-justify">
              This impressive array of accomplishments and roles underscores Dato&apos; Zainul Rijal&apos;s 
              profound impact on the Malaysian legal landscape. His experience, expertise, and 
              unwavering dedication to justice are the cornerstones upon which CZAR is built.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-x-4 gap-y-10">
            {
              certificates.map((item, index) => { 
                return (
                <div className="flex flex-col gap-2.5" key={index}>
                  <Image
                    src={`/assets/founder/${item.src}`}
                    width={0}
                    height={0}
                    sizes="100vw 100vh"
                    className="w-full h-full object-contain max-w-64"
                    alt="brunei"
                  />
                  <h1 className="font-tinos-regular font-normal text-xl text-[#8F6F4C]">
                    {item.header}
                  </h1>
                  <p className="font-instrument-sans-regular text-base font-medium text-[#072240] text-justify">
                    {item.content}
                  </p>
              </div>
                )
              })
            }
            
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
