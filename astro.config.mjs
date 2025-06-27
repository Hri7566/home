import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/static";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    integrations: [react(), mdx()],
    //output: "server",
    output: "static",
    adapter: vercel(),
    vite: {
        plugins: [tailwindcss()]
    }
});
