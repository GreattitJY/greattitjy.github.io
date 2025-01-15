// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";

// https://astro.build/config
export default defineConfig({
  site: "https://GreattitJY.github.io",
  base: "/",
  integrations: [
    mdx(),
    sitemap(),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "catppuccin-frappe",
          transformers: [
            transformerCopyButton({
              visibility: "hover",
              feedbackDuration: 2_500,
            }),
          ],
        },
      ],
    ],
  },
});
