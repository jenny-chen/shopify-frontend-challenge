import React from "react"
import { ThemeProvider } from "styled-components"

const breakpoints = ["384px", "768px", "1024px", "2000px"]
const theme = {
  breakpoints: {
    mobile: breakpoints[0],
    tablet: breakpoints[1],
    desktop: breakpoints[2],
    widescreen: breakpoints[3],
  },
  colors: {
    black: "#333333",
    paleYellow: "#F5EEE1",
    gold: "#E1A736",
    gray: "#555555",
    lightGray: "#ACA79E",
    green: "#528D6A",
    darkGreen: "#6E8F7B",
    red: "#C5463E",
  },
  fonts: "Futura, Helvetica, Calibri",
  // fonts: {
  //   sans: "Futura, Helvetica, Calibri",
  // },
  mediaQueries: {
    mobile: `@media screen and (min-width: ${breakpoints[0]})`,
    tablet: `@media screen and (min-width: ${breakpoints[1]})`,
    desktop: `@media screen and (min-width: ${breakpoints[2]})`,
    widescreen: `@media screen and (min-width: ${breakpoints[3]})`,
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme
