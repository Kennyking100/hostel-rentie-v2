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
    GreenLighter: "#01923F1A",
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
  // layerStyles: {
  //   base: {
  //     backgroundColor: "#01923F",
  //     color: "white",
  //   },
  //   base2: {
  //     backgroundColor: "#144B34",
  //     color: "white",
  //   },
  // },

  // textStyles: {
  //   popM90: {
  //     fontWeight: "medium",
  //     fontSize: "4rem",
  //   },
  //   popR24: {
  //     fontWeight: "400",
  //     fontSize: "1.25rem",
  //   },
  //   popL28: {
  //     fontWeight: "light",
  //     fontSize: "1.75rem",
  //   },
  //   popB60: {
  //     fontWeight: "bold",
  //     fontSize: "3.75rem",
  //   },
  //   popSM48: {
  //     fontWeight: "semi-bold",
  //     fontSize: "3rem",
  //   },
  //   popSM36: {
  //     fontWeight: "semi-bold",
  //     fontSize: "2.25rem",
  //   },
  //   popM32: {
  //     fontWeight: "medium",
  //     fontSize: "2rem",
  //   },
  //   popM28: {
  //     fontWeight: "500",
  //     fontSize: "1.3125rem",
  //   },
  // },
});
