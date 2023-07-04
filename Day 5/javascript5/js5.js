function aVeryBigSum(ar) {
  // Write your code here
  let long = 0;
  for (let i = 0; i < ar.length; i++) {
    long += ar[i];
  }
  return long;
}

let array = [5, 1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
/* 
aVeryBigSum(array);

 */

function diagonalDifference(arr) {
  let n = arr.length;
  let sumDiagonal1 = 0;
  let sumDiagonal2 = 0;

  for (let i = 0; i < n; i++) {
    sumDiagonal1 += arr[i][i]; // Sumar elementos de la diagonal principal
    sumDiagonal2 += arr[i][n - 1 - i]; // Sumar elementos de la diagonal secundaria
  }

  return Math.abs(sumDiagonal1 - sumDiagonal2);
}

// Ejemplo de uso
let matriz = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];
/* let diferencia = diagonalDifference(matriz);
console.log(diferencia); // Imprime el resultado: 15 */



// flujo de eventos

const $divsEventos = document.querySelectorAll(".eventos-flujos div")



function flujoEventos(e){
console.log(`hola te saluda ${this.className} el click lo origino ${e.target.className}`)
}

$divsEventos.forEach((element)=>{
  // base de burbujas sin especificar el parametro o especifiandolo explicitamente con false
  // element.addEventListener("click", flujoEventos,false)
  // fase de captura activar a true
  element.addEventListener("click", flujoEventos,true)
})