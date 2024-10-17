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
      name: "Facebook Post",
    },
    {
      icon: <Instagram className="h-4 w-4 text-white" />,
      name: "Instagram Post",
    },
    {
      icon: <Plus className="h-4 w-4 text-white" />,
      name: "More",
    },
  ];

  return (
    <section className="relative mx-auto  w-fit max-w-full px-8 md:pb-24 rounded-[16px] bg-cover bg-top pt-8 sm:mb-16 sm:rounded-[32px] md:mb-24 md:rounded-[64px] md:px-16 lg:px-24 lg:pt-12 bg-[url('/assets/section-background.webp')]">
      <header>
        <h3 className="mx-auto max-w-sm text-center text-2xl font-extrabold text-white sm:max-w-md sm:text-3xl md:max-w-2xl md:text-5xl lg:text-6xl">
          Share Your Voice Beyond Just a Tweet
        </h3>
        <p className="mx-auto my-4 max-w-xs text-center text-sm text-white sm:max-w-sm md:max-w-xl lg:my-12 lg:text-lg">
          Keep your online presence steady and growing by creating customizable images from your tweets, perfect for Instagram, Facebook, and more.
        </p>
      </header>
      
      <div className="scrollbar-hide mx-auto my-6 flex max-w-full items-center justify-start gap-3 overflow-x-auto px-4 sm:justify-center sm:gap-4 md:my-8 md:gap-5">
        {socialButtons.map((btn, idx) => (
          <button key={idx} className="flex flex-shrink-0 items-center gap-1 rounded-[8px] px-2 py-1.5 text-white transition-all duration-200 ease-in-out sm:rounded-[10px] sm:px-3 sm:py-2 opacity-50 hover:opacity-75 active:opacity-100 hover:scale-105 active:scale-95">
            {btn.icon}
            {btn.name}
          </button>
        ))}
      </div>

      <div className="relative flex items-center justify-center pt-28 mb-44 sm:pt-16 md:pt-20 lg:pt-24">
        <div className="absolute ">
          {/* <div className="  bg-red  w-[28rem] h-fit "> */}

        
          <div className="preview-container relative md:w-[26rem] w-[18rem] overflow-hidden mt-20">
            <div className="group/preview relative flex h-fit w-fit flex-shrink-0 origin-bottom-left flex-col rounded-3xl  transition-colors">
              
              <div className="relative flex w-full flex-shrink-0 select-none items-center gap-1 px-5 transition-colors h-12 rounded-t-3xl  bg-white/20 text-white backdrop-blur-lg group-hover/preview:text-white/90">
                <Facebook />
                <span className="flex-1 text-xs font-medium">
                  Facebook<span className="lowercase"> Post</span>
                </span>
              </div>

              <div className="relative overflow-hidden rounded-b-3xl " style={{ width: '416px', height: '260px' }}>
                <div  className="relative flex h-full w-full flex-1 items-center justify-center px-6 py-12">
                  <div className="absolute inset-0 h-full  md:w-full bg-cover" style={{ backgroundImage: "url('https://res.cloudinary.com/dzv61qpeu/image/upload/v1726501013/textures-2_kglato.webp')" }}></div>
                  <section className="z-0 w-full flex  flex-col gap-4 bg-white p-5 drop-shadow-lg transition-transform duration-75 rounded-2xl" >
                    <header className="flex items-center gap-1.5">
                      <Image width={1920} height={1080}  src="https://pbs.twimg.com/profile_images/1825057263876243456/jRiAsgd__400x400.jpg" alt="Postable" className="h-10 w-10 rounded-full object-cover" />
                      <div className="flex flex-1 gap-1 text-md font-bold">
                        <div className="flex flex-col">
                          <div className="flex items-center gap-1">Postable</div>
                          <div className="text-xs font-medium">@postable_app</div>
                        </div>
                      </div>
                    </header>
                    <div className="tweet-body text-sm font-medium text-black">
                      Sharing your tweets across multiple platforms made easy. Postable helps you create engaging visuals.
                    </div>
                    <div className="flex justify-between text-2xs text-muted-foreground">
                      <time dateTime="2024-07-29T16:12:08.000Z">9:42 PM · Jul 29, 2024</time>
                    </div>
                  </section>
                </div>
              </div>

            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default ShareVoiceSection;
