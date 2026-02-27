export default function EventFilters({
  months,
  locations,
  monthFilter,
  setMonthFilter,
  locationFilter,
  setLocationFilter,
}) {
  return (
    <section className="bg-white border-b border-navy-100 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <span className="text-sm font-medium text-navy-500 shrink-0">Filter by:</span>

          {/* Month pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setMonthFilter('all')}
              className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                monthFilter === 'all'
                  ? 'bg-navy-900 text-white shadow-sm'
                  : 'bg-navy-50 text-navy-600 hover:bg-navy-100'
              }`}
            >
              All Months
            </button>
            {months.map(month => (
              <button
                key={month}
                onClick={() => setMonthFilter(month)}
                className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                  monthFilter === month
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'bg-navy-50 text-navy-600 hover:bg-navy-100'
                }`}
              >
                {month}
              </button>
            ))}
          </div>

          {/* Location dropdown */}
          <div className="sm:ml-auto">
            <select
              value={locationFilter}
              onChange={e => setLocationFilter(e.target.value)}
              className="px-3.5 py-1.5 rounded-lg text-sm font-medium bg-navy-50 text-navy-600 border border-navy-200 hover:bg-navy-100 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/50"
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
