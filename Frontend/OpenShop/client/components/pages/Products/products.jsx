import './products.css';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/header';
import Boton from '../../Boton/boton';

const Productos = ({carrito = [], setCarrito}) =>{
    Productos.propTypes = {
        carrito: PropTypes.array.isRequired,
        setCarrito: PropTypes.func.isRequired,
    }
    const [productos, setProductos] = useState([]);
  useEffect(() => {
      fetch('http://localhost:9000/api/productos')
        .then(res => res.json())
        .then(data => setProductos(data))
        .catch(err => console.log(err))
  }, [])

  const agregarProducto = (producto) =>{
    setCarrito([...carrito, producto]);
  }
  console.log(carrito)
    return(<> <Header />
        <div>
        <div className='cartas'>
                {productos.map((producto, index) => (
                    <div className='carta' key={index}>
                    <div className='carta_img'>
                      <img src={producto.imagen} alt={producto.nombre}/>
                    </div>
                    <div className='carta_info'>
                      <h5 className='carta_titulo'>{producto.nombre}</h5>
                      <p className="carta_descrip">{producto.descripcion}</p>
                      <p className="carta_tipo">Categoria: {producto.tipo}</p>
                      <p className="carta_precio">${producto.precio}</p>
                      <Boton texto="Comprar" onClick={() => agregarProducto(producto)} />
                    </div>
                  </div>
                ))}
            </div>
        </div>
    </>
    )
}

export default Productos;
