import type { AppProps } from "next/app";
import { GeistProvider, CssBaseline } from '@geist-ui/core';
import { blackTheme } from '@/styles/theme';
import '../src/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GeistProvider themes={[blackTheme]} themeType="blackg">
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  )
}
