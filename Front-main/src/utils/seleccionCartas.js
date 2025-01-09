import cache from "../services/cache/cache.service";

export function seleccionCartaJugar(idCard,habJugarDefensa){

  const idCardInt = parseInt(idCard);
  let resultado = false
  const cartasDefesa=[70,71,72,73,74,75,76,77,78,79,80,81,82,83]
  const cartasInfectado=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]

  if(habJugarDefensa &&
     cartasDefesa.includes(idCardInt)){
    //verifica se haya permitido jugar la defensa y que la carta  sea de defensa                      
    resultado = true
  }
  else if(!habJugarDefensa &&
          !cartasDefesa.includes(idCardInt) &&
          !cartasInfectado.includes(idCardInt)){
    //verifica que no se jueguen carta de defensa en la fase jugar 
    //y tampoco que se juegue cartas de infectado         
    resultado = true
  }

  return resultado
}

export function seleccionCartaDescartar(idCard){

  const idCardInt = parseInt(idCard);
  let resultado = false
  const cartasInfectado=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]

  if(!cartasInfectado.includes(idCardInt)){
    // verifica que no se descarten cartas de infectado              
    resultado = true
  }

  return resultado
}

export function selecCartaSinSeleccion(idCard){

  const idCardInt = parseInt(idCard);
  const cartasSinSeleccion=[40,41,42,43,44,45,46,47,48,49]
  const idJugador = cache.get('idJugador')

  if(cartasSinSeleccion.includes(idCardInt)){
    cache.set('idJugadorObjetivo',idJugador)
  }

}

export default selecCartaSinSeleccion