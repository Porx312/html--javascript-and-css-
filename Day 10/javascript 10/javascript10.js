let weekDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let now = new Date();
let dayIndex = now.getDay();
let day = weekDay[dayIndex];
/* 
console.log(day);
 */
function miniMaxSum(arr) {
  function verificarIgualdad(array) {
    const primerElemento = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] !== primerElemento) {
        return false; 
      }
    }
    return true; 
  }
  
  if (verificarIgualdad(arr)) {
    let sumarr = arr;
    let arrequal = sumarr.reduce(function (total, number) {
      return total + number -1;
    }, 0);
    return `${arrequal} ${arrequal}`;
  }

  let maxNumber = Math.max(...arr);
  let minNumber = Math.min(...arr);
  let maxArr = arr.filter(function (number) {
    return number !== maxNumber;
  });
  let minArr = arr.filter(function (number) {
    return number !== minNumber;
  });

  let sumMax = maxArr.reduce(function (total, number) {
    return total + number;
  }, 0);
  let sumMin = minArr.reduce(function (total, number) {
    return total + number;
  }, 0);

  return `${sumMax} ${sumMin}`;
}

console.log(miniMaxSum([5, 5, 5, 5,5]));
console.log(miniMaxSum([1, 2, 3, 4, 5]));
