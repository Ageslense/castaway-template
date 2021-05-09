
document.querySelector('.menu-icon').addEventListener('click', function(){
   const menuTop = document.querySelector('.title-bar');
   const menuBottom = document.querySelector('.top-bar');

   menuTop.classList.toggle("show");
   menuBottom.classList.toggle("show");

})