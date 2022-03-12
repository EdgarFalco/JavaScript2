function horaActual() {
    //Instanciamos la fecha
    fecha = new Date();
    //Cogermos la hora actual
    hora = fecha.getHours();
    //Cogemos los minutos actuales
    minuto = fecha.getMinutes();
    //Cogemos los segundos actuales
    segundo = fecha.getSeconds();

    //Controlamos el numero de cifras para horas | minutos | segundos
    if (hora < 10) {
        hora = "0" + hora;
    }
    if (minuto < 10) {
        minuto = "0" + minuto;
    }
    if (segundo < 10) {
        segundo = "0" + segundo;
    }

    let horaActual = hora + " : " + minuto + " : " + segundo;
    return horaActual;
}

//Temporizador
function actualizarTiempo() {
    //Obtenemos el tiempo actual
    let hora = horaActual();
    //buscamos el id reloj
    let reloj = document.getElementById("reloj");
    //Cambiamos el valor y ponemos la hora actual
    reloj.innerHTML = hora;
}

//Iniciamos temporizador con 1000 milisegundos
setInterval(actualizarTiempo, 1000);
