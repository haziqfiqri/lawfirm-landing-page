import Breadcrumbs from "@/components/breadcrumbs";
import React from "react";

export default function Page() {
  return (
    <React.Fragment>
      <section className="relative flex min-h-64 lg:min-h-96 bg-[url('/assets/section-banners/section-banner-practices.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
        <div className="relative px-4 container sm:mx-auto max-w-7xl">
          <div className="flex flex-col h-full justify-center">
            <h1 className="font-tinos-regular font-normal text-4xl text-white">
              Disclaimer
            </h1>
          </div>
        </div>
      </section>
      <div className="container px-4 sm:mx-auto grid grid-cols-1 max-w-7xl">
        <Breadcrumbs items={["Home", "Disclaimer"]} />
        <div className="flex flex-col gap-10 py-12">
          <div className="flex flex-col gap-4">
            <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
              Legal Information Only
            </h1>
            <p className="font-instrument-sans-regular text-base font-medium text-[#072240]">
              The information provided on Chambers of Zainul Rijal&apos;s
              website is for general informational purposes only. It is not
              intended to constitute legal advice or create an attorney-client
              relationship.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
              No Attorney-Client Relationship
            </h1>
            <p className="font-instrument-sans-regular text-base font-medium text-[#072240]">
              Visiting our website, accessing information provided on our
              website, or sending us an email does not create an attorney-client
              relationship between you and Chambers of Zainul Rijal. An
              attorney-client relationship is only formed when there is an
              express agreement between our firm and the client.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
              No Guarantee of Results
            </h1>
            <p className="font-instrument-sans-regular text-base font-medium text-[#072240]">
              The testimonials, case results, and references to outcomes of
              previous cases that may appear on this website do not guarantee or
              predict similar results in future cases. Each legal matter depends
              on its unique facts and circumstances.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
              Information Accuracy
            </h1>
            <p className="font-instrument-sans-regular text-base font-medium text-[#072240]">
              While we strive to ensure that all information on our website is
              accurate and up-to-date, we make no representations or warranties
              about the completeness, reliability, or accuracy of this
              information. Any reliance you place on such information is
              strictly at your own risk.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
              Third-Party Links
            </h1>
            <p className="font-instrument-sans-regular text-base font-medium text-[#072240]">
              Our website may contain links to third-party websites. These links
              are provided for convenience only. Chambers of Zainul Rijal has no
              control over the content of those sites and accepts no
              responsibility for them or for any loss or damage that may arise
              from your use of them.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
              Specific Practice Areas
            </h1>
            <p className="font-instrument-sans-regular text-base font-medium text-[#072240]">
              The information on this website relates to Malaysian law and our
              practice areas, including:
            </p>
            <ul className="pl-7 list-decimal">
              <li className="font-instrument-sans-regular text-base font-medium text-[#072240]">
                Contract Law
              </li>
              <li className="font-instrument-sans-regular text-base font-medium text-[#072240]">
                Property Law
              </li>
              <li className="font-instrument-sans-regular text-base font-medium text-[#072240]">
                Tort Law
              </li>
              <li className="font-instrument-sans-regular text-base font-medium text-[#072240]">
                Family Law
              </li>
              <li className="font-instrument-sans-regular text-base font-medium text-[#072240]">
                Administrative and Constitutional Law
              </li>
              <li className="font-instrument-sans-regular text-base font-medium text-[#072240]">
                Commercial and Corporate Law
              </li>
              <li className="font-instrument-sans-regular text-base font-medium text-[#072240]">
                Construction Law
              </li>
              <li className="font-instrument-sans-regular text-base font-medium text-[#072240]">
                Employment Law
              </li>
              <li className="font-instrument-sans-regular text-base font-medium text-[#072240]">
                Probate and Administration of Estates
              </li>
              <li className="font-instrument-sans-regular text-base font-medium text-[#072240]">
                Islamic Family Law
              </li>
              <li className="font-instrument-sans-regular text-base font-medium text-[#072240]">
                Islamic Inheritance Law
              </li>
              <li className="font-instrument-sans-regular text-base font-medium text-[#072240]">
                Islamic Finance
              </li>
              <li className="font-instrument-sans-regular text-base font-medium text-[#072240]">
                Charitable Endowments
              </li>
              <li className="font-instrument-sans-regular text-base font-medium text-[#072240]">
                Islamic Criminal Law
              </li>
              <li className="font-instrument-sans-regular text-base font-medium text-[#072240]">
                Mediation
              </li>
              <li className="font-instrument-sans-regular text-base font-medium text-[#072240]">
                Arbitration
              </li>
              <li className="font-instrument-sans-regular text-base font-medium text-[#072240]">
                Conciliation
              </li>
              <li className="font-instrument-sans-regular text-base font-medium text-[#072240]">
                Mediation Training
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
              Changes to Website
            </h1>
            <p className="font-instrument-sans-regular text-base font-medium text-[#072240]">
              Chambers of Zainul Rijal reserves the right to make changes to the
              website and these disclaimers at any time without notice.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
              Applicable Law
            </h1>
            <p className="font-instrument-sans-regular text-base font-medium text-[#072240]">
              This disclaimer shall be governed by and construed in accordance
              with the laws of Malaysia, without regard to its conflict of law
              provisions.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
              Contact Us
            </h1>
            <div className="flex flex-col gap-1.5">
              <p className="font-instrument-sans-regular text-base font-medium text-[#072240]">
                Chambers of Zainul Rijal
              </p>
              <p className="font-instrument-sans-regular text-base font-medium text-[#072240]">
                No. 15-5 Floor Jalan USJ 9/5Q, <br /> Subang Business Centre,
                47620 <br />
                UEP Subang Jaya Selangor, Malaysia
              </p>
              <p className="font-instrument-sans-regular text-base font-medium text-[#072240]">
                Office: +603-80819551
              </p>
              <p className="font-instrument-sans-regular text-base font-medium text-[#072240]">
                Email: czarlawusj@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
