import { client } from "../../tina/__generated__/client";
import ContactClient from "./ContactClient";
import contactData from "../../../content/pages/contact.json";

export default async function ContactPage() {
  let response;
  try {
    response = await client.queries.contact({ relativePath: "contact.json" });
  } catch (e) {
    console.warn("TinaCMS fetch failed for Contact page during build, using local JSON fallback.");
    response = {
      data: { contact: contactData },
      query: `query { contact(relativePath: "contact.json") { id } }`,
      variables: { relativePath: "contact.json" }
    };
  }

  return <ContactClient {...(response as any)} />;
}
