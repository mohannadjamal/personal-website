import fs from 'fs';
import path from 'path';
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
});

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('src', 'pages'));
  const parentPages = files.filter((file) => !file.includes('index'));

  return parentPages.map((file) => ({slug: `${file.replace('.astro', '')}`, title: `${file.replace('.astro', '')}` }));
}
