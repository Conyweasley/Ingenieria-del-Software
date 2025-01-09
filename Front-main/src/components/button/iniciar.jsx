import React from "react";
import { useNavigate } from 'react-router-dom';
import { iniciarPartidaService } from "../../services/partida.service";
import mostrarAlertaDeFase from "../alert/alertaDeFase";


function Iniciar(prop){

  const navigate = useNavigate();

  const estiloButtonIniciar = {
    marginRight:"40px",
    backgroundColor: '#919191', // Cambia esto al color que desees
    color: '#000000', // Cambia esto al color de texto que desees
    padding: '10px 20px', // Cambia esto para ajustar el tamaño del botón
    border: false, // Opcional: para eliminar el borde del botón
    borderRadius: '10px', // Opcional: para redondear las esquinas del botón
    cursor: 'pointer', // Cambia el cursor al pasar el mouse sobre el botón
}

const handleSubmit = async () => {

  if(!prop.habilitado){
    console.log("no se permite iniciar la partida")
    mostrarAlertaDeFase("No hay suficientes jugadores para iniciar.")
    return
  }

  try {
    await iniciarPartidaService();
    return;
  }
  catch (e){
    console.log(e);
  }
}

  return(
    <>
      <button 
        style={estiloButtonIniciar}
        onClick={handleSubmit}
      >Iniciar
      </button>
    </>
  )
}


export default Iniciar