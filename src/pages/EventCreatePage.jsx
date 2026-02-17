import { useState } from "react";
import Button from "../components/shared/Button";
import TextInput from "../components/shared/TextInput";
import { getGeoCode } from "../lib/getGeoCode";

const EventCreatePage = () => {
  const [geoCode, setGeoCode] = useState([8.6820917, 50.1106444]);
  const [formData, setFormData] = useState({
    date: "",
    title: "",
    location: "",
    description: "",
    longitude: "",
    latitude: "",
  });

  const handleBlur = async (event) => {
    const newGeoCode = await getGeoCode(event.target.value);
    setGeoCode(newGeoCode);
    setFormData((prevData) => ({
      ...prevData,
      longitude: newGeoCode[0],
      latitude: newGeoCode[1],
    }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormData((prevData) => ({
      ...prevData,
      longitude: geoCode[0],
      latitude: geoCode[1],
    }));
    console.log(formData);
    try {
      const response = await fetch("http://localhost:3001/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to create event");
      }
      const data = await response.json();
      console.log("Event created successfully:", data);
    } catch (error) {
      console.error("Error creating event:", error);
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
          onChange={handleInputChange}
        />
        <TextInput
          placeholder="Title"
          name="title"
          onChange={handleInputChange}
        />
        <TextInput
          placeholder="Location"
          name="location"
          onBlur={handleBlur}
          onChange={handleInputChange}
        />
        <textarea
          placeholder="Description"
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

export default EventCreatePage;
