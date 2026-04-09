document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");
  const box = document.getElementById(".box");
  const colorButton = document.getElementById("changeColor");
  const toggleButton = document.getElementById("toggleImage");
  
  let toggled = false;
  toggleButton.addEventListener("click", () => {
    if (toggled) {
      gallery.src = "./assets/images/image1.png";
      toggled = false;
    } else {
      gallery.src = "./assets/images/pumpkin.png";
      toggled = true;
    }
  });
  
  console.log("Page loaded!");
});
