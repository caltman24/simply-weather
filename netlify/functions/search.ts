import { Handler } from "@netlify/functions";
import fetch from "node-fetch";

const API_KEY: any = process.env.VITE_API_KEY;

const handler: Handler = async (event) => {
  const { location } = event.queryStringParameters || {};

  if (!location) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Missing location",
      }),
    };
  }

  if (!API_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Missing API key",
      }),
    };
  }

  try {
    const url = `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${location}`;
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
        message: "Something went wrong",
      }),
    };
  }
};

export { handler };
