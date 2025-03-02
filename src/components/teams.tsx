import React from "react";
import TeamsItem, { ITeamsItem } from "./teams-item";

export default function Teams({
  label,
  data,
}: {
  label: string;
  data: Array<ITeamsItem>;
}) {
  return (
    <React.Fragment>
      <section className="flex flex-col my-12">
        <h1 className="font-tinos-regular font-normal text-xl text-[#8F6F4C]">
          {label || "All Services"}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 my-12 gap-y-20 gap-x-10">
          {data.map((item, index) => (
            <TeamsItem item={item} key={index} />
          ))}
        </div>
      </section>
    </React.Fragment>
  );
}
