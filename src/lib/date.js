export const getFormattedDate = (dateString) => {
  const formattedDate = new Date(dateString).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  return formattedDate;
};
