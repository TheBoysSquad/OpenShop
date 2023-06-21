import Footer from '../Footer/footer';
import Header from '../Header/header';
import './contacto.css';
import { useState } from 'react';

const Contacto = () => {
    const [carrito, setCarrito] = useState([]);
    return (
        <>
            <Header carrito={carrito} setCarrito={setCarrito}/>
            <section className="contact-section">
                <div className="contact-container">
                    <h2 className="section-title">Contáctenos</h2>
                    <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" id="name" className='nombre' name="name" placeholder="Ingresa tu nombre" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className='email' name="email" placeholder="Ingresa tu email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Mensaje</label>
                        <textarea id="message" className='mensaje' name="message" placeholder="Escribe tu mensaje" required></textarea>
                    </div>
                    <button type="submit" className="submit-button">Enviar</button>
                    </form>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Contacto;