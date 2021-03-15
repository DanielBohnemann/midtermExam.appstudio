

function calcAvgSquare(num1, num2, num3) {
    let sum = num1 + num2 + num3
    let avg = sum / 3
    let square = num1 ** 2
    let ans = avg * square
    return `The answer is ${ans}`
  }
  
let number1 = parseInt(prompt("Enter number 1: "))
let number2 = parseInt(prompt("Enter number 2: "))
let number3 = parseInt(prompt("Enter number 3: "))


let avgSquare = calcAvgSquare(number1, number2, number3)
console.log(avgSquare)
