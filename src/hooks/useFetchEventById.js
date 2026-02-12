import { useEffect, useState } from "react";

export const useFetchEventById = (id) => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchEvent = async () => {
      try {
        setLoading(true);

        const response = await fetch(`http://localhost:3001/api/events/${id}`);

        if (!response.ok) {
          throw new Error("Failed to fetch event");
        }

        const data = await response.json();
        setEvent(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setEvent(null);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  return { event, loading, error };
};
