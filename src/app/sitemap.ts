import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://evolvetherapyservices.com';

  // Static routes
  const routes = ['', '/about', '/contact', '/locations', '/services', '/portal'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic service routes
  const servicesDir = path.join(process.cwd(), 'content/service');
  let serviceRoutes: any[] = [];
  
  if (fs.existsSync(servicesDir)) {
    const files = fs.readdirSync(servicesDir);
    serviceRoutes = files
      .filter((file) => file.endsWith('.json'))
      .map((file) => ({
        url: `${baseUrl}/services/${file.replace('.json', '')}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }));
  }

  // Legal routes
  const legalRoutes = ['/privacy-policy', '/terms'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  }));

  return [...routes, ...serviceRoutes, ...legalRoutes];
}
