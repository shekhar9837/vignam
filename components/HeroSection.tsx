import { ClipboardList } from "lucide-react";
import React from "react";
import TweetsSVG from "./TweetsSVG";


const HeroSection = () => {
  return (
    <div className="mx-auto mt-8 flex w-full max-w-6xl flex-col gap-8 px-4 py-7 text-center md:mt-0 md:py-28 xl:pe-4 xl:ps-0">
      <div className="mx-auto w-full max-w-5xl text-balance px-8 text-center text-[30px] font-bold leading-[32px] tracking-[-1.4px] text-[#252424] md:px-0 md:text-[80px] md:leading-[80px]">
        Convert
        <div className="relative inline-block mx-2 ">Tweets

            <TweetsSVG/>
        </div>
        into Engaging Social Media Posts, Instantly!
        <p className="mx-auto max-w-72 text-balance tracking-normal px-8 text-md font-medium text-neutral-900 sm:block md:mt-12 md:max-w-fit md:text-xl hidden">
          Paste your tweet link below to get started for FREE
        </p>
      </div>
      <div className="relative md:mt-12">
        <div className="mx-auto hidden max-w-xl items-center gap-1 rounded-2xl border-[1.5px] border-neutral-50 bg-white pl-5 pr-3 shadow-input-container shadow-lg focus-within:border-neutral-200 sm:flex lg:max-w-3xl">
          <input
            type="text"
            className="flex-1 py-5 text-lg font-normal text-neutral-900 placeholder-neutral-500 focus-visible:outline-none "
            placeholder="Paste tweet link here..."
          />
          <button className="relative inline-flex h-10 items-center justify-center gap-1 rounded-[8px] bg-neutral-100 px-4 text-neutral-900">
            <span className="text-sm font-medium">Paste</span>
            <ClipboardList size={14} />
          </button>
        </div>
      
          <p className="text-xs font-medium text-neutral-400 md:mt-4">
            No signup, no credit card, no crap!
          </p>
        
      </div>
      <div> </div>
    </div>
  );
};

export default HeroSection;
