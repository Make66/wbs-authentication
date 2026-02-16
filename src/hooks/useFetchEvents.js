import { useEffect, useState } from "react";

export const useFetchEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchEvents = async () => {
      try {
        setLoading(true);

        const response = await fetch("http://localhost:3001/api/events", {
          signal,
        });

        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }

        const data = await response.json();
        setEvents(data.results || []);
        setError(null);
      } catch (err) {
        if (err.name === "AbortError") return;
        setError(err.message);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();

    return () => controller.abort();
  }, []);

  return { events, loading, error };
};
