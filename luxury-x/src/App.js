import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Categories from './pages/Categories';
import Product from './pages/Product';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:categoryName" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
