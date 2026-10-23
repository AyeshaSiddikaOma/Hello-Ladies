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





setInterval(()=>{
  
if(sliderNumber < slide.length){
   slide[0].parentElement.style.transform = `translateX(${sliderNumber * -1179}px)`;
sliderNumber++
}
else{
     slide[0].parentElement.style.transform = `translateX(${sliderNumber * 0}px)`;
sliderNumber = 0

}
},5000)



//Slider End

// Count Down Start

let years = document.querySelector('#years')
let months = document.querySelector('#months')
let days = document.querySelector('#days')
let hours = document.querySelector('#hours')
let minutes = document.querySelector('#minutes')
let seconds = document.querySelector('#seconds')


setInterval(() => {
   let currentDate = new Date()
   let targetDate = new Date(2027,9,26,12,30)
let diff =  Number(targetDate) - Number(currentDate) 
console.log(diff)

let  bochor =  targetDate.getFullYear()- currentDate.getFullYear()
let  mas =  targetDate.getMonth()- currentDate.getMonth()
let  din =  targetDate.getDate()- currentDate.getDate()
console.log(bochor)
console.log(mas)
console.log(din)

  if (mas < 0) {
    bochor--;
    mas += 12;
  }

  if (din < 0) {
    mas--;
    din += new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();
  }


let ghonta =Math.floor(diff / (1000 * 60 * 60) ) % 24;
let min =Math.floor(diff / (1000 * 60) ) % 60;
let sec =Math.floor(diff / 1000) % 60;

seconds.innerHTML = `${sec}`
minutes.innerHTML = `${min}`
hours.innerHTML = `${ghonta}`
days.innerHTML = `${din}`
months.innerHTML = `${mas}`
years.innerHTML = `${bochor}`




}, 1000);
//============================


//====================================
//=============================


let input = document.querySelector('.input')

let banner = document.querySelector('.banner');
let count = document.querySelector('.count');
input.addEventListener('input',()=>{
    banner.style.display = 'none';
  count.style.display = 'none';
  let products = document.querySelectorAll('.products > div')
  products.forEach( (box)=>{
  let name = box.querySelector('h2').innerText.toLowerCase()
  if (name.includes(input.value.toLowerCase())) {
  box.style.display = 'block';
} else {
  box.style.display = 'none';
}
    
  } )
})






//===============
let products = document.querySelector('.products')

async function getData(){
  let response =await fetch("https://dummyjson.com/products")
  let data = await response.json()
  data.products.forEach(  (item)=>{
console.log(item.title)

products.innerHTML += `  
  
<div class="w-full   rounded-xl overflow-hidden shadow-lg border mt-5 border-gray-200">

  <!-- Product Image -->
  <img src="${item.thumbnail}"
       alt="Product"
       class="w-full h-55 object-cover">

  <!-- Product Details -->
  <div class="p-5">

    <h2 class="text-xl font-bold text-yellow">
      ${item.title}
    </h2>

    <p class="text-yellow text-sm mt-2">
 ${item.description}    </p>

    <p class="text-2xl font-bold text-pink-300 mt-3">
   ${item.price}
    </p>

    <button class="w-full mt-4 bg-pink-300 text-dark border-2 border-pink-300
                   py-3 rounded-lg font-semibold
                   hover:bg-transparent hover:text-yellow transition-all duration-300 cartBtn"  >
      Add to Cart
    </button>

  </div>
</div>

`

  // Add to Cart event

let cartBtn = document.querySelectorAll('.cartBtn')
console.log(cartBtn)

  } )
}
getData()