import { client } from "../../../tina/__generated__/client";
import LocationsClient from "./LocationsClient";
import locationsData from "../../../content/pages/locations.json";

export default async function LocationsPage() {
  let response;
  try {
    response = await client.queries.locations({ relativePath: "locations.json" });
  } catch (e) {
    console.warn("TinaCMS fetch failed for Locations page during build, using local JSON fallback.");
    response = {
      data: { locations: locationsData },
      query: `query { locations(relativePath: "locations.json") { id } }`,
      variables: { relativePath: "locations.json" }
    };
  }

  return <LocationsClient {...(response as any)} />;
}
