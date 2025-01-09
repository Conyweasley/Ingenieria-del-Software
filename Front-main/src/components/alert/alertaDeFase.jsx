import Swal from 'sweetalert2';
import "./alert.css"

function mostrarAlertaDeFase(text) {
  Swal.fire({
    text: text,
    position: 'top-end', 
    width: '250px', 
    timer: 4500,
    background: '#131413',
    showCancelButton: false, 
    showConfirmButton: false, 
    toast: true, 
    customClass: {
        popup: 'popup-clase-alerta-fase',
      }, 
  });
}

export default mostrarAlertaDeFase;