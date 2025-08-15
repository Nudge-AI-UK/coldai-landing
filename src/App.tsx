import { Toaster } from 'sonner'
import Hero from './components/Hero'
import Features from './components/Features'
import SocialProof from './components/SocialProof'
import EmailCapture from './components/EmailCapture'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Hero />
      <Features />
      <SocialProof />
      <EmailCapture />
      <Footer />
      
      <Toaster 
        position="bottom-center" 
        richColors 
        toastOptions={{
          style: {
            background: 'rgba(88, 28, 135, 0.9)',
            color: 'white',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            backdropFilter: 'blur(10px)',
          },
        }}
      />
    </div>
  )
}

export default App
