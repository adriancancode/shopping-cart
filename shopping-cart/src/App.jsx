import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from '/Home';
import Cart from '/Cart';

function App() {
  

  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Cart />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App
