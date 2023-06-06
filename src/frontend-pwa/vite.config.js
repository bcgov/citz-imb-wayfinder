import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    VitePWA({
<<<<<<< HEAD
      registerType: "autoUpdate",
      injectRegister: 'auto',
      includeAssets: ["**/*"],
      workbox: {
        globPatterns: ["**/*"],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        sourcemap: true,
      },
=======
      registerType: "prompt",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "android-chrome-192x192.png", "android-chrome-512x512.png", "logo-banner.svg", "gear-icon.svg", "bc-logo-vertical.svg", "back-button.svg"],
>>>>>>> b51fbbf721a0d6e2417566da2417e9ba01335d4b
      manifest: {
        name: "Wayfinder",
        short_name: "Wayfinder",
        description: "A service and location finder for the BC Government",
        theme_color: "#003366",
        start_url: "/",
      
        icons: [
          {
            src: "android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 5173,
  }
})
