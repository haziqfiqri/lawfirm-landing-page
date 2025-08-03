import Breadcrumbs from "@/components/breadcrumbs";
import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <React.Fragment>
      <section className="relative flex min-h-64 lg:min-h-96 bg-[url('/assets/section-banners/section-banner-company.jpg')] bg-cover bg-bottom">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
        <div className="relative px-4 container sm:mx-auto max-w-7xl">
          <div className="flex flex-col h-full justify-center">
            <h1 className="font-tinos-regular font-normal text-4xl text-white">
              Our Company
            </h1>
          </div>
        </div>
      </section>
      <div className="container px-4 sm:mx-auto grid grid-cols-1 max-w-7xl">
        <Breadcrumbs items={["Home", "About Us", "Our Company"]} />
        <div className="flex flex-col mt-12">
          <div className="flex flex-col gap-4">
            <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
              A Holistic Approach to Justice
            </h1>
            <p className="font-instrument-sans-regular text-base font-medium text-[#072240] text-justify">
                The journey of Chambers of Zainul Rijal (CZAR) and Shariah Chambers of Zainul 
                Rijal (SCZAR) reflects a deep understanding of the evolving complexities inherent in 
                modern legal challenges. Our growth into a comprehensive legal service provider 
                is driven by the recognition that true advocacy extends far beyond the traditional 
                confines of the courtroom. While we stand ready to champion our clients’ interests 
                with robust litigation, our expertise is equally vested in the nuanced art of negotiation, 
                the strategic pursuit of mediation, and the principled path to peaceful resolutions.
              <br />
              <br />
                This commitment to a multifaceted strategy stems from our core belief that the 
                law, in its highest application, serves a purpose greater than mere adjudication. It 
                is a powerful instrument for positive change, capable of not only resolving disputes 
                but also of fostering understanding, mending relationships, and paving the way 
                for reconciliation. Embracing this holistic perspective allows us to delve deeper, to 
                understand the human element within each case, and to tailor solutions that are not 
                only legally sound but also restorative and forward-looking. It is this philosophy that 
                truly defines our approach and underscores our dedication to achieving outcomes 
                that resonate with fairness and enduring justice.
            </p>
          </div>
        </div>
        {/* <div className="flex flex-col mt-10">
          <div className="flex flex-col gap-4">
            <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
              Company Profile
            </h1>
            <p className="font-instrument-sans-regular text-base font-medium text-[#072240] text-justify">
                Our journey has been defined by a relentless pursuit of justice for our clients. The 
                team at CZAR and SCZAR is recognized for its adeptness in demystifying complex 
                legal terrains, skillfully charting courses through both civil law and the intricate 
                principles of Shariah. We have stood at the forefront of significant legal challenges, 
                championing causes in landmark civil and public interest cases, with several matters 
                reaching the Federal Court and contributing to the very fabric of Malaysian legal 
                precedent. Our story is one of continuous growth, driven by a passion for the 
                law and a deep-seated commitment to serving our community with diligence and 
                compassion.
            </p>
          </div>
        </div> */}
        <div className="flex flex-col mt-10">
          <div className="flex flex-col gap-4">
            <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
              Dual Expertise
            </h1>
            <p className="font-instrument-sans-regular text-base font-medium text-[#072240] text-justify">
                CZAR operates in tandem with its sister firm, the 
                Shariah Chambers of Zainul Rijal (SCZAR). This 
                unique structure allows for a seamless integration 
                of legal services, catering to the diverse needs of 
                our clients. 
            </p>
            <p className="font-instrument-sans-regular text-base font-medium text-[#072240] text-justify">
                CZAR handles a broad spectrum of 
                civil law matters, providing expert 
                counsel and representation in areas 
                such as contract law, property law, 
                tort law, family law, administrative and 
                constitutional law, commercial and 
                corporate law, and construction law.
                SCZAR focuses exclusively on Shariah 
                law, offering specialized services in 
                Islamic family law, Islamic inheritance 
                law, Islamic finance, Wakaf, and, where 
                applicable, Islamic criminal law
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row bg-[#E9E2DB] mt-10">
          <div className="w-full lg:w-3/5 h-full aspect-video p-1.5 bg-[#8F6F4C]">
            <Image
              src={"/assets/section-banners/section-banner-company-2.jpg"}
              width={0}
              height={0}
              sizes="100vw 100vh"
              className="w-full h-full object-cover aspect-video"
              alt={"alt"}
            />
          </div>
          <div className="w-full lg:w-2/5 flex flex-col gap-10 justify-center p-6 lg:p-10">
            <div className="flex flex-col gap-3.5">
              <h1 className="font-instrument-sans-regular text-base font-medium text-[#072240] text-justify uppercase tracking-widest">
                Our Vision
              </h1>
              <p className="font-tinos-regular font-normal text-xl text-[#8F6F4C] text-justify tracking-tight">
                  To provide exceptional legal services with integrity, compassion, and innovation, 
                  championing justice and empowering our clients while upholding the highest 
                  ethical standards.
              </p>
            </div>
            <div className="flex flex-col gap-3.5">
              <h1 className="font-instrument-sans-regular text-base font-medium text-[#072240] text-justify uppercase tracking-widest">
                Our Mission
              </h1>
              <p className="font-tinos-regular font-normal text-xl text-[#8F6F4C] text-justify tracking-tight">
                  To be a leading force in shaping a just and equitable society, recognized for our 
                  expertise, holistic approach to legal solutions, and unwavering commitment to our 
                  clients and the community.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col gap-10 mt-10">
          <div className="flex flex-col gap-4">
            <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
              Our Values
            </h1>
            <p className="font-instrument-sans-regular text-base font-medium text-[#072240] text-justify">
              These principles are not mere words but are the bedrock upon which
              the firm&apos;s practice is built. Every case, every client, and
              every interaction is approached with an unwavering dedication to
              these ideals. The firm&apos;s lawyers are not only legal experts
              but also trusted advisors and compassionate advocates, dedicated
              to achieving the best possible outcomes for those they represent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2.5">
              <h1 className="font-tinos-regular font-normal text-xl text-[#8F6F4C]">
                Integrity
              </h1>
              <p className="font-instrument-sans-regular text-base font-medium text-[#072240] text-justify">
                Upholding honesty, ethics, and trust in every legal endeavor.
              </p>
            </div>
            <div className="flex flex-col gap-2.5">
              <h1 className="font-tinos-regular font-normal text-xl text-[#8F6F4C]">
                Excellence
              </h1>
              <p className="font-instrument-sans-regular text-base font-medium text-[#072240] text-justify">
                Delivering top-tier legal solutions with precision and
                expertise.
              </p>
            </div>
            <div className="flex flex-col gap-2.5">
              <h1 className="font-tinos-regular font-normal text-xl text-[#8F6F4C]">
                Compassion
              </h1>
              <p className="font-instrument-sans-regular text-base font-medium text-[#072240] text-justify">
                Advocating with empathy, understanding, and client-focused care.
              </p>
            </div>
            <div className="flex flex-col gap-2.5">
              <h1 className="font-tinos-regular font-normal text-xl text-[#8F6F4C]">
                Innovation
              </h1>
              <p className="font-instrument-sans-regular text-base font-medium text-[#072240] text-justify">
                Embracing modern solutions to navigate complex legal challenges.
              </p>
            </div>
          </div>
        </div> */}
        {/* <div className="flex flex-col gap-10 my-10">
          <div className="flex flex-col gap-4">
            <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
              Our Certificates
            </h1>
            <p className="font-instrument-sans-regular text-base font-medium text-[#072240] text-justify">
              Our firm has been recognized for excellence in legal practice
              through prestigious accolades. These accolades and publications
              demonstrate our commitment to excellence, innovation, and the
              advancement of legal knowledge within the community.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2.5">
              <Image
                src="/assets/apac_insider.png"
                width={0}
                height={0}
                sizes="100vw 100vh"
                className="w-full h-full object-contain max-w-64"
                alt="apac_insider"
              />
              <h1 className="font-tinos-regular font-normal text-xl text-[#8F6F4C]">
                South East Asia Business Awards
              </h1>
              <p className="font-instrument-sans-regular text-base font-medium text-[#072240] text-justify">
                Best Muslim Family Law Firm 2019
              </p>
            </div>
            <div className="flex flex-col gap-2.5">
              <Image
                src="/assets/book_award.png"
                width={0}
                height={0}
                sizes="100vw 100vh"
                className="w-full h-full object-contain max-w-64"
                alt="book_award"
              />
              <h1 className="font-tinos-regular font-normal text-xl text-[#8F6F4C]">
                Anugerah Buku Negara
              </h1>
              <p className="font-instrument-sans-regular text-base font-medium text-[#072240] text-justify">
                National Book Award 2019
              </p>
            </div>
          </div>
        </div> */}
        <div className="flex flex-col gap-10 my-10">
          <div className="flex flex-col gap-4">
            <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
              Our Awards
            </h1>
            <p className="font-instrument-sans-regular text-base font-medium text-[#072240] text-justify">
              Our firm has been recognized for excellence in legal practice
              through prestigious accolades. These accolades and publications
              demonstrate our commitment to excellence, innovation, and the
              advancement of legal knowledge within the community.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2.5">
              <Image
                src="/assets/apac_insider.png"
                width={0}
                height={0}
                sizes="100vw 100vh"
                className="w-full h-full object-contain max-w-64"
                alt="apac_insider"
              />
              <h1 className="font-tinos-regular font-normal text-xl text-[#8F6F4C]">
                South East Asia Business Awards
              </h1>
              <p className="font-instrument-sans-regular text-base font-medium text-[#072240] text-justify">
                Best Muslim Family Law Firm 2019
              </p>
            </div>
            <div className="flex flex-col gap-2.5">
              <Image
                src="/assets/book_award.png"
                width={0}
                height={0}
                sizes="100vw 100vh"
                className="w-full h-full object-contain max-w-64"
                alt="book_award"
              />
              <h1 className="font-tinos-regular font-normal text-xl text-[#8F6F4C]">
                Anugerah Buku Negara
              </h1>
              <p className="font-instrument-sans-regular text-base font-medium text-[#072240] text-justify">
                National Book Award 2019
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
