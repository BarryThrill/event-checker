import EventCard from './EventCard';

export default function EventList({ title, events, id, emptyMessage }) {
  return (
    <section id={id} className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">{title}</h2>
          <span className="bg-navy-100 text-navy-600 text-sm font-semibold px-3 py-1 rounded-full">
            {events.length}
          </span>
        </div>

        {events.length === 0 ? (
          <div className="text-center py-16 bg-navy-50 rounded-2xl border border-navy-100">
            <svg className="w-12 h-12 text-navy-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
            <p className="text-navy-400 text-lg">{emptyMessage}</p>
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
