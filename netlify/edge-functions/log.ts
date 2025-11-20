import type { Config } from "@netlify/edge-functions";

export default async () => {
  console.log("Hello from the logging service");

  return new Response("The request to this URL was logged");
};

export const config: Config = {
  path: "/log",
};
