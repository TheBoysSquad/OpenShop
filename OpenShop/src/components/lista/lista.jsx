import { useState, useEffect } from "react";

function Lista(){

  const getRegistros = () => {
    var datos = localStorage.getItem("regisPro");
    if(datos){
        return JSON.parse(datos);
    } else{
        return [];
    }
}

  const [regisPro, setRegisPro] = useState(getRegistros());

  useEffect(() => {
    localStorage.setItem("regisPro", JSON.stringify(regisPro));
  }, [regisPro]);

  useEffect(() => {
    function updateList(){
      const datos = getRegistros();
      setRegisPro(datos);
    }
    window.addEventListener("storage", updateList);

    return () => {
      window.removeEventListener("storage", updateList);
    }
  }, []);


    return (
        <div className="bg-light" style={{marginTop:20, padding:20}}>

        <div className="h3">Lista de productos</div>

        <div className="table-responsive">
          <>
            <table className="table table-bordered table-hover" style={{marginTop:12}}>
                <thead className="text-center" style={{background:"lightgray"}}>
                    <tr>
                        <th>#</th>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Tipo</th>
                        <th>Stock</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody className="text-center align-baseline">
                  {
                    regisPro.map((producto, index) => (
                      <tr key={index}>
                        <th>{index+1}</th>
                        <td>{producto.img}</td>
                        <td>{producto.nombre}</td>
                        <td>{producto.tipo}</td>
                        <td>{producto.stock}</td>
                        <td>{producto.precio}</td>
                      </tr>
                    ))
                  }
                </tbody>
            </table>
          </>
        </div>
      </div>

    )
}

export default Lista;