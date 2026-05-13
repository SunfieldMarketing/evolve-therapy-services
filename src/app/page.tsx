import { client } from "../../tina/__generated__/client";
import HomeClient from "./HomeClient";

export default async function HomePage() {
  const data = await client.queries.home({ relativePath: "home.json" });
  return <HomeClient {...data} />;
}
