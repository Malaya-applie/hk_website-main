/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const flattenColorPalette = require("tailwindcss/src/util/flattenColorPalette");
const toColorValue = require("tailwindcss/src/util/toColorValue");

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        brgr: ["Bricolage Grotesque", "Inter", "sans-serif"],
      },
      backgroundImage: {
        "footer-image": "url('../src/assets/footer-background.png')",
        "hero-gradient":
          "linear-gradient(0deg, rgba(17, 17, 17, 0) -153.68%, rgba(17, 17, 17, 0.570844) -117.14%, #111111 100%)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ matchUtilities, e, config, theme }) {
      const textBorderSize = `--tw${config("prefix")}-text-border-size`;

      matchUtilities(
        {
          "text-border": (value) => ({
            "text-shadow": `0 0 var(${textBorderSize},1px) ${toColorValue(
              value
            )}`,
          }),
        },
        {
          values: (({ DEFAULT: _, ...colors }) => colors)(
            flattenColorPalette(theme("borderColor"))
          ),
          type: "color",
        }
      );

      matchUtilities(
        {
          "text-border-size": (value) => ({
            [textBorderSize]: value,
          }),
        },
        { values: theme("borderWidth") }
      );
    }),
  ],
};
