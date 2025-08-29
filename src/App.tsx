import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import HomePage from './components/HomePage'
import Blog from './components/Blog'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Toaster position="top-right" theme="dark" />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
