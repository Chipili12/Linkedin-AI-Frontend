import "@/app/globals.css";
import Head from "next/head";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { phone, mail } from "@/../public/assets/index";
import Navbar from "../components/navbar";

export default function Contact() {
  return (
    <main className="min-h-screen bg-contact">
      <Head>
        <title>Contacto</title>
        <meta name="description" content="Contact us page" />
      </Head>
      <Navbar></Navbar>
      <div className="flex flex-col font-thin items-center mt-10 lg:mt-20">
        <div className="flex text-3xl">
          <h1 className="text-red-300 pr-4">CONTACT</h1>{" "}
          <h1 className="text-white">US</h1>
        </div>
        <p className="px-40 text-slate-300 mt-1 block border-b border-slate-500 pb-2 text-sm lg:text-base">
          Si tiene alguna duda, no dude en contactarnos
        </p>
      </div>

      <div className="grid grid-cols-12 lg:mt-20 mt-10">
        <div className="lg:mt-20 col-span-12 lg:col-span-5 lg:text-right text-center lg:me-28 text-slate-400">
          <div className="lg:flex lg:justify-end lg:pb-10 pb-5">
            <div className="lg:border-r pr-2">
              <a href="tel:+59899150213">
                <h3 className="text-slate-200 font-semibold">CELULAR</h3>
                <p>+598 99 150 213</p>
              </a>
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
              <a href="mailto:linkedaiproject@gmail.com">
                <h3 className="text-slate-200 font-semibold">EMAIL</h3>
                <p>LinkedAIProject@gmail.com</p>
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
          action="https://api.web3forms.com/submit"
          method="POST"
          className="col-span-12 lg:col-span-7 lg:text-left text-center font-light text-slate-400"
        >
          <input
            type="hidden"
            name="access_key"
            value="c7df81e0-7221-4276-9fd3-13d5b30ea591"
          ></input>
          <input type="hidden" name="subject" value=""></input>
          {/* <input type="hidden" name="redirect" value="landingpage"></input> */}
          <div className="grid grid-cols-3 xl:mr-60 2xl:mr-96 lg:mr-40 m-5 2xl:gap-x-10 gap-x-6">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nombre"
              className=" bg-transparent col-span-3 mx-10 lg:mx-0 sm:col-span-1 border-b border-slate-400 pb-2 mt-10 md:mt-0 ps-1"
              required
            />
            <input
              name="email"
              type="text"
              id="mail"
              placeholder="email"
              className="bg-transparent col-span-3 mx-10 lg:mx-0 sm:col-span-1 border-b border-slate-400 pb-2 mt-10 md:mt-0 ps-1"
              required
            />
            <input
              name="phone"
              type="text"
              id="phone"
              placeholder="Teléfono"
              className="bg-transparent col-span-3 mx-10 lg:mx-0 sm:col-span-1 border-b border-slate-400 pb-2 mt-10 md:mt-0 ps-1"
            />
            <input
              name="subject"
              type="text"
              id="subject"
              placeholder="Asunto"
              className="bg-transparent col-span-3 mx-10 lg:mx-0 border-b border-slate-400 ps-1 pb-2 mt-8"
            />
            <label
              htmlFor="message"
              className="mt-10 pb-3 text-slate-300 text-start ps-11 lg:ps-0"
            >
              Mensaje
            </label>
            <textarea
              name="message"
              className="mx-10 lg:mx-0 bg-transparent col-span-3 border-b border-slate-400 pb-2 ps-1"
              id="message"
              rows={3}
              required
            ></textarea>
            <div className="col-span-3">
              <button
                type="submit"
                className="xl:text-left mt-10 px-10 py-1 border border-slate-400 hover:border-slate-600 active:border-slate-400"
              >
                ENVIAR
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
