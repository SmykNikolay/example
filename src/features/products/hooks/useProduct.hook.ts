import { useTypedQuery } from "../../../shared/hooks/use-typed-query";
import { productsApi } from "../api/products.api";

export const useProducts = () => {
  return useTypedQuery(['products'], () => productsApi.getProducts());
};