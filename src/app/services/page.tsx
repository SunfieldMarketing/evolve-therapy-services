import { client } from "../../../tina/__generated__/client";
import ServicesClient from "./ServicesClient";
import servicesData from "../../../content/pages/services.json";

export default async function ServicesPage() {
  let response;
  try {
    response = await client.queries.services({ relativePath: "services.json" });
  } catch (e) {
    console.warn("TinaCMS fetch failed for Services page during build, using local JSON fallback.");
    response = {
      data: { services: servicesData },
      query: `query { services(relativePath: "services.json") { id } }`,
      variables: { relativePath: "services.json" }
    };
  }

  return <ServicesClient {...(response as any)} />;
}
