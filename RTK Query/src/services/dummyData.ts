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
      query: (Product) => ({
        url: `products/add`,
        method: "Post",
        body: Product,
      }),
    }),
    updateProduct: builder.mutation<
      Product,
      { id: number; updatedProduct: Product }
    >({
      query: ({ id, updatedProduct }) => ({
        url: `products/${id}`,
        method: "Put",
        body: updatedProduct,
      }),
    }),
    deleteProduct:builder.mutation<Product,{id:number}>({
      query:({id})=>{
        url: `products/${id}`,
        method: "Put",
      }
    })
  }),
});
export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useAddNewProductMutation,
  useUpdateProductMutation,
} = productApi;
