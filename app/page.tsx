"use client";

import { motion } from "framer-motion";
import Projects from "@/components/Projects";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-zinc-950 text-white">
      
      {/* Patrón de cuadrícula de fondo (ahora fijo 'fixed' para que no se corte al bajar) */}
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none"></div>

      {/* 1. SECCIÓN DE INICIO (Hero) - Ocupa la primera pantalla completa */}
      <section id="inicio" className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <span className="mb-4 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 font-mono text-sm text-green-400">
            {">"} System.out.println(&quot;Status: Available&quot;);
          </span>

          <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl">
            Full-Stack <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-500">Developer</span>
          </h1>
          
          <p className="mt-6 max-w-lg text-lg text-zinc-400">
            Construyendo interfaces épicas y sistemas robustos. 
            Sube de nivel tu próximo proyecto.
          </p>

          <motion.a 
            href="#proyectos"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-block rounded-md bg-white px-8 py-3 font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
          >
            START GAME
          </motion.a>
        </motion.div>
      </section>

      {/* 2. CONTENEDOR DE LAS DEMÁS SECCIONES */}
      <div className="relative z-10">
        <Projects />
        <About />
      </div>

    </main>
  );
}