var fn_addin = function (o, p, t) {
  var s = s || {};
  (s.styles = s.styles || {}),
      (s.commands = s.commands || {}),
      (s.dependencies = t || s.dependencies || {}),
      (s.styles.style = function () {}),
      (s.views = s.views || {}),
      (s.collect = s.collect || {}),
      (s.models = s.models || {}),
      (s.templates = s.templates || {}),
      (s.info = { addin: "D52F5584-5033-4A16-866F-E97C7D7AC826", id: "settings_backgrounds", dependencies: ["settings"], commands: ["background.custom.uploadfiles", "settings.panels.backgrounds"] }),
      o.console.log(o.elapsed() + ": " + s.info.id + " started"),
      (s.templates = s.templates || {}),
      (s.templates.custom = Handlebars.template({
          compiler: [6, ">= 2.0.0-beta.1"],
          main: function (t, e, i, s) {
              return `
              <div class="cracked-setBackgroundWrapper">
                <span class="button button-choose fake-file-input list-add-button" id="addPhotoFromURL">+ Add Photo From URL</span>
                <span class="button button-choose fake-file-input list-add-button" id="uploadPhoto">+ Upload Photo</span>
                <div class="backgroundImageTiles">

                </div>
              </div>`;
          },
          useData: !0,
      })),
      (s.templates.detailCustom = Handlebars.template({
          compiler: [6, ">= 2.0.0-beta.1"],
          main: function (t, e, i, s) {
              var n,
                  a = e.helperMissing,
                  o = "function",
                  l = this.escapeExpression;
              return (
                  '<div class="pop-body settings-detail settings-detail-background">\n\t<div class="settings-detail-header">\n\t\t<span class="icon-wrapper back" title="Back"><i class="icon icon-left"></i></span>\n\t\t<h3>Edit Photo</h3>\n\t</div>\n\n\t<div class="settings-detail-body">\n\t\t<form class="settings-background-edit">\n\t\t\t<div class="image" align="center">\n\t\t\t\t<img class="img-uploaded" align="center" alt="Uploaded Image"/>\n\t\t\t</div>\n\n\t\t\t<h4>Photo Info <span class="optional">Optional</span></h4>\n\n\t\t\t<div class="input-group">\n\t\t\t\t<label>Title</label>\n\t\t\t\t<input type="text" name="title" class="input-title" placeholder="e.g. Location" value="' +
                  l(typeof (n = null != (n = e.title || (null != t ? t.title : t)) ? n : a) == o ? n.call(t, { name: "title", hash: {}, data: s }) : n) +
                  '" maxlength="' +
                  l(typeof (n = null != (n = e.inputLengthMaxHtml || (null != t ? t.inputLengthMaxHtml : t)) ? n : a) == o ? n.call(t, { name: "inputLengthMaxHtml", hash: {}, data: s }) : n) +
                  '" data-test="detail-custom-input-title">\n\t\t\t</div>\n\n\t\t\t<div class="input-group">\n\t\t\t\t<label>Source</label>\n\t\t\t\t<input type="text" name="source" class="input-source" placeholder="e.g. Photographer Name" value="' +
                  l(typeof (n = null != (n = e.source || (null != t ? t.source : t)) ? n : a) == o ? n.call(t, { name: "source", hash: {}, data: s }) : n) +
                  '" maxlength="' +
                  l(typeof (n = null != (n = e.inputLengthMaxHtml || (null != t ? t.inputLengthMaxHtml : t)) ? n : a) == o ? n.call(t, { name: "inputLengthMaxHtml", hash: {}, data: s }) : n) +
                  '" data-test="detail-custom-input-source">\n\t\t\t</div>\n\n\t\t\t<div class="actions">\x3c!--\n\t\t\t\t--\x3e<span class="button submit"><i class="loading-icon"></i><i class="error-icon" title="Trouble connecting... Click to retry">!</i>Save</span>\x3c!--\n\t\t\t\t--\x3e<span class="button button-secondary cancel">Cancel</span>\x3c!--\n\t\t\t\t--\x3e<div class="u--right">\x3c!--\n\t\t\t\t\t--\x3e<span class="actions-right button button-secondary button-set-active">Set Active</span>\x3c!--\n\t\t\t\t\t--\x3e<span class="actions-right button button-secondary button-delete">Delete</span>\x3c!--\n\t\t\t\t\t--\x3e<span class="delete-group">\x3c!--\n\t\t\t\t\t\t--\x3e<span class="button button-secondary delete-msg u--not-clickable">Delete?</span>\x3c!--\n\t\t\t\t\t\t--\x3e<span class="button control button-secondary delete-yes">\n\t\t\t\t\t\t\t<i class="icon icon-checkmark">\n\t\t\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 577.95 469.42"><polygon points="195.09 469.42 137.44 424.64 140.4 421.42 0 298 46.22 245.43 187.68 369.79 526.33 0 577.95 47.28 229.72 427.53 195.09 469.42"/></svg>\n\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t</span>\x3c!--\n\t\t\t\t\t\t--\x3e<span class="button control button-secondary delete-no">\n\t\t\t\t\t\t\t<i class="icon icon-x">\n\t\t\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.97 47.97"><path d="M28.23,24,47.09,5.12A3,3,0,0,0,42.85.88L24,19.74,5.12.88A3,3,0,0,0,.88,5.12L19.74,24,.88,42.85a3,3,0,1,0,4.24,4.24L24,28.23,42.85,47.09a3,3,0,0,0,4.24-4.24Z" transform="translate(0 0)"/></svg>\n\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t</span>\x3c!--\n\t\t\t\t\t--\x3e</span>\x3c!--\n\t\t\t\t--\x3e</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n'
              );
          },
          useData: !0,
      })),
      (s.templates.detailStock = Handlebars.template({
          1: function (t, e, i, s) {
              return '<span class="background-stock-source">This photo has been removed and is no longer available to be set active</span>';
          },
          3: function (t, e, i, s) {
              var n,
                  a = e.helperMissing,
                  o = "function",
                  l = this.escapeExpression;
              return (
                  '\t\t\t\t<span class="background-stock-source clickable-hack"><a href="' +
                  l(typeof (n = null != (n = e.sourceUrl || (null != t ? t.sourceUrl : t)) ? n : a) == o ? n.call(t, { name: "sourceUrl", hash: {}, data: s }) : n) +
                  '" target="_blank">' +
                  l(typeof (n = null != (n = e.attribution || (null != t ? t.attribution : t)) ? n : a) == o ? n.call(t, { name: "attribution", hash: {}, data: s }) : n) +
                  "</a></span>\n"
              );
          },
          5: function (t, e, i, s) {
              var n;
              return (
                  '\t\t\t\t<span class="background-stock-source u--selectable">' +
                  this.escapeExpression("function" == typeof (n = null != (n = e.attribution || (null != t ? t.attribution : t)) ? n : e.helperMissing) ? n.call(t, { name: "attribution", hash: {}, data: s }) : n) +
                  "</span>\n\t\t\t"
              );
          },
          7: function (t, e, i, s) {
              var n, a;
              return (
                  '\t\t\t<span class="button button-secondary button-set-active button-set-active-stock clickable-hack">\n\t\t\t\t' +
                  this.escapeExpression("function" == typeof (a = null != (a = e.labelSelect || (null != t ? t.labelSelect : t)) ? a : e.helperMissing) ? a.call(t, { name: "labelSelect", hash: {}, data: s }) : a) +
                  "\n\t\t\t\t" +
                  (null != (n = e.unless.call(t, null != t ? t.plusUser : t, { name: "unless", hash: {}, fn: this.program(8, s, 0), inverse: this.noop, data: s })) ? n : "") +
                  "\n\t\t\t</span>\n"
              );
          },
          8: function (t, e, i, s) {
              return '<span class="badge plus-badge">PLUS</span>';
          },
          compiler: [6, ">= 2.0.0-beta.1"],
          main: function (t, e, i, s) {
              var n,
                  a,
                  o = e.helperMissing,
                  l = "function",
                  c = this.escapeExpression;
              return (
                  '<div class="pop-body settings-detail settings-detail-background">\n\t<div class="settings-detail-header">\n\t\t<span class="icon-wrapper back" title="Back"><i class="icon icon-left"></i></span>\n\t\t<h3>Photo Info</h3>\n\t\t' +
                  (null != (n = e.unless.call(t, null != t ? t.active : t, { name: "unless", hash: {}, fn: this.program(1, s, 0), inverse: this.noop, data: s })) ? n : "") +
                  '\n\t</div>\n\n\t<div class="settings-detail-body">\n\t\t<div class="image" align="center">\n\t\t\t<img class="img-uploaded" align="center" alt="Uploaded Image"/>\n\t\t</div>\n\n\t\t<div class="background-stock-info">\n\t\t\t<span class="background-stock-title u--selectable">' +
                  c(typeof (a = null != (a = e.title || (null != t ? t.title : t)) ? a : o) == l ? a.call(t, { name: "title", hash: {}, data: s }) : a) +
                  "</span><br>\n" +
                  (null != (n = e.if.call(t, null != t ? t.sourceUrl : t, { name: "if", hash: {}, fn: this.program(3, s, 0), inverse: this.program(5, s, 0), data: s })) ? n : "") +
                  '<br>\n\t\t\t<span class="background-stock-date">Last seen ' +
                  c(typeof (a = null != (a = e.displayDate || (null != t ? t.displayDate : t)) ? a : o) == l ? a.call(t, { name: "displayDate", hash: {}, data: s }) : a) +
                  "</span>\n" +
                  (null != (n = e.if.call(t, null != t ? t.active : t, { name: "if", hash: {}, fn: this.program(7, s, 0), inverse: this.noop, data: s })) ? n : "") +
                  "\t\t</div>\n\t</div>\n</div>\n\n"
              );
          },
          useData: !0,
      })),
      (s.templates.favorites = Handlebars.template({
          compiler: [6, ">= 2.0.0-beta.1"],
          main: function (t, e, i, s) {
              return '<div class="settings-empty loading">\n\t<p class="settings-empty-loading"><i class="loading-icon"></i>Loading...</p>\n\t<p class="settings-empty-title">No favorite photos yet</p>\n\t<p class="settings-empty-description">Click the heart icon under a photo caption to start your collection</p>\n</div>\n\n<div class="tile-list backgrounds-list hidden"></div>\n';
          },
          useData: !0,
      })),
      (s.templates.history = Handlebars.template({
          compiler: [6, ">= 2.0.0-beta.1"],
          main: function (t, e, i, s) {
              return '<div class="settings-empty loading">\n\t<p class="settings-empty-loading"><i class="loading-icon"></i>Loading...</p>\n\t<p class="settings-empty-title">No photo history yet</p>\n\t<p class="settings-empty-description">Your past photos will appear here</p>\n</div>\n\n<div class="tile-list backgrounds-list hidden"></div>\n<div class="load-more">\n\t<span class="button load-more-button">Load More</span>\n</div>\n';
          },
          useData: !0,
      })),
      (s.templates.main = Handlebars.template({
          compiler: [6, ">= 2.0.0-beta.1"],
          main: function (t, e, i, s) {
              var n,
                  a = e.helperMissing,
                  o = "function",
                  l = this.escapeExpression;
              return (
                  '\x3c!-- Header --\x3e\n\n<div class="subpanel-header">\n\t<span class="button-advanced">Settings<i class="icon icon-angle-down"></i></span>\n\t<h3>Photos</h3>\n\t<p class="description">See a new inspiring photo each day</p>\n</div>\n\n\n\x3c!-- Feeds --\x3e\n\n<div class="smooth-height-wrapper">\n\t<div class="smooth-height-content">\n\t\t<div class="wrapper-advanced">\n\t\t\t<h4>Feeds</h4>\n\t\t\t<ul class="settings-list">\n\t\t\t\t<li class="slide-toggle has-toggle ' +
                  l(typeof (n = null != (n = e.feedMomentumClass || (null != t ? t.feedMomentumClass : t)) ? n : a) == o ? n.call(t, { name: "feedMomentumClass", hash: {}, data: s }) : n) +
                  '" id="feed-momentum-slider">\n\t\t\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t\t\t<span class="setting-name">Momentum Photos</span>\n\t\t\t\t\t<span class="option-message">See a daily photo from our curated feed</span>\n\t\t\t\t</li>\n\t\t\t\t<li class="slide-toggle has-toggle ' +
                  l(typeof (n = null != (n = e.feedCustomClass || (null != t ? t.feedCustomClass : t)) ? n : a) == o ? n.call(t, { name: "feedCustomClass", hash: {}, data: s }) : n) +
                  '" id="feed-custom-slider">\n\t\t\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t\t\t<span class="setting-name">' +
                  l(typeof (n = null != (n = e.labelCustom || (null != t ? t.labelCustom : t)) ? n : a) == o ? n.call(t, { name: "labelCustom", hash: {}, data: s }) : n) +
                  '</span>\n\t\t\t\t\t<span class="badge plus-badge">PLUS</span>\n\t\t\t\t\t<span class="option-message">Add your own photos and change the photo anytime</span>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</div>\n\n\n\x3c!-- Subnav + add button --\x3e\n\n<nav class="settings-subnav">\n\t<div class="subnav-titles">\n\t\t<h4 class="custom" data-test="custom-photos-tab">' +
                  l(typeof (n = null != (n = e.labelCustom || (null != t ? t.labelCustom : t)) ? n : a) == o ? n.call(t, { name: "labelCustom", hash: {}, data: s }) : n) +
                  '</h4>\x3c!--\n\t\t--\x3e<h4 class="favorites">Favorites</h4>\x3c!--\n\t\t--\x3e<h4 class="history">History</h4>\n\t</div>\n\t<div class="button-add-container">\n\t\t<input type="file" multiple class="add-background file-input">\n\t\t\n\t</div>\n</nav>\n<div class="settings-subnav-placeholder"></div>\n\n\n\x3c!-- Lists --\x3e\n\n<div class="list-wrapper has-subnav">\n\t<div class="list-body list-body-custom"></div>\n\t<div class="list-body list-body-favorites"></div>\n\t<div class="list-body list-body-history"></div>\n</div>\n'
              );
          },
          useData: !0,
      })),
      (s.templates.tile = Handlebars.template({
          1: function (t, e, i, s) {
              return '<span class="photo-removed-text">Photo Removed</span>';
          },
          3: function (t, e, i, s) {
              var n;
              return (
                  '<span class="control control-select" title="' +
                  this.escapeExpression("function" == typeof (n = null != (n = e.labelSelect || (null != t ? t.labelSelect : t)) ? n : e.helperMissing) ? n.call(t, { name: "labelSelect", hash: {}, data: s }) : n) +
                  '"><i class="icon-check"></i></span>'
              );
          },
          compiler: [6, ">= 2.0.0-beta.1"],
          main: function (t, e, i, s) {
              var n,
                  a,
                  o = e.helperMissing,
                  l = "function",
                  c = this.escapeExpression;
              return (
                  '<span class="tile-list-image"></span>\n' +
                  (null != (n = e.unless.call(t, null != t ? t.showSetActive : t, { name: "unless", hash: {}, fn: this.program(1, s, 0), inverse: this.noop, data: s })) ? n : "") +
                  '\n<span class="tile-list-actions" data-test="tile-list-actions">\n\t' +
                  (null != (n = e.if.call(t, null != t ? t.showSetActive : t, { name: "if", hash: {}, fn: this.program(3, s, 0), inverse: this.noop, data: s })) ? n : "") +
                  '\n\t<span class="control control-select-error" title="' +
                  c(typeof (a = null != (a = e.labelSelectError || (null != t ? t.labelSelectError : t)) ? a : o) == l ? a.call(t, { name: "labelSelectError", hash: {}, data: s }) : a) +
                  '">\n\t\t<span class="icon-error-wrapper">\n\t\t\t<svg class="icon-error" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" viewBox="0 0 24 24" xml:space="preserve"><g><path d="M12,0C5.373,0,0,5.373,0,12s5.373,12,12,12s12-5.373,12-12S18.627,0,12,0z M12,19.66   c-0.938,0-1.58-0.723-1.58-1.66c0-0.964,0.669-1.66,1.58-1.66c0.963,0,1.58,0.696,1.58,1.66C13.58,18.938,12.963,19.66,12,19.66z    M12.622,13.321c-0.239,0.815-0.992,0.829-1.243,0c-0.289-0.956-1.316-4.585-1.316-6.942c0-3.11,3.891-3.125,3.891,0   C13.953,8.75,12.871,12.473,12.622,13.321z" fill="#D80027" /></g></svg>\n\t\t</span>\n\t</span>\n\t<span class="control control-edit" title="' +
                  c(typeof (a = null != (a = e.editIconTitle || (null != t ? t.editIconTitle : t)) ? a : o) == l ? a.call(t, { name: "editIconTitle", hash: {}, data: s }) : a) +
                  '" data-test="control-edit"><i class="' +
                  c(typeof (a = null != (a = e.editIconClass || (null != t ? t.editIconClass : t)) ? a : o) == l ? a.call(t, { name: "editIconClass", hash: {}, data: s }) : a) +
                  '" data-test="control-edit-icon"></i></span>\n</span>\n<span class="tile-list-loading"><i class="loading-icon"></i></span>\n'
              );
          },
          useData: !0,
      })),
      (s.styles = s.styles || {}),
      (s.styles.style = function () {
          var t = document.createElement("style");
          (t.type = "text/css"),
              (t.innerHTML =
                  ".tile-list .tile-list-item .photo-removed-text,.tile-list-image,.tile-list-item .tile-list-loading,.tile-list-item:before{bottom:0;left:0;top:0;right:0;position:absolute}.settings-backgrounds ::-webkit-file-upload-button{cursor:pointer}.settings-backgrounds .button-add-container{position:relative}.settings-backgrounds .button-add-container:hover .fake-file-input{background:rgba(255,255,255,.4)}.light .settings-backgrounds .button-add-container:hover .fake-file-input{background:rgba(0,0,0,.5)}.settings-backgrounds .file-input{height:100%;padding:0;position:absolute;border-bottom:none;cursor:pointer;opacity:0;z-index:2}.settings-backgrounds .backgrounds-list{padding:2px}.backgrounds-list.hidden{display:none}.tile-list{display:grid;grid-template-columns:repeat(4,1fr);grid-gap:15px}.tile-list .tile-list-item{height:70px;position:relative;display:inline-block;border-radius:1px;box-sizing:content-box;cursor:pointer;overflow:hidden;-webkit-transition:opacity .2s ease;transition:opacity .2s ease;vertical-align:top}.tile-list .tile-list-item .photo-removed-text{z-index:2;display:flex;align-items:center;justify-content:center;font-size:.75rem;color:#fff;text-shadow:0 1px 0 rgba(0,0,0,.8);cursor:not-allowed}.tile-list-item.activating:hover .tile-list-actions,.tile-list-item.hidden{display:none}.tile-list-item:before{z-index:1;background:#fff;opacity:0}.tile-list-item:hover:before{opacity:.2}.tile-list-image{z-index:0;background-color:rgba(255,255,255,.1);background-position:50% 50%;background-repeat:no-repeat;background-size:cover;border-radius:2px}.light .tile-list-image{background-color:rgba(0,0,0,.1)}.tile-list-item:hover .tile-list-image{opacity:.8}.tile-list-item.active{box-shadow:inset 0 0 0 1px #32cd32,0 0 0 2px #32cd32;z-index:10}.tile-list-item.uploading{clip-path:inset(0 100% 0 0);opacity:.4}.tile-list-item.already-active{opacity:.7}.tile-list-item .tile-list-loading{margin:0;display:none;align-items:center;justify-content:center}.tile-list-item .tile-list-loading .loading-icon{height:20px;width:20px;margin-right:0;border-color:#fff!important}.tile-list-item.activating .tile-list-image{opacity:.5}.tile-list-item.activating .tile-list-loading{display:flex}.tile-list-item .tile-not-active{filter:blur(5px);-webkit-filter:blur(5px)}.tile-list-actions{position:absolute;top:0;right:0;z-index:2;display:none;color:#fff;text-shadow:0 0 15px #000}.active .tile-list-actions,.tile-list-item.pseudo-hover .tile-list-actions,.tile-list-item:hover .tile-list-actions{display:inline-flex}.active .tile-list-actions .control-select{color:#fff}.tile-list-actions .control{padding:3px;display:inline-block;color:rgba(255,255,255,.8)}.tile-list-actions .control:hover{color:#fff}.tile-list-actions .control-select-error{display:none;fill-opacity:.65}.tile-list-actions .control-select-error:hover{fill-opacity:1}.set-active-failed .tile-list-actions{display:inline-block}.set-active-failed .tile-list-actions .control-select{display:none}.set-active-failed .tile-list-actions .control-select-error{display:inline-block}.tile-list-actions .icon-error-wrapper{position:relative;top:2px}.settings-detail-background .settings-detail-header{margin-bottom:1rem}.settings-detail-background .settings-detail-header h3{font-size:140%}.settings-detail-body{display:block}.settings-detail-body .image{width:100%;margin-bottom:18px;background-size:cover}.settings-detail-body .img-uploaded{max-width:100%;max-height:100%;border-radius:2px;display:none;vertical-align:middle}.settings-detail-body h4{margin-bottom:10px}.settings-detail-body .optional{margin-left:3px;opacity:.6}.settings-background-edit .actions{margin-right:-10px}.settings-background-edit .submit{position:relative}.settings-background-edit .submit .loading-icon{top:11px;left:8px}.settings-background-edit .submit .error-icon{top:10px;left:8px}.settings-background-edit .cancel{padding-left:20px;padding-right:20px}.settings-background-edit .delete-group{display:none}.settings-background-edit .delete-group .button{padding-right:5px;padding-left:5px}.settings-background-edit .delete-group .delete-no{padding-right:10px}.background-stock-info{margin-top:-13px;position:relative}.background-stock-title{padding:3px 0 1px;display:inline-block;font-size:100%}.background-stock-source{display:inline-block;font-size:85%;opacity:.5}.background-stock-date{display:inline-block;font-size:80%;opacity:.35}.background-stock-info .button-set-active-stock{position:absolute;top:9px;right:-10px}.background-stock-info .plus-badge{margin-left:4px}.settings-detail-background .background-stock-info .clickable-hack:hover{opacity:.8}.settings-detail-background .background-stock-info .u--not-clickable{cursor:default}.settings-detail-background .background-stock-info .u--not-clickable:hover{opacity:.5}"),
              document.getElementsByTagName("head")[0].appendChild(t);
      }),
      (s.collect.Backgrounds = Backbone.Collection.extend({
          loadedOnce: !1,
          initialize: function () {
              (this.model = s.models.Background), this.listenTo(this, "reset", this.onReset);
          },
          onReset: function () {
              this.loadedOnce = !0;
          },
          comparator: function (t, e) {
              var i = this.sortAttribute || "sort_order",
                  s = t.get(i),
                  n = e.get(i);
              return s == n ? 0 : s < n ? (this.reverse_sort ? 1 : -1) : n < s ? (this.reverse_sort ? -1 : 1) : void 0;
          },
      })),
      (s.models.Background = Backbone.Model.extend({
          save: function (t, e) {
              ((e = e || {}).patch = !0), Backbone.Model.prototype.save.call(this, t, e);
          },
          getThumbnailUrl: function (e) {
              if (e)
                  if (this.blobUrl) e(this.blobUrl);
                  else {
                      var t = this.get("file");
                      if (t) {
                          var i = new FileReader(),
                              s = this;
                          (i.onload = function (t) {
                              (s.blobUrl = t.target.result), e(s.blobUrl);
                          }),
                              i.readAsDataURL(t);
                      } else {
                          var n = this.get("thumbnail_url");
                          n && e(n);
                      }
                  }
          },
          getPreviewUrl: function (e) {
              if (e) {
                  var t = this.get("file");
                  if (t) {
                      var i = new FileReader();
                      (i.onload = function (t) {
                          e(t.target.result);
                      }),
                          i.readAsDataURL(t);
                  } else {
                      var s = this.get("preview_url");
                      s && e(s);
                  }
              }
          },
          setActive: function (e, i) {
              var t = o.globals.urlRootApi + "settings/background/active",
                  s = {},
                  n = this.get("_id") || this.get("id"),
                  a = this;
              this.get("is_custom") ? (s.custom_background_id = n) : (s.background_id = n),
                  p
                      .ajax({ type: "POST", contentType: "application/json", data: JSON.stringify(s), url: t })
                      .done(function (t) {
                          t && t.success ? (o.trigger("sync:download", "background", !0), o.trigger("waitForPhotoActivation", !0), a.get("is_custom") && o.trigger("background:set-active-custom"), i && i()) : e && e();
                      })
                      .fail(function () {
                          e();
                      });
          },
      })),
      (s.models.BackgroundSettingsManager = Backbone.Model.extend({
          feedCustomName: "background-feed-custom",
          feedMomentumName: "background-feed-momentum",
          panelTitle: "Background Settings",
          labelCustom: "My Photos",
          newModels: [],
          initialize: function () {
              o.uploadManager || (o.uploadManager = new o.models.UploadManager()),
                  (this.settings = new o.models.GenericSettings("background")),
                  (this.lastActiveBackground = o.models.activeBackground.activeBackgroundUuid()),
                  (this.plusUser = true),
                  (this.skippedFiles = new Backbone.Collection()),
                  this.CustomBackgrounds(),
                  this.listenTo(this.collection, "change:file_upload_uri", this.uploadDestinationReady),
                  this.listenTo(this.collection, "add", this.onCollectionAdd),
                  this.listenTo(this.collection, "reset", this.onCollectionReset),
                  this.listenTo(o, "background:loadSuccessful", this.onBackgroundLoad),
                  this.listenTo(o, "background:favorite", this.onBackgroundFavorited);
          },
          onCollectionAdd: function (t) {
              _.findWhere(this.newModels, { id: t.id }) || this.newModels.push(t);
          },
          onCollectionReset: function () {
              var e = this;
              _.each(this.newModels, function (t) {
                  e.collection.contains(t) || e.collection.add(t);
              });
          },
          onBackgroundLoad: function (t) {
              if (this.lastActiveBackground !== t && this.history) {
                  var e = this.history.at(0);
                  if (e && e.get("_id") !== t) {
                      var i = this.history.findWhere({ _id: t });
                      if ((!i && this.collection && (i = this.collection.findWhere({ id: t })), !i && this.favorites && (i = this.favorites.findWhere({ id: t })), i)) {
                          var s = i.clone();
                          s.has("_id") || s.set("id", t), s.set("sort_order", s.get("sort_order") + "-" + o.now()), (s.prepend = !0), this.history.add(s), this.history.sort(), (this.lastActiveBackground = t);
                      }
                  }
              }
          },
          onBackgroundFavorited: function (t) {
              if (this.favorites) {
                  var e = this.favorites.get(t.id);
                  e ? (e.set({ is_favorite: t.is_favorite, last_updated: o.date().toISOString() }), this.favorites.sort()) : this.favorites.fetch({ remove: !1 });
              }
          },
          CustomBackgrounds: function () {
              return this.collection || ((this.collection = new s.collect.Backgrounds()), (this.collection.url = o.globals.urlRoot + "settings/background/backgrounds"), (this.collection.reverse_sort = !0)), this.collection;
          },
          Favorites: function () {
              return (
                  this.favorites || ((this.favorites = new s.collect.Backgrounds()), (this.favorites.url = o.globals.urlRoot + "backgrounds/favorites"), (this.favorites.sortAttribute = "last_updated"), (this.favorites.reverse_sort = !0)),
                  this.favorites
              );
          },
          History: function () {
              var e = this;
              return (
                  this.history ||
                      ((this.history = new s.collect.Backgrounds()),
                      (this.history.url = o.globals.urlRoot + "backgrounds/history"),
                      (this.history.reverse_sort = !0),
                      (this.history.load_more = o.utils.getDateString()),
                      (this.history.parse = function (t) {
                          return (e.history.load_more = t.load_more), t.history;
                      })),
                  this.history
              );
          },
          LoadMoreHistory: function () {
              this.history.load_more && this.history.fetch({ remove: !1, data: { priorToDate: this.history.load_more } });
          },
          toggleFeedMomentum: function () {
              this.plusUser && (this.settings.toggle(this.feedMomentumName), o.settingsUtils.sendEventToggleFeed(this.panelTitle, "Toggle Momentum", this.settings.get(this.feedMomentumName)));
          },
          toggleFeedCustom: function () {
              this.settings.toggle(this.feedCustomName), o.settingsUtils.sendEventToggleFeed(this.panelTitle, "Toggle Custom", this.settings.get(this.feedCustomName))
          },
          showPlusUpsellNotif: function () {
              var t = { targetRegion: "settings", sourceEvent: "customBackgrounds", buttonText: "Learn more", title: this.labelCustom, description: "Change your photo anytime to anything you want" };
              o.commandManager.execute("upsell.message", t);
          },
          uploadDestinationReady: function (t) {
              o.uploadManager.uploadFile(t);
          },
          uploadFile: function (t, e) {
              var i = this;
              if (t.type.startsWith("image/"))
                  i.collection.create(
                      { filename: t.name, type: t.type, size: t.size, file: t, upload_completed: !1, is_custom: !0, display_date: o.date(), sort_order: o.now() },
                      {
                          success: function (t) {
                              o.sendEvent(i.panelTitle, "Add"), e && e(t);
                          },
                      }
                  );
              else {
                  var s = { name: t.name, type: t.type };
                  i.skippedFiles.add(s), i.trigger("fileSkipped", s);
              }
          },
          uploadFiles: function (t) {
              var e = this;
              _.each(
                  t,
                  function (t) {
                      e.uploadFile(t);
                  },
                  this
              );
          },
      })),
      (o.models.UploadManager = Backbone.Model.extend({
          initialize: function () {
              var t = t || {};
              (this.filesUrl = o.globals.urlRootApi + "files"),
                  (this.collection = new Backbone.Collection()),
                  this.listenTo(this.collection, "change:upload_completed", this.uploadCompleted),
                  (this.maxBlockSize = null == t.maxBlockSize ? 262144 : t.maxBlockSize),
                  (this.blockIdPrefix = "block-"),
                  (this.filesUploading = 0),
                  (this.totalBytes = 0),
                  (this.totalBytesUploaded = 0),
                  (this.bytesPerFile = {}),
                  (this.files = {});
          },
          uploadCompleted: function (e) {
              var i = this,
                  t = e.get("file_uuid");
              p.ajax({
                  url: i.filesUrl + "/" + t,
                  contentType: "application/json",
                  type: "PATCH",
                  data: JSON.stringify({ upload_completed: !0 }),
                  success: function (t) {
                      e.set(t), i.collection.remove(e);
                  },
                  error: function () {
                      e.set({ upload_failed: !0 });
                  },
              });
          },
          uploadFile: function (n) {
              this.collection.add(n);
              var i = this,
                  a = n.get("file"),
                  s = new FileReader(),
                  o = n.get("file_upload_uri"),
                  l = this.maxBlockSize,
                  c = 0,
                  d = 0,
                  r = [],
                  u = 0,
                  g = n.get("size");
              function h() {
                  if (0 < d) {
                      var t = a.slice(c, c + l),
                          e = i.blockIdPrefix + i.pad(r.length, 6);
                      r.push(btoa(e)), s.readAsArrayBuffer(t), (c += l), (d -= l) < l && (l = d);
                  } else
                      !(function () {
                          var t,
                              e = o + "&comp=blocklist",
                              i = "<?xml version='1.0' encoding='utf-8'?><BlockList>";
                          for (t = 0; t < r.length; t++) i += "<Latest>" + r[t] + "</Latest>";
                          (i += "</BlockList>"),
                              p.ajax({
                                  url: e,
                                  type: "PUT",
                                  data: i,
                                  modifyHeaders: function (t) {
                                      return delete t.Authorization, delete t["X-Momentum-ClientDate"], delete t["X-Momentum-ClientId"], delete t["X-Momentum-Version"], (t["x-ms-blob-content-type"] = a.type), t;
                                  },
                                  success: function () {
                                      n.set("upload_completed", !0);
                                  },
                                  error: function () {
                                      n.set({ upload_failed: !0 });
                                  },
                              });
                      })();
              }
              (this.totalBytes += g),
                  g < l && (l = g),
                  (d = g),
                  (s.onloadend = function (t) {
                      if (t.target.readyState == FileReader.DONE) {
                          var e = o + "&comp=block&blockid=" + r[r.length - 1],
                              i = new Uint8Array(t.target.result),
                              s = i.length;
                          p.ajax({
                              url: e,
                              type: "PUT",
                              data: i,
                              processData: !1,
                              modifyHeaders: function (t) {
                                  return (
                                      delete t.Authorization,
                                      delete t["X-Momentum-ClientDate"],
                                      delete t["X-Momentum-ClientId"],
                                      delete t["X-Momentum-Version"],
                                      (t["x-ms-blob-type"] = "BlockBlob"),
                                      (t["x-ms-blob-content-type"] = a.type),
                                      t
                                  );
                              },
                              success: function () {
                                  (u += s), n.set({ fileprogress: parseInt((u / g) * 100) }), h();
                              },
                              error: function () {
                                  n.set({ upload_failed: !0 });
                              },
                          });
                      }
                  }),
                  h();
          },
          pad: function (t, e) {
              for (var i = "" + t; i.length < e; ) i = "0" + i;
              return i;
          },
      })),
      (s.views.Custom = Backbone.View.extend({
          template: s.templates.custom,
          initialize: function (t) {
              (this.main = t.main),
                  (this.subViews = []),
                  o.backgroundSettingsManager || (o.backgroundSettingsManager = new s.models.BackgroundSettingsManager()),
                  (this.collection = o.backgroundSettingsManager.CustomBackgrounds()),
                  this.listenTo(this.collection, "reset", this.addAll),
                  this.listenTo(this.collection, "add", this.onCollectionAdd),
                  this.listenTo(this.collection, "update", this.handleCollectionUpdate);
          },
          render: function () {
              return (
                  this.$el.html(this.template()),
                  this.main.setSubnavViewVars(this),
                  this.main.expiredPlusUser || this.main.plusUser ? (this.collection.loadedOnce ? this.addAll() : this.collection.fetch({ reset: !0 })) : this.$empty.removeClass("loading"),
                  this
              );
          },
          addAll: function () {
              o.settingsUtils.subnavAddAll(this, !1, this.$backgroundsList, this.main.syncActiveItem.bind(this.main));
          },
          addOne: function (t, e) {
              var i = new s.views.Tile({ model: t, main: this.main, parent: this, subnav: "custom" });
              o.settingsUtils.subnavAddOne(this, i, this.$backgroundsList, e, !1), i.$el.toggleClass("uploading", !t.get("upload_verified") || !t.get("upload_completed"));
          },
          onCollectionAdd: function (t) {
              this.addOne(t, !0);
          },
          handleCollectionUpdate: function () {
              o.settingsUtils.updateEmptyState(this);
          },
      }));
  var e = s.dependencies.settings;
  s.views.DetailCustom = e.views.SettingsPanel.extend({
      attributes: { id: "background-detail-custom-panel", class: "settings-view settings-online settings-background-detail", "data-test": "settings-backgrounds" },
      panelid: "backgrounds-detail-custom",
      template: s.templates.detailCustom,
      events: {
          "click .back": "handleClickBack",
          "keyup .settings-background-edit": "handleKeyupEsc",
          "keypress .input-title": "handleKeypressEnterTitle",
          "keypress .input-source": "handleKeypressEnterSource",
          "click .submit": "processEditForm",
          "click .cancel": "handleClickCancel",
          "click .button-set-active": "handleClickSetActive",
          "click .button-delete": "toggleDeleteConf",
          "click .delete-yes": "deleteItem",
          "click .delete-no": "toggleDeleteConf",
      },
      initialize: function (t) {
          o.backgroundSettingsManager || (o.backgroundSettingsManager = new s.models.BackgroundSettingsManager()),
              (this.main = t.main),
              (this.model = t.backgroundModel),
              this.listenTo(o, "background:loadSuccessful", this.onBackgroundLoadSuccessful);
      },
      render: function () {
          var t = { inputLengthMaxHtml: this.main.inputLengthMaxHtml, source: this.model.get("source"), title: this.model.get("title") };
          return this.$el.html(this.template(t)), this.setViewVars(), this.focusFirstInput(), this.main.detailUpdateSetActiveButton(this), this.model.getPreviewUrl(this.main.detailShowUploadedImage.bind(this)), this;
      },
      setViewVars: function () {
          (this.$backgroundEditForm = this.$(".settings-background-edit")),
              (this.$inputTitle = this.$(".input-title")),
              (this.$inputSource = this.$(".input-source")),
              (this.$actionsRight = this.$(".actions-right")),
              (this.$deleteGroup = this.$(".delete-group"));
      },
      focusFirstInput: function () {
          var t = this;
          setTimeout(function () {
              t.$inputTitle.trigger("focus");
          }, 0),
              o.settingsUtils.moveCursorToEndOfInput(this.$inputTitle);
      },
      handleClickBack: function (t) {
          this.main.detailHandleClickBack(t);
      },
      handleKeyupEsc: function (t) {
          o.settingsUtils.handleKeyupEsc(t, this.main.detailGotoMain.bind(this));
      },
      handleKeypressEnterTitle: function (t) {
          o.settingsUtils.handleKeypressEnter(t, this.processEditForm.bind(this), this.$inputTitle);
      },
      handleKeypressEnterSource: function (t) {
          o.settingsUtils.handleKeypressEnter(t, this.processEditForm.bind(this), this.$inputSource);
      },
      processEditForm: function (t) {
          if ((t && t.preventDefault(), !this.$backgroundEditForm.hasClass("loading"))) {
              var e = this,
                  i = this.$inputTitle.val().trim(),
                  s = this.$inputSource.val().trim();
              this.$backgroundEditForm.removeClass("failed").addClass("loading"),
                  this.model.save(
                      { title: i, source: s },
                      {
                          wait: !0,
                          success: function () {
                              e.$backgroundEditForm.removeClass("loading"), o.trigger("sync:download", "background", !0), o.trigger("photoDetailsChanged", { id: e.model.get("id"), title: i, source: s }), e.main.detailGotoMain();
                          },
                          error: function () {
                              e.$backgroundEditForm.removeClass("loading").addClass("failed");
                          },
                      }
                  ),
                  o.sendEvent(this.main.manager.panelTitle, "Edit");
          }
      },
      handleClickCancel: function (t) {
          t.stopPropagation(), this.main.detailGotoMain();
      },
      handleClickSetActive: function () {
          this.main.detailSetActive(this);
      },
      toggleDeleteConf: function () {
          this.$actionsRight.mToggle("inline-block"), this.$deleteGroup.mToggle("inline-block");
      },
      deleteItem: function (t) {
          var e = this;
          t.stopPropagation(),
              this.model.destroy({
                  success: function () {
                      o.trigger("sync:download", "background", !0), e.main.detailGotoMain();
                  },
              }),
              o.sendEvent(this.main.manager.panelTitle, "Delete");
      },
      onBackgroundLoadSuccessful: function () {
          this.main.detailUpdateSetActiveButton(this);
      },
  });
  e = s.dependencies.settings;
  (s.views.DetailStock = e.views.SettingsPanel.extend({
      attributes: { id: "background-detail-stock-panel", class: "settings-view settings-background-detail" },
      panelid: "backgrounds-detail-stock",
      template: s.templates.detailStock,
      events: { "click .back": "handleClickBack", "click .button-set-active": "handleClickSetActive" },
      initialize: function (t) {
          o.backgroundSettingsManager || (o.backgroundSettingsManager = new s.models.BackgroundSettingsManager()),
              (this.main = t.main),
              (this.model = t.backgroundModel),
              this.listenTo(o, "background:loadSuccessful", this.onBackgroundLoadSuccessful);
      },
      render: function () {
          var t = {
              attribution: this.model.get("attribution"),
              displayDate: o.utils.getFriendlyDate(this.model.get("display_date")),
              labelSelect: this.main.labelSelect,
              plusUser: true,
              sourceUrl: this.model.get("sourceUrl"),
              title: this.model.get("title"),
              active: this.model.get("active"),
          };
          return this.$el.html(this.template(t)), this.main.detailUpdateSetActiveButton(this), this.model.getPreviewUrl(this.main.detailShowUploadedImage.bind(this)), this;
      },
      handleClickBack: function (t) {
          this.main.detailHandleClickBack(t);
      },
      handleClickSetActive: function () {
          this.main.detailSetActive(this);
      },
      onBackgroundLoadSuccessful: function () {
          this.main.detailUpdateSetActiveButton(this);
      },
  })),
      (s.views.Favorites = Backbone.View.extend({
          template: s.templates.favorites,
          initialize: function (t) {
              (this.main = t.main),
                  (this.subViews = []),
                  o.backgroundSettingsManager || (o.backgroundSettingsManager = new s.models.BackgroundSettingsManager()),
                  (this.collection = o.backgroundSettingsManager.Favorites()),
                  this.listenTo(this.collection, "reset", this.addAll),
                  this.listenTo(this.collection, "add", this.onCollectionAdd),
                  this.listenTo(this.collection, "change:is_favorite", this.favoriteStateChanged);
          },
          render: function () {
              return this.$el.html(this.template()), this.main.setSubnavViewVars(this), this.collection.loadedOnce ? this.addAll() : this.collection.fetch({ reset: !0 }), this;
          },
          addAll: function () {
              o.settingsUtils.subnavAddAll(this, !1, this.$backgroundsList, this.main.syncActiveItem.bind(this.main));
          },
          addOne: function (t, e) {
              var i = new s.views.Tile({ model: t, main: this.main, parent: this, subnav: "favorites" });
              o.settingsUtils.subnavAddOne(this, i, this.$backgroundsList, e, !1);
          },
          onCollectionAdd: function (t) {
              this.addOne(t, !0), this.main.syncActiveItem();
          },
          handleCollectionUpdate: function () {
              o.settingsUtils.updateEmptyState(this);
          },
          favoriteStateChanged: function (e) {
              if (e.get("is_favorite")) this.addOne(e, !0), this.main.syncActiveItem();
              else {
                  var i = null;
                  if (
                      (_.find(this.subViews, function (t) {
                          return !(!t || t.model !== e) && ((i = t).destroy(), !0);
                      }),
                      i)
                  ) {
                      var t = this.subViews.indexOf(i);
                      t && this.subViews.splice(t, 1);
                  }
              }
          },
      })),
      (s.views.History = Backbone.View.extend({
          template: s.templates.history,
          events: { "click .load-more-button": "loadMore" },
          initialize: function (t) {
              (this.main = t.main),
                  (this.subViews = []),
                  o.backgroundSettingsManager || (o.backgroundSettingsManager = new s.models.BackgroundSettingsManager()),
                  (this.collection = o.backgroundSettingsManager.History()),
                  this.listenTo(this.collection, "reset", this.addAll),
                  this.listenTo(this.collection, "add", this.addOne),
                  this.listenTo(this.collection, "update", this.handleCollectionUpdate);
          },
          render: function () {
              var t = { plusUser: true };
              return this.$el.html(this.template(t)), this.main.setSubnavViewVars(this), this.collection.loadedOnce ? this.addAll() : this.collection.fetch({ reset: !0 }), this;
          },
          addAll: function () {
              o.settingsUtils.subnavAddAll(this, !0, this.$backgroundsList, this.main.syncActiveItem.bind(this.main), o.settingsUtils.subnavHistoryUpdateLoadMore.bind(this));
          },
          addOne: function (t) {
              var e = new s.views.Tile({ model: t, main: this.main, parent: this, subnav: "history" });
              o.settingsUtils.subnavAddOne(this, e, this.$backgroundsList, t.prepend, !1);
          },
          onCollectionAdd: function (t) {
              this.addOne(t);
          },
          handleCollectionUpdate: function () {
              o.settingsUtils.updateEmptyState(this), this.main.syncActiveItem();
          },
          loadMore: function (t) {
              o.settingsUtils.subnavHistoryLoadMore(t, this, o.backgroundSettingsManager);
          },
      }));
  e = s.dependencies.settings;
  return (
      (s.views.Main = e.views.SettingsPanel.extend({
          attributes: { id: "settings-backgrounds", class: "settings-view settings-content settings-backgrounds", "data-test": "settings-backgrounds" },
          inputLengthMaxHtml: 75,
          labelDeselect: "(Already Active)",
          labelSelect: "Set Active",
          labelSelectError: "Error activating… Click to retry",
          panelid: "backgrounds",
          subnav: void 0,
          template: s.templates.main,
          events: {
              "click .button-advanced": "toggleAdvanced",
              "click #feed-momentum-slider": "toggleFeedMomentum",
              "click #feed-custom-slider": "toggleFeedCustom",
              "click .add-background": "handleClickAdd",
              "change .file-input": "fileInputChanged",
              "click .subnav-titles .custom": "selectCustom",
              "click .subnav-titles .favorites": "selectFavorites",
              "click .subnav-titles .history": "selectHistory",
          },
          initialize: function (t) {
              t && (this.subnav = t.subnav),
                  o.backgroundSettingsManager || (o.backgroundSettingsManager = new s.models.BackgroundSettingsManager()),
                  (this.manager = o.backgroundSettingsManager),
                  (this.settings = this.manager.settings),
                  (this.plusUser = o.conditionalFeatures.featureEnabled("custom-bg")),
                  (this.expiredPlusUser = o.conditionalFeatures.featureEnabled("custom-bg-degraded")),
                  this.listenTo(this.settings, "change", this.updateSettings),
                  this.listenTo(this.settings, "change:allocation_changed", this.allocationChanged),
                  this.listenTo(o, "background:loadSuccessful", this.onBackgroundLoadSuccessful),
                  this.listenTo(o, "background:set-active-custom", this.onBackgroundSetActiveCustom),
                  this.plusUser && this.settings.fetch(),
                  void 0 === this.subnav && o.sendEvent(this.manager.panelTitle, "Panel Opened", "main");
          },
          render: function () {
              var t = { labelCustom: this.manager.labelCustom };
              return (
                  this.$el.html(this.template(p.extend(t, o.settingsUtils.getInitialFeedSettings(this.manager)))),
                  this.setViewVars(),
                  "favorites" === this.subnav ? this.renderFavorites() : "history" === this.subnav ? this.renderHistory() : "custom" === this.subnav || this.plusUser ? this.renderCustom() : this.renderHistory(),
                  this.plusUser || this.updateForFreeUser(),
                  this
              );
          },
          setViewVars: function () {
              o.settingsUtils.setFeedVars(this), (this.$customList = this.$(".list-body-custom")), (this.$favoritesList = this.$(".list-body-favorites")), (this.$historyList = this.$(".list-body-history"));
          },
          setSubnavViewVars: function (t) {
              (t.$empty = t.$(".settings-empty")), (t.$backgroundsList = t.$(".backgrounds-list"));
          },
          selectCustom: function (t) {
              this.selectSubnav("custom", t, this.renderCustom.bind(this));
          },
          selectFavorites: function (t) {
              this.selectSubnav("favorites", t, this.renderFavorites.bind(this));
          },
          selectHistory: function (t) {
              this.selectSubnav("history", t, this.renderHistory.bind(this));
          },
          selectSubnav: function (t, e, i) {
              e.stopPropagation(), this.subnav !== t ? (i(), o.sendEvent(this.manager.panelTitle, "Select Subnav", t)) : o.utils.toggleClassTwice(p(e.delegatedTarget), "active");
          },
          renderCustom: function () {
              this.customView || (this.customView = new s.views.Custom({ el: this.$customList, main: this })), o.settingsUtils.renderSubnav(this, this.customView, "custom");
          },
          renderFavorites: function () {
              this.favoritesView || (this.favoritesView = new s.views.Favorites({ el: this.$favoritesList, main: this })), o.settingsUtils.renderSubnav(this, this.favoritesView, "favorites");
          },
          renderHistory: function () {
              this.historyView || (this.historyView = new s.views.History({ el: this.$historyList, main: this })), o.settingsUtils.renderSubnav(this, this.historyView, "history");
          },
          updateSettings: function () {
              o.settingsUtils.updateFeedSettings(this);
          },
          allocationChanged: function () {
              this.settings.has("allocation_changed") && o.trigger("sync:download", "background", !0);
          },
          onBackgroundLoadSuccessful: function () {
              this.syncActiveItem();
          },
          syncActiveItem: function () {
              var t = o.models.activeBackground.activeBackgroundUuid();
              this.syncActiveItemHelper(this.customView, t), this.syncActiveItemHelper(this.favoritesView, t), this.syncActiveItemHelper(this.historyView, t);
          },
          syncActiveItemHelper: function (t, e) {
              void 0 !== t &&
                  (t.$el.find(".tile-list-item.active").removeClass("active").find(".control-select").attr("title", this.labelSelect),
                  t.$el
                      .find('[data-background-id="' + e + '"]')
                      .first()
                      .addClass("active")
                      .find(".control-select")
                      .attr("title", this.labelDeselect),
                  t.setActiveInProgress && (t.setActiveInProgress = !1));
          },
          onBackgroundSetActiveCustom: function () {
              this.settings.set(this.manager.feedCustomName, !0);
          },
          toggleAdvanced: function () {
              o.settingsUtils.toggleAdvanced(this);
          },
          toggleFeedMomentum: function (t) {
              t.stopPropagation(), this.manager.toggleFeedMomentum();
          },
          toggleFeedCustom: function (t) {
              t.stopPropagation(), this.manager.toggleFeedCustom();
          },
          updateForFreeUser: function () {
            //  this.$feedMomentumSlider.addClass("fixed");
          },
          handleClickAdd: function (t) {
            setBackground()
              t.preventDefault()
          },
          fileInputChanged: function (t) {
              var e = t.target.files;
              e.length && ("custom" !== this.subnav && this.renderCustom(), this.manager.uploadFiles(e));
          },
          detailGotoDetail: function (t, e, i) {
              var s = t ? "custom" : "stock";
              o.commandManager.execute("settings.display", null, { backgroundModel: this.detailGetModel(t, e, i), main: this, nav: "background-settings", section: "background-settings-detail-" + s }),
                  o.sendEvent(this.manager.panelTitle, "Panel Opened", "detail " + s);
          },
          detailGetModel: function (t, e, i) {
              var s;
              return (
                  t
                      ? (s = this.manager.CustomBackgrounds().get(i))
                      : "favorites" === this.subnav
                      ? (s = this.manager.Favorites().get(i))
                      : "history" === this.subnav &&
                        this.manager.History().each(function (t) {
                            t.get("_id") === i && (s = t);
                        }),
                  (s.active = e),
                  s
              );
          },
          detailShowUploadedImage: function (t) {
              this.$(".img-uploaded").attr("src", t).css("display", "inline-block");
          },
          detailHandleClickBack: function (t) {
              t.stopPropagation(), this.detailGotoMain();
          },
          detailGotoMain: function () {
              o.commandManager.execute("settings.display", null, { section: "background-settings", subnav: this.subnav });
          },
          detailSetActive: function (t) {
              t.model.setActive(), o.sendEvent(this.manager.panelTitle, "Set Active")
          },
          detailUpdateSetActiveButton: function (t) {
              var e = t.model.id || t.model.get("_id"),
                  i = o.models.activeBackground.activeBackgroundUuid() === e;
              t.$(".button-set-active")
                  .attr("title", i ? this.labelDeselect : "")
                  .toggleClass("u--not-clickable", i);
          },
      })),
      (s.views.Tile = Backbone.View.extend({
          attributes: { class: "tile-list-item", "data-test": "tile-list-item" },
          tagName: "div",
          template: s.templates.tile,
          events: { "click .control-edit": "handleClickEdit", "click .control-select": "handleClickSetActive", "click .control-select-error": "handleClickSetActive", click: "handleClickTile" },
          initialize: function (t) {
              (this.main = t.main),
                  (this.parent = t.parent),
                  (this.manager = this.main.manager),
                  (this.backgroundId = this.model.get("_id") || this.model.id),
                  this.listenTo(this.model, "change:upload_completed", this.uploadComplete),
                  this.listenTo(this.model, "change:fileprogress", this.updateFileProgress),
                  this.listenTo(o, "background:loadSuccessful", this.onBackgroundLoadSuccessful),
                  this.listenTo(o, "background:error", this.onBackgroundError);
              var e = document.createElement("img"),
                  i = this;
              e.addEventListener("error", function () {
                  i.$el.addClass("hidden");
              });
              var s = this.model.get("thumbnail_url");
              s && e.setAttribute("src", s);
          },
          render: function () {
              (this.active = this.model.get("active")), (this.is_custom = this.model.get("is_custom"));
              var e = this,
                  t = {
                      editIconClass: this.is_custom ? "icon-edit" : "icon-help",
                      editIconTitle: this.is_custom ? "Edit" : "Info",
                      labelSelectError: this.main.labelSelectError,
                      labelSelect: this.main.labelSelect,
                      showSetActive: !0 === this.active || this.model.has("upload_completed"),
                  };
              return (
                  this.$el.html(this.template(t)),
                  this.setViewVars(),
                  this.model.has("upload_completed") && !this.model.get("upload_completed") && this.$editControl.hide(),
                  this.setBackgroundIdAttribute(),
                  this.setTitleAttribute(),
                  this.model.getThumbnailUrl(function (t) {
                 //     e.$el.find(".tile-list-image").css("background-image", 'url("' + t + '")'), !1 === e.active && e.$el.find(".tile-list-image").addClass("tile-not-active");
                  }),
                  this
              );
          },
          setViewVars: function () {
              this.$editControl = this.$(".control-edit");
          },
          uploadComplete: function () {
              (this.backgroundId = this.model.get("_id") || this.model.id),
                  this.setBackgroundIdAttribute(),
                  this.$el.removeClass("uploading").css("clip-path", "none"),
                  this.main.syncActiveItem(),
                  this.model.get("upload_completed") && this.$editControl.css("display", "inline-block");
          },
          updateFileProgress: function () {
              var t = this.model.get("fileprogress"),
                  e = 100 - t;
              this.$el.css("clip-path", "inset(0 " + e + "% 0 0)"), 100 === t && this.uploadComplete();
          },
          onBackgroundLoadSuccessful: function () {
              this.removeActivatingState();
          },
          onBackgroundError: function () {
              this.removeActivatingState();
          },
          removeActivatingState: function () {
              this.setActiveInProgress && ((this.setActiveInProgress = !1), (this.parent.setActiveInProgress = !1), this.$el.removeClass("activating"));
          },
          setBackgroundIdAttribute: function () {
              this.$el.attr("data-background-id", this.model.id || this.model.get("_id"));
          },
          setTitleAttribute: function () {
              var t = this.model.get("title"),
                  e = o.utils.getFriendlyDate(this.model.get("display_date"));
              this.$el.attr("title", t ? t + " (" + e + ")" : e);
          },
          handleClickTile: function (t) {
              t.stopPropagation(), this.main.plusUser ? this.setBackgroundActive() : this.gotoDetail();
          },
          setBackgroundActive: function () {
              if (!1 !== this.active && !this.backgroundAlreadyActive() && !this.parent.setActiveInProgress) {
                  this.$el.removeClass("set-active-failed").addClass("activating"), (this.setActiveInProgress = !0), (this.parent.setActiveInProgress = !0);
                  var t = this;
                  this.model.setActive(
                      function () {
                          t.removeActivatingState(), t.$el.addClass("set-active-failed");
                      },
                      function () {
                          o.sendEvent(t.manager.panelTitle, "Set Active");
                      }
                  );
              }
          },
          backgroundAlreadyActive: function () {
              var t = o.collect.backgrounds.getActiveItem();
              return !(!t || this.backgroundId !== t.get("_id")) && (o.utils.toggleClassTwice(this.$el, "already-active"), !0);
          },
          handleClickSetActive: function (t) {
              t.stopImmediatePropagation(), this.main.plusUser ? this.setBackgroundActive() : this.manager.showPlusUpsellNotif();
          },
          handleClickEdit: function (t) {
              t.stopImmediatePropagation(), this.gotoDetail();
          },
          gotoDetail: function () {
              this.main.detailGotoDetail(this.is_custom, this.active, this.backgroundId);
          },
          destroy: function () {
              this.remove(), this.unbind();
          },
      })),
      o.commandManager &&
          (o.commandManager.registerCommand("settings.panels.backgrounds", function (t) {
              return new s.views.Main(t);
          }),
          o.commandManager.registerCommand("settings.panels.backgrounds.detailCustom", function (t) {
              if (t) return new s.views.DetailCustom(t);
          }),
          o.commandManager.registerCommand("settings.panels.backgrounds.detailStock", function (t) {
              if (t) return new s.views.DetailStock(t);
          }),
          o.commandManager.registerCommand("background.custom.uploadfiles", function (t) {
              t.length &&
                  (o.backgroundSettingsManager || (o.backgroundSettingsManager = new s.models.BackgroundSettingsManager()),
                  o.commandManager.executeAsync("settings.display", null, { section: "background-settings", cmd: "settings.panels.backgrounds" }),
                  1 == t.length
                      ? o.backgroundSettingsManager.uploadFile(t[0], function (i) {
                            i.getThumbnailUrl(function (t) {
                                var e = new o.models.BackgroundBase({ _id: i.id, title: "", attribution: " ", source: "", filename: t });
                                o.models.activeBackground.setActiveBackground(e),
                                    i.get("upload_verified")
                                        ? i.setActive(function () {})
                                        : i.listenToOnce(i, "change:upload_verified", function () {
                                              i.setActive(function () {});
                                          });
                            });
                        })
                      : o.backgroundSettingsManager.uploadFiles(t));
          })),
      s.styles.style(),
      o.trigger("settings:register:nav", { id: "background-settings", title: "Backgrounds", cmd: "settings.panels.backgrounds", position: 36 }),
      o.trigger("settings:register:panel", { id: "background-settings-detail-custom", section: "background-settings-detail-custom", cmd: "settings.panels.backgrounds.detailCustom" }),
      o.trigger("settings:register:panel", { id: "background-settings-detail-stock", section: "background-settings-detail-stock", cmd: "settings.panels.backgrounds.detailStock" }),
      s
  );
};
m.addinManager && m.addinManager.registerAddinFn("d52f5584-5033-4a16-866f-e97c7d7ac826", fn_addin);
