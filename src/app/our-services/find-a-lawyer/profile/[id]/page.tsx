"use client";

import ProfileHero from "@/components/profile-hero";
import React, { use } from "react";
import teams from "@/data/teams.json";
import ProfileBio from "@/components/profile-bio";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  const { id } = unwrappedParams;

  const item = teams.find((team) => team.id === id);

  if (item) {
    return (
      <React.Fragment>
        <ProfileHero item={item} />
        <div className="bg-[#F6F3F1]">
          <ProfileBio />
        </div>
      </React.Fragment>
    );
  }
}
