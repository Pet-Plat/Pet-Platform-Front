import tailwindAnimate from "tailwindcss-animate";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem" /* 20px */,
      screens: {
        "2xl": "1263px" /* yields content width of 1223px */,
      },
    },
    screens: {
      "xs": "375px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        // project specific colors
        darkblue: "var(--darkblue)",
        darkPurpleBlue: "var(--dark-purple-blue)",
        blue: "var(--blue)",
        purple: "var(--purple)",
        yellow: "var(--yellow)",
        lightgreen: "var(--lightgreen)",
        green: "var(--green)",
        darkgreen: "var(--darkgreen)",
        lightgray: "var(--lightgray)",
        darkgray: "var(--darkgray)",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      margin: {
        18: "4.5rem",
      },
      fontSize: {
        "3xl": ["1.75rem", "2.125rem"] /* 28px, 34px */,
        "4xl": ["2.375rem", "2.625rem"] /* 38px, 42px */,
      },
      transitionDuration: {
        1: "1ms"
      },
      fontFamily: {
        "manrope": ["Manrope", "sans-serif"],
      },
      backgroundImage: {
        "blob-gradient": "var(--blob-gradient)",
      },
      flex: {
        "2": "2 2 0%",
        "3": "3 3 0%",
        "4": "4 4 0%",
        "5": "5 5 0%",
      },
      boxShadow: {
        'pet-project-card': 'inset 0 0 68px rgba(255, 255, 255, 0.05), inset 0 4px 4px rgba(255, 255, 255, 0.15)',
      },
      backdropBlur: {
        'pet-project-card': 'blur(48px)'
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindAnimate],
};
