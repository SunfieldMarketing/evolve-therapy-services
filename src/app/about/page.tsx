import { client } from "../../../tina/__generated__/client";
import AboutClient from "./AboutClient";
import aboutData from "../../../content/pages/about.json";

export default async function AboutPage() {
  let response;
  try {
    response = await client.queries.about({ relativePath: "about.json" });
  } catch (e) {
    console.warn("TinaCMS fetch failed for About page during build, using local JSON fallback.");
    response = {
      data: { about: aboutData },
      query: `query { about(relativePath: "about.json") { id } }`,
      variables: { relativePath: "about.json" }
    };
  }

  return <AboutClient {...(response as any)} />;
}
