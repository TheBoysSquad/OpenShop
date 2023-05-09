import './lista.css';
import { useState, useEffect } from 'react';
/* Components */

import Table from 'react-bootstrap/Table';
/* Pages */
import Header from '../Header/header';

const ListaProductos = () =>{
    const [regisPro, setRegisPro] = useState([]);
    useEffect(() => {
        fetch('http://localhost:9000/api/users')
          .then(res => res.json())
          .then(data => setRegisPro(data))
          .catch(err => console.log(err))
    }, [])

    return(<>
        <Header />
        <h1>Lista de productos</h1>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Stock</th>
                    <th>Tipo</th>
                    <th>Imagen</th>
                </tr>
            </thead>
            <tbody>

                { regisPro.map((producto,index)  => (
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{producto.nombre}</td>
                        <td>{producto.descripcion}</td>
                        <td>{producto.precio}</td>
                        <td>{producto.stock}</td>
                        <td>{producto.tipo}</td>
                        <td>
                            <img src={producto.imagen} alt={producto.nombre}/>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </>
    )
}

export default ListaProductos;
