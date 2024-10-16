import Image from "next/image";
import React from "react";

const Features = () => {
    const featureData = [
        {
            image:"https://res.cloudinary.com/dzv61qpeu/image/upload/v1727019744/feature-1_zepkcz.webp",
            alt:"Feature 1"
        },
        {
            image:"https://res.cloudinary.com/dzv61qpeu/image/upload/v1727019743/feature-2_xfgklf.webp",
            alt:"Feature 2"
        },
        {
            image:"https://res.cloudinary.com/dzv61qpeu/image/upload/v1727019744/feature-3_ouj8od.webp",
            alt:"Feature 3"
        },
        {
            image:"https://res.cloudinary.com/dzv61qpeu/image/upload/v1727019743/feature-4_xaqpz1.webp",
            alt:"Feature 4"
        },
        {
            image:"https://res.cloudinary.com/dzv61qpeu/image/upload/v1727019743/feature-5_ftjick.webp",
            alt:"Feature 5"
        },
    ]


  return (
    <section className="relative  flex w-full flex-col items-start py-12 md:py-24">
      <h3 className="mx-auto w-full max-w-6xl px-4 text-3xl font-medium tracking-[-0.2px] md:mb-2 md:text-[40px] md:leading-[42px] md:tracking-[-1px] xl:pe-4 xl:ps-0">
        Our Features
      </h3>

      <div className="relative flex w-full gap-4 overflow-x-scroll scrollbar-thin px-4 pb-4 pt-3 xl:ps-0 xl:pt-4">
        

       {featureData.map( item =>(
           <div className="min-w-72 max-w-fit select-none md:min-w-80 ">
         <Image
           src={item.image}
           alt={item.alt}
           width={1080}
           height={1920}
           //    fill
           />
       </div>


))}
</div>
       
       
    
    </section>
  );
};

export default Features;
