import { Linkedin, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = {
  company: [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ],
  legal: [
    { name: 'Privacy', href: '#privacy' },
    { name: 'Terms', href: '#terms' },
    { name: 'Cookie Policy', href: '#cookies' },
    { name: 'GDPR', href: '#gdpr' },
  ],
  resources: [
    { name: 'Documentation', href: '#docs' },
    { name: 'Help Centre', href: '#help' },
    { name: 'Community', href: '#community' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-gray-900">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#ea580c 1px, transparent 1px), linear-gradient(90deg, #ea580c 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pb-12 border-b border-gray-900">
          <div className="mb-8 lg:mb-0">
            {/* Logo and tagline */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-yellow-600 rounded-xl flex items-center justify-center">
                <span className="text-2xl font-bold text-white">♗</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Cold AI</h3>
                <p className="text-xs text-gray-500">Strategic Outreach</p>
              </div>
            </div>
            
            {/* Newsletter signup */}
            <div className="max-w-sm">
              <p className="text-gray-400 mb-4">
                Stay updated with the latest features and tips.
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={cn(
                    "flex-1 px-4 py-2 rounded-lg",
                    "bg-gray-900/50 border border-gray-800",
                    "text-white placeholder-gray-500",
                    "focus:outline-none focus:border-orange-500",
                    "transition-colors"
                  )}
                />
                <button
                  type="submit"
                  className={cn(
                    "px-4 py-2 rounded-lg",
                    "bg-orange-600 hover:bg-orange-700",
                    "text-white font-medium",
                    "transition-colors",
                    "flex items-center gap-1"
                  )}
                >
                  Subscribe
                  <ChevronRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
          
          {/* Navigation grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(navigation).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                  {category}
                </h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            {/* Social link - LinkedIn only */}
            <a
              href="#"
              className={cn(
                "w-10 h-10 rounded-lg",
                "bg-gray-900/50 border border-gray-800",
                "flex items-center justify-center",
                "hover:border-orange-500 hover:bg-orange-500/10",
                "transition-all duration-300",
                "group"
              )}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-orange-400 transition-colors" />
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-500">
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