require("dotenv").config();
const express = require("express");
const axios = require("axios");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/weather", async (req, res) => {
  const city = req.query.city;
  if (!city) {
    return res.status(400).json({ error: "City is required" });
  }
  try {
    // weather api
    const weatherRes = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          q: city,
          appid: process.env.OPENWEATHER_API_KEY,
          units: "metric"
        }
      }
    );

    const w = weatherRes.data;
// country api 
    const countryRes = await axios.get(
      `https://restcountries.com/v3.1/alpha/${w.sys.country}`
    );
    const c = countryRes.data[0];
    //SAFE RESPONSE
    res.json({
      temperature: w.main?.temp ?? null,
      feels_like: w.main?.feels_like ?? null,
      description: w.weather?.[0]?.description ?? "N/A",
      wind_speed: w.wind?.speed ?? null,
      country_name: c?.name?.common ?? "N/A",
      capital: c?.capital?.[0] ?? "N/A",
      currency: c?.currencies
        ? Object.keys(c.currencies)[0]
        : "N/A",
      rain_last_3h: w.rain?.["3h"] ?? 0
    });

  } catch (error) {
    console.error("API ERROR:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to load weather data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
