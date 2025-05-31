// styles/theme.ts
import { MantineThemeOverride } from "@mantine/core";

export const theme: MantineThemeOverride = {
  fontFamily: "Inter, sans-serif",
  fontFamilyMonospace: "Fira Code, monospace",
  headings: {
    fontFamily: "Poppins, sans-serif",
    sizes: {
      h1: { fontSize: "36px", lineHeight: "1.4" },
      h2: { fontSize: "28px" },
      h3: { fontSize: "22px" },
    },
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
  },
  colors: {
    brand: [
      "#F0F9FF", // 0 - brand-50
      "#E0F2FE", // 1 - brand-100
      "#BAE6FD", // 2 - brand-200
      "#7DD3FC", // 3 - brand-300
      "#38BDF8", // 4 - brand-400
      "#0EA5E9", // 5 - brand-500
      "#0284C7", // 6 - brand-600
      "#0369A1", // 7 - brand-700
      "#075985", // 8 - brand-800
      "#0C4A6E", // 9 - brand-900
    ],
  },

  other: {
    background: "#F0F9FF", // brand[0]
    foreground: "#0C4A6E", // brand[9]

    text: {
      primary: "#0C4A6E", // brand[9]
      secondary: "#075985", // brand[8]
      muted: "#0369A1", // brand[7]
      inverted: "#F0F9FF", // brand[0]
    },

    border: {
      light: "#BAE6FD", // brand[2]
      default: "#7DD3FC", // brand[3]
      strong: "#0284C7", // brand[6]
    },
    navbar: {
      background: "#0C4A6E", // brand[9] - Dark, clean base
      text: "#F0F9FF", // brand[0] - Light text on dark
      hoverBackground: "#075985", // brand[8] - Slightly lighter for hover
      activeBackground: "#0369A1", // brand[7] - Highlight active nav item
      border: "#0284C7", // brand[6] - Border or underline
      icon: "#BAE6FD", // brand[2] - Accent color for icons
      mutedText: "#7DD3FC", // brand[3] - Less emphasized text
    },

    button: {
      default: {
        bg: "#0EA5E9", // brand[5]
        hover: "#0284C7", // brand[6]
        text: "#F0F9FF", // brand[0]
      },
      secondary: {
        bg: "#E0F2FE", // brand[1]
        hover: "#BAE6FD", // brand[2]
        text: "#0369A1", // brand[7]
      },
      disabled: {
        bg: "#F0F9FF", // brand[0]
        text: "#7DD3FC", // brand[3]
      },
    },

    success: {
      bg: "#DCFCE7", // Tailwind green-100
      text: "#166534", // Tailwind green-800
      border: "#4ADE80", // Tailwind green-400
    },

    error: {
      bg: "#FEE2E2", // Tailwind red-100
      text: "#B91C1C", // Tailwind red-700
      border: "#F87171", // Tailwind red-400
    },

    warning: {
      bg: "#FEF9C3", // Tailwind yellow-100
      text: "#92400E", // Tailwind yellow-800
      border: "#FACC15", // Tailwind yellow-400
    },

    info: {
      bg: "#DBEAFE", // Tailwind blue-100
      text: "#1D4ED8", // Tailwind blue-700
      border: "#60A5FA", // Tailwind blue-400
    },
  },

  primaryColor: "brand",
};
