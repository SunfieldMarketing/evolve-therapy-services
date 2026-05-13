import { client } from "../../../tina/__generated__/client";
import LocationsClient from "./LocationsClient";

export default async function LocationsPage() {
  const data = await client.queries.locations({ relativePath: "locations.json" });
  return <LocationsClient {...data} />;
}
