import { Box } from '@mui/material';
import Carta from '../carta/carta';
import {useState} from 'react'
import cache from '../../../services/cache/cache.service';
import selecCartaSinSeleccion from '../../../utils/seleccionCartas'

function Mano(props) {

  const estiloMano = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }

  const [cartaSeleccionada, setCartaSeleccionada] = useState(null);

  const handleCartaClick = (id) => {
    if (id!=1){
      cache.set('idCartaSeleccionada',id);
      props.deseleccionarJugador();
      setCartaSeleccionada(id);
      selecCartaSinSeleccion(id);
    } 
  };
  

  return (
  <>
    {props.cartas?(<Box sx={estiloMano}>
      {props.cartas.map((cartas) => (
      <Carta 
        key={cartas.id} 
        data={cartas} 
        seleccionada={cartaSeleccionada === cartas.id} 
        onClick={handleCartaClick}
      />
    ))}
    </Box>):null}
  </>
  );
}

export default Mano;