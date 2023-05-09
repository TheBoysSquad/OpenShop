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
            <box-icon name='cart-alt' type='solid' color='#ffffff'></box-icon>
        </div>
    </>
    )
}

export default Header;
