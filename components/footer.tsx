import Image from "next/image"
import Link from "next/link"

const apkUrl = "https://drive.google.com/uc?export=download&id=1cK-cC08sefHyg8wpGwLy1bMcUs6A8Pko"

export function Footer() {
  return (
    <footer className="bg-[#071021] px-5 pb-5 pt-12 text-[#d7e2f0] sm:px-8 lg:px-0">
      <div className="mx-auto max-w-[1216px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.1fr_1.1fr_1fr_0.9fr] md:gap-12">
          <div>
            <div className="flex items-center gap-3"><Image src="/ngumus-eye-logo.png" alt="Ngumu&apos;s Eye logo" width={42} height={42} className="size-10 object-contain" /><h3 className="font-heading text-base font-bold text-white">{"About Ngumu's Eye"}</h3></div>
            <p className="mt-5 max-w-sm text-sm leading-6">A community-powered safety platform for Namibia that makes incident reporting structured, verified, and actionable.</p>
          </div>

          <div>
            <h3 className="font-heading text-base font-bold text-white">Support</h3>
            <div className="mt-5 space-y-3 text-sm">
              <p><strong>Email:</strong>{" "}<a href="mailto:ngumuseye@gmail.com" className="transition-colors hover:text-white">ngumuseye@gmail.com</a></p>
              <p><strong>WhatsApp:</strong>{" "}<a href="https://wa.me/264816802064" className="transition-colors hover:text-white">+264 81 680 2064</a></p>
              <p><strong>Website:</strong>{" "}<a href="https://www.ngumus-eye.site" className="transition-colors hover:text-white">www.ngumus-eye.site</a></p><p className="max-w-none whitespace-nowrap text-xs leading-6">Ngumu&apos;s Eye Surveillance &amp; Tracing Services CC</p>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-base font-bold text-white">Legal</h3>
            <div className="mt-5 space-y-3 text-sm">
              <p><Link href="/privacy-policy" className="transition-colors hover:text-white">Privacy Policy</Link></p>
              <p><Link href="/terms-of-service" className="transition-colors hover:text-white">Terms of Service</Link></p>
              <p><Link href="/request-account-removal" className="transition-colors hover:text-white">Security</Link></p>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-base font-bold text-white">Get the app</h3>
            <div className="mt-5 flex flex-col items-start gap-2"><div className="inline-flex w-[156px] items-center gap-2 rounded-xl bg-black px-3 py-2 text-white"><img src="/apple-logo.svg" alt="Apple" className="size-5 invert" /><span className="leading-tight"><span className="block text-[8px]">Download on the</span><span className="block text-xs font-semibold">App Store</span></span></div><div className="inline-flex w-[156px] items-center gap-2 rounded-xl bg-black px-3 py-2 text-white"><img src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/google-play/default.svg" alt="Google Play" className="size-5" /><span className="leading-tight"><span className="block text-[8px]">GET IT ON</span><span className="block text-xs font-semibold">Google Play</span></span></div><a href={apkUrl} target="_blank" rel="noreferrer" className="inline-flex w-[156px] items-center gap-2 rounded-xl bg-[#168b63] px-3 py-2 text-white"><span className="text-lg" aria-hidden="true">↓</span><span className="leading-tight"><span className="block text-[8px]">DIRECT DOWNLOAD</span><span className="block text-xs font-semibold">Android APK</span></span></a></div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-[#334155] pt-8 text-sm md:flex-row md:items-center md:justify-between">
          <p>{"© 2026 Ngumu's Eye. All rights reserved. | Social Welfare & Community App | Namibia"}</p>
          <p className="text-xs">App &amp; Site developed By <a href="https://mwaikange.com" target="_blank" rel="noreferrer" className="font-normal text-inherit transition-colors hover:text-[#078fe8]">Mwaikange Software Inc</a></p>
        </div>
      </div>
    </footer>
  )
}
