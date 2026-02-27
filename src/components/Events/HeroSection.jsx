export default function HeroSection({ stats }) {
  const currentYear = new Date().getFullYear();

  return (
    <section className="bg-almi-rose-bg dark:bg-dark-rose-bg">
      <div className="max-w-[58rem] mx-auto px-8 py-16 sm:py-24 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-almi-pink leading-[1.15] mb-6">
          Event Calendar {currentYear}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
          Stay up to date with our upcoming events, conferences, and summits across Sweden.
        </p>

        <div className="inline-flex items-center gap-6 sm:gap-12 bg-white dark:bg-dark-surface rounded-lg px-8 py-6 shadow-sm">
          <div className="text-center">
            <span className="block text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">{stats.total}</span>
            <span className="text-gray-500 dark:text-gray-400 text-sm mt-1 block">Total Events</span>
          </div>
          <div className="w-px h-12 bg-gray-200 dark:bg-dark-border" />
          <div className="text-center">
            <span className="block text-3xl sm:text-4xl font-bold text-almi-pink">{stats.upcoming}</span>
            <span className="text-gray-500 dark:text-gray-400 text-sm mt-1 block">Upcoming</span>
          </div>
          <div className="w-px h-12 bg-gray-200 dark:bg-dark-border" />
          <div className="text-center">
            <span className="block text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">{stats.locations}</span>
            <span className="text-gray-500 dark:text-gray-400 text-sm mt-1 block">Locations</span>
          </div>
        </div>
      </div>
    </section>
  );
}
