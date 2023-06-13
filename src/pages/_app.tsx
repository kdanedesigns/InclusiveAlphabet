import '@/styles/globals.css';
import '@/styles/fonts.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import localFont from 'next/font/local';
import React from 'react';



export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      {/* <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </li>
          <li>
            <Link href="/account">
              <a>Account</a>
            </Link>
          </li>
        </ul>
      </nav> */}
    <Component {...pageProps} />
  </div>
  );
}
