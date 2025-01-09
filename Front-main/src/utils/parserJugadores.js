import cache from "../services/cache/cache.service";

function parserJugadores(lista){

  const idJugador= cache.get("idJugador")

  let listaJugadores = []
  let stop = 0
  let indexVecino0 = 0
  let indexJugadorPrincipal = 0
  let indexVecino1 = 14
  let respuesta = {
    "listaVecinos" : [],
    "listaJugadores" : []
  } 
  
  if(lista==undefined){
    return respuesta
  }

  if(lista.length==2){
    if(lista[0].id==idJugador){
      respuesta.listaJugadores[0]=lista[1]
      return respuesta
    }
    else{
      respuesta.listaJugadores[0]=lista[0]
      return respuesta
    }
  }
  else if(lista.length==1){
    return respuesta
  }

  for(let i=0;i<lista.length;i++){
    if(lista[i].id==idJugador){
      if(i===0){
        indexVecino0 = lista.length-1
        indexVecino1 = i+1
        indexJugadorPrincipal = i
        break
      }else if(i!=(lista.length-1)){
        indexVecino0 = i-1
        indexVecino1 = i+1
        indexJugadorPrincipal = i
      }else{
        indexVecino0 = i-1
        indexVecino1 = 0
        indexJugadorPrincipal = i
        break
      }
    }
    if(i>indexVecino1){
      listaJugadores = [lista[i], ...listaJugadores];
    }
  }

  stop = indexVecino0
  
  for(let j = 0; j<stop;j++){
    if(j!=indexVecino1 && j!=indexJugadorPrincipal ){
      listaJugadores = [lista[j], ...listaJugadores];
    }
  }

  respuesta.listaVecinos[0] = lista[indexVecino0]
  respuesta.listaVecinos[1] = lista[indexVecino1]
  respuesta.listaJugadores=listaJugadores

  return respuesta
    
}

export default parserJugadores