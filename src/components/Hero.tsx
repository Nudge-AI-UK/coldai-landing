import { useState, useEffect } from 'react'
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
  const [headlineIndex, setHeadlineIndex] = useState(0)
  
  const headlines = [
    "Sends LinkedIn Messages People Reply To",
    "Writes & Sends LinkedIn Messages That Work", 
    "Personalises Messages People Actually Answer"
  ]
  
  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % headlines.length)
    }, 3500) // Change every 3.5 seconds
    
    return () => clearInterval(interval)
  }, [headlines.length])

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4">
      {/* Enhanced background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-orange-950/20 to-black" />
      
      {/* Flickering grid for chess board effect */}
      <FlickeringGrid
        className="absolute inset-0 z-0"
        squareSize={32}
        gridGap={8}
        color="#ea580c"
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
      
      {/* Logo in top left corner */}
      <div className="absolute top-6 left-6 z-20">    
        <img 
          src="/Cold_AI_Logo_Square_Transparent.png"  // or .svg depending on your file   
          alt="Cold AI"
          className="h-8 md:h-10 w-auto hover:scale-105 transition-transform cursor-pointer"   
          onClick={() => window.location.reload()}   
        />    
      </div>
      
      <div className="relative z-10 text-center space-y-8 max-w-5xl mx-auto">
        {/* Enhanced Bishop Logo with WHITE accent on top (smaller as secondary element) */}
        <div className="flex justify-center mb-8">
          <div className="relative group">
            {/* Animated glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition duration-1000 animate-pulse-scale" />
            
            {/* Chess piece container with white accent on top */}
            <div className="relative">
              <div className="relative w-20 h-20 bg-gradient-to-br from-white via-orange-500 to-yellow-600 rounded-3xl flex items-center justify-center transform hover:scale-110 transition-all duration-500 shadow-2xl">
                <BorderBeam size={80} duration={12} delay={0} />
                <span className="text-4xl font-bold text-black drop-shadow-2xl">♗</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced announcement badge */}
        <div className="inline-flex items-center justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-full blur-lg opacity-20 group-hover:opacity-30 transition duration-300" />
            <div className="relative inline-flex items-center gap-2 px-6 py-2 border border-orange-500/30 rounded-full bg-black/50 backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <AnimatedGradientText
                colorFrom="#fb923c"
                colorTo="#fbbf24"
                className="text-sm font-semibold tracking-wide"
              >
                Coming Soon • Join the Revolution
              </AnimatedGradientText>
            </div>
          </div>
        </div>
        
        <div className="space-y-8">
          {/* Main headline with rotating text */}
          <div className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="bg-gradient-to-b from-white via-white to-gray-400 bg-clip-text text-transparent">
              AI Agent That{' '}
            </span>
            <div className="relative inline-block min-h-[1.2em]">
              {headlines.map((headline, index) => (
                <div
                  key={index}
                  className={cn(
                    "absolute top-0 left-0 w-full transition-all duration-700 ease-in-out",
                    index === headlineIndex 
                      ? "opacity-100 transform translate-y-0" 
                      : "opacity-0 transform translate-y-8"
                  )}
                >
                  <SparklesText
                    className="text-5xl md:text-7xl lg:text-8xl font-bold"
                    colors={{ first: "#fb923c", second: "#fbbf24" }}
                    sparklesCount={6}
                  >
                    {headline}
                  </SparklesText>
                </div>
              ))}
              {/* Invisible placeholder to maintain height */}
              <div className="invisible relative">
                <span className="text-5xl md:text-7xl lg:text-8xl font-bold">
                  {headlines[0]}
                </span>
              </div>
            </div>
          </div>
          
          {/* Updated static subheadline - center aligned with proper wrapping */}
          <div className="max-w-3xl mx-auto">
            <TextAnimate
              animation="fadeIn"
              by="word"  // ✅ This allows wrapping between words
              delay={0.8}
              className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light text-center"
            >
              Cold AI Agent sends personalised outreach that sparks conversations and wins meetings.
            </TextAnimate>
          </div>
        </div>
        
        {/* Enhanced CTA section */}
        <div className="pt-16 space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ShimmerButton
              className="shadow-2xl relative group"
              background="linear-gradient(110deg,#000103 45%,#ea580c 48%,#fbbf24 52%,#000103 55%)"
              borderRadius="12px"
              onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10 flex items-center gap-2 text-white font-semibold text-lg px-8 py-4">
                Request Access
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </ShimmerButton>
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
          className="flex flex-col items-center gap-2 text-gray-500 hover:text-orange-400 transition-colors group"
        >
          <span className="text-xs uppercase tracking-widest">Explore</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </div>
  )
}
