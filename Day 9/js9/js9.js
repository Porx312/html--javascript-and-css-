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


/* console.log(rec.area());
console.log(sqr.area()); */


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
/* 
console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter()); */

/* 
60
40
143 */


/* * Determine the original side lengths and return an array:
* - The first element is the length of the shorter side
* - The second element is the length of the longer side
* 
* Parameter(s):
* literals: The tagged template literal's array of strings.
* expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
*/ 
function sides(literals, ...expressions) {
  let copyArr = [...expressions];
  let arr = [];

  let s1 = (copyArr[1] + Math.sqrt(copyArr[1] ** 2 - 16 * copyArr[0])) / 4;
  let s2 = (copyArr[1] - Math.sqrt(copyArr[1] ** 2 - 16 * copyArr[0])) / 4;

  arr.push(s1);
  arr.push(s2);

  const orderArr = arr.sort((a, b) => a - b);
  return orderArr;
}

/* sides("jp;a", 140, 48);
 */


function modifyArray(nums) {
  let newArr = []  
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] % 2 === 0) {
      newArr.push(nums[i] *2)
    } else{
    newArr.push(nums[i] * 3)
    }
  }
 return newArr
}
/* let arr = [1,2,3,4,5] */
/* modifyArray(arr) */
/* 
function biwidis(k,n){
  let obj = []
  for(let i = 1; i <= n; i++){
    if()
  }
  console.log(obj)
}

biwidis(1,9) */



function plusMinus(arr) {
  // Write your code here
  let negative  = 0
  let positive = 0
  let zero = 0
  for(let i = 0; i < arr.length; i++){
  if(Math.sign(arr[i]) === -1){
    negative++
  }else if(Math.sign(arr[i]) === 1){
    positive++
  }else{
  zero++;
  }
}
  positive /= arr.length
  negative /= arr.length
  zero /= arr.length
  console.log(positive)
  console.log(negative)
  console.log(zero)
}

/* plusMinus([-4, 3, -9, 0, 4, 1]) */


function staircase(n) {
  for (let i = 1; i <= n; i++) {
    let level = " ".repeat(n - i) + "#".repeat(i);
    console.log(level)
  }
}

/* console.log(staircase(4)); */


 