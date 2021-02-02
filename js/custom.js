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

let uploadPhotoInterval = null
uploadPhotoInterval = setInterval(() => {
  let elem = document.getElementById('uploadPhoto');
  if (elem) {
    elem.onclick = () => { document.getElementById('uploader').click()  }
    clearInterval(uploadPhotoInterval)
  }
}, 1000)

document.getElementById('uploader').addEventListener('change', e => {
  let input = e.currentTarget
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      localStorage.setItem('background', e.target.result)
      loadBackgroundFromLocalStorage()
    };

    reader.readAsDataURL(input.files[0]);
}
})