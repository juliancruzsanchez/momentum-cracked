function loadBackgroundFromLocalStorage() {
  const bg = localStorage.getItem('background')
  if (bg !== "" || bg !== null) {
    $('.background-item')[0].setAttribute('style', `background-image: url(${bg})`)
  }
}

window.addPhotoFromURL = function() {
  localStorage.setItem('background', prompt('Enter URL to wallpaper'))
  loadBackgroundFromLocalStorage()
}

window.addEventListener("load", () => loadBackgroundFromLocalStorage())

let addPhotoFromURLInterval = null
addPhotoFromURLInterval = setInterval(() => {
  let elem = document.getElementById('addPhotoFromURL');
  if (elem) {
    elem.onclick = addPhotoFromURL
    clearInterval(addPhotoFromURLInterval)
  }
}, 1000)