import { Link } from "react-router";
import { getFormattedDate } from "../lib/date";
import { useEffect, useState } from "react";
import { getImageFromQuery } from "../lib/getImageFromQuery";

const EventCard = ({ event }) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      const imageUrl = await getImageFromQuery(event.location);
      setImageUrl(imageUrl);
    };
    fetchImage();
  }, []);

  return (
    <Link to={`/event/${event.id}`}>
      <div className="bg-gray-700 rounded-lg shadow-md cursor-pointer overflow-hidden h-full">
        <img
          className="h-48 w-full object-cover"
          src={imageUrl}
          alt={event.title}
        />
        <div className="p-4">
          <p className="text-xs mb-4">{getFormattedDate(event.date)}</p>
          <h2 className="text-2xl mb-1">{event.title}</h2>
          <p className="mb-5">({event.location})</p>
          <p>{event.description}</p>
          <button className="w-full bg-gray-900 hover:bg-gray-800 text-white p-4 rounded-2xl mt-5 cursor-pointer">
            Details
          </button>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
