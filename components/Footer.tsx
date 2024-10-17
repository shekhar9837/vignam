'use client'
import React from 'react';
// import { Twitter, Instagram, Discord } from 'lucide-react'; // Import icons
import { DiscordLogoIcon, InstagramLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
// import { useEffect, useRef } from "react";

// import LocomotiveScroll from 'locomotive-scroll';
// import 'locomotive-scroll/dist/locomotive-scroll.css'; // Import LocomotiveScroll styles

const Footer = () => {

  // const scrollRef = useRef<HTMLDivElement | null>(null);
  // let locomotiveScroll = useRef<LocomotiveScroll | null>(null);

  // useEffect(() => {
  //   if (scrollRef.current) {
  //     // Initialize LocomotiveScroll
  //     locomotiveScroll.current = new LocomotiveScroll({
  //       el: scrollRef.current as HTMLElement,
  //       smooth: true,
  //     });

  //     return () => {
  //       // Clean up LocomotiveScroll instance when the component unmounts
  //       locomotiveScroll.current?.destroy();
  //     };
  //   }
  // }, []);
    
const socialLinks = [
    {
      name: 'X / Twitter',
      icon: TwitterLogoIcon, // Using the Twitter icon from lucide-react
      url: 'https://x.com/Postable_App',
    },
    {
      name: 'Instagram',
      icon: InstagramLogoIcon, // Using the Instagram icon from lucide-react
      url: 'https://instagram.com/Postable_App',
    },
    {
      name: 'Discord',
      icon: DiscordLogoIcon, // Using the Discord icon from lucide-react
      url: 'https://discord.gg/D857XpAFWE',
    },
  ];
  return (
    <footer
    // data-scroll
   
      className="sticky  z-0 -mt-32 overflow-hidden bg-cover bg-center h-[100vh]"
      style={{ backgroundImage: 'url(https://res.cloudinary.com/dzv61qpeu/image/upload/v1726153159/footer-background_nfg8rf.webp)' }}
    >
      <div className="relative">
        <div className="noise-background pointer-events-none absolute inset-0 z-0 opacity-5 bg-blend-soft-light"></div>
        <div className="mx-auto mt-12 w-full max-w-6xl   flex-col px-4 pt-48 sm:px-12 md:pb-24 xl:pe-4 xl:ps-0">
          <h1 className='text-white text-3xl font-bold '>Postable</h1>
          <div className="flex flex-col gap-12 lg:flex-row">

            <div className="flex-shrink-0">
              <p className="mb-2 text-lg font-bold text-white/60 md:text-[22px]">
                We help you to create postable content!
              </p>
              <p className="w-fit max-w-md text-xs font-normal leading-[18px] text-white/60 md:text-balance md:text-md">
                Postable is a free, unlimited tool designed to empower individuals, influencers, and businesses to
                amplify their voice and effortlessly create engaging content that go beyond the ordinary.
              </p>
            </div>
            <div className="flex min-w-72 flex-shrink-0 flex-col gap-6 text-sm capitalize text-white/70 md:gap-2">
              <h3 className="-mb-2 font-bold text-white md:mb-2">Products</h3>
              <span>Tweet converter</span>
              <span className="inline-flex items-center justify-between gap-2 sm:justify-start">
                Post scheduler
                <span className="rounded-xl bg-white/10 px-1.5 py-0.5 text-xs font-semibold text-white/50">
                  COMING SOON
                </span>
              </span>
              <span className="inline-flex items-center justify-between gap-2 sm:justify-start">
                Screenshot designer
                <span className="rounded-xl bg-white/10 px-1.5 py-0.5 text-xs font-semibold text-white/50">
                  COMING SOON
                </span>
              </span>
            </div>
            <div className="flex min-w-72 flex-shrink-0 flex-col gap-6 text-md capitalize text-white/70 md:gap-2">
              <h3 className="-mb-2 font-bold text-white md:mb-2">Company</h3>
              <a href="/legal/privacy" className='text-sm'>Privacy policy</a>
              <a href="/legal/terms"  className='text-sm'>Terms and conditions</a>
              <a href="/legal/refund"  className='text-sm'>Refund policy</a>
            </div>
          </div>
          <div className="my-9 h-0.5 w-full bg-black/5"></div>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-4">
            <div className="grid grid-cols-2 grid-rows-2 gap-2 sm:flex sm:flex-wrap">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  className="flex min-w-32 items-center gap-3 rounded-lg bg-black/20 p-2.5 transition-colors hover:bg-black/30 sm:min-w-40"
                  target="_blank"
                  href={link.url}
                  rel="noopener noreferrer"
                >
                  <link.icon className="size-7 text-white" />
                  <div>
                    <div className="line-clamp-1 block text-xs font-semibold text-white/50">Follow us on</div>
                    <span className="block text-sm font-medium text-white">{link.name}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;