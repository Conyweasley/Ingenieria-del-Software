import Swal from 'sweetalert2';
import "./alert.css"
import cardPath from '../../utils/rutaCarta';

function mostrarAlertaAviso(text, carta) {
  
  const ruta = cardPath(carta);

  const mensaje = 
  `<div id="fondo" style="max-height: 300px; display: flex; flex-direction: column; align-items: center; justify-content: center;" >

    <div id="top" style=" max-width: 400px; max-height: 200px;  display: flex; align-items: center; justify-content: center; margin: 10px;">
      <p style="max-width: 180px; padding: 10px">Carta Jugada:</p>
      <img src=${ruta} width="100" height="150" style="padding: 10px;"/>
    </div>

    <div id="bottom" style="min-width: 300px; max-height: 80px; display: flex; align-items: center; justify-content: center;">
      <p>${text}</p>
    </div>

  </div>`

  Swal.fire({
    timer: 6000,
    html: mensaje,
    background: '#130e0e',
    confirmButtonText: 'Aceptar',
    width: '600px',
    customClass: {
      popup: 'popup-clase-aviso',
      confirmButton: 'boton-confirmacion-clase',
    }, 
  },
  );
}

export default mostrarAlertaAviso;