"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, FolderGit2, User } from "lucide-react";

// Lista de enlaces para que sea fácil añadir más en el futuro
const navItems = [
  { name: "Inicio", href: "/", icon: Home },
  { name: "Proyectos", href: "#proyectos", icon: FolderGit2 },
  { name: "Sobre mí", href: "#sobre-mi", icon: User },
];

export default function Navbar() {
  return (
    <motion.div 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="fixed top-6 left-1/2 z-50 -translate-x-1/2"
    >
      <nav className="flex items-center gap-1 sm:gap-2 rounded-full border border-zinc-800 bg-black/40 px-4 py-2 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)]">
        {navItems.map((item) => (
          <Link 
            key={item.name} 
            href={item.href}
            className="group relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-zinc-400 transition-colors hover:text-cyan-400"
          >
            <item.icon className="h-4 w-4" />
            <span className="hidden sm:block">{item.name}</span>
            
            {/* Línea brillante inferior al pasar el ratón */}
            <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-linear-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            {/* Fondo sutil al pasar el ratón */}
            <span className="absolute inset-0 -z-10 rounded-full bg-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>
        ))}
      </nav>
    </motion.div>
  );
}