// при нажатии на .user-header__icon классу .user-header__menu добавляется класс _active 
let user_icon = document.querySelector('.user-header__icon'); 
user_icon.addEventListener("click", function(e) {
   let user_menu = document.querySelector('.user-header__menu');
   user_menu.classList.toggle('_active');
});


// при нажатии в документе на все, кроме .user-header у класса .user-header__menu удаляется класс_active 
document.documentElement.addEventListener("click", function(e) {   
   if(!e.target.closest('.user-header')) {
      let user_menu = document.querySelector('.user-header__menu');
      user_menu.classList.remove('_active');
   }
});