import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { Search, Menu, MessageCircle, AlertCircle, Phone, Mail, MapPin, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "TAMBAÚ ONLINE - Informação que conecta Tambaú",
  description: "O portal oficial de notícias, guia comercial, empregos, classificados, eventos e obituário de Tambaú, SP.",
};

const CATEGORIES = [
  { name: "INÍCIO", href: "/" },
  { name: "NOTÍCIAS", href: "/#noticias" },
  { name: "CIDADE", href: "/#cidade" },
  { name: "POLÍTICA", href: "/#politica" },
  { name: "SEGURANÇA", href: "/#seguranca" },
  { name: "ESPORTES", href: "/#esportes" },
  { name: "SAÚDE", href: "/#saude" },
  { name: "EDUCAÇÃO", href: "/#educacao" },
  { name: "EVENTOS", href: "/eventos" },
  { name: "REGIÃO", href: "/#regiao" },
  { name: "OBITUÁRIO", href: "/obituario" },
  { name: "CLASSIFICADOS", href: "/classificados" },
  { name: "GUIA COMERCIAL", href: "/guia-comercial" },
  { name: "EMPREGOS", href: "/empregos" },
  { name: "ANUNCIE", href: "/anuncie" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="min-h-screen flex flex-col justify-between">
        
        {/* 1. BARRA DE PLANTÃO / ÚLTIMAS NOTÍCIAS */}
        <div className="bg-[#FF0808] text-white py-1.5 px-4 text-xs font-bold uppercase tracking-wide flex items-center shadow-inner z-50">
          <div className="container mx-auto flex items-center gap-3 overflow-hidden">
            <span className="bg-white text-[#FF0808] px-2 py-0.5 rounded text-[11px] font-black animate-pulse flex items-center gap-1 shrink-0">
              <AlertCircle size={13} /> PLANTÃO
            </span>
            <div className="overflow-hidden w-full relative">
              <div className="animate-marquee whitespace-nowrap flex gap-8">
                <span>🔴 Defesa Civil emite alerta para chuvas fortes na região de Tambaú</span>
                <span>•</span>
                <span>🔴 Obras na Praça Central entram na fase final de pavimentação</span>
                <span>•</span>
                <span>🔴 Inscrições abertas para novos cursos profissionalizantes na cidade</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. HEADER PRINCIPAL */}
        <header className="bg-white border-b border-gray-200 py-3 px-4 sticky top-0 z-40 shadow-sm">
          <div className="container mx-auto flex items-center justify-between gap-4">
            
            {/* LOGOTIPO OFICIAL TAMBAÚ ONLINE */}
            <a href="/" className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center font-black">
                {/* Ícone estilizado T do Logo */}
                <div className="relative w-10 h-11 flex items-center justify-center">
                  <span className="absolute text-3xl font-black text-[#0808F5] -left-1 -top-1">T</span>
                  <span className="absolute text-3xl font-black text-[#FF0808] left-0 top-0">T</span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-2xl sm:text-3xl font-black tracking-tighter leading-none">
                  <span className="text-[#0808F5]">TAMBAÚ</span>{" "}
                  <span className="text-[#FF0808] italic">ONLINE</span>
                </div>
                <span className="text-[9px] sm:text-[10px] font-extrabold text-gray-500 uppercase tracking-widest mt-0.5">
                  Informação que conecta Tambaú
                </span>
              </div>
            </a>

            {/* BUSCA & BOTAO ANUNCIE (DESKTOP) */}
            <div className="hidden lg:flex items-center gap-4">
              <form action="/#noticias" className="relative">
                <input
                  type="text"
                  placeholder="Buscar notícias, guia, vagas..."
                  className="bg-[#F5F6F8] text-xs font-semibold rounded-full py-2 pl-4 pr-9 border border-gray-200 focus:border-[#0808F5] focus:bg-white outline-none w-64 transition"
                />
                <button type="submit" className="absolute right-3 top-2.5 text-gray-400 hover:text-[#0808F5]">
                  <Search size={15} />
                </button>
              </form>

              <a
                href="/envie-noticia"
                className="bg-[#0808F5] hover:bg-blue-800 text-white font-bold px-4 py-2 rounded-full text-xs transition uppercase tracking-wider"
              >
                ENVIO DE NOTÍCIA
              </a>

              <a
                href="/anuncie"
                className="bg-[#FF0808] hover:bg-red-700 text-white font-bold px-5 py-2 rounded-full text-xs transition uppercase tracking-wider shadow-md transform hover:scale-105"
              >
                ANUNCIE
              </a>
            </div>

            {/* MENU HAMBURGER (MOBILE) */}
            <div className="lg:hidden flex items-center gap-2">
              <a href="/anuncie" className="bg-[#FF0808] text-white text-[10px] font-bold px-3 py-1.5 rounded uppercase">
                Anuncie
              </a>
              <button className="text-[#222222] p-1 border rounded">
                <Menu size={24} />
              </button>
            </div>

          </div>
        </header>

        {/* 3. MENU PRINCIPAL (15 CATEGORIAS) */}
        <nav className="bg-[#0808F5] text-white shadow-md sticky top-[61px] z-30 overflow-x-auto scrollbar-none">
          <div className="container mx-auto flex items-center whitespace-nowrap text-[11px] font-bold uppercase tracking-wider">
            {CATEGORIES.map((cat, idx) => (
              <a
                key={idx}
                href={cat.href}
                className={`py-3 px-3.5 hover:bg-blue-900 transition border-r border-blue-700/40 flex items-center gap-1 shrink-0 ${
                  idx === 0 ? "bg-blue-900" : ""
                }`}
              >
                {cat.name}
              </a>
            ))}
          </div>
        </nav>

        {/* 4. CONTEÚDO DAS PÁGINAS */}
        <div className="flex-grow">{children}</div>

        {/* 5. BOTÃO FLUTUANTE DO WHATSAPP */}
        <a
          href="https://wa.me/5519999999999?text=Olá,%20gostaria%20de%20falar%20com%20o%20Tambaú%20Online"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-3.5 rounded-full shadow-2xl z-50 flex items-center justify-center transition transform hover:scale-110 border-2 border-white"
          title="Fale Conosco pelo WhatsApp"
        >
          <MessageCircle size={28} />
        </a>

        {/* 6. FOOTER COMPLETO */}
        <footer className="bg-[#222222] text-white border-t-4 border-[#0808F5] mt-16">
          <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-xs">
            
            {/* Sobre o Portal */}
            <div className="space-y-3">
              <div className="text-xl font-black tracking-tighter">
                <span className="text-white">TAMBAÚ</span> <span className="text-[#FF0808] italic">ONLINE</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                O portal oficial de informação, serviços, classificados e notícias de Tambaú, São Paulo. Jornalismo local com agilidade, ética e compromisso comunitário.
              </p>
              <div className="text-gray-400 space-y-1">
                <p className="flex items-center gap-2"><MapPin size={14} className="text-[#FF0808]" /> Tambaú, SP - CEP 13710-000</p>
                <p className="flex items-center gap-2"><Mail size={14} className="text-[#0808F5]" /> redacao@tambauonline.com.br</p>
                <p className="flex items-center gap-2"><Phone size={14} className="text-green-500" /> (19) 99999-9999</p>
              </div>
            </div>

            {/* Editoria */}
            <div>
              <h4 className="font-extrabold text-sm uppercase text-white mb-3 border-b border-gray-700 pb-1">
                Editorias
              </h4>
              <ul className="space-y-1.5 text-gray-300">
                <li><a href="/#cidade" className="hover:text-white transition">Cidade & Cotidiano</a></li>
                <li><a href="/#politica" className="hover:text-white transition">Política Local</a></li>
                <li><a href="/#seguranca" className="hover:text-white transition">Segurança Pública</a></li>
                <li><a href="/#esportes" className="hover:text-white transition">Esportes Regional</a></li>
                <li><a href="/#saude" className="hover:text-white transition">Saúde & Bem-estar</a></li>
                <li><a href="/#educacao" className="hover:text-white transition">Educação & Cultura</a></li>
              </ul>
            </div>

            {/* Serviços & Utilidade */}
            <div>
              <h4 className="font-extrabold text-sm uppercase text-white mb-3 border-b border-gray-700 pb-1">
                Serviços Locais
              </h4>
              <ul className="space-y-1.5 text-gray-300">
                <li><a href="/guia-comercial" className="hover:text-white transition">Guia Comercial de Tambaú</a></li>
                <li><a href="/obituario" className="hover:text-white transition">Obituário & Falecimentos</a></li>
                <li><a href="/classificados" className="hover:text-white transition">Classificados Gratuitos</a></li>
                <li><a href="/empregos" className="hover:text-white transition">Vagas de Emprego</a></li>
                <li><a href="/eventos" className="hover:text-white transition">Agenda de Eventos</a></li>
                <li><a href="/envie-noticia" className="hover:text-white transition">Envie sua Notúncia / Denúncia</a></li>
              </ul>
            </div>

            {/* Institucional & Comercial */}
            <div>
              <h4 className="font-extrabold text-sm uppercase text-white mb-3 border-b border-gray-700 pb-1">
                Comercial & Legal
              </h4>
              <ul className="space-y-1.5 text-gray-300">
                <li><a href="/anuncie" className="hover:text-white font-bold text-[#FF0808] transition">Anuncie Conosco</a></li>
                <li><a href="/sobre" className="hover:text-white transition">Sobre o Tambaú Online</a></li>
                <li><a href="/privacidade" className="hover:text-white transition">Política de Privacidade</a></li>
                <li><a href="/termos" className="hover:text-white transition">Termos de Uso</a></li>
                <li><a href="/admin" target="_blank" className="hover:text-white transition text-gray-500">Acesso Restrito CMS</a></li>
              </ul>
            </div>

          </div>

          <div className="bg-[#111111] py-4 text-center text-gray-500 text-[11px] border-t border-gray-800">
            <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
              <p>© {new Date().getFullYear()} TAMBAÚ ONLINE - Todos os direitos reservados.</p>
              <p>Slogan: "Informação que conecta Tambaú."</p>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
