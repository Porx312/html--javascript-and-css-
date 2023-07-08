// /*
//  * Complete the isPositive function.
//  * If 'a' is positive, return "YES".
//  * If 'a' is 0, throw an Error with the message "Zero Error"
//  * If 'a' is negative, throw an Error with the message "Negative Error"
//  */
// function isPositive(a) {
//   if(a <= -1){
//     throw new Error("Negative Error")
//   }
//   if(a === 0){
//     throw new Error("Zero Error")
//   }
//   return "YES"
// }

// try {
//   let posi = isPositive(0)
// console.log(posi)
// }catch(e){
//   console.log( e.message)
// }


// function Rectangle(a, b) {
//   let obj = {
//   length: a,
//   width: b,
//   perimeter: 2 * (a + b),
//   area: a * b,
//   }
//   return console.log(obj)
// }

// // Rectangle(4,5)


// function getCount(objects) {
//   let count = 0
//     for(let props in objects){
//         if(objects[props]["x"] === objects[props]["y"]){
//           count += props.length
//         }
//     }
//   console.log(count)
// }

/* obj = [
{x: 1, y: 1},
{x: 2, y: 3},
{x: 3, y: 3},
{x: 3, y: 4},
{x: 4, y: 5},
] */
// getCount(obj)

class Rectangle {
  constructor(w, h) {
      this.w = w;
      this.h = h;
  }
}
Rectangle.prototype.area = function() {
      if(this.h === undefined) {
      return this.w * this.w
      }

      return this.w * this.h
};
/*
*  Write code that adds an 'area' method to the Rectangle class' prototype
*/

/*
* Create a Square class that inherits from Rectangle and implement its class constructor
*/
class Square extends Rectangle{
constructor(w,h){
  super(w,h)
}
}


const rec = new Rectangle(3,4)
const sqr = new Square(3)


console.log(rec.area());
console.log(sqr.area());


const btnId = "btn";
const $btnIncrement = document.querySelector(".btn")
let count = 0
function increment() {
  count++
  $btnIncrement.innerText = `${count}`
  console.log("Hola");
}

$btnIncrement.addEventListener("click", increment);

class Polygon{
constructor(m){
  this.m = m;
}
perimeter(){
  let arr = [...this.m]
  let perimeterTotal = arr[0]
  for(let i = 1; i < arr.length; i++){
  perimeterTotal += arr[i]
  }
 return perimeterTotal
}
}
const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());

/* 
60
40
143 */