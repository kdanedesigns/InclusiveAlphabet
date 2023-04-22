import '@/styles/globals.css';
import '@/styles/fonts.css';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
