import { throttle } from '../functions/throttle.js'

function getHeaderOffset() {
  const header = document.querySelector('.header')
  return header ? header.offsetHeight : 0
}

// Плавный скролл по клику на header-nav-link, с учётом offcanvas

document.addEventListener('DOMContentLoaded', function () {
  let headerOffset = getHeaderOffset()

  window.addEventListener('resize', throttle(function () {
    headerOffset = getHeaderOffset()
  }, 100))

  document.addEventListener('click', function (e) {
    const btn = e.target.closest('[data-scrollto]')
    if (!btn) return

    const targetId = btn.getAttribute('data-scrollto')
    if (!targetId) return

    const target = document.getElementById(targetId)
    if (!target) return

    e.preventDefault()

    const offcanvas = btn.closest('.offcanvas')
    if (offcanvas && window.offcanvasInstances) {
      const instance = window.offcanvasInstances.get(offcanvas)
      if (instance) instance.hide()
    }

    setTimeout(function () {
      const targetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset - 24
      window.scrollTo({ top: targetTop, behavior: 'smooth' })
    }, offcanvas ? 350 : 0)
  })
})
