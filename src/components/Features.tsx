import { TextAnimate } from './ui/text-animate'
import { MagicCard } from './ui/magic-card'
import { BorderBeam } from './ui/border-beam'
import { 
  Brain, 
  Target, 
  Zap, 
  Shield, 
  Users, 
  BarChart3
} from 'lucide-react'
import { cn } from '@/lib/utils'

const features = [
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description: "Advanced algorithms analyse profiles to craft messages that resonate with each prospect's unique background and interests.",
    gradient: "from-orange-500 to-amber-500",
    bgColor: "bg-gradient-to-br from-orange-600/20 to-amber-600/20",
    delay: 0.1
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Identify and reach the right decision-makers with laser-focused accuracy. No more spray and pray.",
    gradient: "from-blue-500 to-cyan-500",
    bgColor: "bg-gradient-to-br from-blue-600/20 to-cyan-600/20",
    delay: 0.2
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Generate hundreds of personalised messages quickly. Scale your outreach without losing the personal touch.",
    gradient: "from-purple-500 to-pink-500",
    bgColor: "bg-gradient-to-br from-purple-600/20 to-pink-600/20",
    delay: 0.3
  },
  {
    icon: Shield,
    title: "Compliance First",
    description: "Built-in safeguards ensure your messages comply with LinkedIn's terms and GDPR regulations.",
    gradient: "from-green-500 to-emerald-500",
    bgColor: "bg-gradient-to-br from-green-600/20 to-emerald-600/20",
    delay: 0.4
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Share templates, track performance, and maintain consistent messaging across your entire sales team.",
    gradient: "from-red-500 to-rose-500",
    bgColor: "bg-gradient-to-br from-red-600/20 to-rose-600/20",
    delay: 0.5
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track open rates, response rates, and conversions. Optimise your approach with data-driven insights.",
    gradient: "from-yellow-500 to-orange-500",
    bgColor: "bg-gradient-to-br from-yellow-600/20 to-orange-600/20",
    delay: 0.6
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-orange-950/10 to-black" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 sm:mb-20 space-y-4 sm:space-y-6">
          <TextAnimate
            animation="blurInUp"
            by="word"
            className="text-xs sm:text-sm uppercase tracking-[0.3em] text-orange-400 font-semibold"
          >
            Strategic Advantage
          </TextAnimate>
          
          <TextAnimate
            animation="blurInUp"
            by="word"
            delay={0.2}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent leading-tight"
          >
            Every Move Calculated for Success
          </TextAnimate>
          
          <TextAnimate
            animation="fadeIn"
            by="word"
            delay={0.4}
            className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-2 sm:px-0"
          >
            Cold AI combines cutting-edge artificial intelligence with battle-tested sales strategies 
            to deliver outreach that converts.
          </TextAnimate>
        </div>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <MagicCard
              key={index}
              className={cn(
                "group relative backdrop-blur-xl border border-gray-800 p-6 sm:p-8 rounded-2xl hover:border-orange-500/50 transition-all duration-500",
                feature.bgColor
              )}
              gradientColor="#ea580c"
              gradientOpacity={0.15}
            >
              {/* Icon container */}
              <div className="relative mb-4 sm:mb-6">
                <div className={cn(
                  "absolute inset-0 rounded-xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br",
                  feature.gradient
                )} />
                <div className={cn(
                  "relative w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center bg-gradient-to-br shadow-2xl",
                  feature.gradient
                )}>
                  <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-orange-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                {feature.description}
              </p>
              
              {/* Hover effect beam */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <BorderBeam 
                  size={200} 
                  duration={10} 
                  colorFrom="#ea580c"
                  colorTo="#fbbf24"
                />
              </div>
            </MagicCard>
          ))}
        </div>
      </div>
    </section>
  )
}
