export default function HeroSection({ stats }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800">
      {/* Abstract background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-accent-light rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent-dark rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <p className="text-accent-light text-sm font-semibold tracking-widest uppercase mb-3">
            2026 Event Overview
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Event Calendar
          </h1>
          <p className="text-navy-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            Stay up to date with our upcoming events, conferences, and summits across Sweden.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white">{stats.total}</div>
              <div className="text-navy-400 text-sm mt-1">Total Events</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-accent-light">{stats.upcoming}</div>
              <div className="text-navy-400 text-sm mt-1">Upcoming</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white">{stats.locations}</div>
              <div className="text-navy-400 text-sm mt-1">Locations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
