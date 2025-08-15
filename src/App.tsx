import { Toaster } from 'sonner'
import Hero from './components/Hero'
import Features from './components/Features'
import EmailCapture from './components/EmailCapture'
import Footer from './components/Footer'
import { FlickeringGrid } from './components/ui/flickering-grid'

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 -z-10">
        <FlickeringGrid
          className="absolute inset-0 z-0 size-full"
          squareSize={4}
          gridGap={6}
          color="#60A5FA"
          maxOpacity={0.1}
          flickerChance={0.1}
        />
      </div>
      
      <div className="relative z-10">
        <Hero />
        <Features />
        <EmailCapture />
        <Footer />
      </div>
      
      <Toaster position="bottom-center" richColors />
    </div>
  )
}

export default App