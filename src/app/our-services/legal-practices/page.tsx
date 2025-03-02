"use client";

import React, { useState } from "react";
import services from "@/data/services.json";
import Breadcrumbs from "@/components/breadcrumbs";
import Search from "@/components/search";
import Services from "@/components/services";

export default function Page() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = services.filter((service) => {
    const query = searchQuery.toLowerCase().trim();

    if (query === "") return true;

    return (
      service.title.toLowerCase().includes(query) ||
      service.description.toLowerCase().includes(query) ||
      service.pills.some((pill) => pill.toLowerCase().includes(query))
    );
  });

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <React.Fragment>
      <div className="container px-4 sm:mx-auto grid grid-cols-1">
        <Breadcrumbs items={["Home", "Our Services", "Legal Practices"]} />
        <Search
          onSearchChange={handleSearchChange}
          placeholder="Type here to filter services"
        />
      </div>
      <div className="container px-4 sm:mx-auto grid grid-cols-1 max-w-7xl">
        <Services label="All Services" data={filteredServices} />
      </div>
    </React.Fragment>
  );
}
