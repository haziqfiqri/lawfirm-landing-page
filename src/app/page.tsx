import Faq from "@/components/faq";
import FeaturedMedia from "@/components/featured-media";
import Hero from "@/components/hero";
import Highlights from "@/components/highlights";
import News from "@/components/news";
import Practices from "@/components/practices";
import WhyUs from "@/components/why-us";
import ReactLenis from "lenis/react";

export default function Page() {
  return (
    <ReactLenis root>
      <Hero />
      <div className="container px-4 sm:mx-auto grid grid-cols-1 max-w-7xl">
        <Highlights />
        <Practices />
        <News />
        <FeaturedMedia />
        <WhyUs />
        <Faq />
      </div>
    </ReactLenis>
  );
}
