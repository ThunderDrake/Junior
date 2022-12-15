import Swiper, { Navigation, Pagination } from 'swiper';

const infoSlider = document.querySelector('.info__slider');

if(window.matchMedia("(max-width: 576px)").matches) {
  Swiper.use([Navigation, Pagination]);
  const swiper = new Swiper(infoSlider, {
    slidesPerView: 1.25,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}
