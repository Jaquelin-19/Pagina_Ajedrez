let movimiento = document.querySelector(".mov")
let movInd = document.querySelectorAll(".contenido")
let contador = 1;
let width = movInd[0].clientWidth;
let intervalo = 4000;

setInterval(function(){
    movimientos();
},intervalo);

function movimientos(){
    movimiento.style.transform = "translate("+(-width*contador)+"px)";
    movimiento.style.transition = "transform 1s";
    contador++;

    if(contador == movInd.length){
        setTimeout(function(){
            movimiento.style.transform = "translate(0px)";
            movimiento.style.transition = "transform 0s";
            contador=1;
        },1000)
    }

}