import React, {useState} from "react";
import '../style/Formulario.css';
import { v4 as uuidv4 } from 'uuid';

function Formulario(props) {

    const [input, setInput] = useState('');

    const manejarCambio = e =>{
       setInput(e.target.value);
    };
    const manejarEnvio = e =>{
        e.preventDefault();
        const tareaNueva = {
            id: uuidv4(),
            texto : input,
            completada : false
        };
        props.onSubmit(tareaNueva);
        setInput('');
    };
    return (
        <form className='formulario'
                onSubmit={manejarEnvio}>
          <input
           className='input'
           type='text'
           placeholder='Ingrese una tarea'
           name='texto'
           onChange = {manejarCambio}
          />
          <button className='boton'>Agregar Tarea</button>
        </form>
    );
}
export default Formulario;