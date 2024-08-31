var usuarioTxt = document.getElementById("usuarioTxt");
var contraseniaTxt = document.getElementById("contraseniaTxt");

var parrafo = document.querySelector("p");

function iniciarSesion(){
    var usuarioEntrada = usuarioTxt.value;
    //parrafo.innerHTML = "Login correcto " + usuarioEntrada;

    parrafo.innerHTML = `Registro con éxito <strong>${usuarioEntrada}</strong>`
}

function registro(){
    var usuarioEntrada = usuarioTxt.value;
    parrafo.innerHTML = "Registro con éxito " + usuarioEntrada;
}