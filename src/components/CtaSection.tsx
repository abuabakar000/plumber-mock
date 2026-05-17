import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LeadData, getLeadData } from "@/data/leads";

export default function CtaSection({ leadData: passedLeadData }: { leadData?: LeadData }) {
  const leadData = passedLeadData || getLeadData();
  return (
    <section className="relative z-10 border-y border-zinc-800/60 bg-[#06070a]">
      
      {/* ── TOP PORTION (With Image Background) ── */}
      <div className="relative overflow-hidden">
        
        {/* Background Image & Effects */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image 
            src="/cta-neutral-bg.png"
            fill
            alt="Premium Home Systems"
            className="object-cover object-center opacity-40 mix-blend-screen grayscale-[10%]"
          />
          {/* Gradients to keep the left text perfectly readable while revealing the image on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#06070a] via-[#06070a]/90 to-[#06070a]/10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#06070a] via-transparent to-[#06070a]/80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#06070a]/50 via-transparent to-[#06070a]"></div>
          
          {/* Light Beam Effect */}
          <div 
            style={{ backgroundColor: `${leadData.primaryColor}08` }}
            className="absolute -top-[50%] -right-[10%] w-[70%] h-[200%] rotate-[35deg] blur-[100px]"
          ></div>
        </div>

        {/* Content Wrapper for Top Portion */}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-16 lg:pt-24 pb-14 relative z-10">
          <div className="flex flex-col xl:flex-row items-center gap-10 xl:gap-0">
            
            {/* ── Left Column ── */}
            <div className="xl:w-[45%] relative pl-6 lg:pl-8 py-2">
              {/* Brand Accent Bar */}
              <div 
                style={{ 
                  backgroundColor: leadData.primaryColor,
                  boxShadow: `0 0 10px ${leadData.primaryColor}4d`
                }}
                className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full"
              ></div>
              
              <div className="flex items-center gap-3 mb-6">
                <span 
                  style={{ color: leadData.primaryColor }}
                  className="text-[11px] font-bold tracking-[0.15em] uppercase"
                >
                  Ready To Get Started?
                </span>
                <div 
                  style={{ backgroundColor: leadData.primaryColor, opacity: 0.5 }}
                  className="w-8 h-[1px]" 
                />
              </div>

              <h2 className="text-[38px] md:text-5xl font-light text-white leading-[1.1] tracking-tight mb-6">
                Expert Service.<br />
                Just a <span 
                  style={{ color: leadData.primaryColor }}
                  className="font-medium"
                >
                  Call Away.
                </span>
              </h2>

              <p className="text-zinc-400 text-[15px] font-light leading-relaxed max-w-sm mb-10">
                From emergency repairs to full installations, we're here to deliver solutions you can trust.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href={`tel:${leadData.phone}`}
                  style={{ 
                    backgroundColor: leadData.primaryColor,
                    boxShadow: `0 0 20px ${leadData.primaryColor}33`
                  }}
                  className="inline-flex w-full sm:w-auto whitespace-nowrap justify-center px-8 py-4 hover:brightness-110 text-zinc-950 rounded text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-300 items-center gap-3"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  {leadData.phone}
                </Link>

                <Link 
                  href={leadData.slug === "default" ? "/contact" : `/${leadData.slug}/contact`}
                  style={{ "--hover-color": leadData.primaryColor } as any}
                  className="inline-flex w-full sm:w-auto whitespace-nowrap justify-center px-8 py-4 bg-transparent border border-zinc-600 hover:border-[var(--hover-color)] hover:text-[var(--hover-color)] text-white rounded text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-300 items-center gap-3"
                >
                  Schedule Service
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Middle Divider */}
            <div className="hidden xl:block w-[1px] h-[240px] bg-zinc-800/80 mx-8"></div>

            {/* ── Right Column ── */}
            <div className="xl:w-[50%] hidden md:grid md:grid-cols-3 gap-6 pt-10 xl:pt-0">
              
              {/* Feature 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-zinc-900 border border-zinc-700/50 flex items-center justify-center mb-3 md:mb-5 relative shadow-[inset_0_0_15px_rgba(0,0,0,0.5)]">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1} 
                    stroke="currentColor" 
                    style={{ color: leadData.primaryColor }}
                    className="w-5 h-5 md:w-7 md:h-7"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <span 
                    style={{ color: leadData.primaryColor }}
                    className="absolute bottom-1 right-1 md:bottom-2 md:right-2 text-[6px] md:text-[8px] font-bold bg-zinc-900 px-1"
                  >
                    24/7
                  </span>
                </div>
                <h3 className="text-white text-[9px] md:text-[11px] font-bold tracking-[0.05em] md:tracking-[0.1em] uppercase mb-1 md:mb-2 leading-tight">24/7<br/>Emergency</h3>
                <p className="text-zinc-500 text-[12px] font-light leading-relaxed max-w-[140px] hidden md:block">We're available anytime you need us.</p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-zinc-900 border border-zinc-700/50 flex items-center justify-center mb-3 md:mb-5 relative shadow-[inset_0_0_15px_rgba(0,0,0,0.5)]">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1} 
                    stroke="currentColor" 
                    style={{ color: leadData.primaryColor }}
                    className="w-5 h-5 md:w-7 md:h-7"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                </div>
                <h3 className="text-white text-[9px] md:text-[11px] font-bold tracking-[0.05em] md:tracking-[0.1em] uppercase mb-1 md:mb-2 leading-tight">Licensed<br/>& Insured</h3>
                <p className="text-zinc-500 text-[12px] font-light leading-relaxed max-w-[140px] hidden md:block">Fully licensed professionals you can rely on.</p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-zinc-900 border border-zinc-700/50 flex items-center justify-center mb-3 md:mb-5 relative shadow-[inset_0_0_15px_rgba(0,0,0,0.5)]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5 md:w-7 md:h-7 text-zinc-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    style={{ color: leadData.primaryColor }}
                    className="w-3 h-3 md:w-4 md:h-4 absolute bottom-0.5 right-0.5 md:bottom-1 md:right-1"
                  >
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-white text-[9px] md:text-[11px] font-bold tracking-[0.05em] md:tracking-[0.1em] uppercase mb-1 md:mb-2 leading-tight">Trusted By<br/>Hundreds</h3>
                <p className="text-zinc-500 text-[12px] font-light leading-relaxed max-w-[140px] hidden md:block">Delivering quality service and lasting results.</p>
              </div>

            </div>
          </div>
        </div>
      </div>



    </section>
  );
}
