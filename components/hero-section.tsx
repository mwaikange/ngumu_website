"use client"

import Image from "next/image"

export function HeroSection() {
  const scrollToHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="gradient-hero text-white pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="bg-blue-100/20 text-blue-100 py-3 px-6 rounded-full font-semibold text-sm inline-flex items-center gap-2 mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Community Trusted Platform
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight font-heading text-balance">
              See It. Report It. Protect Your Community.
            </h1>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              {"Ngumu's Eye is a trusted community safety platform that helps you report incidents, track verification, and stay informed about what's happening in your neighborhood."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://drive.google.com/file/d/1cK-cC08sefHyg8wpGwLy1bMcUs6A8Pko/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button px-8 py-3 rounded-lg text-white font-semibold hover:shadow-xl inline-flex items-center justify-center"
              >
                {"📱 Download APK"}
              </a>
              <button 
                onClick={scrollToHowItWorks}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300"
              >
                {"How It Works →"}
              </button>
            </div>
            <p className="text-sm text-blue-100 mt-6 flex items-center gap-1 flex-wrap">
              <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span>Free to Download</span>
              <span className="mx-1">{"•"}</span>
              <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span>Android Only</span>
              <span className="mx-1">{"•"}</span>
              <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span>v1.0.0.1</span>
            </p>
          </div>
          
          {/* Right Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="animate-float">
              <Image 
                src="https://tdkeamquekkpalauorpk.supabase.co/storage/v1/object/public/email%20banner/ngumu-logo.png" 
                alt="Ngumu's Eye" 
                width={256}
                height={256}
                priority
                className="w-48 h-48 lg:w-64 lg:h-64 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
