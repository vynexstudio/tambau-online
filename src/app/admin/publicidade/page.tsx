"use client"

import { FormEvent, useEffect, useState } from "react"
import { Calendar, Eye, Loader2, Megaphone, MousePointer, Plus, X } from "lucide-react"

type Ad = { id: string; title: string; position: string; status: string; startDate: string; endDate: string; viewsCount: number; clicksCount: number; advertiser: { company: string } }

const positions = ["BANNER_TOPO", "BANNER_LATERAL", "BANNER_ENTRE_NOTICIAS", "BANNER_DENTRO_DA_MATERIA", "BANNER_RODAPE", "EMPRESA_DESTAQUE", "NOTICIA_PATROCINADA"]
const initialForm = { company: "", contactName: "", email: "", phone: "", title: "", imageUrl: "", linkUrl: "", position: "BANNER_TOPO", targetCategory: "", startDate: "", endDate: "", status: "ATIVO" }

export default function AdminPublicidadePage() {
  const [ads, setAds] = useState<Ad[]>([])
  const [form, setForm] = useState(initialForm)
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState("")

  async function loadAds() {
    const response = await fetch("/api/admin/anuncios", { cache: "no-store" })
    if (response.ok) setAds(await response.json())
    setLoading(false)
  }
  useEffect(() => { loadAds() }, [])

  async function submit(event: FormEvent) {
    event.preventDefault(); setSaving(true); setMessage("")
    const response = await fetch("/api/admin/anuncios", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) })
    const data = await response.json()
    if (!response.ok) setMessage(data.error || "Não foi possível salvar o anúncio.")
    else { setAds((current) => [data, ...current]); setForm(initialForm); setOpen(false); setMessage("Anúncio criado com sucesso.") }
    setSaving(false)
  }

  return <div className="flex flex-col gap-6">
    <div className="flex flex-col gap-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-center sm:justify-between">
      <div><div className="flex items-center gap-2"><Megaphone className="text-[#0808F5]" size={20} /><h1 className="text-xl font-black uppercase text-[#222222]">Publicidade & banners</h1></div><p className="mt-1 text-xs text-gray-500">Cadastre campanhas e acompanhe a veiculação no portal.</p></div>
      <button onClick={() => { setMessage(""); setOpen(true) }} className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#FF0808] px-4 py-2.5 text-xs font-bold text-white shadow transition hover:bg-red-700"><Plus size={15} /> Novo anúncio</button>
    </div>
    {message && <p role="status" className="rounded-lg bg-blue-50 px-4 py-3 text-xs font-semibold text-blue-800">{message}</p>}
    <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white"><table className="w-full min-w-[760px] text-left text-xs"><thead><tr className="border-b bg-gray-50 font-bold text-gray-600"><th className="p-4">Campanha</th><th className="p-4">Anunciante</th><th className="p-4">Posição</th><th className="p-4">Validade</th><th className="p-4">Métricas</th><th className="p-4">Status</th></tr></thead><tbody className="divide-y divide-gray-100">{loading ? <tr><td colSpan={6} className="p-8 text-center text-gray-500">Carregando campanhas...</td></tr> : ads.length === 0 ? <tr><td colSpan={6} className="p-8 text-center text-gray-500">Nenhum anúncio cadastrado. Crie a primeira campanha.</td></tr> : ads.map((ad) => <tr key={ad.id} className="hover:bg-gray-50"><td className="p-4 font-bold text-gray-900">{ad.title}</td><td className="p-4 text-gray-600">{ad.advertiser.company}</td><td className="p-4 font-bold text-[#0808F5]">{ad.position.replaceAll("_", " ")}</td><td className="p-4 text-gray-600">{new Date(ad.startDate).toLocaleDateString("pt-BR")} — {new Date(ad.endDate).toLocaleDateString("pt-BR")}</td><td className="p-4 text-gray-600"><span className="flex items-center gap-2"><Eye size={12} /> {ad.viewsCount} <MousePointer size={12} /> {ad.clicksCount}</span></td><td className="p-4"><span className="rounded-full bg-green-100 px-2 py-1 text-[10px] font-bold text-green-800">{ad.status}</span></td></tr>)}</tbody></table></div>
    {open && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"><div role="dialog" aria-modal="true" aria-labelledby="new-ad-title" className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl"><div className="mb-5 flex items-center justify-between"><div><h2 id="new-ad-title" className="text-lg font-black text-gray-900">Novo anúncio</h2><p className="text-xs text-gray-500">A campanha ficará disponível no painel após o cadastro.</p></div><button type="button" aria-label="Fechar" onClick={() => setOpen(false)} className="rounded-full p-2 text-gray-500 hover:bg-gray-100"><X size={18} /></button></div><form onSubmit={submit} className="grid gap-4 sm:grid-cols-2"><label className="text-xs font-bold text-gray-700">Empresa<input required value={form.company} onChange={e => setForm({...form, company: e.target.value})} className="mt-1 w-full rounded-lg border p-2.5 font-normal" /></label><label className="text-xs font-bold text-gray-700">Responsável<input required value={form.contactName} onChange={e => setForm({...form, contactName: e.target.value})} className="mt-1 w-full rounded-lg border p-2.5 font-normal" /></label><label className="text-xs font-bold text-gray-700">E-mail<input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="mt-1 w-full rounded-lg border p-2.5 font-normal" /></label><label className="text-xs font-bold text-gray-700">Telefone<input required value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="mt-1 w-full rounded-lg border p-2.5 font-normal" /></label><label className="text-xs font-bold text-gray-700 sm:col-span-2">Título da campanha<input required value={form.title} onChange={e => setForm({...form, title: e.target.value})} className="mt-1 w-full rounded-lg border p-2.5 font-normal" /></label><label className="text-xs font-bold text-gray-700 sm:col-span-2">URL da imagem<input required type="url" placeholder="https://..." value={form.imageUrl} onChange={e => setForm({...form, imageUrl: e.target.value})} className="mt-1 w-full rounded-lg border p-2.5 font-normal" /></label><label className="text-xs font-bold text-gray-700 sm:col-span-2">Link de destino<input required type="url" placeholder="https://..." value={form.linkUrl} onChange={e => setForm({...form, linkUrl: e.target.value})} className="mt-1 w-full rounded-lg border p-2.5 font-normal" /></label><label className="text-xs font-bold text-gray-700">Posição<select value={form.position} onChange={e => setForm({...form, position: e.target.value})} className="mt-1 w-full rounded-lg border bg-white p-2.5 font-normal">{positions.map(position => <option key={position}>{position}</option>)}</select></label><label className="text-xs font-bold text-gray-700">Categoria (opcional)<input value={form.targetCategory} onChange={e => setForm({...form, targetCategory: e.target.value})} className="mt-1 w-full rounded-lg border p-2.5 font-normal" /></label><label className="text-xs font-bold text-gray-700">Início<input required type="date" value={form.startDate} onChange={e => setForm({...form, startDate: e.target.value})} className="mt-1 w-full rounded-lg border p-2.5 font-normal" /></label><label className="text-xs font-bold text-gray-700">Fim<input required type="date" value={form.endDate} onChange={e => setForm({...form, endDate: e.target.value})} className="mt-1 w-full rounded-lg border p-2.5 font-normal" /></label><div className="flex justify-end gap-2 pt-3 sm:col-span-2"><button type="button" onClick={() => setOpen(false)} className="rounded-lg border px-4 py-2 text-xs font-bold text-gray-600">Cancelar</button><button disabled={saving} className="inline-flex items-center gap-2 rounded-lg bg-[#0808F5] px-4 py-2 text-xs font-bold text-white disabled:opacity-60">{saving && <Loader2 className="animate-spin" size={14} />} Salvar anúncio</button></div></form></div></div>}
  </div>
}
