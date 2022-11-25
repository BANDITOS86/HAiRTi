import Swiper, { Pagination, Keyboard, A11y, Navigation} from 'swiper';
Swiper.use([Pagination, Keyboard, A11y, Navigation]);

let exemplesSwiper = document.querySelector('.examples-swiper');
if (exemplesSwiper) {
  exemplesSwiper = new Swiper('.examples-swiper', {
    spaceBetween: 30,
    slidesPerView: 1,
    navigation: {
      nextEl: ".examples__btn-next",
      prevEl: ".examples__btn-prev",
    },
  });
}
