import type { AppProps } from "next/app";
import { UiProvider } from "../contexts";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UiProvider>
      <Component {...pageProps} />
    </UiProvider>
  );
}

export default MyApp;
