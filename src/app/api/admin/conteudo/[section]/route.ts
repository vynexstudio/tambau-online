import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { createClient } from '@/lib/supabase/server'

const models = {
  categorias: { model: 'category', fields: ['name', 'slug', 'order', 'active'] },
  obituario: { model: 'obituary', fields: ['fullName', 'deathDate', 'birthDate', 'age', 'wakeLocation', 'wakeTime', 'burialLocation', 'burialTime', 'message', 'photoUrl'] },
  classificados: { model: 'classified', fields: ['title', 'description', 'price', 'category', 'status', 'contactName', 'whatsapp', 'phone', 'location'] },
  'guia-comercial': { model: 'business', fields: ['name', 'category', 'description', 'phone', 'whatsapp', 'instagram', 'facebook', 'website', 'address', 'workingHours', 'tier', 'active', 'logoUrl'] },
  eventos: { model: 'event', fields: ['title', 'description', 'eventDate', 'eventTime', 'location', 'organizer', 'whatsapp', 'isFeatured', 'imageUrl'] },
  empregos: { model: 'job', fields: ['company', 'title', 'description', 'requirements', 'salary', 'benefits', 'location', 'contact', 'deadline'] },
  envios: { model: 'submission', fields: ['senderName', 'whatsapp', 'email', 'title', 'description', 'location', 'status'] },
} as const

async function authorized() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

export async function GET(_: Request, { params }: { params: Promise<{ section: string }> }) {
  if (!await authorized()) return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
  const { section } = await params
  const config = models[section as keyof typeof models]
  if (!config) return NextResponse.json({ error: 'Seção inválida' }, { status: 404 })
  const rows = await (prisma as any)[config.model].findMany({ orderBy: { createdAt: 'desc' }, take: 100 })
  return NextResponse.json(rows)
}

export async function POST(request: Request, { params }: { params: Promise<{ section: string }> }) {
  if (!await authorized()) return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
  const { section } = await params
  const config = models[section as keyof typeof models]
  if (!config) return NextResponse.json({ error: 'Seção inválida' }, { status: 404 })
  const body = await request.json()
  const data = Object.fromEntries(config.fields.filter((field) => body[field] !== undefined && body[field] !== '').map((field) => [field, body[field]]))
  if (section === 'classificados') data.images = []
  if (section === 'guia-comercial') data.photos = []
  if (section === 'envios') data.mediaUrls = []
  if (data.slug === undefined && section === 'categorias' && data.name) data.slug = String(data.name).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  if (data.deathDate) data.deathDate = new Date(data.deathDate)
  if (data.birthDate) data.birthDate = new Date(data.birthDate)
  if (data.eventDate) data.eventDate = new Date(data.eventDate)
  if (data.deadline) data.deadline = new Date(data.deadline)
  if (data.age) data.age = Number(data.age)
  if (data.order) data.order = Number(data.order)
  if (data.price) data.price = Number(data.price)
  const row = await (prisma as any)[config.model].create({ data })
  return NextResponse.json(row, { status: 201 })
}

export async function PATCH(request: Request, { params }: { params: Promise<{ section: string }> }) {
  if (!await authorized()) return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
  const { section } = await params
  const config = models[section as keyof typeof models]
  if (!config) return NextResponse.json({ error: 'Seção inválida' }, { status: 404 })
  const { id, ...body } = await request.json()
  if (!id) return NextResponse.json({ error: 'ID obrigatório' }, { status: 400 })
  const data = Object.fromEntries(config.fields.filter((field) => body[field] !== undefined).map((field) => [field, body[field]]))
  for (const field of ['deathDate', 'birthDate', 'eventDate', 'deadline']) if (data[field]) data[field] = new Date(data[field])
  const row = await (prisma as any)[config.model].update({ where: { id }, data })
  return NextResponse.json(row)
}

export async function DELETE(request: Request, { params }: { params: Promise<{ section: string }> }) {
  if (!await authorized()) return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
  const { section } = await params
  const config = models[section as keyof typeof models]
  if (!config) return NextResponse.json({ error: 'Seção inválida' }, { status: 404 })
  const { id } = await request.json()
  await (prisma as any)[config.model].delete({ where: { id } })
  return NextResponse.json({ ok: true })
}
const _ = NextResponse
void _
