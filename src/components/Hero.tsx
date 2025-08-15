import { TextAnimate } from './ui/text-animate'
import { AnimatedGradientText } from './ui/animated-gradient-text'
import { Ripple } from './ui/ripple'
import { SparklesText } from './ui/sparkles-text'
import { ArrowDown } from 'lucide-react'
import { GridPattern } from './ui/grid-pattern'

export default function Hero() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4">
      {/* Chess board pattern background */}
      <GridPattern
        width={60}
        height={60}
        x={-1}
        y={-1}
        strokeDasharray={"4 4"}
        className="[mask-image:radial-gradient(800px_circle_at_center,white,transparent)] opacity-20"
        squares={[
          [3, 3], [5, 5], [7, 7], [9, 9], [11, 11],
          [3, 7], [5, 9], [7, 11], [9, 3], [11, 5],
          [4, 4], [6, 6], [8, 8], [10, 10], [12, 12],
          [4, 8], [6, 10], [8, 12], [10, 4], [12, 6],
        ]}
      />
      
      <Ripple className="opacity-10" mainCircleOpacity={0.15} />
      
      <div className="text-center space-y-8 max-w-5xl mx-auto z-10">
        {/* Rook Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 blur-3xl opacity-50 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full" />
            <div className="relative w-24 h-24 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <span className="text-5xl font-bold text-white">♜</span>
            </div>
          </div>
        </div>
        
        <div className="inline-flex items-center justify-center px-4 py-1.5 border border-purple-500/30 rounded-full bg-purple-500/10 backdrop-blur-sm">
          <AnimatedGradientText
            colorFrom="#8B5CF6"
            colorTo="#3B82F6"
            className="text-sm font-medium"
          >
            Coming Soon - Join the Waitlist
          </AnimatedGradientText>
        </div>
        
        <div className="space-y-6">
          <TextAnimate
            animation="blurInUp"
            by="word"
            as="h1"
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent"
          >
            Stop Sending Messages That Get Ignored
          </TextAnimate>
          
          <TextAnimate
            animation="fadeIn"
            by="text"
            delay={0.5}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Cold AI crafts personalised LinkedIn outreach that actually gets responses. No templates. No generic messages. Just intelligent conversation starters that work.
          </TextAnimate>
        </div>
        
        <div className="pt-12 space-y-4">
          <SparklesText
            className="text-lg text-purple-400"
            colors={{ first: "#8B5CF6", second: "#3B82F6" }}
            sparklesCount={4}
          >
            Make Your Move
          </SparklesText>
          
          <a
            href="#register"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-all duration-300 group"
          >
            <span>Get Early Access</span>
            <ArrowDown className="w-4 h-4 animate-bounce group-hover:text-purple-400" />
          </a>
        </div>
      </div>
    </div>
  )
}