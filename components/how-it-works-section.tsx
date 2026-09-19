"use client"

import { useEffect, useRef } from "react"

const steps = [
  {
    number: 1,
    title: "Report an Incident",
    description: "Quickly report incidents in your area with photos, location, and detailed information. Your report is timestamped and tracked."
  },
  {
    number: 2,
    title: "Community Review",
    description: "The community and admin moderators review your report. Other users can verify, comment, and provide additional evidence."
  },
  {
    number: 3,
    title: "Get Verified & Stay Updated",
    description: "As verification increases, your incident reaches more residents. Track updates until resolution and stay safe together."
  }
]

export function HowItWorksSection() {
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
    <section id="how-it-works" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-heading">
          {"How Ngumu's Eye Works"}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div 
              key={step.number}
              className="scroll-animate opacity-0 translate-y-5 transition-all duration-600"
            >
              <div className="flex items-start gap-6">
                <div className="step-counter w-12 h-12 text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-3 font-heading">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border-l-4 border-blue-900">
          <p className="text-gray-700 leading-relaxed">
            <strong className="text-gray-900">{"Verification Matters:"}</strong>{" "}
            {"Unlike random social media posts, every report on Ngumu's Eye goes through a structured verification process. Reports move from \"new\" → \"verifying\" → \"assigned\" → \"resolved\" as evidence and community confirmation builds trust. This keeps your neighborhood informed with credible, actionable information."}
          </p>
        </div>
      </div>
    </section>
  )
}
