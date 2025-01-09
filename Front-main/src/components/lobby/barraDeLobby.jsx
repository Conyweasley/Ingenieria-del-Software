import React, { useState,useEffect } from 'react';
import Abandonar from '../button/abandonar';
import Iniciar from '../button/iniciar';
import cache from '../../services/cache/cache.service';
import { useNavigate } from 'react-router-dom';
import ws from '../../utils/websocket';
import useWebSocket from 'react-use-websocket';
import { CAMBIO_ESTADO_LOBBY,ABANDONO_CREADOR,PARTIDA_INICIADA} from '../../utils/constantesWs';
import { estadoLobbyService } from '../../services/partida/estado.juego.service';
import mostrarAlertaDeFase from '../alert/alertaDeFase';
import { abandonarPartidaService} from "../../services/partida.service";

function BarraDeLobby(){
  
  const navigate = useNavigate();

  const [MaxJugadores,setMaxJugadores] = useState(12);
  const nombrePartida = cache.get('nombrePartida');
  const idPartida = cache.get('idPartida')
  
  const [cantidadDeJugadores,setCantidadDeJugadores] = useState(1)
  const [habilitado,setHabilitado] = useState(false)
  const [error, setError] = useState(null);

  const [socketUrl, setSocketUrl] = useState(ws.URL+'/lobby/'+idPartida);
  const { sendMessage, lastJsonMessage } = useWebSocket(socketUrl);

  useEffect(()=>{

    if (lastJsonMessage!=null){
      if(lastJsonMessage === PARTIDA_INICIADA){
        navigate('/partida')
      }
      if(lastJsonMessage === CAMBIO_ESTADO_LOBBY){
        async function estadoLobby(){
          const estadoLobby = await estadoLobbyService()
          setCantidadDeJugadores(estadoLobby.cantidad_jugadores)
          setMaxJugadores(estadoLobby.maximo)
          if(estadoLobby.cantidad_jugadores>3){
            if(cache.get("creadorPartida")){
              setHabilitado(true)
              mostrarAlertaDeFase("Ya podes iniciar la partida.")
            }
          }
          else{
            setHabilitado(false)
          }
        }
        estadoLobby()
      }
      if(lastJsonMessage === ABANDONO_CREADOR){
        cache.remove("idPartida")
        cache.remove("nombrePartida")
        navigate('/menu')
      }
    }
  },[lastJsonMessage,cantidadDeJugadores]
  );

  const handleSubmit = async() => {
  
    try {
      const response = await abandonarPartidaService();
      if (response){
        mostrarAlertaDeFase("Abandonaste la partida.");
        sendMessage('desconexion');
        cache.remove("creadorPartida")
        navigate('/menu');
      }
    }
    catch (e){
      setError(e);
    }
  }

  const estiloFondo = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#6F8F39',
    color: '#fff',
    padding: '1px 10px',
    borderRadius: '10px',
    maxWidth: '800px',
  }

  const estiloBorde1 = {
    marginRight: "150px",
    display: 'flex',
    color : 'black',
    padding: '0px 5px',
    backgroundColor: '#919191',
    borderRadius: '15px',
  }

  const estiloBorde2 = {
    display: 'flex',
    marginRight: "20px",
    padding: '10px 10px',
    borderRadius: '10px',
  }

  return(
    <div style = {estiloFondo}>
      <div style = {estiloBorde2}>
        <p>Nombre Partida:  {nombrePartida}</p>
      </div>
      <div style = {estiloBorde1}>
        <p>{cantidadDeJugadores}/{MaxJugadores}</p>
      </div>
      {habilitado ? <Iniciar habilitado={habilitado}></Iniciar>:null}
      <Abandonar onClick={handleSubmit}></Abandonar>
    </div>
  );
  }
  
  export default BarraDeLobby;