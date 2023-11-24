import React, { useState } from 'react';

const TaskList = () => {
 const [tasks, setTasks] = useState([]);
 const [input, setInput] = useState('');

 const handleInputChange = (e) => {
    setInput(e.target.value);
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, { task: input, completed: false }]);
    setInput('');
 };

 const handleCheck = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
 };

 const handleDelete = (index) => {
    const filteredTasks = tasks.filter((task, i) => i !== index);
    setTasks(filteredTasks);
 };

 return (
    <div className="App">
      <h1>Listado de Tareas</h1>
      <hr></hr>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Ingrese Tarea"
        />
        <button type="submit">Agregar Tarea</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleCheck(index)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.task}</span>
            <button onClick={() => handleDelete(index)}>Borrar</button>
          </li>
        ))}
      </ul>
    </div>
 );
};

export default TaskList;

/*import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={freeCodeCampLogo} 
          className='freecodecamp-logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;*/