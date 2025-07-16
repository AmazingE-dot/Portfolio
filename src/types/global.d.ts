// src/types/global.d.ts
export {};

declare global {
  interface Window {
    typewriterTexts?: string[];
    updateTypewriter?: () => void;
  }
}
