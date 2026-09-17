import Link from 'next/link'

const sections = [
  { title: 'Últimas notícias', description: 'Acompanhe as principais informações de Tambaú e região.' },
  { title: 'Cidade', description: 'Serviços, cotidiano e acontecimentos locais.' },
  { title: 'Política', description: 'Informação e transparência sobre a vida pública.' },
  { title: 'Segurança', description: 'Ocorrências e prevenção na comunidade.' },
]

export default function NoticiasPage() {
  return <main className="container mx-auto px-4 py-12"><p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">Tambaú Online</p><h1 className="mt-3 text-4xl font-black text-slate-950">Notícias</h1><p className="mt-3 max-w-2xl text-slate-600">Conteúdo local com apuração, responsabilidade e atualização diária.</p><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{sections.map((section) => <Link key={section.title} href={`/categoria/${section.title.toLowerCase()}`} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300"><h2 className="font-black text-slate-950">{section.title}</h2><p className="mt-2 text-sm leading-6 text-slate-500">{section.description}</p><span className="mt-5 inline-block text-sm font-bold text-blue-600">Acessar editoria</span></Link>)}</div></main>
} 
