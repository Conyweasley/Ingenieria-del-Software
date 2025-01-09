import Swal from 'sweetalert2';
import "./alert.css"

function mostrarAlertaFin(text) {
  Swal.fire({
    timer: 8000,
    text: text,
    background: '#130e0e',
    confirmButtonText: 'Aceptar',
    customClass: {
      popup: 'popup-clase-aviso',
      confirmButton: 'boton-confirmacion-clase',
    }, 
  },
  );
}

export default mostrarAlertaFin;