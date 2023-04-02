import { type DefaultTheme } from "styled-components";

const defaultTheme: DefaultTheme = {
  colors: {
    background: "#FFFFFF",
    white: "#FFFFFF",
    blue: "#329BFC",
    yellow: "#F7DB6A",
    pink: "#D864A9",
    green: "#3CB371",
    red: "#F64444",
    main: {
      color: "#02b1c8",
      tints: {
        100: "#e6f7fa",
        200: "#cceff4",
        300: "#b3e8ef",
        400: "#9ae0e9",
        500: "#81d8e4",
        600: "#67d0de",
        700: "#4ec8d9",
        800: "#35c1d3",
        900: "#1bb9ce",
      },
      shaders: {
        100: "#029fb4",
        200: "#028ea0",
        300: "#017c8c",
        400: "#016a78",
        500: "#015964",
        600: "#014750",
        700: "#01353c",
        800: "#002328",
        900: "#001214",
      },
    },

    grey: {
      color: "#78808A",
      tints: {
        100: "#F2F2F3",
        200: "#E4E6E8",
        300: "#D7D9DC",
        400: "#C9CCD0",
        500: "#BCC0C5",
        600: "#AEB3B9",
        700: "#A1A6AD",
        800: "#9399A1",
        900: "#868D96",
      },
      shaders: {
        100: "#6C737C",
        200: "#60666E",
        300: "#545A61",
        400: "#484D53",
        500: "#3C4045",
        600: "#303337",
        700: "#242629",
        800: "#181A1C",
        900: "#0C0D0E",
      },
    },
  },
};

export default defaultTheme;
