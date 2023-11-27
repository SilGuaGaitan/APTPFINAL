import React from 'react';
import '../style/Tarea.css';

function Tarea ({id, texto, completada, completarTarea, eliminarTarea}) {
    return (
    <>
        <div className={completada ? 'contenedor completada' : 'contenedor'}>
            <div className= 'texto' onClick={()=> completarTarea(id)} >
                {texto}
            </div>
           
        </div> 
        <button className='botonb'  onClick={()=> {if(completada){eliminarTarea(id)}}} >Borrar</button>
    </>
    );
}

export default Tarea;