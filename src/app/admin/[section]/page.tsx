import Link from 'next/link'

const sections: Record<string, { title: string; description: string }> = {
  noticias: { title: 'Notícias & Rascunhos', description: 'Organize, revise e publique as notícias do portal.' },
  categorias: { title: 'Categorias', description: 'Gerencie a estrutura editorial e os temas do portal.' },
  envios: { title: 'Envios dos Leitores', description: 'Analise as sugestões e notícias enviadas pela comunidade.' },
  obituario: { title: 'Obituário', description: 'Gerencie os comunicados de falecimento publicados.' },
  classificados: { title: 'Classificados', description: 'Modere anúncios de compra, venda, serviços e empregos.' },
  'guia-comercial': { title: 'Guia Comercial', description: 'Atualize empresas e parceiros em destaque.' },
  eventos: { title: 'Eventos', description: 'Mantenha a agenda de eventos da cidade atualizada.' },
  empregos: { title: 'Empregos', description: 'Publique e gerencie oportunidades profissionais.' },
  usuarios: { title: 'Usuários & Permissões', description: 'Controle acessos e níveis de permissão da equipe.' },
  configuracoes: { title: 'Configurações', description: 'Ajuste as preferências editoriais e comerciais do portal.' },
}

export default function AdminSectionPage({ params }: { params: { section: string } }) {
  const section = sections[params.section] ?? { title: 'Seção administrativa', description: 'Esta área está pronta para receber os dados do seu portal.' }
  return <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0808F5]">Painel CMS</p><h2 className="mt-3 text-3xl font-black text-slate-950">{section.title}</h2><p className="mt-2 max-w-xl text-slate-500">{section.description}</p><div className="mt-8 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center"><p className="font-bold text-slate-700">Nenhum item cadastrado ainda</p><p className="mt-1 text-sm text-slate-500">Os registros desta seção aparecerão aqui quando forem adicionados.</p><Link href="/admin" className="mt-5 inline-flex rounded-lg bg-[#0808F5] px-4 py-2 text-sm font-bold text-white">Voltar ao dashboard</Link></div></section>
}
