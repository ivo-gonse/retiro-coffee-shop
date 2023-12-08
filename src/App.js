import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'
import Productos from "./components/Productos.jsx";
import Contacto from "./components/Contacto.jsx";
import QuienesSomos from "./components/QuienesSomos.jsx";
import Sucursales from "./components/Sucursales.jsx";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/quienes-somos' element={<QuienesSomos />} />
        <Route path='/sucursales' element={<Sucursales />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
