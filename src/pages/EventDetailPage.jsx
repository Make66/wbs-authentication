import { useParams } from "react-router";
import { useFetchEventById } from "../hooks/useFetchEventById";

const EventDetail = () => {
  const { id } = useParams();

  const { event, loading, error } = useFetchEventById(id);

  if (loading) {
    return <p>Loading event details...</p>;
  }

  if (error) {
    return <p>Error loading event details: {error}</p>;
  }

  return (
    <div>
      <h1>Event Detail:</h1>

      <h2>{event?.title}</h2>
    </div>
  );
};

export default EventDetail;
