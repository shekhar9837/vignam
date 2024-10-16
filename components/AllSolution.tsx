'use client';

import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from 'next/image';

const AllSolution = () => {
  const [activeTab, setActiveTab] = useState("Individuals"); // Default active tab

  const tabData = [
    {
      label: "Individuals",
      value: "Individuals",
      des: "Postable is perfect for individuals who want to elevate their social media presence without the hassle. Whether you're sharing thoughts, opinions, or everyday moments, Postable makes it easy to create and share beautiful, impactful posts from your tweets.",
      list: [
        "Effortless Post Creation",
        "Enhanced Visual Appeal",
        "Easy Sharing Across Platforms",
        "Consistent Social Media Presence",
      ],
      image: "/assets/individual.webp"
    },
    {
      label: "Influencers",
      value: "Influencers",
      des: "For influencers, maintaining a consistent and visually appealing social media presence is crucial. Postable empowers you to convert your tweets into captivating images that align with your brand, helping you to keep your content fresh and engaging across all platforms.",
      list: [
        "Quick Post Creation",
        "Boosted Follower Engagement",
        "Consistent Multi-Platform Presence",
        "Content Diversification",
      ],
      image: "/assets/influencers.webp"
    },
    {
      label: "Businesses",
      value: "Businesses",
      des: "Businesses need to stay agile and maintain a strong social media presence. Postable helps you quickly turn tweets into polished visuals that resonate with your audience, reinforcing your brand and driving engagement without the need for a full design team.",
      list: [
        "Quick Post Creation",
        "Boosted Follower Engagement",
        "Consistent Multi-Platform Presence",
        "Content Diversification",
      ],
      image: "/assets/Businesses.webp"
    },
  ];

  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col items-start gap-8 px-4 py-4 md:-mb-8 md:flex-row md:py-24 xl:pe-4 xl:ps-0">
      <div className="w-full ">
        <h3 className="max-w-sm text-2xl font-medium tracking-[-0.2px] md:text-[40px] md:leading-[42px] md:tracking-[-1px]">
          One Solution for All!
        </h3>
        <p className="mt-1 max-w-80 text-xs font-medium leading-[20px] text-neutral-700 md:mt-4 md:max-w-full md:text-2xl md:text-neutral-950">
          Postable helps everyone to share their thoughts across multiple platforms
        </p>

        <div className="md:md-10 mt-6">
          <div className="inline-flex h-fit items-center justify-center rounded-md bg-muted text-muted-foreground w-full md:w-fit md:rounded-[20px]">
            {/* Tabs */}
            <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="bg-white rounded-none">
              <TabsList className='bg-slate-100 rounded-2xl h-fit p-2'>
                {tabData.map((tab, index) => (
                  <TabsTrigger key={index} value={tab.value} className='rounded-2xl py-4 px-12 text-lg'>
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {tabData.map((tab, index) => (
                <TabsContent key={index} value={tab.value} className='flex flex-row '>
                  <div className='w-1/2'>

                  <p className="text-neutral-700 mb-4 mt-12">{tab.des}</p>
                  <ul className="list-disc pl-5 mt-12">
                    {tab.list.map((item, idx) => (
                      <li key={idx} className="text-neutral-500 text-sm mb-2 font-medium">
                        {item}
                      </li>
                    ))}
                  </ul>
                    </div>
                  <div className='w-1/2 flex justify-end'>
                    <Image
                      src={tab.image}
                      alt={tab.label} // Use tab label as alt text for better accessibility
                      width={1080}
                      height={1920}
                      className='w-2/3'
                    />
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllSolution;
