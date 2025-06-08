import React from "react";
import { ITeamsItem } from "./teams-item";

export default function ProfileBio({ data }: { data: ITeamsItem }) {
  return (
    <React.Fragment>
      <div className="container px-4 sm:mx-auto grid grid-cols-1 max-w-7xl bg-[#F6F3F1]">
        <section className="grid grid-cols-1 lg:grid-cols-2 py-12">
          <div className="flex flex-col gap-2.5">
            <div className="flex gap-2.5">
              <span className="font-tinos-regular font-semibold text-2xl text-[#072240]">
                —
              </span>
              <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
                Certification & Qualification
              </h1>
            </div>

            <div className="flex flex-col gap-2.5">
              {data.qualifications.map((qualificiation, index) => (
                <div className="flex gap-2.5" key={index}>
                  <span className="invisible font-tinos-regular font-semibold text-2xl text-[#072240]">
                    —
                  </span>
                  <p className="font-tinos-regular font-normal text-lg text-[#072240]">
                    {qualificiation}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2.5">
                <div className="flex gap-2.5">
                  <span className="font-tinos-regular font-semibold text-2xl text-[#072240]">
                    —
                  </span>
                  <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
                    Specialty
                  </h1>
                </div>

                <div className="flex flex-col">
                  {data.practices.map((practice, index) => (
                    <div className="flex gap-2.5" key={index}>
                      <span className="invisible font-tinos-regular font-semibold text-2xl text-[#072240]">
                        —
                      </span>
                      <p className="font-tinos-regular font-normal text-lg text-[#072240]">
                        {practice || "N/A"}
                      </p>
                    </div>
                  ))}
                  {/* <div className="flex gap-2.5">
                    <span className="invisible font-tinos-regular font-semibold text-2xl text-[#072240]">
                      —
                    </span>
                    <p className="font-tinos-regular font-normal text-lg text-[#072240]">
                      {data.practices.join(", ") || "N/A"}
                    </p>
                  </div> */}
                </div>
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="flex gap-2.5">
                  <span className="font-tinos-regular font-semibold text-2xl text-[#072240]">
                    —
                  </span>
                  <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
                    Languages
                  </h1>
                </div>

                <div className="flex flex-col">
                  <div className="flex gap-2.5">
                    <span className="invisible font-tinos-regular font-semibold text-2xl text-[#072240]">
                      —
                    </span>
                    <p className="font-tinos-regular font-normal text-lg text-[#072240]">
                      {data.languages?.join(", ") || ""}
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="flex flex-col gap-2.5">
                <div className="flex gap-2.5">
                  <span className="font-tinos-regular font-semibold text-2xl text-[#072240]">
                    —
                  </span>
                  <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
                    Level
                  </h1>
                </div>

                <div className="flex flex-col">
                  <div className="flex gap-2.5">
                    <span className="invisible font-tinos-regular font-semibold text-2xl text-[#072240]">
                      —
                    </span>
                    <p className="font-tinos-regular font-normal text-lg text-[#072240]">
                      TBA
                    </p>
                  </div>
                </div>
              </div> */}
              <div className="flex flex-col gap-2.5">
                <div className="flex gap-2.5">
                  <span className="font-tinos-regular font-semibold text-2xl text-[#072240]">
                    —
                  </span>
                  <h1 className="font-tinos-regular font-normal text-2xl text-[#8F6F4C]">
                    Years in Practice
                  </h1>
                </div>

                <div className="flex flex-col">
                  <div className="flex gap-2.5">
                    <span className="invisible font-tinos-regular font-semibold text-2xl text-[#072240]">
                      —
                    </span>
                    <p className="font-tinos-regular font-normal text-lg text-[#072240]">
                      {data.yip || "N/A"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}
