import './header.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Carrito from '../Carrito/carrito';

const Header = ({ carrito, setCarrito }) => {
    const [carritoActive, setCarritoActive] = useState(false);
    const mostrarCarrito = () => {
        setCarritoActive(!carritoActive)
    }
  return (
    <>
      <div className="header">
        <h1 className='header_titulo'>OpenShop</h1>
        <nav className='menu'>
          <ul className='menu_lista'>
            <li className='menu_item'>
              <Link to='/' className='menu_link'>Inicio</Link>
            </li>
            <li className='menu_item'>
              <Link to='/productos' className='menu_link'>Productos</Link>
            </li>
            <li className='menu_item'>
              <Link to='/contacto' className='menu_link'>Contacto</Link>
            </li>
          </ul>
        </nav>
        <div className="iconos">
          <Link className="carrito-button" onClick={mostrarCarrito}>
            <box-icon name='cart-alt' type='solid' color='#ffffff'></box-icon>
          </Link>
          <Link to='/login' className='icono_link'>
            <box-icon name='user' type='solid' color='#ffffff' ></box-icon>
          </Link>
        </div>
      </div>
      {carritoActive && <Carrito carrito={carrito} setCarrito={setCarrito} />}
    </>
  );
};
Header.propTypes = {
  carrito: PropTypes.array.isRequired,
  setCarrito: PropTypes.func.isRequired,
};

export default Header;
