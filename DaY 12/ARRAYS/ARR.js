// arra
// declarando nuestro primer arr
const productis = ["sillon", "silla", "sofa", "ropero"];

// splice eliminar, agregar o editar arr

productis.splice(0, 1, "pipipi");
console.log(productis);
productis.splice(1, 2);
console.log(productis);

const join = productis.join("*");
console.log(join);

productis.slice(0, 1);
console.log(productis);
const productos = ["jose", "enrique", "porx"];
console.log(productos.indexOf("jose"));
console.log(productos.includes("jose"));
