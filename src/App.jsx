import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HeroSection from './components/Events/HeroSection';
import EventFilters from './components/Events/EventFilters';
import EventList from './components/Events/EventList';
import CalendarView from './components/Events/CalendarView';
import { useEvents } from './hooks/useEvents';
import { useDarkMode } from './hooks/useDarkMode';

function App() {
  const {
    upcomingEvents,
    pastEvents,
    filteredEvents,
    months,
    locations,
    monthFilter,
    setMonthFilter,
    locationFilter,
    setLocationFilter,
    stats,
  } = useEvents();

  const { isDark, toggle: toggleDark } = useDarkMode();

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg flex flex-col">
      <Header isDark={isDark} onToggleDark={toggleDark} />
      <HeroSection stats={stats} />
      <EventFilters
        months={months}
        locations={locations}
        monthFilter={monthFilter}
        setMonthFilter={setMonthFilter}
        locationFilter={locationFilter}
        setLocationFilter={setLocationFilter}
      />
      <main className="flex-1 bg-gray-50 dark:bg-dark-bg">
        <EventList
          id="upcoming"
          title="Upcoming Events"
          events={upcomingEvents}
          emptyMessage="No upcoming events match your filters."
        />
        <EventList
          id="past"
          title="Past Events"
          events={pastEvents}
          emptyMessage="No past events match your filters."
        />
      </main>
      <CalendarView events={filteredEvents} />
      <Footer />
    </div>
  );
}

export default App;
