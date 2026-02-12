import { Link } from "react-router";
import { getFormattedDate } from "../lib/date";

const EventCard = ({ event }) => {
  return (
    <Link to={`/event/${event.id}`} className="block">
      <div className="bg-gray-700 p-4 rounded-lg shadow-md cursor-pointer">
        <p className="text-xs mb-4">{getFormattedDate(event.date)}</p>
        <h2 className="text-2xl mb-1">{event.title}</h2>
        <p className="mb-5">({event.location})</p>
        <p>{event.description}</p>
      </div>
    </Link>
  );
};

export default EventCard;
