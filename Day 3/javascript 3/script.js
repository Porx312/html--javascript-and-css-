var miElemento = document.getElementById('miElemento');
var resultado = document.getElementById('resultado');

function mostrarInformacion() {
  var rect = miElemento.getBoundingClientRect();

  resultado.innerHTML = 'Coordenadas del elemento:<br>' +
    'Top: ' + rect.top + 'px<br>' +
    'Left: ' + rect.left + 'px<br>' +
    'Right: ' + rect.right + 'px<br>' +
    'Bottom: ' + rect.bottom + 'px<br>' +
    'Width: ' + rect.width + 'px<br>' +
    'Height: ' + rect.height + 'px';
}

mostrarInformacion();


