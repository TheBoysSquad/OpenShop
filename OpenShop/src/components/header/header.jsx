import { useState } from 'react';
import { NavLink } from "react-router-dom";
import NuevoProducto from '../nuevoProducto/nuevoProducto';
import Lista from '../lista/lista';

const Header = () => {

  const [regis, setRegis] = useState("");

  const updateList = () => {
    setRegis(localStorage.getItem("regisPro"));
  }

  function Registrar(){
    setRegis("1");
  }

  function Cerrar(){
    document.getElementById('menu').style.display = "none";
    document.getElementById('form').style.display = "block";
    document.getElementById('txtuser').value = "";
    document.getElementById('txtpass').value = "";
    document.getElementById('txtuser').focus();
  }

    return ( <>
     <div id="caja_menu" style={{textAlign:"left"}}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{marginTop:20}}>
          <div className="container-fluid">
            <label className="navbar-brand  h5" href=" ">Sistema de administrador</label>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink to="" className="nav-link  h5  text-center" onClick={Registrar}>Productos</NavLink>
                <NavLink to="" className="nav-link  h5  text-center">Pagina web</NavLink>
                <a className="nav-link  h5  text-center"  style={{color:"blue"}}  href="" onClick={Cerrar} >Cerrar Sesión</a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <>
        <Lista regisPro={regis}/>
      </>

    { regis == "1" && <NuevoProducto updateList={updateList}/> }

  </>
);
}
export default Header;