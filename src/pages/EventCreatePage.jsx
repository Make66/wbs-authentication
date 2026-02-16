import Button from "../components/shared/Button";
import TextInput from "../components/shared/TextInput";

const EventCreatePage = () => {
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex flex-col gap-5">
        <TextInput placeholder="Event Name" name="eventName" />
        <TextInput placeholder="Date" name="date" type="date" />
        <TextInput placeholder="Location" name="location" />
        <TextInput placeholder="Description" name="description" multiline />
      </div>
      <div></div>

      <Button
        className="md:col-span-2 mt-2"
        text="Create Event"
        type="submit"
      />
    </form>
  );
};

export default EventCreatePage;
