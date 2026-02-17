export const getGeoCode = async (query) => {
  try {
    const response = await fetch(
      `https://photon.komoot.io/api/?q=${query}&lang=de&limit=1`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch geocode");
    }
    const data = await response.json();
    if (data.features.length === 0) {
      throw new Error("No geocode found for the given query");
    }

    return data.features[0].geometry.coordinates;
  } catch (error) {
    console.error("Error fetching geocode:", error);
    throw error; // Re-throw the error to be handled by the caller
  }
};
