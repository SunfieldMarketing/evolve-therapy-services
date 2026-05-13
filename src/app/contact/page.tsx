import { client } from "../../../tina/__generated__/client";
import ContactClient from "./ContactClient";

export default async function ContactPage() {
  const data = await client.queries.contact({ relativePath: "contact.json" });
  return <ContactClient {...data} />;
}
