import React from "react";
import { LeadData, getLeadData } from "@/data/leads";

export default function MapSection({ leadData: passedLeadData }: { leadData?: LeadData }) {
  const leadData = passedLeadData || getLeadData();
  return (
    <section className="bg-white py-16 md:py-24 border-b border-gray-100 relative z-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header styling perfectly matching TrustSection */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[#0a1930] text-xl md:text-2xl font-medium tracking-[0.15em] uppercase mb-4">
            Local Experts. Regional Coverage.
          </h2>
          <p className="text-slate-500 text-base md:text-lg font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            Providing elite professional solutions with rapid response times to homes and businesses across the greater metropolitan area.
          </p>
        </div>

        {/* Map Container */}
        <div className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] bg-slate-50 rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-200">
          <iframe
            src={leadData.mapUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280986043!2d-74.14448744574929!3d40.69766374865809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="eager"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 grayscale-[15%] contrast-[1.05]"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
