"use strict"

// Exercises

// 01
/*
  Pois no console log há:
  - a palavra reservada "var" sendo passada como parâmetro,
  - as variáveis marca e portas que apenas existem no escopo de bloco anterior.
*/

// 02
const portionAndDivisor = 2
const sumTwo = portion => portion + portionAndDivisor
const divideByTwo = dividend => {
  return dividend / portionAndDivisor
}
console.log("sumTwo", sumTwo(4))
console.log("divideByTwo", divideByTwo(6))

// 03
var number = 50

for (let number = 0; number < 10; number++) {
  console.log("number", number)
}
console.log("outerNumber", number)

const total = 10 * number
console.log("total", total)
