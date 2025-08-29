import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Linkedin, ExternalLink } from 'lucide-react'

export default function Blog() {
  useEffect(() => {
    // Load LinkedIn embed script
    const script = document.createElement('script')
    script.src = 'https://platform.linkedin.com/badges/js/profile.js'
    script.async = true
    script.defer = true
    document.body.appendChild(script)

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src="https://platform.linkedin.com/badges/js/profile.js"]')
      if (existingScript) {
        document.body.removeChild(existingScript)
      }
    }
  }, [])

  const profiles = [
    {
      name: 'Tom Palmer',
      role: 'Co-Founder & CEO',
      url: 'https://www.linkedin.com/in/tom-palmer-gmbpss/',
      description: 'Leading Cold AI\'s vision for transforming B2B outreach with AI-powered personalisation.'
    },
    {
      name: 'Tom Claydon',
      role: 'Co-Founder & CTO',
      url: 'https://www.linkedin.com/in/tom-claydon-🔭-906809238/',
      description: 'Building the technical infrastructure that powers Cold AI\'s intelligent message generation.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Background - matching Hero component */}
      <div className="fixed inset-0 overflow-hidden">
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

      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-xl border-b border-gray-700/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 cursor-pointer group">
            <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-orange-400 transition-colors" />
            <span className="text-gray-400 group-hover:text-orange-400 transition-colors">Back to Home</span>
          </Link>
          <div className="flex items-center space-x-2">
            <Linkedin className="w-5 h-5 text-blue-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Cold AI Blog
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Follow Our Journey
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Get the latest updates, insights, and tips from the Cold AI founding team
            </p>
          </div>

          {/* LinkedIn Feeds */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {profiles.map((profile, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 hover:border-orange-500/50 transition-all"
              >
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-white mb-2">{profile.name}</h2>
                  <p className="text-orange-400 font-medium mb-3">{profile.role}</p>
                  <p className="text-gray-400">{profile.description}</p>
                </div>

                {/* LinkedIn Profile Badge/Feed */}
                <div className="bg-white/5 rounded-xl p-6 mb-6">
                  {/* LinkedIn embed widget */}
                  <div 
                    className="LI-profile-badge"
                    data-version="v1" 
                    data-size="large" 
                    data-locale="en_US" 
                    data-type="vertical" 
                    data-theme="dark" 
                    data-vanity={profile.url.split('/in/')[1].replace('/', '')}
                  >
                    <a 
                      className="LI-simple-link" 
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View LinkedIn Profile
                    </a>
                  </div>
                </div>

                {/* View Full Profile Button */}
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-lg transition-all group"
                >
                  <Linkedin className="w-5 h-5" />
                  View Full LinkedIn Profile
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>

          {/* Recent Activity Section */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Stay Connected</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-orange-500/20">
                  <Linkedin className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Follow for Updates</h3>
                  <p className="text-gray-400 text-sm">
                    Connect with our founders on LinkedIn to get real-time updates about Cold AI's development, 
                    new features, and insights into AI-powered sales automation.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-blue-500/20">
                  <ExternalLink className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Industry Insights</h3>
                  <p className="text-gray-400 text-sm">
                    Our founders regularly share valuable content about B2B sales, AI trends, 
                    and best practices for LinkedIn outreach that gets results.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Outreach?
            </h2>
            <p className="text-gray-400 mb-8">
              Join thousands of sales professionals using Cold AI
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold text-lg rounded-xl shadow-2xl transform transition-all duration-200 hover:scale-105"
            >
              Get Started with Cold AI
              <ArrowLeft className="w-5 h-5 rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
