import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { prisma } from "@/lib/prisma"

export const dynamic = "force-dynamic"

async function requireAdmin() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

export async function GET() {
  const user = await requireAdmin()
  if (!user) return NextResponse.json({ error: "Não autorizado" }, { status: 401 })

  const ads = await prisma.advertisement.findMany({
    include: { advertiser: true },
    orderBy: { createdAt: "desc" },
  })
  return NextResponse.json(ads)
}

export async function POST(request: Request) {
  const user = await requireAdmin()
  if (!user) return NextResponse.json({ error: "Não autorizado" }, { status: 401 })

  const body = await request.json()
  const required = ["company", "contactName", "email", "phone", "title", "imageUrl", "linkUrl", "position", "startDate", "endDate"]
  if (required.some((field) => !body[field])) {
    return NextResponse.json({ error: "Preencha todos os campos obrigatórios." }, { status: 400 })
  }

  const startDate = new Date(body.startDate)
  const endDate = new Date(body.endDate)
  if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime()) || endDate < startDate) {
    return NextResponse.json({ error: "Período de veiculação inválido." }, { status: 400 })
  }

  const email = body.email.trim().toLowerCase()
  const existingAdvertiser = await prisma.advertiser.findFirst({ where: { email } })
  const advertiser = existingAdvertiser
    ? await prisma.advertiser.update({ where: { id: existingAdvertiser.id }, data: { company: body.company.trim(), contactName: body.contactName.trim(), phone: body.phone.trim() } })
    : await prisma.advertiser.create({ data: { company: body.company.trim(), contactName: body.contactName.trim(), email, phone: body.phone.trim() } })

  const ad = await prisma.advertisement.create({
    data: {
      title: body.title.trim(), imageUrl: body.imageUrl.trim(), linkUrl: body.linkUrl.trim(),
      position: body.position, targetCategory: body.targetCategory?.trim() || null,
      startDate, endDate, status: body.status || "ATIVO", advertiserId: advertiser.id,
    }, include: { advertiser: true },
  })
  return NextResponse.json(ad, { status: 201 })
}
