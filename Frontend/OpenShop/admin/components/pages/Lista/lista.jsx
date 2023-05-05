import './lista.css';
/* Components */
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
/* Pages */
import Header from '../Header/header';

const ListaProductos = ({ productos }) =>{
    ListaProductos.propTypes = {
        productos: PropTypes.array.isRequired
    }

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
                {/* Arreglar error con el map */}
                { productos.map((producto,index)  => (
                    <tr key={index}>
                        <th>{producto.id}</th>
                        <th>{producto.nombre}</th>
                        <th>{producto.descripcion}</th>
                        <th>{producto.precio}</th>
                        <th>{producto.stock}</th>
                        <th>{producto.tipo}</th>
                        <th>
                            <img src={producto.imagen} alt={producto.nombre}/>
                        </th>
                    </tr>
                ))}
            </tbody>
    </Table>
        </>
    )
}

export default ListaProductos;
