
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    allowedHosts: [
      "6cb10e72-3d6d-461a-a70b-378a3533ac0c.lovableproject.com",
      "localhost"
    ]
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger({
      enableEnhancedEditing: true, // Enable enhanced editing features
      selectorOptions: {
        enableHighlight: true,    // Enable element highlighting
        highlightMode: 'overlay'  // Use overlay highlighting mode
      }
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
