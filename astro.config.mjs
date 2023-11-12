import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      noExternal: [
        '@astrojs/vue',
        'astro-component-lib',
      ]
    }
  },
  site: "https://main--silver-kashata-a7ac2b.netlify.app",
  integrations: [preact()],
});
