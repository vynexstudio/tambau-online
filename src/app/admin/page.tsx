import React from 'react';
import { FileText, Eye, Inbox, Megaphone, Plus, TrendingUp, AlertCircle } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Título & Boas-vindas */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-[#222222]">Visão Geral</h2>
          <p className="text-xs text-gray-500">Resumo de desempenho e atividades do Tambaú Online</p>
        </div>
      </div>

      {/* CARDS DE ESTATÍSTICAS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-gray-500 uppercase">Acessos Hoje</span>
            <Eye className="text-[#0808F5]" size={20} />
          </div>
          <p className="text-2xl font-black text-[#222222] mt-2">12.480</p>
          <span className="text-[11px] text-green-600 font-bold flex items-center gap-1 mt-1">
            <TrendingUp size={12} /> +18% em relação a ontem
          </span>
        </div>

        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-gray-500 uppercase">Notícias Publicadas</span>
            <FileText className="text-blue-600" size={20} />
          </div>
          <p className="text-2xl font-black text-[#222222] mt-2">1.240</p>
          <span className="text-[11px] text-gray-400">Total cadastrado</span>
        </div>

        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-gray-500 uppercase">Envios dos Leitores</span>
            <Inbox className="text-[#FF0808]" size={20} />
          </div>
          <p className="text-2xl font-black text-[#FF0808] mt-2">5</p>
          <span className="text-[11px] font-bold text-[#FF0808]">Aguardando revisão</span>
        </div>

        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-gray-500 uppercase">Anúncios Ativos</span>
            <Megaphone className="text-amber-500" size={20} />
          </div>
          <p className="text-2xl font-black text-[#222222] mt-2">14</p>
          <span className="text-[11px] text-gray-500">Campanhas rodando</span>
        </div>
      </div>

      {/* SEÇÃO PRINCIPAL DE TRABALHO */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Tabela de Útimas Notícias Cadastradas */}
        <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4 pb-2 border-b">
            <h3 className="font-bold text-sm text-[#222222] uppercase tracking-wider">
              Últimas Notícias Editadas
            </h3>
            <a href="/admin/noticias/nova" className="text-xs font-bold text-[#0808F5] hover:underline flex items-center gap-1">
              <Plus size={14} /> Nova
            </a>
          </div>

          <div className="space-y-3 text-xs">
            {[
              { title: "Obras de revitalização da praça central entram na fase final", cat: "Cidade", status: "Publicado", time: "Há 10 min" },
              { title: "Polícia Militar reforça patrulhamento no centro comercial", cat: "Segurança", status: "Publicado", time: "Há 40 min" },
              { title: "Defesa Civil emite alerta para chuvas intensas na região", cat: "Plantão", status: "Publicado", time: "Há 2 horas" },
              { title: "Resultados do torneio amador de futebol no domingo", cat: "Esportes", status: "Rascunho", time: "Hoje" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded hover:bg-gray-100 transition">
                <div>
                  <p className="font-bold text-gray-800">{item.title}</p>
                  <div className="flex items-center gap-2 text-[10px] text-gray-500 mt-1">
                    <span className="font-bold text-[#0808F5] uppercase">{item.cat}</span>
                    <span>•</span>
                    <span>{item.time}</span>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded text-[10px] font-bold ${item.status === 'Publicado' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Fila de Moderacão do Leitor */}
        <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4 pb-2 border-b">
            <h3 className="font-bold text-sm text-[#222222] uppercase tracking-wider flex items-center gap-1">
              <AlertCircle size={16} className="text-[#FF0808]" /> Envie uma Notícia
            </h3>
            <span className="bg-red-100 text-[#FF0808] text-[10px] font-bold px-2 py-0.5 rounded-full">5 novos</span>
          </div>

          <div className="space-y-3 text-xs">
            {[1, 2, 3].map((sub) => (
              <div key={sub} className="p-3 border rounded-lg bg-gray-50 hover:border-gray-300 transition">
                <div className="flex justify-between items-center text-[10px] text-gray-500 mb-1">
                  <span className="font-bold text-gray-700">Morador: João P.</span>
                  <span>14:20</span>
                </div>
                <p className="font-semibold text-gray-800 line-clamp-2">
                  Vazamento de água na rua São Paulo próximo ao número 120 precisa de manutenção.
                </p>
                <div className="mt-3 flex gap-2">
                  <button className="flex-1 bg-[#0808F5] text-white font-bold py-1 rounded text-[10px]">
                    Criar Notícia
                  </button>
                  <button className="px-2 bg-gray-200 text-gray-600 rounded text-[10px] hover:bg-gray-300">
                    Arquivar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
