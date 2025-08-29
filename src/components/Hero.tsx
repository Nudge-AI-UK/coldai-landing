import { useState, useEffect } from 'react'
import { TextAnimate } from './ui/text-animate'
import { AnimatedGradientText } from './ui/animated-gradient-text'
import { SparklesText } from './ui/sparkles-text'
import { ArrowDown, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { registerInterest } from '@/lib/supabase'
import { toast } from 'sonner'

export default function Hero() {
  const [headlineIndex, setHeadlineIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  
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

  const handleRequestAccess = async () => {
    // First check if there's an email capture form visible
    const emailSection = document.getElementById('register')
    if (emailSection) {
      emailSection.scrollIntoView({ behavior: 'smooth' })
      return
    }

    // Otherwise, show a simple prompt for email
    const email = prompt('Enter your email address to request access:')
    if (!email) return
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address')
      return
    }

    setIsLoading(true)
    try {
      const result = await registerInterest(email)
      if (result.success) {
        toast.success('Thank you! We\'ll be in touch soon.')
      } else {
        toast.error(result.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      toast.error('Failed to register. Please try again.')
      console.error('Error registering interest:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 sm:px-6">
      {/* No local background needed - using global from App.tsx */}
      
      <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-20">
        <img 
          src="/Cold_AI_Logo_Rectangle_Transparent.png"
          alt="Cold AI"
          className="h-20 sm:h-24 md:h-32 lg:h-40 w-auto hover:scale-105 transition-transform cursor-pointer"
          onClick={() => window.location.reload()}
        />
      </div>
      <div className="relative z-10 text-center space-y-6 sm:space-y-8 max-w-5xl mx-auto mt-16 sm:mt-0">
        
        {/* Enhanced announcement badge */}
        <div className="inline-flex items-center justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-full blur-lg opacity-20 group-hover:opacity-30 transition duration-300" />
            <div className="relative inline-flex items-center gap-2 px-4 sm:px-6 py-2 border border-orange-500/30 rounded-full bg-black/50 backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <AnimatedGradientText
                colorFrom="#fb923c"
                colorTo="#fbbf24"
                className="text-xs sm:text-sm font-semibold tracking-wide"
              >
                Coming Soon • Join the Revolution
              </AnimatedGradientText>
            </div>
          </div>
        </div>
        
        <div className="space-y-6 sm:space-y-8">
          {/* Main headline with rotating text */}
          <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight">
            <span className="text-white block mb-2">
              Cold AI{' '}
            </span>
            <div className="relative w-full" style={{ minHeight: '2em' }}>
              {headlines.map((headline, index) => (
                <div
                  key={index}
                  className={cn(
                    "w-full transition-all duration-700 ease-in-out",
                    index === headlineIndex 
                      ? "opacity-100 transform translate-y-0 relative" 
                      : "opacity-0 transform translate-y-8 absolute top-0 left-0 right-0"
                  )}
                >
                  <SparklesText
                    className="!text-3xl sm:!text-4xl md:!text-6xl lg:!text-7xl xl:!text-8xl !font-bold !leading-tight !block w-full"
                    colors={{ first: "#fb923c", second: "#fbbf24" }}
                    sparklesCount={8}
                  >
                    <span 
                      className="!block w-full"
                      style={{
                        background: 'linear-gradient(90deg, #fb923c 0%, #fbbf24 50%, #fde047 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        textFillColor: 'transparent',
                        display: 'block',
                        // Fallback for browsers that don't support text gradient
                        color: '#fb923c',
                      }}
                    >
                      {headline}
                    </span>
                  </SparklesText>
                </div>
              ))}
            </div>
          </div>
          
          {/* Updated static subheadline - center aligned with proper wrapping */}
          <div className="max-w-3xl mx-auto px-2 sm:px-0">
            <TextAnimate
              animation="fadeIn"
              by="word"  // ✅ This allows wrapping between words
              delay={0.8}
              className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed font-light text-center"
            >
              Cold AI Agent sends personalised outreach that sparks conversations and wins meetings.
            </TextAnimate>
          </div>
        </div>
        
        {/* Enhanced CTA section */}
        <div className="pt-12 sm:pt-16 space-y-4 sm:space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleRequestAccess}
              disabled={isLoading}
              className="relative group px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold text-lg rounded-xl shadow-2xl transform transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto max-w-xs sm:max-w-none"
            >
              <span className="flex items-center justify-center gap-2">
                {isLoading ? 'Processing...' : 'Request Access'}
                {!isLoading && <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              </span>
            </button>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Join The Beta</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <a 
          href="#features" 
          className="flex flex-col items-center gap-2 text-gray-500 hover:text-orange-400 transition-colors group"
        >
          <span className="text-xs uppercase tracking-widest">Explore</span>
          <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" />
        </a>
      </div>
    </div>
  )
}