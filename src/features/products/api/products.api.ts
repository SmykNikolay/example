import { BaseApi } from "../../../shared/api/base-api";



interface Product {
  id: number;
  title: string;
  completed: boolean;
}

class ProductsApi extends BaseApi {
  constructor() {
    super({ baseURL: 'https://jsonplaceholder.typicode.com' });
  }

  getProducts() {
    return this.get<Product[]>('/posts');
  }
}

export const productsApi = new ProductsApi();
