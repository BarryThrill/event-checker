import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HeroSection from './components/Events/HeroSection';
import EventFilters from './components/Events/EventFilters';
import EventList from './components/Events/EventList';
import { useEvents } from './hooks/useEvents';

function App() {
  const {
    upcomingEvents,
    pastEvents,
    months,
    locations,
    monthFilter,
    setMonthFilter,
    locationFilter,
    setLocationFilter,
    stats,
  } = useEvents();

  return (
    <div className="min-h-screen bg-navy-50 flex flex-col">
      <Header />
      <HeroSection stats={stats} />
      <EventFilters
        months={months}
        locations={locations}
        monthFilter={monthFilter}
        setMonthFilter={setMonthFilter}
        locationFilter={locationFilter}
        setLocationFilter={setLocationFilter}
      />
      <main className="flex-1">
        <EventList
          id="upcoming"
          title="Upcoming Events"
          events={upcomingEvents}
          emptyMessage="No upcoming events match your filters."
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <hr className="border-navy-200" />
        </div>
        <EventList
          id="past"
          title="Past Events"
          events={pastEvents}
          emptyMessage="No past events match your filters."
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
