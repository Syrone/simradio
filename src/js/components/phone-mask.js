import IMask from 'imask'

document.addEventListener('DOMContentLoaded', function() {
  var telInputs = document.querySelectorAll('input[type="tel"]')
  telInputs.forEach(function(input) {
    IMask(input, {
      mask: '+{7} (000) 000-00-00',
      lazy: false,
      placeholderChar: '_',
    })
  })
})
