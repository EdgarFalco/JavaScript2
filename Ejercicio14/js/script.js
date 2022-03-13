var textoVisor = "";
var operador1 = 0;
var operador2 = 0;
var operacion = "";

// Añadimos numeros en el visor
function anadirNumero(visor, numero) {
    textoVisor = textoVisor + numero;
    visor.value = textoVisor;
}

// Hace las operaciones + | - | * | /
function hacerOperacion(visor, op) {
    operador1 = textoVisor;
    operacion = op;
    textoVisor = "";
}

// Hace operacion Raiz
function raiz(visor, numero) {
    result = Math.sqrt(numero);
    visor.value = result;
    return result;
}

//Hace el porcentaje
function porcentaje(visor, numero) {
    result = numero / 100;
    visor.value = result;
    return result;
}

//El inverso de un número A es 1/A ya que A * 1/A = 1 (por ejemplo, el inverso de 5 es 1/5)
function inversa(visor, numero) {
    result = 1 / numero;
    visor.value = result;
    return result;
}

//Añade o quita "-""
function masmenos(visor) {
    result = -textoVisor;
    visor.value = result;
    textoVisor = result;
    return result;
}

//Evalua los operadores y la operacion, muestra el resultado en el visor
function igual(visor) {
    operador2 = textoVisor;
    result = eval(operador1 + operacion + operador2);
    visor.value = result;
    textoVisor = result;
    return result;
}

//Vacia el visor
function c(visor) {
    visor.value = "";
    textoVisor = "";
}

//Elimina la primera posicion
function retr(visor) {
    result = textoVisor.substring(0, textoVisor.length - 1);
    textoVisor = result;
    visor.value = result;
}
