import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurant } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurant[], void>({
      query: () => ''
    }),
    getMenu: builder.query<Restaurant, string>({
      query: (id) => `/${id}`
    })
  })
})

export const { useGetRestaurantsQuery, useGetMenuQuery } = api

export default api
