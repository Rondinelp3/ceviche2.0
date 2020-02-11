var btnMenu1 = document.getElementById('btn-menu');
var nav = document.getElementById('nav');

btnMenu1.addEventListener('click',function(){
nav.classList.toggle('mostrar');
})

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

