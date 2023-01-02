new Swiper('._swiper_1', {
   // Стрелки
   navigation: {
      nextEl: '.control-main-slider__arrow_next',
      prevEl: '.control-main-slider__arrow_prew',
   },
   // Навигация
   // Буллеты, текущее положение, прогрессор
   pagination: {
      el: '.swiper-pagination',

      // Буллеты
      clickable: true,

      //    // Динамические буллеты
      //    dynamicBullets: false, 

      // // Кастомные буллеты ("цифры в кружочке")
      // renderBullet: function (index, className) {
      //    return '<span class="' + className + '">' + (index + 1) + '</span> '
      // },   

      // Фракция ("1/6")
      // type: 'fraction', 

      // Кастомный вывод фракций ("Фото 1 из 6")
      // renderFraction: function (currentClass, totalClass) {
      //    return 'Фото <span class="' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>'; 
      // },

      // Прогрессбар
      // type: 'progressbar'
   },
   // Скролл 
   /* scrollbar: {
      el: '.swiper-scrollbar',
      // Возможность перетаскивать скролл (не работает)
      draggable: true, 
   },*/

   // // Автовысота
   // autoHeight: true,

   // Количество слайдов для показа
   slidesPerView: 1,

   // Отступ между слайдами (не работает)
   spaceBetween: 0,

   // Активный слайд по центру
   centeredSlides: false,

   // Стартовый слайд (отсчет слайдов начинается с 0)
   initialSlide: 0,

   // Бесконечный слайдер
   loop: true,

   // Свободный режим 
   // freeMode: true, 

   // Автопрокрутка
   // autoplay: {
   //    // Пауза между прокруткой
   //    delay: 2000,
   //    // Закончить на последнем слайде
   //    stopOnLastSlide: false,
   //    // Отключить после ручного переключения
   //    disableOnInteraction: false,
   // },

   //  Скорость (плавность) переключения слайдов
   speed: 200,

   // Вертикальный слайдер 'vertical' (необходимо задать фиксированную высоту слайдера)
   direction: 'horizontal',

   // Эффекты переключения слайдов
   // Листание
   effect: 'slide',

   // // Смена прозрачности
   // effect: 'fade', 
   // // Дополнение к fade
   // fadeEffect: {
   //    crossFade: true
   // }, 

   // // Переворот
   // effect: 'flip',

   // // Дополнение к flip
   // flipEffect: {
   //    // Тень
   //    slideShadows: true,
   //    // Показ только активного слайда
   //    limitRotation: true, 
   // }

   // // Куб
   // effect: 'cube',
   // // Дополнение к cube
   // cubeEffect: {
   //    slideShadows: true,
   //    shadow: true,
   //    shadowOffset: 20,
   //    shadowScale: 0.94,
   // }



   breakpoints: {
      320: {
         slidesPerView: 1,
         autoHeight: true,
      },
      767: {
         slidesPerView: 1,
         autoHeight: false, 
      }
   } 


});