import { defineCliConfig } from "sanity/cli"

export default defineCliConfig({
  api: {
    projectId: "zvqz0tux",    // same as in sanityClient.ts / sanity.config.ts
    dataset: "production",    // same dataset
  },
})