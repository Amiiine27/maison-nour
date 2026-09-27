import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://maison-nour.enymia.fr",
  integrations: [sitemap()],
});