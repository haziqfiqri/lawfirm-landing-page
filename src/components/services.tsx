import React from "react";
import ServicesItem, { IServicesItem } from "./services-item";

export default function Services({
  label,
  data,
}: {
  label: string;
  data: Array<IServicesItem>;
}) {
  return (
    <React.Fragment>
      <section className="flex flex-col my-12">
        <h1 className="font-tinos-regular font-normal text-xl text-[#8F6F4C] my-">
          {label || "All Services"}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 my-12 gap-y-5 gap-x-8">
          {data.length > 0 ? (
            data.map((item, index) => <ServicesItem item={item} key={index} />)
          ) : (
            <div className="col-span-2 text-center py-8 font-tinos-regular font-normal text-xl text-[#072240]">
              No services found matching your search.
            </div>
          )}
        </div>
      </section>
    </React.Fragment>
  );
}
