/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
  navToggle.addEventListener("click", () =>{
    navMenu.classList.add('show-menu')
  })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
  navClose.addEventListener("click", () =>{
    navMenu.classList.remove('show-menu')
  })
}


/*=============== SHOW CART ===============*/
const cart = document.getElementById('cart'),
        cartShop = document.getElementById('cart-shop'),
        cartClose = document.getElementById('cart-close')

/*===== CART SHOW =====*/
/* Validate if constant exists */
if(cartShop){
  cartShop.addEventListener("click", () =>{
    cart.classList.add('show-cart')
  })
}

/*===== CART HIDDEN =====*/
/* Validate if constant exists */
if(cartClose){
  cartClose.addEventListener("click", () =>{
    cart.classList.remove('show-cart')
  })
}

/*=============== SHOW LOGIN ===============*/
const login = document.getElementById('login'),
        loginButton = document.getElementById('login-button'),
        loginClose = document.getElementById('login-close')

/*===== LOGIN SHOW =====*/
/* Validate if constant exists */
if(loginButton){
  loginButton.addEventListener("click", () =>{
    login.classList.add('show-login')
  })
}

/*===== LOGIN HIDDEN =====*/
/* Validate if constant exists */
if(loginClose){
  loginClose.addEventListener("click", () =>{
    login.classList.remove('show-login')
  })
}

/*=============== HOME SWIPER ===============*/
var homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop:'true',
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    autoplay: {
      delay:3500
    }
  });


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
  const header = document.getElementById('header')
  if(this.scrollY >= 30) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll',scrollHeader)


/*=============== NEW SWIPER ===============*/
var newSwiper = new Swiper(".new-swiper", {
  spaceBetween: 16,
  slidesPerView:"auto",
  loop:'true',
  centeredSlides: true,
  autoplay: {
    delay:5000
  }
});

/*=============== Category swiper ===============*/
var categorySwiper = new Swiper(".category-swiper", {
  slidesPerView: "auto",
  loop:'true',
  centeredSlides: true,
  autoplay: {
    delay:5000
  },
});


/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)

/*=============== LIGHT BOX ===============*/


/*=============== QUESTIONS ACCORDION ===============*/


/*=============== STYLE SWITCHER ===============*/