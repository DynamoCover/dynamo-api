import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  topNavigation: [
    { id: "index", label: "Getting Started" },
    { id: "authentication", label: "Authentication" },
    { id: "api", label: "API Reference" },
  ],
  redirects: [{ from: "/", to: "/index" }],
  apis: {
    type: "file",
    input: "./apis/openapi.yaml",
    navigationId: "api",
  },
  docs: {
    files: "/pages/**/*.{md,mdx}",
  },
};

export default config;
