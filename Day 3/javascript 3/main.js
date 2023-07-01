/* 
let contador = 0

let inter = setInterval(() => {
  contador++
  console.log(contador)
},1000);
 */

const eventoFuturo = (res) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      res === true ? resolve("verdadero") : reject("faslso");
    });
  }, 2000);
};
const valor = true;

eventoFuturo(valor).then((response) => {
  console.log(response)
})
.catch((respon) => {console.log(respon);})
.finally(() => {})