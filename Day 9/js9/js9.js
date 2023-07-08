/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
  if(a <= -1){
    throw new Error("Negative Error")
  }
  if(a === 0){
    throw new Error("Zero Error")
  }
  return "YES"
}

try {
  let posi = isPositive(0)
console.log(posi)
}catch(e){
  console.log( e.message)
}


function Rectangle(a, b) {
  let obj = {
  length: a,
  width: b,
  perimeter: 2 * (a + b),
  area: a * b,
  }
  return console.log(obj)
}

// Rectangle(4,5)


function getCount(objects) {
  let count = 0
    for(let props in objects){
        if(objects[props]["x"] === objects[props]["y"]){
          count += props.length
        }
    }
  console.log(count)
}

obj = [
{x: 1, y: 1},
{x: 2, y: 3},
{x: 3, y: 3},
{x: 3, y: 4},
{x: 4, y: 5},
]
// getCount(obj)