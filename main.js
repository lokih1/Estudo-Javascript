function tocaSom(idTagAudio) {
  document.querySelector(idTagAudio).play();
}
const listaTeclado = document.querySelectorAll(".tecla");

let contador = 0;

while (contador < listaTeclado.length) {
  const tecla = listaTeclado[contador];
  const somTeclado = tecla.classList[1];

  const idSom = `#som_${somTeclado}`;
  console.log(somTeclado);

  tecla.onclick = function () {
    tocaSom(idSom);
  };

  contador = contador + 1;

  console.log(contador);
}
