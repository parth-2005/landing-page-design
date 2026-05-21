export function Footer() {
  return (
    <footer className="bg-navy py-20 px-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-13 pb-13 border-b border-white/10 mb-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                <div className="w-2 h-2 bg-accent rotate-45" />
              </div>
              <span className="font-serif font-800 text-slate-50 text-lg">Logiq</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed max-w-xs">
              Sensory intelligence platform for FMCG product teams.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-5.5">
              Platform
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-slate-300 hover:text-slate-50 transition-colors">
                  ForecastHUB
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-300 hover:text-slate-50 transition-colors">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-300 hover:text-slate-50 transition-colors">
                  API
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-300 hover:text-slate-50 transition-colors">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-5.5">
              Capabilities
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-slate-300 hover:text-slate-50 transition-colors">
                  R&D Analytics
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-300 hover:text-slate-50 transition-colors">
                  Channel Strategy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-300 hover:text-slate-50 transition-colors">
                  Market Research
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-300 hover:text-slate-50 transition-colors">
                  Enterprise
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-5.5">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-slate-300 hover:text-slate-50 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-300 hover:text-slate-50 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-300 hover:text-slate-50 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-300 hover:text-slate-50 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-400">© 2026 Logiq. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-slate-400 hover:text-slate-200 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-slate-400 hover:text-slate-200 transition-colors">
              Data Integrity
            </a>
            <a href="#" className="text-xs text-slate-400 hover:text-slate-200 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
