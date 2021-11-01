let botonArriba = document.querySelector('.gotop-container');
let pagina = document.querySelector('main');

pagina.onscroll = function () {
   if(this.scrollTop > 500 ){
      botonArriba.classList.add('show-boton-arriba');
   }else{
      botonArriba.classList.remove('show-boton-arriba');
   }
}
