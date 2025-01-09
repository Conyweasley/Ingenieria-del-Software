import {useState} from 'react';
import { useNavigate } from 'react-router';
import { Button as Boton, TextField } from '@mui/material';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import styled from 'styled-components';
import Button from '../Button'; 
import { unirsePartidaService } from '../../services/partida.service';

// Estilos para la barra
const BarraContainer = styled.div`
  background-color: #f0f0f0;
  border: 2px solid #333;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  width: 97%;
`;

const TextosContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;

const Separacion = styled.div`
  width: 20px; 
`;

const PartidaTexto = styled.div`
  margin-right: 20px;
`;
const containerSeparacion1 = {
  width: "23%",
}
const containerSeparacion2 = {
  width: "10%",
  backgroundColor:"#C8C8C8",
  padding:"5px",
  borderRadius:"20px",
}
const containerSeparacion3 = {
  width: "9%",
}
const containerSeparacion4 = {
  width: "40%",
}
const containerSeparacion5 = {
  width: "15%",
}
function Barra(partida) {

  const [error, setError] = useState('');
  const [contra, setContra] = useState('');
  const partidaBarra = partida?.partida;
  const nav = useNavigate();

  const handleContra = (e) => {
    setContra(e.target.value);
  }

  const handleClick = async () => {
    try {
      const response = 
        await unirsePartidaService(partidaBarra.id_partida,partidaBarra.name_partida, contra);
      if (response){
        nav('/partida/lobby');
      }
    }
    catch(e){
      setError(e);
    } 
  };

  return (<>
    { partidaBarra.iniciada ? 
      <></> :   
      <BarraContainer>
          <div style={containerSeparacion1}>
            <PartidaTexto>{partidaBarra.name_partida}</PartidaTexto>
          </div>
          <div style={containerSeparacion2}>
            {partidaBarra.cantidad_jugadores}/{partidaBarra.cantidad_jugadores_maximos}
          </div>
          <div style={containerSeparacion3}>
            { partidaBarra.contrasena ? <LockOutlinedIcon/> : <LockOpenOutlinedIcon/>}
          </div>
          <div style={containerSeparacion4}>
            { partidaBarra.contrasena ? 
              <TextField label='Contraseña'
              required={true}
              placeholder='Ingrese la contraseña'
              onChange={handleContra} /> : <></>}
          </div>
        <div style={containerSeparacion5}>
          <Button label="Unirse" onClick={handleClick} />
        </div>
      </BarraContainer>
      }
    </>
  );
}

export default Barra;
