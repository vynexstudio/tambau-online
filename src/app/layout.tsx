import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import React from "react";
import { Search, Menu, MessageCircle, AlertCircle, Phone, Mail, MapPin } from "lucide-react";

// Fonte moderna estilo portal de notícias (globo.com)
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "TAMBAÚ ONLINE - Informação que conecta Tambaú",
  description: "O portal oficial de notícias, guia comercial, empregos, classificados e eventos de Tambaú, SP.",
};

const CATEGORIES = [
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
  { name: "Obituário", href: "/obituario" },
  { name: "Classificados", href: "/classificados" },
  { name: "Guia Comercial", href: "/guia-comercial" },
  { name: "Empregos", href: "/empregos" },
  { name: "Anuncie", href: "/anuncie" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col justify-between antialiased">
        
        {/* 1. TICKER DE PLANTÃO ARREDONDADO */}
        <div className="bg-[#FF0808] text-white py-2 px-4 text-xs font-bold uppercase tracking-wide flex items-center shadow-sm">
          <div className="container mx-auto flex items-center gap-3 overflow-hidden">
            <span className="bg-white text-[#FF0808] px-3 py-1 rounded-full text-[11px] font-black animate-pulse flex items-center gap-1 shrink-0 shadow-sm">
              <AlertCircle size={13} /> PLANTÃO
            </span>
            <div className="overflow-hidden w-full relative">
              <div className="animate-marquee whitespace-nowrap flex gap-8 font-semibold text-xs">
                <span>🔴 Defesa Civil emite alerta para chuvas fortes na região de Tambaú</span>
                <span>•</span>
                <span>🔴 Obras na Praça Central entram na fase final de pavimentação</span>
                <span>•</span>
                <span>🔴 Inscrições abertas para novos cursos profissionalizantes na cidade</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. HEADER COM A SUA LOGO GRANDE */}
        <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 py-4 px-4 sticky top-0 z-40 shadow-sm transition-all">
          <div className="container mx-auto flex items-center justify-between gap-6">
            
            {/* LOGO OFICIAL EM DESTAQUE */}
            <a href="/" className="flex items-center group shrink-0 py-1">
              <img
                src="/logo.png"
                alt="Tambaú Online"
                className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-transform group-hover:scale-105 duration-300"
              />
            </a>

            {/* BUSCA E BOTÕES ARREDONDADOS (ESTILO GLOBO.COM) */}
            <div className="hidden lg:flex items-center gap-4">
              <form action="/#noticias" className="relative">
                <input
                  type="text"
                  placeholder="Buscar no Tambaú Online..."
                  className="bg-gray-100 text-xs font-medium rounded-full py-2.5 pl-5 pr-10 border border-transparent focus:border-[#0808F5] focus:bg-white outline-none w-72 transition-all shadow-inner"
                />
                <button type="submit" className="absolute right-3.5 top-3 text-gray-400 hover:text-[#0808F5]">
                  <Search size={16} />
                </button>
              </form>

              <a
                href="/envie-noticia"
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold px-5 py-2.5 rounded-full text-xs transition uppercase tracking-wider"
              >
                Envie Notúncia
              </a>

              <a
                href="/anuncie"
                className="bg-[#FF0808] hover:bg-red-700 text-white font-extrabold px-6 py-2.5 rounded-full text-xs transition uppercase tracking-wider shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Anuncie
              </a>
            </div>

            {/* MENU MOBILE */}
            <div className="lg:hidden flex items-center gap-2">
              <a href="/anuncie" className="bg-[#FF0808] text-white text-xs font-bold px-4 py-2 rounded-full uppercase shadow">
                Anuncie
              </a>
              <button className="text-gray-800 p-2 rounded-full bg-gray-100">
                <Menu size={22} />
              </button>
            </div>

          </div>
        </header>

        {/* 3. MENU DE NAVEGAÇÃO */}
        <nav className="bg-[#0808F5] text-white shadow-md sticky top-[88px] sm:top-[104px] z-30 overflow-x-auto scrollbar-none">
          <div className="container mx-auto flex items-center whitespace-nowrap text-[12px] font-bold tracking-wide">
            {CATEGORIES.map((cat, idx) => (
              <a
                key={idx}
                href={cat.href}
                className={`py-3.5 px-4.5 hover:bg-blue-800 transition-colors flex items-center gap-1 shrink-0 ${
                  idx === 0 ? "bg-blue-900" : ""
                }`}
              >
                {cat.name}
              </a>
            ))}
          </div>
        </nav>

        {/* 4. CONTEÚDO */}
        <div className="flex-grow">{children}</div>

        {/* 5. WHATSAPP FLUTUANTE ARREDONDADO */}
        <a
          href="https://wa.me/5519999999999?text=Olá,%20gostaria%20de%20falar%20com%20o%20Tambaú%20Online"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl z-50 flex items-center justify-center transition-all transform hover:scale-110 border-2 border-white"
          title="Fale Conosco pelo WhatsApp"
        >
          <MessageCircle size={30} />
        </a>

        {/* 6. FOOTER MODERNO */}
        <footer className="bg-[#121214] text-white border-t-4 border-[#0808F5] mt-20 rounded-t-3xl">
          <div className="container mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10 text-xs">
            
            <div className="space-y-4">
              <img src="/logo.png" alt="Tambaú Online" className="h-20 w-auto object-contain brightness-0 invert" />
              <p className="text-gray-400 leading-relaxed font-normal">
                O portal oficial de informação, serviços, classificados e notícias de Tambaú, São Paulo.
              </p>
            </div>

            <div>
              <h4 className="font-extrabold text-sm uppercase text-white mb-4 border-b border-gray-800 pb-2">
                Editorias
              </h4>
              <ul className="space-y-2.5 text-gray-400 font-medium">
                <li><a href="/#cidade" className="hover:text-white transition">Cidade & Cotidiano</a></li>
                <li><a href="/#politica" className="hover:text-white transition">Política Local</a></li>
                <li><a href="/#seguranca" className="hover:text-white transition">Segurança Pública</a></li>
                <li><a href="/#esportes" className="hover:text-white transition">Esportes Regional</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-extrabold text-sm uppercase text-white mb-4 border-b border-gray-800 pb-2">
                Serviços
              </h4>
              <ul className="space-y-2.5 text-gray-400 font-medium">
                <li><a href="/guia-comercial" className="hover:text-white transition">Guia Comercial</a></li>
                <li><a href="/obituario" className="hover:text-white transition">Obituário</a></li>
                <li><a href="/classificados" className="hover:text-white transition">Classificados</a></li>
                <li><a href="/empregos" className="hover:text-white transition">Vagas de Emprego</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-extrabold text-sm uppercase text-white mb-4 border-b border-gray-800 pb-2">
                Contato
              </h4>
              <div className="text-gray-400 space-y-2.5 font-medium">
                <p className="flex items-center gap-2"><MapPin size={14} className="text-[#FF0808]" /> Tambaú, SP</p>
                <p className="flex items-center gap-2"><Mail size={14} className="text-[#0808F5]" /> redacao@tambauonline.com.br</p>
                <p className="flex items-center gap-2"><Phone size={14} className="text-emerald-500" /> (19) 99999-9999</p>
              </div>
            </div>

          </div>

          <div className="bg-[#0A0A0B] py-6 text-center text-gray-500 text-[11px] border-t border-gray-800/60">
            <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
              <p>© {new Date().getFullYear()} TAMBAÚ ONLINE - Todos os direitos reservados.</p>
              <p className="font-semibold text-gray-400">Informação que conecta Tambaú.</p>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
