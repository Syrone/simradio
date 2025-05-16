import { throttle } from '../functions/throttle.js'

function getHeaderOffset() {
  const header = document.querySelector('.header')
  return header ? header.offsetHeight : 0
}

// Плавный скролл по клику на header-nav-link, с учётом offcanvas

document.addEventListener('DOMContentLoaded', function() {
  var nav = document.querySelector('.header-nav')
  if (!nav) return
  let headerOffset = getHeaderOffset()
  window.addEventListener('resize', throttle(function() {
    headerOffset = getHeaderOffset()
  }, 100))
  nav.addEventListener('click', function(e) {
    var btn = e.target.closest('.header-nav-link[data-scrollto]')
    if (!btn) return
    var targetId = btn.getAttribute('data-scrollto')
    if (!targetId) return
    var target = document.getElementById(targetId)
    if (!target) return
    e.preventDefault()
    // Закрыть offcanvas, если nav внутри него
    var offcanvas = btn.closest('.offcanvas')
    if (offcanvas && window.bootstrap && window.bootstrap.Offcanvas) {
      var instance = window.bootstrap.Offcanvas.getInstance(offcanvas)
      if (instance) instance.hide()
    }
    setTimeout(function() {
      const targetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset
      window.scrollTo({ top: targetTop, behavior: 'smooth' })
    }, offcanvas ? 350 : 0)
  })
})
