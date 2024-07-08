import "@/app/globals.css";
import Head from 'next/head';
import Navbar from "../components/navbar";
import { Poppins } from "next/font/google"

const poppins = Poppins({
  weight: ["200", "400"],
  subsets: ["latin"],
});


export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-2 bg-neutral-900">
      <Navbar></Navbar>
      <Head>
      
        <title>Contacto</title>
        <meta name="description" content="Contact us page" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        div
        <h1 className="text-5xl font-thin mb-8 text-red-400">CONTACT</h1> <h1 className="text-white">US</h1>

        <form className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your email"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Your message"
              rows="5"
            ></textarea>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Send
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
