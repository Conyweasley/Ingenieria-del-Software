import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Login from './views/login/login';
import CrearPartida from './views/CrearPartida/crearPartida';
import Lobby from './views/Lobby/lobby';
import MenuPrincipal from './views/menu/menuPrincipal';
import Partida from './views/partida/partida';

function App() {

  return (
    <>
    <Router>
      <Routes> 
        <Route path="/inicio-sesion" element={<Login />} />
        <Route path="/partida" element={<Partida /> }/>
        <Route path="/partida/crear" element={<CrearPartida /> }/>
        <Route path='/partida/lobby' element={<Lobby />}/>
        <Route path='/menu' element={<MenuPrincipal />}/>
        <Route path="*" element={<Navigate to="/inicio-sesion" replace />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
