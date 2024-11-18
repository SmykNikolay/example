
import './App.css';
import { QueryProvider } from '../shared/queries/provider';
import ProductsList from '../features/products/ProductsList';

function App() {


  return (
    <QueryProvider>
     <ProductsList />
    </QueryProvider>
  );
}

export default App;