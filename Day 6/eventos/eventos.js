// eventos

// eventos del mouse


const $alerta = document.querySelector("#alerta");

$alerta.addEventListener("click",mostrarAlerta)

 function mostrarAlerta() {
  alert("hola mundio")
  } 
  const $darkModeElements = document.querySelectorAll("[data-dark='desactive']");
  const btnDark = document.querySelector("#color-mode");
  
  function darkMode() {
    $darkModeElements.forEach((element) => {
      if (element.getAttribute("data-dark") === "desactive") {
        element.setAttribute("data-dark", "dark-mode");
      } else {
        element.setAttribute("data-dark", "desactive");
      }
    });
  }
  
  btnDark.addEventListener("click", darkMode);
  