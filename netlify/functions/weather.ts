import { Handler } from "@netlify/functions";
import fetch from "node-fetch";

const API_KEY = process.env.VITE_API_KEY;

const handler: Handler = async (event) => {
  // grab location from query string
  const { location } = event.queryStringParameters || {};
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=5&aqi=no&alerts=no`;

  const response = await fetch(url);
  const data = await response.json();

  if (!data) {
    return {
      statusCode: 500,
      body: "Error fetching weather data",
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};

export { handler };
