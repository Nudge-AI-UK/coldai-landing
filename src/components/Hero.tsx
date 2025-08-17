import { useRef } from 'react'
import ShimmerButton from './ui/shimmer-button'
import AnimatedGradientText from './ui/animated-gradient-text'
import { SparklesText } from './ui/sparkles-text'
import DotPattern from './ui/dot-pattern'
import FlickeringGrid from './ui/flickering-grid'
import GridPattern from './ui/grid-pattern'
import TextAnimate from './ui/text-animate'
import { ArrowRight, Play, Sparkles } from 'lucide-react'

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" ref={containerRef}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <FlickeringGrid
          className="z-0 absolute inset-0 [mask:radial-gradient(450px_circle_at_center,white,transparent)]"
          squareSize={4}
          gridGap={6}
          color="#9333ea"
          maxOpacity={0.1}
          flickerChance={0.1}
        />
        <GridPattern
          width={40}
          height={40}
          x={-12}
          y={4}
          className="z-0 opacity-10"
        />
        <DotPattern
          className="z-0 opacity-20 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-10" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <AnimatedGradientText className="mb-8">
            ✨ Launching Soon - Join the Waiting List
          </AnimatedGradientText>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-white mb-2">
              LinkedIn Outreach
            </span>
            <span className="block">
              <SparklesText
                className="inline-block"
                colors={{ first: "#9333ea", second: "#06b6d4" }}
              >
                Powered by AI
              </SparklesText>
            </span>
          </h1>

          {/* Subheading */}
          <div className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            <TextAnimate
              text="Generate personalised messages that get 3x more responses. Save hours while building genuine connections."
              type="word"
              animation="fadeIn"
              duration={0.3}
              delay={0.1}
            />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <ShimmerButton
              className="px-8 py-4 text-lg font-semibold rounded-full"
              shimmerColor="#9333ea"
              background="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
            >
              <span className="flex items-center gap-2">
                Get Early Access
                <ArrowRight className="w-5 h-5" />
              </span>
            </ShimmerButton>
            
            <button className="px-8 py-4 text-lg font-semibold rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all flex items-center gap-2 group">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <TextAnimate
                text="10x"
                animation="slideUp"
                className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              />
              <p className="text-gray-400 mt-2">Faster Outreach</p>
            </div>
            <div className="text-center">
              <TextAnimate
                text="3x"
                animation="slideUp"
                delay={0.2}
                className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              />
              <p className="text-gray-400 mt-2">More Responses</p>
            </div>
            <div className="text-center">
              <TextAnimate
                text="100%"
                animation="slideUp"
                delay={0.4}
                className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              />
              <p className="text-gray-400 mt-2">Personalised</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 animate-bounce">
        <Sparkles className="w-6 h-6 text-purple-400 opacity-50" />
      </div>
      <div className="absolute top-20 right-10 animate-bounce delay-700">
        <Sparkles className="w-8 h-8 text-pink-400 opacity-50" />
      </div>
      <div className="absolute top-1/2 left-10 animate-bounce delay-1000">
        <Sparkles className="w-5 h-5 text-cyan-400 opacity-50" />
      </div>
    </section>
  )
}

export default Hero
