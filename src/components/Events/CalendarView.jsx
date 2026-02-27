import { useMemo } from 'react';
import { formatDate } from '../../utils/dateUtils';

const MONTHS = [
  'Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni',
  'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December',
];

export default function CalendarView({ events }) {
  const currentYear = new Date().getFullYear();

  const eventsByMonth = useMemo(() => {
    const map = {};
    MONTHS.forEach(m => { map[m] = []; });
    events.forEach(event => {
      const month = event.normalizedMonth;
      if (map[month]) {
        map[month].push(event);
      }
    });
    return map;
  }, [events]);

  return (
    <section id="calendar" className="py-12 sm:py-18 bg-white dark:bg-dark-bg">
      <div className="max-w-[77rem] mx-auto px-8">
        <h2 className="text-2xl sm:text-[36px] font-bold text-gray-800 dark:text-gray-200 leading-tight mb-10">
          Calendar {currentYear}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {MONTHS.map(month => {
            const monthEvents = eventsByMonth[month];
            const hasEvents = monthEvents.length > 0;

            return (
              <div
                key={month}
                className={`border rounded-sm p-5 transition-colors ${
                  hasEvents
                    ? 'border-almi-pink/30 bg-almi-rose-bg dark:bg-dark-rose-bg dark:border-almi-pink/20'
                    : 'border-gray-200 bg-gray-50 dark:bg-dark-surface dark:border-dark-border'
                }`}
              >
                <h3 className={`text-sm font-bold uppercase tracking-wider mb-3 ${
                  hasEvents ? 'text-almi-pink' : 'text-gray-400 dark:text-gray-500'
                }`}>
                  {month}
                </h3>

                {hasEvents ? (
                  <ul className="space-y-2">
                    {monthEvents.map(event => (
                      <li key={event.id} className="text-sm">
                        <span className="font-medium text-gray-800 dark:text-gray-200">{event.name}</span>
                        {event.startDate && (
                          <span className="block text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                            {formatDate(event.startDate)}
                            {event.location && ` · ${event.location}`}
                          </span>
                        )}
                        {!event.startDate && event.location && (
                          <span className="block text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                            {event.location}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs text-gray-400 dark:text-gray-500 italic">No events</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
