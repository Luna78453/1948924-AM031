function imprimirTexto(){
    var campoTexto = document.getElementById("campoTXT");
    var texto = campoTexto.value;

    console.log(texto);
}

function borrarTexto(){
    var campoTexto = document.getElementById("campoTXT");
    campoTexto.value = '';
}