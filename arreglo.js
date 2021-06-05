function seleccionar(numJugador){
    document.getElementById('JugadorSeleccionado').innerHTML = numJugador;
}

function celdaSeleccionada(numCelda,numJugador){
    var operador = document.getElementById(numCelda).innerHTML;

    //Evaluamos si la celda fue seleccionada previamente
    if (operador == 'X' || operador=='O') {
        return;
    }

    //Evaluamos quien es el jugador para asignar su operador
    if(numJugador==1){
        operador='X';
    } else{
        operador='O';
    }
    document.getElementById(numCelda).innerHTML = operador;
}

function buscarGanador(numeroJugador) {
    var jugadas = [];
    //Creo un arreglo de arreglos para la jugada ganadora

    var operador;
    
    //Busco el operador, de acuerdo al numero del Jugador
    if (numeroJugador == 1) {
        operador='X';
    } else{
        operador='O';
    }

    //Recorriendo los números del 1 al 10
    //Obtengo la jugada del jugador ...
    for(i=1; i<10;i++){
        if (document.getElementById(i).innerHTML == operador) {
            jugadas[contador] =i;
            contador = i++; //Adicionar una unidad
        }
    }





    console.table(jugadas);
}