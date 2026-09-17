"use client"

import { Menu, Search, X } from "lucide-react"
import { useState } from "react"

const categoryLinks = [
  { name: "Início", href: "/" },
  { name: "Notícias", href: "/noticias" },
  { name: "Cidade", href: "/categoria/cidade" },
  { name: "Política", href: "/categoria/politica" },
  { name: "Segurança", href: "/categoria/seguranca" },
  { name: "Esportes", href: "/categoria/esportes" },
  { name: "Saúde", href: "/categoria/saude" },
  { name: "Educação", href: "/categoria/educacao" },
]

const serviceLinks = [
  { name: "Eventos", href: "/eventos" },
  { name: "Empregos", href: "/empregos" },
  { name: "Obituário", href: "/obituario" },
  { name: "Classificados", href: "/classificados" },
  { name: "Guia Comercial", href: "/guia-comercial" },
  { name: "Envie uma Notícia", href: "/envie-noticia" },
]

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-40 border-b border-blue-700 bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex min-h-[64px] items-center justify-between gap-4 px-4 sm:px-6">
        <a href="/" onClick={closeMenu} className="shrink-0 rounded-lg py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
          <img src="/logo.png" alt="Tambaú Online" className="h-10 w-auto object-contain sm:h-12" />
        </a>

        <nav aria-label="Navegação principal" className="hidden flex-1 items-center justify-center gap-0.5 lg:flex">
          {categoryLinks.map((link) => (
            <a key={link.name} href={link.href} className="rounded-full px-3 py-2 text-[11px] font-black uppercase tracking-wide transition hover:bg-blue-700">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a href="/anuncie" className="hidden rounded-full bg-red-500 px-4 py-2.5 text-[10px] font-black uppercase tracking-wide text-white shadow-sm transition hover:bg-red-600 sm:inline-flex">Anuncie</a>
          <button type="button" aria-expanded={isOpen} aria-controls="mobile-menu" aria-label={isOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setIsOpen((open) => !open)} className="inline-flex size-10 items-center justify-center rounded-full bg-blue-700 text-white transition hover:bg-blue-800 lg:hidden">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div id="mobile-menu" className="border-t border-blue-700 bg-blue-700 py-4">
          <nav aria-label="Navegação móvel" className="container mx-auto grid grid-cols-2 gap-1 px-4 sm:grid-cols-3">
            {categoryLinks.concat(serviceLinks).map((link) => (
              <a key={link.name} href={link.href} onClick={closeMenu} className="rounded-lg px-3 py-3 text-xs font-bold uppercase tracking-wide hover:bg-blue-800 transition">
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

