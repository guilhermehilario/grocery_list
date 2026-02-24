/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from "react-native";

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    primary50: "#f0f9ff",
    primary100: "#e0f2fe",
    primary500: "#0ea5e9",
    primary600: "#0284c7",
    primary700: "#0369a1",

    // Cores Neutras
    background: "#ffffff",
    surface: "#f8fafc",
    surfaceVariant: "#f1f5f9",
    textPrimary: "#1e293b",
    textSecondary: "#64748b",
    textTertiary: "#94a3b8",
    border: "#e2e8f0",

    // Cores Semânticas
    success50: "#f0fdf4",
    success500: "#22c55e",
    success600: "#16a34a",

    warning50: "#fffbeb",
    warning500: "#f59e0b",
    warning600: "#d97706",

    error50: "#fef2f2",
    error500: "#ef4444",
    error600: "#dc2626",

    info50: "#eff6ff",
    info500: "#3b82f6",
    info600: "#2563eb",
  },
  dark: {
    // Cores Primárias
    primary50: "#0c1a2a",
    primary100: "#0f2544",
    primary500: "#38bdf8",
    primary600: "#0ea5e9",
    primary700: "#0284c7",

    // Cores Neutras
    background: "#0f172a",
    surface: "#1e293b",
    surfaceVariant: "#334155",
    textPrimary: "#f1f5f9",
    textSecondary: "#cbd5e1",
    textTertiary: "#94a3b8",
    border: "#475569",

    // Cores Semânticas
    success50: "#052e16",
    success500: "#22c55e",
    success600: "#16a34a",

    warning50: "#451a03",
    warning500: "#f59e0b",
    warning600: "#d97706",

    error50: "#450a0a",
    error500: "#ef4444",
    error600: "#dc2626",

    info50: "#172554",
    info500: "#3b82f6",
    info600: "#2563eb",
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: "system-ui",
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: "ui-serif",
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: "ui-rounded",
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
