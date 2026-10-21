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
let slide = document.querySelectorAll('.shrink-0')
let sliderNumber = 1;




right.addEventListener('click',()=>{

if(sliderNumber < slide.length){
   slide[0].parentElement.style.transform = `translateX(${sliderNumber * -1179}px)`;
sliderNumber++
}
else{
     slide[0].parentElement.style.transform = `translateX(${sliderNumber * 0}px)`;
sliderNumber = 0

}

})
//===========================
left.addEventListener('click', () => {
  sliderNumber--;

  if (sliderNumber < 1) {
    sliderNumber = slide.length;
  }

  slide[0].parentElement.style.transform =
    `translateX(-${(sliderNumber - 1) * 1179}px)`;
});


//===========
let two = document.querySelector('.two')
two.addEventListener('click',()=>{
if(sliderNumber == 1){
   slide[0].parentElement.style.transform = `translateX(${sliderNumber * -1179}px)`;

}else if(sliderNumber == 2){
   slide[0].parentElement.style.transform = `translateX(${sliderNumber * 0}px)`;

}
else if(sliderNumber == 3){

   slide[0].parentElement.style.transform = `translateX(${sliderNumber * -390}px)`;
}
})




//Slider End

// setInterval(()=>{
  
// if(sliderNumber < slide.length){
//    slide[0].parentElement.style.transform = `translateX(${sliderNumber * -1179}px)`;
// sliderNumber++
// }
// else{
//      slide[0].parentElement.style.transform = `translateX(${sliderNumber * 0}px)`;
// sliderNumber = 0

// }
// },1000)