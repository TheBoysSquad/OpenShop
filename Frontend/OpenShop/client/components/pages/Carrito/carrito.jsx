import "./carrito.css";
import PropTypes from "prop-types";

const Carrito = ({ carrito, setCarrito }) => {
  return (
    <>
      <div className="carrito">
        <ul>
          {carrito.length === 0 ? (
            <p className="carrito_text">No hay productos en el carrito.</p>
          ) : (
            carrito.map((producto, index) => (
              <li key={index}>
                <div className="carrito_item">
                  <div className="carrito_info">
                    <img
                      src={producto.product_image?.url}
                      alt={producto.product_name}
                      className="carrito_imagen"
                    />
                    <h3>{producto.nombre}</h3>
                    <p>{producto.product_desc}</p>
                    <p>categoria: {producto.product_type}</p>
                    <p>$ {producto.product_price}</p>
                    <div className="carrito_cantidad">
                      <button>
                        <span className="carrito_iconos">
                          <box-icon name="minus"></box-icon>
                        </span>
                      </button>
                      <span>{producto.cantidad}</span>
                      <button>
                        <span className="carrito_iconos">
                          <box-icon name="plus"></box-icon>
                        </span>
                      </button>
                    </div>
                    <button className="carrito_eliminar">
                      <span className="carrito_iconos">
                        <box-icon name="trash"></box-icon>
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
