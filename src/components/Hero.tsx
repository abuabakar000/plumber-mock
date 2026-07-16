import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LeadData, getLeadData } from "@/data/leads";
import { Calendar, ArrowRight } from "lucide-react";

export default function Hero({ leadData: passedLeadData }: { leadData?: LeadData }) {
  const leadData = passedLeadData || getLeadData();
  const primaryColor = leadData.primaryColor || "#f59e0b";
  const heading = leadData.heroHeading;
  const highlightWord = leadData.highlightWord;
  const subtext = leadData.heroSubtext + " Get your quote today. Call us now.";
  const subtextSentences = subtext.trim().split(". ");
  const mobileSubtext = subtextSentences.length > 2 
    ? subtextSentences.slice(0, 2).join(". ") + ". Call our local team now." 
    : subtext + " Call our local team now.";
  const words = heading.split(" ");
  const desktopBg = leadData.heroBgImage || "/ChatGPT Image Jul 13, 2026, 12_34_58 PM.png";
  const isPlumberHvac = desktopBg.includes("plumber-hvac-bg");
  const isHvac = desktopBg.includes("hvac");
  const mobileBg = isPlumberHvac 
    ? "/plumber-hvac-bg-mb.webp" 
    : (isHvac 
      ? "/hvac-mb.webp" 
      : (desktopBg === "/hero-bg.webp" ? "/plumber-mb.webp" : desktopBg));
  
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-zinc-950 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Desktop Background Image */}
        <div className="hidden md:block absolute inset-0 w-full h-full">
          <Image
            src={desktopBg}
            alt={leadData.title}
            fill
            priority
            className="object-cover object-center opacity-60 mix-blend-overlay"
          />
        </div>
        {/* Mobile Background Image */}
        <div className="block md:hidden absolute inset-0 w-full h-full">
          <Image
            src={mobileBg}
            alt={leadData.title}
            fill
            priority
            className="object-cover object-center opacity-60 mix-blend-overlay"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/20 to-zinc-950/90"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center pt-24 pb-20">
        <div className="w-full md:w-2/3 max-w-3xl text-left">


          <h1 className="text-[44px] md:text-7xl lg:text-[90px] font-light text-white tracking-tighter leading-[0.95] mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {words.map((word, i) => (
              <React.Fragment key={i}>
                {word.toLowerCase() === highlightWord?.toLowerCase() ? (
                  <span 
                    style={{ 
                      color: leadData.slug === "default" ? "" : "transparent",
                      backgroundImage: leadData.slug === "default" ? "" : `linear-gradient(to right, white, ${leadData.primaryColor})`,
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      WebkitTextFillColor: leadData.slug === "default" ? "" : "transparent"
                    }}
                    className={`${leadData.slug === "default" ? "text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500" : ""} font-medium`}
                  >
                    {word}
                  </span>
                ) : (
                  word
                )}
                {i < words.length - 1 && " "}
                {i === 0 && <br className="hidden md:block" />}
                {i === 2 && <br className="hidden md:block" />}
              </React.Fragment>
            ))}
          </h1>

          {/* Desktop/Tablet copywriting */}
          <p className="hidden md:block text-lg md:text-xl text-white mb-10 max-w-xl font-light leading-relaxed">
            {subtext}
          </p>
          {/* Mobile copywriting (reduced by one sentence/line) */}
          <p className="block md:hidden text-[17px] text-white mb-10 max-w-xl font-light leading-relaxed">
            {mobileSubtext}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <Link
              href={leadData.slug === "default" ? "/contact" : `/${leadData.slug}/contact`}
              style={{
                backgroundColor: primaryColor,
                boxShadow: `0 4px 20px -2px ${primaryColor}40, inset 0 1px 0 rgba(255,255,255,0.25)`,
              }}
              className="group px-8 py-4 rounded-xl text-zinc-950 text-sm font-semibold tracking-wide transition-all duration-300 ease-out hover:scale-[1.03] hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0 flex items-center justify-center gap-2.5"
            >
              <span>Schedule Now</span>
              <Calendar className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
            </Link>
            <Link
              href={leadData.slug === "default" ? "/services" : `/${leadData.slug}/services`}
              className="group px-8 py-4 bg-zinc-900/40 hover:bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white text-sm font-semibold tracking-wide rounded-xl transition-all duration-300 ease-out hover:scale-[1.03] hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0 flex items-center justify-center gap-2.5 backdrop-blur-md"
            >
              <span>Explore</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
