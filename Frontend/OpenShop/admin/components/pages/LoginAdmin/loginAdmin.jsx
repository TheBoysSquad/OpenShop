import './loginAdmin.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

/* Component */
import HomeAdmin from '../Home/home';
import { Nav } from 'react-bootstrap';

function LoginAdmin() {

  const [login, setLogin] = useState(false);
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const Iniciar = (e) =>{
    e.preventDefault();
    const txtuser = document.getElementById('txtuser').value;
    const txtpass = document.getElementById('txtpass').value;

    if (txtuser == 0 || txtpass == 0){
      alert("completa los campos")
      document.getElementById('txtuser').focus();
    } else{
        if(user == "admin" && pass == "123"){
          setLogin(true);
        } else{
          setLogin(false);
          alert("Campos incorrectos");
          document.getElementById('txtuser').value = "";
          document.getElementById('txtpass').value = "";
          document.getElementById('txtuser').focus();
        }
    }
  }
  if(login){
    return <HomeAdmin />;
  }

  return ( <div className="login">
    <Form id="form" className="login_form">
      <h1 className="login_titulo">Iniciar Sesión</h1>
      <Form.Group className="mb-3" controlId="txtuser">
        <Form.Label>Usuario</Form.Label>
        <Form.Control type="text" onChange={ (e) => setUser(e.target.value) } placeholder="Usuario"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="txtpass">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" onChange={ (e) => setPass(e.target.value) } placeholder="Contraseña" />
      </Form.Group>

      <Nav.Link href="/home" element={<HomeAdmin />}><Button className='button' variant="primary" type="submit" onClick={Iniciar}>Ingresar</Button></Nav.Link>
    </Form>
    </div>
  );
}

export default LoginAdmin;