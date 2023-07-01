const $btn = document.querySelector(".submenu-toggle-button")
const submenu = document.querySelector(".submenu")
$btn.addEventListener("click", ()=>{
submenu.classList.toggle("open")
})