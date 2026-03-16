"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

// Datos de ejemplo: Aquí pondrás tus proyectos reales más adelante
const projects = [
  {
    id: 1,
    title: "E-Commerce API",
    description: "Backend robusto para tienda online con pasarela de pagos, gestión de inventario y autenticación JWT.",
    tech: ["Node.js", "Express", "PostgreSQL", "Docker"],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Dashboard Analítico",
    description: "Interfaz moderna para visualizar datos en tiempo real. Gráficos interactivos y modo oscuro.",
    tech: ["React", "Next.js", "Tailwind CSS", "Recharts"],
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "Sistema de Reservas",
    description: "Aplicación Full-Stack para gestión de citas de una clínica médica. Incluye notificaciones por email.",
    tech: ["Next.js", "TypeScript", "Prisma", "Tailwind"],
    github: "#",
    demo: "#",
  }
];

export default function Projects() {
  return (
    <section id="proyectos" className="w-full max-w-6xl py-24 px-6 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold md:text-5xl">
          Mis <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-200 to-blue-400">Proyectos</span>
        </h2>
        <p className="mt-4 text-zinc-400">
          Una selección del código que he escrito y los sistemas que he construido.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:bg-zinc-900 hover:border-zinc-700"
          >
            {/* Efecto de brillo de fondo al hacer hover */}
            <div className="absolute inset-0 -z-10 rounded-2xl bg-linear-to-br from-green-500/5 to-purple-500/5 opacity-0 transition-opacity group-hover:opacity-100" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-zinc-100 mb-2">{project.title}</h3>
              <p className="text-sm text-zinc-400 mb-6">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-md bg-zinc-800 px-2 py-1 text-xs text-zinc-300 font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 mt-auto pt-4 border-t border-zinc-800/50">
              <a href={project.github} className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white">
                <Github className="h-4 w-4" /> Código
              </a>
              <a href={project.demo} className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-green-400">
                <ExternalLink className="h-4 w-4" /> Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}