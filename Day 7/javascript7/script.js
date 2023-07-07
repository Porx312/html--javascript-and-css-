function vowelsAndConsonants(s) {
  for (let i = 0; i < s.length; i++) {
    if (!s[i].match(/[^aeiouAEIOU]/)) {
      console.log(s[i]);
    }
    if (s[i].match(/[^aeiouAEIOU]/)) {
      setTimeout(() => {
        console.log(s[i]);
      }, 0);
    }
  }
}

// Ejemplo de uso

// vowelsAndConsonants("javascriptloops")

function factorial(num) {
  let fact = 0;
  for (let i = num - 1; i > 0; i--) {
    fact = num *= i;
  }
  return fact;
}

factorial(4);

function main(radius) {
  // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
  const PI = Math.PI;
  // Print the area of the circle:
  let area = PI * radius * radius;
  console.log(area);
  // Print the perimeter of the circle:
  let perimeter = 2 * PI * radius;
  console.log(perimeter);
  try {
    // Attempt to redefine the value of constant variable PI
    PI = 0;
    // Attempt to print the value of PI
    console.log(PI);
  } catch (error) {
    console.error("You correctly declared 'PI' as a constant.");
  }
}
/* 
main(2.6) */

function getLetter(s) {
  let letter;
  // Write your code here

    switch (s[0]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        letter = "A";
        break;
      case "b":
      case "c":
      case "d":
      case "f":
      case "g":
        letter = "B";
        break;
      case "h":
      case "k":
      case "l":
      case "m":
        letter = "C";
        break;
      case "n":
      case "p":
      case "q":
      case "r":
      case "s":
      case "t":
      case "v":
      case "w":
      case "y":
      case "z":
        letter = "D";
        break;
      default:
    }
  
  console.log(letter);
}
/* 
getLetter("zdfgt");
 */

function getSecondLargest(nums) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      secondLargest = largest;
      largest = nums[i];
    }else if(nums[i] > secondLargest && nums[i] < largest) {
      secondLargest = nums[i]
    }
  
    
  }

  console.log(secondLargest);
}

getSecondLargest([2, 3, 6, 6, 5, 5, 7,8]);

