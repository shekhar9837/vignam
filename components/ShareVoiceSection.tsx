import { Facebook, Instagram, Linkedin, Plus } from "lucide-react";
import Image from "next/image";
import React from "react";

const ShareVoiceSection = () => {
  const socialButtons = [
    {
      icon: <Instagram className="h-4 w-4 text-white" />,
      name: "Instagram Story",
    },
    {
      icon: <Linkedin className="h-4 w-4 text-white" />,
      name: "Linkedin Post",
    },
    {
      icon: <Facebook className="h-4 w-4 text-white" />,
      name: "facebook Post",
    },
    {
      icon: <Instagram className="h-4 w-4 text-white" />,
      name: "Instagram Post",
    },
    {
      icon: <Plus className="h-4 w-4 text-white" />,
      name: "more",
    },
  ];

  return (
    <section className="relative mx-auto mb-12 w-fit max-w-full rounded-[16px] bg-cover bg-top pt-8 sm:mb-16 sm:rounded-[32px] md:mb-24 md:rounded-[64px] md:px-12 lg:px-24 lg:pt-12 bg-red-900 ">
      <header>
        <h3 className="mx-auto max-w-sm text-balance text-center text-2xl leading-[28px] text-white sm:max-w-md sm:text-3xl sm:leading-[36px] md:max-w-2xl md:text-5xl md:leading-[48px] lg:text-6xl lg:leading-[54px]">
          Share Your Voice Beyond Just a Tweet
        </h3>
        <p className="mx-auto my-4 max-w-xs text-balance text-center text-sm font-normal leading-[18px] text-white sm:my-5 sm:max-w-sm md:my-8 md:max-w-xl md:text-base lg:my-12 lg:text-lg">
          Keep your online presence steady and growing by creating customizable
          images from your tweets, perfect for Instagram, Facebook, and more.
        </p>
      </header>
      <div className="scrollbar-hide mx-auto my-6 flex max-w-full items-center justify-start gap-3  px-4 sm:justify-center sm:gap-4 md:my-8 md:gap-5">
        {socialButtons.map((btn) => (
          <button className="flex flex-shrink-0 items-center  rounded-[8px]  text-white transition-all duration-200 ease-in-out sm:rounded-[10px] sm:px-3 sm:py-2 opacity-50 hover:opacity-75 active:opacity-100 hover:scale-105 active:scale-95 text-sm ">
            <div className="flex flex-shrink-0 items-center gap-1 rounded-[8px]  text-white transition-all duration-200 ease-in-out sm:rounded-[10px] sm:px-3 sm:py-2 opacity-50 hover:opacity-75 active:opacity-100 hover:scale-105 active:scale-95 bg-red-200">
              {btn.icon}
              {btn.name}
            </div>
          </button>
        ))}
      </div>

      <div className="relative flex items-center justify-center pt-12 sm:pt-16 md:pt-20 lg:pt-24 ">
        <div className="absolute origin-center drop-shadow-xl ">
          <div className="preview-container relative h-fit w-[26rem] overflow-hidden  ">
            <div className="group/preview relative flex h-fit w-fit flex-shrink-0 origin-bottom-left flex-col rounded-3xl transition-colors bg-red-400 ">
            

            <div className="relative flex w-full flex-shrink-0 select-none items-center gap-1 px-5 transition-colors h-12 rounded-t-3xl bg-white/20 text-white backdrop-blur-lg group-hover/preview:text-white/90">
              <Facebook />
              <span className="flex-1 text-xs font-medium">
                Facebook
                <span className="lowercase">Post</span>
              </span>
            </div>
            
            <div className="relative overflow-hidden rounded-b-3xl bg-red-900 w-full">
                <div className="px-12 py-28 min-w-fit">

                  <section className="z-20 flex min-h-fit w-full min-w-fit max-w-full flex-col gap-4 bg-white p-5 drop-shadow-lg transition-transform duration-75">
                    <header className="pointer-events-none flex select-none items-center gap-1.5">
                      <Image
                        src="https://pbs.twimg.com/profile_images/1825057263876243456/jRiAsgd__400x400.jpg"
                        alt="user"
                        width="300"
                        height="300"
                        className="w-4 h-4"
                      />
                      <div className="flex flex-1 gap-1 text-md font-bold leading-none text-black">
                        <div className="flex flex-col">
                          <div className="flex items-center gap-1">
                            Postable
                            {/* SVG */}
                          </div>
                          <div className="text-xs font-medium text-muted-foreground">
                            @ PostableApp
                          </div>
                        </div>
                      </div>
                    </header>
                    <div className="pointer-events-none flex select-none flex-col w-full">
                      <div className="tweet-body whitespace-pre-line text-sm font-medium text-black [&_a]:font-bold [&_a]:text-blue-400 w-full min-w-fit">
                        <p>
                          <span>
                            Sharing your tweets across multiple platform made
                            easy. Postable helps you creating engaging vis
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="pointer-events-none flex h-3 select-none justify-between overflow-visible text-2xs font-medium leading-none text-muted-foreground">
                      <p className="min-w-fit flex-shrink-0">
                        9:42 PM · Jul 29, 2024
                      </p>
                    </div>
                  </section>
                        </div>
                        </div>

            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShareVoiceSection;
