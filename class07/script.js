const name = "Vitor"
const littleName = name.toLowerCase()

const btn = document.querySelector(".btn")
console.log(btn.classList.add("blue"))
console.log(btn.classList)
btn.innerText = "Buy"
btn.addEventListener("click", () => console.log("click"))

// EXERCISES

// 01
// length, toUpperCasem replace

// 02
// className, removeChild, removeEventListener, id, innerHTML

// 03
/**
 * function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
}
 */
