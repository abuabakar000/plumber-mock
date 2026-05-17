export interface LeadData {
  slug: string;
  title: string;
  logo?: string;
  heroBgImage?: string; // Custom background image for the hero section
  primaryColor: string;
  phone: string;
  address: string;
  email: string;
  heroHeading: string;
  highlightWord?: string; // The specific word to apply the gradient to
  heroSubtext: string;
  trustRating: string;
  customerCount: string;
  licensedText?: string;
  hours: {
    monFri: string;
    sat: string;
    emergency: string;
  };
  socials: {
    facebook?: string;
    instagram?: string;
    google?: string;
  };
  mapUrl?: string; // Google Maps Embed URL
  services?: {
    title?: string;
    desc?: string;
  }[];
}

export const defaultLead: LeadData = {
  slug: "default",
  title: "ProPlumb",
  logo: "/logo.png",
  primaryColor: "#f59e0b",
  phone: "(306) 555-0123",
  address: "Your City, State & Surrounding Areas",
  email: "service@proplumb.com",
  heroHeading: "Honest Craftsmanship for Your Home",
  highlightWord: "Craftsmanship",
  heroSubtext: "Experience master-level craftsmanship and rapid 24/7 response times. From emergency repairs to luxury installations, we provide the elite plumbing solutions your home deserves.",
  trustRating: "4.9",
  customerCount: "500+",
  hours: {
    monFri: "8:00 AM - 6:00 PM",
    sat: "9:00 AM - 4:00 PM",
    emergency: "Available 24/7"
  },
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    google: "https://google.com"
  },
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280986043!2d-74.14448744574929!3d40.69766374865809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
};

export const leads: Record<string, LeadData> = {
  "default": defaultLead,
  "penberg-mechanical": {
    ...defaultLead,
    slug: "penberg-mechanical",
    title: "Penberg Mechanical",
    logo: "/penberg-mechanical.png",
    primaryColor: "#0ea5e9", // Oceanic Blue
    phone: "+1 (306) 533-8290",
    email: "Penbergmech@gmail.com",
    address: "2410 Montague St, Regina, SK S4T 3K7",
    heroHeading: "Elite Mechanical Services Regina",
    highlightWord: "Mechanical",
    heroSubtext: "Providing master-level plumbing and mechanical craftsmanship to the Regina community. We offer 24/7 rapid response and elite installations for your home.",
    trustRating: "4.9",
    customerCount: "200+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.0265513383265!2d-104.6299832!3d50.4406061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1e127cd01475%3A0xd92f382ca980a15!2sPenberg%20Mechanical!5e0!3m2!1sen!2s!4v1778269283938!5m2!1sen!2s"
  },
  "blue-coast": {
    ...defaultLead,
    slug: "blue-coast",
    title: "Blue Coast Plumbing",
    phone: "(306) 123-4567",
    primaryColor: "#0ea5e9",
    address: "Regina, SK & Coastal Areas",
    heroHeading: "Regina's Premier Luxury Plumbing Experts",
    services: [
      {
        title: "Coastal Drain Care",
        desc: "Specialized drain maintenance designed for coastal properties. We ensure your flow is as clear as the ocean breeze."
      },
      {
        title: "Luxury Leak Detection",
        desc: "Advanced non-invasive technology to protect your high-end property from hidden water damage."
      },
      {
        title: "Premium Marine Heating",
        desc: "Specialized water heating solutions for luxury coastal homes, ensuring reliable hot water through every season."
      },
      {
        title: "Coastal Infrastructure",
        desc: "Expert piping and infrastructure repair using marine-grade materials built to withstand the elements."
      },
      {
        title: "Marine Fixture Upgrades",
        desc: "Designer-grade fixtures optimized for high-salinity environments, blending luxury aesthetics with industrial durability."
      },
      {
        title: "Ocean-Safe Filtration",
        desc: "Advanced water filtration systems designed to protect your luxury plumbing from coastal sediment and impurities."
      }
    ]
  },
  "revolution-mechanical": {
    ...defaultLead,
    slug: "revolution-mechanical",
    title: "Revolution Mechanical",
    logo: "/revolution-mechanical.png",
    heroBgImage: "/hvac-hero.webp",
    primaryColor: "#6b9e2e",
    phone: "+1 (306) 529-4174",
    email: "revolutionmech@gmail.com",
    address: "1560A Mcara St, Regina, SK S4N 6C5, Canada",
    heroHeading: "Elite Mechanical in Regina",
    highlightWord: "Mechanical",
    heroSubtext: "Providing master-level plumbing, Heating & AC craftsmanship to the Regina community. We offer 24/7 rapid response and elite installations for your home.",
    trustRating: "4.8",
    customerCount: "200+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.297798643631!2d-104.5825375!3d50.454178999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531ea1f2159ddf59%3A0x5e76c097745b37ba!2sRevolution%20Mechanical!5e0!3m2!1sen!2s!4v1778279805488!5m2!1sen!2s"
  },
  "platinum-plumbing-heating": {
    ...defaultLead,
    slug: "platinum-plumbing-heating",
    title: "Platinum Plumbing and Heating Ltd",
    logo: "/platinum-plumbing-heating.png",
    phone: "+353 86 458 2872",
    email: "info@platinumplumbing.ie",
    address: "Serving areas in Waterford, Ireland",
    heroHeading: "Elite Plumbing in Waterford",
    highlightWord: "Plumbing",
    heroSubtext: "Providing master-level plumbing and heating craftsmanship to the Waterford community. We offer 24/7 rapid response and elite installations for your home.",
    trustRating: "5.0",
    customerCount: "100+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39084.36952226659!2d-7.11302995!3d52.24750495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4842c69c63d9e44d%3A0xc5bb81888b67b9fb!2sWaterford%2C%20Ireland!5e0!3m2!1sen!2s!4v1778281432182!5m2!1sen!2s"
  },
  "welldone-mechanical": {
    ...defaultLead,
    slug: "welldone-mechanical",
    title: "Welldone Mechanical Services",
    logo: "/welldone.png",
    heroBgImage: "/hvac-hero.webp",
    primaryColor: "#77b033",
    phone: "+1 (306) 721-2744",
    email: "regina@welldone.com",
    address: "470 Henderson Dr, Regina, SK S4N 5W9, Canada",
    heroHeading: "Elite Mechanical in Regina",
    highlightWord: "Mechanical",
    heroSubtext: "Providing master-level mechanical craftsmanship to the Regina community. We offer 24/7 rapid response and elite installations for your home.",
    trustRating: "4.7",
    customerCount: "200+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.554939417294!2d-104.56590489999999!3d50.4680119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1f9ecc884317%3A0x9f79e75fc9e7286c!2sWelldone%20Mechanical%20Services!5e0!3m2!1sen!2s!4v1778282797642!5m2!1sen!2s",
    services: [
      {
        title: "HVAC Maintenance",
        desc: "Custom-designed preventative programs to optimize efficiency, ensure comfort, and reduce long-term energy costs."
      },
      {
        title: "Building Upgrades & Retrofits",
        desc: "Expert analysis and implementation of modern, energy-efficient mechanical solutions for building modernization."
      },
      {
        title: "Electrical Services",
        desc: "Professional electrical solutions tailored for complex mechanical and HVAC systems with absolute safety."
      },
      {
        title: "Plumbing Services",
        desc: "Licensed plumbing and gas line installations for residential, commercial, and light industrial environments."
      },
      {
        title: "Energy Monitoring",
        desc: "Advanced system analysis and monitoring to optimize performance and maximize energy savings."
      },
      {
        title: "Air Cleaning & Purification",
        desc: "Dedicated indoor air quality solutions to ensure a healthy, safe, and comfortable indoor environment."
      }
    ]
  },
  "velocity-mechanical": {
    ...defaultLead,
    slug: "velocity-mechanical",
    title: "Velocity Mechanical Solutions",
    logo: "/velocity.png",
    primaryColor: "#0ea5e9", // Oceanic Blue
    phone: "+1 (306) 591-7711",
    email: "info@velocityms.com",
    address: "312 Quebec St, Regina, SK S4R 1K6, Canada",
    heroHeading: "Elite Mechanical in Regina",
    highlightWord: "Mechanical",
    heroSubtext: "Providing master-level plumbing craftsmanship to the Regina community. We offer 24/7 rapid response and elite installations for your home.",
    trustRating: "4.9",
    customerCount: "200+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.1062336818172!2d-104.59715755938798!3d50.472841013860936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1efb8051281d%3A0xdb813859948e4c81!2sVelocity%20Mechanical%20Solutions!5e0!3m2!1sen!2s!4v1778283174098!5m2!1sen!2s"
  },
  "honest-plumbing-heating": {
    ...defaultLead,
    slug: "honest-plumbing-heating",
    title: "Honest Plumbing and Heating",
    logo: "/honest-plumbing.png",
    primaryColor: "#0ea5e9", // Oceanic Blue
    phone: "+1 (306) 993-1800",
    email: "honestplumbing@gmail.com",
    address: "801 11th Ave, Regina, SK S4N 6N5, Canada",
    heroHeading: "Elite Plumbing in Regina",
    highlightWord: "Plumbing",
    heroSubtext: "Providing master-level plumbing and heating craftsmanship to the Regina community. We offer 24/7 rapid response and elite installations for your home.",
    trustRating: "4.4",
    customerCount: "200+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.5082649765873!2d-104.59517302356258!3d50.4502593715921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1e32ff54b27f%3A0xba374d30f29738de!2sHonest%20Plumbing%20and%20Heating!5e0!3m2!1sen!2s!4v1778338742461!5m2!1sen!2s"
  },
  "roto-rooter": {
    ...defaultLead,
    slug: "roto-rooter",
    title: "Roto-Rooter",
    logo: "/roto-rooter.png",
    primaryColor: "#EF4444",
    phone: "+1 (306) 359-3996",
    email: "sales@rotorootorregina.com",
    address: "1695 Dewdney Ave E, Regina, SK S4N 4N6, Canada",
    heroHeading: "Elite Plumbing in Regina",
    highlightWord: "Plumbing",
    heroSubtext: "Providing master-level plumbing craftsmanship to the Regina community. We offer 24/7 rapid response and elite installations for your home.",
    trustRating: "4.0",
    customerCount: "200+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.2665898179025!2d-104.5596832!3d50.454760199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1fa23548237f%3A0xe7ae36cf4ceb9240!2sRoto-Rooter!5e0!3m2!1sen!2s!4v1778339435121!5m2!1sen!2s"
  },
  "queen-city-plumbing-heating": {
    ...defaultLead,
    slug: "queen-city-plumbing-heating",
    title: "Queen City Plumbing & Heating",
    logo: "/queen-city-plumbing.png",
    primaryColor: "#f59e0b", // Amber Yellow
    phone: "+1 (306) 533-5352",
    email: "queencityplumbing@gmail.com",
    address: "112 6 Ave E, Regina, SK S4N 5A7, Canada",
    heroHeading: "Elite Plumbing in Regina",
    highlightWord: "Plumbing",
    heroSubtext: "Providing master-level plumbing craftsmanship to the Regina community. We offer 24/7 rapid response and elite installations for your home.",
    trustRating: "4.8",
    customerCount: "100+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.9780047175823!2d-104.58575092356206!3d50.460134271594065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1fb01b626b85%3A0xbe5ecff2b536af1d!2sQueen%20City%20Plumbing%20%26%20Heating!5e0!3m2!1sen!2s!4v1778342225185!5m2!1sen!2s"
  },
  "reimche-excavating": {
    ...defaultLead,
    slug: "reimche-excavating",
    title: "Reimche Excavating Ltd.",
    logo: "/reimche-excavating.png",
    primaryColor: "#0ea5e9", // Oceanic Blue
    phone: "+1 (306) 550-5516",
    email: "reimcheexcavating@gmail.com",
    address: "600 East Broadway Ave E, Regina, SK S4N 1A2, Canada",
    heroHeading: "Elite Excavating in Regina",
    highlightWord: "Excavating",
    heroSubtext: "Providing master-level excavating and plumbing craftsmanship to the Regina community. We offer 24/7 rapid response and elite installations for your home.",
    trustRating: "4.9",
    customerCount: "200+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.0181332866814!2d-104.57273909999999!3d50.440762899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1fd08ed65843%3A0x5e9c4459f911464c!2sReimche%20Excavating%20Ltd.!5e0!3m2!1sen!2s!4v1778343045080!5m2!1sen!2s"
  },
  "neighbours-mechanical": {
    ...defaultLead,
    slug: "neighbours-mechanical",
    title: "Neighbours Mechanical",
    logo: "/neighbours-mechanical.png",
    primaryColor: "#0ea5e9", // Oceanic Blue
    phone: "+1 (306) 761-2905",
    email: "neighboursmechanical@gmail.com",
    address: "1427 Scarth St, Regina, SK S4R 2G1, Canada",
    heroHeading: "Elite Mechanical in Regina",
    highlightWord: "Mechanical",
    heroSubtext: "Providing master-level plumbing and mechanical craftsmanship to the Regina community. We offer 24/7 rapid response and elite installations for your home.",
    trustRating: "4.7",
    customerCount: "200+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.191879810421!2d-104.61081860000002!3d50.4561515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1e6bd6b1add7%3A0x5c1a362c2d89033e!2sNeighbours%20Mechanical!5e0!3m2!1sen!2s!4v1778344105159!5m2!1sen!2s"
  },
  "eh-plus-plumbing-heating": {
    ...defaultLead,
    slug: "eh-plus-plumbing-heating",
    title: "Eh Plus Plumbing & Heating",
    logo: "/eh-plus-plumbing.png",
    primaryColor: "#EF4444",
    phone: "+1 (306) 559-6181",
    email: "ehplus@myaccess.ca",
    address: "817 Campbell St, Regina, SK S4T 5P2, Canada",
    heroHeading: "Elite Plumbing in Regina",
    highlightWord: "Plumbing",
    heroSubtext: "Providing master-level plumbing and heating craftsmanship to the Regina community. We offer 24/7 rapid response and elite installations for your home.",
    trustRating: "5.0",
    customerCount: "100+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.720194348703!2d-104.6636425!3d50.464934899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1f7749ee9751%3A0x2f869ff4375777a5!2sEh%20Plus%20Plumbing%20%26%20Heating%20Ltd.!5e0!3m2!1sen!2s!4v1778344640927!5m2!1sen!2s"
  },
  "ae-sewer-water": {
    ...defaultLead,
    slug: "ae-sewer-water",
    title: "A & E Sewer & Water Service",
    logo: "/a&e-sewer.png",
    primaryColor: "#0ea5e9", // Oceanic Blue
    phone: "+1 (306) 591-5665",
    email: "aesewer@gmail.com",
    address: "2327 McTavish St, Regina, SK S4T 3X4, Canada",
    heroHeading: "Elite Plumbing in Regina",
    highlightWord: "Plumbing",
    heroSubtext: "Providing master-level plumbing and sewer craftsmanship to the Regina community. We offer 24/7 rapid response and elite installations for your home.",
    trustRating: "4.0",
    customerCount: "100+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.956307268119!2d-104.6335842!3d50.441914499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1e0d3fe74beb%3A0x2e6c6d30e1ab4fbc!2sA%20%26%20E%20Sewer%20%26%20Water%20Service!5e0!3m2!1sen!2s!4v1778345584077!5m2!1sen!2s"
  },
  "gr-mechanical-contracting": {
    ...defaultLead,
    slug: "gr-mechanical-contracting",
    title: "G & R Mechanical Contracting",
    logo: "/mechanical-plumbing.png",
    heroBgImage: "/hvac-hero.webp",
    primaryColor: "#EF4444",
    phone: "+1 (306) 537-3645",
    email: "grm@sasktel.net",
    address: "2333 6th Ave, Regina, SK S4R 1B4, Canada",
    heroHeading: "Elite Plumbing in Regina",
    highlightWord: "Plumbing",
    heroSubtext: "Providing master-level plumbing, heating & air conditioning craftsmanship to the Regina community. We offer 24/7 rapid response and elite installations for your home.",
    trustRating: "5.0",
    customerCount: "100+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.598766005678!2d-104.61444005210197!3d50.459525915863026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1e440faaaaab%3A0x2ec636f43a4d261c!2sG%20%26%20R%20Mechanical%20Contracting!5e0!3m2!1sen!2s!4v1778346098856!5m2!1sen!2s"
  },
  "joules-hvac-electric": {
    ...defaultLead,
    slug: "joules-hvac-electric",
    title: "Joules HVAC & Electric Ltd",
    logo: "/joules-electrical.png",
    heroBgImage: "/hvac-hero.webp",
    primaryColor: "#f59e0b", // Amber Yellow
    phone: "+1 (306) 537-0771",
    email: "Jouleshvac@hotmail.com",
    address: "210 Rose St N, Regina, SK S4R 2Y2, Canada",
    heroHeading: "Elite HVAC & Electric in Regina",
    highlightWord: "HVAC",
    heroSubtext: "Providing master-level HVAC and electric craftsmanship to the Regina community. We offer 24/7 rapid response and elite installations for your home.",
    trustRating: "5.0",
    customerCount: "200+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.954809628566!2d-104.60793969999999!3d50.47918500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8de3a6284738706f%3A0xfab57a89784eebe7!2sJoules%20HVAC%20%26%20Electric%20Ltd!5e0!3m2!1sen!2s!4v1778346758843!5m2!1sen!2s",
    services: [
      {
        title: "AC Repair & Maintenance",
        desc: "Precision cooling solutions for your home. We keep your air conditioning systems running at peak efficiency all summer long."
      },
      {
        title: "Furnace & Heating",
        desc: "Expert heating services to keep your property warm. From emergency repairs to full furnace installations, we've got you covered."
      },
      {
        title: "Electrical Upgrades",
        desc: "Modernizing your property's electrical infrastructure with master-level precision and absolute safety in mind."
      },
      {
        title: "Smart Home Integration",
        desc: "Seamlessly connecting your HVAC and electrical systems for total control, comfort, and maximum energy efficiency."
      },
      {
        title: "Indoor Air Purification",
        desc: "High-efficiency filtration and UV purification systems to ensure your home's air is clean, safe, and free from allergens."
      },
      {
        title: "EV Charging Solutions",
        desc: "Professional installation of level 2 electric vehicle charging stations, integrated seamlessly into your home's electrical panel."
      }
    ]
  },
  "liquid-metal-plumbing-heating": {
    ...defaultLead,
    slug: "liquid-metal-plumbing-heating",
    title: "Liquid Metal Plumbing and Heating",
    logo: "/liquid-metal.png",
    primaryColor: "#0ea5e9", // Oceanic Blue
    phone: "+1 (306) 596-3622",
    email: "LiquidMetalPlumbing@gmail.com",
    address: "58 Mackenzie Crescent, Regina, SK S4N 5G5, Canada",
    heroHeading: "Elite Plumbing in Regina",
    highlightWord: "Plumbing",
    heroSubtext: "Providing master-level plumbing and heating craftsmanship to the Regina community. We offer 24/7 rapid response and elite installations for your home.",
    trustRating: "5.0",
    customerCount: "100+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.1542225024837!2d-104.5383536045762!3d50.45685276913899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1f7bcc53271d%3A0xde04890f05ecac52!2sLiquid%20Metal%20Plumbing%20and%20Heating!5e0!3m2!1sen!2s!4v1778442577249!5m2!1sen!2s",
    services: [
      {
        title: "Furnace & Water Heaters",
        desc: "Expert installation, repair, and replacement of furnaces and water heaters to keep your home comfortable year-round."
      },
      {
        title: "Plumbing Installations",
        desc: "Precision plumbing installations for new builds or renovations, ensuring long-lasting reliability and performance."
      },
      {
        title: "Repair & Maintenance",
        desc: "Fast and reliable repair services for all your plumbing and heating needs, from minor leaks to major system failures."
      },
      {
        title: "System Replacements",
        desc: "Seamless replacement of outdated plumbing and heating systems with modern, energy-efficient solutions."
      },
      {
        title: "Emergency Leak Response",
        desc: "Rapid, 24/7 onsite solutions for major pipe bursts or flooding, protecting your property's value and integrity."
      },
      {
        title: "Hydronic Heating Systems",
        desc: "Energy-efficient in-floor heating installations that provide silent, consistent warmth throughout your entire home."
      }
    ]
  },
  "queen-city-sewer": {
    ...defaultLead,
    slug: "queen-city-sewer",
    title: "Queen City Sewer",
    logo: "/queen-city.png",
    primaryColor: "#EF4444",
    phone: "+1 (306) 536-0125",
    email: "info@queencitysewer.ca",
    address: "Pasqua St, Regina, SK S4R 8R7, Canada",
    heroHeading: "Elite Sewer Services in Regina",
    highlightWord: "Sewer",
    heroSubtext: "Providing master-level sewer and septic craftsmanship to the Regina community. We offer 24/7 rapid response and elite maintenance for your property.",
    trustRating: "4.0",
    customerCount: "100+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.663707168183!2d-104.640912!3d50.42873699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1de21ee733e1%3A0x114607710cf87ab8!2sQueen%20City%20Sewer!5e0!3m2!1sen!2s!4v1778444595023!5m2!1sen!2s",
    services: [
      {
        title: "Vacuum Truck Services",
        desc: "Efficient and reliable vacuum truck services for all your liquid waste removal and disposal needs."
      },
      {
        title: "Shop Pit & Traps",
        desc: "Professional cleaning and maintenance of shop pits and grease traps to keep your operations running smoothly."
      },
      {
        title: "Septic Tank Care",
        desc: "Expert septic tank cleaning and repairs, ensuring your system remains functional and environmentally safe."
      },
      {
        title: "Sewer Jet & Washing",
        desc: "High-pressure sewer jetting and hot/cold pressure washing to clear blockages and maintain clear lines."
      },
      {
        title: "Hydro-Excavation",
        desc: "Safe, non-destructive digging using pressurized water to expose underground utilities without risking pipe damage."
      },
      {
        title: "Sewer Line Patching",
        desc: "Trenchless point repair solutions to fix localized sewer damage without the need for massive excavation or lawn disruption."
      }
    ]
  },
  "rooter-man-drain-services": {
    ...defaultLead,
    slug: "rooter-man-drain-services",
    title: "Rooter Man Drain Services",
    logo: "/rooter-man.png",
    primaryColor: "#EF4444",
    phone: "+1 (306) 651-2564",
    email: "rooterman@gmail.com",
    address: "1527 Ontario Ave Unit 8, Saskatoon, SK S7K 1S7, Canada",
    heroHeading: "Elite Drain Services in Saskatoon",
    highlightWord: "Drain",
    heroSubtext: "Providing master-level drain and plumbing craftsmanship to the Saskatoon community. We offer 24/7 rapid response and elite maintenance for your property.",
    trustRating: "4.8",
    customerCount: "1000+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2448.153792301255!2d-106.666764!3d52.149712799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f0d9a6df94bb%3A0x1362f3538a76cb31!2sRooter%20Man%20Drain%20Services!5e0!3m2!1sen!2s!4v1778446130943!5m2!1sen!2s",
    services: [
      {
        title: "Clogged Drain Relief",
        desc: "Expert solutions for even the most stubborn clogged drains, using advanced techniques to restore full flow instantly."
      },
      {
        title: "Camera Inspections",
        desc: "High-definition sewer camera inspections to identify hidden issues and ensure your plumbing is in peak condition."
      },
      {
        title: "Grease Trap Service",
        desc: "Professional maintenance and cleaning of grease traps for commercial and residential properties to prevent backups."
      },
      {
        title: "Water Heater Solutions",
        desc: "Comprehensive repair, maintenance, and installation of water heaters to ensure you never run out of hot water."
      },
      {
        title: "Bio-Active Drain Treatment",
        desc: "Professional-grade microbial solutions that digest organic waste, keeping your drains clear and odor-free naturally."
      },
      {
        title: "Root Intrusion Removal",
        desc: "Specialized heavy-duty cutters and hydro-jetting to eliminate invasive tree roots and prevent future sewer line collapses."
      }
    ]
  },
  "courtesy-plumbing-heating": {
    ...defaultLead,
    slug: "courtesy-plumbing-heating",
    title: "Courtesy Plumbing & Heating",
    logo: "/courtesy-plumbing.png",
    primaryColor: "#0ea5e9", // Oceanic Blue
    phone: "+13063824122",
    email: "admin@courtesyplumbing.ca",
    address: "418A 50 St E #101, Saskatoon, SK S7M 5A5, Canada",
    heroHeading: "Elite Plumbing in Saskatoon",
    highlightWord: "Plumbing",
    heroSubtext: "Providing master-level plumbing and heating craftsmanship to the Saskatoon community. We offer 24/7 rapid response and elite maintenance for your property.",
    trustRating: "4.4",
    customerCount: "500+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2446.9812420565263!2d-106.66297229999999!3d52.1710345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f9e8b57b8165%3A0x17ae720181ac3899!2sCourtesy%20Plumbing%20%26%20Heating!5e0!3m2!1sen!2s!4v1778446443994!5m2!1sen!2s",
    services: [
      {
        title: "Installation & Upgrades",
        desc: "Expert plumbing and heating installations and upgrades, ensuring your systems are modern, efficient, and reliable."
      },
      {
        title: "Air Quality Specialists",
        desc: "Dedicated indoor air quality solutions to keep your home healthy and comfortable throughout every season."
      },
      {
        title: "Preventive Maintenance",
        desc: "Comprehensive maintenance plans and service agreements designed to extend the life of your equipment and prevent costly repairs."
      },
      {
        title: "Extended Warranties",
        desc: "Peace of mind with extended warranties on our master-level craftsmanship and premium parts."
      },
      {
        title: "High-Efficiency Boilers",
        desc: "Expert installation and service for modern condensing boilers, maximizing energy efficiency and reducing monthly utility bills."
      },
      {
        title: "Smart Thermostat Setup",
        desc: "Precise calibration and installation of advanced temperature control systems for optimized comfort and remote monitoring."
      }
    ]
  },
  "five-star-plumbing-heating-air-conditioning": {
    ...defaultLead,
    slug: "five-star-plumbing-heating-air-conditioning",
    title: "Five Star Plumbing Heating & Air Conditioning",
    logo: "/five-star.png",
    heroBgImage: "/hvac-hero.webp",
    primaryColor: "#2FA7A0",
    phone: "+1 (306) 934-7002",
    email: "info@FiveStarPlumbing.com",
    address: "2270 Northridge Dr, Saskatoon, SK S7L 1B9, Canada",
    heroHeading: "Elite HVAC & Plumbing in Saskatoon",
    highlightWord: "Plumbing",
    heroSubtext: "Providing master-level plumbing, heating, and air conditioning craftsmanship to the Saskatoon community. We offer 24/7 rapid response and elite installations for your property.",
    trustRating: "4.9",
    customerCount: "500+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2447.529935719325!2d-106.6684835!3d52.161057799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f6fb23057755%3A0x89d59bdb0609efb1!2sFive%20Star%20Plumbing%20Heating%20%26%20Air%20Conditioning!5e0!3m2!1sen!2s!4v1778447955776!5m2!1sen!2s",
    services: [
      {
        title: "Advanced Air Conditioning",
        desc: "From residential A/C and ductless splits to commercial rooftop units and heat pumps, we keep your property cool and efficient."
      },
      {
        title: "Complete Heating Solutions",
        desc: "Expert service for boilers, furnaces, radiants, and unit heaters. We ensure your heating system is reliable through the toughest winters."
      },
      {
        title: "Full-Scale Plumbing",
        desc: "Comprehensive plumbing services including tankless water heaters, backflow testing, and expert repair for leaking or frozen pipes."
      },
      {
        title: "Commercial & Retrofit",
        desc: "Specialized service and retrofit solutions for commercial properties, ensuring modern infrastructure and peak performance."
      },
      {
        title: "Ductwork Optimization",
        desc: "Professional cleaning, sealing, and design of air ducts to eliminate hotspots and improve overall system performance."
      },
      {
        title: "Emergency Pump Services",
        desc: "Reliable repair and replacement of sump pumps and ejector pumps to safeguard your basement from water damage."
      }
    ]
  },
  "nickel-plumbing-heating": {
    ...defaultLead,
    slug: "nickel-plumbing-heating",
    title: "Nickel Plumbing & Heating",
    logo: "/nickel-plumbing.png",
    heroBgImage: "/hvac-hero.webp",
    primaryColor: "#0ea5e9", // Oceanic Blue
    phone: "+1 (306) 653-1899",
    email: "info@nickelplumbing.com",
    address: "2104 St George Ave, Saskatoon, SK S7M 0K7",
    heroHeading: "Elite Plumbing in Saskatoon",
    highlightWord: "Plumbing",
    heroSubtext: "Providing master-level plumbing, heating, and sewer craftsmanship to the Saskatoon community since 1968. We offer 24/7 rapid response and elite installations for your home.",
    trustRating: "4.0",
    customerCount: "200+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9802.413627583066!2d-106.673583!3d52.105149!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f0c53cd96a5d%3A0x3d84057f387aa794!2sNickel%20Plumbing%20%26%20Heating%20(1985)%20Ltd!5e0!3m2!1sen!2sca!4v1778448926411!5m2!1sen!2sca",
    services: [
      {
        title: "Master-Level Plumbing",
        desc: "Comprehensive plumbing services including fixture repair, gas fitting, and backflow prevention with absolute precision."
      },
      {
        title: "Elite HVAC & Heating",
        desc: "Specialized service for furnaces, boilers, and radiant heating systems. We ensure your comfort through every season."
      },
      {
        title: "Advanced Sewer & Drain",
        desc: "High-pressure jetting, CCTV camera inspections, and expert sewer relining to keep your infrastructure flowing perfectly."
      },
      {
        title: "Cooling & Refrigeration",
        desc: "Full-service air conditioning installation and commercial refrigeration solutions designed for maximum efficiency."
      },
      {
        title: "Natural Gas Line Service",
        desc: "Certified gas line installation and leak testing for fireplaces, ranges, and outdoor BBQ setups with absolute safety."
      },
      {
        title: "Water Softener Systems",
        desc: "Targeted solutions to eliminate hard water mineral buildup, extending the lifespan of your appliances and fixtures."
      }
    ]
  },
  "accelerate-plumbing-heating": {
    ...defaultLead,
    slug: "accelerate-plumbing-heating",
    title: "Accelerate Plumbing & Heating Ltd.",
    logo: "/accelerate-plumbing.png",
    primaryColor: "#EF4444",
    phone: "+1 (306) 280-3663",
    email: "accelerateplumbing@hotmail.com",
    address: "519 Glacial Shores Way, Saskatoon, SK S7W 0R5, Canada",
    heroHeading: "Elite Plumbing in Saskatoon",
    highlightWord: "Plumbing",
    heroSubtext: "Providing master-level plumbing and heating craftsmanship to the Saskatoon community. We offer 24/7 rapid response and elite installations for your property.",
    trustRating: "4.8",
    customerCount: "500+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4894.185511032629!2d-106.562127!3d52.169007!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f4f8573b8a97%3A0xa5d95470c3f29981!2sAccelerate%20Plumbing%20%26%20Heating%20Ltd.!5e0!3m2!1sen!2sus!4v1778449283195!5m2!1sen!2sus",
    services: [
      {
        title: "Master Gas Fitting",
        desc: "Expert gas fitting services for furnaces, garage heaters, and fireplaces, ensuring absolute safety and peak performance."
      },
      {
        title: "Elite Plumbing & Reno",
        desc: "Comprehensive plumbing services and high-end bathroom renovations tailored to your property's unique needs."
      },
      {
        title: "Heating & Furnace Repair",
        desc: "Fast and reliable furnace repair and heating system maintenance to keep your home comfortable in any weather."
      },
      {
        title: "A/C & Water Heaters",
        desc: "Professional installation and service for air conditioning units and hot water heaters for total year-round comfort."
      },
      {
        title: "Radiant Floor Heating",
        desc: "Custom design and installation of in-floor heating systems for unrivaled comfort and modern energy efficiency."
      },
      {
        title: "Backflow Prevention",
        desc: "Certified testing and installation of backflow preventers to protect your property's potable water supply from contamination."
      }
    ]
  },
  "tyrones-drain": {
    ...defaultLead,
    slug: "tyrones-drain",
    title: "Tyrone's Drain Doctor Inc.",
    logo: "/tyron-drain.png",
    primaryColor: "#77b033",
    phone: "+1 (306) 202-6914",
    email: "tyronesdraincleaning@gmail.com",
    address: "507 3 St E, Saskatoon, SK S7H 1L9, Canada",
    heroHeading: "Elite Drain Services in Saskatoon",
    highlightWord: "Drain",
    heroSubtext: "Providing master-level drain and plumbing craftsmanship to the Saskatoon community. We offer 24/7 rapid response and elite maintenance for your property.",
    trustRating: "5.0",
    customerCount: "1000+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2450.3407219200035!2d-106.65887839999999!3d52.109929099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f67d5849b203%3A0xf1f197a96d188bc6!2sTyrone's%20Drain%20Doctor%20Inc.!5e0!3m2!1sen!2s!4v1778451336019!5m2!1sen!2s",
    services: [
      {
        title: "Master Drain Cleaning",
        desc: "Precision drain cleaning and clearing using advanced tools to restore full functionality to your property's infrastructure."
      },
      {
        title: "High Pressure Jetting",
        desc: "Powerful high-pressure water jetting to clear even the most stubborn blockages and maintain long-term flow."
      },
      {
        title: "CCTV Camera Inspections",
        desc: "High-definition camera inspections to accurately diagnose issues within your lines and ensure absolute clarity."
      },
      {
        title: "Emergency Plumbing",
        desc: "Rapid 24/7 emergency plumbing services to handle urgent repairs and protect your property from water damage."
      },
      {
        title: "Main Line Cleaning",
        desc: "Specialized heavy-duty cleaning of your property's main sewer line to prevent catastrophic backups and structural damage."
      },
      {
        title: "Toilet & Sink Restoration",
        desc: "Professional clearing and mechanical restoration of slow-moving toilets and sinks to ensure peak bathroom functionality."
      }
    ]
  },
  "revo-plumbing-heating": {
    ...defaultLead,
    slug: "revo-plumbing-heating",
    title: "Revo Plumbing & Heating",
    logo: "/revo-plumbing.png",
    heroBgImage: "/hvac-hero.webp",
    primaryColor: "#0ea5e9",
    phone: "+13063740922",
    address: "2406 Wheaton Ave #2, Saskatoon, SK S7L 5Z4",
    email: "info@revosask.com",
    heroHeading: "Elite Plumbing in Saskatoon",
    highlightWord: "Plumbing",
    heroSubtext: "Providing master-level plumbing, heating, and gas-fitting craftsmanship to the Saskatoon community. We offer rapid response times and elite installations.",
    trustRating: "4.6",
    customerCount: "300+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2447.340697668503!2d-106.6755215!3d52.164498800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f3f886cb8275%3A0xed03fd00980a7281!2sRevo%20Plumbing%20%26%20Heating!5e0!3m2!1sen!2sca!4v1779060515132!5m2!1sen!2sca",
    hours: {
      monFri: "8:00 AM - 4:00 PM",
      sat: "8:00 AM - 4:00 PM",
      emergency: "Available 24/7"
    },
    services: [
      {
        title: "Premium Plumbing & Fixtures",
        desc: "Expert installation and repair of luxury faucets, toilets, sinks, garburators, and high-performance sump pumps built for lasting reliability."
      },
      {
        title: "Commercial HVAC Systems",
        desc: "Comprehensive heating, ventilation, and air conditioning solutions for commercial buildings, designed for maximum comfort and energy efficiency."
      },
      {
        title: "Boiler & Furnace Services",
        desc: "Saskatoon's premier choices for mid to high-efficiency boiler and furnace replacements, zone valve services, and system maintenance."
      },
      {
        title: "Certified Gas Fittings",
        desc: "Licensed commercial gas fitting including gas furnace care, BBQ quick connects, patio heaters, fire pit installations, and regulator replacements."
      },
      {
        title: "Backflow Testing & Safety",
        desc: "Professional certified backflow prevention testing and code-compliance audits to safeguard your property's water supply."
      },
      {
        title: "Mechanical System Upgrades",
        desc: "Expert commercial mechanical package upgrades, including pump installation, zone valve replacements, and unit heater maintenance."
      }
    ]
  },
};

export function getLeadData(slug?: string): LeadData {
  if (!slug) return defaultLead;
  return leads[slug] || defaultLead;
}
