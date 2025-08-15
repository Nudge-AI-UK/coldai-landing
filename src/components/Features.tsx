import { Brain, MessageSquare, Target, Zap } from 'lucide-react'
import { TextAnimate } from './ui/text-animate'

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
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Outreach That Actually Works
          </TextAnimate>
          <p className="text-xl text-gray-400">
            Built for sales teams who value quality over quantity
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <feature.icon className="w-12 h-12 mb-4 text-blue-400" />
                <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}