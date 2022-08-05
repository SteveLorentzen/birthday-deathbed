import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Header } from 'components/header';
import { Footer } from 'components/footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div css={{ margin: '1rem' }}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
