const $listProduct = document.querySelector('.list-products')
fetch("./productos.json")
.then(response => response.json())
.then((data) => {
data.forEach((producto) => {
  const li = document.createElement('li');
  li.innerHTML = producto.nombre + " - $" + producto.precio
  $listProduct.append(li);
});
})