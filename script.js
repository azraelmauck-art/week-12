document.addEventListener("DOMContentLoaded", () => {
const gallery = document.getElementById("gallery"); const box = document.querySelector(".box");
const colorButton = document.getElementById("changeColor"); const toggleButton = document.getElementById("toggleImage");
colorButton.addEventListener("click", ()
box.style.backgroundColor =
=> {
box.style.backgroundColor === "blue" ? "red" : "blue";
  colorButton.addEventListener("click", () => {
    bx.style.backgroundColor = "blue"; 
  });
 
let toggled = false;
toggleButton.addEventListener("click", () => {
if (toggled) {
gallery.src = "./assets/images/image1.png";
toggled = false;
} else {
gallery.src = "./assets/images/pumpkin.png"; // wrong filename
toggled = true;
console.log("Page loaded!"');
