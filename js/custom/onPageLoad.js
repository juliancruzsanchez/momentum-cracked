window.addEventListener("load", () => {
  document.querySelector('[data-test="settings-toggle"]').addEventListener('click', settingsOpened)
  BackgroundHandler().renderChosenBackground()
  

window.darkMode = true

window.matchMedia('(prefers-color-scheme: dark)').matches
  
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    window.darkMode = event.matches
    BackgroundHandler().renderChosenBackground()
  })
})


