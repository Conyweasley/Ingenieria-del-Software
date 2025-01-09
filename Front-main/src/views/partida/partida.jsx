import { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import useWebSocket from 'react-use-websocket';
import PartidaEnCurso from "../../components/partida/partidaEnCurso";
import mostrarAlertaDeFase from "../../components/alert/alertaDeFase";
import mostrarAlertaFin from "../../components/alert/alertFin";
import mostrarAlertaAviso from "../../components/alert/alertAviso";
import mostrarAlertaAvisoConCartas from "../../components/alert/alertaAvisoConCartas";

import cache from '../../services/cache/cache.service';
import { finalizarPartidaService } from "../../services/partida.service";
import { estadoJuegoService,estadoJugadorEnJuegoService } from "../../services/partida/estado.juego.service";

import ws from '../../utils/websocket';
import * as constantes from "../../utils/constantesWs";


function handlerResultados(resultados){
  const mensaje = resultados?.message;
  const ganadores = resultados?.winners.join(' - ');
  const perdedores = resultados?.losers.join(' - ');
  const resultado = 
    `Resultado del juego: ${mensaje}
     Ganadores: ${ganadores}   
     Perdedores: ${perdedores}` 

  mostrarAlertaFin(resultado);
}

function handlerEfectos(efecto){
  const mensaje = efecto?.mensaje;
  const carta = efecto?.carta_id;
  const cartas = efecto?.cartaMostrar
  const jugadorObjetivo = efecto?.jugador_obj

  typeof(cartas) !== 'undefined' ? 
    mostrarAlertaAvisoConCartas(mensaje, carta, cartas, jugadorObjetivo):
    mostrarAlertaAviso(mensaje, carta);

}


function Partida() {

  const estiloFondo={
    backgroundImage: `url(src/assets/fondoPantallaPartida3.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', 
    minHeight: '100vh', 
    minWidth: '100vw', 
  }
  
  const nav = useNavigate();

  const idPartida = cache.get('idPartida');
  const idJugador = cache.get('idJugador');
  const [socketUrl, setSocketUrl] = useState(ws.URL+'/game/'+idPartida);
  const { sendMessage, sendJsonMessage, lastJsonMessage } = useWebSocket(socketUrl,{
    onOpen: () => sendJsonMessage({"player_id": parseInt(idJugador)})
  });

  const [estadoPartida, setEstadoPartida] = useState({});
  const [estadoJugador, setEstadoJugador] = useState({});
  const [habilitadoJD, sethabilitadoJD] = useState(false);
  const [habilitadoR, sethabilitadoR] = useState(false);
  const [habilitadoI, sethabilitadoI] = useState(false);
  // const [chat, setChat] = useState({});

  useEffect(() => {

    if (lastJsonMessage === constantes.CAMBIO_ESTADO_JUEGO) {
      async function actualizarEstadoJuego(){
        const estado = await estadoJuegoService()
        setEstadoPartida(estado)
      }
      actualizarEstadoJuego()
    }
    else if (lastJsonMessage === constantes.CAMBIO_ESTADO_JUGADOR) {
      async function actualizarEstadoJugadorJuego(){
        const estado = await estadoJugadorEnJuegoService()
        setEstadoJugador(estado)
      }
      actualizarEstadoJugadorJuego()
    }
    else if (lastJsonMessage === constantes.HABILITADO_ROBAR_CARTA) {
      setTimeout(() => {
        mostrarAlertaDeFase("Es tu turno de robar carta.");
        sethabilitadoR(true);
      }, 4500);
      
    }
    else if (lastJsonMessage === constantes.HABILITADO_JUGAR_DESCARTADO) {
      mostrarAlertaDeFase("Elige jugar o decartar carta.")
      sethabilitadoJD(true)
    }
    else if (lastJsonMessage === constantes.HABILITADO_INTERCAMBIO){
      mostrarAlertaDeFase("Elige carta para intercambiar.")
      sethabilitadoI(true)
    }
    else if (lastJsonMessage === constantes.HABILITA_JUGAR_DEFENSA) {
      //proximamente
    }
    else if (lastJsonMessage === constantes.MENSAJE_NUEVO) {
      //proximamente
    }
    else if (lastJsonMessage === constantes.PARTIDA_FINALIZADA) {
      finalizarPartidaService();
    }
    else if( lastJsonMessage !== null
      && typeof(lastJsonMessage.mensaje) !== 'undefined' ){
        handlerEfectos(lastJsonMessage);
    }
    else if( lastJsonMessage !== null
      && typeof(lastJsonMessage.resultados) !== 'undefined' ){
        handlerResultados(lastJsonMessage.resultados);
        sendMessage('desconexion');
        setTimeout(() => {nav('/menu')}, 7000);
    }
    //else {
      //mostrarAlertaAviso(lastJsonMessage)
    //}
  }, [lastJsonMessage, nav, sendMessage]);


  const desabilitarJD = () => {
    sethabilitadoJD(false)
  }
  const desabilitarR = () => {
    sethabilitadoR(false)
  }
  const desabilitarI = () => {
    sethabilitadoI(false)
  }
  
  return (
      <div style={estiloFondo}>
        <PartidaEnCurso 
          habilitadoI = {habilitadoI}
          habilitadoJD = {habilitadoJD}
          habilitadoR = {habilitadoR}
          estadoPartida={estadoPartida}
          estadoJugador={estadoJugador}
          desabilitarI={desabilitarI}
          desabilitarR={desabilitarR}
          desabilitarJD={desabilitarJD}
          // chat={chat}
          />
      </div>
  );
}

export default Partida;
