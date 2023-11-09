function somPom () {
    document.querySelector('#som_tecla_pom').play();
    
}

const listaTeclado = document.querySelectorAll('.tecla');

listaTeclado[0].onclick = somPom;