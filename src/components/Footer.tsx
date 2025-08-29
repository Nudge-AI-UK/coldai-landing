import { Link } from 'react-router-dom'
import { Linkedin, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = {
  company: [
    { name: 'Features', href: '#features', internal: false },
    { name: 'Pricing', href: '#pricing', internal: false },
    { name: 'About', href: '#about', internal: false },
    { name: 'Blog', href: '/blog', internal: true },
    { name: 'Contact', href: '#contact', internal: false },
  ],
  legal: [
    { name: 'Privacy', href: '#privacy', internal: false },
    { name: 'Terms', href: '#terms', internal: false },
    { name: 'Cookie Policy', href: '#cookies', internal: false },
  ],
}

export default function Footer() {
  return (
    <footer className="relative border-t border-gray-800">
      {/* Grid pattern overlay with subtle opacity */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#ea580c 1px, transparent 1px), linear-gradient(90deg, #ea580c 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pb-8 sm:pb-12 border-b border-gray-800 gap-8 lg:gap-0">
          <div className="w-full lg:w-auto">
            {/* Logo and tagline */}
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/Cold_AI_Logo_Rectangle_Transparent.png"
                alt="Cold AI"
                className="h-16 sm:h-20 w-auto"
              />
            </div>
            
            {/* Newsletter signup */}
            <div className="max-w-full sm:max-w-sm">
              <p className="text-sm sm:text-base text-gray-400 mb-4">
                Stay updated with the latest features and tips.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 sm:gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={cn(
                    "flex-1 px-3 sm:px-4 py-2 rounded-lg",
                    "bg-gray-900/50 backdrop-blur-sm border border-gray-800",
                    "text-white placeholder-gray-500",
                    "focus:outline-none focus:border-orange-500",
                    "transition-colors text-sm sm:text-base"
                  )}
                />
                <button
                  type="submit"
                  className={cn(
                    "px-4 py-2 rounded-lg",
                    "bg-orange-600 hover:bg-orange-700",
                    "text-white font-medium",
                    "transition-colors",
                    "flex items-center justify-center gap-1",
                    "text-sm sm:text-base",
                    "w-full sm:w-auto"
                  )}
                >
                  Subscribe
                  <ChevronRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
          
          {/* Navigation grid */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8 w-full sm:w-auto">
            {Object.entries(navigation).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider mb-3 sm:mb-4">
                  {category}
                </h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      {link.internal ? (
                        <Link
                          to={link.href}
                          className="text-gray-400 hover:text-orange-400 transition-colors text-xs sm:text-sm"
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-orange-400 transition-colors text-xs sm:text-sm"
                        >
                          {link.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <div className="flex items-center gap-6 order-2 sm:order-1">
            {/* Social link - LinkedIn only */}
            <a
              href="https://www.linkedin.com/company/cold-ai"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "w-9 h-9 sm:w-10 sm:h-10 rounded-lg",
                "bg-gray-900/50 backdrop-blur-sm border border-gray-800",
                "flex items-center justify-center",
                "hover:border-orange-500 hover:bg-orange-500/10",
                "transition-all duration-300",
                "group"
              )}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-orange-400 transition-colors" />
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-center sm:text-right order-1 sm:order-2">
            <p className="text-xs sm:text-sm text-gray-500">
              © {new Date().getFullYear()} Cold AI. All rights reserved.
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Made with ♗ in the UK
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}