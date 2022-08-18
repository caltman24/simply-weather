import { Handler } from "@netlify/functions";
import * as nodeFetch from "node-fetch";
import { createApi } from "unsplash-js";
import { ApiResponse } from "unsplash-js/dist/helpers/response";
import { Random } from "unsplash-js/dist/methods/photos/types";

const API_KEY: any = process.env.VITE_UNSPLASH_KEY;

const handler: Handler = async (event) => {
  const { keyword } = event.queryStringParameters || {};

  if (!keyword) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Missing keyword",
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

  // unsplash api
  const unsplashAPI = createApi({
    apiUrl: "https://api.unsplash.com/",
    accessKey: API_KEY,
    fetch: nodeFetch.default as unknown as typeof fetch,
    headers: {
      "content-type": "application/json",
      accecpt: "application/json",
    },
  });

  const getRandomPhoto = async (keyword: string | undefined) => {
    const response = await unsplashAPI.photos.getRandom({
      query: keyword,
    });
    return response;
  };

  const getPhotoUrl = async (res: ApiResponse<Random | Random[]>) => {
    const photo = res?.response as Random;
    const url = photo?.urls?.raw + "&dpr=1&fit=crop&w=1920&h=1080";
    return url;
  };

  try {
    const res = await getRandomPhoto(keyword);
    const url = await getPhotoUrl(res);
    return {
      statusCode: 200,
      body: JSON.stringify({
        url,
      }),
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
