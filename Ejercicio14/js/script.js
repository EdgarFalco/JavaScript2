// Crear array
var valores = [true, 5, false, "hola", "adios", 2]

var texto1 = valores[3].length;
var texto2 = valores[4].length;


if(texto1 > texto2){
    console.log(valores[3] + " es más grande")

} else if(texto2 > texto1){
    console.log(valores[4] + " es más grande")

} else{
    console.log(valores[3] + " y " + valores[4] + " Son iguales de tamaño")
}

console.log("Los valores booleanos son: " + valores[0] + " " + valores[2])

var num1 = valores[1];
var num2 = valores[5];

console.log("La suma: " + num1 + num2 + "\n" +
            "La resta: " + (num1 - num2) + "\n" +
            "La multiplicacion: " + num1 * num2 + "\n" +
            "La division: " + num1 / num2 + "\n" +
            "El exponenet: " + Math.pow(num1, num2))


