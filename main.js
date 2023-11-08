function somPom () {
    document.querySelector('#som_tecla_pom').play();
    
}
function somClap () {
    document.querySelector('#som_tecla_clap').play();
}

function somTim () {
    document.querySelector('#som_tecla_tim').play();
}
function somPuff () {
    document.querySelector('#som_tecla_puff').play();
}
function somSplash () {
    document.querySelector('#som_tecla_splash').play();
}
function somToim () {
    document.querySelector('#som_tecla_toim').play();
}
function somPsh () {
    document.querySelector('#som_tecla_psh').play();
}
function somTic () {
    document.querySelector('#som_tecla_tic').play();
}
function somTom () {
    document.querySelector('#som_tecla_tom').play();
}
document.querySelector('.tecla_pom').onclick = somPom;
document.querySelector('.tecla_clap').onclick = somClap;
document.querySelector('.tecla_tim').onclick = somTim;
document.querySelector('.tecla_puff').onclick = somPuff;
document.querySelector('.tecla_splash').onclick = somSplash;
document.querySelector('.tecla_toim').onclick = somToim;
document.querySelector('.tecla_psh').onclick = somPsh;
document.querySelector('.tecla_tic').onclick = somTic;
document.querySelector('.tecla_tom').onclick = somTom;
