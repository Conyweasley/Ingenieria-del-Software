import React from "react";

function Abandonar({onClick}){

  const estiloButtonAbandonar = {
    //position: 'absolute', // Permite posicionar el botón de manera absoluta en relación con el elemento contenedor
    top: '500px', // Cambia esto para ajustar la posición vertical del botón
    left: '400px',
    backgroundColor: '#919191', // Cambia esto al color que desees
    color: '#000000', // Cambia esto al color de texto que desees
    padding: '10px 20px', // Cambia esto para ajustar el tamaño del botón
    border: false, // Opcional: para eliminar el borde del botón
    borderRadius: '10px', // Opcional: para redondear las esquinas del botón
    cursor: 'pointer', // Cambia el cursor al pasar el mouse sobre el botón
}

  return(
    <>
      <button 
        style={estiloButtonAbandonar}
        onClick={onClick}
      >Abandonar
      </button>
    </>
  )
}


export default Abandonar