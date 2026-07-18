import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Config padrão do Vite para projetos React.
// "plugins: [react()]" habilita JSX + Fast Refresh (hot reload instantâneo).
export default defineConfig({
  plugins: [react()],
});
