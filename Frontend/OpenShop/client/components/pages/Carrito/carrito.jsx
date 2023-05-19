import './carrito.css';
import PropTypes from 'prop-types';

const Carrito = ({ carrito, setCarrito }) => {
    
  return (
    <>
      <div className='carrito'>
        <ul>
          {carrito.length === 0 ? (
            <p>No hay productos en el carrito.</p>
          ) : (
            carrito.map((producto, index) => (
              <li key={index}>
                <div className='carrito_item'>
                    <div className="carrito_info">
                        <img src={producto.imagen} alt={producto.nombre} className='carrito_imagen'/>
                        <h3>{producto.nombre}</h3>
                        <p>{producto.descripcion}</p>
                        <p>categoria: {producto.tipo}</p>
                        <p>$ {producto.precio}</p>
                        <div className="carrito_cantidad">
                            <button>
                              <span className='carrito_iconos'>
                                <box-icon name='minus'></box-icon>
                              </span>
                            </button>
                            <span>{producto.cantidad}</span>
                            <button>
                              <span className='carrito_iconos'>
                                <box-icon name='plus'></box-icon>
                              </span>
                            </button>
                        </div>
                        <button className="carrito_eliminar">
                          <span className='carrito_iconos'>
                            <box-icon name='trash'></box-icon>
                          </span>
                        </button>
                    </div>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );
};

Carrito.propTypes = {
  carrito: PropTypes.array.isRequired,
  setCarrito: PropTypes.func.isRequired,
};

Carrito.defaultProps = {
  carrito: [],
};

export default Carrito;
