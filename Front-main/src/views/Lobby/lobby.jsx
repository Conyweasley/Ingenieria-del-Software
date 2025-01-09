import React from 'react';
import BarraDeLobby from '../../components/lobby/barraDeLobby';
function Lobby(){

  const estiloFondo = {
    background: 'linear-gradient(to right, #000007, #737373)',
    minHeight: '100vh', 
    minWidth: '100vw', 
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column', 
  }

  const estiloTitulo = {
    color :'#FFFFFF'
  }

  return(
    <div style={estiloFondo}>
      <h1 style={estiloTitulo}>Lobby</h1>
      <BarraDeLobby></BarraDeLobby>
    </div>
  );
}

export default Lobby;