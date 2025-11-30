// Atomize-inspired theme with light/dark modes
const baseColors = {
  // From Atomize THEME.js
  black900: "#0A1F44",
  black800: "#14284B",
  black700: "#283A5B",
  black600: "#364766",
  black500: "#455571",
  black400: "#4E5D78",
  black300: "#596780",
  black200: "#627088",
  black100: "#717D92",

  gray900: "#8A94A6",
  gray800: "#98A1B1",
  gray700: "#A7AEBB",
  gray600: "#B0B7C3",
  gray500: "#C9CED6",
  gray400: "#E1E4E8",
  gray300: "#F1F2F4",
  gray200: "#F7F8F9",
  gray100: "#FAFBFB",

  brand900: "#0284FE",
  brand800: "#026DD6",
  brand700: "#01408F",
  brand600: "#4BA7FE",
  brand500: "#83C3FE",
  brand400: "#B3DAFF",
  brand300: "#DCEEFF",
  brand200: "#EEF7FF",
  brand100: "#F8FBFF",

  accent900: "#FF584A",
  accent700: "#FF867E",
  accent500: "#FFBDB8",
  accent300: "#FFD7D4",
  accent100: "#FFEEED",

  success700: "#36AB80",
  success500: "#A9DCC9",
  success100: "#EAF7F1",

  white: "#FFFFFF",
  black: "#000000",
  transparent: "transparent"
}

export const lightTheme = {
  mode: 'light',
  colors: {
    ...baseColors,
    bg: baseColors.gray100,
    bgCard: baseColors.white,
    bgNav: "rgba(255, 255, 255, 0.9)",
    text: baseColors.black800,
    textSecondary: baseColors.black300,
    textMuted: baseColors.gray900,
    border: baseColors.gray400,
    primary: baseColors.brand900,
    primaryHover: baseColors.brand800,
    primaryLight: baseColors.brand100,
    accent: baseColors.accent900,
    accentLight: baseColors.accent100
  },
  shadows: {
    sm: "0 1px 2px rgba(10, 31, 68, 0.08)",
    md: "0 3px 6px rgba(10, 31, 68, 0.1)",
    lg: "0 8px 16px rgba(10, 31, 68, 0.1)",
    xl: "0 16px 32px rgba(10, 31, 68, 0.12)"
  }
}

export const darkTheme = {
  mode: 'dark',
  colors: {
    ...baseColors,
    bg: baseColors.black900,
    bgCard: baseColors.black800,
    bgNav: "rgba(10, 31, 68, 0.95)",
    text: baseColors.gray200,
    textSecondary: baseColors.gray600,
    textMuted: baseColors.gray800,
    border: baseColors.black600,
    primary: baseColors.brand600,
    primaryHover: baseColors.brand500,
    primaryLight: baseColors.black700,
    accent: baseColors.accent700,
    accentLight: baseColors.black700
  },
  shadows: {
    sm: "0 1px 2px rgba(0, 0, 0, 0.2)",
    md: "0 3px 6px rgba(0, 0, 0, 0.25)",
    lg: "0 8px 16px rgba(0, 0, 0, 0.3)",
    xl: "0 16px 32px rgba(0, 0, 0, 0.35)"
  }
}

const theme = {
  fonts: {
    primary: '"SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: '"SF Mono", "Fira Code", monospace'
  },
  fontSizes: {
    tiny: "10px",
    caption: "11px",
    sm: "12px",
    body: "13px",
    base: "14px",
    lg: "15px",
    xl: "17px",
    "2xl": "20px",
    "3xl": "24px",
    "4xl": "28px",
    "5xl": "36px"
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  },
  spacing: {
    0: "0",
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "20px",
    6: "24px",
    8: "32px",
    10: "40px",
    12: "48px",
    16: "64px"
  },
  radii: {
    none: "0",
    xs: "2px",
    sm: "4px",
    md: "6px",
    lg: "8px",
    xl: "12px",
    full: "9999px"
  },
  breakpoints: {
    sm: "540px",
    md: "768px",
    lg: "960px",
    xl: "1156px"
  },
  container: {
    maxWidth: "1100px",
    padding: "16px"
  },
  transition: "all 0.2s ease-in-out"
}

export default theme
