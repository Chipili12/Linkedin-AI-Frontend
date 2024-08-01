import "@/app/globals.css";
import Navbar from "../components/navbar";
import Head from "next/head";

export default function Presentacion() {
  return (
    <main className="min-h-screen bg-zinc-900">
      <Head>
        <title>Presentación</title>
        <meta name="description" content="About us page" />
      </Head>
      <Navbar></Navbar>
      <div className="flex justify-center lg:mt-10">
        <div
          style={{
            position: "relative",
            width: "80%",
            height: 0,
            paddingTop: "50.0%",
            paddingBottom: 0,
            boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
            marginTop: "1.6em",
            marginBottom: "0.9em",
            overflow: "hidden",
            borderRadius: "8px",
            willChange: "transform",
          }}
        >
          <iframe
            loading="lazy"
            style={{
              position: "absolute",
              width: "100%",
              height: "80%",
              top: 0,
              left: 0,
              border: "none",
              padding: 0,
              margin: 0,
            }}
            src="https://www.canva.com/design/DAGMXURf5IE/g3kTWUwsAlrdppZnAdlA6w/view?embed"
            allowFullScreen
            allow="fullscreen"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
