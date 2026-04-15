import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// hosting
export default defineConfig({
  base: "/Portfolio/",
  plugins: [react(), tailwindcss()],
});
