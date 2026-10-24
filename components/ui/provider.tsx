"use client";

import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import * as React from "react";

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#f4fbf0" },
          100: { value: "#e5f7dc" },
          200: { value: "#ccf0bc" },
          300: { value: "#aae492" },
          400: { value: "#9bdb6b" },
          500: { value: "#9bdb6b" },
          600: { value: "#72c439" },
          700: { value: "#56992b" },
          800: { value: "#457926" },
          900: { value: "#3a6422" },
        },
      },
      fonts: {
        heading: { value: "var(--font-prompt), -apple-system, BlinkMacSystemFont, sans-serif" },
        body: { value: "var(--font-prompt), -apple-system, BlinkMacSystemFont, sans-serif" },
      },
    },
    semanticTokens: {
      colors: {
        brand: {
          solid: { value: "{colors.brand.500}" },
          contrast: { value: "#0a0a0c" },
          fg: { value: "{colors.brand.400}" },
          muted: { value: "{colors.brand.200}" },
          subtle: { value: "rgba(155, 219, 107, 0.12)" },
          border: { value: "rgba(155, 219, 107, 0.35)" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);

import { LanguageProvider } from "@/app/context/LanguageContext";

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={system}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        forcedTheme="dark"
        enableSystem={false}
        disableTransitionOnChange
      >
        <LanguageProvider>{children}</LanguageProvider>
      </ThemeProvider>
    </ChakraProvider>
  );
}
