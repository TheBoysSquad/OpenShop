import './home.css';
/* Pages */
import Header from '../Header/header';
import img from '../../../assets/img/hero.png';

const Home = () => {
    return <> <Header />
    <div className="linea"></div>
    <div>
        <img src={img} alt='hero' className='hero'/>
    </div>
    </>
}

export default Home;