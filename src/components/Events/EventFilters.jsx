import { Button } from '@/components/ui/button';

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
      <div className="max-w-[77rem] mx-auto px-4 sm:px-8 py-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <span className="text-sm font-medium text-gray-800 dark:text-gray-200 shrink-0">Filter by:</span>

          <div className="flex flex-wrap gap-2">
            <Button
              variant={monthFilter === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setMonthFilter('all')}
            >
              All Months
            </Button>
            {months.map(month => (
              <Button
                key={month}
                variant={monthFilter === month ? 'default' : 'outline'}
                size="sm"
                onClick={() => setMonthFilter(month)}
              >
                {month}
              </Button>
            ))}
          </div>

          <div className="sm:ml-auto">
            <select
              value={locationFilter}
              onChange={e => setLocationFilter(e.target.value)}
              className="h-8 px-3 rounded-md text-sm font-medium bg-white dark:bg-dark-surface-2 text-gray-600 dark:text-gray-300 border border-input hover:border-almi-pink transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring/50"
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
