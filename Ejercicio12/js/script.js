// XX/XX/XXX

//validar la fecha en una cadena
var cadenaEjemplo = "Nací el 05/02/1999 en Donostia";
var correo = "pepfdsafegmail.es";

function validarFecha(cadena) {
    var fecha = cadena.match(/\d{2}\/\d{2}\/\d{4}/);

    if (!null) {
        return console.log("La fecha és valida");
    } else {
        return console.log("La fecha no és valida");
    }
}

// validar el email
function validarEmail(valor) {
    if (
        /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(valor)
    ) {
        alert("La dirección de email " + valor + " es correcta.");
    } else {
        alert("La dirección de email es incorrecta.");
    }
}

console.log(validarFecha(cadenaEjemplo));
console.log(validarEmail(correo));
