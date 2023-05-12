import './header.css';
/* Componets */
import { Link } from 'react-router-dom';

const Header  = () =>{
    return(
    <><div className="header">
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
                        <Link to='/contactos' className='menu_link'>Contactos</Link>
                    </li>
                </ul>
            </nav>
            <div className="iconos">
                <Link to='/carrito' className='icono_link'>
                    <box-icon name='cart-alt' type='solid' color='#ffffff'></box-icon>
                </Link>
                <Link to='/registrar' className='icono_link'>
                    <box-icon name='user' type='solid' color='#ffffff' ></box-icon>
                </Link>
            </div>
        </div>
    </>
    )
}

export default Header;