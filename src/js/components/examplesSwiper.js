import Swiper, { Pagination, Keyboard, A11y, Navigation} from 'swiper';
Swiper.use([Pagination, Keyboard, A11y, Navigation]);

let exemplesSwiper = document.querySelector('.examples-swiper');
if (exemplesSwiper) {
  exemplesSwiper = new Swiper('.examples-swiper', {
    
  });
}
