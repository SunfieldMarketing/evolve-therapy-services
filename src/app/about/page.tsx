import { client } from "../../../tina/__generated__/client";
import AboutClient from "./AboutClient";

export default async function AboutPage() {
  const data = await client.queries.about({ relativePath: "about.json" });
  return <AboutClient {...data} />;
}
