import { useState } from 'react';
import { Box, Paper } from '@mui/material';
import Mano from '../mano/mano'
import { jugarCartaService, descartarCartaService } from '../../../services/carta.service';
import cache from '../../../services/cache/cache.service'
import {seleccionCartaJugar,seleccionCartaDescartar} from '../../../utils/seleccionCartas'
import mostrarAlertaDeFase from '../../alert/alertaDeFase'

function JugadorPrincipal(props){

  const estiloJugador = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '60px'
  }

  const estiloMano = {
    marginTop: '10px',
  }

  const estiloNombre = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const estiloNombreJugador = {
    width: '100px',
    height : '30px',
    marginTop : '20px',
    marginRight: "200px",
    marginLeft: "300px"
  }

  const estiloButton = {
    marginLeft : '10px',
    marginTop: '20px'
  }

  const estadoJugador = props?.estadoJugador
  const cartas =props?.estadoJugador.mano
  let rolJugador = ""
  let color = ''

  const nombreJugador = cache.get("nombreJugador")

  if(estadoJugador.la_cosa){
    rolJugador = "La Cosa"
    color = "#1aff00";
  }
  else if(estadoJugador.humano){
    rolJugador = "humano"
    color = "#a3a3a3";
  }
  else if(estadoJugador.infectado){
    rolJugador = "infectado"
    color = "#ddea49";
  }

  const estiloRol = {
    color: color,
    marginRight: '20px',
    fontSize: '30px',
  }

  const handleJugarCartaClick = async() => {

    const idCard = cache.get("idCartaSeleccionada")
    const idJugadorObjetivo = cache.get("idJugadorObjetivo")

    if(idCard!=null && idJugadorObjetivo !=null){
      if(seleccionCartaJugar(idCard,false)){
        const response = await jugarCartaService()
        if(response){
          props.desabilitarJD() 
        }
        else{
          console.log("error en el service")
        }
      }
      else{
        mostrarAlertaDeFase("No podes jugar esta carta.")
      }
    }else{
      mostrarAlertaDeFase("No seleccionaste carta o jugador.")
    }
  }

  const handleDescartarCartaClick = async() => {

    const idCard = cache.get("idCartaSeleccionada")
    
    if(idCard!=null){
      if(seleccionCartaDescartar(idCard)){
        const response = await descartarCartaService() 
        if(response){
          props.desabilitarJD() 
        }
        else{
          console.log("error en el service")
        }
      }
      else{
        mostrarAlertaDeFase("No podes descartar esta carta.")
      } 
    }else{
      mostrarAlertaDeFase("No seleccionaste carta para descartar.")
    }
  }

  return(
    <Box sx={estiloJugador}>
      <Box sx={estiloMano}>
        <Mano  cartas={cartas} deseleccionarJugador={props.deseleccionarJugador}></Mano>
        {props.habilitadoJD ? (<button style={estiloButton} onClick={handleDescartarCartaClick}>Descartar</button>):null}
        {props.habilitadoJD ? (<button style={estiloButton} onClick={handleJugarCartaClick}>Jugar</button>):null}
        {props.habilitadoI ? (<button style={estiloButton}>Intercambiar</button>):null}
        <Box sx={estiloNombre}>
          <Paper elevation={0} sx={estiloNombreJugador}>{nombreJugador}</Paper>
          <p style={estiloRol}>Rol: {rolJugador}</p>
        </Box>
      </Box>
    </Box>
  )
}

export default JugadorPrincipal;