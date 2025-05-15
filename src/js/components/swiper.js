import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

Swiper.use([Navigation, Pagination])

document.querySelectorAll('.hero-swiper')?.forEach(container => {
  const swiperEl = container.querySelector('.swiper')
  const btnNext = container.querySelector('.swiper-button-next')
  const btnPrev = container.querySelector('.swiper-button-prev')
  const pagination = container.querySelector('.swiper-pagination')

  const swiper = new Swiper(swiperEl, {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 24,
    navigation: {
      nextEl: btnNext,
      prevEl: btnPrev,
    },
    pagination: {
      el: pagination,
      clickable: true,
    },
  })
})

document.querySelectorAll('.store-item')?.forEach(container => {
  const swiperEl = container.querySelector('.swiper')
  const btnNext = container.querySelector('.swiper-button-next')
  const btnPrev = container.querySelector('.swiper-button-prev')

  const swiper = new Swiper(swiperEl, {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 24,
    navigation: {
      nextEl: btnNext,
      prevEl: btnPrev,
    },
    breakpoints: {
      0: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 24,
      },
    },
  })
})
