import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "components/header";
import { Footer } from "components/footer";
import { EasterEgg } from "components/easter-egg";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div
        css={{
          // margin: "1rem 2rem",
          minHeight: "var(--main-content-min-height)",
        }}
      >
        <Component {...pageProps} />
      </div>
      <Footer />
      <EasterEgg />
    </>
  );
}

export default MyApp;
