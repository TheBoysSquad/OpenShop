import './products.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/header';
import BotonComprar from '../../BotonComprar/botonComprar';
import Carrito from '../Carrito/carrito';

const Productos = () => {
  const [carrito, setCarrito] = useState([]);
  const [carritoActive, setCarritoActive] = useState(false);

  const mostrarCarrito = () => {
    setCarritoActive(!carritoActive);
  };

  const [productos, setProductos] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:9000/products')
      .then(response => {
        setProductos(response.data);
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const agregarProducto = (producto) => {
    setCarrito([...carrito, producto]);
  };

  return (
    <>
      <Header carrito={carrito} mostrarCarrito={mostrarCarrito} />
      <div>
        <div className='cartas'>
          {productos.map((producto, index) => (
            <div className='carta' key={index}>
              <div className='carta_img'>
                <img src={producto.image} alt={producto.nombre} />
              </div>
              <div className='carta_info'>
                <h5 className='carta_titulo'>{producto.nombre}</h5>
                <p className="carta_descrip">{producto.descripcion}</p>
                <p className="carta_tipo">Categoria: {producto.tipo}</p>
                <p className="carta_precio">$ {producto.precio}</p>
                <BotonComprar texto="Comprar" onClick={() => agregarProducto(producto)} />
              </div>
            </div>
          ))}
        </div>
      </div>
      {carritoActive && <Carrito carrito={carrito} setCarrito={setCarrito}/>}
    </>
  );
};

export default Productos;
