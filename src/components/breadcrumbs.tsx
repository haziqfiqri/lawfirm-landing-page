import { Slash } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

export default function Breadcrumbs({ items }: { items: Array<string> }) {
  return (
    <Breadcrumb className="pt-12">
      <BreadcrumbList>
        {items.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/"
                  className="text-[#072240] font-instrument-sans-regular text-base font-medium"
                >
                  {item}
                </BreadcrumbLink>
              </BreadcrumbItem>
              {index !== items.length - 1 && (
                <BreadcrumbSeparator>
                  <Slash className="text-[#072240] font-instrument-sans-regular text-base font-medium" />
                </BreadcrumbSeparator>
              )}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
