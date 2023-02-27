let respuestacompu=Math.random()*3;
let respuestausuario = prompt("Que eliges: piedra, papel o tijera");
if (respuestausuario == "piedra"){
    respuestausuario = 0;
}
else{
    if (respuestausuario == "papel"){
        respuestausuario = 1;
    }
    else{
        if (respuestausuario == "tijera"){
            respuestausuario = 2;
        }
        else{
            console.log("error, debe elegir piedra, papel o tijera")
            throw error
        }    
    }    
}    
if respuestausuario == respuestacompu {
console.log("Empate!!!");
}