import { useEffect, useState } from "react";
import Button from "../components/shared/Button";
import TextInput from "../components/shared/TextInput";
import { getGeoCode } from "../lib/getGeoCode";
import { toast } from "sonner";
import { useNavigate, useParams } from "react-router";
import { useFetchEventById } from "../hooks/useFetchEventById";

const EventEditPage = () => {
  const { id } = useParams();
  const { event } = useFetchEventById(id);
  const navigate = useNavigate();
  const [geoCode, setGeoCode] = useState([8.6820917, 50.1106444]);
  const [formData, setFormData] = useState({
    date: "",
    title: "",
    location: "",
    description: "",
    longitude: "",
    latitude: "",
  });

  useEffect(() => {
    if (event) {
      setFormData({
        date: new Date(event.date).toISOString().slice(0, 16) || "",
        title: event.title,
        location: event.location,
        description: event.description,
        longitude: event.longitude,
        latitude: event.latitude,
      });
      setGeoCode([event.longitude, event.latitude]);
    }
  }, [event]);

  const handleBlur = async (e) => {
    const newGeoCode = await getGeoCode(e.target.value);
    setGeoCode(newGeoCode);
    setFormData((prevData) => ({
      ...prevData,
      longitude: newGeoCode[0],
      latitude: newGeoCode[1],
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      longitude: geoCode[0],
      latitude: geoCode[1],
    };

    try {
      const response = await fetch(`http://localhost:3001/api/events/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to create event");
      toast.success("Event created successfully!");
      navigate("/admin");
    } catch (error) {
      console.error(error);
      toast.error("Failed to create event");
    }
  };

  return (
    <form
      className="grid grid-cols-1 md:grid-cols-2 gap-5"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-5">
        <TextInput
          placeholder="Date"
          name="date"
          type="datetime-local"
          value={formData.date}
          onChange={handleInputChange}
        />
        <TextInput
          placeholder="Title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
        <TextInput
          placeholder="Location"
          name="location"
          value={formData.location}
          onBlur={handleBlur}
          onChange={handleInputChange}
        />
        <textarea
          placeholder="Description"
          value={formData.description}
          name="description"
          className="border border-gray-300 rounded-md p-5 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <iframe
          title="map"
          width="500"
          height="500"
          style={{ border: 0, borderRadius: 12 }}
          loading="lazy"
          src={`https://www.openstreetmap.org/export/embed.html?bbox=${geoCode[0] - 0.02}%2C${geoCode[1] - 0.02}%2C${geoCode[0] + 0.02}%2C${geoCode[1] + 0.02}&layer=mapnik&marker=${geoCode[1]}%2C${geoCode[0]}`}
        />
      </div>

      <Button
        className="md:col-span-2 mt-2"
        text="Create Event"
        type="submit"
      />
    </form>
  );
};

export default EventEditPage;
