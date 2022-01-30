
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
var vocales = ["a", "e", "i", "o", "u"];
var claves = ["ai", "enter", "imes", "ober", "ufat"];

function encriptacion(string){
    var stringEncriptado = "";
    for(var i = 0; i < string.length; i++){
        var bandera = false;
        for(var j = 0; j < vocales.length; j++){
            if(string[i] == vocales[j]){
                bandera = true;
                var indice = j;
                break;
            }
        }
        if (bandera){
            stringEncriptado += claves[indice];
        }else{
            stringEncriptado += string[i];
        }

    }
    return stringEncriptado;
}
/*
function desencriptación(string){
    var stringDesencriptado = "";
    //var bandera = false;
    for(var i = 0; i < string.length; i++){
        var bandera = false;
        for(var j = 0; j < claves.length; j++){
            if(string.slice(i, i + claves[j].length - 1) == claves[j]){
                bandera = true;
                var indice = j;
                break;
            }
        }
        if (bandera){
            i += claves[indice].length - 1;
        }
    }
    if (bandera){
        stringDesencriptado += vocales[j];
    }else{
        stringDesencriptado += string[i];
    }
    return stringDesencriptado;
}
*/


function desencriptacion(string){
    var stringDesencriptado = string;
    for (var k = 0; k < claves.length; k++){
        var clave = claves[k]
        var busca = new RegExp(clave, 'g');
        stringDesencriptado = stringDesencriptado.replace(busca, vocales[k]);
    }
    return stringDesencriptado;
}