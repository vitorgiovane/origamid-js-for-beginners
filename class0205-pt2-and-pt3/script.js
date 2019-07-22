function hi() {
  this.console.log("Hi!")
}

addEventListener("click", hi)

// Exercises

// 01
function isTruthy(value) {
  return !!value
}

// 02
console.log(isTruthy(""))

function perimeter(side) {
  return side * 4
}

console.log(perimeter(10))

// 03
function fullName(name, lastName) {
  return `${name} ${lastName}`
}

console.log(fullName("Vitor", "Giovane"))

// 04
function isPair(number) {
  if (number % 2 === 0) {
    return true
  }
  return false
}

console.log(isPair(10))

// 05
function verifyType(argument) {
  return typeof argument
}

console.log(verifyType("Vitor"))

// 06
function myNameWhenScroll() {
  addEventListener("scroll", function() {
    this.console.log("Vitor Giovane")
  })
}

myNameWhenScroll()

// 07
const totalOfCountries = 193
function notVisited(numberOfCountriesVisited) {
  return `Missing ${totalOfCountries -
    numberOfCountriesVisited} of ${totalOfCountries} countries.`
}

function visited(numberOfCountriesVisited) {
  return `Visited ${numberOfCountriesVisited} of ${totalOfCountries} countries.`
}
