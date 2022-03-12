var dado1;
var dado2;
var veces = 5; //36000
var i = 1;
var suma;
var sumas = "";

while (i <= veces) {
    dado1 = Math.floor(Math.random() * 6) + 1;
    dado2 = Math.floor(Math.random() * 6) + 1;
    suma = dado1 + dado2;
    if (i < veces) {
        sumas += suma + ",";
    } else {
        sumas += suma;
    }
    console.log(sumas);
    i++;
}

var listaSuma = sumas.split(",");

console.log(listaSuma);
