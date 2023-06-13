import '@/styles/globals.css';
import '@/styles/fonts.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import localFont from 'next/font/local';
import React from 'react';



export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
  </div>
  );
}
