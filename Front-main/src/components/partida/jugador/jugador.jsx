import { Box, Paper } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

function Jugador({jugador,nombreJ,data,onClick,seleccionado}){

  const nombreJugador = nombreJ;
  const idJugador = jugador?.id
  
  const estiloFondo = {
    backgroundColor: seleccionado ? '#C6E427':'#343434',
    pandding : "2px",
    borderRadius: '20px',
    marginRight: "20px",
    marginLeft: "20px",
  }
  const estiloFondoJugador = {
    backgroundColor: '#919191',
    borderRadius: '40px',
    margin : "10px"
  }
  const estiloJugador = {
    width: '70px',
    height: '50px',
    color: 'white',
  }
  const estiloNombre = {
    fontSize: '15px'
  }

  const handleClick = () => {
    onClick(data.id);
  };

  return(
    <div style={estiloFondo}>
      <Box sx ={estiloFondoJugador} onClick={handleClick}>
        <PersonIcon sx={estiloJugador}></PersonIcon>
        <Paper sx ={estiloNombre}>{nombreJugador}</Paper>
      </Box>
    </div>
  )
}

export default Jugador