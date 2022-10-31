import Swiper, { Pagination, Autoplay, Keyboard, A11y, Navigation, EffectFade } from 'swiper';
Swiper.use([Pagination, Autoplay, Keyboard, A11y, Navigation, EffectFade]);

let heroSwiper = document.querySelector('.hero-swiper');
if (heroSwiper) {
  heroSwiper = new Swiper('.hero-swiper', {
    allowTouchMove: false,
    loop: true,
    effect: 'fade',
    speed: 8000,
    autoplay: {
      delay: 5000
    },
  });
}
