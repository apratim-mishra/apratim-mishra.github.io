// Enhanced Theme with expanded typography, animations, and gradients

const baseColors = {
  // Primary blue - refined palette
  primary900: "#0052CC",
  primary800: "#0066FF",
  primary700: "#1A75FF",
  primary600: "#3385FF",
  primary500: "#4D94FF",
  primary400: "#80B3FF",
  primary300: "#B3D1FF",
  primary200: "#E6F0FF",
  primary100: "#F5F9FF",

  // Accent coral/orange
  accent900: "#E55A2B",
  accent800: "#FF6B35",
  accent700: "#FF7A4D",
  accent600: "#FF8A5B",
  accent500: "#FF9A6C",
  accent400: "#FFB59A",
  accent300: "#FFD4C4",
  accent200: "#FFE8E0",
  accent100: "#FFF5F0",

  // Success green
  success800: "#047857",
  success700: "#059669",
  success600: "#10B981",
  success500: "#34D399",
  success400: "#6EE7B7",
  success300: "#A7F3D0",
  success200: "#D1FAE5",
  success100: "#ECFDF5",

  // Warning amber
  warning700: "#D97706",
  warning500: "#F59E0B",
  warning300: "#FCD34D",
  warning100: "#FEF3C7",

  // Neutrals
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
    bgAlt: "#F5F5F5",
    bgCard: "#FFFFFF",
    bgNav: "rgba(255, 255, 255, 0.85)",
    bgHover: "#F0F0F0",
    bgElevated: "#FFFFFF",
    
    // Text hierarchy
    text: "#111111",
    textSecondary: "#4A4A4A",
    textMuted: "#8A8A8A",
    textInverse: "#FFFFFF",
    
    // Borders
    border: "#E5E5E5",
    borderLight: "#F0F0F0",
    borderHover: "#D0D0D0",
    borderFocus: "#0066FF",
    
    // Primary
    primary: "#0066FF",
    primaryHover: "#0052CC",
    primaryLight: "#E6F0FF",
    primaryText: "#0066FF",
    
    // Accent
    accent: "#FF6B35",
    accentHover: "#E55A2B",
    accentLight: "#FFF5F0",
    
    // Success
    success: "#059669",
    successLight: "#ECFDF5",
    
    // Gradients
    gradientPrimary: "linear-gradient(135deg, #0066FF 0%, #0052CC 100%)",
    gradientAccent: "linear-gradient(135deg, #FF6B35 0%, #FF8A5B 100%)",
    gradientSubtle: "linear-gradient(180deg, #FAFAFA 0%, #F5F5F5 100%)",
    gradientCard: "linear-gradient(135deg, rgba(0, 102, 255, 0.03) 0%, rgba(255, 107, 53, 0.03) 100%)"
  },
  shadows: {
    xs: "0 1px 2px rgba(0, 0, 0, 0.04)",
    sm: "0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04)",
    md: "0 4px 6px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.04)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.06), 0 4px 6px rgba(0, 0, 0, 0.04)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.08), 0 10px 10px rgba(0, 0, 0, 0.04)",
    glow: "0 0 20px rgba(0, 102, 255, 0.15)",
    glowAccent: "0 0 20px rgba(255, 107, 53, 0.15)"
  }
}

export const darkTheme = {
  mode: 'dark',
  colors: {
    ...baseColors,
    // Backgrounds - TRUE BLACK
    bg: "#000000",
    bgAlt: "#0A0A0A",
    bgCard: "#111111",
    bgNav: "rgba(0, 0, 0, 0.85)",
    bgHover: "#1A1A1A",
    bgElevated: "#151515",
    
    // Text hierarchy
    text: "#FAFAFA",
    textSecondary: "#B0B0B0",
    textMuted: "#6A6A6A",
    textInverse: "#000000",
    
    // Borders
    border: "#222222",
    borderLight: "#1A1A1A",
    borderHover: "#333333",
    borderFocus: "#3385FF",
    
    // Primary - brighter for dark mode
    primary: "#3385FF",
    primaryHover: "#4D94FF",
    primaryLight: "#111827",
    primaryText: "#3385FF",
    
    // Accent
    accent: "#FF8A5B",
    accentHover: "#FF9A6C",
    accentLight: "#1A1512",
    
    // Success
    success: "#10B981",
    successLight: "#052E16",
    
    // Gradients
    gradientPrimary: "linear-gradient(135deg, #3385FF 0%, #0066FF 100%)",
    gradientAccent: "linear-gradient(135deg, #FF8A5B 0%, #FF6B35 100%)",
    gradientSubtle: "linear-gradient(180deg, #000000 0%, #0A0A0A 100%)",
    gradientCard: "linear-gradient(135deg, rgba(51, 133, 255, 0.05) 0%, rgba(255, 138, 91, 0.05) 100%)"
  },
  shadows: {
    xs: "0 1px 2px rgba(0, 0, 0, 0.4)",
    sm: "0 1px 3px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(0, 0, 0, 0.4)",
    md: "0 4px 6px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.4)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.4)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.6), 0 10px 10px rgba(0, 0, 0, 0.4)",
    glow: "0 0 30px rgba(51, 133, 255, 0.2)",
    glowAccent: "0 0 30px rgba(255, 138, 91, 0.2)"
  }
}

const theme = {
  fonts: {
    primary: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: '"JetBrains Mono", "SF Mono", "Fira Code", monospace'
  },
  
  // Expanded typography scale
  fontSizes: {
    xs: "11px",
    sm: "12px",
    base: "14px",
    md: "15px",
    lg: "16px",
    xl: "18px",
    "2xl": "20px",
    "3xl": "24px",
    "4xl": "30px",
    "5xl": "36px",
    "6xl": "48px",
    "7xl": "56px"
  },
  
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800
  },
  
  // Letter spacing tokens
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  },
  
  // Line heights
  lineHeights: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2
  },
  
  // Expanded spacing scale (4px base)
  spacing: {
    0: "0",
    px: "1px",
    0.5: "2px",
    1: "4px",
    1.5: "6px",
    2: "8px",
    2.5: "10px",
    3: "12px",
    3.5: "14px",
    4: "16px",
    5: "20px",
    6: "24px",
    7: "28px",
    8: "32px",
    9: "36px",
    10: "40px",
    11: "44px",
    12: "48px",
    14: "56px",
    16: "64px",
    20: "80px",
    24: "96px",
    28: "112px",
    32: "128px"
  },
  
  radii: {
    none: "0",
    xs: "2px",
    sm: "4px",
    md: "6px",
    lg: "8px",
    xl: "12px",
    "2xl": "16px",
    "3xl": "24px",
    full: "9999px"
  },
  
  breakpoints: {
    xs: "480px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1200px",
    "2xl": "1400px"
  },
  
  container: {
    maxWidth: "1100px",
    padding: "20px"
  },
  
  // Animation tokens
  animation: {
    // Durations
    fast: "150ms",
    normal: "250ms",
    slow: "400ms",
    slower: "600ms",
    
    // Easings
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    easeOut: "cubic-bezier(0, 0, 0.2, 1)",
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    spring: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
  },
  
  // Transitions
  transitions: {
    fast: "all 150ms cubic-bezier(0.4, 0, 0.2, 1)",
    normal: "all 250ms cubic-bezier(0.4, 0, 0.2, 1)",
    slow: "all 400ms cubic-bezier(0.4, 0, 0.2, 1)",
    color: "color 150ms ease, background-color 150ms ease, border-color 150ms ease",
    transform: "transform 250ms cubic-bezier(0.4, 0, 0.2, 1)",
    opacity: "opacity 250ms ease"
  },
  
  // Z-index scale
  zIndex: {
    hide: -1,
    base: 0,
    dropdown: 10,
    sticky: 100,
    fixed: 200,
    overlay: 300,
    modal: 400,
    popover: 500,
    tooltip: 600
  }
}

export default theme
