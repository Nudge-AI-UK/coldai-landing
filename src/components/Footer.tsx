import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative py-16 px-4 border-t border-purple-500/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">♜</span>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Cold AI</span>
            </div>
            <p className="text-gray-400 text-sm">
              Strategic LinkedIn outreach powered by artificial intelligence.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-purple-300">Coming Soon</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-purple-400 transition-colors cursor-pointer">Features</li>
              <li className="hover:text-purple-400 transition-colors cursor-pointer">Pricing</li>
              <li className="hover:text-purple-400 transition-colors cursor-pointer">Documentation</li>
              <li className="hover:text-purple-400 transition-colors cursor-pointer">API</li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-purple-300">Get in Touch</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center hover:bg-purple-800/50 hover:border-purple-400/50 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-purple-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center hover:bg-purple-800/50 hover:border-purple-400/50 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-purple-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center hover:bg-purple-800/50 hover:border-purple-400/50 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-purple-400" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-purple-900/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 Cold AI. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <span className="hover:text-purple-400 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-purple-400 transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
        
        {/* Chess Quote */}
        <div className="mt-8 text-center">
          <p className="text-xs text-purple-400/40 italic">
            "The pin is mightier than the sword" - Every move calculated.
          </p>
        </div>
      </div>
    </footer>
  )
}