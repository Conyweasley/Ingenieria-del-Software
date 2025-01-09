import cache from "../cache/cache.service";
import { apiGet} from "../api.service";

export async function estadoJuegoService(){
    try {
        const idPartida = cache.get("idPartida")
        const response = await apiGet('/match/game/state/'+idPartida);
        if (response.ok){
        const data = response.json();
        return data;
        }
        else {
            throw 'No se pudo obtener el estado del juego .';
        }
    }
    catch (e){
        console.log(e);
        throw e;
    }
}

export async function estadoJugadorEnJuegoService(){
    try {
        const idPartida = cache.get("idPartida")
        const idJugador = cache.get("idJugador")
        const response = await apiGet('/match/player/state/'+idPartida+'/'+idJugador);
        if (response.ok){
        const data = response.json();
        return data;
        }
        else {
            throw 'No se pudo obtener el estado del jugador en el juego .';
        }
    }
    catch (e){
        console.log(e);
        throw e;
    }
}

export async function estadoLobbyService(){
    try {
        const idPartida = cache.get("idPartida")
        const response = await apiGet('/match/state/'+idPartida);
        if (response.ok){
        const data = response.json();
        return data;
        }
        else {
            throw 'No se pudo obtener el estado del lobby.';
        }
    }
    catch (e){
        console.log(e);
        throw e;
    }
}

