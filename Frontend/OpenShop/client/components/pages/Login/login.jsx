import Header from '../Header/header';
import './login.css';

const Login = () =>{
    return( <> <Header />
        <div className='contenedor'>
            <div className="trazo"></div>
        </div>
        <div className="form">
            <div className='form_container'>
                <h1 className="form_titulo">Bienvenido a OpenShop</h1>
                <span className='form_subtitulo' >Is a app all in one</span>
                <form className="form_login">
                    <div className='form_inputs'>
                        <span className="form_iconos">
                            <box-icon name='user' type='solid'></box-icon>
                        </span>
                        <input type="text" id="nombre" name="nombre" required placeholder='Nombre'/>
                    </div>
                    <div className='form_inputs'>
                        <span className="form_iconos">
                            <box-icon type='solid' name='key'></box-icon>
                        </span>
                        <input type="password" id="contrasena" name="contrasena" required placeholder='Contraseña'/>
                    </div>
                    <input type="submit" value="Iniciar Sesión" className="boton_login" />
                    <div className='form_inputs'>
                        <input type="button" value="Registrarse" className='boton_regis'/>
                    </div>
                </form>
            </div>
        </div>
    </>
    )
}

export default Login;