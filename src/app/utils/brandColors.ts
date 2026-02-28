// Utility constants for brand colors based on logo
export const brandColors = {
  // Primary gradient (teal/cyan instead of indigo/purple)
  gradientFrom: 'from-teal-600',
  gradientTo: 'to-cyan-600',
  gradientHoverFrom: 'from-teal-700',
  gradientHoverTo: 'to-cyan-700',
  
  // Text colors
  primary: 'text-teal-600',
  secondary: 'text-cyan-600',
  
  // Background colors
  bgPrimary: 'bg-teal-600',
  bgSecondary: 'bg-cyan-600',
  bgLight: 'bg-teal-50',
  
  // Border colors
  borderPrimary: 'border-teal-600',
  borderLight: 'border-teal-200',
  
  // Hover states
  hoverText: 'hover:text-teal-600',
  hoverBg: 'hover:bg-teal-50',
  
  // Accent color (yellow from logo)
  accent: 'text-amber-500',
  accentBg: 'bg-amber-500',
};

// Full className strings for common patterns
export const brandClasses = {
  gradientText: 'bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent',
  gradientBg: 'bg-gradient-to-r from-teal-600 to-cyan-600',
  gradientBgHover: 'bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700',
  gradientButton: 'bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white',
};
