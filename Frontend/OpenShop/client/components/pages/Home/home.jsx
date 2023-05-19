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
    const cards = [
        {
          titulo: "Tecnologia",
          descripcion: "Celulares, Tablets, PC, etc",
          imagen: "https://blog.tiendasishop.com/wp-content/uploads/2022/07/12.-May-Productos-tecnolo%CC%81gicos-de-calidad-%C2%BFco%CC%81mo-identificarlos-1024x683.jpg"
        },
        {
          titulo: "Hogar",
          descripcion: "Muebles, Cuadros, Decoracion, etc",
          imagen: "https://http2.mlstatic.com/D_NQ_NP_733997-MCO41936384925_052020-O.jpg"
        },
        {
          titulo: "Ropa",
          descripcion: "Camisas, Pantalones, Zapatos, etc",
          imagen: "https://img.freepik.com/fotos-premium/gran-eleccion-chico-joven-tienda-moderna-ropa-nueva-ropa-elegante-cara-hombres_146671-48502.jpg"
        },
      ]
    return <>
    <div className='hero'>
        <Header carrito={carrito} setCarrito={setCarrito}/>
        <div className="linea"></div>
        <div className="hero_img">
            <img src={img} alt='hero'/>
        </div>
    </div>
    <SectionProducts cards={cards} />
    <Footer />
    </>
}

export default Home;