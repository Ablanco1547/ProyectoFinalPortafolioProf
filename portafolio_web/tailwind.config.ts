import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'portRed': '#E34F3A',
        'portDrkRed': '#8d0808',
        'portGreen': '#CEF26A',
        'portBlack': '#333333',
        'portDrkBlack': '#30302f',
        'portOffWhite':'#f2f0ef',

      },
    },
  },
  plugins: [],
};
export default config;
