let iconMenu = document.querySelector('.icon-menu');
let menuBody = document.querySelector('.menu__body');
iconMenu.addEventListener("click", function (e) {
   iconMenu.classList.toggle('_active');
   menuBody.classList.toggle('_active');
});

// при нажатии в документе на все, кроме .icon-menu у класса .menu__body и .icon-menu удаляется класс_active 
document.documentElement.addEventListener("click", function (e) {
   if (!e.target.closest('.icon-menu')) {
      iconMenu.classList.remove('_active');
      menuBody.classList.remove('_active');
   }
});