// Collab Task Brand Theme
// Based on actual application CSS variables

export const theme = {
  colors: {
    primary: '#6b356b',
    primaryLight: '#8a5a8a',
    primaryDark: '#4a2450',
    secondary: '#dddbff',
    accent: '#C22473',
    accentLight: '#d94890',
    bg: '#f3f4f6',
    bgLight: '#ffffff',
    bgDark: '#e5e7eb',
    text: '#1f2937',
    textLight: '#6b7280',
    textDark: '#111827',
  },

  fonts: {
    main: 'Montserrat, ui-sans-serif, system-ui, -apple-system, sans-serif',
  },

  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },

  animation: {
    // Professional easing curves based on brand personality
    // Collab Task: modern, trustworthy, energetic but not playful
    easeInOut: [0.33, 0, 0.15, 1] as [number, number, number, number],
    easeOut: [0, 0, 0.2, 1] as [number, number, number, number],
    easeIn: [0.4, 0, 1, 1] as [number, number, number, number],
    spring: [0.16, 1, 0.3, 1] as [number, number, number, number],
  },

  // Timing constants (in frames @ 30fps)
  timing: {
    fast: 12, // 0.4s
    normal: 18, // 0.6s
    slow: 24, // 0.8s
    verySlow: 36, // 1.2s
    hold: 30, // 1s hold for brand moments
  },
};

export type Theme = typeof theme;
