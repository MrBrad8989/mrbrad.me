"use client";

import { motion } from "framer-motion";
import { Terminal, Code2, Mail, Linkedin, Github, Twitter, Twitch, Gamepad2, UserCircle } from "lucide-react";

export default function About() {
  const skills = [
    "JavaScript/TypeScript", "React & Next.js", "Node.js", 
    "Tailwind CSS", "PostgreSQL", "Git & GitHub", "Figma", "Docker"
  ];

  const socials = [
    { name: "GitHub", icon: Github, href: "https://github.com/MrBrad8989", color: "hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/tu-perfil", color: "hover:bg-blue-50 dark:hover:bg-blue-600/20 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/50" },
    { name: "Twitter / X", icon: Twitter, href: "https://twitter.com/tu-usuario", color: "hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-300" },
    { name: "Twitch", icon: Twitch, href: "https://twitch.tv/tu-canal", color: "hover:bg-purple-50 dark:hover:bg-purple-600/20 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-500/50" },
    { name: "Discord", icon: Gamepad2, href: "#", color: "hover:bg-indigo-50 dark:hover:bg-indigo-600/20 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/50" },
    { name: "Email", icon: Mail, href: "mailto:tu-correo@ejemplo.com", color: "hover:bg-green-50 dark:hover:bg-green-600/20 hover:text-green-600 dark:hover:text-green-400 hover:border-green-500/50" },
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
        <h2 className="text-3xl font-bold md:text-5xl flex items-center gap-4 text-zinc-900 dark:text-white">
          <Terminal className="h-8 w-8 text-green-600 dark:text-green-500" />
          <span>Player <span className="text-transparent bg-clip-text bg-linear-to-r from-green-500 to-emerald-600 dark:from-green-400 dark:to-emerald-600">Profile</span></span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="lg:col-span-2 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 p-8 backdrop-blur-sm flex flex-col sm:flex-row gap-8 items-center sm:items-start shadow-sm dark:shadow-none"
        >
          <div className="relative group shrink-0">
            <div className="absolute -inset-1 bg-linear-to-r from-green-500 to-purple-500 rounded-2xl blur-sm opacity-20 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative h-40 w-40 sm:h-48 sm:w-48 rounded-2xl overflow-hidden border-2 border-white dark:border-zinc-800 group-hover:border-green-500/50 transition-colors bg-zinc-100 dark:bg-zinc-950">
              <img 
                src="https://github.com/MrBrad8989.png" 
                alt="Foto de perfil" 
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
            </div>
          </div>

          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2 flex items-center justify-center sm:justify-start gap-2">
              <UserCircle className="text-green-600 dark:text-green-400 h-6 w-6" /> MrBrad
            </h3>
            <div className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm sm:text-base">
              <p>
                ¡Hola! Soy un desarrollador Full-Stack apasionado por crear experiencias web que no solo funcionen a la perfección por detrás, sino que se vean increíbles por delante.
              </p>
              <p>
                Me encanta resolver problemas complejos y transformar diseños en interfaces interactivas. Siempre estoy buscando aprender nuevas tecnologías y subir mis estadísticas como programador.
              </p>
              <p>
                Cuando no estoy escribiendo código, probablemente me encuentres probando algún videojuego nuevo, investigando sobre hardware o tomando un buen café.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 p-8 backdrop-blur-sm flex flex-col shadow-sm dark:shadow-none"
        >
          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-6 font-mono text-sm uppercase tracking-wider flex items-center gap-2">
            <span className="text-green-600 dark:text-green-500">{">"}</span> Social_Links
          </h3>
          
          <div className="grid grid-cols-2 gap-3 flex-1">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className={`flex flex-col items-center justify-center gap-2 rounded-xl border border-zinc-200 dark:border-zinc-800/50 bg-zinc-50 dark:bg-zinc-900/50 p-4 text-zinc-600 dark:text-zinc-400 transition-all duration-300 ${social.color}`}
              >
                <social.icon className="h-6 w-6" />
                <span className="text-xs font-medium">{social.name}</span>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="lg:col-span-3 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 p-8 backdrop-blur-sm shadow-sm dark:shadow-none"
        >
          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-6 font-mono text-sm uppercase tracking-wider flex items-center gap-2">
            <span className="text-green-600 dark:text-green-500">{">"}</span> Skills_Tree
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-700/50 bg-zinc-50 dark:bg-zinc-800/30 px-5 py-2 text-sm text-zinc-700 dark:text-zinc-300 transition-colors hover:border-green-500/50 dark:hover:border-green-500/50 hover:bg-green-50 dark:hover:bg-green-500/10 hover:text-green-600 dark:hover:text-green-400 cursor-default"
              >
                <Code2 className="h-4 w-4 opacity-50" /> {skill}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}