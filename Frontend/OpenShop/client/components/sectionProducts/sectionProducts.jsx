import './sectionProducts.css';
/* Componentes */
import PropTypes from 'prop-types';

const SectionProducts = ({cards}) => {
  const redirigir = () =>{
    window.location.href = '/productos';
  }
    return (<>
        <section>
          <div className='categorias' onClick={redirigir}>
            {cards.map((card, index) => (
              <div key={index} className='categoria' style={{ backgroundImage: `URL(${card.imagen})` }}>
                <div className='categoria_info'>
                  <h3 className='categoria_titulo'>{card.titulo}</h3>
                  <p className='categoria_descrip'>{card.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
    </>
    )
}
SectionProducts.propTypes = {
  cards: PropTypes.array.isRequired,
};

SectionProducts.defaultProps = {
  cards: [],
}

export default SectionProducts;
