import {useState } from "react";
import { Card, CardMedia } from '@mui/material';
import { robarcartaService } from '../../../services/carta.service';


function Mazo(props){

  const [error, setError] = useState('');

  const estiloMazo = {
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center',
    marginLeft: "100px",
  }

  const estiloButton = {
    fontSize: '12px',
    marginTop: '15px'
  }

  const estiloCarta = {
    width: '80px',
    height: '100px',
  }

  const handleRobarCartaClick = async() => {
    const response = await robarcartaService()

    if(response){
      props.desabilitarR()
    }else{
      console.log("error en el service")
    }
  }

  return(
    <div style={estiloMazo} data-testid="Mazo" >
      <Card sx={estiloCarta}>
        <CardMedia 
          component="img"
          height="100"
          image="src/assets/cartas/rev.png"
          alt="Carta"/>
      </Card>
      {props.habilitadoR ? (<button style={estiloButton} onClick={handleRobarCartaClick}>Robar Carta</button>):null}
    </div>
  )
}

export default Mazo;