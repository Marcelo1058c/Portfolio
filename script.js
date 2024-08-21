document.getElementById("menuToggle").addEventListener("click", function () {
  const navMenu = document.getElementById("navMenu")
  navMenu.classList.toggle("active")
})

/*function toggleMenu() {
  const navMenu = document.getElementById("navMenu")
  if (window.innerWidth < 769) {
    navMenu.style.display = "none"
  } else {
    navMenu.style.display = "block"
  }
}*/
window.addEventListener("load", toggleMenu)
window.addEventListener("resize", toggleMenu)
