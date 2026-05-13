import { initPlasmicLoader } from "@plasmicapp/loader-nextjs/react-server-conditional";


export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: process.env.NEXT_PUBLIC_PLASMIC_PROJECT_ID || "1jsMbi3civUxrqoNYBwQYZ",
      token: process.env.NEXT_PUBLIC_PLASMIC_PROJECT_API_TOKEN || "azXxpa7TF0HNovmbMZKQ1oySZLu2cRtwhggSF03b7zTwasxHDg2zCjNePKez1IhFPagUCxQW01h3BHidg",
    },
  ],
  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your edits without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: process.env.NODE_ENV === "development",
});
