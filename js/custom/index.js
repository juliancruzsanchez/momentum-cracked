window.settingsPageInfo = {
  currentTab: "General"
}
window.animatingWallpaper = false;
let addPhotoFromURLInterval = null,  uploadPhotoInterval = null, buttonHandlerInterval = null

function addPhotoFromURL() {
  const url =  prompt('Enter URL to wallpaper')
  if (url.includes('http')) {
    chrome.storage.sync.set({background: {path: url, isCustom: true}})
  } else {
    alert('Invalid URL!')
    addPhotoFromURL()
  }
  BackgroundHandler().renderChosenBackground()
}


function settingsOpened() {
  buttonHandlerInterval = setInterval(() => {
    if (document.querySelector('.main-nav-item')) {
      clearInterval(buttonHandlerInterval)
      document.querySelectorAll('.main-nav-item').forEach(element => {
        element.addEventListener('click', e => {
          if (e.target.getAttribute('class').includes('active')) return

          setTimeout(() => {
            if (e.target.innerText == 'Photos') {
              BackgroundHandler().getCategories().then(categories => {
              categories.forEach(category => {
                const categoryView = document.createElement('div')
                categoryView.innerHTML = `<h3>${category.name}</h3><div class="categoryImages"></div>`
                category.wallpapers.forEach(wallpaper => {  
                  const image = document.createElement('div')
                  image.style.backgroundImage = `url(/backgrounds/${category.name}/${darkMode ? 'dark' : 'light'}/${wallpaper.fileName})`
                  image.addEventListener('click', e => {
                    chrome.storage.sync.set({background: {category: category.name, wallpaperName: wallpaper.name}})
                    BackgroundHandler().renderChosenBackground(e.target)
                  })
                  categoryView.querySelector('.categoryImages').appendChild(image)
                })
                document.querySelector('.backgroundImageTiles').appendChild(categoryView)
              })
              })
            }
          }, 100)
      
        })
      })

    }
  }, 100)

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