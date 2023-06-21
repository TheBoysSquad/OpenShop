import "./products.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header/header";
import BotonComprar from "../../BotonComprar/botonComprar";
import Carrito from "../Carrito/carrito";
import Footer from "../Footer/footer";

const Productos = () => {
  const [carrito, setCarrito] = useState([]);
  const [carritoActive, setCarritoActive] = useState(false);

  const mostrarCarrito = () => {
    setCarritoActive(!carritoActive);
  };

  const [productos, setProductos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9000/products")
      .then((response) => {
        setProductos(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const agregarProducto = (producto) => {
    setCarrito([...carrito, producto]);
  };

  return (
    <>
      <Header carrito={carrito} setCarrito={setCarrito} mostrarCarrito={mostrarCarrito} />
      <div>
        <div className="cartas">
          {productos.map((producto, index) => (
            <div className="carta" key={index}>
              <div className="carta_img">
                <img
                  src={producto.product_image?.url}
                  alt={producto.product_image}
                />
              </div>
              <div className="carta_info">
                <h5 className="carta_titulo">{producto.product_name}</h5>
                <p className="carta_descrip">{producto.product_desc}</p>
                <p className="carta_tipo">Categoria: {producto.product_type}</p>
                <p className="carta_precio">$ {producto.product_price}</p>
                <BotonComprar
                  texto="Comprar"
                  onClick={() => agregarProducto(producto)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {carritoActive && <Carrito carrito={carrito} setCarrito={setCarrito} />}

      <Footer />
    </>
  );
};

export default Productos;
