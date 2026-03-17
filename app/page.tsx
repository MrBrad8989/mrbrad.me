"use client";

import { motion } from "framer-motion";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Terminal from "@/components/Terminal";
import Footer from "@/components/Footer";
import { TypeAnimation } from "react-type-animation"; // <-- Importamos la librería

export default function Home() {
  return (
    <main className="relative min-h-screen transition-colors duration-300">
      
      {/* Patrón de cuadrícula CLARO */}
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none dark:hidden"></div>
      
      {/* Patrón de cuadrícula OSCURO */}
      <div className="fixed inset-0 z-0 hidden dark:block bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none"></div>

      {/* SECCIÓN DE INICIO */}
      <section id="inicio" className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <span className="mb-4 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 font-mono text-sm text-green-700 dark:text-green-400">
            {">"} System.out.println(&quot;Status: Available&quot;);
          </span>

          <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl text-zinc-900 dark:text-white">
            Full-Stack <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-blue-600 dark:from-purple-400 dark:to-blue-500">Developer</span>
          </h1>
          
          {/* EFECTO MÁQUINA DE ESCRIBIR */}
          <div className="mt-6 h-16 max-w-xl text-lg sm:text-xl font-medium text-zinc-600 dark:text-zinc-400">
            <span className="font-bold text-zinc-800 dark:text-zinc-200">{">"} </span>
            <TypeAnimation
              sequence={[
                // Frase 1, luego espera 1.5 segundos
                'Desarrollando magia en React y Next.js',
                1500,
                // Frase 2
                'Creando interfaces épicas y rápidas.',
                1500,
                // Frase 3
                'Por cierto, me encanta el color azul.',
                1500,
                // Frase 4
                'Amante del código limpio y robusto.',
                1500
              ]}
              wrapper="span"
              speed={50} // Velocidad al escribir
              deletionSpeed={70} // Velocidad al borrar
              repeat={Infinity} // Bucle infinito
              cursor={true} // Muestra el cursor parpadeante
            />
          </div>

          <motion.a 
            href="#proyectos"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-block rounded-md bg-zinc-900 dark:bg-white px-8 py-3 font-semibold text-white dark:text-zinc-950 transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-200"
          >
            START GAME
          </motion.a>
        </motion.div>
      </section>

      <div className="relative z-10">
        <Terminal />
        <Projects />
        <About />
        <Footer />
      </div>

    </main>
  );
}