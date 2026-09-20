import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#071021] px-5 pb-5 pt-12 text-[#d7e2f0] sm:px-8 lg:px-0">
      <div className="mx-auto max-w-[1216px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.1fr_1.1fr_1fr] md:gap-16">
          <div>
            <div className="flex items-center gap-3"><Image src="/ngumus-eye-logo.png" alt="Ngumu&apos;s Eye logo" width={42} height={42} className="size-10 object-contain" /><h3 className="font-heading text-base font-bold text-white">{"About Ngumu's Eye"}</h3></div>
            <p className="mt-5 max-w-sm text-sm leading-6">A community-powered safety platform for Namibia that makes incident reporting structured, verified, and actionable.</p>
          </div>

          <div>
            <h3 className="font-heading text-base font-bold text-white">Support</h3>
            <div className="mt-5 space-y-3 text-sm">
              <p><strong>Email:</strong>{" "}<a href="mailto:ngumuseye@gmail.com" className="transition-colors hover:text-white">ngumuseye@gmail.com</a></p>
              <p><strong>WhatsApp:</strong>{" "}<a href="https://wa.me/264816802064" className="transition-colors hover:text-white">+264 81 680 2064</a></p>
              <p><strong>Website:</strong>{" "}<a href="https://www.ngumus-eye.site" className="transition-colors hover:text-white">www.ngumus-eye.site</a></p><p className="max-w-xs leading-6">Ngumu&apos;s Eye Surveillance &amp; Tracing Services CC</p>
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
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-[#334155] pt-8 text-sm md:flex-row md:items-center md:justify-between">
          <p>{"© 2026 Ngumu's Eye. All rights reserved. | Social Welfare & Community App | Namibia"}</p>
          <p>App &amp; Site developed By <a href="https://mwaikange.com" target="_blank" rel="noreferrer" className="font-semibold text-white transition-colors hover:text-[#078fe8]">Mwaikange Software Inc</a></p>
        </div>
      </div>
    </footer>
  )
}
