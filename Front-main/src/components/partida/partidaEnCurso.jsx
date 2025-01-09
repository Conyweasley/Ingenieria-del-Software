import JugadorPrincipal from "./jugador/jugadorPrincipal";
import Jugadores from "./jugador/jugadores";
import { useState } from 'react'
import cache from '../../services/cache/cache.service'
import seleccionJugador from '../../utils/seleccionJugador'
import parserJugadores from '../../utils/parserJugadores';
import JugadorMuerto from "./jugador/jugadorMuerto";


function PartidaEnCurso(props) {

  const [jugadorSeleccionado, setJugadorSeleccionado] = useState(null);
  
  const estiloPartida={
    display: 'flex',
    alignItems: 'colum',
    justifyContent: 'center',
    flexDirection: 'column', 
  }

  const estiloMuerto={
    width: '200px', // Ancho deseado
    height: '200px', // Alto deseado
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center',
    flexDirection: 'column', 
    minHeight: '100vh', 
    minWidth: '100vw', 
  }

  const listaJugadores = props?.estadoPartida.jugadores
  const parser = parserJugadores(listaJugadores)
  const jugadores = parser.listaJugadores
  const vecinos = parser.listaVecinos

  const handleJugadorClick = (id) => {

    const idCard = cache.get("idCartaSeleccionada")
    let idVecinos = []

    if(listaJugadores.length>2){
      idVecinos = [vecinos[0].id,vecinos[1].id]
    }
    else{
      idVecinos = [jugadores[0].id]
    }
    
    if(seleccionJugador(id,idVecinos,idCard)){
      setJugadorSeleccionado(id);
      cache.set('idJugadorObjetivo',id)
    }
  };

  const deseleccionarJugador = () => {
    setJugadorSeleccionado(null)
    cache.remove('idJugadorObjetivo')
  };


  return (
    <div>  
    {props?.estadoJugador.muerto ?
    <div style={estiloMuerto}>
      <JugadorMuerto></JugadorMuerto>
    </div>
    :<div style={estiloPartida}>
        <Jugadores
          sentido={props.estadoPartida.sentido}
          jugadores={jugadores}
          vecinos={vecinos}
          jugadorSeleccionado = {jugadorSeleccionado}
          handleJugadorClick={handleJugadorClick}
          habilitadoR={props.habilitadoR}
          desabilitarR={props.desabilitarR}
        />
        <JugadorPrincipal
          deseleccionarJugador={deseleccionarJugador}
          estadoJugador={props.estadoJugador}
          habilitadoI={props.habilitadoI}
          habilitadoJD={props.habilitadoJD}
          desabilitarI={props.desabilitarI}
          desabilitarJD={props.desabilitarJD}
        />
        {/* <Chat> */}
      </div>}
    </div>
  );
}

export default PartidaEnCurso;
