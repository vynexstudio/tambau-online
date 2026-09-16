import React from 'react';
import { Cross, ArrowRight, Building2, Briefcase, Sparkles, TrendingUp } from 'lucide-react';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 space-y-10">
      
      {/* BANNER PUBLICITÁRIO ARREDONDADO */}
      <div className="w-full bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Publicidade Patrocinada</span>
        <div className="w-full h-28 bg-gradient-to-r from-blue-900 via-blue-700 to-indigo-900 rounded-xl flex items-center justify-between px-8 text-white shadow-inner">
          <div>
            <span className="bg-[#FF0808] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">Super Oferta</span>
            <h4 className="text-lg sm:text-xl font-extrabold mt-1">Sua Empresa em Destaque no Tambaú Online</h4>
            <p className="text-xs text-blue-100 font-medium hidden sm:block">Alcance milhares de moradores de Tambaú diariamente.</p>
          </div>
          <a href="/anuncie" className="bg-[#FF0808] hover:bg-red-700 text-white text-xs font-black px-5 py-2.5 rounded-full transition shadow-md hover:scale-105">
            ANUNCIAR AGORA
          </a>
        </div>
      </div>

      {/* BLOCO PRINCIPAL: MATÉRIA EM DESTAQUE COM CANTOS ARREDONDADOS */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Notícia Principal (8 Cols) */}
        <div className="lg:col-span-8 bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group">
          <div className="relative h-[360px] sm:h-[460px] bg-gray-900 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80" 
              alt="Obras de Revitalização"
              className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute top-5 left-5 flex gap-2">
              <span className="bg-[#0808F5] text-white text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow">
                CIDADE
              </span>
              <span className="bg-[#FF0808] text-white text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow animate-pulse">
                DESTAQUE
              </span>
            </div>
            <div className="absolute bottom-8 left-6 right-6 sm:left-8 sm:right-8 text-white space-y-3">
              <div className="flex items-center gap-3 text-xs text-gray-300 font-medium">
                <span>Por Redação Tambaú</span>
                <span>•</span>
                <span>Hoje às 09:42</span>
              </div>
              <a href="/noticias/obras-praca-central" className="block">
                <h1 className="text-2xl sm:text-4xl font-extrabold leading-tight hover:text-blue-200 transition-colors">
                  Obras de revitalização da Praça Central entram na fase final em Tambaú
                </h1>
              </a>
              <p className="text-sm text-gray-200 line-clamp-2 font-normal hidden sm:block">
                O novo projeto contempla iluminação em LED, piso tátil de acessibilidade, playground infantil reformado e espaço para feiras de artesanato local.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Notícias Secundárias com Cards Arredondados */}
        <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {[
            { cat: "SEGURANÇA", title: "Polícia Militar reforça patrulhamento ostensivo na área comercial", time: "09:15" },
            { cat: "ESPORTES", title: "Campeonato Amador de Futebol começa neste domingo no Estádio Municipal", time: "08:37" },
            { cat: "SAÚDE", title: "Campanha de vacinação atende em todos os postos de saúde da cidade", time: "Ontem" },
            { cat: "EDUCAÇÃO", title: "Escolas da rede municipal recebem novos computadores e notebooks", time: "Ontem" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:border-[#0808F5] hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center text-[11px] font-black mb-2">
                  <span className="text-[#0808F5] uppercase tracking-wider">{item.cat}</span>
                  <span className="text-gray-400 font-semibold">{item.time}</span>
                </div>
                <a href="/noticias/exemplo" className="font-bold text-[#1A1A1A] text-sm leading-snug hover:text-[#0808F5] transition line-clamp-2">
                  {item.title}
                </a>
              </div>
              <a href="/noticias/exemplo" className="text-[11px] font-extrabold text-[#0808F5] uppercase mt-3 flex items-center gap-1 hover:underline">
                Ler matéria <ArrowRight size={12} />
              </a>
            </div>
          ))}
        </div>

      </section>

      {/* LINHA DO TEMPO E SIDEBAR */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Feed de Últimas Notícias (8 Cols) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-black text-[#0808F5] border-b-2 border-blue-50 pb-3 mb-6 uppercase tracking-wider flex items-center justify-between">
              <span className="flex items-center gap-2"><TrendingUp size={20} /> Últimas Notícias</span>
              <span className="text-xs font-normal text-gray-400">Atualizado continuamente</span>
            </h2>

            <div className="divide-y divide-gray-100">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="py-4 flex flex-col sm:flex-row gap-5 items-start hover:bg-gray-50/80 p-3 rounded-2xl transition-all duration-200">
                  <div className="w-full sm:w-44 h-28 bg-gray-200 rounded-2xl overflow-hidden shrink-0 shadow-sm">
                    <img 
                      src={`https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80`} 
                      alt="Notícia"
                      className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    />
                  </div>
                  <div className="flex-grow space-y-1.5">
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="font-black text-[#FF0808]">0{item}:20</span>
                      <span>•</span>
                      <span className="font-extrabold text-[#0808F5] uppercase">Região</span>
                    </div>
                    <a href="/noticias/exemplo">
                      <h3 className="font-extrabold text-[#1A1A1A] text-base hover:text-[#0808F5] transition leading-snug">
                        Prefeitura anuncia novos recursos para estradas rurais e escoamento agrícola
                      </h3>
                    </a>
                    <p className="text-xs text-gray-500 line-clamp-2 font-normal">
                      Investimento visa melhorar o acesso dos produtores rurais e transportar a produção local com segurança.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SIDEBAR COM WIDGETS ARREDONDADOS */}
        <aside className="lg:col-span-4 space-y-6">
          
          {/* MÓDULO OBITUÁRIO */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-4">
              <h3 className="font-black text-sm text-[#1A1A1A] uppercase tracking-wider flex items-center gap-2">
                <Cross size={18} className="text-[#0808F5]" /> Obituário
              </h3>
              <a href="/obituario" className="text-[11px] font-bold text-[#0808F5] uppercase hover:underline">Ver Todos</a>
            </div>
            <div className="bg-gray-50/80 p-4 rounded-2xl border border-gray-100 text-xs">
              <p className="font-extrabold text-gray-900 text-sm">Maria Aparecida Silva</p>
              <p className="text-gray-500 text-[11px] mt-0.5">74 anos • Falecida ontem</p>
              <div className="mt-3 text-[11px] text-gray-700 space-y-1 border-t border-gray-200/60 pt-2.5">
                <p><strong>Velório:</strong> Velório Municipal de Tambaú</p>
                <p><strong>Sepultamento:</strong> Hoje às 16:00h no Cemitério Local</p>
              </div>
            </div>
          </div>

          {/* GUIA COMERCIAL */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-4">
              <h3 className="font-black text-sm text-[#1A1A1A] uppercase tracking-wider flex items-center gap-2">
                <Building2 size={18} className="text-[#0808F5]" /> Guia Comercial
              </h3>
              <a href="/guia-comercial" className="text-[11px] font-bold text-[#0808F5] uppercase hover:underline">Ver Guia</a>
            </div>
            <div className="p-3.5 border rounded-2xl flex items-center justify-between bg-gray-50/80 border-gray-100">
              <div>
                <span className="text-[9px] font-black text-[#FF0808] uppercase tracking-wider">Patrocinado</span>
                <p className="font-bold text-xs text-gray-900">Supermercado Tambaú</p>
                <p className="text-[11px] text-gray-500">Rua Dr. Alfredo, 120 - Centro</p>
              </div>
              <a href="/guia-comercial" className="text-xs bg-[#0808F5] text-white px-3 py-1.5 rounded-full font-bold shadow-sm">Ver</a>
            </div>
          </div>

        </aside>

      </section>

      {/* BLOCO NEWSLETTER ARREDONDADO */}
      <section className="bg-gradient-to-br from-[#0808F5] to-blue-900 text-white p-10 rounded-3xl shadow-lg text-center max-w-4xl mx-auto">
        <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-wide">
          RECEBA AS PRINCIPAIS NOTÍCIAS DE TAMBAÚ
        </h3>
        <p className="text-xs sm:text-sm text-blue-100 mt-2 max-w-xl mx-auto font-medium">
          Fique por dentro do que acontece na cidade diretamente no seu e-mail. Cadastro rápido e gratuito.
        </p>
        <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Seu Nome"
            className="px-5 py-3 rounded-full text-xs text-gray-900 outline-none flex-1 font-medium shadow-inner"
            required
          />
          <input
            type="email"
            placeholder="Seu E-mail"
            className="px-5 py-3 rounded-full text-xs text-gray-900 outline-none flex-1 font-medium shadow-inner"
            required
          />
          <button
            type="submit"
            className="bg-[#FF0808] hover:bg-red-700 text-white font-extrabold px-8 py-3 rounded-full text-xs uppercase tracking-wider transition shadow-md hover:scale-105"
          >
            CADASTRAR
          </button>
        </form>
      </section>

    </main>
  );
}
