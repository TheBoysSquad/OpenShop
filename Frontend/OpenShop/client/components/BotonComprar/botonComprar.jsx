import './botonComprar.css';
import PropTypes from 'prop-types';

const BotonComprar = (props) => {
    BotonComprar.propTypes = {
    texto: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };
    return(
        <button className="boton" onClick={props.onClick}>{props.texto}</button>
    )
}

export default BotonComprar;
