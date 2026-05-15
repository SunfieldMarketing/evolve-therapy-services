'use client';

export default function DesignSystemInjector({ data }: { data: any }) {
  if (!data) return null;
  
  // We map the common tailwind brand colors used in the site to the CSS variables
  // The primary brand color in Tailwind was #0284c7 (sky-600)
  // The secondary brand color was #38bdf8 (sky-400) or #0369a1 (sky-700)
  const css = `
    :root {
      ${data.primaryColor ? `--brand-primary: ${data.primaryColor};` : ''}
      ${data.secondaryColor ? `--brand-secondary: ${data.secondaryColor};` : ''}
      ${data.headingFont ? `--brand-heading: "${data.headingFont}", sans-serif;` : ''}
      ${data.bodyFont ? `--brand-body: "${data.bodyFont}", sans-serif;` : ''}
    }
    
    ${data.primaryColor ? `
      /* Auto-override major primary color instances */
      .bg-\\[\\#0284c7\\] { background-color: var(--brand-primary) !important; }
      .text-\\[\\#0284c7\\] { color: var(--brand-primary) !important; }
      .border-\\[\\#0284c7\\] { border-color: var(--brand-primary) !important; }
      .hover\\:bg-\\[\\#0284c7\\]:hover { background-color: var(--brand-primary) !important; }
      .hover\\:text-\\[\\#0284c7\\]:hover { color: var(--brand-primary) !important; }
    ` : ''}

    ${data.secondaryColor ? `
      /* Auto-override major secondary color instances */
      .bg-\\[\\#38bdf8\\] { background-color: var(--brand-secondary) !important; }
      .text-\\[\\#38bdf8\\] { color: var(--brand-secondary) !important; }
      .border-\\[\\#38bdf8\\] { border-color: var(--brand-secondary) !important; }
    ` : ''}

    ${data.headingFont ? `
      /* Auto-override headings */
      h1, h2, h3, h4, h5, h6, .font-serif { font-family: var(--brand-heading) !important; }
    ` : ''}

    ${data.bodyFont ? `
      /* Auto-override body font */
      body, p, span, a, button, .font-sans { font-family: var(--brand-body) !important; }
    ` : ''}
    
    /* User Custom CSS Overrides (allows bold/italic/size modifications to any element) */
    ${data.customCss || ''}
  `;

  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}
