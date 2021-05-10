
document.querySelector('.menu-icon').addEventListener('click', function(){
   const menuTop = document.querySelector('.title-bar');
   const menuBottom = document.querySelector('.top-bar');

   menuTop.classList.toggle("show");
   menuBottom.classList.toggle("show");

})

window.addEventListener('scroll', function(e){
   let scrollPosition = window.scrollY;
   let secondaryNavbar = document.querySelector('#responsive-menu');
   
   if( scrollPosition > 1000 ){
      secondaryNavbar.classList.add('show-navbar');
   }

   if( scrollPosition > 1100 ){
      secondaryNavbar.classList.add('show-navbar-done');
   }

   if( scrollPosition < 1000 ){
      secondaryNavbar.classList.remove('show-navbar', 'show-navbar-done');
   }
})