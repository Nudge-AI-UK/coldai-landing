import { Toaster } from 'sonner'
import { Analytics } from '@vercel/analytics/react'
import LandingPage from './pages/LandingPage'

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <LandingPage />
      <Analytics />
      
      <Toaster 
        position="bottom-center" 
        richColors 
        toastOptions={{
          style: {
            background: 'rgba(251, 146, 60, 0.9)',
            color: 'white',
            border: '1px solid rgba(251, 146, 60, 0.3)',
            backdropFilter: 'blur(10px)',
          },
        }}
      />
    </div>
  )
}

export default App
