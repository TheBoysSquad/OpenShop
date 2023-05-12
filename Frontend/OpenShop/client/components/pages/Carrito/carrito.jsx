import './carrito.css';
import PropTypes from 'prop-types';
/* Pagues */
import Header from '../Header/header';

const Carrito = ({carrito}) =>{
    return( <> <Header />
         <div>
            <h2>Carrito de compras</h2>
            <ul>
                {carrito.map((producto, index) => (
                <li key={index}>
                    <h3>{producto.nombre}</h3>
                    <img src={producto.imagen} alt={producto.nombre} />
                    <p>{producto.descripcion}</p>
                    <p>$ {producto.precio}</p>
                </li>
                ))}
            </ul>
        </div>
    </>
    )
}

Carrito.propTypes = {
    carrito: PropTypes.array.isRequired,
};

Carrito.defaultProps = {
    carrito: [],
};

export default Carrito;