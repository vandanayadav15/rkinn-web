import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import Theme from "../app/Theme";
import CreateEmotionCache from "../app/CreateEmotionCache";
import Header from "../components/utils/Header";
import "aos/dist/aos.css";
import AOS from "aos";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = CreateEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  React.useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>rkinn</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
