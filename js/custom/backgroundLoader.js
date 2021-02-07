function BackgroundHandler() {
  return {
    getBackgroundSettings() {
      return new Promise((resolve, reject) => {
        chrome.storage.sync.get('background', chosenBackground => {
          resolve(chosenBackground.background)
        })
      })
    },
    getChosenCategory(settings) {
      return new Promise(async (resolve, reject) => {
        let bgSettings = settings ||  await this.getBackgroundSettings();
        let categories = await this.getCategories()
        let currentCategory = categories.filter(categories => {
          return categories.name == bgSettings.category
        })[0]
        resolve(currentCategory)
      })
    },
    renderBackground(path, target) {
      if (window.animatingWallpaper == true) {
        console.log(target)
        target.addClass('shake')
        setTimeout(() => target.removeClass('shake'), 750)
        return
      }
      window.animatingWallpaper = true
      $('.background')[0].style.backgroundImage = `url(${path})`
      setTimeout(() => window.animatingWallpaper = false, 750)
    },
    getBackgroundForDisplayMode(wallpaperName) {
      let fileName, category, wallpaperFiles;
      return new Promise(async (resolve, reject) => {
          category = await this.getChosenCategory()
          fileName =  category.wallpapers.filter(wallpaper => wallpaper.name == wallpaperName)[0].fileName
          resolve(`/${category.name}/${darkMode ? 'dark': 'light'}/${fileName}`)
        })
    },
    async renderChosenBackground(target) {
      this.getBackgroundSettings().then(async (bgSettings) => {
        if (bgSettings.isCustom) {
          this.renderBackground(bgSettings.path)
        } else {
          let fileName =  await this.getBackgroundForDisplayMode(bgSettings.wallpaperName);
          this.renderBackground("chrome-extension://hafdklmdpmklbehdigcpjgfplmkngmlf/backgrounds" + fileName, target)
        }        
      })
    },
    getCategories() {
      return new Promise((resolve, reject) => {
        var catReq = new XMLHttpRequest();
        catReq.addEventListener("load", function() {
          resolve(JSON.parse(this.responseText).categories)
        });
        catReq.open("GET", "chrome-extension://hafdklmdpmklbehdigcpjgfplmkngmlf/backgrounds/backgrounds.json");
        catReq.send();
      })
    }
  }
}
