import React from 'react';
import { Search, Menu, PhoneCall, AlertCircle, Share2, Eye, Calendar, MapPin, Building2, Briefcase } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F6F8]">
      {/* 1. BARRA DE PLANTÃO / ÚLTIMA HORA */}
      <div className="bg-[#FF0808] text-white py-1.5 px-4 text-xs font-bold uppercase tracking-wider flex items-center justify-between">
        <div className="container mx-auto flex items-center gap-2 overflow-hidden">
          <span className="bg-white text-[#FF0808] px-2 py-0.5 rounded font-black animate-pulse flex items-center gap-1 shrink-0">
            <AlertCircle size={12} /> PLANTÃO
          </span>
          <p className="truncate font-semibold">
            Defesa Civil emite alerta para chuvas intensas na região de Tambaú nas próximas horas
          </p>
        </div>
      </div>

      {/* 2. HEADER PRINCIPAL */}
      <header className="bg-white border-b border-gray-200 py-4 px-4 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo Concept */}
          <div className="flex items-center gap-2">
            <div className="flex flex-col">
              <span className="text-3xl font-black text-[#0808F5] tracking-tighter leading-none">
                TAMBAÚ <span className="text-[#FF0808]">ONLINE</span>
              </span>
              <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mt-0.5">
                Informação que conecta Tambaú
              </span>
            </div>
          </div>

          {/* Busca & CTA Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar notícias, empresas..."
                className="bg-gray-100 text-sm rounded-full py-2 pl-4 pr-10 border border-transparent focus:border-[#0808F5] focus:bg-white outline-none w-64 transition"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={16} />
            </div>
            <a
              href="#anuncie"
              className="bg-[#FF0808] hover:bg-red-700 text-white font-bold px-5 py-2 rounded-full text-sm transition flex items-center gap-1 shadow-md"
            >
              ANUNCIE
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-[#222222]">
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* 3. MENU DE NAVEGAÇÃO DE CATEGORIAS */}
      <nav className="bg-[#0808F5] text-white shadow-md overflow-x-auto">
        <div className="container mx-auto flex items-center whitespace-nowrap text-xs font-bold uppercase tracking-wider">
          {['Início', 'Notícias', 'Cidade', 'Política', 'Segurança', 'Esportes', 'Saúde', 'Educação', 'Eventos', 'Região', 'Obituário', 'Classificados', 'Guia Comercial', 'Empregos'].map((cat, idx) => (
            <a
              key={idx}
              href={`#${cat.toLowerCase()}`}
              className="py-3 px-4 hover:bg-blue-800 transition border-r border-blue-600/30 first:bg-blue-900"
            >
              {cat}
            </a>
          ))}
        </div>
      </nav>

      {/* 4. CONTEÚDO PRINCIPAL */}
      <main className="container mx-auto px-4 py-6 flex-grow grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* COLUNA DA ESQUERDA (Notícias & Destaques) - 8 Cols */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* BANNER PUBLICIDADE TOPO */}
          <div className="w-full bg-gray-200 h-24 rounded border border-dashed border-gray-400 flex items-center justify-center text-gray-500 text-xs font-bold uppercase">
            [ Publicidade - Banner Topo ]
          </div>

          {/* GRID DE DESTAQUES */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Destaque Principal */}
            <div className="md:col-span-2 bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition group">
              <div className="relative h-72 bg-gray-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                <span className="absolute top-4 left-4 bg-[#0808F5] text-white text-xs font-bold px-3 py-1 rounded z-20 uppercase">
                  CIDADE
                </span>
                <div className="absolute bottom-4 left-4 right-4 text-white z-20">
                  <span className="text-xs text-gray-300 font-medium">Hoje às 09:42</span>
                  <h1 className="text-2xl font-black leading-tight mt-1 group-hover:text-blue-300 transition">
                    Obras de revitalização da praça central entram na fase final de conclusão
                  </h1>
                  <p className="text-sm text-gray-200 mt-2 line-clamp-2">
                    Projeto prevê nova iluminação LED, acessibilidade reformulada e espaço de convivência para os moradores.
                  </p>
                </div>
              </div>
            </div>

            {/* Secundárias */}
            {[
              { cat: 'SEGURANÇA', title: 'Polícia Militar reforça patrulhamento no centro comercial', time: '09:15' },
              { cat: 'ESPORTES', title: 'Campeonato Amador de Tambaú começa neste final de semana', time: '08:37' },
              { cat: 'SAÚDE', title: 'Campanha de vacinação atende em três postos da cidade', time: 'Ontem' },
              { cat: 'EDUCAÇÃO', title: 'Escolas municipais recebem novos equipamentos de tecnologia', time: 'Ontem' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-blue-200 transition flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center text-xs font-bold mb-2">
                    <span className="text-[#0808F5] uppercase">{item.cat}</span>
                    <span className="text-gray-400 font-normal">{item.time}</span>
                  </div>
                  <h2 className="font-bold text-[#222222] text-sm leading-snug hover:text-[#0808F5] transition cursor-pointer">
                    {item.title}
                  </h2>
                </div>
              </div>
            ))}
          </section>

          {/* BANNER PUBLICIDADE MEIO */}
          <div className="w-full bg-gray-200 h-20 rounded border border-dashed border-gray-400 flex items-center justify-center text-gray-500 text-xs font-bold uppercase">
            [ Publicidade - Central ]
          </div>

          {/* FEED ÚLTIMAS NOTÍCIAS */}
          <section className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-lg font-black text-[#0808F5] border-b border-gray-200 pb-3 mb-4 uppercase tracking-wider flex items-center justify-between">
              <span>Últimas Notícias</span>
              <span className="text-xs font-normal text-gray-500">Atualizado em tempo real</span>
            </h2>

            <div className="divide-y divide-gray-100">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="py-4 flex flex-col sm:flex-row gap-4 items-start hover:bg-gray-50 p-2 rounded transition">
                  <div className="w-full sm:w-32 h-20 bg-gray-200 rounded shrink-0" />
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                      <span className="font-bold text-[#FF0808]">08:{item}0</span>
                      <span>•</span>
                      <span className="font-semibold text-gray-700 uppercase">Região</span>
                    </div>
                    <h3 className="font-bold text-[#222222] text-sm hover:text-[#0808F5] cursor-pointer transition">
                      Prefeitura anuncia novos investimentos para infraestrutura rural em Tambaú
                    </h3>
                    <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                      Medida visa beneficiar produtores locais e melhorar o escoamento da produção agrícola do município.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* COLUNA DA DIREITA (Sidebar / Serviços) - 4 Cols */}
        <aside className="lg:col-span-4 space-y-6">

          {/* BOTÃO ENVIE SUA NOTÍCIA */}
          <div className="bg-[#0808F5] text-white p-5 rounded-lg shadow-md text-center">
            <h3 className="font-black text-lg uppercase tracking-wide">Viu algo em Tambaú?</h3>
            <p className="text-xs text-blue-100 mt-1">Envie fotos, vídeos ou denúncias para a nossa redação.</p>
            <button className="mt-4 w-full bg-[#FF0808] hover:bg-red-700 text-white font-bold py-2.5 px-4 rounded text-xs uppercase tracking-wider transition shadow">
              ENVIAR NOTÍCIA
            </button>
          </div>

          {/* MÓDULO OBITUÁRIO */}
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between border-b pb-2 mb-3">
              <h3 className="font-black text-sm text-gray-800 uppercase tracking-wider">Obituário</h3>
              <a href="#obituario" className="text-[10px] text-[#0808F5] font-bold uppercase hover:underline">Ver Todos</a>
            </div>
            <div className="space-y-3">
              <div className="bg-gray-50 p-3 rounded border border-gray-100 text-xs">
                <p className="font-bold text-gray-900 text-sm">Maria Aparecida Silva</p>
                <p className="text-gray-500 text-[11px] mt-0.5">74 anos • Falecida ontem</p>
                <div className="mt-2 text-[11px] text-gray-700 space-y-0.5">
                  <p><strong>Velório:</strong> Velório Municipal de Tambaú</p>
                  <p><strong>Sepultamento:</strong> Hoje às 16:00h</p>
                </div>
              </div>
            </div>
          </div>

          {/* MÓDULO MAIS LIDAS */}
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-black text-sm text-[#0808F5] border-b pb-2 mb-3 uppercase tracking-wider">
              Mais Lidas
            </h3>
            <div className="space-y-3">
              {[1, 2, 3, 4].map((rank) => (
                <div key={rank} className="flex items-start gap-3 text-xs">
                  <span className="font-black text-lg text-[#FF0808] leading-none">{rank}</span>
                  <p className="font-semibold text-gray-800 hover:text-[#0808F5] cursor-pointer transition">
                    Confira os horários de atendimento dos serviços públicos no feriado municipal
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* BANNER PUBLICIDADE LATERAL */}
          <div className="w-full bg-gray-200 h-60 rounded border border-dashed border-gray-400 flex items-center justify-center text-gray-500 text-xs font-bold uppercase">
            [ Publicidade - Banner Lateral ]
          </div>

          {/* MÓDULO GUIA COMERCIAL */}
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between border-b pb-2 mb-3">
              <h3 className="font-black text-sm text-gray-800 uppercase tracking-wider flex items-center gap-1">
                <Building2 size={16} className="text-[#0808F5]" /> Guia Comercial
              </h3>
              <a href="#guia" className="text-[10px] text-[#0808F5] font-bold uppercase hover:underline">Explorar</a>
            </div>
            <div className="grid grid-cols-2 gap-2 text-center text-xs">
              <div className="p-2 border rounded hover:border-[#0808F5] transition cursor-pointer">
                <p className="font-bold text-gray-800">Restaurantes</p>
              </div>
              <div className="p-2 border rounded hover:border-[#0808F5] transition cursor-pointer">
                <p className="font-bold text-gray-800">Farmácias</p>
              </div>
              <div className="p-2 border rounded hover:border-[#0808F5] transition cursor-pointer">
                <p className="font-bold text-gray-800">Oficinas</p>
              </div>
              <div className="p-2 border rounded hover:border-[#0808F5] transition cursor-pointer">
                <p className="font-bold text-gray-800">Supermercados</p>
              </div>
            </div>
          </div>

        </aside>
      </main>

      {/* 5. FOOTER */}
      <footer className="bg-[#222222] text-white border-t-4 border-[#0808F5] mt-12 py-8 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-xs">
          <div>
            <span className="text-xl font-black text-white tracking-tighter">
              TAMBAÚ <span className="text-[#FF0808]">ONLINE</span>
            </span>
            <p className="text-gray-400 mt-2 leading-relaxed">
              O portal de notícias e serviços feito para conectar o morador de Tambaú a tudo o que acontece na cidade.
            </p>
          </div>
          <div>
            <h4 className="font-bold uppercase text-white mb-3 text-sm">Links Rápidos</h4>
            <div className="grid grid-cols-2 gap-2 text-gray-300">
              <a href="#" className="hover:text-white">Sobre Nós</a>
              <a href="#" className="hover:text-white">Anuncie</a>
              <a href="#" className="hover:text-white">Termos de Uso</a>
              <a href="#" className="hover:text-white">Privacidade</a>
              <a href="#" className="hover:text-white">Fale Conosco</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold uppercase text-white mb-3 text-sm">Contato / Redação</h4>
            <p className="text-gray-300">Tambaú, São Paulo - SP</p>
            <p className="text-gray-300 mt-1">redacao@tambauonline.com.br</p>
          </div>
        </div>
        <div className="container mx-auto border-t border-gray-800 mt-8 pt-4 text-center text-gray-500 text-[11px]">
          © {new Date().getFullYear()} TAMBAÚ ONLINE. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
