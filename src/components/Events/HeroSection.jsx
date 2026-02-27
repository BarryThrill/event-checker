import { useCountUp } from '@/hooks/useCountUp';

function CountStat({ value, label, pink }) {
  const { count, ref } = useCountUp(value);

  return (
    <div className="text-center" ref={ref}>
      <span className={`block text-3xl sm:text-5xl font-bold count-animate ${pink ? 'text-almi-pink' : 'text-gray-900 dark:text-white'}`}>
        {count}
      </span>
      <span className="text-gray-500 dark:text-gray-400 text-sm mt-1.5 block font-light">{label}</span>
    </div>
  );
}

export default function HeroSection({ stats }) {
  const currentYear = new Date().getFullYear();

  return (
    <section className="bg-almi-rose-bg dark:bg-dark-rose-bg">
      <div className="max-w-[58rem] mx-auto px-8 py-16 sm:py-24 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-almi-pink leading-[1.15] mb-6">
          <span className="highlight-text">Event Calendar</span> {currentYear}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-12 font-light">
          Stay up to date with our upcoming events, conferences, and summits across Sweden.
        </p>

        <div className="inline-flex items-center gap-8 sm:gap-14 bg-white dark:bg-dark-surface rounded-xl px-10 py-8 shadow-sm border border-gray-100 dark:border-dark-border">
          <CountStat value={stats.total} label="Total Events" />
          <div className="w-px h-14 bg-gray-200 dark:bg-dark-border" />
          <CountStat value={stats.upcoming} label="Upcoming" pink />
          <div className="w-px h-14 bg-gray-200 dark:bg-dark-border" />
          <CountStat value={stats.locations} label="Locations" />
        </div>
      </div>
    </section>
  );
}
