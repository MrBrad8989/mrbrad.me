import { Github, Linkedin, Twitter, Mail, Terminal } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-black/20 backdrop-blur-sm py-8 transition-colors duration-300 relative z-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo / Marca */}
        <div className="flex items-center gap-2 text-zinc-900 dark:text-white font-bold">
          <Terminal className="h-5 w-5 text-blue-600 dark:text-cyan-500" />
          <span>MrBrad</span>
        </div>

        {/* Créditos y Tecnologías */}
        <div className="text-sm text-zinc-500 dark:text-zinc-400 text-center font-mono">
          <p>
            © {currentYear} Realizado por <b className="text-blue-500">MrBrad</b>.
          </p>
          <p className="mt-1 text-xs">
            Construido con <span className="text-blue-500 font-semibold">Next.js</span> y <span className="text-cyan-500 font-semibold">Tailwind CSS</span>
          </p>
        </div>

        {/* Redes Sociales */}
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/MrBrad8989" 
            target="_blank" 
            rel="noreferrer" 
            className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all"
            title="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a 
            href="https://linkedin.com/in/tu-perfil" 
            target="_blank" 
            rel="noreferrer" 
            className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all"
            title="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a 
            href="https://twitter.com/tu-usuario" 
            target="_blank" 
            rel="noreferrer" 
            className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all"
            title="Twitter / X"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a 
            href="mailto:tu-correo@ejemplo.com" 
            className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/30 transition-all"
            title="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

      </div>
    </footer>
  );
}