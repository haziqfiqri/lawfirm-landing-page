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
      <section className="relative flex min-h-64 lg:min-h-96 bg-[url('/assets/section-banners/section-banner-practices.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
        <div className="relative px-4 container sm:mx-auto max-w-7xl">
          <div className="flex flex-col h-full justify-center">
            <h1 className="font-tinos-regular font-normal text-4xl text-white">
              Legal Practices
            </h1>
          </div>
        </div>
      </section>
      <div className="container px-4 sm:mx-auto grid grid-cols-1 max-w-7xl">
        <Breadcrumbs items={["Home", "Our Services", "Legal Practices"]} />
        <Search
          onSearchChange={handleSearchChange}
          placeholder="Type here to filter services"
        />
        <Services label="All Services" data={filteredServices} />
      </div>
    </React.Fragment>
  );
}
