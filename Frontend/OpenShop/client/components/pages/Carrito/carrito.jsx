import './carrito.css';
import PropTypes from 'prop-types';

const Carrito = ({ carrito, setCarrito }) => {
    const eliminar = (producto) =>{
        const productos = carrito.filter((item) => item.id !== producto.id);
        setCarrito(productos);
    }

    const aumentar = (producto) =>{
        const productos = carrito.map((item) => {
            if(item.id === producto.id){
                return{...item, cantidad: item.cantidad+1};
            }
            return item;
        })
        setCarrito(productos);
    }

    const disminuir = (producto) => {
        const productos = carrito.map((item) => {
            if(item.id === producto.id){
                return{...item, cantidad: item.cantidad>1 ? item.cantidad - 1 : 1};
            }
            return item;
        })
        setCarrito(productos);
    }
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
                            <button onClick={() => disminuir(producto)}>-</button>
                            <span>{producto.cantidad}</span>
                            <button onClick={() => aumentar(producto)}>+</button>
                        </div>
                        <button onClick={() => eliminar(producto)} className="carrito_eliminar">Eliminar</button>
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
