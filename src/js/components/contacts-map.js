function initYMapsTabs() {
  const maps = document.querySelectorAll('.map')
  const allAddresses = window.YMapsAddress

  maps.forEach(function (mapEl, i) {
    const mapAddresses = allAddresses[i] || []
    const center = mapAddresses[0]?.coords || [55.751574, 37.573856]

    const map = new window.ymaps.Map(mapEl, {
      center,
      zoom: 15,
      controls: [],
    })

    mapAddresses.forEach(addr => {
      const placemark = new window.ymaps.Placemark(addr.coords, {
        balloonContent: addr.text,
        iconCaption: addr.text,
      }, {
        preset: 'islands#redIcon',
      })

      map.geoObjects.add(placemark)
    })

    map.container.fitToViewport()
    map.behaviors.disable('scrollZoom')

    mapEl._yMapInstance = map
  })
}

if (window.ymaps) {
  window.ymaps.ready(initYMapsTabs)
} else {
  document.addEventListener('DOMContentLoaded', function () {
    if (window.ymaps) window.ymaps.ready(initYMapsTabs)
  })
}
