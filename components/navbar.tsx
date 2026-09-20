"use client"

import Image from "next/image"

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Image 
              src="/ngumus-eye-logo.png" 
              alt="Ngumu's Eye Logo" 
              width={56} 
              height={56}
              priority
              className="w-14 h-14"
            />
            <span className="font-extrabold text-2xl text-gray-900 font-heading">{"Ngumu's Eye"}</span>
          </div>
          <a 
            href="https://drive.google.com/uc?export=download&id=1cK-cC08sefHyg8wpGwLy1bMcUs6A8Pko"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button px-6 py-2 rounded-lg text-white font-semibold text-sm"
          >
            Download Now
          </a>
        </div>
      </div>
    </nav>
  )
}
