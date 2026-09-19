import Link from 'next/link'
import { Footer } from '@/components/footer'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#f7f9fc] text-[#101b33]">
      <header className="bg-[#eaf5ff] px-5 py-6 sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="flex items-center gap-3" aria-label="Ngumu's Eye home"><span className="grid size-10 place-items-center rounded-xl bg-[#10234a] text-xs font-black text-white">NE</span><span className="font-heading text-lg font-bold">Ngumu&apos;s Eye</span></Link>
          <Link href="/" className="inline-flex items-center gap-2 rounded-lg border border-[#c7d5e5] bg-white px-4 py-2 text-sm font-semibold text-[#10234a] hover:border-[#078fe8]">← Back home</Link>
        </div>
      </header>
      <main className="px-5 py-12 sm:px-8 sm:py-16"><article className="mx-auto max-w-3xl rounded-2xl border border-[#dce7f2] bg-white p-7 shadow-sm sm:p-10"><h1 className="font-heading text-4xl font-extrabold text-[#10234a]">Privacy Policy</h1><p className="mt-3 text-sm text-[#60708a]">Last updated: September 19, 2026</p><div className="mt-8 space-y-7 text-sm leading-7 text-[#60708a]"><section><h2 className="font-heading text-lg font-bold text-[#10234a]">1. Information we collect</h2><p>Ngumu&apos;s Eye may collect account details, contact information, incident reports, device information, and communications you choose to provide.</p></section><section><h2 className="font-heading text-lg font-bold text-[#10234a]">2. How we use information</h2><p>We use information to provide safety reporting services, verify submissions, communicate with users, prevent abuse, improve reliability, and comply with applicable law. We do not sell personal information.</p></section><section><h2 className="font-heading text-lg font-bold text-[#10234a]">3. Sharing and retention</h2><p>Information may be shared with trusted service providers who help us operate the platform, or when required to protect people and comply with legal obligations. We retain information only as reasonably necessary.</p></section><section><h2 className="font-heading text-lg font-bold text-[#10234a]">4. Your choices</h2><p>You may ask to access, correct, or delete your account information through our <Link href="/request-account-removal" className="font-semibold text-[#078fe8] underline">Request Account Removal</Link> page.</p></section><section><h2 className="font-heading text-lg font-bold text-[#10234a]">5. Contact</h2><p>Questions can be sent to ngumuseye@gmail.com or WhatsApp +264 81 680 2064.</p></section></div></article></main>
      <Footer />
    </div>
  )
}
