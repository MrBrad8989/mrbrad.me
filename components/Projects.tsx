"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";
import { useEffect, useState } from "react";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  topics: string[];
  stargazers_count: number;
  fork: boolean;
}

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/MrBrad8989/repos?sort=updated&per_page=10");
        const data = await response.json();
        const myRepos = data.filter((repo: Repo) => !repo.fork);
        setRepos(myRepos.slice(0, 6));
      } catch (error) {
        console.error("Error al cargar los repositorios:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  return (
    <section id="proyectos" className="w-full max-w-6xl py-24 px-6 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold md:text-5xl text-zinc-900 dark:text-white">
          Mis <span className="text-transparent bg-clip-text bg-linear-to-r from-green-500 to-emerald-600 dark:from-green-400 dark:to-emerald-600">Proyectos</span>
        </h2>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          Proyectos extraídos automáticamente y en tiempo real desde mi GitHub.
        </p>
      </motion.div>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-green-500 border-t-transparent"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo, index) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col justify-between rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-6 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 shadow-sm dark:shadow-none"
            >
              <div className="absolute inset-0 -z-10 rounded-2xl bg-linear-to-br from-green-500/5 to-purple-500/5 opacity-0 transition-opacity group-hover:opacity-100" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                  </div>
                  {repo.stargazers_count > 0 && (
                    <div className="flex items-center gap-1 text-xs text-yellow-600 dark:text-yellow-500">
                      <Star className="h-3 w-3 fill-current" /> {repo.stargazers_count}
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2 truncate" title={repo.name}>
                  {repo.name}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 line-clamp-3">
                  {repo.description || "Sin descripción disponible en GitHub."}
                </p>
                
                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {repo.topics.slice(0, 4).map((topic) => (
                      <span key={topic} className="rounded-md bg-zinc-100 dark:bg-zinc-800 px-2 py-1 text-xs text-zinc-700 dark:text-zinc-300 font-mono">
                        {topic}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800/50">
                <a href={repo.html_url} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-white">
                  <Github className="h-4 w-4" /> Repo
                </a>
                {repo.homepage && (
                  <a href={repo.homepage} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 transition-colors hover:text-green-600 dark:hover:text-green-400">
                    <ExternalLink className="h-4 w-4" /> Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}