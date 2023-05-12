import './sectionProducts.css';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
/* Componentes */
import Boton from '../Boton/boton';

const SectionProducts = ({carrito = [], setCarrito}) => {
  SectionProducts.propTypes = {
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

    return (<>
        <div className='productos'>
            <h2 className='productos_titulo'>Nuevos productos</h2>
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

export default SectionProducts;
