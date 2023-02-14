// Реализация Бургера
$(document).ready(function () {
  $('.header-burger').click(function (event) {
    $('.header-burger,.header-menu').toggleClass('activ');
    $('body').toggleClass('lock');
  });
});

// Реализация Слайдера
const swiper = new Swiper('.swiper', {
  // direction: 'vertical',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    // dynamicBullets: true,
  },

  a11y: {
    paginationBulletMessage: 'Кнопка {{index}}',
  }
});

// Реализация Табов
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.working-header__text').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      console.log(path)

      document.querySelectorAll('.working-content').forEach(function (tabContent) {
        tabContent.classList.remove('working-content-active')
      })

      document.querySelector(`[data-target="${path}"]`).classList.add('working-content-active')
    });
  });
});

// Реализация Аккордеона
$(function () {
  $('.one').accordion();
});

// Реализация Аккордеона вручную
// $(document).ready(function () {
//   $('.question__link').click(function (event) {
//     if ($('.question').hasClass('one')) {
//       $('.question__link').not($(this)).removeClass('active');
//       $('.question__text').not($(this).next()).slideUp(300);
//     }
//     $(this).toggleClass('active').next().slideToggle(300);
//   });
// });

// Поворот иконки
// $(document).ready(function () {
//   $('.question__link').click(function (event) {
//     $('.question__link,.rotation').toggleClass('activ');
//   });
// });
