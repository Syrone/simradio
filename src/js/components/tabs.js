function initTabs() {
  document.querySelectorAll('[data-tabs]').forEach(tabsBlock => {
    const navs = tabsBlock.querySelectorAll('[data-tabs-nav]')
    const contents = tabsBlock.querySelectorAll('[data-tabs-content]')
    if (!navs.length || !contents.length) return

    // Собираем все кнопки табов
    const buttons = Array.from(navs).flatMap(nav => Array.from(nav.children).filter(el => el.tagName === 'BUTTON'))
    if (!buttons.length) return

    // При клике по кнопке таба
    buttons.forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        // Активируем только нужный таб во всех nav
        navs.forEach(nav => {
          Array.from(nav.children).forEach((b, i) => {
            b.classList.toggle('is-active', i === idx)
          })
        })
        // Активируем только нужный контент во всех content
        contents.forEach(content => {
          Array.from(content.children).forEach((pane, i) => {
            pane.classList.toggle('tabs__pane--active', i === idx)
          })
        })
      })
    })
    // Активируем первый таб по умолчанию
    buttons[0].click()
  })
}

initTabs()
