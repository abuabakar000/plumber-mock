"use client";

import React, { useState } from "react";
import { Check, ArrowRight, Sparkles, Smartphone, ArrowUpRight, Calendar } from "lucide-react";
import { LeadData } from "@/data/leads";

interface ClaimClientProps {
  leadData: LeadData;
}

export default function ClaimClient({ leadData }: ClaimClientProps) {
  const isDefault = leadData.slug === "default";
  const primaryThemeColor = isDefault ? "#f59e0b" : leadData.primaryColor;

  // Selected package state (only launch or custom)
  const [selectedPackage, setSelectedPackage] = useState<"launch" | "custom">("custom");

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [businessName, setBusinessName] = useState(isDefault ? "" : leadData.title);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim() || !businessName.trim()) {
      setFormError("Please fill out all required fields.");
      return;
    }
    setFormError("");
    setIsSubmitting(true);

    // Simulate sending lead
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const getPackageLabel = (pkg: "launch" | "custom") => {
    switch (pkg) {
      case "launch": return "Launch Package (C$249 one-time)";
      case "custom": return "Custom Package (C$349 one-time)";
      default: return "";
    }
  };

  const handleCardClick = (pkg: "launch" | "custom") => {
    setSelectedPackage(pkg);
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto px-2 sm:px-6 lg:px-12 py-12">
      
      {/* Personalized Badge */}
      {!isDefault && (
        <div className="flex justify-center mb-6">
          <div 
            style={{ 
              borderColor: `${primaryThemeColor}30`,
              backgroundColor: `${primaryThemeColor}05`
            }} 
            className="flex items-center gap-2 border px-4 py-1.5 rounded-full backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.02)] animate-pulse-glow"
          >
            <span style={{ backgroundColor: primaryThemeColor }} className="w-2 h-2 rounded-full"></span>
            <span className="text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-300">
              Exclusive Offer for {leadData.title}
            </span>
          </div>
        </div>
      )}

      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 px-2">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-tight mb-6">
          Make This Website <br className="sm:hidden" />
          <span 
            className="font-medium text-transparent bg-clip-text"
            style={{ 
              backgroundImage: `linear-gradient(to right, #ffffff, ${primaryThemeColor})`
            }}
          >
            Yours Today.
          </span>
        </h1>
        <p className="text-zinc-400 text-[14px] sm:text-lg font-light leading-relaxed">
          Lock in exclusive rights to this premium design in your local market. Choose a package below to launch your professional online presence.
        </p>
      </div>

      {/* Pricing Packages Grid (2 Columns, Side-by-side on all screens) */}
      <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:gap-8 items-stretch max-w-5xl mx-auto mb-12">
        
        {/* Card 1: Launch Package */}
        <div 
          onClick={() => handleCardClick("launch")}
          style={{ 
            borderColor: selectedPackage === "launch" ? primaryThemeColor : "rgba(39, 39, 42, 0.6)"
          }}
          className={`relative group cursor-pointer bg-[#0c0e12]/80 backdrop-blur-md rounded-xl sm:rounded-3xl p-3 sm:p-6 lg:p-8 flex flex-col justify-between border transition-all duration-300 ${
            selectedPackage === "launch" 
              ? "shadow-[0_0_30px_rgba(255,255,255,0.02)] scale-[1.01]" 
              : "hover:border-zinc-700/60 hover:scale-[1.005]"
          }`}
        >
          {selectedPackage === "launch" && (
            <div 
              style={{ backgroundColor: primaryThemeColor }}
              className="absolute -top-2.5 right-3 sm:right-6 text-zinc-950 text-[8px] sm:text-[10px] font-extrabold tracking-widest uppercase px-2 py-0.5 sm:px-3 sm:py-1 rounded-full animate-pulse-glow"
            >
              Selected
            </div>
          )}
          
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div 
                style={{ backgroundColor: `${primaryThemeColor}10` }}
                className="w-7 h-7 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0"
              >
                <Smartphone className="w-4.5 h-4.5 sm:w-5 sm:h-5" style={{ color: primaryThemeColor }} />
              </div>
              <span className="text-[9px] sm:text-[12px] font-bold tracking-[0.1em] sm:tracking-[0.2em] uppercase text-zinc-400 truncate">Launch</span>
            </div>

            <div className="mb-4 sm:mb-6">
              <div className="flex items-baseline gap-0.5 sm:gap-1 flex-wrap">
                <span className="text-white text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight">C$249</span>
                <span className="text-zinc-500 text-[10px] sm:text-sm">one-time</span>
              </div>
              <p className="text-zinc-500 text-[9px] sm:text-xs mt-1 leading-relaxed">
                Perfect for launching a modern, lightweight presence.
              </p>
            </div>

            <div className="w-full h-[1px] bg-zinc-800/80 my-4 sm:my-6" />

            <ul className="space-y-2.5 sm:space-y-4 text-left">
              {[
                "Personalized business details & services",
                "Fully mobile-friendly response design",
                "Contact form, interactive map & call buttons",
                "Basic on-page local SEO setup",
                "Custom domain connection & SSL",
                "One round of revisions included"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-2 sm:gap-3">
                  <div className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" />
                  </div>
                  <span className="text-zinc-300 text-[10px] sm:text-[13px] lg:text-[14px] font-light leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <button 
            style={{ 
              backgroundColor: selectedPackage === "launch" ? primaryThemeColor : "transparent",
              color: selectedPackage === "launch" ? "#09090b" : "#ffffff",
              borderColor: selectedPackage === "launch" ? "transparent" : "rgba(82, 82, 91, 0.4)"
            }}
            className="w-full py-2.5 sm:py-3.5 rounded-lg border text-[9px] sm:text-[11px] font-bold tracking-[0.1em] sm:tracking-[0.2em] uppercase transition-all duration-300 mt-6 sm:mt-8 flex items-center justify-center gap-1 sm:gap-2"
          >
            Select Launch
            <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </button>
        </div>

        {/* Card 2: Custom Package (Highlighted) */}
        <div 
          onClick={() => handleCardClick("custom")}
          style={{ 
            borderColor: selectedPackage === "custom" ? primaryThemeColor : "rgba(39, 39, 42, 0.6)"
          }}
          className={`relative group cursor-pointer bg-[#0c0e12]/90 backdrop-blur-md rounded-xl sm:rounded-3xl p-3 sm:p-6 lg:p-8 flex flex-col justify-between border transition-all duration-300 ${
            selectedPackage === "custom" 
              ? "scale-[1.01] z-10" 
              : "hover:border-zinc-700/60 hover:scale-[1.005]"
          }`}
        >
          {/* Accent Glow Background */}
          <div 
            style={{ backgroundColor: primaryThemeColor }}
            className="absolute inset-0 opacity-[0.01] group-hover:opacity-[0.02] rounded-xl sm:rounded-3xl transition-opacity duration-500 pointer-events-none"
          />
          
          <div 
            style={{ backgroundColor: primaryThemeColor }}
            className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-zinc-950 text-[8px] sm:text-[10px] font-extrabold tracking-widest uppercase px-2 py-0.5 sm:px-4 sm:py-1.5 rounded-full shadow-lg whitespace-nowrap"
          >
            {selectedPackage === "custom" ? "Selected (Most Popular)" : "Most Popular"}
          </div>

          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 mt-1 sm:mt-2">
              <div 
                style={{ backgroundColor: `${primaryThemeColor}15` }}
                className="w-7 h-7 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0"
              >
                <Sparkles className="w-4.5 h-4.5 sm:w-5 sm:h-5" style={{ color: primaryThemeColor }} />
              </div>
              <span className="text-[9px] sm:text-[12px] font-bold tracking-[0.1em] sm:tracking-[0.2em] uppercase text-zinc-300 truncate">Custom</span>
            </div>

            <div className="mb-4 sm:mb-6">
              <div className="flex items-baseline gap-0.5 sm:gap-1 flex-wrap">
                <span className="text-white text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight">C$349</span>
                <span className="text-zinc-500 text-[10px] sm:text-sm">one-time</span>
              </div>
              <p className="text-zinc-400 text-[9px] sm:text-xs mt-1 leading-relaxed font-normal">
                Everything in Launch, with full structural personalization.
              </p>
            </div>

            <div className="w-full h-[1px] bg-zinc-800/80 my-4 sm:my-6" />

            <ul className="space-y-2.5 sm:space-y-4 text-left">
              {[
                "Everything in the Launch Package",
                "Custom visual branding & color palettes",
                "Full layout adjustments & section swaps",
                "Additional customized service pages",
                "Two full rounds of layout revisions",
                "Advanced image compression & asset staging"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-2 sm:gap-3">
                  <div className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" />
                  </div>
                  <span className="text-zinc-200 text-[10px] sm:text-[13px] lg:text-[14px] font-light leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <button 
            style={{ 
              backgroundColor: selectedPackage === "custom" ? primaryThemeColor : "transparent",
              color: selectedPackage === "custom" ? "#09090b" : "#ffffff",
              borderColor: selectedPackage === "custom" ? "transparent" : "rgba(82, 82, 91, 0.4)"
            }}
            className="w-full py-2.5 sm:py-3.5 rounded-lg border text-[9px] sm:text-[11px] font-extrabold tracking-[0.1em] sm:tracking-[0.2em] uppercase transition-all duration-300 mt-6 sm:mt-8 flex items-center justify-center gap-1 sm:gap-2 shadow-sm"
          >
            Select Custom
            <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </button>
        </div>

      </div>

      {/* Static Premium Information Note - Hosting & Scheduler Service */}
      <div className="max-w-3xl mx-auto mb-12 px-2">
        <div className="p-3.5 rounded-xl border border-zinc-800/80 bg-[#07090d]/60 backdrop-blur-sm flex items-center gap-3.5 text-left relative overflow-hidden shadow-lg">
          {/* Accent border strip */}
          <div 
            style={{ backgroundColor: primaryThemeColor }}
            className="absolute top-0 left-0 w-[3px] h-full"
          />
          
          {/* Icon */}
          <div 
            style={{ backgroundColor: `${primaryThemeColor}10` }}
            className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
          >
            <Calendar className="w-4.5 h-4.5" style={{ color: primaryThemeColor }} />
          </div>

          {/* Description */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h4 className="text-xs font-semibold text-white tracking-wide">Hosting & Scheduler Service</h4>
              <span className="text-xs font-bold text-emerald-400">C$49/mo</span>
              <span className="px-1.5 py-0.5 text-[8px] bg-amber-500/10 text-amber-400 border border-amber-500/20 font-extrabold tracking-wider uppercase rounded-full">
                First Month Free
              </span>
            </div>
            <p className="text-[10px] sm:text-xs text-zinc-400 leading-relaxed mt-0.5">
              Covers continuous secure website hosting, domain SSL, calendar bookings, and automated scheduler SMS/Email alerts.
            </p>
          </div>
        </div>
      </div>

      {/* Submission Form Section */}
      <div 
        id="claim-form-section"
        className="max-w-3xl mx-auto bg-[#0a0c10] border border-zinc-800/60 rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl"
      >
        
        {/* Glow Effects */}
        <div 
          style={{ backgroundColor: primaryThemeColor }}
          className="absolute -top-32 -right-32 w-96 h-96 opacity-[0.05] rounded-full blur-[120px] pointer-events-none" 
        />
        <div 
          style={{ backgroundColor: primaryThemeColor }}
          className="absolute -bottom-32 -left-32 w-96 h-96 opacity-[0.03] rounded-full blur-[120px] pointer-events-none" 
        />

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="relative z-10 space-y-6 text-left">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-light text-white mb-2">Claim Your Website</h3>
              <p className="text-zinc-400 text-sm font-light">
                You are requesting the <span className="font-semibold text-white">{getPackageLabel(selectedPackage)}</span>. This includes the custom design setup, local deployment, and 30 days of free scheduler hosting & SMS notifications (C$49/month thereafter).
              </p>
            </div>

            {formError && (
              <div className="p-4 bg-red-950/30 border border-red-900/50 rounded-lg text-red-400 text-xs font-semibold">
                {formError}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Your Name *</label>
                <input 
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. John Doe"
                  className="w-full bg-zinc-950 border border-zinc-800/80 focus:border-zinc-600 text-white rounded-lg px-4 py-3 text-sm outline-none transition-all"
                />
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Email Address *</label>
                <input 
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. john@business.com"
                  className="w-full bg-zinc-950 border border-zinc-800/80 focus:border-zinc-600 text-white rounded-lg px-4 py-3 text-sm outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Phone Number */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Phone Number *</label>
                <input 
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. (306) 555-0199"
                  className="w-full bg-zinc-950 border border-zinc-800/80 focus:border-zinc-600 text-white rounded-lg px-4 py-3 text-sm outline-none transition-all"
                />
              </div>

              {/* Business Name */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Business / Brand Name *</label>
                <input 
                  type="text"
                  required
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. Regina Elite Plumbers"
                  className="w-full bg-zinc-950 border border-zinc-800/80 focus:border-zinc-600 text-white rounded-lg px-4 py-3 text-sm outline-none transition-all"
                />
              </div>
            </div>

            {/* Custom Notes */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Custom requests / Message</label>
              <textarea 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                placeholder="List any preferred domain names, specific service edits, or colors you would like to use."
                className="w-full bg-zinc-950 border border-zinc-800/80 focus:border-zinc-600 text-white rounded-lg px-4 py-3 text-sm outline-none transition-all resize-none"
              />
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              style={{ 
                backgroundColor: primaryThemeColor,
                boxShadow: `0 0 25px ${primaryThemeColor}40`
              }}
              className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-950 text-[11px] font-bold tracking-[0.2em] uppercase rounded-lg transition-all hover:brightness-110 items-center justify-center gap-2 flex"
            >
              {isSubmitting ? "Submitting..." : "Submit Claim Request"}
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </form>
        ) : (
          <div className="relative z-10 py-16 px-4 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
              <Check className="w-8 h-8" strokeWidth={3} />
            </div>
            <div className="space-y-3">
              <h3 className="text-3xl font-light text-white">Claim Request Submitted</h3>
              <p className="text-zinc-400 text-[14px] sm:text-base font-light max-w-lg mx-auto leading-relaxed">
                Thank you for claiming <span className="font-semibold text-white">{businessName}</span>! Our team at Inex Labs has received your details for the <span className="text-white font-medium">{getPackageLabel(selectedPackage)}</span> + <span className="text-white font-medium">Hosting & Scheduler Service (First Month Free)</span>.
              </p>
              <p className="text-zinc-500 text-xs max-w-sm mx-auto pt-2">
                We will contact you at <span className="text-zinc-300">{email}</span> or <span className="text-zinc-300">{phone}</span> within 24 hours to secure your local domain and finalize the setup details.
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
