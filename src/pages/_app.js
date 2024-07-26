import React from "react";
import Head from "next/head";
import { Poppins } from "next/font/google";
import { Main } from "next/document";
import Navbar from "../components/navbar";
const poppins = Poppins({
  weight: ["200", "400", "700"],
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>LinkedAI</title>
      </Head>
      <main className={poppins.className}>
      <Navbar></Navbar>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
