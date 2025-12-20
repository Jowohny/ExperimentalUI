import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
    server: {
      hmr: {
        clientPort: 3000, // or whatever port your dev server runs on
      },
    },
  },
  devServer: {
    port: 3000, // Set a specific port
  },
});