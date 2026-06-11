import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#071A35",
        blue: "#2563EB",
        success: "#22C55E",
        danger: "#EF4444",
        violet: "#8B5CF6",
        panel: "rgba(11, 29, 58, 0.72)"
      },
      boxShadow: {
        glow: "0 24px 80px rgba(37, 99, 235, 0.18)",
        card: "0 18px 60px rgba(0, 0, 0, 0.28)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui"]
      },
      animation: {
        "fade-in": "fadeIn 220ms ease-out both",
        "slide-up": "slideUp 320ms ease-out both",
        shimmer: "shimmer 1.8s linear infinite"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        }
      }
    }
  },
  plugins: []
};

export default config;
