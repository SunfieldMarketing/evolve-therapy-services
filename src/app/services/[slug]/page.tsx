import { client } from "../../../../tina/__generated__/client";
import ServiceDetailClient from "./ServiceDetailClient";
import { notFound } from "next/navigation";

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  try {
    const data = await client.queries.service({ relativePath: `${slug}.json` });
    return <ServiceDetailClient {...data} />;
  } catch (e) {
    console.error("Error fetching service data:", e);
    return notFound();
  }
}
