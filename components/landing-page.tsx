"use client"

import Image from "next/image"

const apkUrl = "https://drive.google.com/uc?export=download&id=1cK-cC08sefHyg8wpGwLy1bMcUs6A8Pko"

const features = [
  ["Report with context", "Share incidents with the details your community needs to understand what happened."],
  ["Trust that grows", "See community and admin trust signals that make information easier to evaluate."],
  ["One place for your family", "Manage family membership, subscriptions, and your case deck from one profile."],
]

export function LandingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f9fc] text-[#0d1830]">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <a href="#top" className="flex items-center gap-3" aria-label="Ngumu's Eye home">
            <span className="grid size-10 place-items-center rounded-xl bg-[#0c1830] text-sm font-black text-white shadow-lg">NE</span>
            <span className="font-heading text-lg font-bold tracking-tight">Ngumu&apos;s Eye</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-[#536078] md:flex">
            <a href="#why" className="transition hover:text-[#168ee8]">Why Ngumu&apos;s Eye</a>
            <a href="#membership" className="transition hover:text-[#168ee8]">Membership</a>
            <a href="#download" className="transition hover:text-[#168ee8]">Download</a>
          </nav>
          <a href={apkUrl} target="_blank" rel="noreferrer" className="rounded-full bg-[#168ee8] px-5 py-2.5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(22,142,232,.25)] transition hover:-translate-y-0.5 hover:bg-[#0876c8]">Get the APK</a>
        </div>
      </header>

      <section id="top" className="relative isolate bg-[#eef6ff] pt-32 lg:pt-40">
        <div className="absolute -right-24 top-20 -z-10 size-80 rounded-full bg-[#d9edff] blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:px-10 lg:pb-24">
          <div className="max-w-2xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#b9dbf6] bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#168ee8]"><span className="size-2 rounded-full bg-[#f3a72f]" /> Built for safer communities</p>
            <h1 className="font-heading text-5xl font-extrabold leading-[1.02] tracking-[-0.05em] text-[#0c1830] sm:text-6xl lg:text-7xl">Your community has a voice. <span className="text-[#168ee8]">Make it count.</span></h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#536078]">Ngumu&apos;s Eye makes community safety structured, visible, and actionable — from the first report to the people who can help.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={apkUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-xl bg-[#168ee8] px-7 py-4 font-bold text-white shadow-[0_14px_30px_rgba(22,142,232,.28)] transition hover:-translate-y-1 hover:bg-[#0876c8]">Download the Android APK <span className="ml-2">↗</span></a>
              <a href="#why" className="inline-flex items-center justify-center rounded-xl border border-[#cbd6e5] bg-white px-7 py-4 font-bold text-[#0c1830] transition hover:border-[#168ee8] hover:text-[#168ee8]">Explore the platform</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-[#65728a]"><span>Android 8.0+</span><span>Free to download</span><span>Built for Namibia</span></div>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute bottom-2 right-10 h-16 w-64 rounded-full bg-[#168ee8]/20 blur-2xl" />
            <Image src="/phone-profile.png" alt="Ngumu's Eye profile screen showing trust and membership details" width={444} height={700} priority className="relative w-[290px] drop-shadow-[0_35px_40px_rgba(12,24,48,.22)] sm:w-[340px] lg:w-[390px]" />
            <div className="absolute -bottom-3 -left-2 hidden rounded-2xl border border-white/80 bg-white p-4 shadow-xl sm:block lg:left-0"><p className="text-xs font-bold uppercase tracking-wider text-[#8995a8]">Community trust</p><p className="mt-1 text-2xl font-extrabold text-[#0c1830]">Clearer. Closer. Safer.</p></div>
          </div>
        </div>
      </section>

      <section id="why" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="text-sm font-bold uppercase tracking-[0.18em] text-[#168ee8]">More than a report</p><h2 className="mt-4 font-heading text-4xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl">A better way to look out for each other.</h2></div><p className="max-w-xl text-lg leading-8 text-[#65728a]">From useful context to visible trust signals, Ngumu&apos;s Eye helps neighbors move from uncertainty to informed action.</p></div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">{features.map(([title, text], index) => <article key={title} className="rounded-3xl border border-[#e1e8f1] bg-white p-7 shadow-[0_12px_40px_rgba(12,24,48,.05)]"><div className="grid size-11 place-items-center rounded-2xl bg-[#e8f5ff] font-heading text-lg font-extrabold text-[#168ee8]">0{index + 1}</div><h3 className="mt-7 font-heading text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-[#65728a]">{text}</p></article>)}</div>
      </section>

      <section id="membership" className="bg-[#0c1830] text-white"><div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:px-10 lg:py-28"><div><p className="text-sm font-bold uppercase tracking-[0.18em] text-[#72c5ff]">Membership, made simple</p><h2 className="mt-4 font-heading text-4xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl">Support the people who matter most.</h2><p className="mt-6 max-w-lg text-lg leading-8 text-[#b7c5da]">Family plans bring shared access, file management, priority response, and support into one calm, connected experience.</p><a href={apkUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-xl bg-[#f3a72f] px-6 py-3.5 font-bold text-[#0c1830] transition hover:bg-[#ffc15a]">Start with the app</a></div><div className="flex justify-center lg:justify-end"><Image src="/phone-membership.png" alt="Ngumu's Eye membership packages screen showing family plans" width={444} height={700} className="w-[290px] sm:w-[340px] lg:w-[370px]" /></div></div></section>

      <section id="download" className="bg-[#f3f7fb] px-5 py-20 text-center sm:px-8 lg:py-24"><p className="text-sm font-bold uppercase tracking-[0.18em] text-[#168ee8]">Ready when you are</p><h2 className="mx-auto mt-4 max-w-3xl font-heading text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">Download Ngumu&apos;s Eye and join the conversation.</h2><p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#65728a]">Install the official Android APK and take a more active role in your community.</p><a href={apkUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-xl bg-[#168ee8] px-8 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#0876c8]">Download APK</a></section>

      <footer className="bg-[#071021] px-5 py-10 text-sm text-[#9aaac0] sm:px-8 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"><p className="font-semibold text-white">Ngumu&apos;s Eye</p><div className="flex flex-wrap gap-5"><a href="/privacy-policy" className="transition hover:text-white">Privacy Policy</a><a href="#membership" className="transition hover:text-white">Membership</a><a href="/request-account-removal" className="transition hover:text-white">Request Account Removal</a></div><p>© 2026 Ngumu&apos;s Eye</p></div></footer>
    </main>
  )
}
