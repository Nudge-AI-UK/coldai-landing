import Hero from './components/Hero'
import Features from './components/Features'
import EmailCapture from './components/EmailCapture'
import Footer from './components/Footer'
import { Toaster } from 'sonner'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Toaster position="top-right" theme="dark" />
      <Hero />
      <Features />
      <EmailCapture />
      <Footer />
    </div>
  )
}

export default App
