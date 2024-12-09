import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  basePath: "/dynamo-api",
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
  page: {
    logo: {src: {light: "https://myaccount.dynamocover.com/logo.svg", dark: "https://myaccount.dynamocover.com/logo.svg"}, alt: "Dynamo"},
  },
  metadata: {
    title: "Dynamo API",
    description: "Dynamo API documentation",
    favicon: "https://myaccount.dynamocover.com/favicon.ico",
  }
};

export default config;
