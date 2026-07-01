import React from "react";
import Navbar from "@/components/Navbar";
import ClaimClient from "@/components/ClaimClient";
import { getLeadData } from "@/data/leads";

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ site?: string }> }) {
  const { site } = await searchParams;
  const leadData = getLeadData(site);
  return {
    title: `Claim This Website | ${leadData.slug === "default" ? "Launch Your Site" : leadData.title}`,
    description: "Make this premium, high-converting service website yours today. Turn key launch with custom colors, domain, and booking suite options.",
  };
}

export default async function ClaimPage({ searchParams }: { searchParams: Promise<{ site?: string }> }) {
  const { site } = await searchParams;
  const leadData = getLeadData(site);

  return (
    <>
      <Navbar leadData={leadData} />
      <main className="flex min-h-screen flex-col bg-zinc-950 pt-24">
        
        {/* Decorative Grid Grid Overlay for Premium Feel */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f0f13_1px,transparent_1px),linear-gradient(to_bottom,#0f0f13_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0 min-h-screen" />
        
        <div className="relative z-10 w-full">
          <ClaimClient leadData={leadData} />
        </div>
      </main>
      <footer className="w-full bg-[#06070a] border-t border-zinc-900/60 py-16 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col items-center gap-6 text-center">
          {/* Logo - Bright and Responsive */}
          <img 
            src="/inex.png" 
            alt="Inex Labs" 
            className="h-8 w-auto brightness-125 transition-all duration-300 hover:scale-[1.03]"
          />
          
          {/* Visit Our Website Premium Button */}
          <a 
            href="https://www.inexlabs.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative px-8 py-3.5 bg-zinc-950 border border-zinc-800 hover:border-red-600/50 hover:text-red-500 rounded text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-300 transition-all duration-300 flex items-center gap-2.5 shadow-xl hover:shadow-[0_0_20px_rgba(220,38,38,0.06)]"
          >
            Visit Our Website
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2.5} 
              stroke="currentColor" 
              className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
          
          <p className="text-[9px] text-zinc-600 tracking-wider">
            &copy; {new Date().getFullYear()} Inex Labs. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
