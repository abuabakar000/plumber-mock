"use client";

import React, { useState } from "react";
import { LeadData, getLeadData } from "@/data/leads";

const faqs = [
  {
    question: "Do you offer 24/7 emergency services?",
    answer: "Yes, we provide 24/7 emergency services across all areas. Our team is always ready to assist you with any urgent issues."
  },
  {
    question: "Is your team licensed and insured?",
    answer: "Absolutely. All of our master technicians are fully licensed, bonded, and insured to provide you with peace of mind and the highest quality service."
  },
  {
    question: "Do you provide upfront pricing?",
    answer: "Yes, we believe in complete transparency. We provide clear, upfront fixed-price quotes before any work begins so there are never any surprise fees."
  },
  {
    question: "How soon can you arrive at my location?",
    answer: "For emergencies, we can typically dispatch a technician to your location within 60 minutes. For standard service calls, we offer flexible same-day or next-day scheduling."
  },
  {
    question: "Do you offer a warranty on your work?",
    answer: "We stand behind our craftsmanship. We offer comprehensive warranties on both parts and labor for all installations and major repairs."
  }
];

export default function FaqSection({ leadData: passedLeadData }: { leadData?: LeadData }) {
  const leadData = passedLeadData || getLeadData();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-zinc-950 py-16 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
        
        {/* Header - LEFT ALIGNED WITH THE REST OF THE SITE */}
        <div className="lg:w-[40%] text-left lg:sticky lg:top-32">
          <div className="flex items-center justify-start gap-3 mb-4">
            <span 
              style={{ color: leadData.slug === "default" ? "" : leadData.primaryColor }}
              className={`text-[11px] font-bold tracking-[0.15em] ${leadData.slug === "default" ? "text-amber-500" : ""} uppercase`}
            >
              F A Q
            </span>
            <div 
              style={{ backgroundColor: leadData.slug === "default" ? "" : leadData.primaryColor }}
              className={`w-8 h-[1px] ${leadData.slug === "default" ? "bg-amber-500/50" : "opacity-50"}`} 
            />
          </div>

          <h2 className="text-[38px] md:text-5xl font-light text-white leading-[1.1] tracking-tight mb-6">
            Frequently Asked<br />
            <span 
              style={{ color: leadData.slug === "default" ? "" : leadData.primaryColor }}
              className={`${leadData.slug === "default" ? "text-amber-500" : ""} font-medium`}
            >
              Questions.
            </span>
          </h2>
          <p className="text-zinc-400 text-[15px] font-light leading-relaxed max-w-sm">
            Everything you need to know about our premium professional services, pricing, and emergency response times.
          </p>
        </div>

        {/* Accordion List */}
        <div className="lg:w-[60%] w-full flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="bg-[#0b0c10] border border-zinc-800/60 rounded-xl overflow-hidden transition-all duration-300 hover:border-zinc-700"
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between py-3.5 px-4 lg:p-6 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-3 lg:gap-4">
                    <div 
                      style={{ 
                        borderColor: isOpen && leadData.slug !== "default" ? leadData.primaryColor : "",
                        backgroundColor: isOpen && leadData.slug !== "default" ? `${leadData.primaryColor}1a` : "",
                        color: isOpen && leadData.slug !== "default" ? leadData.primaryColor : ""
                      }}
                      className={`w-6 h-6 lg:w-7 lg:h-7 rounded-full flex items-center justify-center shrink-0 border transition-colors duration-300 ${isOpen ? (leadData.slug === "default" ? 'border-amber-500/30 bg-amber-500/10 text-amber-500' : '') : 'border-zinc-700 bg-zinc-800/50 text-zinc-400'}`}
                    >
                      {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 lg:w-3.5 lg:h-3.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 lg:w-3.5 lg:h-3.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                      )}
                    </div>
                    <span className="text-white font-medium text-sm lg:text-[15px] tracking-wide">{faq.question}</span>
                  </div>
                  
                  <div 
                    style={{ color: leadData.slug === "default" ? "" : leadData.primaryColor }}
                    className={`${leadData.slug === "default" ? "text-amber-500" : ""} transition-transform duration-300 shrink-0 ml-4 ${isOpen ? 'rotate-180' : ''}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5 lg:w-4 lg:h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </button>
                
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <div className="pl-4 lg:pl-6 pb-4 lg:pb-6 pr-4 lg:pr-6 pt-0 flex gap-3 lg:gap-4">
                      <div className="w-6 lg:w-7 shrink-0 flex justify-center">
                        <div 
                          style={{ backgroundColor: leadData.slug === "default" ? "" : leadData.primaryColor }}
                          className={`w-[2px] h-full ${leadData.slug === "default" ? "bg-amber-500" : ""} rounded-full`} 
                        />
                      </div>
                      <p className="text-zinc-400 text-sm font-light leading-relaxed pt-0.5">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
