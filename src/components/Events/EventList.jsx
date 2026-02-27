import EventCard from './EventCard';
import { Badge } from '@/components/ui/badge';

export default function EventList({ title, events, id, emptyMessage }) {
  return (
    <section id={id} className="py-12 sm:py-18">
      <div className="max-w-[77rem] mx-auto px-4 sm:px-8">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl sm:text-[36px] font-bold text-gray-800 dark:text-gray-200 leading-tight">{title}</h2>
          <Badge variant="secondary" className="text-sm px-3 py-1">
            {events.length}
          </Badge>
        </div>

        {events.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 dark:bg-dark-surface rounded-lg border border-dashed border-gray-200 dark:border-dark-border">
            <svg className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
            <p className="text-gray-400 dark:text-gray-500 text-lg font-light">{emptyMessage}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
