import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/home';
import Cart from './pages/cart';
import Shop from './pages/shop';
import './styles/App.css';
function App() {
  

  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App
