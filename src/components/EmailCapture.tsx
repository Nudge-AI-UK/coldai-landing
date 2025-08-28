import { useState } from 'react'
import { toast } from 'sonner'
import { supabase } from '@/lib/supabase'
import { TextAnimate } from './ui/text-animate'
import { ShimmerButton } from './ui/shimmer-button'
import { BorderBeam } from './ui/border-beam'
import { SparklesText } from './ui/sparkles-text'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function EmailCapture() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      toast.error('Please enter your email address')
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address')
      return
    }

    setLoading(true)

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ 
          email,
          created_at: new Date().toISOString()
        }])

      if (error) {
        if (error.code === '23505') {
          toast.error('You\'re already on the waitlist!')
        } else {
          throw error
        }
      } else {
        setSubmitted(true)
        toast.success('Welcome to Cold AI! Check your email for next steps.')
        setEmail('')
      }
    } catch (error) {
      console.error('Error:', error)
      toast.error('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="register" className="relative py-32 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-orange-950/20 to-black" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#ea580c 1px, transparent 1px), linear-gradient(90deg, #ea580c 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'grid 20s linear infinite',
        }} />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="relative group">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition duration-1000" />
          
          {/* Card */}
          <div className="relative bg-black/60 backdrop-blur-xl border border-gray-800 rounded-3xl p-12 md:p-16">
            <BorderBeam size={300} duration={15} />
            
            <div className="text-center space-y-8">
              {/* Header */}
              <div className="space-y-4">
                <TextAnimate
                  animation="blurInUp"
                  by="word"
                  className="text-sm uppercase tracking-[0.3em] text-orange-400 font-semibold"
                >
                  Limited Early Access
                </TextAnimate>
                
                <SparklesText
                  className="text-4xl md:text-6xl font-bold"
                  colors={{ first: "#fb923c", second: "#fbbf24" }}
                  sparklesCount={6}
                >
                  Claim Your Advantage
                </SparklesText>
                
                <div className="max-w-2xl mx-auto">
                  <TextAnimate
                    animation="fadeIn"
                    by="text"
                    delay={0.3}
                    className="text-xl text-gray-400 text-center block"
                  >
                    Be among the first to revolutionise your LinkedIn outreach.
                    Join the exclusive early access programme.
                  </TextAnimate>
                </div>
              </div>
              
              {/* Form */}
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
                  <div className="relative group">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className={cn(
                        "w-full px-6 py-4 rounded-xl",
                        "bg-gray-900/50 backdrop-blur-xl",
                        "border border-gray-700 focus:border-orange-500",
                        "text-white placeholder-gray-500",
                        "transition-all duration-300",
                        "focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                      )}
                      disabled={loading}
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-600/20 to-yellow-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                  
                  <ShimmerButton
                    type="submit"
                    disabled={loading}
                    className="w-full shadow-2xl"
                    background="linear-gradient(110deg,#000103 45%,#ea580c 48%,#fbbf24 52%,#000103 55%)"
                    borderRadius="12px"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2 text-white font-semibold text-lg px-8 py-4">
                      {loading ? (
                        <span className="animate-pulse">Joining...</span>
                      ) : (
                        <>
                          Get Early Access
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </span>
                  </ShimmerButton>
                </form>
              ) : (
                <div className="space-y-6 max-w-md mx-auto">
                  <div className="flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center animate-pulse-scale">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">You're In!</h3>
                    <p className="text-gray-400">
                      We'll notify you as soon as Cold AI launches. 
                      Check your email for confirmation.
                    </p>
                  </div>
                </div>
              )}
              
              {/* Privacy note */}
              <p className="text-xs text-gray-500 flex items-center justify-center gap-1 pt-8">
                <AlertCircle className="w-3 h-3" />
                We respect your privacy. No spam, ever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}