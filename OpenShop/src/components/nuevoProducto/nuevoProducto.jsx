import { useState, useEffect } from "react";
import '../../assets/css/bootstrap.min.css'

function NuevoProducto() {

    const getRegistros = () =>{
        let datos = localStorage.getItem("regisPro");
        if(datos){
            return JSON.parse(datos);
        } else{
            return [];
        }
    }

    const [regisPro, setRegisPro] = useState(getRegistros);

    const [nombre, setNombre] = useState("");
    const [tipo, setTipo] = useState("");
    const [stock, setStock] = useState("");
    const [precio, setPrecio] = useState("");

    function limpiarCampos(){
        setNombre("");
        setTipo("");
        setStock("");
        setPrecio("");
        document.getElementById('formulario').reset();
    }

    const btnGuardar = (e) =>{
        e.preventDefault();
        let info  = {nombre, tipo, stock, precio};
        setRegisPro([...regisPro, info]);
        limpiarCampos();
    }

    useEffect(() => {
        localStorage.setItem(regisPro, JSON.stringify(regisPro));
    }, [regisPro]);

    return ( <>
        <div className="bg-light" style={{marginTop:20, padding:20}}>

            <div className="h3">
            Registro de productos
            <br/>
            <form id="formulario"  >
                <div className="row" style={{marginTop:20}}>
                <div className="col-6">
                    <input className="form-control form-control text-center" type="text" placeholder="Nombre del producto" onChange={ (e) => setNombre(e.target.value) } required/>
                </div>

                <div className="col-6">
                    <select className="form-select form-select text-center" onChange={ (e) => setTipo(e.target.value) } required>
                    <option value="">Tipo de producto</option>
                    <option value="Hogar">Hogar</option>
                    <option value="Tecnologia">Tecnologia</option>
                    <option value="Estudio y trabajo">Estudio y trabajo</option>
                    <option value="Ropa">Ropa</option>
                    </select>
                </div>
                </div>

                <div className="row" style={{marginTop:20}}>
                <div className="col-6">
                    <input className="form-control form-control text-center" type="number" min="1" max="1000" placeholder="Stock" onChange={ (e) => setStock(e.target.value) } required/>
                </div>
                <div className="col-6">
                    <input className="form-control form-control text-center" type="number" min="1" max="100000000" placeholder="Precio" onChange={ (e) => setPrecio(e.target.value) } required/>
                </div>
                </div>

                <div className="row" style={{marginTop:20}}>
                <div className="col">
                    <button className="btn btn-primary btn" onClick={btnGuardar} >Registrar</button>
                </div>
                </div>
            </form>
            </div>

        </div>

</>
);
}

export default NuevoProducto;