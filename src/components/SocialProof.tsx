import { Marquee } from './ui/marquee'
import { TextAnimate } from './ui/text-animate'

const companies = [
  { name: "Microsoft", logo: "🏢" },
  { name: "Google", logo: "🔍" },
  { name: "Amazon", logo: "📦" },
  { name: "Meta", logo: "💬" },
  { name: "Apple", logo: "🍎" },
  { name: "Netflix", logo: "🎬" },
  { name: "Spotify", logo: "🎵" },
  { name: "Tesla", logo: "🚗" },
  { name: "OpenAI", logo: "🤖" },
  { name: "Stripe", logo: "💳" },
]

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Sales Director",
    company: "TechCorp",
    text: "Cold AI transformed our outreach. We're booking 3x more meetings with half the effort.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "CEO",
    company: "StartupHub",
    text: "The personalisation is incredible. Prospects think we've researched them for hours.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Sales",
    company: "SaaS Solutions",
    text: "Best investment we've made. Our response rates went from 2% to 18% overnight.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Business Development",
    company: "Growth Partners",
    text: "It's like having a team of expert copywriters working 24/7. Game-changing.",
    rating: 5,
  },
]

export default function SocialProof() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-orange-950/5 to-black" />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16 px-4">
          <TextAnimate
            animation="blurInUp"
            by="word"
            className="text-sm uppercase tracking-[0.3em] text-orange-400 font-semibold mb-4"
          >
            Trusted by Leaders
          </TextAnimate>
          
          <TextAnimate
            animation="blurInUp"
            by="word"
            delay={0.2}
            className="text-3xl md:text-5xl font-bold text-white"
          >
            Join the Winning Team
          </TextAnimate>
        </div>
        
        {/* Company logos marquee */}
        <div className="mb-24">
          <Marquee pauseOnHover className="[--duration:30s]">
            {companies.map((company, index) => (
              <div
                key={index}
                className="mx-8 flex items-center gap-3 px-6 py-3 rounded-full bg-gray-900/50 border border-gray-800 hover:border-orange-500/50 transition-all duration-300 group"
              >
                <span className="text-2xl">{company.logo}</span>
                <span className="text-gray-400 font-medium group-hover:text-white transition-colors">
                  {company.name}
                </span>
              </div>
            ))}
          </Marquee>
        </div>
        
        {/* Testimonials */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-yellow-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i} className="text-yellow-500">★</span>
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="text-gray-300 text-lg mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-white font-semibold">{testimonial.name}</p>
                      <p className="text-gray-400 text-sm">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Stats */}
        <div className="mt-24 max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "10x", label: "Response Rate" },
              { value: "500K+", label: "Messages Sent" },
              { value: "98%", label: "Satisfaction" },
              { value: "2min", label: "Setup Time" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}