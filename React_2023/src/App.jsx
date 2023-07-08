
import './App.css'
import PrimerComponente from './components/1-FirsComponent'
import Button from './components/ResponderAEventos'

function App() {

  return (
    <>
    <h2>Day 1 Describir la UI</h2>
    <div className='pokemons-container'>
    <PrimerComponente className="box" image="https://i.pinimg.com/564x/67/35/cd/6735cdab8379c38ac7cb7bf4c49ba9cd.jpg"/>
    <PrimerComponente image="https://i.pinimg.com/564x/88/94/52/8894528940b3d7eb88a241e3c34f4e25.jpg"/>
    
    </div>
    <Button/>
    </>
  )
}

export default App
