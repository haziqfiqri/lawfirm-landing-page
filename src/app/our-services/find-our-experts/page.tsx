"use client";

import React, { useState } from "react";
import teams from "@/data/teams.json";
import Breadcrumbs from "@/components/breadcrumbs";
import Search from "@/components/search";
import Teams from "@/components/teams";

export default function Page() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTeams = teams.filter((team) => {
    const query = searchQuery.toLowerCase().trim();

    if (query === "") return true;

    return (
      team.name.toLowerCase().includes(query) ||
      team.role.toLowerCase().includes(query) ||
      team.practices.some((pill) => pill.toLowerCase().includes(query))
    );
  });

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <React.Fragment>
      <section className="relative flex min-h-64 lg:min-h-96 bg-[url('/assets/section-banners/section-banner-people.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
        <div className="relative px-4 container sm:mx-auto max-w-7xl">
          <div className="flex flex-col h-full justify-center">
            <h1 className="font-tinos-regular font-normal text-4xl text-white">
              Find Our Experts
            </h1>
          </div>
        </div>
      </section>
      <div className="container px-4 sm:mx-auto grid grid-cols-1 max-w-7xl">
        <Breadcrumbs items={["Home", "Our Services", "Find Our Experts"]} />{" "}
        <Search
          onSearchChange={handleSearchChange}
          placeholder="Type here to filter lawyers"
        />
        <Teams label="All Lawyers" data={filteredTeams} />
      </div>
    </React.Fragment>
  );
}
