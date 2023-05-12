import './home.css';
import { useState } from 'react';
/* Pages */
import Header from '../Header/header';
import Footer from '../Footer/footer';
/* Components */
import SectionProducts from '../../sectionProducts/sectionProducts';
/* Imagenes */
import img from '../../../assets/img/hero.png';

const Home = () => {
    const [carrito, setCarrito] = useState([]);
    return <>
    <div className='hero'>
        <Header carrito={carrito}/>
        <div className="linea"></div>
        <div className="hero_img">
            <img src={img} alt='hero'/>
        </div>
    </div>
    <SectionProducts carrito={carrito} setCarrito={setCarrito} />
    <Footer />
    </>
}

export default Home;