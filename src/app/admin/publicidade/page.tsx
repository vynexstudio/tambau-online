import React from 'react';
import { Megaphone, Plus, Calendar, Eye, MousePointer } from 'lucide-react';

export default function AdminPublicidadePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b pb-4">
        <div>
          <h1 className="text-xl font-black text-[#222222] uppercase">SISTEMA DE PUBLICIDADE & BANNERS</h1>
          <p className="text-xs text-gray-500">Gerenciamento de campanhas, anunciantes e segmentação por página</p>
        </div>
        <button className="bg-[#FF0808] text-white text-xs font-bold px-4 py-2 rounded flex items-center gap-1 shadow">
          <Plus size={14} /> NOVO ANÚNCIO
        </button>
      </div>

      {/* Lista de Banners Ativos */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden text-xs">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 font-bold text-gray-700 border-b">
              <th className="p-3">Anunciante</th>
              <th className="p-3">Posição</th>
              <th className="p-3">Segmentação</th>
              <th className="p-3">Validade</th>
              <th className="p-3">Métricas</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              { empresa: "Supermercado Tambaú", pos: "BANNER_TOPO", seg: "Todo o site", val: "30/09/2026", views: 4200, clicks: 180, status: "ATIVO" },
              { empresa: "Auto Posto Tambaú", pos: "BANNER_LATERAL", seg: "Homepage", val: "15/10/2026", views: 2800, clicks: 95, status: "ATIVO" }
            ].map((ad, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="p-3 font-bold text-gray-900">{ad.empresa}</td>
                <td className="p-3 text-[#0808F5] font-bold">{ad.pos}</td>
                <td className="p-3 text-gray-600">{ad.seg}</td>
                <td className="p-3 text-gray-600">{ad.val}</td>
                <td className="p-3 text-gray-600">
                  <span className="flex items-center gap-2">
                    <Eye size={12} /> {ad.views} | <MousePointer size={12} /> {ad.clicks}
                  </span>
                </td>
                <td className="p-3">
                  <span className="bg-green-100 text-green-800 text-[10px] font-bold px-2 py-0.5 rounded">
                    {ad.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
