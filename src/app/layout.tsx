import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Head from 'next/head';
const poppins = Poppins({ 
  weight: ["400", "700"], 
  subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LinkedAI",
  description: "New Generation AI powered LinkedIn reviews and tips",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: dark)',
        url: '/assets/dark_favicon.ico',
        href: '/assets/dark_favicon.ico',
      },
      {
        media: '(prefers-color-scheme: light)',
        url: '/assets/light_favicon.ico',
        href: '/assets/light_favicon.ico',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head><link rel="icon" href="/xd.ico" sizes="any" /></head>
      <body className={poppins.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
