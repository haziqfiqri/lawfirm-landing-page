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
              Terms of Use
            </h1>
          </div>
        </div>
      </section>
      <div className="container px-4 sm:mx-auto grid grid-cols-1 max-w-7xl">
        <Breadcrumbs items={["Home", "Terms of Use"]} />
        <div className="flex flex-col gap-10 py-12">
          <div className="flex flex-col gap-4">
            <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
              Acceptance of Terms
            </h1>
            <p className="font-instrument-sans-regular text-base font-medium text-[#072240]">
              By accessing and using the Chambers of Zainul Rijal website
              (&quote;Website&quote;), you accept and agree to be bound by these
              Terms of Use. If you do not agree to these Terms, you should not
              use this Website.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
              Use of Website
            </h1>
            <p className="font-instrument-sans-regular text-base font-medium text-[#072240]">
              You agree to use this Website only for lawful purposes and in a
              manner that does not infringe the rights of, or restrict or
              inhibit the use and enjoyment of, this Website by any third party.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
              Intellectual Property Rights
            </h1>
            <p className="font-instrument-sans-regular text-base font-medium text-[#072240]">
              All content on this Website, including but not limited to text,
              graphics, logos, images, audio clips, digital downloads, data
              compilations, and software, is the property of Chambers of Zainul
              Rijal or its content suppliers and is protected by Malaysian and
              international copyright laws.
            </p>
            <p className="font-instrument-sans-regular text-base font-medium text-[#072240]">
              You may not reproduce, modify, distribute, or republish materials
              contained on this Website without our prior written consent. You
              may download one copy of the materials for personal,
              non-commercial use only, provided you do not delete or change any
              copyright, trademark, or other proprietary notices.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
              No Legal Advice
            </h1>
            <p className="font-instrument-sans-regular text-base font-medium text-[#072240]">
              The content on this Website is provided for informational purposes
              only and does not constitute legal advice. No attorney-client
              relationship is created by your use of this Website or by your
              communication with us through this Website. For legal advice
              related to our practice areas, including Contract Law, Property
              Law, Islamic Family Law, and others, please contact us directly at
              +603-80819551.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
              Inquiry Form
            </h1>
            <p className="font-instrument-sans-regular text-base font-medium text-[#072240]">
              Our Website provides an inquiry form for potential clients to
              describe their legal matters. By submitting this form, you consent
              to the collection and processing of the information you provide in
              accordance with our Personal Data Protection Notice.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
              Prohibited Uses
            </h1>
            <p className="font-instrument-sans-regular text-base font-medium text-[#072240]">
              You agree not to:
            </p>
            <ul className="pl-7 list-decimal">
              <li className="font-instrument-sans-regular text-base font-medium text-[#072240]">
                Use the Website in any way that breaches applicable Malaysian or
                international law or regulation
              </li>
              <li className="font-instrument-sans-regular text-base font-medium text-[#072240]">
                Use the Website to send, knowingly receive, upload, download,
                use, or re-use any material that does not comply with these
                Terms
              </li>
              <li className="font-instrument-sans-regular text-base font-medium text-[#072240]">
                Transmit any material that is defamatory, offensive, or
                otherwise objectionable
              </li>
              <li className="font-instrument-sans-regular text-base font-medium text-[#072240]">
                Attempt to gain unauthorized access to our Website, the server
                on which our Website is stored, or any server, computer, or
                database connected to our Website
              </li>
              <li className="font-instrument-sans-regular text-base font-medium text-[#072240]">
                Attack our Website via a denial-of-service attack or a
                distributed denial-of-service attack
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
              Links to Other Websites
            </h1>
            <p className="font-instrument-sans-regular text-base font-medium text-[#072240]">
              Our Website may contain links to third-party websites. These links
              are provided solely for your convenience. We do not control and
              are not responsible for the content of any third-party sites or
              any links contained in them.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
              Limitation of Liability
            </h1>
            <p className="font-instrument-sans-regular text-base font-medium text-[#072240]">
              To the fullest extent permitted by Malaysian law, Chambers of
              Zainul Rijal excludes all liability for any loss or damage,
              including without limitation, indirect or consequential loss or
              damage, or any loss or damage whatsoever arising from loss of data
              or profits arising out of, or in connection with, the use of this
              Website.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
              Indemnification
            </h1>
            <p className="font-instrument-sans-regular text-base font-medium text-[#072240]">
              You agree to indemnify and hold harmless Chambers of Zainul Rijal,
              its partners, employees, and affiliates from and against all
              losses, expenses, damages, and costs, including reasonable
              attorneys&apos; fees, resulting from any violation of these Terms
              or any activity related to your use of the Website.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
              Changes to Terms
            </h1>
            <p className="font-instrument-sans-regular text-base font-medium text-[#072240]">
              We reserve the right to change these Terms at any time. Please
              check this page regularly to ensure you are familiar with the
              current version.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
              Governing Law and Jurisdiction
            </h1>
            <p className="font-instrument-sans-regular text-base font-medium text-[#072240]">
              These Terms shall be governed by and construed in accordance with
              the laws of Malaysia, and any disputes relating to these Terms
              shall be subject to the exclusive jurisdiction of the courts of
              Malaysia.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
              Severability
            </h1>
            <p className="font-instrument-sans-regular text-base font-medium text-[#072240]">
              If any provision of these Terms is found to be invalid by any
              court having competent jurisdiction, the invalidity of such
              provision shall not affect the validity of the remaining
              provisions of these Terms, which shall remain in full force and
              effect.
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
                Email: contact@czarlawfirm.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
