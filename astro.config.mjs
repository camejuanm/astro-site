import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://main--silver-kashata-a7ac2b.netlify.app",
  integrations: [preact()],
});
