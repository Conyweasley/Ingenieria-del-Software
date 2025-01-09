import cache from "./cache/cache.service";
import { apiPost } from "./api.service";

export async function loginService(name){
    const form = new FormData();
    form.append("user_name",name);
    try{
      const response = await apiPost('/user/create',form);
      if (response.ok){
        const data = await response.json();
        cache.set('idJugador', data.id);
        cache.set('nombreJugador', data.user_name);
        return true;
      }
      else {
        throw 'No se pudo crear el usuario';
      }
    }
    catch(e){
        console.log(e);
        throw e;
    }
}