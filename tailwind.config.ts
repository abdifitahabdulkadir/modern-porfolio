import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "500": "#10B981",
        },
        gray: {
          "50": "var(--grey-color-50)",
          "100": "var(--grey-color-100)",
          "200": "var(--grey-color-200)",
          "300": "var(--grey-color-300)",
          "400": "var(--grey-color-400)",
          "500": "var(--grey-color-500)",
          "600": "var(--grey-color-600)",
          "700": "var(--grey-color-700)",
          "800": "var(--grey-color-800)",
          "900": "var(--grey-color-900)",
          "950": "var(--grey-color-950)",
          DEFAULT: "var(--grey-color-DEFAULT)",
        },
      },
      dropShadow: {
        md: "0px 4px 3px rgba(0, 0, 0, 0.07), 0px 2px 2px rgba(0, 0, 0, 0.06)",
        lg: "0px 4px 3px rgba(0, 0, 0, 0.10), 0px 10px 8px rgba(0, 0, 0, 0.04)",
        "2xl": "0px 25px 25px rgba(0, 0, 0, 0.15)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};
export default config;
