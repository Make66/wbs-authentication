import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getImageFromQuery } from "../lib/getImageFromQuery";
import { getFormattedDate } from "../lib/date";
import { useFetchEventById } from "../hooks/useFetchEventById";
import LoadingSpnner from "../components/shared/LoadingSpnner";
import { toast } from "sonner";
import { getWeather } from "../lib/getWeather";

const EventDetail = () => {
  const { id } = useParams();
  const { event, loading, error } = useFetchEventById(id);
  const [imageUrl, setImageUrl] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      if (!event) return;
      const imageUrl = await getImageFromQuery(event.location);
      setImageUrl(imageUrl);
      const weather = await getWeather(
        event.latitude,
        event.longitude,
        event.date.split("T")[0],
      );
      setWeatherData(weather);
      console.log("Weather Data:", weather);
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
      <div className="relative">
        <img
          src={imageUrl}
          alt={event?.location}
          className="w-full h-100 object-cover"
        />
        <p className="absolute right-4 top-4 text-4xl font-bold">
          {(
            (weatherData?.daily?.temperature_2m_max[0] +
              weatherData?.daily?.temperature_2m_min[0]) /
            2
          ).toFixed(1)}
          °C
        </p>
      </div>

      <p className="text-md mt-6">{getFormattedDate(event?.date)}</p>
      <h2 className="text-5xl mt-4">
        {event?.title} - {event?.location}
      </h2>
      <p className="text-lg mt-6 mb-16">{event?.description}</p>
      <iframe
        title="map"
        width="500"
        height="500"
        style={{ border: 0, borderRadius: 12 }}
        loading="lazy"
        src={`https://www.openstreetmap.org/export/embed.html?bbox=${event?.longitude - 0.02}%2C${event?.latitude - 0.02}%2C${event?.longitude + 0.02}%2C${event?.latitude + 0.02}&layer=mapnik&marker=${event?.latitude}%2C${event?.longitude}`}
      />
    </div>
  );
};

export default EventDetail;
