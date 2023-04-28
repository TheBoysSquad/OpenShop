import { useState } from 'react';
import '../../assets/css/bootstrap.min.css'
import Header from "../header/header";

const Login = () => {

    const [login, setLogin] = useState("false");
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    function Iniciar(e){
        e.preventDefault();
        let txtuser = document.getElementById('txtuser').value;
        let txtpass = document.getElementById('txtpass').value;
        if(txtuser.length == 0 || txtpass.length == 0){
            alert("campos vacios")
        } else{
            if(user == "admin" && pass == "123"){
                setLogin("true");
                document.getElementById('form').style.display="none";
            } else{
                setLogin("false");
                alert("error");
                document.getElementById('txtuser').value="";
                document.getElementById('txtpass').value="";
                document.getElementById('txtuser').focus();
            }
        }
    }

    return (<>
        <form id='form'>
                <div className="container" style={{background:"lightgray", marginTop:20, padding:20}}>
                <form id="form_login">
                    <div>
                        <h1 style={{textAlign: "center"}}>LOGIN</h1>
                        <label htmlFor="txtuser"><strong>Usuario</strong></label>
                        <input type="text" id="txtuser" style={{textAlign:"center"}} className="form-control" onChange={ (e) => setUser(e.target.value) } required/>
                    </div>
                    <div>
                        <label htmlFor="txtpass"><strong>Contraseña</strong></label>
                        <input type="password" id="txtpass" style={{textAlign:"center"}} className="form-control" onChange={ (e) => setPass(e.target.value) } required/>
                    </div><br/>
                    <input type="submit" onClick={Iniciar} className="btn btn-primary" value="Login"/>
                </form>
            </div>
        </form>
        { login == "true" && <Header />}
    </>
     );
}

export default Login;