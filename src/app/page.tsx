import { client } from "../../tina/__generated__/client";
import HomeClient from "./HomeClient";

export default async function HomePage() {
  // Use a raw request to avoid issues with generated query functions during build-time schema desync
  const response = await client.request({
    query: `query {
      home(relativePath: "home.json") {
        hero { eyebrow titleLine1 titleItalic titleLine2 subtext primaryCta secondaryCta stats { value label } }
        clinicalExcellence { badge titleLine1 titleItalic description stats { value suffix label desc } services { title desc tag icon } }
        process { badge title titleItalic description steps { num title desc icon } }
        whyEvolve { title subtitle introText features { title subtitle desc icon color href } quoteStrip { text author authorTitle authorPhoto } }
        ourServices { title theme showSection items { title desc icon } }
        coverage { title legend { text icon } }
        faq { title items { question answer } }
        partner { title desc button }
        bottomCta { quote checklist primaryCta phone }
      }
    }`,
    variables: { relativePath: "home.json" }
  });

  return <HomeClient data={response.data} query={response.query} variables={response.variables} />;
}
