function somPom() {
  document.querySelector("#som_tecla_pom").play();
}
const listaTeclado = document.querySelectorAll(".tecla");

let contador = 0;

while (contador < listaTeclado.length) {
  listaTeclado[contador].onclick = somPom;
  contador = contador + 1;

  console.log(contador);
}
