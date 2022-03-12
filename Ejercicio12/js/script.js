//Ejemplos de prueba
var cadenaEjemplo = "Nací el 05/02/1999 en Donostia";
var correo = "pepfdsafegmail.es";
var frase = "&<hola>";
var nombreApellido = "Edgar Falco";
let codigoHtml =
    "<script>!DOCTYPE html>" +
    "<html>" +
    "<head>" +
    "<meta charset='utf-8'></script>" +
    "<meta http-equiv='X-UA-Compatible' content='IE=edge'>" +
    "<title>Script</title>" +
    "<meta name='viewport' content='width=device-width, initial-scale=1'>" +
    "<link rel='stylesheet' type='text/css' media='screen' href='css/styles.css'>" +
    "<script src='js/script.js'></script>" +
    "</head>" +
    "<body>" +
    "<p>Esta página contiene el primer script</p>" +
    "</body>";
("</html>");

// XX/XX/XXX
//validar la fecha en una cadena
function validarFecha(cadena) {
    let fecha = cadena.match(/\d{2}\/\d{2}\/\d{4}/);
    let result;

    if (!null) {
        result = console.log("La fecha és valida");
    } else {
        result = console.log("La fecha no és valida");
    }

    return result;
}

// validar el email
function validarEmail(valor) {
    if (
        /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(valor)
    ) {
        console.log("La dirección de email " + valor + " es correcta.");
    } else {
        console.log("La dirección de email es incorrecta.");
    }
}

//reemplazar caracteres
function reemplazarCaracteres(texto) {
    texto = texto.replace(/&/g, "&amp;");
    texto = texto.replace(/\"/g, "&quot;");
    texto = texto.replace(/</g, "&lt;");
    texto = texto.replace(/>/g, "&gt;");

    return console.log("El reemplazo es: " + texto);
}

//Invertir nombre y apellido
function invertirNombreApellido(texto) {
    let nombre = texto.match(/\D*\s/);
    let apellido = texto.match(/\s\D*/);

    return console.log(apellido + ", " + nombre);
}

//Eliminar etiquetas peligrosas html
function eliminarEtiquetas(codigo) {
    //Borra la etiqueta script y su contenido
    let resultado = codigo.replace(/<script[^>]*?>[\s\S]*?<\/script>/gi, "");

    return console.log(resultado);
}

//Pruebas
console.log(validarFecha(cadenaEjemplo));
console.log(validarEmail(correo));
console.log(reemplazarCaracteres(frase));
console.log(invertirNombreApellido(nombreApellido));
console.log(eliminarEtiquetas(codigoHtml));
