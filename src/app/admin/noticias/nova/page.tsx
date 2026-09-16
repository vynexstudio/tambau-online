import React from 'react';
import { ArrowLeft, Sparkles, Image, Save, Send, AlertTriangle } from 'lucide-react';

export default function NovaNoticia() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Topo do Editor */}
      <div className="flex items-center justify-between border-b pb-4">
        <div className="flex items-center gap-3">
          <a href="/admin" className="text-gray-500 hover:text-black transition">
            <ArrowLeft size={20} />
          </a>
          <div>
            <h2 className="text-xl font-black text-[#222222]">Nova Notícia</h2>
            <p className="text-xs text-gray-500">Fluxo otimizado de publicação rápida</p>
          </div>
        </div>

        {/* Botão Assistente IA */}
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs px-3 py-2 rounded flex items-center gap-1.5 shadow transition">
          <Sparkles size={14} /> ASSISTENTE IA
        </button>
      </div>

      {/* FORMULÁRIO DE PUBLICAÇÃO */}
      <form className="space-y-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-4">
          
          {/* Título da Notícia */}
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
              Título da Notícia *
            </label>
            <input
              type="text"
              placeholder="Ex: Prefeitura abre inscrições para cursos gratuitos em Tambaú"
              className="w-full text-base font-bold p-3 border border-gray-300 rounded focus:border-[#0808F5] outline-none"
              required
            />
          </div>

          {/* Subtítulo / Linha fina */}
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
              Subtítulo (Resumo)
            </label>
            <input
              type="text"
              placeholder="Resumo em uma frase para chamar atenção na homepage"
              className="w-full text-xs p-2.5 border border-gray-300 rounded focus:border-[#0808F5] outline-none"
            />
          </div>

          {/* Categoria & Status Plantão */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                Categoria *
              </label>
              <select className="w-full text-xs p-2.5 border border-gray-300 rounded focus:border-[#0808F5] outline-none bg-white">
                <option>Cidade</option>
                <option>Segurança</option>
                <option>Política</option>
                <option>Esportes</option>
                <option>Saúde</option>
                <option>Educação</option>
                <option>Eventos</option>
                <option>Região</option>
              </select>
            </div>

            <div className="flex items-center gap-2 pt-5">
              <input type="checkbox" id="plantao" className="w-4 h-4 text-[#FF0808] rounded" />
              <label htmlFor="plantao" className="text-xs font-bold text-[#FF0808] uppercase flex items-center gap-1 cursor-pointer">
                <AlertTriangle size={14} /> Marcar como PLANTÃO URGENTE
              </label>
            </div>
          </div>

          {/* Upload de Imagem */}
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
              Imagem Principal *
            </label>
            <div className="border-2 border-dashed border-gray-300 p-6 rounded text-center hover:border-[#0808F5] transition cursor-pointer bg-gray-50">
              <Image className="mx-auto text-gray-400 mb-2" size={32} />
              <p className="text-xs font-bold text-gray-700">Clique para selecionar a imagem da matéria</p>
              <p className="text-[10px] text-gray-400 mt-1">Formatos suportados: WebP, JPG, PNG (Max 5MB)</p>
            </div>
          </div>

          {/* Conteúdo do Texto */}
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
              Conteúdo da Matéria *
            </label>
            <textarea
              rows={8}
              placeholder="Escreva a notícia completa aqui..."
              className="w-full text-sm p-3 border border-gray-300 rounded focus:border-[#0808F5] outline-none"
              required
            ></textarea>
          </div>

        </div>

        {/* BARRA DE AÇÕES FIXA / RODAPÉ */}
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-500 font-medium">Status:</span>
            <select className="text-xs p-1.5 border rounded font-bold bg-white">
              <option>Publicado</option>
              <option>Rascunho</option>
              <option>Agendado</option>
              <option>Em Revisão</option>
            </select>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold rounded flex items-center gap-1 transition"
            >
              <Save size={14} /> Salvar Rascunho
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-[#FF0808] hover:bg-red-700 text-white text-xs font-bold rounded flex items-center gap-1 shadow transition"
            >
              <Send size={14} /> PUBLICAR AGORA
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
