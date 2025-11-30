// Theme with true black dark mode and clean light mode
const baseColors = {
  // Primary blue
  primary900: "#0066FF",
  primary800: "#0052CC",
  primary700: "#003D99",
  primary600: "#3385FF",
  primary500: "#66A3FF",
  primary400: "#99C2FF",
  primary300: "#CCE0FF",
  primary200: "#E6F0FF",
  primary100: "#F5F9FF",

  // Accent coral/orange
  accent900: "#FF6B35",
  accent700: "#FF8A5B",
  accent500: "#FFB59A",
  accent300: "#FFD4C4",
  accent100: "#FFF0EB",

  // Success green
  success700: "#059669",
  success500: "#10B981",
  success100: "#D1FAE5",

  // Neutrals for light mode
  white: "#FFFFFF",
  black: "#000000",
  transparent: "transparent"
}

export const lightTheme = {
  mode: 'light',
  colors: {
    ...baseColors,
    // Backgrounds
    bg: "#FAFAFA",
    bgCard: "#FFFFFF",
    bgNav: "rgba(255, 255, 255, 0.92)",
    bgHover: "#F5F5F5",
    
    // Text
    text: "#171717",
    textSecondary: "#525252",
    textMuted: "#A3A3A3",
    
    // Borders
    border: "#E5E5E5",
    borderHover: "#D4D4D4",
    
    // Primary
    primary: "#0066FF",
    primaryHover: "#0052CC",
    primaryLight: "#E6F0FF",
    primaryText: "#0066FF",
    
    // Accent
    accent: "#FF6B35",
    accentLight: "#FFF0EB",
    
    // Success
    success: "#059669",
    successLight: "#D1FAE5"
  },
  shadows: {
    sm: "0 1px 2px rgba(0, 0, 0, 0.04)",
    md: "0 2px 8px rgba(0, 0, 0, 0.08)",
    lg: "0 8px 24px rgba(0, 0, 0, 0.12)",
    xl: "0 16px 48px rgba(0, 0, 0, 0.16)"
  }
}

export const darkTheme = {
  mode: 'dark',
  colors: {
    ...baseColors,
    // Backgrounds - TRUE BLACK
    bg: "#000000",
    bgCard: "#0A0A0A",
    bgNav: "rgba(0, 0, 0, 0.92)",
    bgHover: "#171717",
    
    // Text
    text: "#FAFAFA",
    textSecondary: "#A3A3A3",
    textMuted: "#737373",
    
    // Borders
    border: "#262626",
    borderHover: "#404040",
    
    // Primary - slightly brighter for dark mode
    primary: "#3385FF",
    primaryHover: "#66A3FF",
    primaryLight: "#171717",
    primaryText: "#3385FF",
    
    // Accent
    accent: "#FF8A5B",
    accentLight: "#1A1A1A",
    
    // Success
    success: "#10B981",
    successLight: "#052E16"
  },
  shadows: {
    sm: "0 1px 2px rgba(0, 0, 0, 0.5)",
    md: "0 2px 8px rgba(0, 0, 0, 0.6)",
    lg: "0 8px 24px rgba(0, 0, 0, 0.7)",
    xl: "0 16px 48px rgba(0, 0, 0, 0.8)"
  }
}

const theme = {
  fonts: {
    primary: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    mono: '"SF Mono", "Fira Code", "Consolas", monospace'
  },
  fontSizes: {
    xs: "11px",
    sm: "12px",
    base: "13px",
    md: "14px",
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
  transition: "all 0.15s ease"
}

export default theme
