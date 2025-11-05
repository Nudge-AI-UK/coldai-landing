import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import HomePage from './components/HomePage'
import Blog from './components/Blog'
import TermsPage from './components/TermsPage'
import PrivacyPage from './components/PrivacyPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white relative">
        {/* Global animated background - fixed position for static scrolling */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-orange-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: '6s' }}
          />
          <div 
            className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: '8s', animationDelay: '2s' }}
          />
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: '7s', animationDelay: '1s' }}
          />
        </div>
        
        {/* Main content */}
        <div className="relative z-10">
          <Toaster position="top-right" theme="dark" />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App