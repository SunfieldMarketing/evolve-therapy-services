import client from '../../../../tina/__generated__/client';
import ServiceDetailClient from './ServiceDetailClient';
import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';

export function generateStaticParams() {
  const contentDir = path.join(process.cwd(), 'content/service');
  const files = fs.readdirSync(contentDir);
  return files
    .filter(file => file.endsWith('.json'))
    .map((file) => ({
      slug: file.replace('.json', ''),
    }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  try {
    const res = await client.queries.service({ relativePath: `${slug}.json` });
    
    return (
      <ServiceDetailClient 
        data={JSON.parse(JSON.stringify(res.data))} 
        query={res.query} 
        variables={res.variables} 
      />
    );
  } catch (e) {
    console.error(`Error fetching service ${slug}:`, e);
    return notFound();
  }
}
