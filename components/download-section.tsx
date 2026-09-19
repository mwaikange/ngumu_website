"use client"

import { useEffect, useRef } from "react"

const installSteps = [
  {
    number: 1,
    title: "Tap Download APK",
    description: "Click the download button above to get the APK file."
  },
  {
    number: 2,
    title: "Open File",
    description: "Find the file in your Downloads folder and tap to open it."
  },
  {
    number: 3,
    title: "Allow Installation",
    description: "Your phone may ask permission to install from unknown sources. Tap \"Install\" to proceed."
  },
  {
    number: 4,
    title: "Launch & Sign Up",
    description: "Once installed, open Ngumu's Eye and create your account to get started."
  }
]

export function DownloadSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
            entry.target.classList.remove("opacity-0", "translate-y-5")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    const elements = sectionRef.current?.querySelectorAll(".scroll-animate")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="download" className="py-20 bg-gradient-to-b from-white to-gray-50" ref={sectionRef}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center font-heading">
          {"Download Ngumu's Eye Now"}
        </h2>
        <p className="text-center text-gray-600 mb-12">Choose how you want to get the app</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* APK Download (Primary) */}
          <div className="md:col-span-1 scroll-animate opacity-0 translate-y-5 transition-all duration-600">
            <div className="glass-card p-8 rounded-lg shadow-lg border-2 border-blue-900">
              <div className="text-center mb-6">
                <div className="text-5xl mb-3">📱</div>
                <h3 className="text-xl font-bold text-gray-900 font-heading">Android APK</h3>
                <p className="text-sm text-gray-500 mt-1">Direct Download</p>
              </div>
              
              <div className="space-y-3 mb-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Version 1.0.0.1</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Android 8.0+</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>~45 MB</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Official Build</span>
                </div>
              </div>
              
              <a 
                href="https://drive.google.com/uc?export=download&id=1cK-cC08sefHyg8wpGwLy1bMcUs6A8Pko" 
                className="cta-button w-full py-3 rounded-lg text-white font-bold text-center block"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"🔗 Download APK"}
              </a>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                Safe to install directly to your device
              </p>
            </div>
          </div>
          
          {/* Google Play Store (Coming Soon) */}
          <div className="md:col-span-1 scroll-animate opacity-0 translate-y-5 transition-all duration-600">
            <div className="bg-gray-100 border-2 border-dashed border-gray-300 p-8 rounded-lg text-center transition-all duration-300 hover:border-blue-900 hover:bg-slate-50">
              <img src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/google-play/default.svg" alt="Google Play" className="mx-auto mb-3 h-12 w-12" />
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">Google Play Store</h3>
              <div className="bg-gray-200 text-gray-600 font-semibold py-3 px-4 rounded-lg mb-4">
                {"Coming Soon"}
              </div>
              <p className="text-sm text-gray-600">
                {"We're working on bringing Ngumu's Eye to the Google Play Store for easier access and updates."}
              </p>
            </div>
          </div>
          
          {/* Apple App Store (Coming Soon) */}
          <div className="md:col-span-1 scroll-animate opacity-0 translate-y-5 transition-all duration-600">
            <div className="bg-gray-100 border-2 border-dashed border-gray-300 p-8 rounded-lg text-center transition-all duration-300 hover:border-blue-900 hover:bg-slate-50">
              <img src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/apple/default.svg" alt="Apple App Store" className="mx-auto mb-3 h-12 w-12" />
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">Apple App Store</h3>
              <div className="bg-gray-200 text-gray-600 font-semibold py-3 px-4 rounded-lg mb-4">
                {"Coming Soon"}
              </div>
              <p className="text-sm text-gray-600">
                {"iOS support is in development. We're building an equally powerful experience for Apple users."}
              </p>
            </div>
          </div>
        </div>

        {/* Installation Steps */}
        <div className="mt-16 bg-blue-50 border-l-4 border-blue-900 p-8 rounded">
          <h3 className="text-lg font-bold text-gray-900 mb-6 font-heading">How to Install the APK</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {installSteps.map((step) => (
              <div key={step.number}>
                <div className="flex gap-4 mb-6">
                  <div className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{step.title}</h4>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
