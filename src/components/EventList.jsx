import { useMemo } from "react";
import { useFetchEvents } from "../hooks/useFetchEvents";
import EventCard from "./EventCard";

const EventList = () => {
  const { events, loading, error } = useFetchEvents();

  const sortedEvents = useMemo(() => {
    return [...events].sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [events]);

  if (loading) {
    return <p>Loading events...</p>;
  }

  if (error) {
    return <p>Error loading events: {error}</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sortedEvents.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventList;
