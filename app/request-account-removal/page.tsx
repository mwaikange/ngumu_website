'use client'

import { FormEvent, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Footer } from '@/components/footer'

export default function RequestAccountRemovalPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    const response = await fetch('/api/account-removal', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
    setStatus(response.ok ? 'success' : 'error')
    if (response.ok) form.reset()
  }

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-950">
      <header className="bg-[#eaf5ff] px-5 py-6 sm:px-8"><div className="mx-auto flex max-w-7xl items-center justify-between"><Link href="/" className="flex items-center gap-3" aria-label="Ngumu's Eye home"><span className="grid size-10 place-items-center rounded-xl bg-[#10234a] text-xs font-black text-white">NE</span><span className="font-heading text-lg font-bold">Ngumu&apos;s Eye</span></Link><Link href="/" className="inline-flex items-center gap-2 rounded-lg border border-[#c7d5e5] bg-white px-4 py-2 text-sm font-semibold text-[#10234a] hover:border-[#078fe8]">← Back home</Link></div></header>
      <div className="mx-auto max-w-5xl px-4 py-10">
        <Link href="/" className="mb-8 hidden items-center gap-2 text-sm font-semibold text-indigo-900 hover:underline"><ArrowLeft data-icon="inline-start" /> Back to Ngumu&apos;s Eye</Link>
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <h1 className="text-2xl font-bold text-indigo-950">What happens next</h1>
            <div className="mt-7 flex flex-col gap-6">
              {[['Submit your request', 'Provide the details associated with your Ngumu’s Eye account.'], ['Verify your identity', 'Our support team may contact you to protect your account from unauthorized deletion.'], ['Account and data deletion', 'Once verified, we will process the request within 30 days.']].map(([title, text], index) => <div className="flex gap-3" key={title}><span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-800">{index + 1}</span><div><h2 className="font-semibold">{title}</h2><p className="mt-1 text-sm leading-relaxed text-slate-500">{text}</p></div></div>)}
            </div>
            <div className="mt-8 rounded-xl border-l-2 border-teal-600 bg-teal-50 p-4"><p className="text-sm font-semibold text-indigo-950">Data we may retain</p><p className="mt-2 text-xs leading-relaxed text-slate-600">Information needed for legal, regulatory, fraud-prevention, or financial-record obligations may be retained for the applicable period.</p></div>
          </aside>
          <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
            <div className="mb-7"><div className="mb-3 flex items-center gap-2 text-teal-700"><ShieldCheck data-icon="inline-start" /><span className="text-sm font-semibold">Privacy request</span></div><h2 className="text-2xl font-bold text-indigo-950">Account details</h2><p className="mt-2 text-sm text-slate-500">Fields marked with * are required. Please use the information registered on your account.</p></div>
            {status === 'success' ? <div className="rounded-xl bg-teal-50 p-6 text-center"><CheckCircle2 className="mx-auto text-teal-700" /><h3 className="mt-3 font-bold text-indigo-950">Request submitted</h3><p className="mt-2 text-sm text-slate-600">We received your request and will contact you if identity verification is needed.</p><Link href="/" className="mt-5 inline-block text-sm font-semibold text-indigo-900 hover:underline">Return home</Link></div> : <form onSubmit={handleSubmit} className="flex flex-col gap-5"><div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-semibold">First name *<Input required name="firstName" className="mt-2" /></label><label className="text-sm font-semibold">Last name *<Input required name="lastName" className="mt-2" /></label></div><label className="text-sm font-semibold">Email address *<Input required type="email" name="email" className="mt-2" /></label><div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-semibold">Account UID *<Input required name="accountUid" className="mt-2" /></label><label className="text-sm font-semibold">Registered phone number *<Input required name="phone" placeholder="e.g. +264 81 000 0000" className="mt-2" /></label></div><label className="text-sm font-semibold">Reason for deletion <span className="font-normal text-slate-500">(optional)</span><Textarea name="reason" className="mt-2 min-h-32" /></label><label className="flex items-start gap-2 text-xs leading-relaxed text-slate-600"><input required type="checkbox" name="acknowledged" className="mt-0.5" />I understand that deleting my account is permanent, removes access to my Ngumu&apos;s Eye profile, and may require identity verification.</label>{status === 'error' && <p className="text-sm text-red-700">We could not submit your request. Please try again or email ngumuseye@gmail.com.</p>}<Button type="submit" disabled={status === 'submitting'} className="w-full bg-indigo-950 hover:bg-indigo-900">{status === 'submitting' ? 'Submitting request…' : 'Submit removal request'}</Button><p className="text-center text-xs text-slate-500">Prefer email? <a className="font-semibold text-teal-700 underline" href="mailto:ngumuseye@gmail.com">Send the request by email instead</a></p></form>}
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
