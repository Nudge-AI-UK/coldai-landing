import { useRef } from 'react'
import TextAnimate from './ui/text-animate'
import { MagicCard } from './ui/magic-card'
import { Meteors } from './ui/meteors'
import {
  Zap,
  Target,
  TrendingUp,
  Shield,
  Users,
  BarChart3,
  MessageSquare,
  Bot,
  Sparkles
} from 'lucide-react'

const Features = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  const features = [
    {
      icon: Bot,
      title: "AI-Powered Personalisation",
      description: "Our AI learns your communication style and crafts messages that sound authentically you",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Target,
      title: "Smart ICP Matching",
      description: "Automatically identifies and prioritises prospects that match your ideal customer profile",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "3x Response Rates",
      description: "Proven to triple your response rates compared to generic templates and manual outreach",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: MessageSquare,
      title: "Context-Aware Messaging",
      description: "Analyses prospects' recent posts, company news, and profile updates for relevant talking points",
      gradient: "from-orange-500 to-amber-500"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Track open rates, response rates, and conversion metrics to optimise your outreach strategy",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Generate personalised messages in seconds, not hours. Scale your outreach without sacrificing quality",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "LinkedIn Safe",
      description: "Built with LinkedIn's best practices in mind to keep your account safe and compliant",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share templates, ICPs, and insights across your team for consistent, effective outreach",
      gradient: "from-teal-500 to-cyan-500"
    }
  ]

  return (
    <section className="relative py-32 overflow-hidden" ref={containerRef}>
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
        <Meteors number={30} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl font-bold mb-6">
            <TextAnimate
              text="Features That Drive Results"
              type="word"
              animation="slideUp"
            />
          </h2>
          <p className="text-xl text-gray-400">
            <TextAnimate
              text="Everything you need to transform your LinkedIn outreach from cold to gold"
              type="word"
              animation="fadeIn"
              delay={0.2}
            />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <MagicCard
              key={index}
              className="group cursor-pointer"
              gradientColor={feature.gradient}
            >
              <div className="p-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} p-2.5 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </MagicCard>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-medium">
              Join 10,000+ sales professionals already using Cold AI
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features