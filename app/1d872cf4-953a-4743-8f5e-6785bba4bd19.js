var fn_addin = function (d, a, t) {
  var s = s || {};
  return (
      (s.styles = s.styles || {}),
      (s.commands = s.commands || {}),
      (s.dependencies = t || s.dependencies || {}),
      (s.styles.style = function () {}),
      (s.views = s.views || {}),
      (s.collect = s.collect || {}),
      (s.models = s.models || {}),
      (s.templates = s.templates || {}),
      (s.info = {
          widget: !0,
          placeholderType: "none",
          id: "settings",
          dependencies: ["settings_common"],
          addin: "1d872cf4-953a-4743-8f5e-6785bba4bd19",
          commands: ["settings.initialize", "settings.display"],
          elementId: "settings",
          class: "app-container settings",
          label: "Settings",
          appClass: "settings-app",
          region: "bottom-left",
          order: "prepend",
          width: 500,
          height: 400,
          toggleEvent: "globalEvent:key:L",
          closeOnEsc: "true",
      }),
      d.console.log(d.elapsed() + ": " + s.info.id + " started"),
      (s.templates = s.templates || {}),
      (s.templates.about = Handlebars.template({
          compiler: [6, ">= 2.0.0-beta.1"],
          main: function (t, e, n, s) {
              var a;
              return (
                  `<img src="img/logo.svg" class="logo logo-color">
                  <img src="img/logo-white.svg" class="logo logo-white">
                  <h3>Momentum</h3>
                  <p class="made">Personal Dashboard <span id="momo-version">v
                  ${this.escapeExpression("function" == typeof (a = null != (a = e.version || (null != t ? t.version : t)) ? a : e.helperMissing) ? a.call(t, { name: "version", hash: {}, data: s }) : a)}
                  </span></p>
                  <p class="thanks">
                    <a href="https://github.com/juliancruzsanchez/momentum-cracked/releases">Check for Updates</a></p>
                    <p class="links">
                        <a href="http://momentumdash.com/feedback" target="_blank">Feedback</a>
                        <a href="http://www.instagram.com/judelucasmusic" target="_blank">Instagram</a>
                        <a href="https://www.snapchat.com/judelucas20" target="_blank">Snapchat</a>
                        <a href="https://twitter.com/judelucasmusic" target="_blank">Twitter</a>
                        <a href="https://github.com/realjuliansanchez" target="_blank">GitHub</a>
                    </p>
                    <div class="footer">
                        <span class="footer-made">Cracked with <span class="heart">&#9829;</span> by <a href="https://github.com/realjuliansanchez">HackedNode</a></span><span class="separator">・</span><span class="footer-links"><a href="https://momentumdash.com/legal" target="_blank">Terms & Privacy</a></span>
                    </div>
                `
              );
          },
          useData: !0,
      })),
      (s.templates["color-picker"] = Handlebars.template({
          compiler: [6, ">= 2.0.0-beta.1"],
          main: function (t, e, n, s) {
              return '<div class="swatch-container"><div class="swatch" style="background: #222;"></div></div>';
          },
          useData: !0,
      })),
      (s.templates.connect = Handlebars.template({
          1: function (t, e, n, s) {
              return "GitHub";
          },
          compiler: [6, ">= 2.0.0-beta.1"],
          main: function (t, e, n, s) {
              var a,
                  i,
                  l = e.helperMissing,
                  o = "function",
                  r = this.escapeExpression;
              return (
                  '<span class="icon-wrapper back" title="Back"><i class="icon icon-left"></i></span>\n\n<section class="provider">\n\t<div class="provider-logo-box">\n\t\t<img  src="' +
                  r(typeof (i = null != (i = e.large_icon_url || (null != t ? t.large_icon_url : t)) ? i : l) == o ? i.call(t, { name: "large_icon_url", hash: {}, data: s }) : i) +
                  '" class="provider-logo ' +
                  (null != (a = e.if.call(t, null != t ? t.GitHub : t, { name: "if", hash: {}, fn: this.program(1, s, 0), inverse: this.noop, data: s })) ? a : "") +
                  '">\n\t</div>\n\t<h2 class="provider-title">Connect to ' +
                  r(typeof (i = null != (i = e.provider_title || (null != t ? t.provider_title : t)) ? i : l) == o ? i.call(t, { name: "provider_title", hash: {}, data: s }) : i) +
                  '</h2>\n</section>\n\x3c!--<section class="extra-info">--\x3e\n\t\x3c!--<label for="blah">Please enter your account name</label>--\x3e\n\t\x3c!--<input type="text" name="blah" id="blah" class="input">--\x3e\n\x3c!--</section>--\x3e\n\n<p class="description">A secure window will open.</p>\n<section class="button-group">\n\t<span id="connect-button" class="button">Connect</span>\n\t<p class="description">Momentum won\'t ever have access to your login information.</p>\n</section>\n'
              );
          },
          useData: !0,
      })),
      (s.templates["general-toggle-options"] = Handlebars.template({
          1: function (t, e, n, s) {
              return '<span class="badge plus-badge">PLUS</span>';
          },
          3: function (t, e, n, s, a, i) {
              var l;
              return null != (l = e.unless.call(t, s && s.last, { name: "unless", hash: {}, fn: this.program(4, s, 0, a, i), inverse: this.program(11, s, 0, a, i), data: s })) ? l : "";
          },
          4: function (t, e, n, s, a, i) {
              var l,
                  o,
                  r = this.lambda,
                  c = this.escapeExpression,
                  d = e.helperMissing,
                  u = "function";
              return (
                  '\t\t\t\t<span class="toggle-option ' +
                  c(r(null != i[2] ? i[2].widget : i[2], t)) +
                  '" data-related-widget="' +
                  c(r(null != i[2] ? i[2].widget : i[2], t)) +
                  '" data-option-value=' +
                  c(typeof (o = null != (o = e.value || (null != t ? t.value : t)) ? o : d) == u ? o.call(t, { name: "value", hash: {}, data: s }) : o) +
                  " " +
                  (null != (l = e.if.call(t, null != t ? t.dataTest : t, { name: "if", hash: {}, fn: this.program(5, s, 0, a, i), inverse: this.noop, data: s })) ? l : "") +
                  '><div class="sub-view"></div>' +
                  c(typeof (o = null != (o = e.label || (null != t ? t.label : t)) ? o : d) == u ? o.call(t, { name: "label", hash: {}, data: s }) : o) +
                  "</span>" +
                  (null != (l = e.if.call(t, null != t ? t.plusOnly : t, { name: "if", hash: {}, fn: this.program(1, s, 0, a, i), inverse: this.noop, data: s })) ? l : "") +
                  (null != (l = e.if.call(t, null != t ? t.breakafter : t, { name: "if", hash: {}, fn: this.program(7, s, 0, a, i), inverse: this.program(9, s, 0, a, i), data: s })) ? l : "") +
                  "\n"
              );
          },
          5: function (t, e, n, s) {
              var a;
              return 'data-test="' + this.escapeExpression("function" == typeof (a = null != (a = e.dataTest || (null != t ? t.dataTest : t)) ? a : e.helperMissing) ? a.call(t, { name: "dataTest", hash: {}, data: s }) : a) + '"';
          },
          7: function (t, e, n, s) {
              return "<br>";
          },
          9: function (t, e, n, s) {
              return ' <span class="toggle-divider">|</span> ';
          },
          11: function (t, e, n, s, a, i) {
              var l,
                  o,
                  r = this.lambda,
                  c = this.escapeExpression,
                  d = e.helperMissing,
                  u = "function";
              return (
                  '\t\t\t\t<span class="toggle-option ' +
                  c(r(null != i[2] ? i[2].widget : i[2], t)) +
                  '" data-related-widget="' +
                  c(r(null != i[2] ? i[2].widget : i[2], t)) +
                  '" data-option-value=' +
                  c(typeof (o = null != (o = e.value || (null != t ? t.value : t)) ? o : d) == u ? o.call(t, { name: "value", hash: {}, data: s }) : o) +
                  "  " +
                  (null != (l = e.if.call(t, null != t ? t.dataTest : t, { name: "if", hash: {}, fn: this.program(5, s, 0, a, i), inverse: this.noop, data: s })) ? l : "") +
                  '><div class="sub-view"></div>' +
                  c(typeof (o = null != (o = e.label || (null != t ? t.label : t)) ? o : d) == u ? o.call(t, { name: "label", hash: {}, data: s }) : o) +
                  "</span>" +
                  (null != (l = e.if.call(t, null != t ? t.plusOnly : t, { name: "if", hash: {}, fn: this.program(1, s, 0, a, i), inverse: this.noop, data: s })) ? l : "") +
                  "\n"
              );
          },
          13: function (t, e, n, s) {
              var a;
              return (
                  '<span class="option-message">' +
                  this.escapeExpression("function" == typeof (a = null != (a = e.message || (null != t ? t.message : t)) ? a : e.helperMissing) ? a.call(t, { name: "message", hash: {}, data: s }) : a) +
                  "</span>"
              );
          },
          compiler: [6, ">= 2.0.0-beta.1"],
          main: function (t, e, n, s, a, i) {
              var l,
                  o,
                  r = e.helperMissing,
                  c = "function",
                  d = this.escapeExpression;
              return (
                  '<li class="slide-toggle has-toggle" data-related-widget="' +
                  d(typeof (o = null != (o = e.widget || (null != t ? t.widget : t)) ? o : r) == c ? o.call(t, { name: "widget", hash: {}, data: s }) : o) +
                  '" data-test="' +
                  d(typeof (o = null != (o = e.dataId || (null != t ? t.dataId : t)) ? o : r) == c ? o.call(t, { name: "dataId", hash: {}, data: s }) : o) +
                  '">\n\t<span class="setting-name">' +
                  d(typeof (o = null != (o = e.name || (null != t ? t.name : t)) ? o : r) == c ? o.call(t, { name: "name", hash: {}, data: s }) : o) +
                  "</span>\n\t" +
                  (null != (l = e.if.call(t, null != t ? t.plusOnly : t, { name: "if", hash: {}, fn: this.program(1, s, 0, a, i), inverse: this.noop, data: s })) ? l : "") +
                  '\n\t<span class="toggle-options">\n' +
                  (null != (l = e.each.call(t, null != t ? t.options : t, { name: "each", hash: {}, fn: this.program(3, s, 0, a, i), inverse: this.noop, data: s })) ? l : "") +
                  "\t</span>\n\t" +
                  (null != (l = e.if.call(t, null != t ? t.message : t, { name: "if", hash: {}, fn: this.program(13, s, 0, a, i), inverse: this.noop, data: s })) ? l : "") +
                  '\n\t<div class="option-clear"></div>\n</li>\n'
              );
          },
          useData: !0,
          useDepths: !0,
      })),
      (s.templates["general-toggle-slider"] = Handlebars.template({
          1: function (t, e, n, s) {
              return '<span class="badge plus-badge">PLUS</span>';
          },
          3: function (t, e, n, s) {
              return '<span class="badge beta-badge">Preview</span>';
          },
          5: function (t, e, n, s) {
              var a;
              return (
                  '<span class="option-message">' +
                  this.escapeExpression("function" == typeof (a = null != (a = e.message || (null != t ? t.message : t)) ? a : e.helperMissing) ? a.call(t, { name: "message", hash: {}, data: s }) : a) +
                  "</span>"
              );
          },
          7: function (t, e, n, s) {
              var a;
              return (
                  '<span class="config-button">' +
                  this.escapeExpression("function" == typeof (a = null != (a = e.configLabel || (null != t ? t.configLabel : t)) ? a : e.helperMissing) ? a.call(t, { name: "configLabel", hash: {}, data: s }) : a) +
                  "</span>"
              );
          },
          compiler: [6, ">= 2.0.0-beta.1"],
          main: function (t, e, n, s) {
              var a,
                  i,
                  l = e.helperMissing,
                  o = "function",
                  r = this.escapeExpression;
              return (
                  '<li class="slide-toggle has-toggle" data-related-widget="' +
                  r(typeof (i = null != (i = e.widget || (null != t ? t.widget : t)) ? i : l) == o ? i.call(t, { name: "widget", hash: {}, data: s }) : i) +
                  '" data-test="' +
                  r(typeof (i = null != (i = e.dataId || (null != t ? t.dataId : t)) ? i : l) == o ? i.call(t, { name: "dataId", hash: {}, data: s }) : i) +
                  '">\n\t<input type="checkbox">\n\t<span class="setting-name">' +
                  r(typeof (i = null != (i = e.name || (null != t ? t.name : t)) ? i : l) == o ? i.call(t, { name: "name", hash: {}, data: s }) : i) +
                  "</span>\n\t" +
                  (null != (a = e.if.call(t, null != t ? t.plusOnly : t, { name: "if", hash: {}, fn: this.program(1, s, 0), inverse: this.noop, data: s })) ? a : "") +
                  "\n\t" +
                  (null != (a = e.if.call(t, null != t ? t.beta : t, { name: "if", hash: {}, fn: this.program(3, s, 0), inverse: this.noop, data: s })) ? a : "") +
                  '\n\t<span class="toggle-slider">\n\t\t<svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg>\n\t</span>\n\t' +
                  (null != (a = e.if.call(t, null != t ? t.message : t, { name: "if", hash: {}, fn: this.program(5, s, 0), inverse: this.noop, data: s })) ? a : "") +
                  "\n\t" +
                  (null != (a = e.if.call(t, null != t ? t.configLabel : t, { name: "if", hash: {}, fn: this.program(7, s, 0), inverse: this.noop, data: s })) ? a : "") +
                  "\n</li>\n"
              );
          },
          useData: !0,
      })),
      (s.templates.help = Handlebars.template({
          compiler: [6, ">= 2.0.0-beta.1"],
          main: function (t, e, n, s) {
              return '<h3>Help</h3>\n\n<h5>QUICK TIPS</h5>\n<div class="quick-tips-wrapper">\n\t<div class="quick-tips"></div>\n\t<button class="next-quick-tip button">Next tip</button>\n</div>\n\n<h5>HELPFUL GUIDES</h5>\n<div class="help-guides">\n\t<p><a href="https://get.momentumdash.help/hc/en-us/articles/115007780748-About-Momentum" target="_blank">About Momentum</a></p>\n\t<p><a href="https://get.momentumdash.help/hc/en-us/articles/360019099073-Navigating-Momentum" target="_blank">Navigating Momentum</a></p>\n\t<p><a href="https://get.momentumdash.help/hc/en-us/articles/115015748548-Momentum-Plus-Overview" target="_blank">Momentum Plus Overview</a></p>\n\t<p><a href="https://get.momentumdash.help/hc/en-us/articles/360012256874-Hotkeys-Keyboard-shortcuts" target="_blank">Hotkeys</a></p>\n</div>\n\n<h5>FOR MORE HELPFUL GUIDES AND TIPS</h5>\n<p><a href="https://get.momentumdash.help/hc/en-us" target="_blank">Visit our Help Center</a></p>\n';
          },
          useData: !0,
      })),
      (s.templates.loading = Handlebars.template({
          compiler: [6, ">= 2.0.0-beta.1"],
          main: function (t, e, n, s) {
              return '<div class="settings-loading">\n\t<p class="settings-loading-loading-message"><i class="loading-icon"></i>Loading...</span></p>\n\t<p class="settings-loading-error-message">We\'re having trouble loading these settings.</p>\n\t<span class="button button-retry">Retry</span>\n</div>\n';
          },
          useData: !0,
      })),
      (s.templates.main = Handlebars.template({
          compiler: [6, ">= 2.0.0-beta.1"],
          main: function (t, e, n, s) {
              return '<div class="app settings-app" data-test="settings-app">\n\t<ul id="nav-menu" class="settings-nav" data-test="nav-menu"></ul>\n\t<div class="settings-view-container" data-test="settings-view-container"></div>\n</div>\n';
          },
          useData: !0,
      })),
      (s.templates.navmenu = Handlebars.template({
          1: function (t, e, n, s) {
              var a,
                  i = e.helperMissing,
                  l = "function",
                  o = this.escapeExpression;
              return (
                  '\t<li data-navitem="' +
                  o(typeof (a = null != (a = e.id || (null != t ? t.id : t)) ? a : i) == l ? a.call(t, { name: "id", hash: {}, data: s }) : a) +
                  '" class="main-nav-item" data-test="nav-menu-' +
                  o(typeof (a = null != (a = e.id || (null != t ? t.id : t)) ? a : i) == l ? a.call(t, { name: "id", hash: {}, data: s }) : a) +
                  '">' +
                  o(typeof (a = null != (a = e.title || (null != t ? t.title : t)) ? a : i) == l ? a.call(t, { name: "title", hash: {}, data: s }) : a) +
                  "</li>\n"
              );
          },
          3: function (t, e, n, s) {
              var a,
                  i,
                  l = e.helperMissing,
                  o = "function",
                  r = this.escapeExpression;
              return (
                  '\t<li data-navitem="' +
                  r(typeof (i = null != (i = e.id || (null != t ? t.id : t)) ? i : l) == o ? i.call(t, { name: "id", hash: {}, data: s }) : i) +
                  '" class="main-nav-item secondary ' +
                  (null != (a = e.if.call(t, s && s.first, { name: "if", hash: {}, fn: this.program(4, s, 0), inverse: this.noop, data: s })) ? a : "") +
                  " " +
                  (null != (a = e.if.call(t, null != t ? t.class : t, { name: "if", hash: {}, fn: this.program(6, s, 0), inverse: this.noop, data: s })) ? a : "") +
                  '" data-test="nav-menu-' +
                  r(typeof (i = null != (i = e.id || (null != t ? t.id : t)) ? i : l) == o ? i.call(t, { name: "id", hash: {}, data: s }) : i) +
                  '">' +
                  r(typeof (i = null != (i = e.title || (null != t ? t.title : t)) ? i : l) == o ? i.call(t, { name: "title", hash: {}, data: s }) : i) +
                  "</li>\n"
              );
          },
          4: function (t, e, n, s) {
              return " secondary-first";
          },
          6: function (t, e, n, s) {
              var a;
              return this.escapeExpression("function" == typeof (a = null != (a = e.class || (null != t ? t.class : t)) ? a : e.helperMissing) ? a.call(t, { name: "class", hash: {}, data: s }) : a);
          },
          8: function (t, e, n, s) {
              var a,
                  i = e.helperMissing,
                  l = "function",
                  o = this.escapeExpression;
              return (
                  '\t<div class="user u--no-transition">\n\t\t<div class="user-info" data-test="user-info" title="' +
                  o(typeof (a = null != (a = e.email || (null != t ? t.email : t)) ? a : i) == l ? a.call(t, { name: "email", hash: {}, data: s }) : a) +
                  '">\n\t\t\t<div class="user-avatar-wrapper">\n\t\t\t\t<div class="user-avatar"><img src="/img/gravatar_unknown.webp"></div>\n\t\t\t\t<div class="user-avatar-hidden"><img src=""></div>\n\t\t\t\t<div class="user-badge-wrapper">\n\n\t\t\t\t\t<span class="badge plus-badge" data-test="plus">PLUS</span>\n\t\t\t\t\t<span class="badge team-badge" data-test="team">TEAM</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<span class="name-wrapper">\n\t\t\t\t<span class="user-info-name">' +
                  o(typeof (a = null != (a = e.displayName || (null != t ? t.displayName : t)) ? a : i) == l ? a.call(t, { name: "displayName", hash: {}, data: s }) : a) +
                  '</span>\n\t\t\t\t<span class="anim-caret u--no-transition">\n\t\t\t\t\t<svg class="icon anim-caret-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.16 11.75"><path d="M52.16,26.08A5.87,5.87,0,0,1,46.29,32H5.88A5.88,5.88,0,0,1,0,26.08H0a5.87,5.87,0,0,1,5.88-5.87H46.29a5.87,5.87,0,0,1,5.87,5.87Z" transform="translate(0 -20.21)"/></svg>\n\t\t\t\t\t<svg class="icon anim-caret-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.16 11.75"><path d="M52.16,26.08A5.87,5.87,0,0,1,46.29,32H5.88A5.88,5.88,0,0,1,0,26.08H0a5.87,5.87,0,0,1,5.88-5.87H46.29a5.87,5.87,0,0,1,5.87,5.87Z" transform="translate(0 -20.21)"/></svg>\n\t\t\t\t</span>\n\t\t\t</span>\n\t\t</div>\n\t\t\t<div class="user-hidden">\n\t\t\t\t<ul class="user-nav">\n\t\t\t\t\t<li class="action action-profile">Profile</li>\n\t\t\t\t\t<li class="action action-logout">Log Out</li>\n\t\t\t\t</ul>\n\t\t\t<div class="user-close"></div>\n\t\t</div>\n\t</div>\n\n'
              );
          },
          10: function (t, e, n, s) {
              return '\t<div class="user login">\n\t\t<div class="login-button">\n\t\t\t<div class="login-title">Log In</div>\n\t\t\t<div class="login-description">Sync your account &amp; more!</div>\n\t\t</div>\n\t</div>\n';
          },
          compiler: [6, ">= 2.0.0-beta.1"],
          main: function (t, e, n, s) {
              var a;
              return (
                  (null != (a = e.each.call(t, null != (a = null != t ? t.menu : t) ? a.navItems : a, { name: "each", hash: {}, fn: this.program(1, s, 0), inverse: this.noop, data: s })) ? a : "") +
                  (null != (a = e.each.call(t, null != (a = null != t ? t.menu : t) ? a.secondaryNavItems : a, { name: "each", hash: {}, fn: this.program(3, s, 0), inverse: this.noop, data: s })) ? a : "") +
                  "\n" +
                  (null != (a = e.if.call(t, null != t ? t.loggedIn : t, { name: "if", hash: {}, fn: this.program(8, s, 0), inverse: this.program(10, s, 0), data: s })) ? a : "")
              );
          },
          useData: !0,
      })),
      (s.templates.upgrade = Handlebars.template({
          compiler: [6, ">= 2.0.0-beta.1"],
          main: function (t, e, n, s) {
              var a;
              return (
                  '<div class="hero upgrade-hero">\n\t<style type="text/css">\n\t\t.upgrade-hero { padding-bottom: 30px; border-bottom: 1px solid #444; }\n\t\t.upgrade-hero h3 { margin-bottom: 6px; }\n\t\t.upgrade-hero .description { margin-bottom: 15px; opacity: 0.8; }\n\t\t.settings-upgrade .button { padding: 12px 30px; font-size: 95%; font-weight: 500; text-transform: uppercase; }\n\t</style>\n\n\t<h3>Momentum Plus is Here!</h3>\n\t<p class="description" style="margin-bottom: 15px; opacity: 0.8;" ">Level up your focus with customization, integrations, and new widgets.</p>\n\n\t<div class="login-needed">\n\t\t<span class="login-needed-title">Please log in</span>\n\t\t<span class="login-needed-desc">Go to <strong>General → Login</strong>, then come back and try again. Thanks!</span>\n\t</div>\n\n\t<span class="button button-upgrade">Get Momentum Plus</span>\n\t<span class="special">Launch Special!<strong style="margin-left: 5px;"><i class="fa fa-sun-o"></i> 33% Off</strong></span>\n\t<span class="price-line"><span class="price">$1.99/month</span> or <span class="price">$19.99/year</span> (equal to 2 months free!)<br></span>\n</div>\n\n\n\n<div class="feature-list">\n\t<style type="text/css">\n\t\t.feature-list { margin-top: 30px; }\n\t\t.feature-list h4 { margin-bottom: 15px; font-size: 95%; opacity: 0.8; text-transform: uppercase; }\n\t\t.feature-list-icon { width: 40px; margin-top: -2px; float: left; font-size: 120%; text-align: center; }\n\t\t.feature-list-info { margin-left: 40px; margin-bottom: 20px; }\n\t\t.feature-list-info h5 { margin: 0 0 4px; font-size: 92%; opacity: 1; }\n\t\t.feature-list-info p { margin-top: 5px; font-size: 13px; line-height: 135%; opacity: 0.7; }\n\t</style>\n\n\n\n\t<div class="feature-list-icon"><i class="icon icon-check"></i></div>\n\t<div class="feature-list-info">\n\t\t<h5>Todo Integrations</h5>\n\t\t<p>Momentum Plus connects with your favorite task management services! See, update, and create new tasks from Trello, Todoist, Wunderlist, and Google Tasks.</p>\n\t</div>\n\n\n\t<div class="feature-list-icon"><i class="icon icon-check"></i></div>\n\t<div class="feature-list-info">\n\t\t<h5>Custom Background Photos</h5>\n\t\t<p>Light up your day every time you open a new tab. Add your own photos or choose from your favorites or past photos in Momentum.</p>\n\t</div>\n\n\n\t<div class="feature-list-icon"><i class="icon icon-check"></i></div>\n\t<div class="feature-list-info">\n\t\t<h5>Personalize Font and Color</h5>\n\t\t<p>Make Momentum your own by choosing a font and color that suits your personality. Incorporate your own style to motivate, inspire, and bring focus to your day.</p>\n\t</div>\n\n\n\t<div class="feature-list-icon"><i class="icon icon-check"></i></div>\n\t<div class="feature-list-info">\n\t\t<h5>Custom Quotes</h5>\n\t\t<p>Add your favourite quotes to maximize your inspiration. Set the quote of the day to anything you want, anytime.</p>\n\t</div>\n\n\n\t<div class="feature-list-icon"><i class="icon icon-check"></i></div>\n\t<div class="feature-list-info">\n\t\t<h5>Skip Photo/Quote</h5>\n\t\t<p>Not feeling the photo or quote of the day? No problem; a new one is just a refresh away. Cycle between five photos and five quotes per day.</p>\n\t</div>\n\n\n\t<div class="feature-list-icon"><i class="icon icon-check"></i></div>\n\t<div class="feature-list-info">\n\t\t<h5>Autofocus Mode</h5>\n\t\t<p>Set your priorities at the start of the day and Momentum will show you the one thing you need to focus on at a time. Check it off, and the next up todo becomes your focus.</p>\n\t</div>\n\n\n\t<div class="feature-list-icon"><i class="icon icon-check"></i></div>\n\t<div class="feature-list-info">\n\t\t<h5>Inbox, Today, and Done Lists</h5>\n\t\t<p>Keep your todo list clutter free with the Inbox list. Know exactly what you need to do for the day with the Today list. Follow up on what you’ve completed with the Done list.</p>\n\t</div>\n\n\n\t<div class="feature-list-icon"><i class="icon icon-check"></i></div>\n\t<div class="feature-list-info">\n\t\t<h5>Priority Support</h5>\n\t\t<p>Plus subscribers can be assured that their messages, suggestions and requests will be answered promptly by a real human. Your satisfaction is of the utmost importance to us.</p>\n\t</div>\n\n\n\t<div class="feature-list-icon"><i class="icon icon-check"></i></div>\n\t<div class="feature-list-info">\n\t\t<h5>Early Access</h5>\n\t\t<p>Get exclusive early access to exciting new Momentum features. Have a say in the direction of the product. Next early release feature: Notes.</p>\n\t</div>\n\n\n\t<div class="feature-list-icon"><i class="icon icon-check"></i></div>\n\t<div class="feature-list-info">\n\t\t<h5>Support Momentum</h5>\n\t\t<p>Your subscription helps Momentum  Plus subscriptions help sustain Momentum and enable the addition of more features. Thank you for your support — we are incredibly grateful!</p>\n\t</div>\n</div>\n\n\n\n<div class="cta">\n\t<style type="text/css">\n\t\t.settings-upgrade .cta { margin: 50px 0 70px; padding: 25px 10px 10px; border-top: 1px solid #444; border-bottom: 1px solid #444; text-align: center; }\n\t\t.settings-upgrade .cta .pitch { margin: 0 0 19px; font-size: 125%; line-height: 135%; }\n\t\t.settings-upgrade .cta .button { margin-bottom: 0; }\n\t\t.settings-upgrade .link { margin: 3px 0 0; padding: 8px; display: inline-block; background: none !important; cursor: pointer; opacity: 0.5; text-decoration: none; -webkit-transition: all 0.1s ease; }\n\t\t.settings-upgrade .link:hover { opacity: 0.7; }\n\t</style>\n\n\t<p class="pitch">Upgrade to Momentum Plus today and turn<br>your potential into progress.</p>\n\n\t<div class="login-needed">\n\t\t<span class="login-needed-title">Please log in</span>\n\t\t<span class="login-needed-desc">Go to <strong>General → Login</strong>, then come back and try again. Thanks!</span>\n\t</div>\n\n\t<span class="button button-upgrade">Get Momentum Plus</span><br>\n\t<a href="https://momentumdash.com/plus?' +
                  this.escapeExpression("function" == typeof (a = null != (a = e.campaignDetails || (null != t ? t.campaignDetails : t)) ? a : e.helperMissing) ? a.call(t, { name: "campaignDetails", hash: {}, data: s }) : a) +
                  '" class="link">Learn more</a>\n</div>\n\n\n\n<div class="faq">\n\t<style type="text/css">\n\t\t.settings-upgrade .faq { margin-top: 0; padding: 0 75px; font-size: 90%; opacity: 1; }\n\t\t.settings-upgrade .faq:first-child { margin-top: 0; }\n\t\t.settings-upgrade .faq:last-child { margin-bottom: 10px !important; }\n\n\t\t.settings-upgrade .faq-question { opacity: 0.9; }\n\t\t.settings-upgrade .faq-answer { opacity: 0.7; }\n\t</style>\n\t<p>\n\t\t<span class="faq-question">What are the available integrations?</span>\n\t\t<span class="faq-answer">Currently we integrate with Wunderlist, Google Tasks, Todoist, and Fitbit. Coming soon: Trello and Asana.\x3c!--Github, Google Analytics, Uservoice, Harvest.--\x3e</span>\n\t</p>\n\n\t<p>\n\t\t<span class="faq-question">I thought Momentum was free?</span>\n\t\t<span class="faq-answer">Momentum Free will always be free. We created Momentum Plus to bring more control and functionality to those who desire it, while still keeping the experience simple and focused.</span>\n\t</p>\n</div>\n'
              );
          },
          useData: !0,
      })),
      (s.templates.upsell = Handlebars.template({
          1: function (t, e, n, s) {
              var a;
              return (
                  '<div class="available">' + this.escapeExpression("function" == typeof (a = null != (a = e.header || (null != t ? t.header : t)) ? a : e.helperMissing) ? a.call(t, { name: "header", hash: {}, data: s }) : a) + "</div>"
              );
          },
          3: function (t, e, n, s) {
              return '<div class="available">Available on Plus</div>';
          },
          compiler: [6, ">= 2.0.0-beta.1"],
          main: function (t, e, n, s) {
              var a,
                  i,
                  l = e.helperMissing,
                  o = "function",
                  r = this.escapeExpression;
              return (
                  '<div class="right">\n\t<span class="button upsell-action" data-test="upsell-button">' +
                  r(typeof (i = null != (i = e.buttonText || (null != t ? t.buttonText : t)) ? i : l) == o ? i.call(t, { name: "buttonText", hash: {}, data: s }) : i) +
                  '</span>\n\t<span class="icon-wrapper hide"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.982 212.982" class="icon"><path d="M131.804 106.491l75.936-75.936c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.491 81.18 30.554 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.989 6.99-6.989 18.323 0 25.312l75.937 75.936-75.937 75.937c-6.989 6.99-6.989 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0l75.937-75.937 75.937 75.937c6.989 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.322 0-25.312l-75.936-75.936z"/></svg></span>\n</div>\n' +
                  (null != (a = e.if.call(t, null != t ? t.header : t, { name: "if", hash: {}, fn: this.program(1, s, 0), inverse: this.noop, data: s })) ? a : "") +
                  "\n" +
                  (null != (a = e.unless.call(t, null != t ? t.header : t, { name: "unless", hash: {}, fn: this.program(3, s, 0), inverse: this.noop, data: s })) ? a : "") +
                  '\n<div class="title">' +
                  r(typeof (i = null != (i = e.title || (null != t ? t.title : t)) ? i : l) == o ? i.call(t, { name: "title", hash: {}, data: s }) : i) +
                  '</div>\n<div class="description">' +
                  r(typeof (i = null != (i = e.description || (null != t ? t.description : t)) ? i : l) == o ? i.call(t, { name: "description", hash: {}, data: s }) : i) +
                  "</div>\n"
              );
          },
          useData: !0,
      })),
      (s.templates.whatsnew = Handlebars.template({
          compiler: [6, ">= 2.0.0-beta.1"],
          main: function (t, e, n, s) {
              return '<div class="settings-header">\n\t<h3>What’s New</h3>\n</div>\n\n<div class="whatsnew-body">\n</div>\n';
          },
          useData: !0,
      })),
      (s.views.SettingsPanel = Backbone.View.extend({
          initialize: function () {},
          render: function () {
              return this.$el.html(this.template({})), this;
          },
          close: function () {
              this.remove(), this.unbind();
          },
      })),
      (s.views.About = s.views.SettingsPanel.extend({
          attributes: { id: "settings-about", class: "settings-view settings-about" },
          template: s.templates.about,
          panelid: "about",
          events: { "dblclick #momo-version": "revealUuid", "dblclick .about-logo": "logoDblClicked" },
          initialize: function () {
              d.sendEvent("About", "Panel Opened");
          },
          render: function () {
              var t = { version: d.globals.version };
              return this.$el.html(this.template(t)), this;
          },
          revealUuid: function (t) {
              t.preventDefault(), t.stopPropagation(), this.$el.find(".made").html(localStorage.client_uuid);
          },
          logoDblClicked: function (t) {
              t.stopPropagation(), a(".settings").first().toggleClass("infinispin", d.settingsManager.toggleInfinispin());
          },
      })),
      (d.views.Gravatar = Backbone.View.extend({
          className: "avatar",
          tagName: "img",
          render: function () {
              var t = this.options.email,
                  e = this.options.size;
              return this.$el.attr({ src: "https://www.gravatar.com/avatar/" + md5(t) + "?s=" + e + "&d=mm" }), this;
          },
      })),
      (s.views.Help = s.views.SettingsPanel.extend({
          attributes: { id: "settings-help", class: "settings-view settings-help" },
          template: s.templates.help,
          panelid: "help",
          events: { "click .next-quick-tip": "showRandomTip" },
          initialize: function () {
              (this.quickTips = [
                  "Momentum's Photo, Quote & Mantra change automatically at 4 AM each day.",
                  "You can change between a 12 hour or 24 hour clock at the bottom of the General settings.",
                  "Double-clicking your display name will let you edit it.",
                  'Click the current temperature, select the <i class="icon-ellipsis more-icon"></i> options and then click the Metric units switch to change between °F or °C.',
              ]),
                  d.sendEvent("Help", "Panel Opened");
          },
          render: function () {
              return this.$el.html(this.template({})), (this.$quickTips = a(this.$el.find(".quick-tips")[0])), this.showRandomTip(), this;
          },
          showRandomTip: function () {
              var e = this,
                  t = "helpTipsIndex",
                  n = localStorage.getItem(t);
              (n = null == n ? 0 : parseInt(n)) > this.quickTips.length - 1 && (n = 0),
                  this.$quickTips.addClass("fadein"),
                  this.$quickTips.on("webkitAnimationEnd onanimationend msAnimationEnd animationend", function t() {
                      e.$quickTips.removeClass("fadein"), e.$quickTips.off("webkitAnimationEnd onanimationend msAnimationEnd animationend", t);
                  }),
                  this.$quickTips.html(this.quickTips[n]),
                  localStorage.setItem(t, n + 1);
          },
      })),
      (s.views.Loading = s.views.SettingsPanel.extend({
          attributes: { id: "settings-loading", class: "settings-view settings-loading" },
          template: s.templates.loading,
          panelid: "loading",
          events: { "click .button-retry": "retryClicked" },
          render: function () {
              if (!this.renderedOnce) {
                  this.renderedOnce = !0;
                  this.$el.html(this.template({})), (this.$errorMessage = this.$(".settings-loading-error-message")), (this.$retryButton = this.$(".button-retry")), (this.$loading = this.$(".settings-loading-loading-message"));
              }
              return this.renderDisplayState(), this;
          },
          renderDisplayState: function () {
              if (this.displayOptions) {
                  var t = this.displayOptions;
                  if (t.error) return this.$errorMessage.text(t.error), this.$errorMessage.css("display", "block"), this.$retryButton.css("display", "inline-block"), void this.$loading.hide();
              }
              this.$loading.css("display", "block"), this.$errorMessage.hide(), this.$retryButton.hide();
          },
          setDisplayOptions: function (t) {
              this.displayOptions = t || null;
          },
          retryClicked: function (t) {
              if ((t.stopPropagation(), this.displayOptions && this.displayOptions.retryInfo)) {
                  var e = this.displayOptions.retryInfo,
                      n = e.options || {};
                  (n.section = e.id), d.commandManager.execute("settings.display", null, n);
              }
          },
      })),
      (s.views.MainSettings = Backbone.View.extend({
          attributes: { class: "app-wrapper nipple nipple-bottom-left" },
          template: s.templates.main,
          events: { "click .hide": "hideSettings" },
          detailsShown: !1,
          initialize: function () {
              (this.subViews = []), (this.renderedOnce = !1), (this.visible = !1);
          },
          render: function () {
              return this.visible
                  ? (this.paneRendered || (this.$el.html(this.template()), (this.$popup = this.$(".app-wrapper")), (this.$container = this.$(".settings-view-container")), (this.paneRendered = !0)),
                    this.cssLoaded &&
                        (this.renderedOnce ||
                            ((this.navMenu = new s.views.NavMenu({ el: this.$("#nav-menu") })), this.listenTo(this.navMenu, "navItemClicked", this.navItemClicked), (this.renderedOnce = !0), this.visible || this.$el.hide()),
                        this.renderActivePanel()),
                    this)
                  : this;
          },
          renderActivePanel: function (t) {
              this.activePanel && this.cssLoaded && this.renderedOnce && (this.activePanel.render(t).$el.detach().appendTo(this.$container), (this.$popBody = this.$container.children(":first-child")), d.trigger("settings:panel:visible"));
          },
          navItemClicked: function (t) {
              if ((this.settingsUpsellShowing() && this.upsellView.hideUpsell(), t !== this.activePanelId)) {
                  d.trigger("colorPicker:destroy");
                  var e = this.getNavItem(t);
                  e && e.cmd && e.cmdonly
                      ? (this.setActiveNavItem(t),
                        d.commandManager.ensureCommandLoaded(
                            e.cmd,
                            function () {
                                e.hide && d.commandManager.execute("settings.hide"), d.commandManager.execute(e.cmd, e.options);
                            },
                            function () {},
                            function () {}
                        ))
                      : this.activateSection(t, { source: "nav-" + t });
              }
          },
          toggleVisible: function () {
              this.visible ? this.hideSettings() : this.showSettings();
          },
          showSettings: function (t) {
              var e = this;
              if (!this.cssLoaded && !this.cssLoading) {
                  this.cssLoading = !0;
                  var n = a('<link type="text/css" href="css/settings.css" rel="stylesheet" />');
                  n.on("load", function () {
                      (e.cssLoaded = !0), e.render(), e.showSection(t);
                  }),
                      a("head").append(n);
              }
              (this.visible = !0),
                  d.trigger("globalEvent:toggle:bottom-left", this),
                  !e.cssLoaded || (this.paneRendered && this.renderedOnce) || this.render(),
                  d.trigger("settings:visible"),
                  d.trigger("notification:hide"),
                  this.cssLoaded && this.showSection(t);
          },
          hideSettings: function (t) {
              if (this.$el.is(":visible")) {
                  t && t.preventDefault(), (this.visible = !1), d.trigger("settings:hidden"), this.$popup.removeClass("show-fade-in");
                  var e = this;
                  setTimeout(function () {
                      e.$popup.removeClass("show"), this.activePanel && this.activePanel.close(), this.navMenu && this.navMenu.closeUser(), d.trigger("colorPicker:destroy");
                  }, 200);
              }
          },
          showSection: function (t) {
              t && t.section ? this.activateSection(t.section, t) : this.activateSection(this.activePanelId && "loading" != this.activePanelId ? this.activePanelId : "general");
          },
          getNavItem: function (t) {
              var e = d.settingsManager.getNavItems(),
                  n = _.findWhere(e.navItems, { id: t });
              return (n = n || _.findWhere(e.secondaryNavItems, { id: t }));
          },
          getPanel: function (t) {
              var e = d.settingsManager.getPanelItems();
              return _.findWhere(e, { id: t });
          },
          showLoadingPanel: function (t) {
              this.loadingPanel || (this.loadingPanel = new s.views.Loading()), "loading" != this.activePanelId && this.setActivePanel(this.loadingPanel, "loading", null), this.loadingPanel.setDisplayOptions(t), this.renderActivePanel();
          },
          setActivePanel: function (t, e, n) {
              t && (this.activePanel && this.activePanel.close(), (this.activePanel = t), (this.activePanelId = e), (this.activePanelOptions = n), this.$container.scrollTop(0));
          },
          setActiveNavItem: function (t) {
              a(".main-nav-item").removeClass("active");
              var e = this.getNavItem(t);
              (e = e || this.getPanel(t)) && e.section ? a('li[data-navitem="' + e.section + '"]').addClass("active") : a('li[data-navitem="' + t + '"]').addClass("active");
          },
          activateSection: function (t, e) {
              var n = this;
              if (t) {
                  e && e.nav ? this.setActiveNavItem(e.nav) : this.setActiveNavItem(t);
                  var s = this.getNavItem(t);
                  s = s || this.getPanel(t);
                  var a = null,
                      i = !1,
                      l = !1,
                      o = !1;
                  if (s && s.cmd)
                      d.commandManager.ensureCommandLoaded(
                          s.cmd,
                          function () {
                              (i = !0), (a = d.commandManager.execute(s.cmd, e)), n.setActivePanel(a, t, e), n.renderActivePanel(e);
                          },
                          function () {
                              l ||
                                  i ||
                                  ((l = !0),
                                  setTimeout(function () {
                                      o || i || n.showLoadingPanel();
                                  }, 400));
                          },
                          function () {
                              (o = l = !0), n.showLoadingPanel({ error: "We were unable to load settings.", retryInfo: { id: t, options: e } });
                          }
                      );
                  else {
                      if (!(a = _.findWhere(this.subViews, { panelid: t }))) {
                          var r = t.charAt(0).toUpperCase() + t.slice(1),
                              c = d.views.settings.panels[r];
                          c && (a = new c(e));
                      }
                      this.setActivePanel(a, t, e), this.renderActivePanel(e);
                  }
              }
          },
          settingsUpsellShowing: function () {
              return this.upsellView && this.upsellView.showing;
          },
          showUpsell: function (t) {
              var e = this.settingsUpsellShowing();
              if (e) {
                  if (this.upsellView.options.title === t.title) return !0;
                  this.upsellView.hideUpsell();
              }
              if (((t.template = s.templates.upsell), (this.upsellView = new d.views.upsell.Message(t)), this.$el.find(".settings-view-container").prepend(this.upsellView.render().$el), e)) {
                  var n = this;
                  setTimeout(function () {
                      n.upsellView.show();
                  }, 350);
              } else this.upsellView.show();
          },
      })),
      (s.views.NavMenu = Backbone.View.extend({
          template: s.templates.navmenu,
          events: {
              "click .main-nav-item": "onClickNavItem",
              "click .user-info": "toggleUserPanel",
              "click .action-profile": "profileClicked",
              "click .action-logout": "logoutClicked",
              "click .user-close": "closeUser",
              "click .login-button": "loginClicked",
          },
          initialize: function () {
              var e = this;
              this.listenTo(d.settingsManager, "navItemsChanged", this.render),
                  this.listenTo(d.models.customization, "change:displayname", this.onChangeDisplayname),
                  this.listenTo(d, "settings:hidden", this.closeUser),
                  this.render(),
                  this.$el.closest(".app").on("click", function (t) {
                      a.contains(e.$user[0], t.target) || t.target === e.$user[0] || e.closeUser();
                  }),
                  void 0 === d.inExtensionUpgrade && d.commandManager.execute("upsell.setUpgradePath");
          },
          render: function () {
              var t = localStorage.getItem("email"),
                  e = d.isLoggedIn(),
                  n = { displayName: d.models.customization.get("displayname"), email: t, loggedIn: e, menu: d.settingsManager.getNavItems() };
              this.$el.html(this.template(n)),
                  (this.$user = this.$(".user")),
                  (this.$userInfoName = this.$(".user-info-name")),
                  (this.$userHidden = this.$(".user-hidden")),
                  e && this.renderGravatar(t),
                  d.conditionalFeatures.featureEnabled("plus") && !d.conditionalFeatures.featureEnabled("team") && this.$user.addClass("has-plus");
              var s = this.$el.clone();
              return s.css("visibility", "hidden"), s.css("position", "absolute"), document.body.appendChild(s[0]), this.$user.css("transform", "translateY(" + s.find(".user-hidden").height() + "px)"), s.remove(), this;
          },
          renderGravatar: function (t) {
              (this.$userAvatarImg = this.$(".user-avatar img")), (this.$userAvatarHidden = this.$(".user-avatar-hidden"));
              var e = new d.views.Gravatar({ email: t, size: 50 });
              this.$userAvatarHidden.html(e.render().$el);
              var n = this,
                  s = n.$(".user-avatar-hidden img");
              function a() {
                  n.$userAvatarImg.attr("src", s.attr("src"));
              }
              s[0].complete ? a() : s.once("load", a);
          },
          onClickNavItem: function (t) {
              var e = a(t.delegatedTarget).data("navitem");
              this.trigger("navItemClicked", e);
          },
          toggleUserPanel: function () {
              this.$user.removeClass("u--no-transition"),
                  this.$(".anim-caret").removeClass("u--no-transition"),
                  this.$user.hasClass("open") ? this.$user.css("transform", "translateY(" + this.$userHidden.height() + "px)") : (d.sendEvent("User Menu", "Show"), this.$user.css("transform", "translateY(0)")),
                  this.$user.toggleClass("open");
          },
          profileClicked: function (t) {
              d.sendEvent("User Menu", "Profile Clicked"),
                  t.preventDefault(),
                  t.stopPropagation(),
                  a(t.delegatedTarget).html("Launching…"),
                  a
                      .ajax({ type: "POST", data: JSON.stringify({ medium: "account" }), url: d.globals.urlRootApi + "login/onetime" })
                      .done(function (t) {
                          t && t.otp && t.email && window.open(d.globals.urlRootAccount + "onetime?email=" + encodeURIComponent(t.email) + "&otp=" + encodeURIComponent(t.otp), "_blank");
                      })
                      .always(function () {
                          a(t.delegatedTarget).html("Profile");
                      });
          },
          logoutClicked: function (t) {
              t.preventDefault(), t.stopPropagation(), a(".action-logout").addClass("action-logout-disabled").text("Logging out…"), d.sendEvent("User Menu", "Log Out Clicked"), d.commandManager.execute("logout");
          },
          closeUser: function () {
              this.$user.css("transform", "translateY(" + this.$userHidden.height() + "px)").removeClass("open");
          },
          loginClicked: function (t) {
              t.preventDefault(), t.stopPropagation(), d.sendEvent("User Menu", "Log In Clicked"), d.commandManager.execute("settings.hide"), d.commandManager.execute("account.login");
          },
          onChangeDisplayname: function () {
              this.$userInfoName.text(d.models.customization.get("displayname"));
          },
      })),
      (s.views.Whatsnew = s.views.SettingsPanel.extend({
          attributes: { id: "whats-new", class: "settings-view whats-new" },
          template: s.templates.whatsnew,
          panelid: "whatsnew",
          events: { "click .action-back": "clickBack" },
          initialize: function () {
              d.sendEvent("What's New", "Panel Opened");
          },
          render: function () {
              return this.$el.html(this.template({})), (this.$whatsnew = a(this.$el.find(".whatsnew-body")[0])), this.$whatsnew.html('<span class="loading"><i class="loading-icon"></i>Loading…</span>'), this.fetchLatestWhatsNew(), this;
          },
          fetchLatestWhatsNew: function () {
              var e = this;
              a.ajax({ type: "GET", url: d.globals.urlRootApi + "settings/whatsnew" })
                  .done(function (t) {
                      t.html && e.$whatsnew.html(t.html);
                  })
                  .fail(function () {
                      e.$el.html(e.template({}));
                  });
          },
      })),
      (s.commands.SettingsColorPicker = d.models.Command.extend({
          defaults: { id: "settings.color.picker" },
          execute: function (t) {
              d.colorPicker
                  ? d.trigger("colorPicker:mount", t)
                  : d.widgetManager.loadWidget("colorPicker").then(function () {
                        d.trigger("colorPicker:mount", t);
                    });
          },
      })),
      (s.commands.SettingsPanelHelp = d.models.Command.extend({
          defaults: { id: "settings.panels.help" },
          execute: function () {
              return s.styleLoaded || ((s.styleLoaded = !0), s.styles.style()), new s.views.Help();
          },
      })),
      (s.commands.SettingsPanelWhatsNew = d.models.Command.extend({
          defaults: { id: "settings.panels.whatsnew" },
          execute: function () {
              return s.styleLoaded || ((s.styleLoaded = !0), s.styles.style()), new s.views.Whatsnew();
          },
      })),
      (s.commands.SettingsPanelAbout = d.models.Command.extend({
          defaults: { id: "settings.panels.about" },
          execute: function () {
              return s.styleLoaded || ((s.styleLoaded = !0), s.styles.style()), new s.views.About();
          },
      })),
      (s.commands.SettingsInitialize = d.models.Command.extend({
          defaults: { id: "settings.initialize" },
          execute: function (t) {
              return s.views.mainSettings || (s.views.mainSettings = new s.views.MainSettings()), t.prepend(s.views.mainSettings.$el), t.toggleClass("infinispin", d.settingsManager.infinispin()), s.views.mainSettings;
          },
      })),
      (s.commands.SettingsDisplay = d.models.Command.extend({
          defaults: { id: "settings.display" },
          execute: function (t, e) {
              d.views.settingsPane.initializeSettings().then(function () {
                  s.views.mainSettings && s.views.mainSettings.showSettings(e);
              });
          },
      })),
      (s.commands.SettingsDisplayUpgrade = d.models.Command.extend({
          defaults: { id: "settings.display.upgrade" },
          execute: function (t, e) {
              var n = "https://momentumdash.com/plus?utm_source=extension&utm_medium=organic";
              e && e.source ? (n += "&utm_campaign=" + encodeURIComponent(e.source)) : !e && t && t.source && (n += "&utm_campaign=" + encodeURIComponent(t.source)), d.commandManager.execute("window.open", null, { url: n });
          },
      })),
      (s.commands.SettingsDisplayUpgradePanel = d.models.Command.extend({
          defaults: { id: "settings.display.upgrade.panel" },
          execute: function (t, e) {
              s.views.mainSettings && (((e = e || {}).section = "upgrade"), s.views.mainSettings.showSettings(e));
          },
      })),
      (s.commands.SettingsToggle = d.models.Command.extend({
          defaults: { id: "settings.toggle" },
          execute: function (t, e) {
              e && e.section ? (s.views.mainSettings.toggleVisible(), s.views.mainSettings.visible && s.views.mainSettings.showSettings(e)) : s.views.mainSettings && s.views.mainSettings.toggleVisible();
          },
      })),
      (s.commands.SettingsHide = d.models.Command.extend({
          defaults: { id: "settings.hide" },
          execute: function () {
              s.views.mainSettings && s.views.mainSettings.hideSettings();
          },
      })),
      (s.commands.SettingEnable = d.models.Command.extend({
          defaults: { id: "setting.enable" },
          execute: function (t, e) {
              if (e && e.name) {
                  var n = {};
                  (n[e.name] = !!e.value), d.models.customization.set(n);
              }
          },
      })),
      (s.commands.SettingsCacheUpgradeCopy = d.models.Command.extend({
          defaults: { id: "settings.cache.upgradecopy" },
          fetching: !1,
          fetched: !1,
          execute: function (t, e) {
              var n = this;
              if ((t || !d.conditionalFeatures.featureEnabled("plus")) && (t || (!n.fetching && !n.fetched))) {
                  n.fetching = !0;
                  var s = d.globals.urlRootApi + "settings/upgradecopy";
                  e && t ? (s = s + "?refresh=1&src=" + encodeURIComponent(e)) : e ? (s = s + "?src=" + encodeURIComponent(e)) : t && (s += "?refresh=1"),
                      a
                          .ajax({ type: "GET", url: s })
                          .done(function (t) {
                              (n.fetching = !1), t && ((n.fetched = !0), localStorage.setItem("cachedUpgradeCopy", JSON.stringify(t)), d.trigger("settings:upgradeCopyChanged"));
                          })
                          .fail(function () {
                              (n.fetched = !1), (n.fetching = !1);
                          }),
                      setTimeout(function () {
                          n.fetching && (n.fetching = !1);
                      }, 1e4);
              }
          },
      })),
      (s.views.mainSettings = d.widgetManager.handover("settings", s.views.MainSettings, { region: "bottom-left", order: "prepend" })),
      s
  );
};
m.addinManager && m.addinManager.registerAddinFn("1d872cf4-953a-4743-8f5e-6785bba4bd19", fn_addin);
