import localFont from "next/font/local";

export const instrumentSerifItalic = localFont({
  src: "./InstrumentSerif-Italic.ttf",
  variable: "--font-instrument-serif-italic",
  weight: "400",
});

export const instrumentSerifRegular = localFont({
  src: "./InstrumentSerif-Regular.ttf",
  variable: "--font-instrument-serif-regular",
  weight: "400",
});

export const instrumentSansItalic = localFont({
  src: "./InstrumentSans-Italic-VariableFont_wdth,wght.ttf",
  variable: "--font-instrument-sans-italic",
  weight: "400 500 600 700",
});

export const instrumentSansRegular = localFont({
  src: "./InstrumentSans-VariableFont_wdth,wght.ttf",
  variable: "--font-instrument-sans-regular",
  weight: "400 500 600 700",
});

export const tinosRegular = localFont({
  src: "./Tinos-Regular.ttf",
  variable: "--font-tinos-regular",
  weight: "400",
});

export const tinosBold = localFont({
  src: "./Tinos-Bold.ttf",
  variable: "--font-tinos-bold",
  weight: "700",
});

export const tinosBoldItalic = localFont({
  src: "./Tinos-BoldItalic.ttf",
  variable: "--font-tinos-bold-italic",
  weight: "700",
});

export const tinosItalic = localFont({
  src: "./Tinos-Italic.ttf",
  variable: "--font-tinos-italic",
  weight: "400",
});
