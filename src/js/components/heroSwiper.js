import Swiper, { Autoplay, EffectFade } from 'swiper';
Swiper.use([Autoplay, EffectFade]);

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
