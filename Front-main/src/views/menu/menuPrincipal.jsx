import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import useWebSocket from 'react-use-websocket';
import { Button as Boton, Box } from '@mui/material'
import styled from 'styled-components';
import Button from '../../components/Button';
import Barra from '../../components/menu/Barra';
import ws from '../../utils/websocket';
import { CAMBIO_LISTAR_PARTIDA } from '../../utils/constantesWs';
import { obtenerPartidaService } from '../../services/partida.service';

const estiloBarrasContenedor = {
  backgroundColor: "#1C1C1C",
  width: '780px', // Ancho del contenedor
  height: '390px', 
  overflowY: "scroll",
  overflowX: 'hidden',
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "start",
  border: "2px solid #333",
  borderRadius: "10px",
  padding: "20px",

}

const screenStyle = {
  backgroundImage: `url(src/assets/FondoPantalla.jpg)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat', 
  minHeight: '100vh', 
  minWidth: '100vw', 
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column', 
}
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1px;
  
  
`;

const PartidasEncontradas = styled.p`
  font-weight: bold; 
  color: #f0f0f0;
  padding: 6px
`;

const CreateButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CreateButton = styled(Button)`
  margin-left: 10px; /* Espacio entre el botón y el título */
`;

function MenuPrincipal() {

  const nav = useNavigate();
  const [error, setError] = useState('');
  
  const [partidas, setPartidas] = useState([]);
  const [socketUrl, setSocketUrl] = useState(ws.URL+'/match/list');
  const { sendMessage, lastJsonMessage } = useWebSocket(socketUrl);

  const handleCrearPartida = async () => {
    sendMessage('desconexion');
    nav('/partida/crear');
  }

  useEffect(() => {
    if(lastJsonMessage === CAMBIO_LISTAR_PARTIDA){
      // eslint-disable-next-line no-inner-declarations
      async function obtenerPartida(){
        const partidas = await obtenerPartidaService();
        setPartidas(partidas);
      }
      obtenerPartida();
    }
  }, [lastJsonMessage]);
  

  return (
    <div style={screenStyle}>
      <div style={{backgroundColor:'rgba(111, 143, 57, 0.85)',borderRadius: '50px',}}>
        <h1 style={{color:"#FFFFFF",marginLeft:'20px',marginRight:'20px'}}>Menu</h1>
      </div>
      <div style={{backgroundColor:'rgba(111, 143, 57, 0.94)',borderRadius: '20px',  padding: "10px"}}>
        <HeaderContainer>
          <PartidasEncontradas>Partidas encontradas: {partidas.length}</PartidasEncontradas>
          <CreateButtonContainer>
            <CreateButton label="Crear partida" onClick={handleCrearPartida} />
          </CreateButtonContainer>
        </HeaderContainer>
        <div style={estiloBarrasContenedor}>
          {partidas.length > 0 ? partidas.map((partida) => (
            <Barra 
              key={partida?.id_partida}
              partida={partida}/>
            )): <Box sx={{display: "flex", justifyContent: "center",alignItems: "center",}}>
              <Boton>No hay Partidas</Boton>
            </Box>}
        </div>
      </div>
    </div>
  );

}

export default MenuPrincipal;
