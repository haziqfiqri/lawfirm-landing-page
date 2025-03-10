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
      team.description.toLowerCase().includes(query) ||
      team.practices.some((pill) => pill.toLowerCase().includes(query))
    );
  });

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <React.Fragment>
      <div className="container px-4 sm:mx-auto grid grid-cols-1">
        <Breadcrumbs items={["Home", "Our Services", "Find A Lawyer"]} />{" "}
        <Search
          onSearchChange={handleSearchChange}
          placeholder="Type here to filter lawyers"
        />
      </div>
      <div className="container px-4 sm:mx-auto grid grid-cols-1 max-w-7xl">
        <Teams label="All Lawyers" data={filteredTeams} />
      </div>
    </React.Fragment>
  );
}
