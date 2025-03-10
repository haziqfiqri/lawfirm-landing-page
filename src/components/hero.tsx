import React from "react";
import StepperForm from "./stepper-form";

export default function Hero() {
  return (
    <React.Fragment>
      <section className="relative flex min-h-96 w-full overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 min-h-full min-w-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/banners/banner-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Optional overlay to improve text readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10"></div>

        {/* Content */}
        <div className="relative flex flex-col lg:flex-row justify-center items-center w-full text-white z-10 py-4 px-4 container sm:mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 w-full lg:w-1/2">
            <h1 className="font-tinos-regular font-normal text-4xl lg:text-6xl text-white">
              Let us assist on your legal matters
            </h1>
            <p className="font-instrument-sans-regular font-normal text-lg lg:text-xl max-w-2xl mb-5">
              that suites today&apos; problems.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <StepperForm />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
