import Image from "next/image";
import { ai_cellphone } from "@/../public/assets/index";
import Link from "next/link";

export default function Home() {
  return (
    <main className="lg:flex items-center p-5 lg:justify-center">
      <div className="lg:pt-10 items-center relative gap-32 flex justify-center">
        <Image
          src={ai_cellphone}
          height={250}
          width={400}
          alt="AI cellphone guy"
          placeholder="blur"
          className="opacity-50 blur-sm rounded-full border-white shadow-lg hidden 2xl:flex hover:blur-0"
        ></Image>
        <div className="max-w-xl xl:max-w-600">
          <h1
            className="text-transparent text-5xl font-bold bg-gradient-to-r from-white to-blue-800 "
            style={{ WebkitBackgroundClip: "text" }}
          >
            Descubre tu potencial con LinkedAI
          </h1>
          <h2
            style={{ WebkitBackgroundClip: "text" }}
            className="text-transparent bg-gradient-to-r from-white to-blue-200 text-lg mt-8 lg:text-xl"
          >
            Convierte tu perfil de LinkedIn en una herramienta estratégica con
            nuestra avanzada inteligencia artificial. Nuestra plataforma analiza
            de manera precisa cada aspecto de tu perfil para proporcionarte
            insights poderosos y personalizados.
          </h2>
          <div className="flex lg:gap-10 gap-16 justify-center lg:justify-start from-pink-400 to-blue-500 text-center">
            <Link
              href="/features"
              className="content-center p-5 rounded-full mt-10 bg-gradient-to-r hover:from-pink-300 shadow-2xl hover:to-blue-400 active:bg-blue-400 active:from-pink-100 active:to-blue-500"
            > 
              Más información.
            </Link>
            <Link
              href="/app"
              className="content-center p-5 rounded-full mt-10 bg-gradient-to-r hover:from-pink-300 hover:to-blue-400 active:bg-blue-400 active:from-pink-100 active:to-blue-500"
            >
              Comienza tu prueba grátis
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
