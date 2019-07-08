const title = document.querySelector("h1")
console.log(title)

console.log((title.innerText = "Título da página"))

const classList = title.classList
console.log(classList)

const className = title.className
console.log(className)

const handleClickInTitle = () => console.log("Title clicked!")
title.addEventListener("click", handleClickInTitle)

// Exercises
console.log("======================= EXERCISES =======================")

// 01
const actualPageURL = window.location.href
console.log("actualPageURL", actualPageURL)

// 02
const firstActiveElement = document.querySelector(".active")
console.log("firstActiveElement", firstActiveElement)

// 03
const languageOfNavigator = window.navigator.language
console.log("languageOfNavigator", languageOfNavigator)

// 04
const windowWidth = window.innerWidth
console.log("windowWidth", windowWidth)
