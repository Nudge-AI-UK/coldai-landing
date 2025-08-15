import { useState } from 'react'
import { toast } from 'sonner'
import { ShimmerButton } from './ui/shimmer-button'
import { TextAnimate } from './ui/text-animate'
import { registerInterest } from '@/lib/supabase'
import { Send, Sparkles } from 'lucide-react'
import { AnimatedBeam } from './ui/animated-beam'

export default function EmailCapture() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      toast.error('Please enter your email')
      return
    }
    
    setLoading(true)
    
    try {
      const { success, error } = await registerInterest(email)
      
      if (success) {
        toast.success('Welcome aboard! We\'ll be in touch soon.')
        setEmail('')
      } else {
        toast.error(error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      toast.error('Failed to register. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div id="register" className="relative py-24 px-4 overflow-hidden">
      {/* Animated background beams */}
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatedBeam className="absolute" />
      </div>
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="mb-8 flex justify-center">
          <div className="p-3 rounded-full bg-purple-500/10 border border-purple-500/20">
            <Sparkles className="w-8 h-8 text-purple-400" />
          </div>
        </div>
        
        <TextAnimate
          animation="blurIn"
          by="word"
          as="h2"
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 bg-clip-text text-transparent"
        >
          Ready to Make Your Move?
        </TextAnimate>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Join forward-thinking sales teams who are transforming their LinkedIn outreach strategy
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <div className="relative flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-6 py-4 rounded-full bg-purple-900/30 border border-purple-500/30 text-white placeholder:text-purple-300/50 focus:outline-none focus:border-purple-400/50 focus:bg-purple-900/40 transition-all duration-300"
              disabled={loading}
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-xl -z-10" />
          </div>
          
          <ShimmerButton
            type="submit"
            disabled={loading}
            shimmerColor="#fff"
            background="linear-gradient(135deg, #8B5CF6 0%, #6D28D9 50%, #5B21B6 100%)"
            className="px-8 py-4 font-semibold text-lg shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-shadow duration-300"
          >
            <span className="flex items-center gap-2">
              {loading ? 'Joining...' : 'Join Waitlist'}
              <Send className="w-5 h-5" />
            </span>
          </ShimmerButton>
        </form>
        
        <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span>No spam ever</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span>Early bird pricing</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </div>
  )
}