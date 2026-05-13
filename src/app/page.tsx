import { client } from "../../tina/__generated__/client";
import HomeClient from "./HomeClient";
import homeData from "../../content/pages/home.json";

export default async function HomePage() {
  let response;
  try {
    // Attempt to fetch from Tina (handles both local and cloud modes)
    response = await client.queries.home({ relativePath: "home.json" });
  } catch (e) {
    console.warn("TinaCMS fetch failed during build, using local JSON fallback. Error:", e);
    // FAIL-SAFE: Fallback to local JSON if the GraphQL server is out of sync or unreachable during prerender
    response = {
      data: { home: homeData },
      query: `query { home(relativePath: "home.json") { id } }`,
      variables: { relativePath: "home.json" }
    };
  }

  return <HomeClient {...(response as any)} />;
}
