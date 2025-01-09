import cache from "./cache/cache.service";
import { apiGet, apiPost } from "./api.service";

export async function obtenerPartidaService(){
    try {
        const response = await apiGet('/match/list');
        if (response.ok){
        const data = response.json();
        return data;
        }
        else {
            throw 'No se pudo obtener las partidas.';
        }
    }
    catch (e){
        console.log(e);
        throw e;
    }
}

export async function crearPartidaService(nombre, contra, jugadoresMin, jugadoresMax){
    try{
        const idJugador = cache.get('idJugador');
        const form = new FormData();
        form.append("id_usuario_creador",idJugador);
        form.append("id_name",nombre);
        form.append("contrasena",contra);
        form.append("num_max_jugadores",jugadoresMax);
        form.append("num_min_jugadores",jugadoresMin);

        const response = await apiPost('/match/create', form);
        if (response.ok){
            const data = await response.json();
            if (data.id_partida && data.id_partida !== 0){
                cache.set('idPartida', data.id_partida);
                cache.set('nombrePartida',nombre)
                return true;
            }
            else {
                throw 'No se pudo crear la partida.';
            }
        }
    }
    catch(e){
        console.log(e);
        throw e;
    }
}

export async function unirsePartidaService(id_partida, name_partida, contra){
    try{
        const id_usuario = cache.get('idJugador');
        const form = new FormData()
        form.append("user_id", id_usuario);
        form.append("match_id", id_partida);
        form.append("contrasena",contra);
        const response = await apiPost('/match/join', form);
        if (response.ok){
            cache.set('idPartida', id_partida);
            cache.set('nombrePartida',name_partida);
        return true;
        }
        else {
            throw 'No se pudo unir a la partida.';
        }
    }
    catch (e){
        console.log(e);
        throw e;    
    }
}

export async function iniciarPartidaService(){
    try {
        const userId = cache.get("idJugador");
        const matchId = cache.get("idPartida");
        const form = new FormData();
        form.append("user_id",userId);
        form.append("match_id",matchId);
        
        const response = await apiPost('/match/start', form);
        if (response.ok){
            return;
        }
        else{
            throw 'No se pudo iniciar la partida.';
        }
    }
    catch (e){
        console.log(e);
        throw e;
    }
}

export async function abandonarPartidaService(){
    const userID = cache.get("idJugador");
    const matchId = cache.get("idPartida");
    const form = new FormData();
    form.append("id_jugador",userID);
    form.append("match_id",matchId);
    try{
        const response = await apiPost ('/match/exit', form)
        if (response.ok){
            return true;
        }
        else{
            throw 'No se pudo abandonar la partida.';
        }
    }
    catch (e){
        console.log(e);
        throw e;
    }
}

export async function finalizarPartidaService(){
    try {
        const matchId = cache.get("idPartida");
        const form = new FormData();
        form.append("match_id",matchId);
        const response = await apiPost('/game/finish', form);
        if (response.ok){
            return response.json();
        }
        else{
            throw 'No se pudo finalizar la partida.';
        }
    }
    catch (e){
        console.log(e);
        throw e;
    }
}