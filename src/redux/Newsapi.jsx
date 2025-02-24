import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = import.meta.env.VITE_NEWS_BASE_URL;


const Newsapi = createApi({
    reducerPath: "newsapi",
    baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
    endpoints: (builder) => ({
      getNews: builder.query({
        query: ({ category = "general", page = 1, size = 10}) => (`top-headlines?country=us&category=${category}&page=${page}&size=${size}&apiKey=${API_KEY}`),
      }),
    }),
  });
  



export const { useGetNewsQuery } = Newsapi;
export default Newsapi;