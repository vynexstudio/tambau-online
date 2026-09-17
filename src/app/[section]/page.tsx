import Link from 'next/link'

const content: Record<string, { title: string; description: string }> = {
  eventos: { title: 'Eventos', description: 'Confira a agenda cultural, esportiva e comunitária de Tambaú.' },
  classificados: { title: 'Classificados', description: 'Encontre produtos, serviços, imóveis, veículos e oportunidades.' },
  empregos: { title: 'Empregos', description: 'Vagas e oportunidades profissionais na cidade e região.' },
}

export default async function SectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params
  const page = content[section] ?? { title: 'Portal Tambaú Online', description: 'Informação e serviços para a nossa comunidade.' }
  return <main className="container mx-auto px-4 py-12"><Link href="/" className="text-sm font-bold text-blue-600">← Voltar para o início</Link><p className="mt-8 text-xs font-black uppercase tracking-[0.2em] text-blue-600">Tambaú Online</p><h1 className="mt-3 text-4xl font-black text-slate-950">{page.title}</h1><p className="mt-3 max-w-2xl text-slate-600">{page.description}</p><div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center"><h2 className="font-black text-slate-800">Nenhum conteúdo publicado</h2><p className="mt-2 text-sm text-slate-500">A equipe está preparando novidades para esta seção.</p><Link href="/anuncie" className="mt-6 inline-flex rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white">Anuncie nesta seção</Link></div></main>
}
