import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
type Product = {
  id: number;
  title: string;
  description: string;
};

type ProductsResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};
export const productApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<ProductsResponse, void>({
      query: () => `/products`,
    }),
    getProductById: builder.query<Product, number>({
      query: (id) => `/products/${id}`,
    }),
    addNewProduct: builder.mutation<Product, Product>({
      query: ({ id, ...newData }) => ({
        url: `post/${id}`,
        method: "Post",
        body: newData,
      }),
    }),
  }),
});
export const { useGetAllProductsQuery, useGetProductByIdQuery } = productApi;
