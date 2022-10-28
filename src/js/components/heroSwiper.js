import Swiper, { Pagination, Autoplay, Keyboard, A11y, Navigation, Grid } from 'swiper';
Swiper.use([Pagination, Autoplay, Keyboard, A11y, Navigation, Grid]);

const heroSwiper = document.querySelector('.hero-swiper');
if (heroSwiper) {
  heroSwiper = new Swiper('.hero-swiper', {

  });
}
