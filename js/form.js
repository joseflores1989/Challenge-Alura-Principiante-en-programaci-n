var botonEncriptar = document.querySelector("#btn-encriptar");
var botonDesencriptar = document.querySelector("#btn-desencriptar");
var botonCopiar = document.querySelector("#btn-copy");

botonEncriptar.addEventListener("click", function(event){
    event.preventDefault();
    var textoAEncriptar = document.querySelector("#input-texto").value;
    var textoDesencriptado = document.querySelector("#msg");
    var validacionError = validarTexto(textoAEncriptar);   
    if(validacionError.length>1){
        crearMsjError(validacionError);
        textoDesencriptado.value = "";
        return;
    }
    var resultado = encriptacion(textoAEncriptar);
    textoDesencriptado.value = resultado;
    vaciarMsjError();

});

botonDesencriptar.addEventListener("click", function(event){
    event.preventDefault();
    var textoADesencriptar = document.querySelector("#input-texto").value;
    var textoDesencriptado = document.querySelector("#msg");
    var validacionError = validarTexto(textoADesencriptar);
    if(validacionError.length>1){
        crearMsjError(validacionError);
        return;
    }
    var resultado = desencriptacion(textoADesencriptar);
    textoDesencriptado.value = resultado;
    vaciarMsjError();
});

botonCopiar.addEventListener("click", function(event){
    event.preventDefault();
    navigator.clipboard.writeText(document.querySelector("#msg").value);
})
  
