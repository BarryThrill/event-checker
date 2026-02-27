export default function EventFilters({
  months,
  locations,
  monthFilter,
  setMonthFilter,
  locationFilter,
  setLocationFilter,
}) {
  return (
    <section className="bg-white dark:bg-dark-surface border-b border-gray-100 dark:border-dark-border sticky top-16 z-40">
      <div className="max-w-[77rem] mx-auto px-8 py-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <span className="text-sm font-medium text-gray-800 dark:text-gray-200 shrink-0">Filter by:</span>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setMonthFilter('all')}
              className={`px-4 py-2 rounded-sm text-sm font-medium transition-all duration-200 cursor-pointer border ${
                monthFilter === 'all'
                  ? 'bg-almi-pink text-white border-almi-pink'
                  : 'bg-white dark:bg-dark-surface-2 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-dark-border hover:border-almi-pink hover:text-almi-pink'
              }`}
            >
              All Months
            </button>
            {months.map(month => (
              <button
                key={month}
                onClick={() => setMonthFilter(month)}
                className={`px-4 py-2 rounded-sm text-sm font-medium transition-all duration-200 cursor-pointer border ${
                  monthFilter === month
                    ? 'bg-almi-pink text-white border-almi-pink'
                    : 'bg-white dark:bg-dark-surface-2 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-dark-border hover:border-almi-pink hover:text-almi-pink'
                }`}
              >
                {month}
              </button>
            ))}
          </div>

          <div className="sm:ml-auto">
            <select
              value={locationFilter}
              onChange={e => setLocationFilter(e.target.value)}
              className="px-4 py-2 rounded-sm text-sm font-medium bg-white dark:bg-dark-surface-2 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-dark-border hover:border-almi-pink transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-almi-pink/30"
            >
              <option value="all">All Locations</option>
              {locations.map(loc => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}
