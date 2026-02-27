import { useState, useMemo } from 'react';
import eventsData from '../data/events.json';
import { isPastEvent, getSortDate, getMonthFromEvent, getMonthOrder } from '../utils/dateUtils';

export function useEvents() {
  const [monthFilter, setMonthFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');

  const allEvents = useMemo(() =>
    eventsData.map(event => ({
      ...event,
      isPast: isPastEvent(event),
      sortDate: getSortDate(event),
      normalizedMonth: getMonthFromEvent(event),
    })),
    []
  );

  const months = useMemo(() =>
    [...new Set(allEvents.map(e => e.normalizedMonth))]
      .sort((a, b) => getMonthOrder(a) - getMonthOrder(b)),
    [allEvents]
  );

  const locations = useMemo(() =>
    [...new Set(allEvents.map(e => e.location).filter(Boolean))].sort(),
    [allEvents]
  );

  const filteredEvents = useMemo(() => {
    let events = allEvents;
    if (monthFilter !== 'all') {
      events = events.filter(e => e.normalizedMonth === monthFilter);
    }
    if (locationFilter !== 'all') {
      events = events.filter(e => e.location === locationFilter);
    }
    return [...events].sort((a, b) => a.sortDate.localeCompare(b.sortDate));
  }, [allEvents, monthFilter, locationFilter]);

  const upcomingEvents = useMemo(() =>
    filteredEvents.filter(e => !e.isPast),
    [filteredEvents]
  );

  const pastEvents = useMemo(() =>
    filteredEvents.filter(e => e.isPast),
    [filteredEvents]
  );

  const stats = useMemo(() => ({
    total: allEvents.length,
    upcoming: allEvents.filter(e => !e.isPast).length,
    locations: new Set(allEvents.map(e => e.location).filter(Boolean)).size,
  }), [allEvents]);

  return {
    upcomingEvents,
    pastEvents,
    months,
    locations,
    monthFilter,
    setMonthFilter,
    locationFilter,
    setLocationFilter,
    stats,
  };
}
