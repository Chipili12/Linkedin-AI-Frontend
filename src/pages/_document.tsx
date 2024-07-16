'use client'
import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="icon" href="/assets/dark_favicon.ico" media="(prefers-color-scheme: dark)"/>
      <link rel="icon" media="(prefers-color-scheme: light)" href="/assets/light_favicon.ico"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}