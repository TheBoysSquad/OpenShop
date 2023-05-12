import './boton.css';
import PropTypes from 'prop-types';

const Boton = (props) => {
    Boton.propTypes = {
    texto: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };
    return(
        <button className="boton" onClick={props.onClick}>{props.texto}</button>
    )
}

export default Boton;
