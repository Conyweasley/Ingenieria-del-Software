
function seleccionJugador(id,idVecinos,idCard){

  const cartasSelecionPermitida = [55,56,57,58,59,60,61,62,63,64,65,66]
  const cartasSinSeleccion=[40,41,42,43,44,45,46,47,48,49]
  const idCardInt = parseInt(idCard);
  let resultado = false

  if(cartasSelecionPermitida.includes(idCardInt)){
    //verifica que la carta que se selecciono, se pueda jugar 
    //con cualquier jugador (seduccion,mas vale que corras)            
    resultado = true
  }
  else if(cartasSinSeleccion.includes(idCardInt)){
    //no se permite seleccionar jugador cuando el efecto de la 
    //carta se aplica sobre el mismo jugador que la jugo
    resultado = false
  }
  else if(idVecinos.includes(id)){
    //verifica que el jugador seleccionado sea vecino                            
    resultado = true
  }

  return resultado
}

export default seleccionJugador