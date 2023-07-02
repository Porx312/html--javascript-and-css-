

function simpleArraySum(ar) {
  // Write your code here
  let sumarr = 0
  for(let i = 0; i < ar.length; i++) {
  let arr = ar[0]
  for(let j = 1; j < ar.length; j++){
    sumarr = arr += ar[j]
  }
  }
  return sumarr
}
let arr = [1,2,3]
/* simpleArraySum(arr) */


function compareTriplets(a, b) {
let puntajeFinal = []
let puntajeALice = 0
let puntajeBob = 0
for(let i = 0; i < a.length; i++) {
    if(a[i] > b[i]) {
      puntajeALice+=1
    }else if(a[i] < b[i]) {
    puntajeBob+=1
  }
}
puntajeFinal.push(puntajeALice,puntajeBob)
return puntajeFinal
}


let alice = [10,2,1]
let Bob = [5,11,1]

console.log(compareTriplets(alice, Bob))