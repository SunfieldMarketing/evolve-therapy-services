import { client } from "../../tina/__generated__/client";
import HomeClient from "./HomeClient";

export default async function HomePage() {
  const query = `query($relativePath: String!) {
    home(relativePath: $relativePath) {
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
  }`;

  // Use the 2-argument signature to satisfy TypeScript
  const response = await (client as any).request(query, { relativePath: "home.json" });

  return (
    <HomeClient 
      data={response.data} 
      query={query} 
      variables={{ relativePath: "home.json" }} 
    />
  );
}
