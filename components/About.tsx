"use client";

import { motion } from "framer-motion";
import { Terminal, Code2, Mail, Linkedin, Github } from "lucide-react";

export default function About() {
  // Tus habilidades técnicas principales
  const skills = [
    "JavaScript/TypeScript", "React & Next.js", "Node.js", 
    "Tailwind CSS", "PostgreSQL", "Git & GitHub", "Figma", "Docker"
  ];

  return (
    <section id="sobre-mi" className="w-full max-w-6xl py-24 px-6 mx-auto mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold md:text-5xl flex items-center gap-4">
          <Terminal className="h-8 w-8 text-blue-300" />
          <span>Player <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-200 to-blue-400">Profile</span></span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Panel Izquierdo: Biografía */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 backdrop-blur-sm"
        >
          <h3 className="text-xl font-bold text-zinc-100 mb-4 flex items-center gap-2">
            <Code2 className="h-5 w-5 text-purple-400" /> Lore / Sobre mí
          </h3>
          <div className="space-y-4 text-zinc-400 leading-relaxed">
            <p>
              ¡Hola! Soy un desarrollador Full-Stack apasionado por crear experiencias web que no solo funcionen a la perfección por detrás, sino que se vean increíbles por delante.
            </p>
            <p>
              Me encanta resolver problemas complejos y transformar diseños en interfaces interactivas. Siempre estoy buscando aprender nuevas tecnologías y subir mis estadísticas como programador.
            </p>
            <p>
              Cuando no estoy escribiendo código, probablemente me encuentres probando algún videojuego nuevo, leyendo sobre tecnología o tomando café.
            </p>
          </div>
        </motion.div>

        {/* Panel Derecho: Skills y Contacto */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          {/* Skills / Árbol de habilidades */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-zinc-100 mb-4 font-mono text-sm uppercase tracking-wider">
              {">"} Skills_Tree
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="rounded-full border border-zinc-700 bg-zinc-800/50 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-blue-400 hover:text-blue-400 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Panel de Contacto */}
          <div className="rounded-2xl border border-zinc-800 bg-linear-to-b from-zinc-900/30 to-green-900/10 p-8 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-zinc-100 mb-6 font-mono text-sm uppercase tracking-wider">
              {">"} Initialize_Connection
            </h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:tu-correo@ejemplo.com"
                className="flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 font-semibold text-zinc-950 transition-transform hover:scale-105"
              >
                <Mail className="h-4 w-4" /> Enviar Email
              </a>
              <a 
                href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-md border border-zinc-700 bg-zinc-800 px-6 py-3 font-semibold text-white transition-colors hover:bg-zinc-700"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a 
                href="https://github.com/MrBrad8989" target="_blank" rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-md border border-zinc-700 bg-zinc-800 px-6 py-3 font-semibold text-white transition-colors hover:bg-zinc-700"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}