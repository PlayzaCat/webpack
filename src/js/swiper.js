import Swiper, { Navigation, Pagination } from 'swiper'
Swiper.use([Navigation, Pagination])
import 'swiper/swiper-bundle'
import 'swiper/modules/pagination/pagination.scss'

const swiperOne = new Swiper('.mySwiperOne', {
  modules: [Navigation, Pagination],
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination1',
    clickable: true
  }
})

const swiperTwo = new Swiper('.mySwiperTwo', {
  modules: [Navigation, Pagination],
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 50,
  pagination: {
    el: '.swiper-pagination2',
    clickable: true
  }
})

const swiperThree = new Swiper('.mySwiperThree', {
  modules: [Navigation, Pagination],
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 50,
  pagination: {
    el: '.swiper-pagination3',
    clickable: true
  }
})
