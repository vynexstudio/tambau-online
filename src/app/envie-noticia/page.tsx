import React from 'react';
import { Send, Upload, AlertCircle } from 'lucide-react';

export default function EnvieNoticiaPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm space-y-6">
        
        <div>
          <h1 className="text-2xl font-black text-[#0808F5] uppercase tracking-wider">ENVIE UMA NOTÍCIA</h1>
          <p className="text-xs text-gray-600 mt-1">
            Tem uma informação importante ou denúncia acontecendo em Tambaú? Envie para a equipe do Tambaú Online.
          </p>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-3 text-xs text-amber-800">
          <p className="font-bold flex items-center gap-1"><AlertCircle size={14} /> Nota Editorial:</p>
          <p className="mt-0.5">O envio não garante publicação automática. Todo conteúdo será verificado pela nossa equipe antes de ir ao ar.</p>
        </div>

        <form className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-gray-700 uppercase mb-1">Seu Nome *</label>
              <input type="text" className="w-full p-2.5 border rounded outline-none" required />
            </div>
            <div>
              <label className="block font-bold text-gray-700 uppercase mb-1">Seu WhatsApp *</label>
              <input type="text" className="w-full p-2.5 border rounded outline-none" required />
            </div>
          </div>

          <div>
            <label className="block font-bold text-gray-700 uppercase mb-1">Título / Assunto do Fato *</label>
            <input type="text" placeholder="Ex: Vazamento de água no Bairro São José" className="w-full p-2.5 border rounded outline-none" required />
          </div>

          <div>
            <label className="block font-bold text-gray-700 uppercase mb-1">Descrição Detalhada *</label>
            <textarea rows={5} placeholder="Conte o que aconteceu, dia, horário e local exato..." className="w-full p-2.5 border rounded outline-none" required></textarea>
          </div>

          <div>
            <label className="block font-bold text-gray-700 uppercase mb-1">Fotos ou Vídeos</label>
            <div className="border-2 border-dashed border-gray-300 p-6 rounded text-center cursor-pointer hover:border-[#0808F5] transition">
              <Upload className="mx-auto text-gray-400 mb-1" size={24} />
              <p className="font-bold text-gray-600">Anexar imagens ou vídeos do local</p>
            </div>
          </div>

          <button type="submit" className="w-full bg-[#0808F5] hover:bg-blue-800 text-white font-black py-3 rounded text-xs uppercase tracking-wider transition">
            ENVIAR PARA A REDAÇÃO
          </button>
        </form>

      </div>
    </main>
  );
}
