let addPhotoFromURLInterval = null,  uploadPhotoInterval = null

function loadBackgroundFromLocalStorage() {
  const bg = localStorage.getItem('background')
  if (bg !== "" || bg !== null) {
    $('.background-item')[0].setAttribute('style', `background-image: url(${bg})`)
  }
}

function addPhotoFromURL() {
  const url =  prompt('Enter URL to wallpaper')
  if (url.includes('http')) {
    localStorage.setItem('background', url)
  } else {
    alert('Invalid URL!')
    addPhotoFromURL()
  }
  loadBackgroundFromLocalStorage()
}

function settingsOpened() {
  addPhotoFromURLInterval = setInterval(() => {
    let elem = document.getElementById('addPhotoFromURL');
    if (elem) {
      elem.onclick = addPhotoFromURL
      clearInterval(addPhotoFromURLInterval)
    }
  }, 1000)
  
  
  uploadPhotoInterval = setInterval(() => {
    let elem = document.getElementById('uploadPhoto');
    if (elem) {
      elem.onclick = () => { document.getElementById('uploader').click()  }
      clearInterval(uploadPhotoInterval)
    }
  }, 1000)
}

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