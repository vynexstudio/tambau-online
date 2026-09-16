import React from 'react';
import { 
  LayoutDashboard, FileText, FolderTree, Cross, Tag, Store, 
  Calendar, Briefcase, Inbox, Megaphone, Users, Settings, LogOut, ExternalLink 
} from 'lucide-react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F5F6F8] flex flex-col md:flex-row font-sans">
      {/* SIDEBAR LATERAL */}
      <aside className="w-full md:w-64 bg-[#222222] text-white shrink-0 flex flex-col justify-between border-r border-gray-800">
        <div>
          {/* Logo Painel */}
          <div className="p-5 border-b border-gray-800 flex items-center justify-between">
            <div>
              <span className="text-xl font-black text-white tracking-tighter">
                TAMBAÚ <span className="text-[#FF0808]">ONLINE</span>
              </span>
              <span className="block text-[10px] font-bold text-[#0808F5] uppercase tracking-widest mt-0.5">
                PAINEL CMS
              </span>
            </div>
            <a 
              href="/" 
              target="_blank" 
              className="text-gray-400 hover:text-white transition"
              title="Ver Site Público"
            >
              <ExternalLink size={18} />
            </a>
          </div>

          {/* Menu Lateral */}
          <nav className="p-3 space-y-1 text-xs font-semibold">
            <a href="/admin" className="flex items-center gap-3 px-3 py-2.5 rounded bg-[#0808F5] text-white">
              <LayoutDashboard size={16} /> Dashboard
            </a>
            <a href="/admin/noticias/nova" className="flex items-center gap-3 px-3 py-2.5 rounded text-red-400 hover:bg-gray-800 transition font-bold">
              <FileText size={16} /> + Nova Notícia
            </a>
            <a href="/admin/noticias" className="flex items-center gap-3 px-3 py-2.5 rounded text-gray-300 hover:bg-gray-800 transition">
              <FileText size={16} /> Notícias & Rascunhos
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded text-gray-300 hover:bg-gray-800 transition">
              <FolderTree size={16} /> Categorias
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded text-gray-300 hover:bg-gray-800 transition">
              <Inbox size={16} /> Envios dos Leitores
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded text-gray-300 hover:bg-gray-800 transition">
              <Cross size={16} /> Obituário
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded text-gray-300 hover:bg-gray-800 transition">
              <Tag size={16} /> Classificados
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded text-gray-300 hover:bg-gray-800 transition">
              <Store size={16} /> Guia Comercial
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded text-gray-300 hover:bg-gray-800 transition">
              <Calendar size={16} /> Eventos
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded text-gray-300 hover:bg-gray-800 transition">
              <Briefcase size={16} /> Empregos
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded text-gray-300 hover:bg-gray-800 transition">
              <Megaphone size={16} /> Banners & Publicidade
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded text-gray-300 hover:bg-gray-800 transition">
              <Users size={16} /> Usuários & Permissões
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded text-gray-300 hover:bg-gray-800 transition">
              <Settings size={16} /> Configurações
            </a>
          </nav>
        </div>

        {/* Rodapé Usuário */}
        <div className="p-4 border-t border-gray-800 flex items-center justify-between text-xs text-gray-400">
          <div>
            <p className="font-bold text-white">Redação Tambaú</p>
            <p className="text-[10px]">Administrador</p>
          </div>
          <button className="hover:text-red-400 transition" title="Sair">
            <LogOut size={16} />
          </button>
        </div>
      </aside>

      {/* ÁREA DE CONTEÚDO PRINCIPAL */}
      <div className="flex-grow flex flex-col">
        {/* Topbar do Admin */}
        <header className="bg-white border-b border-gray-200 py-3 px-6 flex items-center justify-between">
          <h1 className="text-sm font-bold text-gray-700 uppercase tracking-wider">
            Gestão Editorial & Comercial
          </h1>
          <a
            href="/admin/noticias/nova"
            className="bg-[#FF0808] hover:bg-red-700 text-white text-xs font-bold px-4 py-2 rounded transition flex items-center gap-1 shadow"
          >
            + NOVA NOTÍCIA
          </a>
        </header>

        {/* Conteúdo Dinâmico */}
        <main className="p-6 flex-grow">{children}</main>
      </div>
    </div>
  );
}
