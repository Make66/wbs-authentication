export const getImageFromQuery = async (query) => {
  const baseUrl = `https://pixabay.com/api/?key=48610412-5af69bed1e6ea2b8235811742&q=${encodeURIComponent(query)}`;
  try {
    const response = await fetch(baseUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch image");
    }
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.hits.length);
    return data.hits[randomIndex]?.webformatURL || null;
  } catch (error) {
    console.error(error);
    return null;
  }
};
