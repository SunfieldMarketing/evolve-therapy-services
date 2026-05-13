import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '5b6b1935560b9b806fa1ceb712713010e0e32bab', queries,  });
export default client;
  