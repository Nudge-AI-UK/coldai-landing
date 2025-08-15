import { TextAnimate } from './ui/text-animate'
import { AnimatedGradientText } from './ui/animated-gradient-text'
import { Ripple } from './ui/ripple'
import { SparklesText } from './ui/sparkles-text'
import { BorderBeam } from './ui/border-beam'
import { Meteors } from './ui/meteors'
import { FlickeringGrid } from './ui/flickering-grid'
import { ShimmerButton } from './ui/shimmer-button'
import { ArrowDown, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Hero() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4">
      {/* Enhanced background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black" />
      
      {/* Flickering grid for chess board effect */}
      <FlickeringGrid
        className="absolute inset-0 z-0"
        squareSize={32}
        gridGap={8}
        color="#7c3aed"
        maxOpacity={0.1}
        flickerChance={0.02}
      />
      
      {/* Meteors effect */}
      <Meteors number={10} className="absolute inset-0" />
      
      {/* Ripple effect */}
      <Ripple 
        className="opacity-5" 
        mainCircleOpacity={0.08} 
        numCircles={3}
      />
      
      <div className="relative z-10 text-center space-y-8 max-w-5xl mx-auto">
        {/* Enhanced Rook Logo with animation */}
        <div className="flex justify-center mb-12">
          <div className="relative group">
            {/* Animated glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition duration-1000 animate-pulse-scale" />
            
            {/* Chess piece container */}
            <div className="relative">
              <div className="relative w-28 h-28 bg-gradient-to-br from-purple-600 via-purple-500 to-blue-600 rounded-3xl flex items-center justify-center transform hover:scale-110 transition-all duration-500 shadow-2xl">
                <BorderBeam size={100} duration={12} delay={0} />
                <span className="text-6xl font-bold text-white drop-shadow-2xl">♜</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced announcement badge */}
        <div className="inline-flex items-center justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-lg opacity-20 group-hover:opacity-30 transition duration-300" />
            <div className="relative inline-flex items-center gap-2 px-6 py-2 border border-purple-500/30 rounded-full bg-black/50 backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <AnimatedGradientText
                colorFrom="#c084fc"
                colorTo="#60a5fa"
                className="text-sm font-semibold tracking-wide"
              >
                Coming Soon • Join the Revolution
              </AnimatedGradientText>
            </div>
          </div>
        </div>
        
        <div className="space-y-8">
          {/* Main headline with enhanced animation */}
          <TextAnimate
            animation="blurInUp"
            by="word"
            as="h1"
            duration={0.5}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
          >
            <span className="bg-gradient-to-b from-white via-white to-gray-400 bg-clip-text text-transparent">
              Your Strategic Move to
            </span>
          </TextAnimate>
          
          <div className="relative">
            <SparklesText
              className="text-5xl md:text-7xl lg:text-8xl font-bold"
              colors={{ first: "#c084fc", second: "#60a5fa" }}
              sparklesCount={8}
            >
              Winning Outreach
            </SparklesText>
          </div>
          
          {/* Enhanced subheadline */}
          <TextAnimate
            animation="fadeIn"
            by="text"
            delay={0.8}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Cold AI crafts personalised LinkedIn messages that checkmate the competition. 
            Strategic. Intelligent. Unstoppable.
          </TextAnimate>
        </div>
        
        {/* Enhanced CTA section */}
        <div className="pt-16 space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ShimmerButton
              className="shadow-2xl relative group"
              background="linear-gradient(110deg,#000103 45%,#7c3aed 48%,#60a5fa 52%,#000103 55%)"
              borderRadius="12px"
              onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10 flex items-center gap-2 text-white font-semibold text-lg px-8 py-4">
                Get Early Access
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </ShimmerButton>
            
            <button className="group relative px-8 py-4 text-gray-400 hover:text-white transition-all duration-300">
              <span className="relative z-10 flex items-center gap-2 font-medium">
                Watch Demo
                <ArrowDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
          
          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Setup in 2 Minutes</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <a 
          href="#features" 
          className="flex flex-col items-center gap-2 text-gray-500 hover:text-purple-400 transition-colors group"
        >
          <span className="text-xs uppercase tracking-widest">Explore</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </div>
  )
}
