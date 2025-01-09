import {Box} from '@mui/material';
import Tablero from "../tablero/tablero";
import Jugador from "./jugador";

function Jugadores(props){
	
	const estiloSuperior = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    top: '30px'
  }

  const estiloCentro = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    top: '50px'
  }

  return(
	<div>
		<Box sx={estiloSuperior}>
      {props.jugadores.map((jugador) => (
        <Jugador 
          key={jugador.id}
          data={jugador}
          nombreJ={jugador.nombre}
          seleccionado={props.jugadorSeleccionado === jugador.id}
          onClick={props.handleJugadorClick}/>
      ))}
		</Box>
		<Box sx={estiloCentro}>
			{props.vecinos[0]?(<Jugador 
				jugador={props.vecinos[0].id}
				data={props.vecinos[0]} 
				nombreJ={props.vecinos[0].nombre}
				seleccionado={props.jugadorSeleccionado === props.vecinos[0].id}
				onClick={props.handleJugadorClick}></Jugador>):null}
			<Tablero 
        sentido = {props?.sentido}
        habilitadoR={props.habilitadoR}
        desabilitarR={props.desabilitarR}></Tablero>
			{props.vecinos[1]?(<Jugador 
				jugador={props.vecinos[1].id}
				data={props.vecinos[1]} 
				nombreJ={props.vecinos[1].nombre}
				seleccionado={props.jugadorSeleccionado === props.vecinos[1].id}
				onClick={props.handleJugadorClick}></Jugador>):null}
		</Box>
	</div>
	)
}

export default Jugadores