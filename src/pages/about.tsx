import "@/app/globals.css";
import Navbar from "../components/navbar";
import Head from "next/head";

export default function About() {
  return (
    <main className="min-h-screen">
      <Head>
        <title>Nosotros</title>
        <meta name="description" content="About us page" />
      </Head>

      <div className="grid grid-cols-12 lg:mt-20">
        <div className="col-span-12 justify-center flex">
          <h1 className="text-white">hola</h1>
        </div>
      </div>
    </main>
  );
}
