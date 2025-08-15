import { Toaster } from 'sonner'
import Hero from './components/Hero'
import Features from './components/Features'
import EmailCapture from './components/EmailCapture'
import Footer from './components/Footer'
import { DotPattern } from './components/ui/dot-pattern'
import { cn } from '@/lib/utils'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black text-white overflow-x-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 -z-10">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(ellipse_at_center,white,transparent)]",
            "opacity-20"
          )}
        />
      </div>
      
      <div className="relative z-10">
        <Hero />
        <Features />
        <EmailCapture />
        <Footer />
      </div>
      
      <Toaster 
        position="bottom-center" 
        richColors 
        toastOptions={{
          style: {
            background: 'rgba(88, 28, 135, 0.9)',
            color: 'white',
            border: '1px solid rgba(139, 92, 246, 0.3)',
          },
        }}
      />
    </div>
  )
}

export default App