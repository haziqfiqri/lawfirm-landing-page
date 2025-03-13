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
              Personal Data Protection Notice
            </h1>
          </div>
        </div>
      </section>
      <div className="container px-4 sm:mx-auto grid grid-cols-1 max-w-7xl">
        <Breadcrumbs items={["Home", "Personal Data Protection Notice"]} />
        <div className="flex flex-col gap-10 py-12">
          <div className="flex flex-col gap-4">
            <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
              Introduction
            </h1>
            <p className="font-instrument-sans-regular text-base font-medium text-[#072240]">
              At Chambers of Zainul Rijal, we are committed to protecting your
              personal data and respecting your privacy. This Personal Data
              Protection Notice explains how we collect, use, disclose, and
              safeguard your personal data when you visit our website or engage
              our services.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
              Personal Data We Collect
            </h1>
            <p className="font-instrument-sans-regular text-base font-medium text-[#072240]">
              We may collect the following types of personal data:
            </p>
            <ul className="pl-7 list-decimal">
              <li className="font-instrument-sans-regular text-base font-medium text-[#072240]">
                Identity and Contact Information: Name, email address, phone
                number
              </li>
              <li className="font-instrument-sans-regular text-base font-medium text-[#072240]">
                Case-Related Information: Details about your legal inquiry or
                matter
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
              How We Collect Your Personal Data
            </h1>
            <p className="font-instrument-sans-regular text-base font-medium text-[#072240]">
              We collect personal data primarily through:
            </p>
            <ul className="pl-7 list-decimal">
              <li className="font-instrument-sans-regular text-base font-medium text-[#072240]">
                Direct interactions (when you contact us through our inquiry
                form or other direct communications)
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
              Purposes for Processing Personal Data
            </h1>
            <p className="font-instrument-sans-regular text-base font-medium text-[#072240]">
              We process your personal data for the following purposes:
            </p>
            <ul className="pl-7 list-decimal">
              <li className="font-instrument-sans-regular text-base font-medium text-[#072240]">
                To provide legal services and consultations
              </li>
              <li className="font-instrument-sans-regular text-base font-medium text-[#072240]">
                To respond to your inquiries about our practice areas
              </li>
              <li className="font-instrument-sans-regular text-base font-medium text-[#072240]">
                To manage our relationship with you
              </li>
              <li className="font-instrument-sans-regular text-base font-medium text-[#072240]">
                To administer and protect our business and website
              </li>
              <li className="font-instrument-sans-regular text-base font-medium text-[#072240]">
                To comply with legal and regulatory obligations
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
              Legal Basis for Processing
            </h1>
            <p className="font-instrument-sans-regular text-base font-medium text-[#072240]">
              We process your personal data based on:
            </p>
            <ul className="pl-7 list-decimal">
              <li className="font-instrument-sans-regular text-base font-medium text-[#072240]">
                Your consent, provided when you submit information through our
                inquiry form
              </li>
              <li className="font-instrument-sans-regular text-base font-medium text-[#072240]">
                Performance of a contract when you engage our services
              </li>
              <li className="font-instrument-sans-regular text-base font-medium text-[#072240]">
                Compliance with legal obligations under Malaysian law
              </li>
              <li className="font-instrument-sans-regular text-base font-medium text-[#072240]">
                Legitimate interests of our law firm
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
              Data Retention
            </h1>
            <p className="font-instrument-sans-regular text-base font-medium text-[#072240]">
              We will only retain your personal data for as long as necessary to
              fulfill the purposes for which it was collected, including for the
              purposes of satisfying any legal, regulatory, tax, accounting, or
              reporting requirements under Malaysian law.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
              Your Rights Under Malaysian Personal Data Protection Act
            </h1>
            <p className="font-instrument-sans-regular text-base font-medium text-[#072240]">
              Under the Personal Data Protection Act 2010 (PDPA), you have
              rights regarding your personal data, including:
            </p>
            <ul className="pl-7 list-decimal">
              <li className="font-instrument-sans-regular text-base font-medium text-[#072240]">
                The right to access your personal data
              </li>
              <li className="font-instrument-sans-regular text-base font-medium text-[#072240]">
                The right to correct inaccurate personal data
              </li>
              <li className="font-instrument-sans-regular text-base font-medium text-[#072240]">
                The right to withdraw consent to the processing of your personal
                data
              </li>
              <li className="font-instrument-sans-regular text-base font-medium text-[#072240]">
                The right to limit the processing of your personal data in
                certain circumstances
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
              Data Security
            </h1>
            <p className="font-instrument-sans-regular text-base font-medium text-[#072240]">
              We have implemented appropriate security measures to prevent your
              personal data from being accidentally lost, used, or accessed in
              an unauthorized way, altered, or disclosed.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
              Changes to This Notice
            </h1>
            <p className="font-instrument-sans-regular text-base font-medium text-[#072240]">
              We may update this Personal Data Protection Notice from time to
              time. We will notify you of any changes by posting the new notice
              on our website.
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
