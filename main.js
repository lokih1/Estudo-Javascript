function tocaSom(idTagAudio) {
  document.querySelector(idTagAudio).play();
}

const listaTeclado = document.querySelectorAll(".tecla");

//CONDIÇÃO FOR
for (let contador = 0; contador < listaTeclado.length; contador++) {
  const tecla = listaTeclado[contador];
  const somTeclado = tecla.classList[1];

  const idSom = `#som_${somTeclado}`; //template string {somTeclado}

  console.log(somTeclado);

  tecla.onclick = function () {
    tocaSom(idSom);
  };
  tecla.onkeydown = function (e) {
    if (e.code === "Space" || e.code === "Enter") {
      tecla.classList.add("ativa");
    }
  };
  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };

  console.log(contador);
}

// CONDIÇÃO WHILE
// while (contador < listaTeclado.length) {
//   const tecla = listaTeclado[contador];
//   const somTeclado = tecla.classList[1];

//   const idSom = `#som_${somTeclado}`;
//   console.log(somTeclado);

//   tecla.onclick = function () {
//     tocaSom(idSom);
//   };

//   contador = contador + 1;

//   console.log(contador);
// }
