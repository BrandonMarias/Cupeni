let botonMenu = document.querySelector("#boton-menu");
let menuMobil = document.querySelector("#menu-mobil");
let mainSlides = document.querySelector("main");

botonMenu.addEventListener("click", function (){
   menuMobil.classList.toggle("menu-active");
   mainSlides.classList.toggle("overflow-y");
});