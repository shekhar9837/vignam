import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

const FAQ = () => {
  // Array of questions and answers
  const faqData = [
    {
      question: "Is Postable free to use?",
      answer: "Yes, Postable is free to use. It offers a variety of features for users without any cost."
    },
    {
      question: "What social media platforms does this tool support?",
      answer: "This tool supports major platforms like Facebook, Twitter, Instagram, and LinkedIn."
    },
    {
      question: "Can I customize the created images?",
      answer: "Yes, you can customize the images with various tools available in the platform."
    },
    {
      question: "How do I get started with Postable?",
      answer: "You can sign up for free and start using Postable immediately by following the simple onboarding process."
    }
  ];

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12 md:py-24 xl:pe-4 xl:ps-0">
      <header className="max-w-sm">
        <h3 className="text-2xl font-medium tracking-[-0.2px] md:text-[40px] md:leading-[42px] md:tracking-[-1px]">
          FAQ
        </h3>
        <p className="hidden text-balance text-2xl font-medium text-neutral-950 md:mb-9 md:mt-4 md:block">
          Let’s help you with some of your frequently asked questions.
        </p>
       
      </header>

      <div className="relative flex w-full flex-col gap-4 md:flex-row md:gap-24">

      <div className="max-w-sm">
          <div className="hidden md:flex flex-col">
            <span className="text-lg font-medium text-neutral-500">
              Couldn&apos;t find your answer?
            </span>
            <a
              target="_blank"
              className="flex items-center gap-1 text-md font-medium text-purple-400"
              href="https://forms.gle/DAowWbDE9fNKh8Ji8"
            >
              Ask a Question
            </a>
          </div>
        </div>

      <div className="w-full md:ms-auto md:max-w-xl">
        {/* Shadcn Accordion */}
        <Accordion type="single" collapsible className="w-full ">
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="py-4 text-md font-normal text-neutral-950 md:text-xl md:font-medium hover:underline transition-all">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
