
import './App.css';
import Miperfil from './oswaldo.js';


const Description = () => {
  return <p>Este es mi primer bootcamp de javascript</p>
}

const Redaccion = () => {
  return <p>Yo soy <mark>Oswaldo Flores</mark> desarrollador web enfocado y estudioso en la parte de backend.
  Este es un componente importado desde el fichero: oswaldo.js </p>
}


const App = () => {
  const mensaje = 'Proyecto Fullstack Javscript creado por Oswal.productions.'
  return (
    <div className="App">
      <h1>Hola mundo</h1> 
      {mensaje} 
      <Description />
      <Redaccion />
      <Miperfil message= 'Estamos trabajando en un bootcamp react'/>
      <Miperfil color='green' message= 'Estamos trabajando en un bootcamp react'/>
  
    
      
    </div>
  );
}

export default App;
