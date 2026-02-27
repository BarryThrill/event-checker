import { formatDateRange } from '../../utils/dateUtils';

export default function EventCard({ event }) {
  const dateStr = formatDateRange(event.startDate, event.endDate);

  return (
    <div className={`group relative bg-white rounded-2xl border border-navy-200 shadow-sm hover:shadow-lg hover:border-accent/30 transition-all duration-300 overflow-hidden ${event.isPast ? 'opacity-75' : ''}`}>
      {/* Top accent bar */}
      <div className={`h-1 ${event.isPast ? 'bg-navy-300' : 'bg-gradient-to-r from-accent to-accent-light'}`} />

      <div className="p-5 sm:p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <h3 className="text-lg font-bold text-navy-900 group-hover:text-accent-dark transition-colors leading-tight">
            {event.name}
          </h3>
          {event.isPast ? (
            <span className="shrink-0 text-xs font-medium bg-navy-100 text-navy-500 px-2.5 py-1 rounded-full">
              Past
            </span>
          ) : (
            <span className="shrink-0 text-xs font-medium bg-accent/10 text-accent-dark px-2.5 py-1 rounded-full">
              Upcoming
            </span>
          )}
        </div>

        {/* Info rows */}
        <div className="space-y-2.5">
          {/* Date */}
          <div className="flex items-center gap-2.5 text-sm">
            <svg className="w-4 h-4 text-navy-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
            <span className="text-navy-600">{dateStr}</span>
          </div>

          {/* Location */}
          {event.location && (
            <div className="flex items-center gap-2.5 text-sm">
              <svg className="w-4 h-4 text-navy-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span className="text-navy-600">{event.location}</span>
            </div>
          )}

          {/* Participants */}
          {event.participants && (
            <div className="flex items-center gap-2.5 text-sm">
              <svg className="w-4 h-4 text-navy-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
              <span className="text-navy-600">{event.participants}</span>
            </div>
          )}

          {/* Description */}
          {event.description && (
            <div className="flex items-start gap-2.5 text-sm mt-3 pt-3 border-t border-navy-100">
              <svg className="w-4 h-4 text-navy-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </svg>
              <span className="text-navy-500 italic">{event.description}</span>
            </div>
          )}
        </div>

        {/* Link */}
        {event.link && (
          <a
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-accent hover:text-accent-dark transition-colors"
          >
            Visit Website
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
