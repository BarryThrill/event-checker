export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-navy-900/95 backdrop-blur-sm border-b border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-white font-semibold text-lg tracking-tight">Event Calendar</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6">
            <a href="#upcoming" className="text-navy-300 hover:text-white transition-colors text-sm font-medium">
              Upcoming
            </a>
            <a href="#past" className="text-navy-300 hover:text-white transition-colors text-sm font-medium">
              Past Events
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
