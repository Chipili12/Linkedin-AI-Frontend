import "@/app/globals.css";
import Head from "next/head";
import Navbar from "../components/navbar";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { phone, mail } from "@/../public/assets/index";

const poppins = Poppins({
  weight: ["200","300", "400"],
  subsets: ["latin"],
});

export default function Contact() {
  return (
    <main className="bg-neutral-900 min-h-screen">
      <Head>
        <title>Contacto</title>
        <meta name="description" content="Contact us page" />
      </Head>
      <Navbar></Navbar>

      <div className="flex flex-col font-thin items-center mt-20 w-full px-20 text-center">
        <div className="flex text-3xl  px-20">
          <h1 className="text-red-300 pr-4">CONTACT</h1>{" "}
          <h1 className="text-white">US</h1>
        </div>
        <p className="text-slate-300 mt-1 block border-b border-slate-500 pb-2 text-sm lg:text-base">
          Si tiene alguna duda, no dude en contactarnos
        </p>
      </div>

      <div className="grid grid-cols-12 flex-col lg:mt-20 mt-10">
        <div className="xl:mt-20 col-span-12 lg:col-span-5 lg:text-right text-center lg:me-28 text-slate-400">
          <div className="lg:flex lg:justify-end lg:pb-10 pb-5">
            <div className="lg:border-r pr-2">
              <h3 className="text-slate-200 font-semibold">CELULAR</h3>
              <p>+598 99-150-213</p>
            </div>
            <Image
              src={phone}
              height={35}
              width={35}
              alt="Phone icon"
              className="ms-2 object-scale-down hidden lg:block"
            ></Image>
          </div>

          <div className="lg:flex lg:justify-end">
            <div className="lg:border-r pr-2">
              <h3 className="text-slate-200 font-semibold">EMAIL</h3>
              <a href="mailto:linkedaiproject@gmail.com">
                LinkedAIProject@gmail.com
              </a>
            </div>
            <Image
              src={mail}
              height={48}
              width={35}
              alt="Phone icon"
              className="p-1 ms-2 object-scale-down hidden lg:block"
            ></Image>
          </div>
        </div>

        <form
          action=""
          className="col-span-12 lg:col-span-7 lg:text-left text-center font-light text-slate-400"
        >
          <div className="grid grid-cols-3 2xl:mr-96 m-5 2xl:gap-x-16 gap-x-6 md:mr-40">
            <input
              type="text"
              id="name"
              placeholder="Nombre"
              className="bg-transparent col-span-3 mx-10 sm:col-span-1 lg:mx-0 border-b border-slate-400 pb-2 mt-10 md:mt-0 ps-1"
            />
            <input
              type="text"
              id="mail"
              placeholder="email"
              className="bg-transparent col-span-3  mx-10 lg:mx-0 sm:col-span-1 border-b border-slate-400 pb-2 ps-1 mt-10 md:mt-0"
            />
            <input
              type="text"
              id="phone"
              placeholder="Teléfono"
              className="bg-transparent col-span-3 mx-10 lg:mx-0 sm:col-span-1  border-b border-slate-400 pb-2 mt-10 md:mt-0 ps-1"
            />
            <input
              type="text"
              id="subject"
              placeholder="Asunto"
              className="bg-transparent col-span-3 mx-10 lg:mx-0 border-b border-slate-400 ps-1 pb-2 mt-8  "
            />
            <label htmlFor="message" className="mt-10 pb-3 text-slate-200">Mensaje</label>
            <textarea
              className="bg-transparent col-span-3 border-b border-slate-400 pb-2 ps-1"
              id="message"

              rows={3}
            ></textarea>
          </div>
          
        </form>
      </div>
    </main>

  );
}
