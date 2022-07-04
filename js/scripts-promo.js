// Menu responsivo

const toggleMenuElement = document.getElementById('toggle');
const mainMenuElement = document.getElementById('menu');

toggleMenuElement.addEventListener('click', ()=>{
    mainMenuElement.classList.toggle('menu-show');
    if (mainMenuElement.classList.contains('menu-show')){
        toggleMenuElement.setAttribute('aria-label', 'Cerrar menú');
    } else {
        toggleMenuElement.setAttribute('aria-label', 'Abrir menú');
    }
});

const menuItems = document.querySelectorAll('.menu a[href^="#"]');

menuItems.forEach(menuItems => {
    menuItems.addEventListener("click", function(){
        menu.classList.remove("menu-show");
    });
})

// Carrusel

const slider = document.querySelector('#slider');
let sliderSection = document.querySelectorAll('.slider-section');
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnIzq = document.querySelector('#btn-izq');
const btnDer = document.querySelector('#btn-der');


slider.insertAdjacentElement('afterbegin',sliderSectionLast);

function Next() {
    let sliderSectionFirst = document.querySelectorAll('.slider-section')[0];
    slider.marginLeft = "-200%";
     slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
         slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.marginLeft = "-100%";       
     }, 500);
 }

function Prev() {
    let sliderSection = document.querySelectorAll('.slider-section');
    let sliderSectionLast = sliderSection[sliderSection.length -1];
     slider.marginLeft = "0";
     slider.style.transition = "all 0.5s";
   setTimeout(function(){
        slider.style.transition = "none";
         slider.insertAdjacentElement('afterbegin',sliderSectionLast);
         slider.marginLeft = "-100%";       
     }, 500);
 }

 btnDer.addEventListener('click',function(){
     Next();
 });

 btnIzq.addEventListener('click',function(){
     Prev();
 });

setInterval(function(){
   Next();
},5000);
