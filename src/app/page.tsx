import React from 'react';
import { Eye, Calendar, MapPin, Building2, Briefcase, Cross, ArrowRight, Send, CheckCircle2, Star, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-6 space-y-10">
      
      {/* 1. BANNER PUBLICITÁRIO DE TOPO */}
      <div className="w-full bg-white p-2 rounded shadow-sm border border-gray-200 flex flex-col items-center justify-center">
        <span className="text-[9px] font-bold text-gray-400 uppercase mb-1">Publicidade Patrocinada</span>
        <div className="w-full h-24 bg-gradient-to-r from-blue-900 via-blue-700 to-indigo-900 rounded flex items-center justify-between px-6 text-white">
          <div>
            <span className="bg-[#FF0808] text-[10px] font-black px-2 py-0.5 rounded uppercase">Super Oferta</span>
            <h4 className="text-lg font-black mt-1">Sua Empresa em Destaque no Tambaú Online</h4>
            <p className="text-xs text-blue-100">Alcance milhares de moradores de Tambaú diariamente.</p>
          </div>
          <a href="/anuncie" className="hidden sm:inline-block bg-[#FF0808] hover:bg-red-700 text-white text-xs font-bold px-4 py-2 rounded transition">
            ANUNCIAR AGORA
          </a>
        </div>
      </div>

      {/* 2. PRIMEIRO BLOCO: DESTAQUES (1 Notúncia Principal + 4 Secundárias) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Notícia Principal Grande (8 Cols) */}
        <div className="lg:col-span-8 bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 group">
          <div className="relative h-[340px] sm:h-[420px] bg-gray-900 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80" 
              alt="Obras de Revitalização"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="bg-[#0808F5] text-white text-xs font-black px-3 py-1 rounded uppercase tracking-wider">
                CIDADE
              </span>
              <span className="bg-[#FF0808] text-white text-xs font-black px-3 py-1 rounded uppercase tracking-wider animate-pulse">
                DESTAQUE
              </span>
            </div>
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
              <div className="flex items-center gap-3 text-xs text-gray-300">
                <span>Por Redação Tambaú</span>
                <span>•</span>
                <span>Hoje às 09:42</span>
              </div>
              <a href="/noticias/obras-praca-central" className="block">
                <h1 className="text-2xl sm:text-3xl font-black leading-tight hover:text-blue-300 transition">
                  Obras de revitalização da Praça Central entram na fase final em Tambaú
                </h1>
              </a>
              <p className="text-sm text-gray-200 line-clamp-2 hidden sm:block">
                O novo projeto contempla iluminação em LED, piso tátil de acessibilidade, playground infantil reformado e espaço para feiras de artesanato local.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Notícias Secundárias (4 Cols) */}
        <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {[
            { cat: "SEGURANÇA", title: "Polícia Militar reforça patrulhamento ostensivo na área comercial", time: "09:15" },
            { cat: "ESPORTES", title: "Campeonato Amador de Futebol começa neste domingo no Estádio Municipal", time: "08:37" },
            { cat: "SAÚDE", title: "Campanha de vacinação atende em todos os postos de saúde da cidade", time: "Ontem" },
            { cat: "EDUCAÇÃO", title: "Escolas da rede municipal recebem novos computadores e notebooks", time: "Ontem" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:border-[#0808F5] transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center text-[11px] font-extrabold mb-1.5">
                  <span className="text-[#0808F5] uppercase">{item.cat}</span>
                  <span className="text-gray-400 font-normal">{item.time}</span>
                </div>
                <a href="/noticias/exemplo" className="font-bold text-[#222222] text-xs leading-snug hover:text-[#0808F5] transition line-clamp-2">
                  {item.title}
                </a>
              </div>
              <a href="/noticias/exemplo" className="text-[10px] font-bold text-[#0808F5] uppercase mt-3 flex items-center gap-1 hover:underline">
                Ler matéria <ArrowRight size={10} />
              </a>
            </div>
          ))}
        </div>

      </section>

      {/* 3. TIMELINE: ÚLTIMAS NOTÍCIAS + SIDEBAR */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Feed de Últimas Notícias (8 Cols) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-base font-black text-[#0808F5] border-b-2 border-[#0808F5] pb-2 mb-4 uppercase tracking-wider flex items-center justify-between">
              <span>Últimas Notícias</span>
              <span className="text-xs font-normal text-gray-500">Atualizado continuamente</span>
            </h2>

            <div className="divide-y divide-gray-100">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="py-4 flex flex-col sm:flex-row gap-4 items-start hover:bg-gray-50 p-2 rounded transition">
                  <div className="w-full sm:w-36 h-24 bg-gray-200 rounded overflow-hidden shrink-0">
                    <img 
                      src={`https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=300&q=80`} 
                      alt="Thumbnail"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                      <span className="font-extrabold text-[#FF0808]">0{item}:20</span>
                      <span>•</span>
                      <span className="font-bold text-[#0808F5] uppercase">Região</span>
                    </div>
                    <a href="/noticias/exemplo">
                      <h3 className="font-bold text-[#222222] text-sm hover:text-[#0808F5] transition leading-snug">
                        Prefeitura anuncia novos recursos para estradas rurais e escoamento agrícola
                      </h3>
                    </a>
                    <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                      Investimento visa melhorar o acesso dos produtores rurais e transportar a produção local com segurança.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PUBLICIDADE ENTRE NOTÍCIAS */}
          <div className="w-full bg-white p-4 rounded border border-gray-200 text-center">
            <span className="text-[9px] font-bold text-gray-400 uppercase block mb-1">Anúncio Comercial</span>
            <div className="w-full h-20 bg-gray-100 rounded border border-dashed border-gray-300 flex items-center justify-center text-xs text-gray-500 font-bold">
              [ Banner Publicitário Intercalado - 728x90 ]
            </div>
          </div>

          {/* SEÇÕES DA HOMEPAGE (CIDADE, SEGURANÇA, ESPORTES) */}
          <div className="space-y-8">
            {['CIDADE', 'SEGURANÇA', 'ESPORTES'].map((secao, sIdx) => (
              <div key={sIdx} className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center justify-between border-b-2 border-[#0808F5] pb-2 mb-4">
                  <h3 className="text-base font-black text-[#0808F5] uppercase tracking-wider">{secao}</h3>
                  <a href={`/#${secao.toLowerCase()}`} className="text-xs font-bold text-[#FF0808] hover:underline uppercase flex items-center gap-1">
                    Ver Todas <ArrowRight size={12} />
                  </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* 1 Principal */}
                  <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-gray-200 pb-3 md:pb-0 md:pr-3">
                    <div className="h-32 bg-gray-200 rounded overflow-hidden mb-2">
                      <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80" alt="Notícia" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-[10px] font-bold text-gray-400">Hoje</span>
                    <h4 className="font-bold text-xs text-[#222222] hover:text-[#0808F5] mt-1">
                      Iniciativa local promove melhorias nos bairros de Tambaú
                    </h4>
                  </div>
                  {/* 3 Secundárias */}
                  <div className="md:col-span-2 space-y-3">
                    {[1, 2, 3].map((sub) => (
                      <div key={sub} className="border-b last:border-0 pb-2 last:pb-0">
                        <span className="text-[10px] text-gray-400">Ontem</span>
                        <h5 className="font-bold text-xs text-gray-800 hover:text-[#0808F5] cursor-pointer">
                          Ações de fiscalização e manutenção preventiva na infraestrutura urbana
                        </h5>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* SIDEBAR DIREITA (Mais Lidas, Obituário, Guia Comercial, Empregos, Classificados) */}
        <aside className="lg:col-span-4 space-y-6">
          
          {/* MÓDULO OBITUÁRIO */}
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between border-b pb-2 mb-3">
              <h3 className="font-black text-sm text-[#222222] uppercase tracking-wider flex items-center gap-1.5">
                <Cross size={16} className="text-[#0808F5]" /> Obituário
              </h3>
              <a href="/obituario" className="text-[10px] font-bold text-[#0808F5] uppercase hover:underline">Ver Todos</a>
            </div>
            <div className="space-y-3">
              <div className="bg-[#F5F6F8] p-3 rounded border border-gray-200 text-xs">
                <p className="font-bold text-gray-900 text-sm">Maria Aparecida Silva</p>
                <p className="text-gray-500 text-[11px] mt-0.5">74 anos • Falecida ontem</p>
                <div className="mt-2 text-[11px] text-gray-700 space-y-0.5 border-t border-gray-200 pt-2">
                  <p><strong>Velório:</strong> Velório Municipal de Tambaú</p>
                  <p><strong>Sepultamento:</strong> Hoje às 16:00h no Cemitério Local</p>
                </div>
              </div>
            </div>
          </div>

          {/* MÓDULO MAIS LIDAS */}
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-black text-sm text-[#0808F5] border-b pb-2 mb-3 uppercase tracking-wider">
              Mais Lidas
            </h3>
            <div className="space-y-3">
              {[
                "Confira os horários de atendimento dos serviços públicos no feriado",
                "Moradores celebram início das obras na praça do bairro",
                "Inscrições para cursos do Fundo Social abrem nesta segunda",
                "Resultados da rodada do Campeonato Amador de Tambaú",
                "Previsão do tempo indica chuvas isoladas ao longo da semana"
              ].map((item, rank) => (
                <div key={rank} className="flex items-start gap-3 text-xs border-b border-gray-100 pb-2 last:border-0">
                  <span className="font-black text-xl text-[#FF0808] leading-none shrink-0">{rank + 1}</span>
                  <a href="/noticias/exemplo" className="font-bold text-gray-800 hover:text-[#0808F5] transition">
                    {item}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* GUIA COMERCIAL DESTAQUE */}
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between border-b pb-2 mb-3">
              <h3 className="font-black text-sm text-[#222222] uppercase tracking-wider flex items-center gap-1">
                <Building2 size={16} className="text-[#0808F5]" /> Guia Comercial
              </h3>
              <a href="/guia-comercial" className="text-[10px] font-bold text-[#0808F5] uppercase hover:underline">Ver Guia</a>
            </div>
            <div className="space-y-2">
              <div className="p-2.5 border rounded flex items-center justify-between hover:border-[#0808F5] transition bg-gray-50">
                <div>
                  <span className="text-[9px] font-bold text-[#FF0808] uppercase">Patrocinado</span>
                  <p className="font-bold text-xs text-gray-800">Supermercado Tambaú</p>
                  <p className="text-[10px] text-gray-500">Rua Dr. Alfredo, 120 - Centro</p>
                </div>
                <a href="/guia-comercial" className="text-xs bg-[#0808F5] text-white px-2 py-1 rounded font-bold">Ver</a>
              </div>
            </div>
          </div>

          {/* VAGAS DE EMPREGO */}
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between border-b pb-2 mb-3">
              <h3 className="font-black text-sm text-[#222222] uppercase tracking-wider flex items-center gap-1">
                <Briefcase size={16} className="text-[#0808F5]" /> Vagas de Emprego
              </h3>
              <a href="/empregos" className="text-[10px] font-bold text-[#0808F5] uppercase hover:underline">Todas as Vagas</a>
            </div>
            <div className="space-y-2 text-xs">
              <div className="p-2.5 border rounded bg-gray-50">
                <p className="font-bold text-gray-800">Atendente de Loja</p>
                <p className="text-[10px] text-gray-500">Comércio Local • Tempo Integral</p>
                <p className="text-[10px] text-[#FF0808] font-bold mt-1">Enviar currículo até sexta</p>
              </div>
            </div>
          </div>

          {/* BANNER LATERAL */}
          <div className="w-full bg-white p-3 rounded border border-gray-200 text-center">
            <span className="text-[9px] font-bold text-gray-400 uppercase block mb-1">Banner Lateral</span>
            <div className="w-full h-60 bg-gray-100 rounded border border-dashed border-gray-300 flex items-center justify-center text-xs text-gray-500 font-bold">
              [ Publicidade Lateral - 300x250 ]
            </div>
          </div>

        </aside>

      </section>

      {/* 4. BLOCO NEWSLETTER */}
      <section className="bg-[#0808F5] text-white p-8 rounded-lg shadow-md text-center max-w-4xl mx-auto">
        <h3 className="text-xl sm:text-2xl font-black uppercase tracking-wide">
          RECEBA AS PRINCIPAIS NOTÍCIAS DE TAMBAÚ
        </h3>
        <p className="text-xs sm:text-sm text-blue-100 mt-2 max-w-xl mx-auto">
          Fique por dentro do que acontece na cidade diretamente no seu e-mail. Cadastro rápido e gratuito.
        </p>
        <form className="mt-6 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Seu Nome"
            className="px-4 py-2.5 rounded text-xs text-gray-900 outline-none flex-1"
            required
          />
          <input
            type="email"
            placeholder="Seu E-mail"
            className="px-4 py-2.5 rounded text-xs text-gray-900 outline-none flex-1"
            required
          />
          <button
            type="submit"
            className="bg-[#FF0808] hover:bg-red-700 text-white font-bold px-6 py-2.5 rounded text-xs uppercase transition shadow"
          >
            QUERO RECEBER
          </button>
        </form>
      </section>

    </main>
  );
}
