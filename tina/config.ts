import { defineConfig } from "tinacms";

const branch = process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "00000000-0000-0000-0000-000000000000", // Fallback for build
  token: process.env.TINA_TOKEN || "0000000000000000000000000000000000000000", // Fallback for build

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      {
        name: "settings",
        label: "⚙️ Global Settings",
        path: "content/global",
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "siteName", label: "Site Name" },
          { type: "string", name: "phone", label: "Phone Number" },
          { type: "string", name: "email", label: "Email Address" },
          { type: "string", name: "address", label: "Office Address", ui: { component: "textarea" } },
          { type: "string", name: "linkedin", label: "LinkedIn URL" },
          {
            type: "object", name: "navbar", label: "Navbar",
            fields: [
              {
                type: "object", name: "links", label: "Links", list: true,
                fields: [
                  { type: "string", name: "name", label: "Name" },
                  { type: "string", name: "href", label: "Link" },
                ],
              },
              { type: "string", name: "ctaText", label: "CTA Button Text" },
            ],
          },
          {
            type: "object", name: "footer", label: "Footer",
            fields: [
              { type: "string", name: "tagline", label: "Tagline", ui: { component: "textarea" } },
              { type: "string", name: "copyright", label: "Copyright Text" },
              {
                type: "object", name: "links", label: "Links", list: true,
                fields: [
                  { type: "string", name: "name", label: "Name" },
                  { type: "string", name: "href", label: "Link" },
                ],
              },
              {
                type: "object", name: "serviceLinks", label: "Services Links", list: true,
                fields: [
                  { type: "string", name: "name", label: "Name" },
                  { type: "string", name: "href", label: "Link" },
                ],
              },
            ],
          },
          {
            type: "object", name: "preFooterCta", label: "Pre-Footer CTA",
            fields: [
              { type: "string", name: "title", label: "Title", ui: { component: "textarea" } },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "primaryCta", label: "Button Text" },
            ],
          },
          {
            type: "object", name: "testimonials", label: "Global Testimonials",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleItalic", label: "Title Italic" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              {
                type: "object", name: "list", label: "Testimonials", list: true,
                fields: [
                  { type: "string", name: "name", label: "Name" },
                  { type: "string", name: "role", label: "Role" },
                  { type: "string", name: "facility", label: "Facility" },
                  { type: "string", name: "content", label: "Content", ui: { component: "textarea" } },
                  { type: "number", name: "stars", label: "Stars" },
                  { type: "string", name: "initials", label: "Initials" },
                ],
              },
            ],
          },
          {
            type: "object", name: "faq", label: "Global FAQ",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleItalic", label: "Title Italic" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              {
                type: "object", name: "list", label: "FAQ Items", list: true,
                fields: [
                  { type: "string", name: "q", label: "Question" },
                  { type: "string", name: "a", label: "Answer", ui: { component: "textarea" } },
                ],
              },
            ],
          },
          {
            type: "object", name: "mapLegend", label: "Map Legend Boxes", list: true,
            fields: [
              { type: "string", name: "icon", label: "Icon Name" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "desc", label: "Description", ui: { component: "textarea" } },
            ],
          },
          {
            type: "string",
            name: "activeStates",
            label: "Active States (for USA Map)",
            list: true,
          },
        ],
      },
      {
        name: "home",
        label: "🏠 Home Page",
        path: "content/pages",
        match: { include: "home" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "object", name: "hero", label: "Hero Section",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow Text" },
              { type: "string", name: "titleLine1", label: "Title Line 1" },
              { type: "string", name: "titleItalic", label: "Title Italic Word" },
              { type: "string", name: "titleLine2", label: "Title Line 2" },
              { type: "string", name: "subtext", label: "Subtext", ui: { component: "textarea" } },
              { type: "string", name: "primaryCta", label: "Primary CTA" },
              { type: "string", name: "secondaryCta", label: "Secondary CTA" },
              {
                type: "object", name: "stats", label: "Hero Stats", list: true,
                fields: [
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "label", label: "Label" },
                ],
              },
            ],
          },
          {
            type: "object", name: "clinicalExcellence", label: "Clinical Excellence Section",
            fields: [
              { type: "string", name: "badge", label: "Badge Text" },
              { type: "string", name: "titleLine1", label: "Title Line 1" },
              { type: "string", name: "titleItalic", label: "Title Italic Word" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              {
                type: "object", name: "stats", label: "Stats", list: true,
                fields: [
                  { type: "number", name: "value", label: "Value" },
                  { type: "string", name: "suffix", label: "Suffix" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "desc", label: "Description", ui: { component: "textarea" } },
                ],
              },
              {
                type: "object", name: "services", label: "Services Cards", list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "desc", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "tag", label: "Tag" },
                  { type: "string", name: "icon", label: "Icon Name (Lucide)" },
                ],
              },
            ],
          },
          {
            type: "object", name: "process", label: "Process Section",
            fields: [
              { type: "string", name: "badge", label: "Badge Text" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleItalic", label: "Title Italic Word" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              {
                type: "object", name: "steps", label: "Steps", list: true,
                fields: [
                  { type: "string", name: "num", label: "Step Number" },
                  { type: "string", name: "title", label: "Step Title" },
                  { type: "string", name: "desc", label: "Step Description", ui: { component: "textarea" } },
                  { type: "string", name: "icon", label: "Icon Name" },
                ],
              },
            ],
          },
          {
            type: "object", name: "whyEvolve", label: "Why Evolve Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "subtitle", label: "Subtitle" },
              { type: "string", name: "introText", label: "Intro Text" },
              {
                type: "object", name: "features", label: "Features", list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "subtitle", label: "Subtitle" },
                  { type: "string", name: "desc", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "icon", label: "Icon Name" },
                  { type: "string", name: "color", label: "Accent Color (Hex)" },
                  { type: "string", name: "href", label: "Link" },
                ],
              },
              {
                type: "object", name: "quoteStrip", label: "Quote Strip",
                fields: [
                  { type: "string", name: "text", label: "Quote Text", ui: { component: "textarea" } },
                  { type: "string", name: "author", label: "Author" },
                  { type: "string", name: "authorTitle", label: "Author Title" },
                  { type: "image", name: "authorPhoto", label: "Author Photo" },
                ],
              },
            ],
          },
          {
            type: "object", name: "socialProof", label: "Social Proof Section",
            fields: [
              {
                type: "object", name: "stats", label: "Stats Bar", list: true,
                fields: [
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "desc", label: "Description" },
                ],
              },
            ],
          },
          {
             type: "object", name: "featuredDiscovery", label: "Featured Discovery Section",
             fields: [
               { type: "string", name: "badge", label: "Badge" },
               { type: "string", name: "title", label: "Title" },
               { type: "string", name: "titleItalic", label: "Title Italic" },
               { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
               { type: "image", name: "image", label: "Featured Image" },
               { type: "string", name: "cta", label: "CTA Button Text" },
             ],
          },
          {
            type: "object", name: "bottomCta", label: "Bottom CTA Section",
            fields: [
              { type: "string", name: "quote", label: "Quote", ui: { component: "textarea" } },
              { type: "string", name: "checklist", label: "Checklist Items", list: true },
              { type: "string", name: "primaryCta", label: "Button Text" },
              { type: "string", name: "phone", label: "Phone Number" },
            ],
          },
        ],
      },
      {
        name: "about",
        label: "👤 About Page",
        path: "content/pages",
        match: { include: "about" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "object", name: "header", label: "Header Section",
            fields: [
              { type: "string", name: "title", label: "Title Prefix" },
              { type: "string", name: "italicWord", label: "Italic Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "badgeText", label: "Badge Text" },
              {
                type: "object", name: "valueBoxes", label: "Value Boxes", list: true,
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "sublabel", label: "Sublabel" },
                  { type: "string", name: "icon", label: "Icon Name" },
                ],
              },
            ],
          },
          {
            type: "object", name: "intro", label: "Intro Section",
            fields: [
              { type: "string", name: "badge", label: "Badge Text" },
              { type: "string", name: "titleLine1", label: "Title Line 1" },
              { type: "string", name: "titleItalic", label: "Title Italic Word" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } },
              { type: "string", name: "quote", label: "Quote", ui: { component: "textarea" } },
              { type: "string", name: "quoteAuthor", label: "Quote Author" },
            ],
          },
          {
            type: "object", name: "pillars", label: "Pillars", list: true,
            fields: [
              { type: "string", name: "icon", label: "Icon Name" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "text", label: "Description", ui: { component: "textarea" } },
            ],
          },
          {
            type: "object", name: "leaders", label: "Leadership Bios", list: true,
            fields: [
              { type: "string", name: "name", label: "Name" },
              { type: "string", name: "title", label: "Job Title" },
              { type: "image", name: "photo", label: "Photo URL" },
              { type: "string", name: "quote", label: "Quote", ui: { component: "textarea" } },
              { type: "string", name: "bio", label: "Bio Paragraphs", list: true, ui: { component: "textarea" } },
            ],
          },
          {
            type: "object", name: "philosophy", label: "Philosophy Section",
            fields: [
              { type: "string", name: "titleLine1", label: "Title Line 1" },
              { type: "string", name: "titleItalic", label: "Title Italic Word" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              {
                type: "object", name: "items", label: "Items", list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "icon", label: "Icon Name" },
                  { type: "string", name: "desc", label: "Description", ui: { component: "textarea" } },
                ],
              },
            ],
          },
          {
            type: "object", name: "journey", label: "Journey Section",
            fields: [
              { type: "string", name: "badge", label: "Badge Text" },
              { type: "string", name: "titleLine1", label: "Title Line 1" },
              { type: "string", name: "titleItalic", label: "Title Italic Word" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object", name: "items", label: "Items", list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "text", label: "Description", ui: { component: "textarea" } },
                ],
              },
            ],
          },
          {
            type: "object", name: "national", label: "National Presence Section",
            fields: [
              { type: "string", name: "badge", label: "Badge Text" },
              { type: "string", name: "titleLine1", label: "Title Line 1" },
              { type: "string", name: "titleItalic", label: "Title Italic Word" },
              { type: "string", name: "quote", label: "Quote", ui: { component: "textarea" } },
              {
                type: "object", name: "legend", label: "Legend Items", list: true,
                fields: [
                  { type: "string", name: "icon", label: "Icon Name" },
                  { type: "string", name: "text", label: "Label" },
                ],
              },
            ],
          },
          {
            type: "object", name: "trust", label: "Trust Section", list: true,
            fields: [
              { type: "string", name: "icon", label: "Icon Name" },
              { type: "string", name: "text", label: "Label" },
            ],
          },
          {
            type: "object", name: "cta", label: "CTA Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "button", label: "Button Text" },
            ],
          },
        ],
      },
      {
        name: "services",
        label: "⚡ Services Page",
        path: "content/pages",
        match: { include: "services" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "object", name: "hero", label: "Hero Section",
            fields: [
              { type: "string", name: "badge", label: "Badge Text" },
              { type: "string", name: "titleLine1", label: "Title Line 1" },
              { type: "string", name: "titleItalic", label: "Title Italic Word" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              {
                type: "object", name: "heroValues", label: "Hero Value Badges", list: true,
                fields: [
                  { type: "string", name: "icon", label: "Icon Name" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "subtitle", label: "Subtitle" },
                ],
              },
            ],
          },
          {
            type: "object", name: "trust", label: "Trust Section", list: true,
            fields: [
              { type: "string", name: "icon", label: "Icon Name" },
              { type: "string", name: "text", label: "Label" },
            ],
          },
          {
            type: "object", name: "showcase", label: "Services Showcase",
            fields: [
              { type: "string", name: "badge", label: "Badge Text" },
              { type: "string", name: "titleLine1", label: "Title Line 1" },
              { type: "string", name: "titleItalic", label: "Title Italic Word" },
              {
                type: "object", name: "services", label: "Detailed Services", list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "desc", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "details", label: "Details List", list: true },
                  { type: "string", name: "icon", label: "Icon Name" },
                  { type: "image", name: "image", label: "Image URL" },
                  { type: "string", name: "slug", label: "Slug" },
                  {
                    type: "string",
                    name: "alignment",
                    label: "Image Alignment",
                    options: [
                      { label: "Left", value: "left" },
                      { label: "Right", value: "right" },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: "object", name: "methodology", label: "Methodology Section",
            fields: [
              { type: "string", name: "badge", label: "Badge Text" },
              { type: "string", name: "titleLine1", label: "Title Line 1" },
              { type: "string", name: "titleItalic", label: "Title Italic Word" },
              {
                type: "object", name: "items", label: "Items", list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "icon", label: "Icon Name" },
                  { type: "string", name: "desc", label: "Description", ui: { component: "textarea" } },
                ],
              },
              { type: "string", name: "sidebarTitle", label: "Sidebar Title" },
              { type: "string", name: "sidebarItalic", label: "Sidebar Italic Word" },
              { type: "string", name: "sidebarQuote", label: "Sidebar Quote", ui: { component: "textarea" } },
              { type: "string", name: "sidebarIcon", label: "Sidebar Icon Name" },
            ],
          },
          {
            type: "object", name: "advantage", label: "Advantage Section",
            fields: [
              { type: "string", name: "badge", label: "Badge Text" },
              { type: "string", name: "titleLine1", label: "Title Line 1" },
              { type: "string", name: "titleItalic", label: "Title Italic Word" },
              {
                type: "object", name: "items", label: "Items", list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "icon", label: "Icon Name" },
                  { type: "string", name: "desc", label: "Description", ui: { component: "textarea" } },
                ],
              },
            ],
          },
          {
            type: "object", name: "pricing", label: "Pricing Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleItalic", label: "Title Italic" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              {
                type: "object", name: "tiers", label: "Tiers", list: true,
                fields: [
                  { type: "string", name: "level", label: "Level (e.g. Tier 01)" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "desc", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "features", label: "Features", list: true },
                  { type: "boolean", name: "featured", label: "Featured/Highlight" },
                ],
              },
              {
                type: "object", name: "bottomBanner", label: "Bottom Scaling Banner",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "desc", label: "Description" },
                  { type: "string", name: "cta", label: "CTA Label" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "contact",
        label: "Contact Page",
        path: "content/pages",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "contact",
        },
        fields: [
          {
            type: "object", name: "hero", label: "Hero Section",
            fields: [
              { type: "string", name: "badge", label: "Badge Text" },
              { type: "string", name: "titleLine1", label: "Title Line 1" },
              { type: "string", name: "titleItalic", label: "Title Italic" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
            ],
          },
          {
            type: "object", name: "sidebar", label: "Sidebar Content",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleItalic", label: "Title Italic" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              {
                type: "object", name: "items", label: "Contact Items", list: true,
                fields: [
                  { type: "string", name: "icon", label: "Icon Name" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "sub", label: "Sub-label" },
                ],
              },
            ],
          },
          {
            type: "object", name: "form", label: "Form Content",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleItalic", label: "Title Italic" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "buttonText", label: "Button Text" },
              { type: "string", name: "inquiryGoals", label: "Inquiry Goals (Dropdown Options)", list: true },
            ],
          },
          {
            type: "object", name: "trustBadges", label: "Trust Badges", list: true,
            fields: [
              { type: "string", name: "icon", label: "Icon Name" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "desc", label: "Description", ui: { component: "textarea" } },
            ],
          },
        ],
      },
      {
        name: "locations",
        label: "Locations Page",
        path: "content/pages",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "locations",
        },
        fields: [
          {
            type: "object", name: "hero", label: "Hero Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleItalic", label: "Title Italic" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
            ],
          },
          {
            type: "object", name: "hq", label: "HQ Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "address", label: "Address", ui: { component: "textarea" } },
              { type: "string", name: "phone", label: "Phone" },
              { type: "string", name: "email", label: "Email" },
            ],
          },
          {
             type: "object", name: "strategy", label: "Strategy Section",
             fields: [
               { type: "string", name: "title", label: "Title" },
               { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
               { type: "string", name: "subtext", label: "Subtext", ui: { component: "textarea" } },
             ],
          },
          {
            type: "object", name: "partner", label: "Partner Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
            ],
          },
          {
            type: "object", name: "reach", label: "Reach Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleItalic", label: "Title Italic" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              {
                type: "object", name: "items", label: "Reach Items", list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "desc", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "icon", label: "Icon Name" },
                ],
              },
            ],
          },
          {
            type: "object", name: "commitment", label: "Commitment Section",
            fields: [
              { type: "string", name: "quote", label: "Quote", ui: { component: "textarea" } },
            ],
          },
        ],
      },
      {
        name: "service",
        label: "Services Details",
        path: "content/service",
        format: "json",
        fields: [
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "shortDesc", label: "Short Description", ui: { component: "textarea" } },
          { type: "string", name: "fullDesc", label: "Full Description", ui: { component: "textarea" } },
          { type: "string", name: "longContent", label: "Long Content", ui: { component: "textarea" } },
          { type: "string", name: "benefits", label: "Benefits", list: true },
          { type: "string", name: "features", label: "Features", list: true },
          { type: "image", name: "image", label: "Hero Image" },
          { type: "string", name: "iconName", label: "Icon Name" },
          { type: "string", name: "videoUrl", label: "Video URL" },
        ],
      },
    ],
  },
});
