// local storage
// section storage

/* localStorage.setItem("iva",21)

let usuario = "marias"


localStorage.setItem("usuario",usuario)


let usuariosEnLocalStorage = localStorage.getItem("usuario")



console.log(usuariosEnLocalStorage) */

/* let ingreseSuNombre = prompt("ingrese su nombre","marias..") */

/* localStorage.setItem("user",ingreseSuNombre)
 */
/* let usuarioIngresadoEnLocalStorage = localStorage.getItem("user")


console.log(usuarioIngresadoEnLocalStorage) */


const usuarios = {
nombre:"carpi",
edad:28,
}
const users = JSON.stringify(usuarios)
localStorage.setItem("user", users)
const usuariosEnLocalStorage = localStorage.getItem("user")
const usuarioObj = JSON.parse(usuariosEnLocalStorage)
/* const objJSon = JSON.parse(users)

console.log(objJSon) */

console.log(usuarioObj)

localStorage.setItem("users",JSON.stringify(usuarios))

localStorage.setItem("users",JSON.stringify(usuarios))
const usuario = JSON.parse(localStorage.getItem("users"))



// array obj

const productos =[
{productos: "silla",precio:1500},
{productos: "sillon",precio:12500},
{productos: "mesa",precio:15020},
]


localStorage.setItem("productos",JSON.stringify(productos))
const productosEnlocalStorage = JSON.parse(localStorage.getItem("productos"))

console.log(productosEnlocalStorage[0].precio)



// ejemplo de dark mode

const $colorMode = document.querySelector(".color-mode")
const body = document.body

let darkMode = localStorage.getItem("dark-mode")

function activarDarkMode() {
  body.classList.add("dark-mode")
  localStorage.setItem("dark-mode","activado")
}

function desactivarDarkMode() {
body.classList.remove("dark-mode")
localStorage.setItem("dark-mode","desactivado")
}
if(darkMode=="activado"){
  activarDarkMode()
}else{
  desactivarDarkMode()
}
$colorMode.addEventListener("click",()=>{
  darkMode = localStorage.getItem("dark-mode")
  if(darkMode === "activado"){
    desactivarDarkMode()
  }else{
  activarDarkMode()
  }
})