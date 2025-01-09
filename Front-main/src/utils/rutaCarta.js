// Devuelve la ruta de la carta
function cardPath(carta){

    let ruta = ""
    if(carta<10){
        ruta = "src/assets/cartas/00"+carta+".png"
    }
    else if(10<=carta  && carta<100){
        ruta = "src/assets/cartas/0"+carta+".png"
    }
    else{
        ruta = "src/assets/cartas/"+carta+".png"
    }
    return ruta
}

export default cardPath;