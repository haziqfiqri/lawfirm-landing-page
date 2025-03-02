import React from "react";
import MapBox from "@/components/map-box";
import OfficeLocation from "@/components/office-location";
import Breadcrumbs from "@/components/breadcrumbs";

export default function Page() {
  return (
    <React.Fragment>
      <MapBox />
      <div className="container px-4 sm:mx-auto grid grid-cols-1 max-w-7xl">
        <Breadcrumbs items={["Home", "About Us", "Contact Us"]} />
        <OfficeLocation />
      </div>
    </React.Fragment>
  );
}
