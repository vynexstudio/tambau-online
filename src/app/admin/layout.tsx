'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { LayoutDashboard, FileText, FolderTree, Cross, Tag, Store, Calendar, Briefcase, Inbox, Megaphone, Users, Settings, LogOut, ExternalLink } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

const menuItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/noticias/nova', label: '+ Nova Notícia', icon: FileText, accent: true },
  { href: '/admin/noticias', label: 'Notícias & Rascunhos', icon: FileText },
  { href: '/admin/categorias', label: 'Categorias', icon: FolderTree },
  { href: '/admin/envios', label: 'Envios dos Leitores', icon: Inbox },
  { href: '/admin/obituario', label: 'Obituário', icon: Cross },
  { href: '/admin/classificados', label: 'Classificados', icon: Tag },
  { href: '/admin/guia-comercial', label: 'Guia Comercial', icon: Store },
  { href: '/admin/eventos', label: 'Eventos', icon: Calendar },
  { href: '/admin/empregos', label: 'Empregos', icon: Briefcase },
  { href: '/admin/publicidade', label: 'Banners & Publicidade', icon: Megaphone },
  { href: '/admin/usuarios', label: 'Usuários & Permissões', icon: Users },
  { href: '/admin/configuracoes', label: 'Configurações', icon: Settings },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()

  if (pathname === '/admin/login') return <>{children}</>

  async function signOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.replace('/admin/login')
  }

  return (
    <div className="min-h-screen bg-[#F5F6F8] flex flex-col md:flex-row font-sans">
      <aside className="w-full md:w-64 bg-[#222222] text-white shrink-0 flex flex-col justify-between border-r border-gray-800">
        <div>
          <div className="p-5 border-b border-gray-800 flex items-center justify-between">
            <div><span className="text-xl font-black text-white tracking-tighter">TAMBAÚ <span className="text-[#FF0808]">ONLINE</span></span><span className="block text-[10px] font-bold text-[#0808F5] uppercase tracking-widest mt-0.5">PAINEL CMS</span></div>
            <Link href="/" target="_blank" className="text-gray-400 hover:text-white transition" title="Ver Site Público"><ExternalLink size={18} /></Link>
          </div>
          <nav className="p-3 flex flex-col gap-1 text-xs font-semibold">
            {menuItems.map(({ href, label, icon: Icon, accent }) => {
              const active = href === '/admin' ? pathname === href : pathname.startsWith(href)
              return <Link key={href} href={href} className={`flex items-center gap-3 px-3 py-2.5 rounded transition ${active ? 'bg-[#0808F5] text-white' : accent ? 'text-red-400 hover:bg-gray-800 font-bold' : 'text-gray-300 hover:bg-gray-800'}`}><Icon size={16} />{label}</Link>
            })}
          </nav>
        </div>
        <div className="p-4 border-t border-gray-800 flex items-center justify-between text-xs text-gray-400"><div><p className="font-bold text-white">Redação Tambaú</p><p className="text-[10px]">Administrador</p></div><button onClick={signOut} className="hover:text-red-400 transition" title="Sair"><LogOut size={16} /></button></div>
      </aside>
      <div className="flex-grow flex flex-col"><header className="bg-white border-b border-gray-200 py-3 px-6 flex items-center justify-between"><h1 className="text-sm font-bold text-gray-700 uppercase tracking-wider">Gestão Editorial & Comercial</h1><Link href="/admin/noticias/nova" className="bg-[#FF0808] hover:bg-red-700 text-white text-xs font-bold px-4 py-2 rounded transition flex items-center gap-1 shadow">+ NOVA NOTÍCIA</Link></header><main className="p-6 flex-grow">{children}</main></div>
    </div>
  )
}
