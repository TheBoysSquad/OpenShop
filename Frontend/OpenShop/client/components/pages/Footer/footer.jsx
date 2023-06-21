import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () =>{
    return(
            <section className="footer">
                <div className='footer_container'>
                    <div className='footer_menu'>
                        <h5 className='footer_titulo'>Menu</h5>
                        <ul>
                            <li>
                                <Link to="/" className='footer_link'>Inicio</Link>
                            </li>
                            <li>
                                <Link to="/productos" className='footer_link'>Productos</Link>
                            </li>
                            <li>
                                <Link to="/contacto" className='footer_link'>Contacto</Link>
                            </li>
                        </ul>
                    </div>

                    <div className='footer_menu'>
                        <h5 className='footer_titulo'>Información</h5>
                        <ul>
                            <li>
                                <Link className='footer_link'>Sobre nosotros</Link>
                            </li>
                            <li>
                                <Link className='footer_link'>Terminos & Condiciones</Link>
                            </li>
                        </ul>
                    </div>

                    <div className='footer_redes'>
                        <h5 className='footer_titulo'>Redes sociales</h5>
                        <ul>
                            <li>
                                <box-icon name='facebook' type='logo' color='#949494' ></box-icon>
                            </li>
                            <li>
                                <box-icon name='instagram' type='logo' color='#949494' ></box-icon>
                            </li>
                            <li>
                                <box-icon name='twitter' type='logo' color='#949494' ></box-icon>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
    )
}

export default Footer;
