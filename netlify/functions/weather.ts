import { Handler } from "@netlify/functions";
import fetch from "node-fetch";

const API_KEY = process.env.VITE_API_KEY;

const handler: Handler = async (event) => {
  if (!API_KEY) {
    return {
      statusCode: 500,
      body: "Missing API key",
    };
  }

  // grab location from query string
  const { location } = event.queryStringParameters || {};

  if (!location) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Missing location",
      }),
    };
  }

  const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=5&aqi=no&alerts=no`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: error.message,
      }),
    };
  }
};

export { handler };
