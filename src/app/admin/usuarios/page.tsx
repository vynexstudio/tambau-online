'use client'

import { useState } from 'react'

const roles = ['Administrador', 'Editor', 'Autor', 'Colunista', 'Parceiro']

export default function UsuariosPage() {
  const [saved, setSaved] = useState(false)
  return <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0808F5]">Segurança</p><h2 className="mt-3 text-3xl font-black text-slate-950">Usuários e permissões</h2><p className="mt-2 text-slate-500">Convide colaboradores e defina o nível de acesso ao CMS.</p><form className="mt-8 grid gap-5 sm:grid-cols-2" onSubmit={(event) => { event.preventDefault(); setSaved(true) }}><label className="grid gap-2 text-sm font-bold text-slate-700">Nome<input required className="rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none focus:border-blue-500" /></label><label className="grid gap-2 text-sm font-bold text-slate-700">E-mail<input required type="email" className="rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none focus:border-blue-500" /></label><label className="grid gap-2 text-sm font-bold text-slate-700">Permissão<select className="rounded-xl border border-slate-200 bg-white px-4 py-3 font-normal outline-none focus:border-blue-500">{roles.map((role) => <option key={role}>{role}</option>)}</select></label><label className="grid gap-2 text-sm font-bold text-slate-700">Senha temporária<input required type="password" minLength={8} className="rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none focus:border-blue-500" /></label><button type="submit" className="w-fit rounded-xl bg-[#0808F5] px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700">Adicionar usuário</button>{saved && <p role="status" className="sm:col-span-2 text-sm font-bold text-emerald-600">Usuário pronto para ser criado no Supabase Auth.</p>}</form></section>
}
