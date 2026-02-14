export const getWeather = async (lat, long, date) => {
  const baseUrl = `https://archive-api.open-meteo.com/v1/archive
?latitude=${lat}
&longitude=${long}
&start_date=${date}
&end_date=${date}
&daily=temperature_2m_max,temperature_2m_min
&timezone=auto`;
  try {
    const response = await fetch(baseUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};
