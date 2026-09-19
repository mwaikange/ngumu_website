const trustFeatures = [
  {
    icon: "🔍",
    title: "Verification System",
    description: "Reports are verified through multiple community sources and admin review to ensure credibility."
  },
  {
    icon: "🛡️",
    title: "Neighborhood-Based",
    description: "See incidents relevant to your area with location-based filtering and privacy controls."
  },
  {
    icon: "⭐",
    title: "Trust Scoring",
    description: "More credible reporters carry more weight. Reports improve as verification grows."
  },
  {
    icon: "📋",
    title: "Case Management",
    description: "Track incidents from report to resolution with full audit history and timeline."
  },
  {
    icon: "👥",
    title: "Community Watch",
    description: "Join neighborhood watch groups, share updates, and stay connected with your community."
  },
  {
    icon: "🔔",
    title: "Real-Time Alerts",
    description: "Get instant notifications about verified incidents and community updates in your area."
  }
]

export function TrustSection() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-heading">
          {"Why Communities Trust Ngumu's Eye"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustFeatures.map((feature, index) => (
            <div 
              key={index}
              className="bg-white border-l-4 border-blue-800 p-5 rounded-lg transition-all duration-300 hover:translate-x-1 hover:shadow-lg"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2 font-heading">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
