import React from 'react';
import { Cross, Search, Calendar, MapPin } from 'lucide-react';

export default function ObituarioPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl space-y-6">
      
      <div className="border-b pb-4 text-center sm:text-left">
        <h1 className="text-2xl font-black text-[#222222] uppercase tracking-wider flex items-center justify-center sm:justify-start gap-2">
          <Cross className="text-[#0808F5]" size={24} /> OBITUÁRIO DE TAMBAÚ
        </h1>
        <p className="text-xs text-gray-500 mt-1">Notas de falecimento, horários de velório e sepultamento na cidade</p>
      </div>

      {/* Busca */}
      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <input
          type="text"
          placeholder="Buscar falecimento por nome..."
          className="w-full text-xs p-2.5 border rounded outline-none focus:border-[#0808F5]"
        />
      </div>

      {/* Listagem */}
      <div className="space-y-4">
        {[
          { name: "Maria Aparecida Silva", age: "74 anos", death: "15/09/2026", wake: "Velório Municipal de Tambaú", burial: "16/09/2026 às 16:00h no Cemitério Municipal" },
          { name: "José Carlos Alves", age: "68 anos", death: "14/09/2026", wake: "Velório Municipal de Tambaú", burial: "15/09/2026 às 10:00h no Cemitério Municipal" }
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm space-y-2">
            <div className="flex justify-between items-start">
              <h2 className="text-lg font-bold text-gray-900">{item.name}</h2>
              <span className="text-xs font-bold text-gray-500">{item.age}</span>
            </div>
            <p className="text-xs text-gray-500">Data do falecimento: {item.death}</p>
            <div className="bg-[#F5F6F8] p-3 rounded text-xs space-y-1 text-gray-700 mt-2">
              <p><strong>Local do Velório:</strong> {item.wake}</p>
              <p><strong>Sepultamento:</strong> {item.burial}</p>
            </div>
          </div>
        ))}
      </div>

    </main>
  );
}
