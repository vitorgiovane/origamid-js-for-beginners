const consoles = ["PS4", "Xbox"]

const lastConsole = consoles.pop()
console.log(lastConsole)
consoles.push("3DS")
console.log(consoles)

// Exercises

// 01
const yearsBrazilWonAWorldCup = ["1959", "1962", "1970", "1994", "2002"]

// 02
yearsBrazilWonAWorldCup.map(year =>
  console.log(`The Brazil won the World Cup in ${year}.`)
)

// 03
const fruits = ["banana", "apple", "pear", "grape", "watermelon"]
for (i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
  if (fruits[i] === "pear") break
}

// 04
const lastFruit = fruits[fruits.length - 1]
console.log("The last fruit is ", lastFruit)
