import LaCosaLogo from '../../assets/laCosa.svg'
import FormularioPartida from '../../components/forms/crearPartida/crearPartida';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';

function CrearPartida() {

	const estiloPantalla = {
		background: 'linear-gradient(to right, #000007, #737373)',
    // backgroundImage: `url(../../../src/assets/fondoPantalla.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', 
    minHeight: '100vh', 
    minWidth: '100vw',
    display: 'flex',
    justifyContent: 'center',
	}

	const estiloImagen = {
    display: 'flex',
    justifyContent: 'flex-end',

  }

  const estiloTitulo = {
    // maxHeight: '200px',
  }

  const estiloFormulario = {
    position: 'absolute',
    bottom: '170px'
  }

  const topBar = {
    maxHeight: '200px',
  }

  const nav = useNavigate();

  const handleClick = () => {
    nav('/menu');
  }
	
  return (
    <Grid container style={estiloPantalla}>
      <Grid container direction='row' style={topBar} spacing={2}>
        <Grid item xs={2} style={estiloImagen}>
          <img src={LaCosaLogo} 
            className="logo" 
            alt="La Cosa logo" 
            onClick={handleClick} />
        </Grid>
        <Grid item xs={8} >
          <h1 style={estiloTitulo}>CREAR PARTIDA</h1>
        </Grid>
      </Grid>
      <Grid item xs={8} style={estiloFormulario}>
        <FormularioPartida></FormularioPartida>
      </Grid>
    </Grid>
  );
}

export default CrearPartida;