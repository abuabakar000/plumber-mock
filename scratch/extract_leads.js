const fs = require('fs');
const path = require('path');

const leadsPath = path.join(__dirname, '..', 'src', 'data', 'leads.ts');
const lines = fs.readFileSync(leadsPath, 'utf8').split('\n');

const leadsList = [];
let currentLead = null;
let insideServicesArray = false;

const defaultLead = {
  title: "ProPlumb",
  phone: "(306) 555-0123",
  slug: "default"
};

for (const line of lines) {
  const trimmed = line.trim();
  
  // Detect a new lead block: "slug": {
  // e.g. "penberg-mechanical": {
  const blockMatch = trimmed.match(/^"([^"]+)"\s*:\s*\{/);
  if (blockMatch) {
    if (currentLead && currentLead.slug) {
      leadsList.push(currentLead);
    }
    currentLead = {
      slug: blockMatch[1],
      title: '',
      phone: ''
    };
    insideServicesArray = false;
    continue;
  }
  
  if (currentLead) {
    // Detect services array start
    if (trimmed.includes('services: [')) {
      insideServicesArray = true;
    }
    // Detect services array end
    if (insideServicesArray && trimmed.startsWith(']')) {
      insideServicesArray = false;
    }

    // Only extract lead details if NOT inside the nested services array
    if (!insideServicesArray) {
      // Detect slug:
      const slugMatch = trimmed.match(/slug:\s*"([^"]+)"/);
      if (slugMatch) {
        currentLead.slug = slugMatch[1];
      }
      
      // Detect title:
      const titleMatch = trimmed.match(/title:\s*"([^"]+)"/);
      if (titleMatch) {
        currentLead.title = titleMatch[1];
      }
      
      // Detect phone:
      const phoneMatch = trimmed.match(/phone:\s*"([^"]+)"/);
      if (phoneMatch) {
        currentLead.phone = phoneMatch[1];
      }
    }
    
    // Detect end of lead block (a single close brace followed by a comma on its own line)
    if (trimmed === '},' || trimmed === '}') {
      if (currentLead.slug) {
        leadsList.push(currentLead);
      }
      currentLead = null;
    }
  }
}

console.log('| Company Name | Phone Number | Website Link |');
console.log('| --- | --- | --- |');

// Default lead
console.log(`| ${defaultLead.title} (Default) | ${defaultLead.phone} | [/](http://localhost:3000/) |`);

// Dynamic leads
for (const lead of leadsList) {
  if (lead.slug === 'default') continue;
  const title = lead.title || defaultLead.title;
  const phone = lead.phone || defaultLead.phone;
  console.log(`| ${title} | ${phone} | [/${lead.slug}](http://localhost:3000/${lead.slug}) |`);
}
