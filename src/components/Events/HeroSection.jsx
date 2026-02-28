import { useCountUp } from '@/hooks/useCountUp';

function CountStat({ value, label, pink }) {
  const { ref, displayRef } = useCountUp(value);

  return (
    <div className="text-center flex flex-col items-center" ref={ref}>
      <span
        ref={displayRef}
        className={`block text-3xl sm:text-5xl font-bold leading-none count-animate ${pink ? 'text-almi-pink' : 'text-gray-900 dark:text-white'}`}
      >
        0
      </span>
      <span className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mt-2 block font-light">{label}</span>
    </div>
  );
}

export default function HeroSection({ stats }) {
  const currentYear = new Date().getFullYear();

  return (
    <section className="bg-almi-rose-bg dark:bg-dark-rose-bg">
      <div className="max-w-[58rem] mx-auto px-4 sm:px-8 py-12 sm:py-24 text-center">
        <h1 className="text-3xl sm:text-5xl lg:text-[64px] font-bold text-almi-pink leading-[1.15] mb-4 sm:mb-6">
          <span className="highlight-text">Event Calendar</span> {currentYear}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-12 font-light">
          Stay up to date with our upcoming events, conferences, and summits across Sweden.
        </p>

        <div className="inline-flex items-center bg-white dark:bg-dark-surface rounded-2xl px-8 sm:px-14 py-7 sm:py-9 shadow-sm border border-gray-100 dark:border-dark-border">
          <CountStat value={stats.total} label="Total Events" />
          <div className="w-px self-stretch bg-gray-200 dark:bg-dark-border mx-6 sm:mx-12" />
          <CountStat value={stats.upcoming} label="Upcoming" pink />
          <div className="w-px self-stretch bg-gray-200 dark:bg-dark-border mx-6 sm:mx-12" />
          <CountStat value={stats.locations} label="Locations" />
        </div>
      </div>
    </section>
  );
}
