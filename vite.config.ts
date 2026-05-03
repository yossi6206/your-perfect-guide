import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    preview: {
      allowedHosts: ["ittsupport.co.il", ".ittsupport.co.il"],
    },
  },
});
