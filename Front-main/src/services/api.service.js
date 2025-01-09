import env from '../utils/env';

async function apiGet(url){
    try {
        const response = await fetch(env.url+url);
        return response;
    }
    catch (e){
        console.log('error en api = ',e);
        // return porque se deben personalizar errores despues
        return e;
    }
}

async function apiPost(url, body = {}){
    try {
        const response = await fetch(env.url+url, {
            method: 'POST',
            headers: {},
            body: body
        });
        return response;
    }
    catch (e){
        console.log('error en api = ',e);
        // return porque se deben personalizar errores despues
        return e;
    }
}

export { apiGet, apiPost };