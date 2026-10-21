let cart = document.querySelector('.cart')
let bar = document.querySelector('.bar')
let cartRemove = document.querySelector('.cartRemove')
cart.addEventListener('click',()=>{
    bar.style.transform = "translateX(100%)";
})
cartRemove.addEventListener('click',()=>{
        bar.style.transform = "translateX(-100%)";

})
///=========================
// Menu Part Start 
let burger = document.querySelector('.burger')
let menu = document.querySelector('.menu')
let spans = document.querySelectorAll('.burger span');


burger.addEventListener('click', () => {
    menu.classList.toggle('hidden')
    menu.classList.toggle('absolute')
    menu.style.padding = " 40px"
    menu.style.marginTop = " 40px"
    menu.style.backgroundColor = " black"


 if(burger.classList.contains('active')){
    spans[0].style.transform = 'translateY(0) rotate(0deg)';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'translateY(0) rotate(0deg)';
        burger.classList.remove('active');


 }else{
       spans[0].style.transform = 'translateY(8px) rotate(45deg)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'translateY(-8px) rotate(-45deg)';
    burger.classList.add('active');


 }

});
//Menu Part End
// Menu Active  



let MainUl = document.querySelectorAll('.menu li ');




  MainUl.forEach((link) => {

  link.addEventListener('click', (e) => {
    e.preventDefault();
       

    MainUl.forEach((item) => {
      item.classList.remove('after:w-full');
      item.classList.add('after:w-0');
    });

    link.classList.replace('after:w-0', 'after:w-full');
  });
 

  });


//Menu Active End

//Slider Start
let right = document.querySelector('.right')
let left = document.querySelector('.left')
let slide = document.querySelector('.slide')

right.addEventListener('click',()=>{
slide.style.transform = 'translateX(-1170px)'
})

//Slider End