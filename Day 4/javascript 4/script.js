

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
/* 
console.log(compareTriplets(alice, Bob)) */
function wrapping(gifts) {
  let giftsWrapping = []
   for(let i = 0; i < gifts.length; i++){
     giftsWrapping.push(`**\n*${gifts[i]}*\n**`)
   }
   return giftsWrapping
 }
 
let gifter = ["cat","dog","lion","sheep"]

// console.log(wrapping(gifter))


// Symbols




// let a = Symbol("id1")
// let b = Symbol("id2")
// console.log(typeof a)
// console.log(a)

/* const NOMBRE = Symbol();

const persona = {
  [NOMBRE]:"jhon",
  apellido: "apellido",
}

console.log(persona) */



const desaparecerText = document.querySelector("#hidden")
const text = document.querySelector(".text")
function desaparecer(){
text.textContent = ""
}

desaparecerText.addEventListener("click",desaparecer)


const ocultar = document.querySelector("#ocultar")

function meOculto(){
ocultar.style.display = "none"
}

ocultar.addEventListener("click",meOculto)



/* const $campoFutbol = document.querySelector(".camp")
const $ballon = document.querySelector(".ballon")

function moverBallon(event){
  console.log(event.clientX, event.clientY)
  $ballon.style.top = event.clientY + "px"
  $ballon.style.left = event.clientX + "px"
  $ballon.style.right = -event.clientX + "px"
}
$campoFutbol.addEventListener("click",moverBallon) */

