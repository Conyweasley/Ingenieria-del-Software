import CachedIcon from '@mui/icons-material/Cached';
import Mazo from '../mazo/mazo';

function Tablero(props){
  const  estiloTablero ={
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#455D1B',
    width: '550px',
    height: '250px',
    borderRadius: '300px',
  }
  const escala = 'scaleX('+props?.sentido+')'
  const estiloFlecha ={
      transform: escala,            // para cambiar sentido de la flecha
      fontSize: '68px',
      color: 'black',
      marginLeft: "170px",
  }

  return(
    <div style={estiloTablero} data-testid="Tablero">
      <CachedIcon sx={estiloFlecha} alt="Flecha" ></CachedIcon>
      <Mazo
        habilitadoR={props.habilitadoR}
        desabilitarR={props.desabilitarR}></Mazo>
    </div>
  )
}

export default Tablero