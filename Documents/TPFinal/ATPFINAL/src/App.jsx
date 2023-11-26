
import './App.css';
import ListadeTareas from './componentes/ListadeTareas';

function App() {
  return (
    <div className= 'tareas'>
      
      <div className='principal'>
         <h1>Tareas a Realizar:</h1>
          <ListadeTareas />

      </div>
      
    </div>
  );
}

export default App;