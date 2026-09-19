import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { z } from 'zod'

const requestSchema = z.object({ firstName: z.string().trim().min(1).max(80), lastName: z.string().trim().min(1).max(80), email: z.string().trim().email().max(160), accountUid: z.string().trim().min(1).max(160), phone: z.string().trim().min(5).max(40), reason: z.string().trim().max(2000).optional().default('Not provided'), acknowledged: z.literal('on') })

export async function POST(request: Request) {
  try {
    const values = requestSchema.parse(await request.json())
    const host = process.env.SMTP_HOST
    const port = Number(process.env.SMTP_PORT || 587)
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASSWORD
    if (!host || !user || !pass) return NextResponse.json({ error: 'Email service is not configured' }, { status: 503 })
    const transporter = nodemailer.createTransport({ host, port, secure: process.env.SMTP_SECURE === 'true', auth: { user, pass } })
    await transporter.sendMail({ from: process.env.SMTP_FROM || user, to: 'ngumuseye@gmail.com', replyTo: values.email, subject: `Account removal request: ${values.accountUid}`, text: [`Account removal request`, `Name: ${values.firstName} ${values.lastName}`, `Email: ${values.email}`, `Account UID: ${values.accountUid}`, `Phone: ${values.phone}`, `Reason: ${values.reason}`].join('\\n') })
    return NextResponse.json({ success: true })
  } catch { return NextResponse.json({ error: 'Invalid request' }, { status: 400 }) }
}
