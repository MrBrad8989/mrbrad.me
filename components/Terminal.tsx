"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal as TerminalIcon } from "lucide-react";

interface CommandDisplay {
  type: "input" | "output" | "error";
  text: string;
}

export default function Terminal() {
  const [history, setHistory] = useState<CommandDisplay[]>([
    { type: "output", text: "Portfolio Terminal v1.0.0" },
    { type: "output", text: "Escribe 'help' para ver los comandos disponibles." },
  ]);
  const [input, setInput] = useState("");
  
  // 1. CAMBIO AQUÍ: Ahora referenciamos al contenedor entero en lugar de al final
  const terminalContainerRef = useRef<HTMLDivElement>(null);

  // 2. CAMBIO AQUÍ: Hacemos scroll solo dentro del div de la terminal
  useEffect(() => {
    if (terminalContainerRef.current) {
      terminalContainerRef.current.scrollTop = terminalContainerRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const command = input.trim().toLowerCase();
      setInput(""); 

      const newHistory: CommandDisplay[] = [...history, { type: "input", text: `guest@mrbrad:~$ ${command}` }];

      switch (command) {
        case "help":
          newHistory.push({ type: "output", text: "Comandos disponibles: about, skills, clear, sudo" });
          break;
        case "about":
          newHistory.push({ type: "output", text: "Soy un Full-Stack Developer al que le encanta construir cosas épicas y el color azul 💙." });
          break;
        case "skills":
          newHistory.push({ type: "output", text: "[ React, Next.js, Node.js, Tailwind, Git ]" });
          break;
        case "clear":
          setHistory([]);
          return;
        case "sudo":
          newHistory.push({ type: "error", text: "Permiso denegado. ¡Buen intento hacker! 🕵️‍♂️" });
          break;
        case "":
          break; 
        default:
          newHistory.push({ type: "error", text: `bash: ${command}: orden no encontrada` });
      }

      setHistory(newHistory);
    }
  };

  return (
    <section className="w-full max-w-4xl px-6 mx-auto mb-24">
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-8 text-center sm:text-left flex flex-col items-center sm:items-start"
      >
        <h2 className="text-3xl font-bold md:text-5xl text-zinc-900 dark:text-white flex items-center gap-3">
          Terminal <span className="text-transparent bg-clip-text bg-linear-to-r from-green-500 to-emerald-600 dark:from-green-400 dark:to-emerald-600">Interactiva</span>
        </h2>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-2xl">
          ¿Te sientes con alma de hacker hoy? Prueba a interactuar con mi portafolio usando esta consola. 
          Haz clic en la ventana de abajo, escribe <code className="bg-zinc-200 dark:bg-zinc-800 px-2 py-0.5 rounded text-green-700 dark:text-green-400 font-mono text-sm">help</code> y presiona Enter para descubrir los comandos ocultos.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#1e1e1e] shadow-2xl overflow-hidden"
      >
        <div className="flex items-center justify-between px-4 py-3 bg-zinc-100 dark:bg-[#2d2d2d] border-b border-zinc-200 dark:border-zinc-800">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF4136] shadow-sm"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFDC00] shadow-sm"></div>
            <div className="w-3 h-3 rounded-full bg-[#2ECC40] shadow-sm"></div>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
            <TerminalIcon className="w-3 h-3" /> guest@mrbrad ~
          </div>
          <div className="w-12"></div>
        </div>

        {/* 3. CAMBIO AQUÍ: Añadimos el ref al contenedor que tiene el overflow-y-auto */}
        <div 
          ref={terminalContainerRef}
          className="p-4 h-80 overflow-y-auto font-mono text-sm bg-zinc-50 dark:bg-[#1e1e1e] scroll-smooth" 
          onClick={() => document.getElementById("terminal-input")?.focus()}
        >
          
          {history.map((line, i) => (
            <div 
              key={i} 
              className={`mb-2 ${line.type === 'error' ? 'text-red-500' : line.type === 'input' ? 'text-blue-600 dark:text-blue-400' : 'text-zinc-700 dark:text-zinc-300'}`}
            >
              {line.text}
            </div>
          ))}

          <div className="flex items-center text-zinc-700 dark:text-zinc-300 pb-2">
            <span className="mr-2 text-green-600 dark:text-green-400">guest@mrbrad:~$</span>
            <input
              id="terminal-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              autoComplete="off"
              spellCheck="false"
              className="flex-1 bg-transparent outline-none border-none focus:ring-0 text-zinc-900 dark:text-zinc-100"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}