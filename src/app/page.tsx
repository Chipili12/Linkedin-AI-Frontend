import Image from "next/image";
import { ai_cellphone } from "@/../public/assets/index";
import Link from "next/link";

export default function Home() {
  return (
    <main className="lg:flex max-h-screen items-center lg:p-40 p-20 mt-10 lg:mx-40 landingpage">
      <div className="h-screen items-center relative gap-32 flex">
      <Image src={ai_cellphone} height={250} width={400} alt="AI cellphone guy" className="opacity-50 blur-sm rounded-full  border-white shadow-lg hidden 2xl:flex">

</Image>
        <div className="max-w-xl ">
          <h1
            className="text-5xl font-bold bg-gradient-to-r from-white to-blue-800 "
            style={{ color: "transparent", WebkitBackgroundClip: "text" }}
          >
            Descubre tu potencial con LinkedAI
          </h1>
          <h2
            style={{ color: "transparent", WebkitBackgroundClip: "text" }}
            className="bg-gradient-to-r from-white to-blue-200 text-xl mt-8"
          >
            Convierte tu perfil de LinkedIn en una herramienta estratégica con
            nuestra avanzada inteligencia artificial. Nuestra plataforma analiza
            de manera precisa cada aspecto de tu perfil para proporcionarte
            insights poderosos y personalizados.
          </h2>
          <div className="flex grid-cols-2 gap-10 text-center">
            <Link
              href="/"
              className="p-5 rounded-full mt-10 bg-gradient-to-r from-red-400 to-blue-500 hover:from-pink-100 hover:to-blue-400 active:bg-blue-400 active:from-pink-100 active:to-blue-500"
            >
              Más información.
            </Link>
            <Link
              href="/"
              className="p-5 rounded-full mt-10 bg-gradient-to-r from-red-400 to-blue-500 hover:from-pink-100 hover:to-blue-400 active:bg-blue-400 active:from-pink-100 active:to-blue-500"
            >
              Comienza tu prueba grátis
            </Link>
          </div>
        </div>
      </div>
     
        
      
    </main>
  );
}
