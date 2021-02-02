window.addEventListener("load", () => {
  document.querySelector('[data-test="settings-toggle"]').addEventListener('click', settingsOpened)
  loadBackgroundFromLocalStorage()
})
