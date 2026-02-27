import { useCountUp } from '@/hooks/useCountUp';

function CountStat({ value, label, pink }) {
  const { count, ref } = useCountUp(value);

  return (
    <div className="text-center flex flex-col items-center" ref={ref}>
      <span className={`block text-3xl sm:text-5xl font-bold leading-none count-animate ${pink ? 'text-almi-pink' : 'text-gray-900 dark:text-white'}`}>
        {count}
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

        <div className="inline-grid grid-cols-3 items-start bg-white dark:bg-dark-surface rounded-xl px-6 sm:px-10 py-6 sm:py-8 shadow-sm border border-gray-100 dark:border-dark-border gap-4 sm:gap-14">
          <CountStat value={stats.total} label="Total Events" />
          <div className="relative flex justify-center">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-dark-border" />
            <CountStat value={stats.upcoming} label="Upcoming" pink />
            <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-dark-border" />
          </div>
          <CountStat value={stats.locations} label="Locations" />
        </div>
      </div>
    </section>
  );
}
