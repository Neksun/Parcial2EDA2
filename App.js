import './App.css';
import Boton from './components/Boton';
import Pantalla from './components/Pantalla';
import BotonClear from './components/Clear';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import PropTypes from 'prop-types';

function App({tituloCalculadora}) {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("no olvides ingresar valores");
    }
  };

  return (
    <div className='App'>
      <div className='calculadoratitle'>
        <h1> {tituloCalculadora} </h1>
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            Limpiar
          </BotonClear>
        </div>
      </div>
    </div>
  );
}
App.propTypes = {
  tituloCalculadora: PropTypes.string.isRequired,
};

App.defaultProps = {
  tituloCalculadora: 'Calculadora con React'
};

export default App;
