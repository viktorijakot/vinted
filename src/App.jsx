import { ProductsProvider } from './Components/ProductsContext';
import Layout from './Components/Layout';
import './App.scss';


function App() {

  return (
    <ProductsProvider>
      <div className="app">
        <div className="bin">
          <Layout/>
        </div>
      </div>
    </ProductsProvider>
  );
}
export default App;
