export default function Footer() {
  return (
    <footer className="relative py-12 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500" />
            <span className="font-semibold text-lg">Cold AI</span>
          </div>
          
          <p className="text-gray-400 text-sm">
            © 2025 Cold AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}