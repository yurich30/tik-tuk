import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const videosAPI = createApi({
  reducerPath: 'videosAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://tiktok33.p.rapidapi.com' }),
  endpoints: (build) => ({
    fetchAllVideos: build.query({
      query: () => ({
        method: 'GET',
        url: '/trending/feed',
        headers: {
          'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
          'x-rapidapi-key':
            '294f036434msh90cf68bd9dd8898p152614jsn805ac4221ef0',
        },
      }),
    }),
  }),
});
