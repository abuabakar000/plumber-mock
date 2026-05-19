import React from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import MapSection from "@/components/MapSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getLeadData } from "@/data/leads";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const leadData = getLeadData(slug);
  return {
    title: `Contact Us | ${leadData.title}`,
    description: `Get in touch with ${leadData.title} for professional plumbing services.`,
    icons: {
      icon: leadData.logo || "/logo.png",
    }
  };
}

export default async function ContactPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const leadData = getLeadData(slug);

  return (
    <>
      <Navbar leadData={leadData} />
      <main className="flex min-h-screen flex-col bg-zinc-950 pt-24">
        
        {/* ── HERO SECTION ── */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden border-b border-zinc-800/60">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image 
              src="/contact-hero.png"
              fill
              alt="Schedule Plumbing Service"
              className="object-cover object-center opacity-20 mix-blend-overlay"
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
                Get In Touch
              </span>
              <div 
                style={{ backgroundColor: leadData.slug === "default" ? "" : leadData.primaryColor }}
                className={`w-12 h-[1px] ${leadData.slug === "default" ? "bg-amber-500/50" : "opacity-50"}`} 
              />
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tighter leading-[1.05] mb-8">
              Schedule <br className="hidden md:block" />
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
                Professional Service.
              </span>
            </h1>
            
            <p className="text-zinc-400 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
              Ready to experience the {leadData.title} difference? Contact us today to secure your priority appointment with our master technicians.
            </p>
          </div>
        </section>

        {/* ── MAIN CONTACT SECTION ── */}
        <section className="py-20 relative z-10 bg-zinc-950">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
              
              {/* Left Side: Contact Details */}
              <div className="lg:col-span-2 flex flex-col">
                <h2 className="text-3xl font-light text-white tracking-tight mb-4">
                  We're Here When <br/> You Need Us Most.
                </h2>
                <p className="text-zinc-400 font-light leading-relaxed mb-10 text-[15px]">
                  Whether you need immediate emergency assistance or want to schedule a routine installation, our team of master plumbers is ready to deliver flawless results.
                </p>

                <div className="space-y-8 mb-12">
                  {/* Phone */}
                  <div className="flex items-start gap-5 group">
                    <div 
                      style={{ borderColor: leadData.slug === "default" ? "" : `${leadData.primaryColor}80` }}
                      className={`w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center bg-zinc-900/50 ${leadData.slug === "default" ? "group-hover:border-amber-500/50" : "group-hover:border-[var(--primary-color)]"} transition-colors shrink-0`}
                    >
                      <Phone 
                        style={{ color: leadData.slug === "default" ? "" : leadData.primaryColor }}
                        className={`w-5 h-5 ${leadData.slug === "default" ? "text-amber-500" : ""}`} 
                      />
                    </div>
                    <div className="pt-1">
                      <p className="text-zinc-500 text-[11px] font-bold tracking-[0.15em] uppercase mb-1">24/7 Emergency Line</p>
                      <a 
                        href={`tel:${leadData.phone}`} 
                        style={{ "--hover-color": leadData.slug === "default" ? "" : leadData.primaryColor } as any}
                        className={`text-white text-xl font-light tracking-wide ${leadData.slug === "default" ? "hover:text-amber-500" : "hover:text-[var(--hover-color)]"} transition-colors`}
                      >
                        {leadData.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-5 group">
                    <div 
                      style={{ borderColor: leadData.slug === "default" ? "" : `${leadData.primaryColor}80` }}
                      className={`w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center bg-zinc-900/50 ${leadData.slug === "default" ? "group-hover:border-amber-500/50" : "group-hover:border-[var(--primary-color)]"} transition-colors shrink-0`}
                    >
                      <Mail 
                        style={{ color: leadData.slug === "default" ? "" : leadData.primaryColor }}
                        className={`w-5 h-5 ${leadData.slug === "default" ? "text-amber-500" : ""}`} 
                      />
                    </div>
                    <div className="pt-1">
                      <p className="text-zinc-500 text-[11px] font-bold tracking-[0.15em] uppercase mb-1">Email Us</p>
                      <a 
                        href={`mailto:${leadData.email}`} 
                        style={{ "--hover-color": leadData.slug === "default" ? "" : leadData.primaryColor } as any}
                        className={`text-white text-lg font-light tracking-wide ${leadData.slug === "default" ? "hover:text-amber-500" : "hover:text-[var(--hover-color)]"} transition-colors`}
                      >
                        {leadData.email}
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-5 group">
                    <div 
                      style={{ borderColor: leadData.slug === "default" ? "" : `${leadData.primaryColor}80` }}
                      className={`w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center bg-zinc-900/50 ${leadData.slug === "default" ? "group-hover:border-amber-500/50" : "group-hover:border-[var(--primary-color)]"} transition-colors shrink-0`}
                    >
                      <MapPin 
                        style={{ color: leadData.slug === "default" ? "" : leadData.primaryColor }}
                        className={`w-5 h-5 ${leadData.slug === "default" ? "text-amber-500" : ""}`} 
                      />
                    </div>
                    <div className="pt-1">
                      <p className="text-zinc-500 text-[11px] font-bold tracking-[0.15em] uppercase mb-1">Headquarters</p>
                      <p className="text-white text-lg font-light tracking-wide">
                        {leadData.address}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hours Card */}
                <div className="bg-[#0c0e12] border border-zinc-800/60 rounded-xl p-6 mt-auto">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock 
                      style={{ color: leadData.slug === "default" ? "" : leadData.primaryColor }}
                      className={`w-5 h-5 ${leadData.slug === "default" ? "text-amber-500" : ""}`} 
                    />
                    <h3 className="text-white font-bold tracking-widest text-[12px] uppercase">Operating Hours</h3>
                  </div>
                  <div className="space-y-2 text-sm font-light">
                    <div className="flex justify-between text-zinc-400">
                      <span>Monday - Friday</span>
                      <span className="text-white">{leadData.hours?.monFri || "7:00 AM - 8:00 PM"}</span>
                    </div>
                    <div className="flex justify-between text-zinc-400">
                      <span>Saturday</span>
                      <span className="text-white">{leadData.hours?.sat || "8:00 AM - 5:00 PM"}</span>
                    </div>
                    <div className="flex justify-between text-zinc-400 pt-2 border-t border-zinc-800/60 mt-2">
                      <span>Emergency Services</span>
                      <span 
                        style={{ color: leadData.slug === "default" ? "" : leadData.primaryColor }}
                        className={`${leadData.slug === "default" ? "text-amber-500" : ""} font-medium`}
                      >
                        {leadData.hours?.emergency || "Available 24/7"}
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              <div className="lg:col-span-3">
                <div className="bg-[#0c0e12] border border-zinc-800/60 rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-12 relative overflow-hidden shadow-2xl">
                  {/* Form Ambient Glow */}
                  <div 
                    style={{ backgroundColor: leadData.slug === "default" ? "" : leadData.primaryColor }}
                    className={`absolute -top-24 -right-24 w-80 h-80 ${leadData.slug === "default" ? "bg-amber-500/10" : "opacity-[0.1]"} rounded-full blur-[100px] pointer-events-none`} 
                  />
                  <div 
                    style={{ backgroundColor: leadData.slug === "default" ? "" : leadData.primaryColor }}
                    className={`absolute -bottom-24 -left-24 w-80 h-80 ${leadData.slug === "default" ? "bg-amber-500/5" : "opacity-[0.05]"} rounded-full blur-[100px] pointer-events-none`} 
                  />

                  <div className="relative z-10 mb-6 md:mb-10">
                    <h3 className="text-2xl md:text-3xl font-light text-white tracking-tight mb-2">Request Consultation</h3>
                    <p className="text-zinc-500 text-sm font-light">Fill out the form below and our team will be in touch shortly.</p>
                  </div>

                  <form className="relative z-10 flex flex-col gap-5 md:gap-8">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
                      {/* Name */}
                      <div className="flex flex-col gap-1.5 md:gap-2.5 group">
                        <label 
                          htmlFor="name" 
                          style={{ "--focus-color": leadData.slug === "default" ? "" : leadData.primaryColor } as any}
                          className={`text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500 ${leadData.slug === "default" ? "group-focus-within:text-amber-500" : "group-focus-within:text-[var(--focus-color)]"} transition-colors`}
                        >
                          Full Name
                        </label>
                        <input 
                          type="text" 
                          id="name"
                          placeholder="John Doe"
                          style={{ "--focus-border": leadData.slug === "default" ? "" : leadData.primaryColor } as any}
                          className={`bg-zinc-950/50 border border-zinc-800 text-white rounded-xl px-4 py-3 md:px-5 md:py-4 focus:outline-none ${leadData.slug === "default" ? "focus:border-amber-500/50 focus:ring-amber-500/5" : "focus:border-[var(--focus-border)] focus:ring-white/5"} focus:ring-4 transition-all font-light text-sm md:text-[15px] placeholder:text-zinc-700`}
                        />
                      </div>
                      {/* Phone */}
                      <div className="flex flex-col gap-1.5 md:gap-2.5 group">
                        <label 
                          htmlFor="phone" 
                          style={{ "--focus-color": leadData.slug === "default" ? "" : leadData.primaryColor } as any}
                          className={`text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500 ${leadData.slug === "default" ? "group-focus-within:text-amber-500" : "group-focus-within:text-[var(--focus-color)]"} transition-colors`}
                        >
                          Phone Number
                        </label>
                        <input 
                          type="tel" 
                          id="phone"
                          placeholder="(555) 000-0000"
                          style={{ "--focus-border": leadData.slug === "default" ? "" : leadData.primaryColor } as any}
                          className={`bg-zinc-950/50 border border-zinc-800 text-white rounded-xl px-4 py-3 md:px-5 md:py-4 focus:outline-none ${leadData.slug === "default" ? "focus:border-amber-500/50 focus:ring-amber-500/5" : "focus:border-[var(--focus-border)] focus:ring-white/5"} focus:ring-4 transition-all font-light text-sm md:text-[15px] placeholder:text-zinc-700`}
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5 md:gap-2.5 group">
                      <label 
                        htmlFor="email" 
                        style={{ "--focus-color": leadData.slug === "default" ? "" : leadData.primaryColor } as any}
                        className={`text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500 ${leadData.slug === "default" ? "group-focus-within:text-amber-500" : "group-focus-within:text-[var(--focus-color)]"} transition-colors`}
                      >
                        Email Address
                      </label>
                      <input 
                        type="email" 
                        id="email"
                        placeholder="john@example.com"
                        style={{ "--focus-border": leadData.slug === "default" ? "" : leadData.primaryColor } as any}
                        className={`bg-zinc-950/50 border border-zinc-800 text-white rounded-xl px-4 py-3 md:px-5 md:py-4 focus:outline-none ${leadData.slug === "default" ? "focus:border-amber-500/50 focus:ring-amber-500/5" : "focus:border-[var(--focus-border)] focus:ring-white/5"} focus:ring-4 transition-all font-light text-sm md:text-[15px] placeholder:text-zinc-700`}
                      />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5 md:gap-2.5 group">
                      <label 
                        htmlFor="message" 
                        style={{ "--focus-color": leadData.slug === "default" ? "" : leadData.primaryColor } as any}
                        className={`text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500 ${leadData.slug === "default" ? "group-focus-within:text-amber-500" : "group-focus-within:text-[var(--focus-color)]"} transition-colors`}
                      >
                        Project Details or Issue
                      </label>
                      <textarea 
                        id="message"
                        rows={4}
                        placeholder="Please describe what you need help with..."
                        style={{ "--focus-border": leadData.slug === "default" ? "" : leadData.primaryColor } as any}
                        className={`bg-zinc-950/50 border border-zinc-800 text-white rounded-xl px-4 py-3 md:px-5 md:py-4 focus:outline-none ${leadData.slug === "default" ? "focus:border-amber-500/50 focus:ring-amber-500/5" : "focus:border-[var(--focus-border)] focus:ring-white/5"} focus:ring-4 transition-all font-light text-sm md:text-[15px] resize-none placeholder:text-zinc-700`}
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2 md:pt-4">
                      <button 
                        type="button" 
                        style={{ 
                          backgroundColor: leadData.slug === "default" ? "" : leadData.primaryColor,
                          boxShadow: leadData.slug === "default" ? "" : `0 10px 30px -10px ${leadData.primaryColor}80`
                        }}
                        className={`flex items-center justify-center gap-3 w-full py-4 md:py-5 ${leadData.slug === "default" ? "bg-amber-500 hover:bg-amber-400 shadow-[0_10px_30px_-10px_rgba(245,158,11,0.5)] hover:shadow-[0_15px_40px_-10px_rgba(245,158,11,0.6)]" : "hover:brightness-110"} text-zinc-950 rounded-xl text-[12px] font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:-translate-y-1`}
                      >
                        Submit Request
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      
                      <p className="text-zinc-500 text-center text-[11px] font-light mt-4 md:mt-6 leading-relaxed">
                        By submitting this form, you agree to our privacy policy. <br className="hidden md:block" />
                        We typically respond within <span style={{ color: leadData.slug === "default" ? "" : leadData.primaryColor }} className={`${leadData.slug === "default" ? "text-amber-500/80" : ""} font-medium`}>15 minutes</span> during business hours.
                      </p>
                    </div>

                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── MAP SECTION ── */}
        <MapSection leadData={leadData} />

      </main>
      <Footer leadData={leadData} />
    </>
  );
}
