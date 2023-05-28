"use client";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/globals";
import { theme } from "@/styles/theme";

export default function Home() {
  return (
    <main className="main">
      <ThemeProvider theme={theme}>
        <h1>Styled Components Next App</h1>
      </ThemeProvider>
      <GlobalStyles />
    </main>
  );
}
