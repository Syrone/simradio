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

document.querySelectorAll('.certificates-swiper')?.forEach(container => {
  const swiperEl = container.querySelector('.swiper')

  const swiper = new Swiper(swiperEl, {
    slidesPerView: 'auto',
    spaceBetween: 32,
  })
})
document.querySelectorAll('.partners-swiper')?.forEach(container => {
  const swiperEl = container.querySelector('.swiper')

  const swiper = new Swiper(swiperEl, {
    slidesPerView: 4,
    spaceBetween: 32,

    breakpoints: {
      0: {
        slidesPerView: 2.5,
        spaceBetween: 48,
      },
      576: {
        slidesPerView: 3,
        spaceBetween: 48,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 32,
      },
    },
  })
})
