import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 10010,
    proxy: {
      "/api": "http://localhost:10020",
    },
  },
});
