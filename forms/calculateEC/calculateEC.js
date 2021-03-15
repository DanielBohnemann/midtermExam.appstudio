
let choice = prompt("Would you like to average or raminder (a/r): ")

function calcAvgSquare(num1, num2, num3) {
    let sum = num1 + num2 + num3
    let avg = sum / 3
    let square = num1 ** 2
    let ans = avg * square
    return `The answer is ${ans}`
  }
  
function divideTwo(num1, num2) {
    let divide = Math.floor(num1 / num2)
    let remainder = num1 % num2
    return `The result of dividing ${num1} by ${num2} is ${divide} with a remainder of ${remainder}.`
  }
  

if (choice == 'a') {
  number1 = parseInt(prompt("Enter number 1: "))
  number2 = parseInt(prompt("Enter number 2: "))
  number3 = parseInt(prompt("Enter number 3: "))
  let avgSquare = calcAvgSquare(number1, number2, number3)
  console.log(avgSquare)
} else if (choice == 'r') {
  number1 = parseInt(prompt("Enter number 1: "))
  number2 = parseInt(prompt("Enter number 2: "))
  let dividing = divideTwo(number1, number2)
  alert(dividing)
} else {
  console.log("You did not enter a valid choice. Please enter a or r next time.")
  }





