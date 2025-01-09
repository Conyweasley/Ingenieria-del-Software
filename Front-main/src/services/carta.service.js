import cache from "./cache/cache.service";
import { apiPost } from "./api.service";

export async function jugarCartaService() {
  
  const idPartida = cache.get("idPartida")
  const idCard = cache.get("idCartaSeleccionada")
  const idJugadorObjetivo = cache.get("idJugadorObjetivo")
  const idJugador = cache.get("idJugador")

  const form = new FormData();
  form.append("match_id",idPartida);
  form.append("card_id",idCard);
  form.append("player_objective",idJugadorObjetivo);
  form.append("player_orig",idJugador);

  try{
    const response = await apiPost('/game/play', form);
    if (response.ok){
      return true
    }
    else {
      throw 'Error al Jugar la carta';
    }
  }
  catch(error){
    console.log(error);
    throw error;
  }
}

export async function robarcartaService() {

  const form = new FormData();
  form.append("player_id",cache.get("idJugador"));
  form.append("match_id",cache.get("idPartida"));

  try{
    const response = await apiPost('/game/pick', form);
    if (response.ok){
      return true
    }
    else {
        throw 'Error en la validacion de turno';
    }
  }
  catch(error){
    console.log(error);
    throw error;
  }
} 
  

export async function descartarCartaService() {
  
  const idPartida = cache.get("idPartida")
  const idCard = cache.get("idCartaSeleccionada")
  const idJugador = cache.get("idJugador")

  const form = new FormData();
  form.append("match_id",idPartida);
  form.append("card_id",idCard);
  form.append("player_id",idJugador);

  try{
    const response = await apiPost('/game/discard', form);
    if (response.ok){
      return true
    }
    else {
      throw 'Error al Descartar la carta';
    }
  }
  catch(error){
    console.log(error);
    throw error;
  }
}

// TODO: intercamiar carta
// export async function intercambiarCartaService(){
// }
