import almiLogo from '/almi-logo.svg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-dark-surface text-white">
      <div className="max-w-[77rem] mx-auto px-4 sm:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-8">
          <div>
            <img src={almiLogo} alt="Almi" width="100" height="36" className="brightness-0 invert mb-3" />
            <p className="text-gray-400 text-sm font-light">
              Event Calendar {currentYear}
            </p>
          </div>

          <div className="flex gap-12 text-sm">
            <div>
              <h4 className="font-medium text-white mb-3">Navigation</h4>
              <ul className="space-y-2 text-gray-400 font-light">
                <li><a href="#upcoming" className="hover:text-white transition-colors">Upcoming Events</a></li>
                <li><a href="#past" className="hover:text-white transition-colors">Past Events</a></li>
                <li><a href="#calendar" className="hover:text-white transition-colors">Calendar</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-white mb-3">About</h4>
              <ul className="space-y-2 text-gray-400 font-light">
                <li><a href="https://www.almi.se/riskkapital/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Almi Invest</a></li>
                <li><a href="https://www.almi.se" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Almi.se</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 dark:border-dark-border">
          <p className="text-gray-500 text-xs font-light">
            &copy; {currentYear} Almi &middot; Powered by Almi Invest
          </p>
        </div>
      </div>
    </footer>
  );
}
