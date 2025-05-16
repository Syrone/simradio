function initYMapsTabs() {
  var maps = document.querySelectorAll('.map')
  var addresses = [
    {
      coords: [55.860872, 37.466974],
      text: 'ул. Радиотехническая, д. 15, офис 203',
    },
    {
      coords: [55.860872, 37.466974],
      text: 'Ленинградское шоссе, 80, строение 1',
    },
    {
      coords: [56.838011, 60.597465],
      text: 'Екатеринбург',
    },
  ]
  maps.forEach(function (mapEl, i) {
    var map = new window.ymaps.Map(mapEl, {
      center: addresses[i] ? addresses[i].coords : [55.751574, 37.573856],
      zoom: 15,
      controls: [],
    })
    var placemark = new window.ymaps.Placemark(addresses[i] ? addresses[i].coords : [55.751574, 37.573856], {
      balloonContent: addresses[i] ? addresses[i].text : '',
      iconCaption: addresses[i] ? addresses[i].text : '',
    }, {
      preset: 'islands#redIcon',
    })
    map.geoObjects.add(placemark)
    map.container.fitToViewport()
    map.behaviors.disable('scrollZoom')
  })
}

if (window.ymaps) {
  window.ymaps.ready(initYMapsTabs)
} else {
  document.addEventListener('DOMContentLoaded', function () {
    if (window.ymaps) window.ymaps.ready(initYMapsTabs)
  })
}
