function cambiafoto(num) {
    //ruta imagen
    let foto = "img/foto" + num + ".jpg";
    //cambiar imagen
    document.images["foto-grande"].src = foto;
    //info alt de la imagen
    let infoFoto = document.images["fotos" + num].alt;
    //coge la referencia id "info". //innerHTML: coge la información del contenido de la etiqueta div de html
    //Cambia la info de la imagen
    info.innerHTML = infoFoto;
}
