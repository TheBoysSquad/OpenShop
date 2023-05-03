import './App.css';
/* Router */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/* Pages cliente */
import Home from '../client/components/pages/Home/home';
import Error from '../client/components/pages/404/404';
/* Pages Admin */
import Login from '../admin/components/pages/Login/login';
import HomeAdmin from '../admin/components/pages/Home/home';
import NuevosProductos from '../admin/components/pages/NuevosProductos/nuevosProductos';
import ListaProductos from '../admin/components/pages/Lista/lista';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        { /* Cliente */ }
        <Route path="*" element={ <Error /> } />
        <Route path="/" element={ <Home /> } />
        { /* Admin */ }
        <Route path="/admin" element={ <Login /> } />
        <Route path="/home" element={ <HomeAdmin /> } />
        <Route path="/nuevosProductos" element={ <NuevosProductos /> } />
        <Route path="/listaProductos" element={ <ListaProductos /> } />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
