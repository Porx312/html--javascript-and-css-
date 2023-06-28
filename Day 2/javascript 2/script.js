/* La diferencia entre la suma de los cuadrados de los primeros cien números naturales y el cuadrado de la suma se puede calcular de manera similar al ejemplo anterior. 

La fórmula para la suma de los cuadrados de los primeros n números naturales es:

$$1^2 + 2^2 + \ldots + n^2 = \frac{n(n+1)(2n+1)}{6}.$$

Aplicando esta fórmula para n = 100, obtenemos la suma de los cuadrados de los primeros cien números naturales:

$$1^2 + 2^2 + \ldots + 100^2 = \frac{100(100+1)(2\cdot100+1)}{6} = 338350.$$

La fórmula para el cuadrado de la suma de los primeros n números naturales es:

$$(1 + 2 + \ldots + n)^2 = \left(\frac{n(n+1)}{2}\right)^2.$$

Aplicando esta fórmula para n = 100, obtenemos el cuadrado de la suma de los primeros cien números naturales:

$$(1 + 2 + \ldots + 100)^2 = \left(\frac{100(100+1)}{2}\right)^2 = 5050^2 = 25502500.$$

Finalmente, la diferencia entre la suma de los cuadrados y el cuadrado de la suma de los primeros cien números naturales es:

$$25502500 - 338350 = 25164150.$$ */

// Función para calcular la diferencia entre la suma de los cuadrados y el cuadrado de la suma
function calcularDiferencia(n) {
  // Calcular la suma de los cuadrados
  let sumaCuadrados = 0;
  for (let i = 1; i <= n; i++) {
    sumaCuadrados += i * i;
  }
  console.log(sumaCuadrados);
  // Calcular el cuadrado de la suma
  let suma = (n * (n + 1)) / 2;
  let cuadradoSuma = suma * suma;
  console.log(suma)
  console.log(cuadradoSuma);
  // Calcular la diferencia
  let diferencia = cuadradoSuma + sumaCuadrados;
  console.log(diferencia)
  return diferencia;
}

// Calcular la diferencia para n = 100
let diferencia = calcularDiferencia(100);

/* console.log("La diferencia entre la suma de los cuadrados y el cuadrado de la suma para los primeros 100 números naturales es: " + diferencia); */

/* <p>By listing the first six prime numbers: $2, 3, 5, 7, 11$, and $13$, we can see that the $6$th prime is $13$.</p>
<p>What is the $10\,001$st prime number?</p>
 */
// Función para encontrar el n-ésimo número primo
// Función para verificar si un número es primo
// Función para verificar si un número es primo
function esPrimo(numero) {
  if (numero <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}

// Función para encontrar el n-ésimo número primo
function encontrarPrimo(n) {
  let contador = 0;
  let numeroPrimo = 2;

  while (contador < n) {
    if (esPrimo(numeroPrimo)) {
      contador++;
    }
    if (contador === n) {
      return numeroPrimo;
    }

    numeroPrimo++;
  }
}

// Encontrar el 10,001º número primo
let numeroPrimo10001 = encontrarPrimo(10001);
/* 
console.log("El 10,001º número primo es: " + numeroPrimo10001); */


/* 
Para resolver este problema, puedes utilizar un enfoque de deslizamiento de ventana para calcular el producto de los dígitos adyacentes en el número de 1000 dígitos. Aquí tienes un ejemplo de cómo puedes hacerlo en JavaScript:
 */
const numberString = `
73167176531330624919225119674426574742355349194934
96983520312774506326239578318016984801869478851843
85861560789112949495459501737958331952853208805511
12540698747158523863050715693290963295227443043557
66896648950445244523161731856403098711121722383113
62229893423380308135336276614282806444486645238749
30358907296290491560440772390713810515859307960866
70172427121883998797908792274921901699720888093776
65727333001053367881220235421809751254540594752243
52584907711670556013604839586446706324415722155397
53697817977846174064955149290862569321978468622482
83972241375657056057490261407972968652414535100474
82166370484403199890008895243450658541227588666881
16427171479924442928230863465674813919123162824586
17866458359124566529476545682848912883142607690042
24219022671055626321111109370544217506941658960408
07198403850962455444362981230987879927244284909188
84580156166097919133875499200524063689912560717606
05886116467109405077541002256983155200055935729725
71636269561882670428252483600823257530420752963450
`.replace(/\s/g, ''); // Eliminar los espacios en blanco

function encontrarMayorProducto(numero, n) {
  let mayorProducto = 0;

  for (let i = 0; i <= numero.length - n; i++) {
    let producto = 1;
    for (let j = i; j < i + n; j++) {
      producto *= parseInt(numero[j]);
    }
    if (producto > mayorProducto) {
      mayorProducto = producto;
    }
  }
 
  return mayorProducto;
}

const n = 20; // Número de dígitos adyacentes
const mayorProducto = encontrarMayorProducto(numberString, n);

console.log("El mayor producto de " + n + " dígitos adyacentes es: " + mayorProducto);



function scrollToPosition() {
  window.scrollTo(0, 500);
}

function scrollByOffset() {
  window.scrollBy(100, -50);
}

function scrollToElement() {
  var targetElement = document.getElementById('target');
  targetElement.scrollIntoView(true);
}

