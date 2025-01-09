import Swal from 'sweetalert2';
import "./alert.css"
import cardPath from '../../utils/rutaCarta';


function mostrarAlertaAvisoConCartas(text, carta, cartas, jugadorObjetivo) {

  const ruta = cardPath(carta);
  let registroCartas = [];

  cartas.forEach( (carta) => registroCartas.push(cardPath(carta.id)));

  let mano = ``;
  registroCartas.forEach((url) => {   
    mano = mano.concat(`<img src="${url}" width="90" height="135" style="padding: 10px;"/>`);
  })

  const mensaje = 
  `<div id="fondo" style="min-height: 380px; display: flex; flex-direction: column; align-items: center; justify-content: center;" >

    <div id="top" style=" max-width: 400px; max-height: 200px;  display: flex; align-items: center; justify-content: center; margin: 10px;">
      <p style="max-width: 180px; padding: 10px">Carta Jugada:</p>
      <img src=${ruta} width="100" height="150" style="padding: 10px;"/>
    </div>

    <div id="bottom" style="min-width: 300px; display: flex; align-items: start; justify-content: center;">
      <div style="min-width: 300px; max-height: 350px; display: flex; flex-direction: column; align-items: center; justify-content: center;  padding: 0px 10px 0 10px;">
        <p>${text}</p>
        <div style="display: flex; align-items: center; justify-content: center;">
          <div style="display: flex; align-items: center; justify-content: start;">
            <p style="max-width: 250px">${jugadorObjetivo} tiene la(s) siguiente(s) carta(s): </p>
          </div>
          <div style="min-width: 300px; display: flex; align-items: center; justify-content: center;">
            ${mano}
          </div>
        </div>
        
      </div>
    </div>

  </div>`

  Swal.fire({
    timer: 6000,
    html: mensaje,
    background: '#130e0e',
    confirmButtonText: 'Aceptar',
    width: '800px',
    // height: '800px',
    customClass: {
      popup: 'popup-clase-aviso',
      confirmButton: 'boton-confirmacion-clase',
    },},
  );
}


export default mostrarAlertaAvisoConCartas;