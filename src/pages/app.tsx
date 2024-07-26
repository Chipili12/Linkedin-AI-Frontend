'use client'
import "@/app/globals.css";
import Navbar from "../components/navbar";
import Head from "next/head";
import { useState, useEffect } from "react";

export default function App() {
  return (
    <main className="min-h-screen">
      <Head>
        <title>Nosotros</title>
        <meta name="description" content="About us page" />
      </Head>

      <div className="grid grid-cols-12 lg:mt-20">
        <div className="col-span-12 justify-center flex">
            <div>
            <h1 className="text-slate-300 mb-3">Ingresa tu usuario de LinkedIn</h1>
        <input
              type="text"
              name="name"
              id="name"
              placeholder="Usuario de LinkedIn"
              className="bg-transparent border-slate-400 rounded-full border px-5 py-2"
              required
            />
            </div>
        </div>
      </div>
    </main>
  );
}
