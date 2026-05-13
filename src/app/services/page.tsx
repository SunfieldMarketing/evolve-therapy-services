import { client } from "../../../tina/__generated__/client";
import ServicesClient from "./ServicesClient";

export default async function ServicesPage() {
  const data = await client.queries.services({ relativePath: "services.json" });
  return <ServicesClient {...data} />;
}
