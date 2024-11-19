import { useProducts } from "./hooks/useProduct.hook";

export default function ProductsList() {
    const { data: products, isLoading, error } = useProducts();
  
    if (isLoading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка: {error.message}</div>;
  
    return (
      <ul>
        {products?.map(product => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    );
  }