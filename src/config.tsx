// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins";

// 2. Extend the theme with new layer styles
export const theme = extendTheme({
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
    html: "Poppins, sans-serif",
  },
  space: {
    x: {
      100: "0 60px",
    },
  },
  colors: {
    GreenLight: "#01923F",
    GreenLighter: "rgba(229, 240, 232)",
    GreenDarker: "#1d1d1d",
    GreenDark: "#144b34",
    YellowLight: "#EFE307",
    Grey1D: "#1D1D1D",
    Hover: {
      GreenLight: "#01923Fdd",
      GreenDark: "#144b34dd",
    },
  },
  sizes: {
    navBarHeight: "92px",
  },
});
