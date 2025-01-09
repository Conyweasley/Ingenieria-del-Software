import { useState } from "react";
import { Alert, Box, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import cache from '../../services/cache/cache.service';
import { apiPost } from '../../services/api.service';
import { loginService } from "../../services/login.service";

function Login() {
  const screenStyle = {
    backgroundImage: `url(src/assets/FondoPantalla2.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', 
    minHeight: '100vh', 
    minWidth: '100vw', 
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column', 
  }
  const buttonStyle = {
    backgroundColor: "#6F8F39",
    marginTop: '10px',
    color: '#FFFFFF',
    borderRadius: '20px',
  }
  cache.clear();
  const [name, setName] = useState('');
  const handleName = (e) => {
    setName(e.target.value);
  }

  const nav = useNavigate();
    
    // TODO: fix this to create alerts when http request fails
    const [error, setError] = useState({});

    // useEffect(() => {
    //     console.log('name = ', name);
    // }, [name]);

  const handleSubmit = async() => {
    try {
      const response = await loginService(name);
      if (response){
        nav('/menu');
      }
    }
    catch (e){
      setError(e);
    }
  }

  return (
    <div style={screenStyle}>
      <div style={{backgroundColor:'rgba(111, 143, 57, 0.8)',borderRadius: '50px',}}>
        <h1 style={{color:"#FFFFFF",marginLeft:'20px',marginRight:'20px'}}>La Cosa</h1>
      </div>
      <Box sx={{
        width: '30%',
        height: '60%',
        backgroundColor : '#919191',
        borderRadius: '20px',
        }}>
        <p style={{color: 'white',marginBlockEnd:'30px'}}>Ingrese su nombre de Jugador</p>
        <div >
          <TextField 
            style={{marginBlockEnd:'20px'}}
            label="Nombre"
            onChange={handleName}
            required
            color="success"/>
        </div>
      </Box>
      <Button
        style={buttonStyle}
        type="submit"
        variant='contained' 
        onClick={handleSubmit}>
        Jugar
      </Button>
    </div>
  );
}

export default Login;
