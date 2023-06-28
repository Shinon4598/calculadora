import './App.css';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';
function App() { 
//--------verifica si ya hay un operador presente en la cadena de entrada-------//
//Declaramos una variable de estado lastOperator utilizando el hook useState. Esta variable se utiliza para almacenar el último operador ingresado por el usuario.
//La función handleOperatorClick se ejecuta cuando el usuario hace clic en un botón de operador en la calculadora.
  const handleOperatorClick = operator => {
//Comprobamos si el ultimo elemento es un numero
      if (!isNaN(input.slice(-1))) {
        //si lo es lo concatenamos
        setInput(input + operator);
      } else {
        //si no lo es, eliminamos el ultimo elemento y sumamos el nuevo operador
        const newValue = input.slice(0, -1) + operator;  
        setInput(newValue);
      }
  }
  ///////////////////Mostrar por pántalla los N//////////////////////////////
  const [input, setInput] = useState('');
  const agregarInput = val => {
    setInput(input + val);
  };
  /////////////////Calcular resultado con la libreria MathJS/////////////////
  const calcularResultado = () => {
  //Verificamos que haya algun valor en pantalla y que el ultimo y primer valor sea un número 
      if (input && !isNaN(input.slice(-1)) && !isNaN(input.slice(0, 1))){
        setInput(evaluate(input));
      } else{
        alert('Porfavor ingrese valores para realizar el calculo')
      }
    };
  return (
    <div className="App">
      <div className='contenedor-calculadora-centrar'>
        <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={handleOperatorClick}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={handleOperatorClick}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={handleOperatorClick}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={handleOperatorClick}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}/>
        </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
