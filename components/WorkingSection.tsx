'use client'

import Image from 'next/image';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const WorkingSection = () => {
  const workingData = [
    {
      image: '/assets/step-1.webp',
      alt: 'Step 1',
      step: 'Step 1',
      title: 'Copy tweet link',
      description: 'On X/Twitter, click the share icon at the bottom-right of the tweet and select "Copy Link." Then, paste the link into the box above.',
    },
    {
      image: '/assets/step-2.webp',
      alt: 'Step 2',
      step: 'Step 2',
      title: 'Customize Design',
      description: 'Choose social media sizes, adjust the style, set the border radius, and customise the design to your liking and preferred branding—all with a single click.',
    },
    {
      image: '/assets/step-3.webp',
      alt: 'Step 3',
      step: 'Step 3',
      title: 'Export!',
      description: 'Simply export and publish your meticulously crafted posts, tailored to meet each social media’s standards and format.',
    }
  ];

  // Function to handle mouse movement
  const handleMouseMove = (event:any) => {
    const card = event.currentTarget;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = event.clientX - left; // X position relative to card
    const y = event.clientY - top; // Y position relative to card
    const xPercent = x / width; // Normalized X position
    const yPercent = y / height; // Normalized Y position

    // Calculate rotation based on mouse position
    const rotateY = (xPercent - 0.5) * 30; // Rotate up to 30 degrees
    const rotateX = (0.5 - yPercent) * 30; // Rotate up to 30 degrees

    // Apply transformation
    card.style.transform = ` rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  // Reset card rotation on mouse leave
  const handleMouseLeave = (event:any) => {
    const card = event.currentTarget;
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
  };

  return (
    <section className="mx-auto flex h-fit w-full max-w-6xl flex-col gap-3.5 py-12 md:gap-8 md:py-24">
      <h3 className="px-4 text-2xl font-medium xl:pe-4 xl:ps-0 tracking-[-0.2px] text-neutral-800 md:text-[40px] md:leading-[42px] md:tracking-[-1px]">How it works?</h3>
      <div className="flex gap-4 overflow-y-visible overflow-x-scroll px-4 pb-4 md:overflow-x-visible lg:pb-4 lg:pe-4 lg:ps-0">
        {workingData.map((item, index) => (
          <motion.div
            key={index}
            className="flex w-fit min-w-72 flex-1 flex-shrink-0 flex-col rounded-[32px] transition-all bg-neutral-100 p-2 perspective"
            onMouseMove={handleMouseMove} // Add mouse move event
            onMouseLeave={handleMouseLeave} // Add mouse leave event
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-neutral-50"
            //   whileHover={{ scale: 1.1 }} // Scale image on hover
            //   transition={{ duration: 0.3 }}
            >
              <Image  
                src={item.image}
                alt={item.alt}
                width={500}
                height={300}
                className="transition-transform duration-300"
              />
            </motion.div>
            <div className="flex flex-col px-4 pb-2 pt-6 md:px-6 md:pb-8 md:pt-8">
              <span className="text-xs font-semibold uppercase text-neutral-400 md:text-md">
                {item.step}
              </span>
              <h1 className="mb-4 text-md font-medium text-neutral-700 md:mb-5 md:text-lg">
                {item.title}
              </h1>
              <p className="text-sm text-neutral-500">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkingSection;
