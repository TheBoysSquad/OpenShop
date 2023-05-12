/* Hook */
import { useState, useEffect } from 'react';
/* Components */
/* Pages */
import ListaProductos from '../Lista/lista';

// Pages


const HomeAdmin = () => {

    const [productos, setProductos] = useState([]);
    useEffect(() => {
        fetch('http://localhost:9000/api/productos')
          .then(res => res.json())
          .then(data => setProductos(data))
          .catch(err => console.log(err))
    }, [])

    return ( <div>
        <ListaProductos productos={productos}/>
        </div>
    )
}


export default HomeAdmin;