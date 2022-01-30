function validarTexto(string){
    var caracteresValidos = "abcdefghijklmnopqrstuvwxyzñ "
    contieneCaracterInvalido = false;
    for(var i=0; i < string.length; i++){
        if(!caracteresValidos.includes(string[i])){
            contieneCaracterInvalido = true;
        }
    }
    if(contieneCaracterInvalido){
        return "Ingrese solamente minúsculas sin tilde";
    }else{
        return "";
    }
}

function crearMsjError(msjError){
    if(msjError.length > 0){
        var elementoError = document.querySelector("#msj-error");
        elementoError.textContent = msjError;
    }
}

function vaciarMsjError(){
    var mensajeError = document.querySelector("#msj-error");
    mensajeError.innerHTML = "";
}