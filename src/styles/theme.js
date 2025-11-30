const theme = {
  colors: {
    // Primary palette - Deep teal/cyan
    primary900: "#0D4F5E",
    primary800: "#0F6577",
    primary700: "#127B90",
    primary600: "#1591A9",
    primary500: "#18A7C2",
    primary400: "#3DB8CE",
    primary300: "#62C9DA",
    primary200: "#A1DEE8",
    primary100: "#E0F4F8",

    // Accent - Warm coral/orange
    accent900: "#C44D2A",
    accent800: "#D65F3B",
    accent700: "#E8714C",
    accent600: "#F0845F",
    accent500: "#F89772",
    accent400: "#FAAA8E",
    accent300: "#FCBDAA",
    accent200: "#FDD6CC",
    accent100: "#FEF0EB",

    // Neutrals
    black900: "#0F172A",
    black800: "#1E293B",
    black700: "#334155",
    black600: "#475569",
    black500: "#64748B",
    black400: "#94A3B8",
    black300: "#CBD5E1",
    black200: "#E2E8F0",
    black100: "#F1F5F9",

    gray900: "#6B7280",
    gray800: "#9CA3AF",
    gray700: "#D1D5DB",
    gray600: "#E5E7EB",
    gray500: "#F3F4F6",
    gray400: "#F9FAFB",
    gray300: "#FAFBFC",
    gray200: "#FCFCFD",
    gray100: "#FFFFFF",

    // Success
    success700: "#059669",
    success500: "#10B981",
    success300: "#6EE7B7",
    success100: "#D1FAE5",

    // Warning
    warning700: "#D97706",
    warning500: "#F59E0B",
    warning300: "#FCD34D",
    warning100: "#FEF3C7",

    // Error
    error700: "#DC2626",
    error500: "#EF4444",
    error300: "#FCA5A5",
    error100: "#FEE2E2",

    // Semantic
    white: "#FFFFFF",
    black: "#000000",
    transparent: "transparent",
    
    // Background
    bgPrimary: "#FAFBFC",
    bgSecondary: "#FFFFFF",
    bgDark: "#0F172A",
    
    // Text
    textPrimary: "#0F172A",
    textSecondary: "#475569",
    textMuted: "#94A3B8",
    textLight: "#FFFFFF"
  },

  fonts: {
    primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', monospace"
  },

  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem"
  },

  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  },

  lineHeights: {
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2
  },

  spacing: {
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    32: "8rem"
  },

  radii: {
    none: "0",
    sm: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px"
  },

  shadows: {
    none: "none",
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
  },

  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px"
  },

  transitions: {
    fast: "150ms ease",
    base: "200ms ease",
    slow: "300ms ease"
  },

  container: {
    maxWidth: "1200px",
    padding: "1.5rem"
  }
}

export default theme

