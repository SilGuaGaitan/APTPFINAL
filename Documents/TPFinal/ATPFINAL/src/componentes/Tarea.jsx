import React from 'react';
import '../style/Tarea.css';
import { VscError } from "react-icons/vsc";
import { FaRegCheckCircle } from "react-icons/fa";

function Tarea ({id, texto, completada, completarTarea, eliminarTarea}) {
    return (
    <>
        <div className={completada ? 'contenedor completada' : 'contenedor'}>
            
            <FaRegCheckCircle  className='icono' onClick={()=> completarTarea(id)}   />
            <div className= 'texto'>
                {texto}
            </div>
            <div className='icono'
                onClick={()=> {if(completada){eliminarTarea(id)}}}>
                <VscError className='icono'/>
            </div>
        </div>
    </>
    );
}
export default Tarea;