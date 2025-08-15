import { Brain, MessageSquare, Target, Zap } from 'lucide-react'
import { TextAnimate } from './ui/text-animate'
import { BorderBeam } from './ui/border-beam'
import { MagicCard } from './ui/magic-card'

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Personalisation',
    description: 'Analyses prospects\' profiles to craft messages that resonate with their specific interests and pain points.',
  },
  {
    icon: Target,
    title: 'Smart ICP Matching',
    description: 'Automatically identifies and targets your ideal customers based on your defined criteria.',
  },
  {
    icon: MessageSquare,
    title: 'Context-Aware Messaging',
    description: 'Creates unique opening lines that reference recent posts, achievements, or shared connections.',
  },
  {
    icon: Zap,
    title: 'Instant Generation',
    description: 'Generate dozens of personalised messages in seconds, not hours.',
  },
]

export default function Features() {
  return (
    <div className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <TextAnimate
            animation="slideUp"
            by="word"
            as="h2"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          >
            Strategic Outreach Excellence
          </TextAnimate>
          <p className="text-xl text-gray-400">
            Built for sales teams who play to win
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <MagicCard
              key={index}
              className="relative p-8 bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border-purple-500/20"
              gradientColor="#8B5CF6"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
              <BorderBeam size={250} duration={12} delay={index * 2} />
            </MagicCard>
          ))}
        </div>
        
        {/* Chess Strategy Quote */}
        <div className="mt-20 text-center">
          <p className="text-2xl font-light italic text-purple-300/60">
            "In chess, as in sales, every move counts"
          </p>
        </div>
      </div>
    </div>
  )
}