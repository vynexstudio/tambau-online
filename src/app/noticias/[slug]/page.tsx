import React from 'react';
import { Calendar, Eye, Share2, MessageCircle, Facebook, Twitter, Link as LinkIcon, ArrowLeft } from 'lucide-react';

export default function NoticiaPage({ params }: { params: { slug: string } }) {
  return (
    <main className="container mx-auto px-4 py-8 max-w-5xl">
      <a href="/" className="inline-flex items-center gap-1 text-xs font-bold text-[#0808F5] hover:underline mb-6">
        <ArrowLeft size={14} /> Voltar para o Início
      </a>

      <article className="bg-white p-6 sm:p-10 rounded-lg shadow-sm border border-gray-200 space-y-6">
        
        {/* Cabeçalho da Notícia */}
        <div className="space-y-3">
          <span className="bg-[#0808F5] text-white text-xs font-black px-3 py-1 rounded uppercase tracking-wider">
            CIDADE
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-[#222222] leading-tight">
            Obras de revitalização da Praça Central entram na fase final em Tambaú
          </h1>
          <p className="text-sm sm:text-base text-gray-600 font-medium leading-relaxed">
            O novo projeto contempla iluminação em LED, piso tátil de acessibilidade, playground infantil reformado e espaço para feiras locais.
          </p>

          <div className="flex flex-wrap items-center justify-between border-y border-gray-100 py-3 text-xs text-gray-500">
            <div>
              <p>Por <strong className="text-gray-800">Redação Tambaú Online</strong></p>
              <p>Publicado em 16 de Setembro de 2026 às 09:42</p>
            </div>
            {/* Botões de Compartilhamento */}
            <div className="flex items-center gap-2 mt-2 sm:mt-0">
              <button className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700" title="Compartilhar no WhatsApp">
                <MessageCircle size={14} />
              </button>
              <button className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700" title="Compartilhar no Facebook">
                <Facebook size={14} />
              </button>
              <button className="bg-gray-100 text-gray-700 p-2 rounded-full hover:bg-gray-200" title="Copiar Link">
                <LinkIcon size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Imagem Principal com Legenda */}
        <div className="space-y-2">
          <div className="h-[300px] sm:h-[450px] bg-gray-200 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80" 
              alt="Obras na praça"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-xs text-gray-500 italic text-center">
            Foto: Equipe de Obras / Prefeitura Municipal de Tambaú
          </p>
        </div>

        {/* Banner Publicitário Dentro da Matéria */}
        <div className="w-full bg-gray-50 p-3 rounded border border-gray-200 text-center">
          <span className="text-[9px] font-bold text-gray-400 uppercase block mb-1">Publicidade</span>
          <div className="h-16 bg-gray-200 rounded flex items-center justify-center text-xs font-bold text-gray-500">
            [ Banner Dentro da Matéria - 728x90 ]
          </div>
        </div>

        {/* Conteúdo do Texto da Notícia */}
        <div className="prose max-w-none text-sm sm:text-base text-gray-800 leading-relaxed space-y-4">
          <p>
            As obras de revitalização da Praça Central do município de Tambaú atingiram nesta semana a marca de 90% de conclusão. A previsão da equipe técnica é que a entrega oficial ocorra no próximo mês durante as comemorações locais.
          </p>
          <p>
            Dentre as principais melhorias implementadas estão a substituição de toda a iluminação antiga por luminárias em LED de alta eficiência, instalação de piso tátil para garantir acessibilidade a pessoas com deficiência visual e o paisagismo completo dos jardins.
          </p>
          <blockquote className="border-l-4 border-[#0808F5] pl-4 italic text-gray-700 font-semibold my-4">
            "Este é um compromisso com a qualidade de vida da população tambaoense, oferecendo um espaço moderno e seguro para famílias e comerciantes."
          </blockquote>
          <p>
            O espaço também contará com um playground infantil totalmente renovado e uma área reservada para a realização de feiras gastronômicas e culturais nos finais de semana.
          </p>
        </div>

        {/* Fonte do Conteúdo */}
        <div className="border-t pt-4 text-xs text-gray-500">
          <p>Fonte / Assessoria: <strong>Prefeitura Municipal de Tambaú</strong></p>
        </div>

        {/* Seção Leia Também */}
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-sm font-black text-[#0808F5] uppercase tracking-wider mb-4">Leia Também</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-3 border rounded hover:border-[#0808F5] transition">
              <span className="text-[10px] font-bold text-[#FF0808] uppercase">Segurança</span>
              <h4 className="font-bold text-xs text-gray-800 mt-1">Polícia reforça patrulhamento no comércio local</h4>
            </div>
            <div className="p-3 border rounded hover:border-[#0808F5] transition">
              <span className="text-[10px] font-bold text-[#0808F5] uppercase">Saúde</span>
              <h4 className="font-bold text-xs text-gray-800 mt-1">Atendimento estendido nos postos de saúde nesta semana</h4>
            </div>
          </div>
        </div>

      </article>
    </main>
  );
}
