import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getImageFromQuery } from "../lib/getImageFromQuery";
import { getFormattedDate } from "../lib/date";
import { useFetchEventById } from "../hooks/useFetchEventById";
import LoadingSpnner from "../components/shared/LoadingSpnner";
import { toast } from "sonner";

const EventDetail = () => {
  const { id } = useParams();
  const { event, loading, error } = useFetchEventById(id);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      if (!event) return;
      const imageUrl = await getImageFromQuery(event.location);
      setImageUrl(imageUrl);
    };
    fetchImage();
  }, [event]);

  if (loading) {
    return <LoadingSpnner />;
  }

  if (error) {
    toast.error("Failed to load event details");
    return <p>Error loading event details: {error}</p>;
  }

  return (
    <div>
      <img
        src={imageUrl}
        alt={event?.location}
        className="w-full h-100 object-cover"
      />

      <p className="text-md mt-6">{getFormattedDate(event?.date)}</p>
      <h2 className="text-5xl mt-4">{event?.title}</h2>
      <p className="text-lg mt-6">{event?.description}</p>
    </div>
  );
};

export default EventDetail;
