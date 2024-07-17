import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

const baseQuery = async (args, api, extraOptions) => {
  const { dispatch } = api;
  const rawBaseQuery = fetchBaseQuery({
    baseUrl: `https://obidjon.pythonanywhere.com/api/v1`,
    prepareHeaders: (headers) => {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIxMjg1MjEwLCJpYXQiOjE3MjExOTg4MTAsImp0aSI6IjYwM2NkMWYwODczOTQ0NzVhOGM0ODM2MmU0YWRkYzdjIiwidXNlcl9pZCI6MTB9.fRL2yf6FHHqa8V950fySPcWyxvrYRANq_tmACLt05gc"; // Provided token
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  });

  const result = await rawBaseQuery(args, api, extraOptions);

  if (result.error) {
    const { status } = result.error;
    if (status === 401 || status === 403) {
      console.error('Unauthorized access - Redirecting to login...');
      dispatch(logout());
    }
  }
  return result;
};

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 });

export const api = createApi({
  reducerPath: 'myApi',
  baseQuery: baseQueryWithRetry,
  tagTypes: ["company", "Product", "Category"], 
  endpoints: () => ({}),
});
