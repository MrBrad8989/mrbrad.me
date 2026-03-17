"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, FolderGit2, User, Globe, Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Inicio", href: "/", icon: Home },
  { name: "Proyectos", href: "#proyectos", icon: FolderGit2 },
  { name: "Sobre mí", href: "#sobre-mi", icon: User },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [lang, setLang] = useState("ES");

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') setTheme('light');
    else if (theme === 'light') setTheme('system');
    else setTheme('dark');
  };

  const toggleLang = () => {
    setLang(lang === "ES" ? "EN" : "ES");
  };

  return (
    <motion.div 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="fixed top-6 left-1/2 z-50 -translate-x-1/2"
    >
      <nav className="flex items-center gap-1 sm:gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-black/40 px-4 py-2 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.05)] dark:shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-colors duration-300">
        
        {navItems.map((item) => (
          <Link 
            key={item.name} 
            href={item.href}
            className="group relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 transition-colors hover:text-green-600 dark:hover:text-green-400"
          >
            <item.icon className="h-4 w-4" />
            <span className="hidden sm:block">{item.name}</span>
            <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-linear-to-r from-transparent via-green-500 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="absolute inset-0 -z-10 rounded-full bg-zinc-100 dark:bg-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>
        ))}

        <div className="mx-1 h-5 w-px bg-zinc-300 dark:bg-zinc-700"></div>

        <button 
          onClick={toggleLang}
          className="group relative flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 transition-colors hover:text-green-600 dark:hover:text-green-400"
          title="Cambiar idioma"
        >
          <Globe className="h-4 w-4" />
          <span className="font-mono text-xs">{lang}</span>
        </button>

        <button 
          onClick={toggleTheme}
          className="group relative flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 transition-colors hover:text-green-600 dark:hover:text-green-400"
          title="Cambiar tema"
        >
          {!mounted ? (
             <Monitor className="h-4 w-4" />
          ) : theme === 'dark' ? (
             <Moon className="h-4 w-4" />
          ) : theme === 'light' ? (
             <Sun className="h-4 w-4" />
          ) : (
             <Monitor className="h-4 w-4" />
          )}
        </button>

      </nav>
    </motion.div>
  );
}