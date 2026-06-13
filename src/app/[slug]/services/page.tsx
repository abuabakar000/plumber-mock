import React from "react";
import Image from "next/image";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import ProcessSection from "@/components/ProcessSection";
import MapSection from "@/components/MapSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getLeadData, leads } from "@/data/leads";

export async function generateStaticParams() {
  return Object.keys(leads).map((slug) => ({
    slug: slug,
  }));
}
import { 
  Waves, 
  Droplets, 
  Flame, 
  Wrench, 
  Bath, 
  ArrowDownToLine,
  CheckCircle2,
  Trash2,
  Activity,
  ArrowRight
} from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const leadData = getLeadData(slug);
  return {
    title: `Premium Services | ${leadData.title}`,
    description: `Explore professional plumbing services offered by ${leadData.title}.`,
    icons: {
      icon: leadData.logo || "/logo.png",
    }
  };
}

const detailedServices = [
  {
    id: "drain-cleaning",
    title: "Drain Cleaning & Clearing",
    icon: <Waves strokeWidth={1.5} className="w-8 h-8 text-amber-500" />,
    desc: "Stubborn clogs and slow drains are no match for our advanced clearing technology. We completely eliminate blockages to restore perfect flow.",
    features: [
      "High-pressure hydro-jetting",
      "Video camera line inspections",
      "Tree root removal",
      "Preventative maintenance plans"
    ]
  },
  {
    id: "leak-repair",
    title: "Precision Leak Repair",
    icon: <Droplets strokeWidth={1.5} className="w-8 h-8 text-amber-500" />,
    desc: "Hidden leaks can cause catastrophic structural damage. We utilize non-invasive acoustic and thermal imaging to pinpoint and seal leaks instantly.",
    features: [
      "Slab leak detection",
      "Burst pipe emergency repair",
      "Ceiling and wall leak tracing",
      "Non-destructive acoustic tech"
    ]
  },
  {
    id: "water-heaters",
    title: "Water Heater Systems",
    icon: <Flame strokeWidth={1.5} className="w-8 h-8 text-amber-500" />,
    desc: "Never run out of hot water again. We install, repair, and maintain premium conventional and tankless water heating systems.",
    features: [
      "Tankless system upgrades",
      "Traditional tank replacements",
      "Heating element repairs",
      "Annual sediment flushing"
    ]
  },
  {
    id: "pipe-replacement",
    title: "Pipe Repair & Replacement",
    icon: <Wrench strokeWidth={1.5} className="w-8 h-8 text-amber-500" />,
    desc: "Upgrade your property's plumbing infrastructure. We replace old, corroded, or dangerous piping with modern, high-grade materials.",
    features: [
      "Whole-home repiping",
      "Copper & PEX installations",
      "Corrosion diagnostics",
      "Code compliance upgrades"
    ]
  },
  {
    id: "fixture-installation",
    title: "Luxury Fixture Installation",
    icon: <Bath strokeWidth={1.5} className="w-8 h-8 text-amber-500" />,
    desc: "Elevate your kitchen and bathrooms. We expertly install high-end sinks, architectural faucets, spa showers, and modern toilets.",
    features: [
      "Rainfall shower systems",
      "Touchless kitchen faucets",
      "Freestanding tub plumbing",
      "Smart toilet integration"
    ]
  },
  {
    id: "sump-pumps",
    title: "Sump Pump Solutions",
    icon: <ArrowDownToLine strokeWidth={1.5} className="w-8 h-8 text-amber-500" />,
    desc: "Protect your basement and foundation from devastating water damage with our heavy-duty, ultra-reliable sump pump systems.",
    features: [
      "Primary pump installation",
      "Battery backup systems",
      "Discharge line routing",
      "Float switch calibration"
    ]
  },
  {
    id: "garbage-disposal",
    title: "Garbage Disposal Services",
    icon: <Trash2 strokeWidth={1.5} className="w-8 h-8 text-amber-500" />,
    desc: "A jammed or leaking garbage disposal can disrupt your kitchen. We provide rapid repairs and install premium, quiet-operation disposal units.",
    features: [
      "Jammed unit clearing",
      "Motor replacement",
      "Under-sink leak repair",
      "High-HP unit installation"
    ]
  },
  {
    id: "sewer-line",
    title: "Sewer Line Diagnostics & Repair",
    icon: <Activity strokeWidth={1.5} className="w-8 h-8 text-amber-500" />,
    desc: "Avoid costly backups with our comprehensive sewer line services. We offer trenchless repairs and thorough inspections to keep your main lines clear.",
    features: [
      "Main line clearing",
      "Trenchless pipe repair",
      "Video camera diagnostics",
      "Sewer gas odor detection"
    ]
  }
];

export default async function ServicesPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const leadData = getLeadData(slug);
  
  const dynamicDetailedServices = leadData.services && leadData.services.length > 0
    ? leadData.services.map((customService, idx) => {
        const defaultService = detailedServices[idx] || detailedServices[detailedServices.length - 1];
        return {
          id: defaultService.id,
          title: customService.title || defaultService.title,
          desc: customService.desc || defaultService.desc,
          features: defaultService.features,
          icon: React.cloneElement(defaultService.icon as React.ReactElement<any>, { 
            style: { color: leadData.slug === "default" ? "" : leadData.primaryColor },
            className: `w-8 h-8 ${leadData.slug === "default" ? "text-amber-500" : ""}`
          })
        };
      })
    : detailedServices.slice(0, 6).map((service) => ({
        ...service,
        icon: React.cloneElement(service.icon as React.ReactElement<any>, { 
          style: { color: leadData.slug === "default" ? "" : leadData.primaryColor },
          className: `w-8 h-8 ${leadData.slug === "default" ? "text-amber-500" : ""}`
        })
      }));

  return (
    <>
      <Navbar leadData={leadData} />
      <main className="flex min-h-screen flex-col bg-zinc-950 pt-24">
      
      {/* ── HERO SECTION ── */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden border-b border-zinc-800/60">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image 
            src="/services-neutral-hero.webp"
            fill
            alt="Premium Home Services"
            className="object-cover object-center opacity-30 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/40 to-zinc-950"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24 pb-12">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div 
              style={{ backgroundColor: leadData.slug === "default" ? "" : leadData.primaryColor }}
              className={`w-12 h-[1px] ${leadData.slug === "default" ? "bg-amber-500/50" : "opacity-50"}`} 
            />
            <span 
              style={{ color: leadData.slug === "default" ? "" : leadData.primaryColor }}
              className={`text-[11px] uppercase tracking-[0.4em] ${leadData.slug === "default" ? "text-amber-500" : ""} font-bold`}
            >
              Our Services
            </span>
            <div 
              style={{ backgroundColor: leadData.slug === "default" ? "" : leadData.primaryColor }}
              className={`w-12 h-[1px] ${leadData.slug === "default" ? "bg-amber-500/50" : "opacity-50"}`} 
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tighter leading-[1.05] mb-8">
            Superior Solutions for <br className="hidden md:block" />
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
              Every System.
            </span>
          </h1>
          
          <p className="text-zinc-400 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            From emergency interventions to full architectural pipe replacements, we deliver unparalleled craftsmanship and reliability across every facet of plumbing.
          </p>
        </div>
      </section>

      {/* ── DETAILED SERVICES GRID ── */}
      <section className="py-24 relative z-10 bg-zinc-950">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
            {dynamicDetailedServices.map((service, idx) => (
              <div 
                key={service.id} 
                id={service.id}
                style={{ 
                  "--hover-border": leadData.slug === "default" ? "" : `${leadData.primaryColor}4d`,
                  "--hover-shadow": leadData.slug === "default" ? "" : `0 20px 40px -15px ${leadData.primaryColor}26`
                } as any}
                className={`group relative bg-[#0c0e12] border border-zinc-800/60 rounded-2xl p-6 md:p-10 hover:bg-[#0f1116] hover:-translate-y-2 ${leadData.slug === "default" ? "hover:border-amber-500/30 hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.15)]" : "hover:border-[var(--hover-border)] hover:shadow-[var(--hover-shadow)]"} transition-all duration-500 ease-out flex flex-col h-full overflow-hidden`}
              >
                {/* Ambient Hover Glow */}
                <div 
                  style={{ backgroundColor: leadData.slug === "default" ? "" : leadData.primaryColor }}
                  className={`absolute -top-32 -right-32 w-64 h-64 ${leadData.slug === "default" ? "bg-amber-500/10" : "opacity-[0.1]"} rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0`} 
                />

                <div className="relative z-10 flex flex-col h-full">
                  
                  {/* Header Row */}
                  <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8">
                    <div 
                      style={{ 
                        borderColor: leadData.slug === "default" ? "" : `${leadData.primaryColor}66`,
                        backgroundColor: leadData.slug === "default" ? "" : `${leadData.primaryColor}0d`
                      }}
                      className={`shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full border border-zinc-700/50 flex items-center justify-center bg-zinc-900/50 ${leadData.slug === "default" ? "group-hover:border-amber-500/40 group-hover:bg-amber-500/5" : ""} transition-colors duration-500 shadow-[inset_0_0_15px_rgba(0,0,0,0.5)]`}
                    >
                      <div className="scale-75 md:scale-100">
                        {service.icon}
                      </div>
                    </div>
                    <div>
                      <h2 
                        style={{ "--hover-color": leadData.slug === "default" ? "" : leadData.primaryColor } as any}
                        className={`text-white text-lg md:text-2xl font-light tracking-wide mb-1 ${leadData.slug === "default" ? "group-hover:text-amber-500" : "group-hover:text-[var(--hover-color)]"} transition-colors duration-300`}
                      >
                        {service.title}
                      </h2>
                      <div 
                        style={{ backgroundColor: leadData.slug === "default" ? "" : leadData.primaryColor }}
                        className={`w-8 h-[2px] ${leadData.slug === "default" ? "bg-amber-500" : ""} group-hover:w-16 transition-all duration-500`} 
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-400 text-sm md:text-[15px] font-light leading-relaxed mb-8">
                    {service.desc}
                  </p>

                  {/* Features List */}
                  <div className="mt-auto pt-6 border-t border-zinc-800/50 mb-8">
                    <h4 className="text-white text-[10px] md:text-[11px] font-bold tracking-[0.15em] uppercase mb-4 opacity-70">
                      Service Highlights
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3">
                          <CheckCircle2 
                            style={{ color: leadData.slug === "default" ? "" : leadData.primaryColor }}
                            className={`w-3.5 h-3.5 ${leadData.slug === "default" ? "text-amber-500" : ""} shrink-0 mt-[2px]`} 
                            strokeWidth={2.5} 
                          />
                          <span className="text-zinc-300 text-xs md:text-sm font-light">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Mobile Action Button */}
                  <Link 
                    href={leadData.slug === "default" ? "/contact" : `/${leadData.slug}/contact`}
                    style={{ "--hover-bg": leadData.slug === "default" ? "" : leadData.primaryColor } as any}
                    className={`flex items-center justify-center gap-2 w-full py-4 bg-zinc-900/50 border border-zinc-800 text-zinc-300 text-[10px] font-bold uppercase tracking-[0.2em] rounded-md ${leadData.slug === "default" ? "group-hover:bg-amber-500 group-hover:text-zinc-950 group-hover:border-amber-500" : "group-hover:bg-[var(--hover-bg)] group-hover:text-zinc-950 group-hover:border-[var(--hover-bg)]"} transition-all duration-300`}
                  >
                    Request this service
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </Link>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── HOW WE WORK (Process) ── */}
      <ProcessSection leadData={leadData} />

      {/* ── SERVICE AREA (Map) ── */}
      <MapSection leadData={leadData} />

      {/* ── CTA SECTION ── */}
      <CtaSection leadData={leadData} />
      
    </main>
      <Footer leadData={leadData} />
    </>
  );
}
