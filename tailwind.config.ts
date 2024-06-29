import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        main: "#fff",
        accent: "#f0f0f0",
        foreground: "#000",
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        "primary-text": "rgb(var(--text-primary) / <alpha-value>)",
      },
    },
  },
};
