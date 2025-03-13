"use client";

import ProfileHero from "@/components/profile-hero";
import React, { use } from "react";
import teams from "@/data/teams.json";
import ProfileBio from "@/components/profile-bio";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  const { id } = unwrappedParams;

  const lawyer = teams.find((data) => data.id === id);

  if (lawyer) {
    return (
      <React.Fragment>
        <ProfileHero data={lawyer} />
        <div className="bg-[#F6F3F1]">
          <ProfileBio data={lawyer} />
        </div>
      </React.Fragment>
    );
  }
}
