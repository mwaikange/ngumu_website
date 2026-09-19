import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4 font-heading">{"About Ngumu's Eye"}</h3>
            <p className="text-sm leading-relaxed">
              A community-powered safety platform for Namibia that makes incident reporting structured, verified, and actionable.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4 font-heading">Support</h3>
            <div className="text-sm space-y-2">
              <p>
                {"📧 "}<strong>Email:</strong>{" "}
                <a href="mailto:ngumuseye@gmail.com" className="hover:text-white transition-colors">
                  ngumuseye@gmail.com
                </a>
              </p>
              <p>
                {"📱 "}<strong>WhatsApp:</strong>{" "}
                <a href="https://wa.me/264816802064" className="hover:text-white transition-colors">
                  +264 81 680 2064
                </a>
              </p>
              <p>
                {"🌐 "}<strong>Website:</strong>{" "}
                <a href="https://www.ngumus-eye.site" className="hover:text-white transition-colors">
                  www.ngumus-eye.site
                </a>
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4 font-heading">Legal</h3>
            <div className="text-sm space-y-2">
              <p><Link href="#privacy" className="hover:text-white transition-colors">Privacy Policy</Link></p>
              <p><Link href="#terms" className="hover:text-white transition-colors">Terms of Service</Link></p>
              <p><Link href="#security" className="hover:text-white transition-colors">Security</Link></p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">{"© 2026 Ngumu's Eye. All rights reserved. | Social Welfare & Community App | Namibia"}</p>
            <p className="text-sm mt-4 md:mt-0">{"Ngumu's Eye v1.0.0.1"}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
