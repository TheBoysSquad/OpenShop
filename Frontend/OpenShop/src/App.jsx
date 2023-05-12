import './App.css';
import { useState } from 'react';
/* Router */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/* Pages cliente */
import Home from '../client/components/pages/Home/home';
import Error from '../client/components/pages/404/404';
import Productos from '../client/components/pages/Products/products';
import Carrito from '../client/components/pages/Carrito/carrito';
/* Pages Admin */
import LoginAdmin from '../admin/components/pages/LoginAdmin/loginAdmin';
import HomeAdmin from '../admin/components/pages/Home/home';
import NuevosProductos from '../admin/components/pages/NuevosProductos/nuevosProductos';
import ListaProductos from '../admin/components/pages/Lista/lista';

function App() {
  const [carrito, setCarrito] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          { /* Cliente */ }
          <Route path="*" element={ <Error /> } />
          <Route path="/" element={ <Home /> } />
          <Route path="/productos" element={<Productos setCarrito={setCarrito} />} />
          <Route path="/carrito" element={<Carrito carrito={carrito} />} />
          { /* Admin */ }
          <Route path="/admin" element={ <LoginAdmin /> } />
          <Route path="/home" element={ <HomeAdmin /> } />
          <Route path="/nuevosProductos" element={ <NuevosProductos /> } />
          <Route path="/listaProductos" element={ <ListaProductos /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
