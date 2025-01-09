import React, { useState, useEffect } from 'react';
import { FormControl, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { crearPartidaService } from '../../../services/partida.service';
import mostrarAlertaDeFase from '../../alert/alertaDeFase';
import cache from '../../../services/cache/cache.service';

function FormularioPartida() {

  const navigate = useNavigate();

  const estiloFormulario = {
    backgroundColor: '#919191', 
    padding: '3px',
    width: '400px', 
    borderRadius: '10px', 
  };

  const estiloInput = {
    color: '#FFFFFF',
    marginTop: '20px',
    height: '50px',
    width: '275px',
  };

  const estiloButton = {
    backgroundColor: '#2D2D2D',
    marginTop: '20px',
    color: '#FFFFFF',
    borderRadius: '20px',
  }

  const estiloParrafo = {
    color: '#FFFFFF',
  }
  const [errors, setErrors] = React.useState('');

  const [nombre, setNombre] = React.useState("");
  const handleNombre = (e) => {
      setNombre(e.target.value);
  }

  const [contra, setContra] = React.useState("");
  const handleContra = (e) => {
      setContra(e.target.value);
  }

  const [jugadoresMin, setMinJugadores] = React.useState(0);
  const handleMinJugadores = (e) => {
      setMinJugadores(e.target.value);
  }

  const [jugadoresMax, setMaxJugadores] = React.useState(0);
  const handleMaxJugadores = (e) => {
      setMaxJugadores(e.target.value);
  }

  const handleSubmit = async (e) => {
 
    e.preventDefault();

    if (!nombre.trim()) {
      mostrarAlertaDeFase('Por favor, ingresa un nombre válido.');
      return;
    }

    if (parseInt(jugadoresMin) < 4 || parseInt(jugadoresMin) > 12 ) {
      mostrarAlertaDeFase('Por favor, ingrese un numero válido de jugadores mínimos (entre 4 y 12).');
      return;
    }

    if (parseInt(jugadoresMax) < 4 || parseInt(jugadoresMax) > 12 ) {
      mostrarAlertaDeFase('Por favor, ingrese un numero válido de jugadores máximos (entre 4 y 12).');
      return;
    }

    if (parseInt(jugadoresMin) > parseInt(jugadoresMax)){
      console.log('jugadores min = '+jugadoresMin+' y jugadores max = '+jugadoresMax)
      mostrarAlertaDeFase('El mínimo debe ser menor o igual al máximo de jugadores.');
      return;
    }

    try{
      const response = 
        await crearPartidaService(nombre, contra, jugadoresMin, jugadoresMax);
      if (response){
        cache.set("creadorPartida",true);
        mostrarAlertaDeFase('Partida creada exitosamente.');
        navigate('/partida/lobby');
      }
    }
    catch(e) {
      setErrors(e);
    }
  };

  useEffect(() => {
    if(errors !== ''){
      alert(errors);
      setErrors('');
    }
  }, [errors])

  return (
    <><FormControl sx={{ width: '50%'}} style={estiloFormulario}>
        <div>
          <TextField label='Nombre'
            style={estiloInput}
            variant="outlined"
            required={true}
            placeholder="Ingrese el nombre de la partida"
            onChange={handleNombre}
            inputProps={{ maxLength: 20 }} 
          />
          <br></br>
          <TextField label='Contraseña'
            style={estiloInput}
            required={false}
            type='password'
            placeholder='Ingrese la contraseña (opcional)'
            onChange={handleContra}
            inputProps={{ maxLength: 20 }}   
          />
          <br></br>
        <p style={estiloParrafo}>Cantidad de jugadores:</p>
          <TextField label ="minimo"
          style={estiloInput}
          required={true}
          type="number"
          InputProps={{ inputProps: { min: 4 ,max : jugadoresMax} }}
          onChange={handleMinJugadores}
          />
          <br></br>
          <TextField label ="maximo"
          style={estiloInput}
          required={true}
          type="number"
          InputProps={{ inputProps: { min: jugadoresMin , max:12 } }}
          onChange={handleMaxJugadores}
          />
        </div>
        <Button
          style={estiloButton} 
          type="submit"
          variant='contained' 
          onClick={handleSubmit}>
          Crear Partida
        </Button>
    </FormControl> </>
  );
}

export default FormularioPartida;