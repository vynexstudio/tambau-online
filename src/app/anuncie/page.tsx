import React from 'react';
import { Megaphone, CheckCircle2, Send, PhoneCall } from 'lucide-react';

export default function AnunciePage() {
  return (
    <main className="container mx-auto px-4 py-10 max-w-4xl space-y-10">
      
      <div className="text-center space-y-3">
        <span className="bg-[#FF0808] text-white text-xs font-black px-3 py-1 rounded uppercase">Mídia Local</span>
        <h1 className="text-3xl sm:text-4xl font-black text-[#222222]">ANUNCIE NO TAMBAÚ ONLINE</h1>
        <p className="text-sm text-gray-600 max-w-xl mx-auto">
          "Sua empresa também pode aparecer onde Tambaú está olhando."
        </p>
      </div>

      {/* Formatos Publicitários */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Banners de Destaque", desc: "Exibição privilegiada no topo, lateral ou entre matérias da homepage e notícias." },
          { title: "Guia Comercial", desc: "Sua empresa no topo do diretório comercial com mapa, fotos e botão direto para WhatsApp." },
          { title: "Notícia Patrocinada", desc: "Reportagem exclusiva contando a história, produtos ou serviços da sua marca." }
        ].map((plan, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-3 text-center">
            <Megaphone className="mx-auto text-[#0808F5]" size={32} />
            <h3 className="font-extrabold text-base text-gray-900">{plan.title}</h3>
            <p className="text-xs text-gray-600 leading-relaxed">{plan.desc}</p>
          </div>
        ))}
      </div>

      {/* Formulário Comercial */}
      <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm max-w-2xl mx-auto space-y-4">
        <h2 className="text-lg font-black text-[#222222] uppercase border-b pb-2">Solicitar Orçamento Comercial</h2>
        <form className="space-y-4 text-xs">
          <div>
            <label className="block font-bold text-gray-700 uppercase mb-1">Seu Nome *</label>
            <input type="text" className="w-full p-2.5 border rounded outline-none focus:border-[#0808F5]" required />
          </div>
          <div>
            <label className="block font-bold text-gray-700 uppercase mb-1">Nome da Empresa *</label>
            <input type="text" className="w-full p-2.5 border rounded outline-none focus:border-[#0808F5]" required />
          </div>
          <div>
            <label className="block font-bold text-gray-700 uppercase mb-1">WhatsApp / Telefone *</label>
            <input type="text" className="w-full p-2.5 border rounded outline-none focus:border-[#0808F5]" required />
          </div>
          <div>
            <label className="block font-bold text-gray-700 uppercase mb-1">Tipo de Publicidade Desejada</label>
            <select className="w-full p-2.5 border rounded outline-none bg-white">
              <option>Banner Topo / Lateral</option>
              <option>Guia Comercial Destaque</option>
              <option>Notícia / Post Patrocinado</option>
              <option>Pacote Completo de Presença</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-[#FF0808] hover:bg-red-700 text-white font-black py-3 rounded text-xs uppercase tracking-wider transition">
            ENVIAR CONTATO COMERCIAL
          </button>
        </form>
      </div>

    </main>
  );
}
