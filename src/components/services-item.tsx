import React from "react";

export interface IServicesItem {
  title: string;
  icon: string;
  description: string;
  pills: Array<string>;
}

export default function ServicesItem({ item }: { item: IServicesItem }) {
  return (
    <React.Fragment>
      <div className="flex border-2 border-[#072240] h-[140px]">
        <div className="bg-[#AD967D] flex justify-center items-center w-1/4">
          {/* <IconComponent size={75} className="text-white" strokeWidth={1} /> */}
          <span className="material-symbols-outlined text-6xl text-white">
            {item.icon || "gavel"}
          </span>
        </div>
        <div className="flex flex-col w-3/4 p-4">
          <h1 className="font-tinos-regular font-semibold text-xl text-[#072240]">
            {item.title}
          </h1>
          <h1 className="font-tinos-regular font-normal text-xl text-[#072240] line-clamp-2">
            {item.description}
          </h1>
        </div>
      </div>
    </React.Fragment>
  );
}
