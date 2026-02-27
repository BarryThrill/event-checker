import { useMemo, useState } from 'react';
import { formatDate } from '@/utils/dateUtils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const MONTHS = [
  'Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni',
  'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December',
];

const PREVIEW_COUNT = 3;

function MonthCard({ month, events }) {
  const [expanded, setExpanded] = useState(false);
  const hasEvents = events.length > 0;
  const hasMore = events.length > PREVIEW_COUNT;
  const visibleEvents = expanded ? events : events.slice(0, PREVIEW_COUNT);
  const hiddenCount = events.length - PREVIEW_COUNT;

  return (
    <div className={`border rounded-lg p-5 transition-all duration-200 ${
      hasEvents
        ? 'border-almi-pink/20 bg-almi-rose-bg/50 dark:bg-dark-rose-bg dark:border-almi-pink/15 hover:border-almi-pink/40'
        : 'border-gray-200 bg-gray-50/50 dark:bg-dark-surface dark:border-dark-border'
    }`}>
      {/* Month header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className={`text-sm font-bold uppercase tracking-wider ${
          hasEvents ? 'text-almi-pink' : 'text-gray-400 dark:text-gray-500'
        }`}>
          {month}
        </h3>
        {hasEvents && (
          <Badge variant={events.length > 5 ? 'default' : 'secondary'} className="text-[10px] px-1.5 py-0">
            {events.length}
          </Badge>
        )}
      </div>

      {hasEvents ? (
        <>
          <ul className="space-y-2.5">
            {visibleEvents.map(event => (
              <li key={event.id} className="text-sm group/item">
                <div className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-almi-pink mt-2 shrink-0" />
                  <div className="min-w-0">
                    <span className="font-medium text-gray-800 dark:text-gray-200 text-[13px] leading-snug block truncate">
                      {event.name}
                    </span>
                    <span className="text-[11px] text-gray-500 dark:text-gray-400 leading-tight block">
                      {event.startDate ? formatDate(event.startDate) : 'Date TBD'}
                      {event.location && ` · ${event.location}`}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {hasMore && (
            <Button
              variant="ghost"
              size="xs"
              className="w-full mt-3 text-[11px] text-almi-pink hover:text-almi-pink-hover"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? 'Show less' : `+${hiddenCount} more event${hiddenCount > 1 ? 's' : ''}`}
            </Button>
          )}
        </>
      ) : (
        <p className="text-xs text-gray-400 dark:text-gray-500 italic">No events</p>
      )}
    </div>
  );
}

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
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl sm:text-[36px] font-bold text-gray-800 dark:text-gray-200 leading-tight">
            Calendar {currentYear}
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {MONTHS.map(month => (
            <MonthCard key={month} month={month} events={eventsByMonth[month]} />
          ))}
        </div>
      </div>
    </section>
  );
}
