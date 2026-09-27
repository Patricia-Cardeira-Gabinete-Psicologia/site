import type { AppProps } from "next/app";
import "../styles/global.css";

import Layout from "../components/Layout";
import AccessibilityLabels from "../components/AccessibilityLabels";
import { ThemeProvider } from "@mui/material/styles";

import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AccessibilityLabels />
        <Layout>
        <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
  );
}
