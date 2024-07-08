import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";

const poppins = Poppins({
  weight: ["100","400", "700"],
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "LinkedAI",
  description: "New Generation AI powered LinkedIn reviews and tips",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: dark)",
        url: "/assets/dark_favicon.ico",
      },
      {
        media: "(prefers-color-scheme: light)",
        url: "/assets/light_favicon.ico",
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
      <body className={`${poppins.className} landingpage`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
