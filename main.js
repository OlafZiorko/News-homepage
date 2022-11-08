let toggleMenu = document.querySelector(".toggle-menu");
let navigation = document.querySelector(".nav__wrapper");
let closeMenu = document.querySelector(".cross");

toggleMenu.addEventListener("click", showMenu);
closeMenu.addEventListener("click", showMenu);

function showMenu() {
  navigation.classList.toggle("open");
}
