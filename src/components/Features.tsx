import { TextAnimate } from './ui/text-animate'
import { MagicCard } from './ui/magic-card'
import { AnimatedBeam } from './ui/animated-beam'
import { BorderBeam } from './ui/border-beam'
import { 
  Brain, 
  Target, 
  Zap, 
  Shield, 
  Users, 
  BarChart3,
  Sparkles,
  Crown,
  Lightbulb
} from 'lucide-react'
import { cn } from '@/lib/utils'

const features = [
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description: "Advanced algorithms analyse profiles to craft messages that resonate with each prospect's unique background and interests.",
    gradient: "from-purple-500 to-blue-500",
    delay: 0.1
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Identify and reach the right decision-makers with laser-focused accuracy. No more spray and pray.",
    gradient: "from-blue-500 to-cyan-500",
    delay: 0.2
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Generate hundreds of personalised messages in seconds. Scale your outreach without losing the personal touch.",
    gradient: "from-cyan-500 to-green-500",
    delay: 0.3
  },
  {
    icon: Shield,
    title: "Compliance First",
    description: "Built-in safeguards ensure your messages comply with LinkedIn's terms and GDPR regulations.",
    gradient: "from-green-500 to-yellow-500",
    delay: 0.4
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Share templates, track performance, and maintain consistent messaging across your entire sales team.",
    gradient: "from-yellow-500 to-orange-500",
    delay: 0.5
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track open rates, response rates, and conversions. Optimise your approach with data-driven insights.",
    gradient: "from-orange-500 to-red-500",
    delay: 0.6
  }
]

const strategicBenefits = [
  { icon: Crown, text: "10x Response Rates", highlight: true },
  { icon: Lightbulb, text: "Zero Templates", highlight: false },
  { icon: Sparkles, text: "100% Personalised", highlight: true },
]

export default function Features() {
  return (
    <section id="features" className="relative py-32 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20 space-y-6">
          <TextAnimate
            animation="blurInUp"
            by="word"
            className="text-sm uppercase tracking-[0.3em] text-purple-400 font-semibold"
          >
            Strategic Advantage
          </TextAnimate>
          
          <TextAnimate
            animation="blurInUp"
            by="word"
            delay={0.2}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent"
          >
            Every Move Calculated for Success
          </TextAnimate>
          
          <TextAnimate
            animation="fadeIn"
            by="text"
            delay={0.4}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Cold AI combines cutting-edge artificial intelligence with battle-tested sales strategies 
            to deliver outreach that converts.
          </TextAnimate>
        </div>
        
        {/* Strategic benefits bar */}
        <div className="flex flex-wrap justify-center gap-8 mb-20">
          {strategicBenefits.map((benefit, index) => (
            <div
              key={index}
              className={cn(
                "flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-300",
                benefit.highlight 
                  ? "border-purple-500/50 bg-purple-500/10 text-purple-300"
                  : "border-gray-700 bg-gray-900/50 text-gray-400"
              )}
            >
              <benefit.icon className="w-5 h-5" />
              <span className="font-medium">{benefit.text}</span>
            </div>
          ))}
        </div>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <MagicCard
              key={index}
              className="group relative bg-black/50 backdrop-blur-xl border border-gray-800 p-8 rounded-2xl hover:border-purple-500/50 transition-all duration-500"
              gradientColor="#7c3aed"
              gradientOpacity={0.15}
            >
              {/* Icon container */}
              <div className="relative mb-6">
                <div className={cn(
                  "absolute inset-0 rounded-xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br",
                  feature.gradient
                )} />
                <div className={cn(
                  "relative w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br shadow-2xl",
                  feature.gradient
                )}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
              
              {/* Hover effect beam */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <BorderBeam 
                  size={200} 
                  duration={10} 
                  colorFrom="#7c3aed"
                  colorTo="#3b82f6"
                />
              </div>
            </MagicCard>
          ))}
        </div>
        
        {/* Chess strategy visualization */}
        <div className="mt-32 relative">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Your Winning Strategy
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Like chess grandmasters, we think several moves ahead. 
              Every message is crafted with strategic intent.
            </p>
          </div>
          
          {/* Chess board visualization */}
          <div className="relative max-w-4xl mx-auto">
            <div className="grid grid-cols-8 gap-1 p-8 bg-black/50 backdrop-blur-xl rounded-2xl border border-gray-800">
              {Array.from({ length: 64 }).map((_, i) => {
                const row = Math.floor(i / 8)
                const col = i % 8
                const isBlack = (row + col) % 2 === 0
                const isPiece = Math.random() > 0.8
                
                return (
                  <div
                    key={i}
                    className={cn(
                      "aspect-square rounded-sm transition-all duration-300 flex items-center justify-center text-2xl",
                      isBlack 
                        ? "bg-purple-950/30 hover:bg-purple-900/50" 
                        : "bg-gray-900/30 hover:bg-gray-800/50",
                      "hover:scale-110 hover:z-10"
                    )}
                  >
                    {isPiece && (
                      <span className="opacity-30 hover:opacity-100 transition-opacity">
                        {['♜', '♞', '♝', '♛', '♚', '♟'][Math.floor(Math.random() * 6)]}
                      </span>
                    )}
                  </div>
                )
              })}
            </div>
            
            {/* Floating pieces */}
            <div className="absolute -top-8 -left-8 text-6xl text-purple-500 opacity-20 animate-pulse">♛</div>
            <div className="absolute -bottom-8 -right-8 text-6xl text-blue-500 opacity-20 animate-pulse" style={{ animationDelay: '1s' }}>♚</div>
          </div>
        </div>
      </div>
    </section>
  )
}
