import { Card, CardHeader, CardMedia } from '@mui/material';
import cardPath from '../../../utils/rutaCarta';

function Carta({data,onClick,seleccionada}) {

  const id= data.id;
  const ruta = cardPath(id);
  
  const estiloCarta = {
    width: seleccionada? '120px' :'110px',
    height: seleccionada? '160px' :'150px',
    border: '3px solid #343434',
    marginLeft: '6px',
    transform: seleccionada ? 'translateY(-18px)' : 'none',
  }

  const handleClick = () => {
    onClick(data.id);
  };

  return (
    <div>
      <Card sx={estiloCarta} onClick={handleClick}>
        <CardMedia 
            component="img"
            height={seleccionada? '160px' :'150px'}
            image={ruta}
            alt="Carta"
            data-testid="elemento-cartas" />
      </Card>
    </div>
  );
}

export default Carta;