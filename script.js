document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    slidesPerView: 1,
    mousewheel: true,
    keyboard: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});
