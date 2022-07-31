import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../Components/Layout/Layout";
import { StoreProvider } from "../Data/Store/Store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StoreProvider>
  );
}

export default MyApp;
