import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate", // Service worker updates automatically
      includeAssets: ["favicon.svg", "robots.txt"], // Optional static assets
      manifest: {
        name: "Todo App",
        short_name: "Todo",
        description: "A blazing-fast app powered by Vite + PWA",
        theme_color: "#5e60ce",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/manifest-icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/manifest-icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/manifest-icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/example\.com\/api\/.*$/,
            handler: "NetworkFirst",
            options: {
              cacheName: "api-cache",
              expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 },
            },
          },
        ],
      },
    }),
  ],
});
