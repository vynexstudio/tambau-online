"use client"

import { Menu, Search, X } from "lucide-react"
import { useState } from "react"

const primaryLinks = [
  { name: "Início", href: "/" },
  { name: "Notícias", href: "/#noticias" },
  { name: "Cidade", href: "/#cidade" },
  { name: "Política", href: "/#politica" },
  { name: "Segurança", href: "/#seguranca" },
  { name: "Esportes", href: "/#esportes" },
  { name: "Saúde", href: "/#saude" },
  { name: "Educação", href: "/#educacao" },
  { name: "Eventos", href: "/eventos" },
  { name: "Região", href: "/#regiao" },
]

const serviceLinks = [
  { name: "Obituário", href: "/obituario" },
  { name: "Classificados", href: "/classificados" },
  { name: "Guia Comercial", href: "/guia-comercial" },
  { name: "Empregos", href: "/empregos" },
]

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 px-4 shadow-sm backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/95 sm:px-6">
        <div className="container mx-auto flex min-h-[76px] items-center justify-between gap-3">
          <a href="/" onClick={closeMenu} className="shrink-0 rounded-lg py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
            <img src="/logo.png" alt="Tambaú Online" className="h-12 w-auto object-contain sm:h-14" />
          </a>

          <nav aria-label="Navegação principal" className="hidden min-w-0 flex-1 items-center justify-center gap-1 lg:flex">
            {primaryLinks.slice(0, 7).map((link) => (
              <a key={link.name} href={link.href} className="rounded-full px-3 py-2 text-[11px] font-extrabold text-slate-600 transition hover:bg-blue-50 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-300">
                {link.name}
              </a>
            ))}
            <details className="relative">
              <summary className="cursor-pointer list-none rounded-full px-3 py-2 text-[11px] font-extrabold text-slate-600 transition hover:bg-blue-50 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-300">Mais</summary>
              <div className="absolute right-0 top-11 grid min-w-44 gap-1 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl dark:border-slate-700 dark:bg-slate-900">
                {primaryLinks.slice(7).concat(serviceLinks).map((link) => (
                  <a key={link.name} href={link.href} className="rounded-xl px-3 py-2 text-xs font-bold text-slate-600 hover:bg-blue-50 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-300">{link.name}</a>
                ))}
              </div>
            </details>
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <form action="/#noticias" className="relative hidden xl:block">
              <label htmlFor="site-search" className="sr-only">Buscar no Tambaú Online</label>
              <input id="site-search" type="search" placeholder="Buscar notícias" className="h-10 w-44 rounded-full border border-slate-200 bg-slate-50 px-4 pr-10 text-xs font-medium outline-none transition focus:border-blue-500 focus:bg-white dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:bg-slate-800" />
              <button type="submit" aria-label="Buscar" className="absolute right-3 top-3 text-slate-400 hover:text-blue-600"><Search data-icon="inline-start" /></button>
            </form>
            <a href="/anuncie" className="hidden rounded-full bg-red-500 px-4 py-2.5 text-[10px] font-black uppercase tracking-wide text-white shadow-sm transition hover:bg-red-600 sm:inline-flex">Anuncie</a>
            <button type="button" aria-expanded={isOpen} aria-controls="mobile-menu" aria-label={isOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setIsOpen((open) => !open)} className="inline-flex size-10 items-center justify-center rounded-full bg-slate-100 text-slate-800 transition hover:bg-blue-100 hover:text-blue-700 lg:hidden dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700">
              {isOpen ? <X data-icon="inline-start" /> : <Menu data-icon="inline-start" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div id="mobile-menu" className="border-t border-slate-100 py-4 lg:hidden dark:border-slate-800">
            <nav aria-label="Navegação móvel" className="container mx-auto grid grid-cols-2 gap-1 sm:grid-cols-3">
              {primaryLinks.concat(serviceLinks).map((link) => (
                <a key={link.name} href={link.href} onClick={closeMenu} className="rounded-xl px-3 py-3 text-xs font-extrabold text-slate-700 hover:bg-blue-50 hover:text-blue-700 dark:text-slate-200 dark:hover:bg-slate-800">{link.name}</a>
              ))}
              <a href="/envie-noticia" onClick={closeMenu} className="rounded-xl bg-slate-100 px-3 py-3 text-xs font-extrabold text-slate-700 dark:bg-slate-800 dark:text-slate-200">Envie uma notícia</a>
              <a href="/anuncie" onClick={closeMenu} className="rounded-xl bg-red-500 px-3 py-3 text-xs font-extrabold text-white">Anuncie</a>
            </nav>
          </div>
        )}
      </header>

      <nav aria-label="Atalhos de editorias" className="sticky top-[76px] z-30 hidden border-b border-blue-700 bg-blue-600 text-white shadow-sm lg:block">
        <div className="container mx-auto flex items-center justify-center gap-1 overflow-x-auto px-4 scrollbar-none">
          {primaryLinks.map((link, index) => (
            <a key={link.name} href={link.href} className={`shrink-0 px-3 py-2.5 text-[10px] font-black uppercase tracking-wide transition hover:bg-blue-700 ${index === 0 ? "bg-blue-700" : ""}`}>{link.name}</a>
          ))}
        </div>
      </nav>
    </>
  )
}

