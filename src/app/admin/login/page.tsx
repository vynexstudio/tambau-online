'use client'

import { FormEvent, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { AlertCircle, ArrowRight, LockKeyhole, Mail, Newspaper } from 'lucide-react'

export default function AdminLoginPage() {
  const [mode, setMode] = useState<'login' | 'signup'>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setMessage('')
    const supabase = createClient()
    const result = mode === 'login'
      ? await supabase.auth.signInWithPassword({ email, password })
      : await supabase.auth.signUp({ email, password, options: { data: { name } } })
    setLoading(false)
    if (result.error) return setMessage(result.error.message)
    if (mode === 'signup') setMessage('Cadastro realizado. Verifique seu e-mail para confirmar o acesso.')
    else window.location.href = '/admin'
  }

  return (
    <main className="min-h-screen bg-[#101114] flex items-center justify-center px-5 py-10">
      <section className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-[#0808F5] text-white"><Newspaper /></div>
          <div><p className="text-lg font-black tracking-tight">Tambaú Online</p><p className="text-xs font-bold uppercase tracking-widest text-slate-500">Painel administrativo</p></div>
        </div>
        <h1 className="text-2xl font-black text-slate-950">{mode === 'login' ? 'Acessar painel' : 'Criar primeiro acesso'}</h1>
        <p className="mt-2 text-sm text-slate-500">{mode === 'login' ? 'Entre com seu e-mail e senha de administrador.' : 'Cadastre o responsável pela gestão editorial.'}</p>
        <form onSubmit={handleSubmit} className="mt-7 flex flex-col gap-4">
          {mode === 'signup' && <label className="text-sm font-semibold text-slate-700">Nome<input required value={name} onChange={e => setName(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#0808F5]" placeholder="Nome completo" /></label>}
          <label className="text-sm font-semibold text-slate-700"><Mail className="mr-2 inline size-4" />E-mail<input required type="email" value={email} onChange={e => setEmail(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#0808F5]" placeholder="voce@exemplo.com" /></label>
          <label className="text-sm font-semibold text-slate-700"><LockKeyhole className="mr-2 inline size-4" />Senha<input required minLength={6} type="password" value={password} onChange={e => setPassword(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#0808F5]" placeholder="Mínimo de 6 caracteres" /></label>
          {message && <p role="alert" className="rounded-xl bg-amber-50 p-3 text-sm text-amber-800"><AlertCircle className="mr-2 inline size-4" />{message}</p>}
          <button disabled={loading} className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#0808F5] px-4 py-3 font-bold text-white transition hover:bg-blue-700 disabled:opacity-60">{loading ? 'Aguarde...' : mode === 'login' ? 'Entrar no painel' : 'Criar acesso'}<ArrowRight className="size-4" /></button>
        </form>
        <button onClick={() => { setMode(mode === 'login' ? 'signup' : 'login'); setMessage('') }} className="mt-6 w-full text-center text-sm font-bold text-[#0808F5]">{mode === 'login' ? 'Ainda não tenho acesso' : 'Já tenho uma conta'}</button>
      </section>
    </main>
  )
}
