//Cogemos el id del vídeo
let repro_video = document.getElementById("myVideo");

//Subir volumen.
function SubirVolumen(){
    //Si lo que recibimos es menor que 1
    if (repro_video.volume<1){
        //Se le suma al volumen 0.1
        repro_video.volume=repro_video.volume+0.1;
    }
}

// Bajar volumen.    
function BajarVolumen(){
    //Si lo que recibimos es mayor que 0
    if (repro_video.volume>0){
        //Se le resta a volumen 0.1
        repro_video.volume=repro_video.volume-0.1;
    }
}