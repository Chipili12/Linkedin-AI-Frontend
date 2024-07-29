import React from "react";
import Head from "next/head";
import { Poppins } from "next/font/google";
import Totop from "../components/to_top";

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
      <main className={`animated-bg ${poppins.className}`}>
      <Totop/>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
