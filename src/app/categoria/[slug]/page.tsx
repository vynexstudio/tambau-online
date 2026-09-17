import Link from 'next/link'

export default async function CategoriaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const title = slug.charAt(0).toUpperCase() + slug.slice(1)
  return <main className="container mx-auto px-4 py-12"><Link href="/noticias" className="text-sm font-bold text-blue-600">← Todas as notícias</Link><p className="mt-8 text-xs font-black uppercase tracking-[0.2em] text-blue-600">Editoria</p><h1 className="mt-3 text-4xl font-black text-slate-950">{title}</h1><div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center"><h2 className="font-black text-slate-800">Conteúdo em atualização</h2><p className="mt-2 text-sm text-slate-500">As notícias desta editoria aparecerão aqui assim que forem publicadas pela redação.</p></div></main>
}
