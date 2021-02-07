var fn_addin = function (f, v, t) {
  var n = n || {};
  (n.styles = n.styles || {}),
      (n.commands = n.commands || {}),
      (n.dependencies = t || n.dependencies || {}),
      (n.styles.style = function () {}),
      (n.views = n.views || {}),
      (n.collect = n.collect || {}),
      (n.models = n.models || {}),
      (n.templates = n.templates || {}),
      (n.info = { addin: "270aaed6-337f-433f-9d02-a471b435eada", id: "settings_todo", dependencies: ["settings"], commands: ["settings.panels.todo"] }),
      f.console.log(f.elapsed() + ": " + n.info.id + " started"),
      (n.templates = n.templates || {}),
      (n.templates.main = Handlebars.template({
          compiler: [6, ">= 2.0.0-beta.1"],
          main: function (t, e, i, s) {
              var n,
                  o,
                  a = e.helperMissing,
                  l = "function";
              return (
                  '<div class="settings-view-wrapper">\n\t<h3>Todo</h3>\n\t<p class="description">Break your goals into manageable pieces</p>\n\n\n\n\t<h4>Settings</h4>\n\t<ul class="settings-list options-list">\n\t\t<li class="slide-toggle has-toggle on" id="remember-open-state">\n\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t<span class="setting-name">Stay open</span>\n\t\t\t<span class="option-message">Stay open on new tab and other usage</span>\n\t\t</li>\n\t\t<li class="slide-toggle has-toggle on" id="auto-focus" data-test="settings-todo-autofocus">\n\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t<span class="setting-name">Autofocus</span> <span class="badge plus-badge">PLUS</span>\n\t\t\t<span class="option-message">Automatically set top todo as your main focus</span>\n\t\t</li>\n\t</ul>\n\n\n\n\t<h4>Multi-Todo Lists <span class="badge plus-badge">PLUS</span></h4>\n\t<p class="subdescription">Organize your todos into multiple lists</p>\n\n\t<div id="custom-lists" class="settings-todo-lists-container"><span class="loading" style="display: block;"><i class="loading-icon"></i>Loading...</span></div>\n\t\x3c!--<p class="tip">Tip: Use your <strong>&larr;</strong> and <strong>&rarr;</strong> keys to quickly move between lists.</p>--\x3e\n\n\t<div class="integrations">\n\t\t<h4 id="todo-settings-integrations">Integrations <span class="badge plus-badge">PLUS</span></h4>\n\t\t<p class="subdescription">Connect your external todos</p>\n\n\t\t<div id="connected-providers"><span class="loading"><i class="loading-icon"></i>Loading...</span></div>\n\t\t\x3c!-- <p class="empty">No external task managers connected. Add an integration to get started!</p> --\x3e\n\n\t\t<button class="button add-integration"><i class="icon icon-plus"></i>Add Integration</button>\n\n\t\t<div class="add-provider-container">\n\t\t<span class="hide-integration settings-cancel">\n\t\t\t<span class="icon-wrapper">\n\t\t\t\t' +
                  (null != (n = typeof (o = null != (o = e.iconCancel || (null != t ? t.iconCancel : t)) ? o : a) == l ? o.call(t, { name: "iconCancel", hash: {}, data: s }) : o) ? n : "") +
                  '</span>\n\t\t</span>\n\t\t\t<h4>Choose an Integration <i class="badge plus-badge">PLUS</i></h4>\n\n\t\t\t<p class="all-connected">Congratulations, you\'re fully connected!</p>\n\n\t\t\t<div id="available-providers"><span class="loading"><i class="loading-icon"></i>Loading...</span></div>\n\n\t\t\t<div class="suggest-integration">\n\t\t\t\t<h5>Looking for another integration?</h5>\n\t\t\t\t<p>\n\t\t\t\t\t<a href="' +
                  this.escapeExpression(typeof (o = null != (o = e.suggestIntegrationLink || (null != t ? t.suggestIntegrationLink : t)) ? o : a) == l ? o.call(t, { name: "suggestIntegrationLink", hash: {}, data: s }) : o) +
                  '" target="_blank">Suggest an Integration</a>\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n\n<div class="settings-connect"></div>\n'
              );
          },
          useData: !0,
      })),
      (n.templates["todo-color-palette"] = Handlebars.template({
          compiler: [6, ">= 2.0.0-beta.1"],
          main: function (t, e, i, s) {
              return '<li style="background: #d42022"></li>\x3c!--\n--\x3e<li style="background: #f05a0f"></li>\x3c!--\n--\x3e<li style="background: #ffaa00"></li>\x3c!--\n--\x3e<li style="background: #eae60b"></li>\x3c!--\n--\x3e<li style="background: #9fea0a"></li>\x3c!--\n--\x3e<li style="background: #40dc19"></li>\x3c!--\n--\x3e<li style="background: #05eba6"></li>\x3c!--\n--\x3e<li style="background: #17ccde"></li>\x3c!--\n--\x3e<li style="background: #14a7eb"></li>\x3c!--\n--\x3e<li style="background: #336be8"></li>\x3c!--\n--\x3e<li style="background: #5d56da"></li>\x3c!--\n--\x3e<li style="background: #990099"></li>\x3c!--\n--\x3e<li style="background: #c30f62"></li>\x3c!--\n--\x3e<li style="background: #e377c2"></li>\x3c!--\n--\x3e<li style="background: #e6e6e6"></li>\x3c!--\n--\x3e<li class="no-color"></li>\n';
          },
          useData: !0,
      })),
      (n.templates.todo_available = Handlebars.template({
          1: function (t, e, i, s) {
              var n,
                  o,
                  a = e.helperMissing,
                  l = "function",
                  r = this.escapeExpression;
              return (
                  '\t<li data-provider-id="' +
                  r(typeof (o = null != (o = e.id || (null != t ? t.id : t)) ? o : a) == l ? o.call(t, { name: "id", hash: {}, data: s }) : o) +
                  '" class="connect-todo">\n\t\t<img ' +
                  (null != (n = e.if.call(t, null != t ? t.GitHub : t, { name: "if", hash: {}, fn: this.program(2, s, 0), inverse: this.noop, data: s })) ? n : "") +
                  ' src="' +
                  r(typeof (o = null != (o = e.small_icon_url || (null != t ? t.small_icon_url : t)) ? o : a) == l ? o.call(t, { name: "small_icon_url", hash: {}, data: s }) : o) +
                  '">\x3c!--\n\t\t--\x3e<span class="provider-title">' +
                  r(typeof (o = null != (o = e.provider_title || (null != t ? t.provider_title : t)) ? o : a) == l ? o.call(t, { name: "provider_title", hash: {}, data: s }) : o) +
                  (null != (n = e.if.call(t, null != t ? t.beta : t, { name: "if", hash: {}, fn: this.program(4, s, 0), inverse: this.noop, data: s })) ? n : "") +
                  '</span>\x3c!--\n\t\t--\x3e<span class="scope">' +
                  r(typeof (o = null != (o = e.short_description || (null != t ? t.short_description : t)) ? o : a) == l ? o.call(t, { name: "short_description", hash: {}, data: s }) : o) +
                  "</span>\n\t\t" +
                  (null != (n = e.unless.call(t, null != t ? t.active : t, { name: "unless", hash: {}, fn: this.program(6, s, 0), inverse: this.noop, data: s })) ? n : "") +
                  "\n\t</li>\n"
              );
          },
          2: function (t, e, i, s) {
              return 'class="GitHub"';
          },
          4: function (t, e, i, s) {
              return ' <span class="badge beta-badge">Beta</span>';
          },
          6: function (t, e, i, s) {
              return '<span class="u--right status">Coming Soon</span>';
          },
          compiler: [6, ">= 2.0.0-beta.1"],
          main: function (t, e, i, s) {
              var n;
              return '<ul class="settings-list provider-list add-provider">\n' + (null != (n = e.each.call(t, t, { name: "each", hash: {}, fn: this.program(1, s, 0), inverse: this.noop, data: s })) ? n : "") + "</ul>\n";
          },
          useData: !0,
      })),
      (n.templates.todo_connected = Handlebars.template({
          1: function (t, e, i, s) {
              var n,
                  o,
                  a = e.helperMissing,
                  l = "function",
                  r = this.escapeExpression;
              return (
                  '\t<li data-provider-id="' +
                  r(typeof (o = null != (o = e.id || (null != t ? t.id : t)) ? o : a) == l ? o.call(t, { name: "id", hash: {}, data: s }) : o) +
                  '" class="has-provider-id' +
                  (null != (n = e.if.call(t, null != t ? t.provider_active : t, { name: "if", hash: {}, fn: this.program(2, s, 0), inverse: this.noop, data: s })) ? n : "") +
                  '">\n\t\t<a href="' +
                  r(typeof (o = null != (o = e.provider_url || (null != t ? t.provider_url : t)) ? o : a) == l ? o.call(t, { name: "provider_url", hash: {}, data: s }) : o) +
                  '" class="u--flex-grow">\n\t\t\t<img ' +
                  (null != (n = e.if.call(t, null != t ? t.GitHub : t, { name: "if", hash: {}, fn: this.program(4, s, 0), inverse: this.noop, data: s })) ? n : "") +
                  ' src="' +
                  r(typeof (o = null != (o = e.small_icon_url || (null != t ? t.small_icon_url : t)) ? o : a) == l ? o.call(t, { name: "small_icon_url", hash: {}, data: s }) : o) +
                  '">' +
                  r(typeof (o = null != (o = e.provider_title || (null != t ? t.provider_title : t)) ? o : a) == l ? o.call(t, { name: "provider_title", hash: {}, data: s }) : o) +
                  (null != (n = e.if.call(t, null != t ? t.beta : t, { name: "if", hash: {}, fn: this.program(6, s, 0), inverse: this.noop, data: s })) ? n : "") +
                  '\x3c!--\n\t\t\t--\x3e<span class="scope">' +
                  r(typeof (o = null != (o = e.short_description || (null != t ? t.short_description : t)) ? o : a) == l ? o.call(t, { name: "short_description", hash: {}, data: s }) : o) +
                  '</span>\n       \t</a>\n\t\t<span class="settings-list-right">\n\t\t\t<span class="provider-actions">\n\t\t\t\t' +
                  (null != (n = e.if.call(t, null != t ? t.config_command : t, { name: "if", hash: {}, fn: this.program(8, s, 0), inverse: this.noop, data: s })) ? n : "") +
                  "\n\t\t\t\t" +
                  (null != (n = e.unless.call(t, null != t ? t.provider_active : t, { name: "unless", hash: {}, fn: this.program(10, s, 0), inverse: this.noop, data: s })) ? n : "") +
                  "\n\t\t\t\t" +
                  (null != (n = e.unless.call(t, null != t ? t.prevent_disconnect : t, { name: "unless", hash: {}, fn: this.program(12, s, 0), inverse: this.noop, data: s })) ? n : "") +
                  "\n\t\t\t</span>\n\t\t\t" +
                  (null != (n = e.if.call(t, null != t ? t.provider_active : t, { name: "if", hash: {}, fn: this.program(14, s, 0), inverse: this.noop, data: s })) ? n : "") +
                  "\n\t\t</span>\n\t</li>\n"
              );
          },
          2: function (t, e, i, s) {
              return " active-provider";
          },
          4: function (t, e, i, s) {
              return 'class="GitHub"';
          },
          6: function (t, e, i, s) {
              return '<span class="badge beta-badge">Beta</span>';
          },
          8: function (t, e, i, s) {
              return '<span class="provider-action launch-config">Configure</span>';
          },
          10: function (t, e, i, s) {
              return '<span class="provider-action set-active">Set Active</span>';
          },
          12: function (t, e, i, s) {
              return '<span class="provider-action disconnect">Disconnect</span>';
          },
          14: function (t, e, i, s) {
              return '<span class="status">Active</span>';
          },
          compiler: [6, ">= 2.0.0-beta.1"],
          main: function (t, e, i, s) {
              var n;
              return '<ul class="settings-list provider-list connected-providers">\n' + (null != (n = e.each.call(t, t, { name: "each", hash: {}, fn: this.program(1, s, 0), inverse: this.noop, data: s })) ? n : "") + "</ul>\n";
          },
          useData: !0,
      })),
      (n.templates.todo_lists = Handlebars.template({
          1: function (t, e, i, s) {
              var n;
              return null != (n = e.unless.call(t, null != t ? t.deleted : t, { name: "unless", hash: {}, fn: this.program(2, s, 0), inverse: this.noop, data: s })) ? n : "";
          },
          2: function (t, e, i, s) {
              var n,
                  o,
                  a = e.helperMissing,
                  l = "function",
                  r = this.escapeExpression;
              return (
                  '\t<li data-id="' +
                  r(typeof (o = null != (o = e.csid || (null != t ? t.csid : t)) ? o : a) == l ? o.call(t, { name: "csid", hash: {}, data: s }) : o) +
                  '" class="settings-todo-list draggable-todo-list" draggable="true">\n\t\t<span class="settings-todo-list-color"></span>\n\n\t\t<span class="settings-todo-list-name">' +
                  r(typeof (o = null != (o = e.title || (null != t ? t.title : t)) ? o : a) == l ? o.call(t, { name: "title", hash: {}, data: s }) : o) +
                  '</span>\n\t\t\x3c!-- <span class="settings-list-status">\n\t\t\t<i class="loading-icon"></i>\n\t\t</span> --\x3e\n\t\t<span class="settings-list-right">\n' +
                  (null != (n = e.if.call(t, null != t ? t.stock : t, { name: "if", hash: {}, fn: this.program(3, s, 0), inverse: this.program(5, s, 0), data: s })) ? n : "") +
                  "\t\t</span>\n\t</li>\n"
              );
          },
          3: function (t, e, i, s) {
              return '\t\t\t\t<span class="action-group">\n\t\t\t\t\t<span class="default">Default</span>\n\t\t\t\t</span>\n';
          },
          5: function (t, e, i, s) {
              return '\t\t\t\t<span class="action-group">\x3c!--\n\t\t\t\t\t--\x3e<i class="rename-list-failed error-icon" title="Trouble connecting... Click to retry">!</i>\x3c!--\n\t\t\t\t\t--\x3e<span class="todo-rename-list action">Rename</span>\x3c!--\n\t\t\t\t\t--\x3e<span class="todo-delete-list action" title="Delete">\n\t\t\t\t\t\t<i class="icon-trash">\n\t\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 24"><path d="M19.15 7.5H2.838a.5.5 0 0 0-.5.5l1.81 14a2 2 0 0 0 2 2h9.954a2 2 0 0 0 2-2L19.65 8a.5.5 0 0 0-.5-.5zm-9.9 13a.75.75 0 0 1-1.5 0v-9a.75.75 0 0 1 1.5 0v9zm5 0a.75.75 0 0 1-1.5 0v-9a.75.75 0 0 1 1.5 0v9zM20.43 4h-4.18a.25.25 0 0 1-.25-.25V2.5A2.5 2.5 0 0 0 13.5 0h-5A2.5 2.5 0 0 0 6 2.5v1.25a.25.25 0 0 1-.25.25h-4.5a1 1 0 0 0 0 2h19.18a1 1 0 0 0 0-2zM8 3.75V2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1.25a.25.25 0 0 1-.25.25h-5.5A.25.25 0 0 1 8 3.75z" fill-rule="nonzero"/></svg>\n\t\t\t\t\t\t</i>\n\t\t\t\t\t</span>\x3c!--\n\t\t\t\t\t--\x3e<i class="delete-failed-1 error-icon" title="Trouble connecting... Click to retry">!</i>\x3c!--\n\t\t\t\t--\x3e</span>\x3c!--\n\t\t\t\t--\x3e<span class="delete-group" title="">\x3c!--\n\t\t\t\t\t--\x3e<span class="delete-1">\x3c!--\n\t\t\t\t\t\t--\x3e<span class="delete delete-msg">Delete list?</span>\x3c!--\n\t\t\t\t\t\t--\x3e<span class="delete delete-yes clickable">Yes</span>\x3c!--\n\t\t\t\t\t\t--\x3e<span class="delete delete-no clickable">No</span>\x3c!--\n\t\t\t\t\t--\x3e</span>\x3c!--\n\t\t\t\t\t--\x3e<span class="delete-2">\x3c!--\n\t\t\t\t\t\t--\x3e<span class="delete delete-msg-2"></span>\x3c!--\n\t\t\t\t\t\t--\x3e\x3c!--<span class="delete delete-todos clickable">Delete</span> comment out for release--\x3e\x3c!--\n\t\t\t\t\t\t--\x3e<span class="delete move-todos clickable">Move to Inbox</span>\x3c!--\n\t\t\t\t\t\t--\x3e<span class="delete delete-cancel clickable">Cancel</span>\x3c!--\n\t\t\t\t\t--\x3e</span>\x3c!--\n\t\t\t\t\t--\x3e<span class="delete delete-loading">Deleting...</span>\x3c!--\n\t\t\t\t\t--\x3e<i class="delete-failed-2 error-icon" title="Trouble connecting... Click to retry">!</i>\n\t\t\t\t</span>\n';
          },
          compiler: [6, ">= 2.0.0-beta.1"],
          main: function (t, e, i, s) {
              var n, o;
              return (
                  '<ul class="settings-list options-list settings-todo-lists">\n' +
                  (null != (n = e.each.call(t, t, { name: "each", hash: {}, fn: this.program(1, s, 0), inverse: this.noop, data: s })) ? n : "") +
                  '\t<li class="settings-todo-add-list">\n\t\t<input type="text" class="settings-todo-add-list-input" placeholder="+ Add a list" autocomplete="off">\n\t\t<i class="add-list-failed error-icon" title="Trouble connecting... Click to retry">!</i>\n\t\t<span class="toggle-add-list settings-cancel">\n\t\t\t<span class="icon-wrapper">\n\t\t\t\t' +
                  (null != (n = "function" == typeof (o = null != (o = e.iconCancel || (null != t ? t.iconCancel : t)) ? o : e.helperMissing) ? o.call(t, { name: "iconCancel", hash: {}, data: s }) : o) ? n : "") +
                  '</span>\n\t\t</span>\n\t\t<span class="settings-list-status">\n\t\t\t<i class="loading-icon"></i>\n\t\t</span>\n\t\t<button class="button toggle-add-list show"><i class="icon icon-plus"></i>Add List</button>\n\t</li>\n</ul>\n'
              );
          },
          useData: !0,
      })),
      (n.styles = n.styles || {}),
      (n.styles.style = function () {
          var t = document.createElement("style");
          (t.type = "text/css"),
              (t.innerHTML =
                  ".settings-todo-lists-container{margin-bottom:35px}.settings-todo .settings-todo-lists li{display:flex}.settings-todo-lists{margin-bottom:0;-webkit-user-select:none;user-select:none}.settings-todo-lists li{padding:var(--list-v-padding) 0;position:relative}.settings-todo-lists li:nth-last-child(2){border-bottom:1px solid var(--border-color)}.settings-todo-lists li.loading{display:block;margin:0}.settings-todo-list-color{margin:calc(var(--list-v-padding) * -1) 0;display:inline-flex;align-items:center;cursor:pointer}.settings-todo-list-color .swatch-container{margin:0;padding:10px;padding-left:var(--list-h-padding)}.settings-todo-list-color .swatch-container .swatch{--size:13px;height:var(--size);width:var(--size);box-shadow:none}.settings-todo-list-color .swatch-container:hover .swatch{box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.7),inset 0 0 4px 1px rgba(255,255,255,.3)}.light .settings-todo-list-color .active .swatch,.light .settings-todo-list-color .swatch-container:hover .swatch{opacity:.6!important}.settings-todo-list-color .active .swatch{box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.5),inset 0 0 4px 1px rgba(255,255,255,.3)!important}.settings-todo-list-color .swatch-container .swatch.no-color,.settings-todo-list-color .swatch-container .swatch.null-color{--box-shadow-color:rgba(255,255,255,.2);background-image:url(/img/grid.png)!important;box-shadow:inset 0 0 0 1.5px var(--box-shadow-color)}.light .settings-todo-list-color .swatch-container .swatch.no-color,.light .settings-todo-list-color .swatch-container .swatch.null-color{--box-shadow-color:rgba(0,0,0,.2)}.settings-todo-list-color .swatch-container:hover .swatch.no-color,.settings-todo-list-color .swatch-container:hover .swatch.null-color{--box-shadow-color:rgba(255,255,255,.4);background-image:url(/img/grid.png)!important;box-shadow:inset 0 0 0 1.5px var(--box-shadow-color)}.light .settings-todo-list-color .swatch-container:hover .swatch.no-color,.light .settings-todo-list-color .swatch-container:hover .swatch.null-color{--box-shadow-color:rgba(0,0,0,.4)}.settings-todo-list-color.none .swatch{box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.3)}.settings-todo-list:hover .none .swatch{opacity:.7}.none .settings-todo-list-color .swatch-container:hover .swatch{opacity:1}.color-palette-wrapper{position:relative}.swatch-color-picker{width:195px;padding:10px 10px 5px;position:absolute;bottom:35px;left:-8px;z-index:100;display:none;background:#282828;border-radius:4px;line-height:1px}.swatch-color-picker.nipple-bottom-left:after{left:13px;border-top-color:#282828!important}.active .swatch-color-picker{display:block}.swatch-color-picker li{height:20px;width:20px;margin:0 5px 5px 0;padding:0;display:inline-block!important;border:none!important;border-radius:4px;cursor:pointer}.swatch-color-picker li:nth-child(8n){margin-right:0;border:none}.swatch-color-picker li:hover{box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.75),inset 0 0 8px 1px rgba(255,255,255,.6)}.swatch-color-picker .active{box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.9)!important}.swatch-color-picker .no-color{background-image:url(/img/grid.png);box-shadow:inset 0 0 0 2px rgba(255,255,255,.3)}.swatch-color-picker .check{display:none;position:absolute;top:5px;left:5px;fill:#fff}.settings-todo-list-name{flex-grow:1;cursor:default;opacity:.9;outline:0;overflow:hidden}.settings-todo-list-name.editing{cursor:auto;outline:0;opacity:.6}.settings-todo-list.failed .rename-list-failed{display:inline-block}.loading .settings-list-status{display:block;opacity:1}.settings-list-right{display:flex;align-items:center}.loading .settings-list-right{display:none}.settings-list-right .delete{padding:4px}.settings-list-right .todo-delete-list,.settings-list-right .todo-delete-list .icon-trash{display:inline-flex}.settings-list-right .todo-delete-list .icon-trash>svg{height:12px;fill:var(--icon-color)}.settings-list-right .delete-2{display:none}.settings-list-right .error-icon{height:14px;width:14px;border-radius:100%;display:none;text-align:center}.settings-list-right .delete-failed-1{margin-right:5px;display:none}.settings-todo-list.failed .settings-list-right,.settings-todo-list.failed-delete .settings-list-right,.settings-todo-lists li:hover .settings-list-right{opacity:1}.settings-list-right .delete-group.failed .delete-failed-2{display:inline-block}.settings-list-right .action{margin:-9px 0;padding:9px 5px;cursor:pointer;opacity:.6}.settings-list-right .action:hover{opacity:1}.settings-list-right .action:active{opacity:.8}.settings-list-right .default{margin-right:5px}.settings-todo-lists .settings-todo-add-list{padding:0;position:relative;border-bottom:none!important;border-top:none}.settings-todo-lists .toggle-add-list{display:none}.settings-todo-lists .toggle-add-list.show{display:inline}.settings-todo-lists .settings-todo-add-list-input{margin-bottom:4px!important;padding:var(--list-v-padding) 20px var(--list-v-padding) var(--list-h-padding);display:none;border:0;opacity:.75}.settings-todo-add-list.loading .settings-todo-add-list-input{opacity:.5}.settings-todo-add-list .error-icon{height:14px;width:14px;position:absolute;top:9px;right:19px;border-radius:100%;display:none;text-align:center}.settings-todo-add-list.failed .error-icon{display:inline-block}.settings-todo-add-list .settings-cancel{margin:3px -6px 0 0;display:none}.loading .settings-cancel.show{display:none}.settings-todo-add-list.loading .settings-list-status{margin-top:9px}.settings-todo li a{padding:0;display:inline}.settings-todo .button{margin-top:.75rem}"),
              document.getElementsByTagName("head")[0].appendChild(t);
      }),
      (n.commands.ToggleKeepTodoState = f.models.Command.extend({
          defaults: { id: "todo.toggle.keepstate" },
          execute: function () {
              f.models.customization.toggle("keepTodoState"), f.models.customization.get("keepTodoState") || (localStorage.showTodoList = !1);
          },
      })),
      (n.views.TodoListColorPalette = Backbone.View.extend({
          tagName: "ul",
          attributes: { class: "nipple nipple-bottom-left swatch-color-picker" },
          template: n.templates["todo-color-palette"],
          active: !1,
          events: { "click li": "handleClick" },
          initialize: function (t) {
              (this.color = t.color.toLowerCase().replace(/ /g, "")), (this.callback = t.renderCallback);
          },
          render: function () {
              return this.$el.html(this.template()), this.preRender(), this;
          },
          selectColor: function (t) {
              this.$el.find("li").removeClass("active"), this.$el.find("svg").hide(), t.addClass("active"), t.find("svg").css("display", "block");
          },
          handleClick: function (t) {
              if ((t.stopPropagation(), f.conditionalFeatures.featureEnabled("plus")))
                  this.selectColor(v(t.target)), v(t.target).hasClass("no-color") ? (this.color = "rgba(0,0,0,0)") : (this.color = v(t.target).css("background-color")), this.callback(new Colors({ color: this.color }));
              else {
                  f.commandManager.execute("upsell.message", {
                      targetRegion: "settings",
                      sourceEvent: "colorCodeLists",
                      buttonText: "Learn more",
                      title: "Todo list color labels",
                      description: "Add a little color to your todo organization",
                  });
              }
          },
          preRender: function () {
              var s = this;
              this.$el.find("li").each(function (t, e) {
                  var i = v(e);
                  i.html(
                      '<svg class="check" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="10px" height="10px"><defs><filter id="f4" x="0" y="0" width="200%" height="200%"><feOffset result="offOut" in="SourceGraphic" dx="20" dy="20" /><feColorMatrix result="matrixOut" in="offOut" type="matrix" values="0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0" /><feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="10" /><feBlend in="SourceGraphic" in2="blurOut" mode="normal" /></filter></defs> <path class="path" d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0    c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7    C514.5,101.703,514.499,85.494,504.502,75.496z" /></svg>'
                  ),
                      i.hasClass("active") && i.find("svg").css("display", "block"),
                      0 == s.color.indexOf("rgba") && "1" == s.color.charAt(s.color.length - 2) && (s.color = "rgb(" + s.color.substring(5, s.color.length - 3) + ")"),
                      v(e).css("background-color").replace(/ /g, "") == s.color && s.selectColor(i);
              });
          },
      }));
  var s = n.dependencies.settings;
  n.views.Main = s.views.SettingsPanel.extend({
      attributes: { id: "settings-todo", class: "settings-view settings-todo", "data-test": "settings-todo" },
      template: n.templates.main,
      panelid: "todo",
      panelTitle: "Todo Settings",
      events: {
          "click #remember-open-state": "toggleRememberOpenState",
          "click #auto-focus": "toggleAutoFocus",
          "dblclick .draggable-todo-list": "handleClickRenameList",
          "dblclick .settings-list-right": "preventRenameOnActions",
          "keyup .settings-todo-list-name": "handleEscKeyupRename",
          "keypress .settings-todo-list-name": "handleEnterKeypressRename",
          "blur .settings-todo-list-name": "onBlur",
          "click .todo-rename-list": "handleClickRenameList",
          "click .rename-list-failed": "saveList",
          "click .todo-delete-list": "toggleDeleteConf",
          "click .delete-failed-1": "toggleDeleteConf",
          "click .delete-yes": "handleClickDeleteYes",
          "click .delete-no": "toggleDeleteConf",
          "click .delete-todos": "handleClickDeleteTodos",
          "click .move-todos": "handleClickMoveTodos",
          "click .delete-cancel": "handleClickDeleteCancel",
          "click .delete-failed-2": "showDeleteConf",
          "click .toggle-add-list": "toggleAddList",
          "click .add-list-failed": "processAddListForm",
          "keyup .settings-todo-add-list-input": "handleEscKeyupAdd",
          "keypress .settings-todo-add-list-input": "handleEnterKeypressAdd",
          "click .connect-todo": "initiateConnectProvider",
          "click #connect-button": "connectTodoProvider",
          "click .add-integration": "toggleAddIntegration",
          "click .hide-integration": "toggleAddIntegration",
          "click .set-active": "setProviderActive",
          "click .disconnect": "disconnectProvider",
          "click .launch-config": "launchConfiguration",
          "click .back": "cancelConnect",
          "dragstart .draggable-todo-list": "dragstart",
          "dragenter .draggable-todo-list": "dragenter",
          dragover: "dragover",
          dragend: "dragend",
          drop: "drop",
      },
      initialize: function () {
          _.bindAll(this, "dragstart", "dragenter");
          var e = this;
          f.widgetManager.getWidgetAsync("todo").then(function (t) {
              (e.todos = t) && !t.manager && t.doFirstFetch(),
                  (e.collection = new f.collect.Settings()),
                  (e.collection.url = f.globals.urlRoot + "settings/todo"),
                  (e.collection.parse = function (t) {
                      return (e.collection.lastResponse = t).connected_providers;
                  }),
                  e.listenTo(e.collection, "reset", e.collectionReset),
                  e.listenTo(f, "todo:providerChanged", e.providerChanged),
                  e.listenTo(f.models.customization, "change", e.customizationChanged),
                  e.refreshData(),
                  t.manager.getMomoLists().then(function (t) {
                      (e.momoCustomLists = t), e.populateCustomLists(), e.listenTo(e.momoCustomLists, "reset refresh server-sync", e.populateCustomLists);
                  });
          }),
              f.sendEvent(this.panelTitle, "Panel Opened");
      },
      render: function (t) {
          var e = { suggestIntegrationLink: f.utils.mConst("suggestIntegrationLink") },
              i = this;
          return (
              this.$el.html(this.template(e)),
              f.conditionalFeatures.featureEnabled("integrationsDisabled") && this.$el.find(".integrations").hide(),
              (this.$connect = v(this.$el.find(".settings-connect")[0])),
              (this.$todo = v(this.$el.find(".settings-view-wrapper")[0])),
              (this.$addIntegration = this.$(".add-integration")),
              (this.$addProviderContainer = this.$(".add-provider-container")),
              this.setControlStates(),
              (this.$placeholder = v("<li></li>").addClass("placeholder")),
              this.$placeholder.appendTo(this.$el),
              this.$placeholder.hide(),
              (this.intervalId = setInterval(
                  function (e) {
                      f.widgetManager.getWidgetAsync("todo").then(function (t) {
                          try {
                              (e.momoProvider = t.manager.todoProviderDetails("1", !0)), e.momoProvider && clearInterval(e.intervalId);
                          } catch (t) {
                              clearInterval(e.intervalId), v(e.$el.find("#custom-lists")[0]).html("");
                          }
                      });
                  },
                  100,
                  this
              )),
              setTimeout(function () {
                  t &&
                      "connect" == t.action &&
                      (i.$addIntegration.hide(),
                      i.$addProviderContainer.css("display", "block"),
                      setTimeout(function () {
                          v(".settings-todo").animate({ scrollTop: v("#todo-settings-integrations").position().top });
                      }, 100));
              }, 50),
              this
          );
      },
      populateCustomLists: function () {
          this.$customLists = v(this.$el.find("#custom-lists")[0]);
          var t = [],
              e = [];
          this.momoCustomLists && ((t = this.momoCustomLists.toJSON()), (e = this.momoCustomLists.where({ deleted: !1 })));
          try {
              t = t.sort(function (t, e) {
                  return t.order - e.order;
              });
          } catch (t) {}
          var i = n.templates.todo_lists(t);
          this.$customLists.html(i), this.momoCustomLists && this.$(".draggable-todo-list").attr("draggable", this.momoCustomLists.allowReorder), (this.$addListInput = this.$(".settings-todo-add-list-input"));
          var s = this;
          e.map(function (t) {
              var e = new n.views.TodoListColorPicker(t.get("csid"), t.getColor(), s);
              s.$customLists
                  .find('[data-id="' + t.get("csid") + '"]')
                  .find(".settings-todo-list-color")
                  .append(e.render().$el);
          });
      },
      setListColor: function (t, e, i) {
          var s = this.momoCustomLists.findWhere({ csid: t }),
              n = this.$customLists.find('[data-id="' + t + '"]');
          n.addClass("loading"),
              n.find(".settings-list-status").addClass("loading"),
              s.save(
                  { color: i },
                  {
                      patch: !1,
                      success: function () {
                          n.removeClass("loading"), n.find(".settings-list-status").removeClass("loading"), f.trigger("globalEvent:resetLists", { listId: t });
                      },
                      error: function () {
                          n.find(".settings-list-status").removeClass("loading"), n.removeClass("loading").addClass("failed");
                      },
                  }
              );
      },
      handleClickRenameList: function (t) {
          if (f.conditionalFeatures.featureEnabled("plus")) {
              (this.clickedListId = this.getClickedListId(t)),
                  this.momoCustomLists.findWhere({ csid: this.clickedListId }).get("stock") ||
                      ((this.$clickedListLi = this.$customLists.find('[data-id="' + this.clickedListId + '"]')),
                      (this.$clickedListName = this.$clickedListLi.find(".settings-todo-list-name")),
                      this.$clickedListName.attr("contenteditable", !0).addClass("editing").trigger("focus"),
                      f.utils.setEndOfContentEditable(this.$clickedListName.get(0)),
                      (this.clickedListNameText = this.$clickedListName.text()));
          } else {
              f.commandManager.execute("upsell.message", { targetRegion: "settings", sourceEvent: "customLists", buttonText: "Learn more", title: "Multi-todo Lists", description: "Create and customize multiple todo lists" });
          }
      },
      getClickedListId: function (t) {
          return v(t.delegatedTarget).closest("li").data("id");
      },
      handleClickDelete: function (t) {
          t.stopPropagation();
          var e = this.getClickedListId(t);
          this.deleteList(e);
      },
      handleClickDeleteYes: function (t) {
          t.stopPropagation();
          var e = this.getClickedListId(t),
              i = this.$customLists.find('[data-id="' + e + '"]');
          if ((i.find(".delete-1").hide(), this.momoCustomLists.offlineOnly)) return t.stopPropagation(), void this.deleteList(e);
          i.find(".delete-2").css("display", "inline");
      },
      handleClickDeleteTodos: function (t) {
          t.stopPropagation();
          var e = this.getClickedListId(t);
          this.deleteList(e);
      },
      handleClickMoveTodos: function (t) {
          t.stopPropagation();
          var e = this.getClickedListId(t);
          this.deleteList(e);
      },
      handleClickDeleteCancel: function (t) {
          var e = this.getClickedListId(t),
              i = this.$customLists.find('[data-id="' + e + '"]');
          i.find(".action-group").css("display", "inline"), i.find(".delete-1").css("display", "inline"), i.find(".delete-2").hide(), i.find(".delete-group").hide();
      },
      deleteList: function (t) {
          var e = this.$customLists.find('[data-id="' + t + '"]'),
              i = e.find(".delete-group");
          if (!i.hasClass("loading")) {
              i.removeClass("failed").addClass("loading");
              var s = this.momoCustomLists.findWhere({ csid: t });
              this.momoCustomLists.selectedListId === s.id && this.momoCustomLists.switchToDefaultList();
              var n = { wait: !0, serverSuccess: o };
              this.momoCustomLists.offlineOnly && (n.success = o), s.save({ deleted: !0 }, n), f.sendEvent(this.panelTitle, "Custom lists", "Delete");
          }
          function o() {
              i.removeClass("loading"), e.remove(), f.trigger("globalEvent:refreshInbox");
          }
      },
      toggleDeleteConf: function (t) {
          t.stopPropagation();
          var e = this,
              i = this.getClickedListId(t),
              s = this.$customLists.find('[data-id="' + i + '"]'),
              n = s.find(".action-group");
          n.is(":visible")
              ? this.checkTodoCount(
                    i,
                    function (t) {
                        e.deleteOrConfirm(i, t);
                    },
                    function () {
                        e.todoCountCheckFailed(i);
                    }
                )
              : (s.find(".delete-yes").removeClass("loading failed"), s.find(".delete-group").hide(), n.css("display", "inline"));
      },
      preventRenameOnActions: function (t) {
          t.stopPropagation(), t.preventDefault();
      },
      deleteOrConfirm: function (t, e) {
          var i = this.$customLists.find('[data-id="' + t + '"]');
          i.find(".action-group").hide(),
              0 < e ? (i.find(".delete-group").css("display", "inline"), i.find(".delete-yes").removeClass("loading failed"), i.find(".delete-msg-2").css("display", "inline").text(this.setDelete2Msg(e))) : this.deleteList(t);
      },
      showDeleteConf: function (t) {
          this.$customLists
              .find('[data-id="' + this.getClickedListId(t) + '"]')
              .find(".delete-group")
              .removeClass("failed");
      },
      todoCountCheckFailed: function (t) {
          var e = this.$customLists.find('[data-id="' + t + '"]');
          e.find(".todo-delete-list").hide(), e.find(".delete-failed-1").css({ display: "inline-block" }), e.addClass("failed-delete");
      },
      setDelete2Msg: function (t) {
          var e = "List has " + t;
          return (e += 1 < t ? " todos." : " todo.");
      },
      checkTodoCount: function (t, s, e) {
          var i = this.momoCustomLists.findWhere({ csid: t });
          if (this.momoCustomLists.offlineOnly) return i.itemCollection.fetch({ silent: !0, ignoreRender: !0 }), void s(i.itemCollection.where({ deleted: !1 }).length);
          var n = f.globals.urlRootApi + "todos?listid=" + i.get("id");
          v.ajax({ type: "GET", contentType: "application/json", url: n })
              .done(function (t) {
                  var e = null,
                      i = t.items || t;
                  (e = i.length),
                      i.forEach(function (t) {
                          t.today && e--;
                      }),
                      s(e);
              })
              .fail(function () {
                  e();
              });
      },
      handleEscKeyupRename: function (t) {
          27 === t.keyCode && (t.stopPropagation(), this.abortRenameList());
      },
      handleEnterKeypressRename: function (t) {
          13 === t.keyCode && (t.preventDefault(), t.shiftKey || t.ctrlKey || t.metaKey || t.altKey || this.saveList());
      },
      handleEscKeyupAdd: function (t) {
          27 === t.keyCode && (t.stopPropagation(), this.abortAddList());
      },
      handleEnterKeypressAdd: function (t) {
          13 === t.keyCode && (t.preventDefault(), t.shiftKey || t.ctrlKey || t.metaKey || t.altKey || this.processAddListForm());
      },
      toggleAddList: function () {
          if (f.conditionalFeatures.featureEnabled("plus"))
              this.$(".toggle-add-list").toggleClass("show"),
                  (this.$addListLi = this.$(".settings-todo-add-list")),
                  (this.$addListInput = this.$(".settings-todo-add-list-input")),
                  this.$addListInput.mToggle("inline-block"),
                  this.$addListInput.is(":visible") && this.$addListInput.trigger("focus");
          else {
              f.commandManager.execute("upsell.message", { targetRegion: "settings", sourceEvent: "customLists", buttonText: "Learn more", title: "Multi-todo Lists", description: "Create and customize multiple todo lists" });
          }
      },
      processAddListForm: function () {
          var t = f.utils.capitalizeFirstLetter(this.$addListInput.val().trim()),
              e = this;
          t &&
              (this.$addListLi.removeClass("failed"),
              this.$addListInput.trigger("blur"),
              this.momoProvider.selectedProject().addNewList(t, function () {
                  e.populateCustomLists(), f.sendEvent(e.panelTitle, "Custom lists", "Add");
              }));
      },
      abortRenameList: function () {
          this.$clickedListName.attr("contenteditable", !1).removeClass("editing"), this.$clickedListName.html(this.clickedListNameText);
      },
      saveList: function () {
          var t = this;
          if (!this.$clickedListLi.hasClass("loading")) {
              var e = this.$clickedListName.text().trim();
              if (e)
                  this.$clickedListLi.find(".settings-list-status").addClass("loading"),
                      this.$clickedListLi.removeClass("failed").addClass("loading"),
                      this.$clickedListName.trigger("blur"),
                      this.momoCustomLists.findWhere({ csid: this.clickedListId }).save(
                          { title: e },
                          {
                              patch: !1,
                              success: function () {
                                  t.$clickedListLi.removeClass("loading"),
                                      t.$clickedListLi.find(".settings-list-status").removeClass("loading"),
                                      t.$clickedListName.text(e).attr("contenteditable", !1).removeClass("editing"),
                                      f.trigger("globalEvent:resetLists", { listId: t.clickedListId });
                              },
                              error: function () {
                                  t.$clickedListLi.find(".settings-list-status").removeClass("loading"), t.$clickedListLi.removeClass("loading").addClass("failed");
                              },
                          }
                      );
              else this.$clickedListName.text(this.clickedListNameText);
          }
      },
      abortAddList: function (t) {
          t && t.preventDefault(), this.$addListInput.val("");
      },
      onBlur: function () {
          this.saveList();
      },
      providerChanged: function () {
          this.populateConnectedProviders();
      },
      customizationChanged: function (t) {
          if (t) {
              var e = t.changedAttributes();
              (e.hasOwnProperty("autoFocus") || e.hasOwnProperty("keepTodoState")) && this.setControlStates();
          }
      },
      collectionReset: function () {
          this.populateConnectedProviders(), this.populateAvailableProviders();
      },
      refreshData: function () {
          this.collection.fetch({ reset: !0 });
      },
      initiateConnectProvider: function (t) {
          if ((t && t.preventDefault(), (this.connect_provider_id = parseInt(v(t.delegatedTarget).data("provider-id"))), f.conditionalFeatures.featureEnabled("plus"))) {
              var e = _.findWhere(this.collection.lastResponse.available_providers, { id: this.connect_provider_id });
              e.active && (this.$connect.html(s.templates.connect(e)), this.$todo.hide(), this.$connect.css("display", "flex"), f.sendEvent(this.panelTitle, "Integrations", "Connect detail for " + e.provider_title));
          } else {
              var i = { targetRegion: "settings", sourceEvent: "todo-" + this.connect_provider_id, buttonText: "Learn more", title: "Todo Integrations", description: "Sync your todos from other task managers" };
              f.commandManager.execute("upsell.message", i);
          }
      },
      setProviderActive: function (t) {
          t && (t.stopPropagation(), t.preventDefault());
          var e = parseInt(v(t.delegatedTarget).closest(".has-provider-id").data("provider-id")),
              i = f.widgetManager.getWidget("todo");
          e && i && i.manager && (i.manager.changeProviderAsync(e), f.sendEvent(this.panelTitle, "Integrations", "Set active"));
      },
      disconnectProvider: function (t) {
          var s = this;
          t && (t.stopPropagation(), t.preventDefault());
          var n = parseInt(v(t.delegatedTarget).closest(".has-provider-id").data("provider-id")),
              e = f.globals.urlRootApi + "settings/todo/providers/" + n;
          v.ajax({ type: "DELETE", contentType: "application/json", url: e })
              .done(function (t) {
                  if (t.status && "success" == t.status) {
                      var e = localStorage.activeTodoProvider.replace(/['"]+/g, "");
                      if (localStorage.activeTodoProvider && (n.toString() == e || n.toString() == e.substring(0, e.indexOf("-")))) var i = f.widgetManager.getWidget("todo");
                      i && i.manager && i.manager.changeProvider("1"), s.refreshData(), f.sendEvent(s.panelTitle, "Integrations", "Disconnect");
                  }
              })
              .fail(function () {});
      },
      launchConfiguration: function (t) {
          t && (t.stopPropagation(), t.preventDefault());
          var e = parseInt(v(t.delegatedTarget).closest(".has-provider-id").data("provider-id"));
          if (e) {
              var i = this.collection.get(e);
              if (i) {
                  var s = i.get("config_command");
                  s && f.commandManager.execute(s);
              }
          }
      },
      toggleRememberOpenState: function (t) {
          t && (t.stopPropagation(), t.preventDefault()), f.commandManager.execute("todo.toggle.keepstate"), f.sendEvent(this.panelTitle, "Toggle stay open");
      },
      toggleAutoFocus: function (t) {
          if ((t && t.preventDefault(), f.conditionalFeatures.featureEnabled("plus"))) f.commandManager.execute("todo.toggle.autofocus");
          else {
              f.commandManager.execute("upsell.message", { targetRegion: "settings", sourceEvent: "todo-autofocus", buttonText: "Learn more", title: "Autofocus", description: "Focus on your tasks one at a time." });
          }
      },
      setControlStates: function () {
          this.$el.find("#auto-focus").toggleClass("on", f.conditionalFeatures.featureEnabled("plus") && f.models.customization.get("autoFocus")),
              this.$el.find("#remember-open-state").toggleClass("on", f.models.customization.get("keepTodoState"));
      },
      connectTodoProvider: function (t) {
          t && (t.stopPropagation(), t.preventDefault()), v(this.$el.find("#connect-button")[0]).html("Connecting...");
          var u = this;
          this.authAttempts = 0;
          var e = this.connect_provider_id,
              i = f.globals.urlRootApi + "settings/todo/providers",
              m = { provider_id: e };
          v.ajax({ type: "PUT", contentType: "application/json", url: i, data: JSON.stringify(m) })
              .done(function (t) {
                  if (t.status && "authRequired" === t.status) {
                      if (t.authorizationUrl && u.authAttempts < 2) {
                          u.authAttempts++;
                          function e() {
                              l &&
                                  !l.closed &&
                                  setTimeout(function () {
                                      l && !l.closed && l.close();
                                  }, 1e3),
                                  u.$connect.hide(),
                                  u.$todo.css("display", "block"),
                                  u.refreshData(),
                                  f.trigger("todo:newProvider"),
                                  t.change_provider && f.commandManager.execute("settings.todo.provider.change", null, { provider_id: t.initial_load_provider || m.provider_id, newProvider: !0 }),
                                  t.config_command && f.commandManager.execute(t.config_command);
                          }
                          var i = t.winWidth ? t.winWidth : 600,
                              s = t.winHeight ? t.winHeight : 510,
                              n = t.windowFeatures ? t.windowFeatures : "titlebar,resizable,status",
                              o = window.screen.width / 2 - i / 2,
                              a = window.screen.height / 2 - s / 2,
                              l = window.open(t.authorizationUrl, "MomentumAuthWindow", n + ",left=" + o + ",top=" + a + ",width=" + i + ",height=" + s),
                              r = t.authorizationUrl.split("/"),
                              d = "";
                          1 < r.length && (d = r[r.length - 1]);
                          var c = f.globals.urlRootApi + "user/auth/status/" + d,
                              g = 0,
                              p = 1e3,
                              h = function () {
                                  l && !l.closed
                                      ? 100 < ++g ||
                                        (g % 30 && (p += 1e3),
                                        v
                                            .ajax({ type: "GET", contentType: "application/json", url: c })
                                            .done(function (t) {
                                                t && t.token_obtained
                                                    ? e()
                                                    : setTimeout(function () {
                                                          h();
                                                      }, p);
                                            })
                                            .fail(function () {
                                                setTimeout(function () {
                                                    h();
                                                }, p);
                                            }))
                                      : e();
                              };
                          h();
                      }
                  } else t.status && "success" === t.status && (u.refreshData(), t.config_command && f.commandManager.execute(t.config_command));
              })
              .fail(function () {});
      },
      cancelConnect: function (t) {
          t && (t.stopPropagation(), t.preventDefault()), this.$connect.hide(), this.$todo.css("display", "block");
      },
      populateConnectedProviders: function () {
          var t = v(this.$el.find("#connected-providers")[0]),
              e = JSON.parse(localStorage.activeTodoProvider || 1);
          Number.isInteger(e) || (e = parseInt(e, 10)),
              e &&
                  0 < e &&
                  this.collection.forEach(function (t) {
                      "GitHub" == t.get("provider_title") && t.set("GitHub", !0), e == t.id ? t.set("provider_active", !0) : t.set("provider_active", !1);
                  });
          var i = n.templates.todo_connected(this.collection.toJSON());
          t.html(i), 0 == this.collection.length ? (v(this.$el).find(".empty").css("display", "block"), t.hide()) : t.css("display", "block").find(".empty").hide();
      },
      populateAvailableProviders: function () {
          var t = v(this.$el.find("#available-providers")[0]),
              e = this.collection.lastResponse.available_providers || [];
          e.forEach(function (t) {
              "GitHub" == t.provider_title && (t.GitHub = !0);
          });
          var i = n.templates.todo_available(e);
          t.html(i),
              this.collection.lastResponse.available_providers
                  ? this.collection.lastResponse.available_providers &&
                    0 < this.collection.lastResponse.available_providers.length &&
                    (v(this.$el).find(".all-connected").hide(), v(this.$el).find("#available-providers").css("display", "block"))
                  : (v(this.$el).find(".all-connected").css("display", "block"), v(this.$el).find("#available-providers").hide());
      },
      toggleAddIntegration: function () {
          var t = f.widgetManager.getWidget("todo");
          t && t.manager && t.manager.fetchTodoProviders();
          var e = this.$todo.scrollTop();
          if ((this.$addIntegration.mToggle("inline-block"), this.$addProviderContainer.mToggle("block"), this.$todo.scrollTop(e), this.$addProviderContainer.is(":visible"))) {
              var i = v(".settings-view-container");
              i[0].scrollTo({ top: i[0].scrollHeight, behavior: "smooth" }), f.sendEvent(this.panelTitle, "Integrations", "Show list");
          }
      },
      listIndex: function (t) {
          return this.$(".draggable-todo-list").index(t);
      },
      dragover: function (t) {
          return t.preventDefault(), t.stopPropagation(), !(t.originalEvent.dataTransfer.dropEffect = "move");
      },
      dragend: function (t) {
          (t.originalEvent.dataTransfer.dropEffect = "move"), t.preventDefault(), t.stopPropagation(), this.dragging.css("display", "list-item"), this.$placeholder.hide();
          var e = {
                  operations: [
                      {
                          REORDER: {
                              move_id: this.momoCustomLists.findWhere({ csid: this.dragging.data("id") }).get("id"),
                              move_target_id: this.momoCustomLists.findWhere({ csid: this.move_target_id }).get("id"),
                              move_offset: this.move_offset,
                          },
                      },
                  ],
              },
              i = this;
          return (
              v
                  .ajax({ type: "PATCH", contentType: "application/json", data: JSON.stringify(e), url: f.globals.urlRoot + "settings/todo/providers/1/lists" })
                  .done(function () {
                      i.momoCustomLists.fetch({ reset: !0, skipLocalFetch: !0 });
                  })
                  .fail(function () {
                      i.momoCustomLists.fetch({ reset: !0, skipLocalFetch: !0 });
                  }),
              !1
          );
      },
      dragstart: function (t) {
          if (this.momoCustomLists.offlineOnly) return !1;
          var e = v(t.delegatedTarget);
          (t.originalEvent.dataTransfer.effectAllowed = "move"), t.originalEvent.dataTransfer.setData("text", "dummy"), (this.dragging = e);
      },
      drop: function (t) {
          t.preventDefault();
      },
      dragenter: function (t) {
          var e = v(t.delegatedTarget);
          this.dragging.hide(),
              this.listIndex(this.$placeholder) < this.listIndex(e) && 0 != this.listIndex(e)
                  ? (e.after(this.$placeholder), (this.move_target_id = e.data("id")), (this.move_offset = 1))
                  : (e.before(this.$placeholder), (this.move_target_id = e.data("id")), (this.move_offset = -1));
          var i = this.$placeholder;
          this.$placeholder.css("display", "list-item"), i.height(e.height()), i.after(this.dragging);
      },
  });
  s = n.dependencies.settings;
  return (
      (n.views.TodoListColorPicker = Backbone.View.extend({
          tagName: "ul",
          attributes: { class: "color-palette-wrapper" },
          template: s.templates["color-picker"],
          events: { "click .swatch-container": "handleClick", "dblclick .swatch-container": "ignoreDblClick", "mouseenter .swatch-container": "handleMouseEnter", "mouseleave .swatch-container": "handleMouseLeave" },
          active: !1,
          initialize: function (t, e, i, s) {
              (this.transparent = "rgba(0,0,0,0)"),
                  e ? (this.listColor = this.normalizeColor(e)) : ((this.listColor = this.transparent), (this.nullColor = !0)),
                  (this.listId = t),
                  (this.parent = i),
                  (this.options = s),
                  this.render(),
                  this.listenTo(f, "globalEvent:click", this.globalClick);
          },
          globalClick: function (t) {
              !v.contains(this.$el[0], t.target) && this.$picker && this.$picker.is(":visible") && this.togglePicker();
          },
          render: function () {
              return (
                  this.$el.html(this.template()),
                  this.delegateEvents(),
                  (this.$swatch = this.$el.find(".swatch").first()),
                  (!this.nullColor && this.listColor != this.transparent) || this.$swatch.addClass("null-color"),
                  this.$swatch.css({ backgroundColor: this.listColor }),
                  this.picker && ((this.$picker = this.picker.render().$el), this.$el.append(this.$picker)),
                  this
              );
          },
          dismiss: function () {
              this.$picker && this.$picker.hide();
          },
          toRgbA: function (t) {
              return "rgba(" + Math.round(255 * t.rgb.r) + "," + Math.round(255 * t.rgb.g) + "," + Math.round(255 * t.rgb.b) + "," + t.alpha + ")";
          },
          handleMouseEnter: function () {
              var t = this.$swatch;
              this.normalizeColor(t.css("background-color")) == this.transparent && t.addClass("no-color");
          },
          handleMouseLeave: function () {
              var t = this.$swatch;
              this.normalizeColor(t.css("background-color")) != this.transparent || this.keepTransOn || t.removeClass("no-color");
          },
          ignoreDblClick: function (t) {
              t.stopPropagation();
          },
          handleClick: function () {
              var s = this;
              setTimeout(function () {
                  if (s.picker) s.togglePicker();
                  else {
                      var t = {
                              color: s.listColor,
                              renderCallback: function (t) {
                                  if (t) {
                                      var e = t.colors,
                                          i = s.normalizeColor(s.toRgbA(e));
                                      s.$swatch.css({ backgroundColor: i, color: 0.22 < e.RGBLuminance ? "#222" : "#ddd" }),
                                          i == s.transparent
                                              ? (s.$swatch.addClass("null-color"), s.$swatch.addClass("no-color"), (s.keepTransOn = !0))
                                              : (s.$swatch.removeClass("no-color"), s.$swatch.removeClass("null-color"), (s.keepTransOn = !1)),
                                          s.parent.setListColor(s.listId, e, i),
                                          setTimeout(function () {
                                              s.togglePicker();
                                          }, 10);
                                  }
                              },
                          },
                          e = s.listColor ? s.listColor : s.transparent;
                      e && (t.color = e),
                          (s.picker = new n.views.TodoListColorPalette(t)),
                          (s.$picker = s.picker.render().$el),
                          s.$picker.addClass("todo-color-picker"),
                          s.$el.append(s.$picker),
                          setTimeout(function () {
                              s.togglePicker();
                          }, 10);
                  }
              }, 0);
          },
          togglePicker: function () {
              if (this.$picker) {
                  var t = this.$swatch,
                      e = this;
                  this.$picker.is(":visible")
                      ? (this.$el.removeClass("active"), this.normalizeColor(t.css("background-color")) == this.transparent && t.removeClass("no-color"), (this.keepTransOn = !1))
                      : (this.$el.addClass("active"),
                        setTimeout(function () {
                            var t = e.$el.closest(".settings-todo");
                            t.offset() && e.$picker.offset().top - t.offset().top < 0 && t.animate({ scrollTop: t[0].scrollTop + e.$picker.offset().top - t.offset().top - 12 });
                        }, 10),
                        this.picker.preRender(!0),
                        this.normalizeColor(t.css("background-color")) == this.transparent && (t.addClass("no-color"), (this.keepTransOn = !0)));
              }
          },
          normalizeColor: function (t) {
              return t.replace(/ /g, "").toLocaleLowerCase();
          },
          close: function () {
              this.dismiss();
          },
      })),
      f.commandManager &&
          f.commandManager.registerCommand("settings.panels.todo", function () {
              return n.styleLoaded || ((n.styleLoaded = !0), n.styles.style()), new n.views.Main();
          }),
      n
  );
};
m.addinManager && m.addinManager.registerAddinFn("270aaed6-337f-433f-9d02-a471b435eada", fn_addin);
