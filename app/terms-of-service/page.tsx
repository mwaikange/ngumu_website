import type { Metadata } from "next"
import Link from "next/link"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Service | Ngumu's Eye",
  description: "Terms governing use of the Ngumu's Eye community safety platform.",
}

const sections = [
  ["1. About these terms", "These Terms of Service govern your access to and use of Ngumu's Eye, a community safety and support platform for Namibia. By creating an account, downloading the app, or using our services, you agree to these terms. If you do not agree, please do not use the platform."],
  ["2. Our service", "Ngumu's Eye helps people share safety information, report incidents, organise supporting details, and access community and membership features. The platform is provided to support awareness and coordination. It is not an emergency service, law-enforcement service, medical service, legal service, or substitute for contacting the appropriate authorities."],
  ["3. Accounts and information", "You are responsible for providing accurate information, protecting your login details, and keeping your account secure. You may only create and use an account for yourself. Tell us promptly if you believe your account has been accessed without permission."],
  ["4. Community reporting", "Only submit information you reasonably believe is accurate and relevant. Do not submit knowingly false reports, impersonate another person, expose private information without permission, threaten others, or use the platform to harass, discriminate, defame, or encourage harm. A report may be reviewed, limited, removed, or referred to the appropriate authority."],
  ["5. Memberships and payments", "Some membership plans and features are paid. Prices and included features will be shown before activation. Plans may be paid locally through PaySME and other payment options made available in the app. Payment processing may be provided by a third party, and you agree to follow that provider's applicable terms. We do not provide loans or financial advice through Ngumu's Eye."],
  ["6. Content and permissions", "You keep ownership of content you submit. You give Ngumu's Eye permission to host, process, review, and display that content as needed to operate, secure, improve, and promote the platform. Do not upload content that you do not have the right to share."],
  ["7. Privacy and safety", "We handle personal information according to our Privacy Policy. No online service can guarantee uninterrupted availability or absolute security, so keep your account details private and use the latest supported version of the app."],
  ["8. Availability and changes", "We may update, suspend, or discontinue parts of the platform, including features and membership plans. We may update these terms when the service or applicable law changes. The updated version will apply from its stated effective date."],
  ["9. Suspension and termination", "We may suspend or close an account if it breaches these terms, creates a safety risk, involves fraud or abuse, or is required by law. You may request account removal through the account-removal page. Provisions that should reasonably continue after termination will remain in effect."],
  ["10. Contact", "For questions about these terms, contact us at ngumuseye@gmail.com or WhatsApp +264 81 680 2064. These terms are governed by the applicable laws of Namibia, subject to any rights you have under mandatory consumer-protection law."],
]

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#f7f9fc] text-[#101b33]">
      <header className="bg-[#eaf5ff] px-5 py-6 sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="flex items-center gap-3" aria-label="Ngumu's Eye home"><span className="grid size-10 place-items-center rounded-xl bg-[#10234a] text-xs font-black text-white">NE</span><span className="font-heading text-lg font-bold">Ngumu&apos;s Eye</span></Link>
          <Link href="/" className="inline-flex items-center gap-2 rounded-lg border border-[#c7d5e5] bg-white px-4 py-2 text-sm font-semibold text-[#10234a] hover:border-[#078fe8]">← Back home</Link>
        </div>
        <div className="mx-auto max-w-4xl">
          <a href="/" className="text-sm font-semibold text-[#9edbff]">Ngumu&apos;s Eye</a>
          <h1 className="mt-8 font-heading text-4xl font-extrabold tracking-tight sm:text-6xl">Terms of Service</h1>
          <p className="mt-4 text-[#c7d5e5]">Effective date: September 19, 2026</p>
        </div>
      </header>
      <article className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
        <p className="max-w-3xl text-lg leading-8 text-[#60708a]">Please read these terms carefully. They explain how Ngumu&apos;s Eye can be used and the responsibilities that come with participating in a community safety platform.</p>
        <div className="mt-12 space-y-10">
          {sections.map(([heading, text]) => (
            <section key={heading}>
              <h2 className="font-heading text-2xl font-bold">{heading}</h2>
              <p className="mt-3 leading-8 text-[#60708a]">{text}</p>
            </section>
          ))}
        </div>
      </article>
      <Footer />
    </div>
  )
}
