import React from 'react';
import { Building2, Search, MapPin, Phone, MessageCircle, Star } from 'lucide-react';

export default function GuiaComercialPage() {
  return (
    <main className="container mx-auto px-4 py-8 space-y-8">
      
      {/* Topo Guia Comercial */}
      <div className="bg-[#0808F5] text-white p-8 rounded-lg shadow-md text-center space-y-3">
        <h1 className="text-3xl font-black uppercase tracking-wider">GUIA COMERCIAL DE TAMBAÚ</h1>
        <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto">
          Encontre com facilidade empresas, comércios, prestadores de serviços e utilidades da nossa cidade.
        </p>
        {/* Campo de Busca no Guia */}
        <div className="max-w-md mx-auto relative pt-2">
          <input
            type="text"
            placeholder="O que você procura em Tambaú? (ex: farmácia, restaurante)"
            className="w-full text-xs font-semibold py-3 pl-4 pr-10 rounded-full text-gray-900 outline-none"
          />
          <Search className="absolute right-3 top-5 text-gray-400" size={18} />
        </div>
      </div>

      {/* Empresas Destaque / Patrocinadoras */}
      <section className="space-y-4">
        <h2 className="text-base font-black text-[#222222] uppercase tracking-wider flex items-center gap-2 border-b pb-2">
          <Star className="text-[#FF0808]" size={18} /> Empresas em Destaque
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Supermercado Tambaú", cat: "Supermercados", phone: "(19) 3673-0000", address: "Rua Dr. Alfredo, 120 - Centro" },
            { name: "Farmácia Droga Nossa", cat: "Farmácias & Drogaria", phone: "(19) 3673-1111", address: "Av. José Pereira, 45 - Centro" },
            { name: "Auto Posto Tambaú", cat: "Combustíveis", phone: "(19) 3673-2222", address: "Rodovia SP-332, Km 2" }
          ].map((empresa, idx) => (
            <div key={idx} className="bg-white p-5 rounded-lg border-2 border-[#0808F5] shadow-sm space-y-3">
              <span className="bg-[#FF0808] text-white text-[9px] font-black px-2 py-0.5 rounded uppercase">PATROCINADOR</span>
              <h3 className="font-extrabold text-base text-gray-900">{empresa.name}</h3>
              <p className="text-xs text-[#0808F5] font-bold uppercase">{empresa.cat}</p>
              <p className="text-xs text-gray-600 flex items-center gap-1"><MapPin size={12} /> {empresa.address}</p>
              <div className="pt-2 border-t flex gap-2">
                <a href={`https://wa.me/5519999999999`} className="flex-1 bg-green-600 text-white text-center py-2 rounded text-xs font-bold flex items-center justify-center gap-1">
                  <MessageCircle size={14} /> WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
