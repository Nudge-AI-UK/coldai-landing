import { useState } from 'react'
import { toast } from 'sonner'
import { ShimmerButton } from './ui/shimmer-button'
import { TextAnimate } from './ui/text-animate'
import { registerInterest } from '@/lib/supabase'
import { Send } from 'lucide-react'

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
    <div id="register" className="relative py-24 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <TextAnimate
          animation="blurIn"
          by="word"
          as="h2"
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Be First to Transform Your Outreach
        </TextAnimate>
        
        <p className="text-xl text-gray-400 mb-12">
          Join the waitlist and get exclusive early access when we launch
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:border-white/40 transition-colors"
            disabled={loading}
          />
          
          <ShimmerButton
            type="submit"
            disabled={loading}
            shimmerColor="#3B82F6"
            background="linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)"
            className="px-8 py-3 font-semibold"
          >
            <span className="flex items-center gap-2">
              {loading ? 'Joining...' : 'Join Waitlist'}
              <Send className="w-4 h-4" />
            </span>
          </ShimmerButton>
        </form>
        
        <p className="mt-6 text-sm text-gray-500">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </div>
  )
}