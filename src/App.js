import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ProductItem from './components/ProductItem';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/product/:productId' element={<ProductItem />} />
      </Routes>
    </div>
  );
}

export default App;
