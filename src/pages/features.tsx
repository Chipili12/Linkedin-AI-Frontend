import "@/app/globals.css";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Navbar from "../components/navbar";
import { ai_hero, architecture } from "@/../public/assets/index";

export default function Features() {
  return (
    <main className="min-h-screen bg-black pb-10">
      <Head>
        <title>Características</title>
        <meta name="description" content="Contact us page" />
      </Head>

      <Navbar />
      <div className="grid lg:mt-20 mt-5  text-center font-sans text-white">
        <p className="lg:mb-4 ">1 de Agosto, 2024</p>
        <h1 className="text-7xl font-semibold mb-10">Prototipo LinkedAI</h1>
        <h2 className=" text-xl px-4 lg:w-3/4 xl:w-2/4 lg:mx-auto ">
          Actualmente estamos en la fase beta de la creación de esta aplicación
          web, la cuál analiza perfiles de LinkedIn utilizando inteligencia
          artifical, en forma de redes neuronales para otorgar poderoso feeback
          personalizado, para mejorar tus oportunidades laborales.
        </h2>
        <Link
          href="/app"
          className="mx-auto bg-slate-700 content-center p-2 px-4 rounded-full mt-10 bg-gradient-to-r hover:from-pink-300 hover:to-blue-400 active:bg-blue-400 active:from-pink-100 active:to-blue-500"
        >
          Comienza tu prueba grátis
        </Link>
        <Image
          src={ai_hero}
          alt="architecture"
          width={800}
          className="px-2 lg:mx-auto"
        ></Image>
      </div>
      <div className="font-sans text-white flex flex-col justify-center items-center">
        <div className="2xl:w-5/12 sm:w-7/12">
          <h1 className="text-3xl text-center 2xl:text-left font-semibold mb-10 px-2 lg:px-0">
            Arquitectura de la aplicación
          </h1>
          <p className="mb-10 text-lg px-4 text-center 2xl:text-left xl:px-0 font-medium ">
            El proyecto está diseñado para ser desplegado en una arquitectura
            robusta dentro de AWS. Utiliza Amazon EC2 para alojar la aplicación
            web, Amazon S3 para almacenar datos estáticos y perfiles, y Amazon
            RDS para gestionar la base de datos
          </p>
          <p className="mb-10 text-lg px-4 text-center 2xl:text-left xl:px-0 font-medium ">
            Amazon SageMaker se emplea para entrenar y desplegar los modelos de
            redes neuronales que analizan los perfiles de LinkedIn, mientras que
            AWS Lambda maneja tareas de procesamiento y análisis en tiempo real.
            La arquitectura se complementa con AWS CloudFront para la
            distribución de contenido y AWS IAM para una gestión segura de
            usuarios y permisos.
          </p>
        </div>
        <div className="block mt-8 pb-10">
          <Image
            src={architecture}
            alt="architecture"
            className="mx-auto px-2"
            height={750}
          ></Image>
        </div>
        
      </div>
    </main>
  );
}
