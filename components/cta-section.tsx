export function CTASection() {
  return (
    <section className="py-20 gradient-hero text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6 font-heading text-balance">
          Ready to Protect Your Community?
        </h2>
        <p className="text-lg text-blue-100 mb-8">
          Join thousands of community members who are making their neighborhoods safer with verified incident reporting and real-time awareness.
        </p>
        <a 
          href="https://drive.google.com/uc?export=download&id=1cK-cC08sefHyg8wpGwLy1bMcUs6A8Pko"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block cta-button px-10 py-4 rounded-lg text-white font-bold text-lg hover:shadow-2xl"
        >
          {"Download Ngumu's Eye APK Now"}
        </a>
        <p className="text-blue-100 mt-6 text-sm">
          {"v1.0.0.1 • Android 8.0+ • ~45 MB • Free"}
        </p>
      </div>
    </section>
  )
}
