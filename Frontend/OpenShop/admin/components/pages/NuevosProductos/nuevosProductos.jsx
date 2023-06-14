import './nuevosProductos.css';
/* Hook */
import { useState } from 'react';
/* Componets */
import { Form, Button } from 'react-bootstrap';
/* Pages */
import Header from '../Header/header';

const NuevosProductos = () =>{

    const [regisPro, setRegisPro] = useState([]);

    const [nombre, setNombre] = useState("");
    const [descrip, setDescrip] = useState("");
    const [precio, setPrecio] = useState("");
    const [stock, setStock] = useState("");
    const [tipo, setTipo] = useState("");
    const [img, setImg] = useState(null);

    const Registrar = async  (e) => {
            e.preventDefault();
            const nuevoProducto = {nombre, descrip, precio, stock, tipo, img};
            if (!regisPro.length === 0) {
              setRegisPro([nuevoProducto]);
            } else {
              setRegisPro([...regisPro, nuevoProducto]);
            }
            limpiarCampos();
        }

        // Importar funciones en arhcivos JS
        function limpiarCampos(){
            setImg("");
            setNombre("");
            setTipo("");
            setStock("");
            setPrecio("");
            document.getElementById('formulario').reset();
        }

    return (
    <>
      <Header />
      <div className="login">
          <Form method="POST" id="formulario" className="login_form">
          <h1 className="login_titulo" >Registrar Productos</h1>
            <Form.Group controlId="formProductName">
              <Form.Control type="text" placeholder="Ingresa el nombre del producto" onChange={ (e) => setNombre(e.target.value) }/>
            </Form.Group>

            <Form.Group controlId="formProductDescription">
              <Form.Control as="textarea" rows={3} placeholder="Ingresa la descripción del producto" onChange={ (e) => setDescrip(e.target.value) }/>
            </Form.Group>

            <Form.Group controlId="formProductPrice">
              <Form.Control type="number" min="1" max="100000000" placeholder="Ingresa el precio del producto" onChange={ (e) => setPrecio(e.target.value) }/>
            </Form.Group>

            <Form.Group controlId="formProductStock">
              <Form.Control type="number" min="1" max="100000000" placeholder="Stock" onChange={ (e) => setStock(e.target.value) }/>
            </Form.Group>

            <Form.Select aria-label="Default select example" onChange={ (e) => setTipo(e.target.value) }>
                <option>Tipo de producto</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>


            <Form.Group controlId="formProductImage" onChange={ (e) => setImg(e.target.files[0]) }>
              <Form.Control type="file"/>
            </Form.Group>

            <Button variant="primary" type="submit" onClick={Registrar}>
              Registrar producto
            </Button>
          </Form>
      </div>
    </>
    )
}

export default NuevosProductos;
