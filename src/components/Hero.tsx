import { TextAnimate } from './ui/text-animate'
import { AnimatedGradientText } from './ui/animated-gradient-text'
import { Ripple } from './ui/ripple'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4">
      <Ripple className="opacity-20" />
      
      <div className="text-center space-y-8 max-w-4xl mx-auto">
        <div className="inline-flex items-center justify-center px-4 py-1.5 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
          <AnimatedGradientText
            colorFrom="#3B82F6"
            colorTo="#8B5CF6"
            className="text-sm font-medium"
          >
            Coming Soon - Join the Waitlist
          </AnimatedGradientText>
        </div>
        
        <TextAnimate
          animation="blurInUp"
          by="word"
          as="h1"
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          Stop Sending Messages That Get Ignored
        </TextAnimate>
        
        <TextAnimate
          animation="fadeIn"
          by="text"
          delay={0.5}
          className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto"
        >
          Cold AI crafts personalised LinkedIn outreach that actually gets responses. No templates. No generic messages. Just intelligent conversation starters that work.
        </TextAnimate>
        
        <div className="pt-8">
          <a
            href="#register"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <span>Get Early Access</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </div>
  )
}