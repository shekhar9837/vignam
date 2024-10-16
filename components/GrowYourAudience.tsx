import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const GrowYourAudience = () => {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-4 py-12 md:gap-12 md:py-24 xl:pe-4 xl:ps-0 mt-8 md:mt-0">
      <p className="relative max-w-4xl text-balance text-3xl font-medium tracking-[-0.4px] text-neutral-400 md:text-[40px] md:leading-[42px] gap-2">
        <span className="text-neutral-800 inline-block">
          Grow your audience with powerful visuals
        </span>
        shared across all your social media platforms.
      </p>

      <Link
        href=""
        className="relative inline-flex w-fit items-center justify-center gap-1 whitespace-nowrap rounded-xl bg-neutral-900 px-4 py-2.5 text-md font-semibold leading-6 tracking-[-0.3px] text-white transition-colors hover:bg-neutral-800 md:px-6 md:py-3 md:text-lg"
      >
        Get Started for FREE
        <ArrowRight size={16} />
      </Link>
    </section>
  );
};

export default GrowYourAudience;
