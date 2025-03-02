import React from "react";
// import HeaderBottom from "./header-bottom";
import HeaderTop from "./header-top";
import HeaderBottom from "./header-bottom";

export default function Navigation() {
  return (
    <React.Fragment>
      <header className="flex flex-col sticky top-0 z-20">
        <div className="bg-white">
          <HeaderTop />
        </div>
        <div className="bg-[#E9E2DB] relative">
          <HeaderBottom />
        </div>
      </header>
    </React.Fragment>
  );
}
