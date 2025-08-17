import { useState } from 'react'
import { toast } from 'sonner'
import { supabase } from '@/lib/supabase'
import AnimatedGradientText from './ui/animated-gradient-text'
import ShimmerButton from './ui/shimmer-button'
import TextAnimate from './ui/text-animate'
import { SparklesText } from './ui/sparkles-text'
import { Send, Check } from 'lucide-react'

const EmailCapture = () => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      toast.error('Please enter your email')
      return
    }

    setIsLoading(true)

    try {
      const { error } = await supabase
        .from('mailing_list')
        .insert({ email })

      if (error) {
        if (error.code === '23505') {
          toast.error('This email is already subscribed!')
        } else {
          toast.error('Something went wrong. Please try again.')
          console.error('Error:', error)
        }
      } else {
        setIsSubscribed(true)
        toast.success('Welcome to the Cold AI community!')
        setEmail('')
        
        setTimeout(() => {
          setIsSubscribed(false)
        }, 3000)
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedGradientText className="mb-4">
            ✨ Join the Waiting List
          </AnimatedGradientText>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <TextAnimate
              text="Be First to Experience"
              type="word"
              className="text-white"
            />
          </h2>
          
          <div className="mb-8">
            <SparklesText
              className="text-5xl md:text-6xl font-bold"
              colors={{ first: "#9333ea", second: "#06b6d4" }}
            >
              Cold AI
            </SparklesText>
          </div>
          
          <p className="text-xl text-gray-400 mb-12">
            <TextAnimate
              text="Get early access and exclusive updates"
              type="word"
              animation="fadeIn"
              className="inline-block"
            />
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
              disabled={isLoading}
            />
            
            <ShimmerButton
              type="submit"
              disabled={isLoading || isSubscribed}
              className="px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105"
              shimmerColor="#9333ea"
              background="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
            >
              <span className="flex items-center gap-2">
                {isSubscribed ? (
                  <>
                    <Check className="w-5 h-5" />
                    Subscribed!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {isLoading ? 'Joining...' : 'Join Now'}
                  </>
                )}
              </span>
            </ShimmerButton>
          </form>

          <p className="mt-6 text-sm text-gray-500">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}

export default EmailCapture
