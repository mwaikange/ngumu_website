"use client"

import { useState } from "react"

const faqs = [
  {
    question: "Is Ngumu's Eye safe to download?",
    answer: "Yes, absolutely. This is the official APK provided directly by Ngumu's Eye developers. We recommend downloading only from this page. The APK has been tested and is safe to install on your Android device."
  },
  {
    question: "What is Ngumu's Eye exactly?",
    answer: "Ngumu's Eye is a community-powered safety platform that helps residents report incidents, track verification, and stay informed about what's happening in their neighborhood. It's designed to create structured, credible local alerts—much better than random social media posts."
  },
  {
    question: "Is it really free?",
    answer: "Yes! Downloading and using the core features of Ngumu's Eye is completely free. We're working on optional premium features in the future, but the basic app will always be free to download and use."
  },
  {
    question: "Which Android phones can run it?",
    answer: "Ngumu's Eye requires Android 8.0 or higher. Most phones from 2016 onwards support this. If you're unsure, you can try downloading—the installation process will let you know if your phone isn't compatible."
  },
  {
    question: "Can I report incidents anonymously?",
    answer: "You'll need to create an account to use the app, but you can choose your profile visibility and privacy settings. Some reports can be shared anonymously with specific groups or kept private—it depends on your preference and the incident type."
  },
  {
    question: "How does the verification system work?",
    answer: "Reports start as \"new\" and move through verification levels (0-3) as the community and moderators review them. Evidence, additional witness confirmations, and admin review all increase the verification level. Higher verification means your report reaches more people and carries more credibility."
  },
  {
    question: "Do I need internet to use it?",
    answer: "Yes, an active internet connection is required to report incidents, view the community feed, and receive real-time notifications. However, the app is designed to work on mobile data, so you don't need WiFi."
  },
  {
    question: "Is Ngumu's Eye available in my town?",
    answer: "Ngumu's Eye is currently available in Windhoek and neighboring areas including Arandis and other Namibian communities. Once you download and sign up, you'll see incidents and watch groups relevant to your location. New areas are being added regularly."
  },
  {
    question: "What if I need support or want to report a problem?",
    answer: "You can reach our support team anytime via email at ngumuseye@gmail.com or WhatsApp at +264 81 680 2064. We're here to help with any questions, bugs, or feedback you might have."
  }
]

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-heading">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border-b border-gray-200 pb-4 last:border-b-0"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left font-semibold flex justify-between items-center text-blue-900 hover:text-blue-700 transition-colors"
              >
                <span>{faq.question}</span>
                <span className="text-lg ml-4">{activeIndex === index ? '−' : '+'}</span>
              </button>
              {activeIndex === index && (
                <div className="text-gray-600 mt-3 leading-relaxed animate-in fade-in duration-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
