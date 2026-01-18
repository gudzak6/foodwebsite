import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0b0f14",
          900: "#111827",
          800: "#1f2937",
          700: "#374151",
          600: "#4b5563"
        }
      }
    }
  },
  plugins: []
};

export default config;
