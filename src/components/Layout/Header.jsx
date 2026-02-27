import almiLogo from '/almi-logo.svg';

export default function Header({ isDark, onToggleDark }) {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-dark-surface border-b border-gray-200 dark:border-dark-border">
      <div className="max-w-[77rem] mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center">
            <img
              src={almiLogo}
              alt="Almi"
              width="114"
              height="41"
              className={isDark ? 'brightness-0 invert' : ''}
            />
          </a>

          <div className="flex items-center gap-6">
            <nav className="hidden sm:flex items-center gap-8">
              <a href="#upcoming" className="text-gray-900 dark:text-gray-200 hover:text-almi-pink transition-colors text-sm font-medium">
                Upcoming
              </a>
              <a href="#past" className="text-gray-900 dark:text-gray-200 hover:text-almi-pink transition-colors text-sm font-medium">
                Past Events
              </a>
              <a href="#calendar" className="text-gray-900 dark:text-gray-200 hover:text-almi-pink transition-colors text-sm font-medium">
                Calendar
              </a>
            </nav>

            {/* Dark mode toggle */}
            <button
              onClick={onToggleDark}
              className="p-2 rounded-sm text-gray-500 dark:text-gray-400 hover:text-almi-pink dark:hover:text-almi-pink-light transition-colors cursor-pointer"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              )}
            </button>

            {/* Mobile menu button */}
            <button className="sm:hidden p-2 text-gray-600 dark:text-gray-400 cursor-pointer" aria-label="Menu">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
