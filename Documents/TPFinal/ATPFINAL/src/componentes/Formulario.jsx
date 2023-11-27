import React, {useState} from "react";
import '../style/Formulario.css';


function Formulario(props) {

    const [input, setInput] = useState('');
    const [proximoID, setProximoID] =useState(0);
    const manejarCambio = e =>{
       setInput(e.target.value);
    };
    const manejarEnvio = e =>{
        e.preventDefault();
        const tareaNueva = {
            id: proximoID,
            texto : input,
            completada : false
        };
        props.onSubmit(tareaNueva);
        e.target.reset();
        setProximoID(proximoID +1);
    };
    return (
        <form className='formulario'
                onSubmit={manejarEnvio}
                >
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