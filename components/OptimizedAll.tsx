'use client'
import { Check } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { motion } from 'framer-motion';


const OptimizedAll = () => {
    

  const socialButtons = [
    {
      icon: <Linkedin className="h-8 w-8 text-white" />,
      name: "Linkedin Post",
    },
    {
      icon: <Instagram className="h-8 w-8 text-white" />,
      name: "Instagram Story",
    },
    {
      icon: <Facebook className="h-8 w-8 text-white" />,
      name: "Facebook Post",
    },
    {
      icon: <Instagram className="h-8 w-8 text-white" />,
      name: "Instagram Post",
    },
  ];

  
  

  return (
    <div className='  w-full'>
      <section className=" relative mx-auto flex w-full max-w-6xl flex-col items-start px-4 pt-7 md:pt-24 xl:pe-4 xl:ps-0">
        <h3 className="mb-5 max-w-sm text-2xl font-medium tracking-[-0.2px] md:text-[40px] md:leading-[42px] md:tracking-[-1px]">
          Optimized for all social media
        </h3>
        <div className="flex flex-col gap-4 md:flex-row">
          <p className="max-w-xl text-xs leading-[20px] text-neutral-700 md:text-balance md:text-sm">
            We&apos;ve meticulously designed each template to meet the specific guidelines and format requirements of all social media platforms. By preserving safe zones and adhering to platform standards, we ensure that your posts will always be visually striking, no matter where you share them.
          </p>
          <ul className="flex flex-row gap-4 md:flex-col md:gap-1">
            <li className="flex min-h-6 items-center gap-2 text-sm text-neutral-700 md:text-sm">
              <Check size={14} className="text-purple-700" />
              Readable
            </li>
            <li className="flex min-h-6 items-center gap-2 text-sm text-neutral-700 md:text-sm">
              <Check size={14} className="text-purple-700" />
              Visible
            </li>
            <li className="flex min-h-6 items-center gap-2 text-sm text-neutral-700 md:text-sm">
              <Check size={14} className="text-purple-700" />
              Accessible
            </li>
          </ul>
        </div>
      </section>

      <div className="relative mb-16 md:mb-32 mt-20 ">
        <div className="mx-auto flex w-full justify-end max-w-6xl px-4 xl:pe-4 xl:ps-0 z-9 mr-10 ">
          {socialButtons.map((item, index) => (
            <motion.div
              key={index}
             
              className="flex flex-col -ml-12  -rotate-30 overflow-hidden"
                animate={{rotate: 5, scrollMarginRight:20}}            
              transition={{ duration: 0.5 }} // Animation duration
            >
              <h4 className="flex items-center gap-2 rounded-t-3xl px-4 py-4 text-lg font-medium md:rounded-t-[50px] md:px-12    md:py-6 bg-[#80C0EE]">
                {item.icon}
                <span className="text-lg font-medium tracking-[-0.5px] text-white md:text-[28px] md:leading-[150%]">
                  {item.name}
                </span>
              </h4>
              <div className="relative aspect-square w-64 overflow-hidden md:w-[350px] ">
                <Image
                  src="https://res.cloudinary.com/dzv61qpeu/image/upload/v1726028193/textures-1_tcu61i.webp"
                  alt={item.name}
                  layout="intrinsic"
                  width={400}
                  height={700}
                  className="object-cover w-full"
                  quality={100}
                />
                
              </div>
              
            </motion.div>
            
          ))}
         
        </div>
        <div className="absolute inset-0 translate-y-24 bg-gradient-to-b from-transparent via-white/50 via-50% to-white to-75%">      </div>
      </div>
    </div>
  );
};

export default OptimizedAll;
