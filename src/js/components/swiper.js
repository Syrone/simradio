import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

Swiper.use([Navigation, Pagination])

window.swiperInstances = new Map()

function getSwiperOptions(key, pagination, btnPrev, btnNext) {
  const options = {
    slidesPerView: 1,
    spaceBetween: 24,
  }

  switch (key) {
    case 'hero':
      Object.assign(options, {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 24,
      })
      break

    case 'store':
      Object.assign(options, {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 24,
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
      break

    case 'certificates':
      Object.assign(options, {
        slidesPerView: 'auto',
        spaceBetween: 32,
      })
      break

    case 'partners':
      Object.assign(options, {
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
      break
  }

  if (btnPrev && btnNext) {
    options.navigation = {
      nextEl: btnNext,
      prevEl: btnPrev,
    }
  }

  if (pagination) {
    options.pagination = {
      el: pagination,
      clickable: true,
    }
  }

  return options
}

document.querySelectorAll('[data-swiper]')?.forEach((container) => {
  const key = container.getAttribute('data-swiper')
  const swiperEl = container.querySelector('.swiper')
  if (!swiperEl) return

  const btnNext = container.querySelector('.swiper-button-next')
  const btnPrev = container.querySelector('.swiper-button-prev')
  const pagination = container.querySelector('.swiper-pagination')

  const options = getSwiperOptions(key, pagination, btnPrev, btnNext)
  const swiper = new Swiper(swiperEl, options)

  window.swiperInstances.set(container, swiper)
})
