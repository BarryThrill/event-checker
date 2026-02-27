import { formatDateRange } from '@/utils/dateUtils';
import { Badge } from '@/components/ui/badge';

export default function EventCard({ event }) {
  const dateStr = formatDateRange(event.startDate, event.endDate);

  return (
    <article className={`group bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border rounded-lg hover:shadow-lg transition-all duration-300 ${event.isPast ? 'opacity-60' : ''}`}>
      <div className={`h-1.5 rounded-t-lg ${event.isPast ? 'bg-gray-300 dark:bg-gray-700' : 'bg-gradient-to-r from-almi-pink to-almi-pink-light'}`} />

      <div className="p-6 sm:p-8">
        <div className="flex items-center justify-between mb-4">
          <Badge variant={event.isPast ? 'secondary' : 'default'}>
            {event.isPast ? 'Past Event' : 'Upcoming'}
          </Badge>
          {event.location && (
            <span className="text-gray-400 dark:text-gray-500 text-xs font-medium">{event.location}</span>
          )}
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-almi-pink-light group-hover:text-almi-pink transition-colors leading-tight mb-5">
          {event.name}
        </h3>

        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-3">
            <svg className="w-4 h-4 text-gray-400 dark:text-gray-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
            <span className="text-gray-600 dark:text-gray-300 font-light">{dateStr}</span>
          </div>

          {event.participants && (
            <div className="flex items-center gap-3">
              <svg className="w-4 h-4 text-gray-400 dark:text-gray-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
              <span className="text-gray-600 dark:text-gray-300 font-light">{event.participants}</span>
            </div>
          )}

          {event.description && (
            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-dark-border">
              <p className="text-gray-500 dark:text-gray-400 font-light italic leading-relaxed">{event.description}</p>
            </div>
          )}
        </div>

        {event.link && (
          <a
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-5 text-sm font-medium text-almi-pink hover:text-almi-pink-hover underline underline-offset-4 transition-colors"
          >
            Visit Website
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        )}
      </div>
    </article>
  );
}
