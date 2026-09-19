const features = [
  {
    icon: "📸",
    title: "Photo Evidence",
    description: "Attach photos and videos to strengthen incident reports and increase verification credibility."
  },
  {
    icon: "🗺️",
    title: "Location Tracking",
    description: "Automatic GPS tagging ensures reports are accurate and neighborhood-relevant for maximum impact."
  },
  {
    icon: "💬",
    title: "Community Comments",
    description: "Residents can share insights, reactions, and additional information to build a complete picture."
  },
  {
    icon: "🔐",
    title: "Privacy Controls",
    description: "Choose your visibility level. Share with your watch group, neighborhood, or keep it private."
  },
  {
    icon: "🔔",
    title: "Real-Time Alerts",
    description: "Receive instant notifications about incidents in your area so you can stay informed and take action quickly."
  },
  {
    icon: "📊",
    title: "Incident Timeline",
    description: "Full audit trail from report submission through verification, assignment, and final resolution."
  }
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-heading">
          Powerful Features for Community Safety
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="feature-icon w-16 h-16 rounded-xl flex items-center justify-center text-white text-3xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 font-heading">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
