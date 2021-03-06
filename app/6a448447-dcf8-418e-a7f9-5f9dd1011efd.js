var fn_addin = function (s, i, t) {
  var o = o || {};
  return (
      (o.styles = o.styles || {}),
      (o.commands = o.commands || {}),
      (o.dependencies = t || o.dependencies || {}),
      (o.styles.style = function () {}),
      (o.views = o.views || {}),
      (o.collect = o.collect || {}),
      (o.models = o.models || {}),
      (o.templates = o.templates || {}),
      (o.info = { widget: !0, placeholderType: "none", id: "teamFocus", addin: "6a448447-dcf8-418e-a7f9-5f9dd1011efd", visibleSetting: "focusVisible" }),
      s.console.log(s.elapsed() + ": " + o.info.id + " started"),
      (o.templates = o.templates || {}),
      (o.templates.teamfocus = Handlebars.template({
          1: function (t, e, o, s) {
              return '<button class="team-focus-button add-team-focus"><i class="icon icon-plus"></i> Team Goal</button>';
          },
          3: function (t, e, o, s) {
              var i;
              return (
                  '\t\t\t<div class="icon-wrapper dash-icon-wrapper more-toggle">\n\t\t\t\t' +
                  (null != (i = (e.iconEllipsis || (t && t.iconEllipsis) || e.helperMissing).call(t, "dash-icon more-icon", { name: "iconEllipsis", hash: {}, data: s })) ? i : "") +
                  "\n\t\t\t</div>\n"
              );
          },
          compiler: [6, ">= 2.0.0-beta.1"],
          main: function (t, e, o, s) {
              var i,
                  a,
                  l = e.helperMissing,
                  n = "function",
                  d = this.escapeExpression;
              return (
                  '<div class="team-focus-content has-3-col">\n\t<div class="side-col">\n\n\t</div>\n\t<div class="center-col">\n\t\t<span class="editable goal-label" data-ph="⟮ No Label ⟯">' +
                  d(typeof (a = null != (a = e.label || (null != t ? t.label : t)) ? a : l) == n ? a.call(t, { name: "label", hash: {}, data: s }) : a) +
                  '</span>\n\t\t<span class="editable goal">' +
                  d(typeof (a = null != (a = e.goal || (null != t ? t.goal : t)) ? a : l) == n ? a.call(t, { name: "goal", hash: {}, data: s }) : a) +
                  "</span>\n\t" +
                  (null != (i = e.if.call(t, null != t ? t.userIsAdmin : t, { name: "if", hash: {}, fn: this.program(1, s, 0), inverse: this.noop, data: s })) ? i : "") +
                  '\n\t</div>\n\t<div class="side-col">\n\t\t<div class="more more-dash">\n' +
                  (null != (i = e.if.call(t, null != t ? t.userIsAdmin : t, { name: "if", hash: {}, fn: this.program(3, s, 0), inverse: this.noop, data: s })) ? i : "") +
                  '\t\t\t<div class="app dropdown more-dropdown dash-dropdown team-focus-dropdown nipple nipple-top-left">\n\t\t\t\t<ul class="dropdown-list">\n\t\t\t\t\t<li class="team-focus-edit">\n\t\t\t\t\t\t<span class="dropdown-list-icon-wrapper">\n\t\t\t\t\t\t\t<svg class="dropdown-list-icon icon icon-edit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.067 3.986a.5.5 0 0 0-.708-.001L3.437 14.91a.5.5 0 0 0 0 .707l4.948 4.948a.5.5 0 0 0 .707 0L20.009 9.648a.5.5 0 0 0 0-.706l-4.942-4.956zM2.43 16.8a.5.5 0 0 0-.84.237L.084 23.314a.501.501 0 0 0 .603.602l6.272-1.5a.5.5 0 0 0 .237-.84L2.43 16.8zM23.2 2.924L21.077.8a2.5 2.5 0 0 0-3.532 0l-1.418 1.417a.5.5 0 0 0 0 .707l4.95 4.949a.5.5 0 0 0 .707 0L23.2 6.454a2.5 2.5 0 0 0 0-3.53z"/></svg>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span class="dropdown-list-label">Edit</span>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class="team-focus-clear">\n\t\t\t\t\t\t<span class="dropdown-list-icon-wrapper">\n\t\t\t\t\t\t\t<svg class="dropdown-list-icon icon icon-clear" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 39"><g transform="translate(-1)" fill="none" fill-rule="evenodd"><rect stroke-width="3" transform="rotate(45 17.5 23)" x="14.5" y="5.5" width="6" height="35" rx="2"/><path d="M7 34l14.5-14.5" stroke-width="3.8" stroke-linecap="square"/><path d="M31.5.7V6M33.886 4.812l-4.772-2.625M29.114 4.812l4.772-2.625M37.2 15.2v5.3M39.548 19.117l-4.773-2.625M34.775 19.117l4.773-2.625" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.5 4.42V7.6M20.932 6.887l-2.864-1.575M18.068 6.887l2.864-1.575" stroke-width=".8" stroke-linecap="round" stroke-linejoin="round"/></g></svg>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span class="dropdown-list-label">Clear</span>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n'
              );
          },
          useData: !0,
      })),
      (o.styles = o.styles || {}),
      (o.styles.style = function () {
          var t = document.createElement("style");
          (t.type = "text/css"),
              (t.innerHTML =
                  '.team-focus{position:absolute;top:3px;right:0;left:0;font-size:1.125rem;line-height:1.8}.team-focus.hidden{display:none}.team-focus.no-focus-set .team-focus-content{margin:0}.focus-fade-out .team-focus-content{animation:fade-out .5s ease 0s 1 forwards;pointer-events:none}@keyframes fade-out{from{opacity:1}to{opacity:0}}.team-focus .center-col{align-items:baseline}.team-focus-view{max-width:80vw;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.team-focus .editable{display:inline-block;border-bottom:1px solid rgba(255,255,255,0);transition:border .2s ease}.team-focus.show-editor .editable{display:inline-block;outline:0}.team-focus .editable.goal:focus{min-width:92px;border-bottom:1px solid rgba(255,255,255,1)}.team-focus .goal-label{margin-right:12px;padding-bottom:5px;line-height:1;opacity:.85;font-size:.9375rem;font-weight:600;text-transform:uppercase;text-align:right}.team-focus .goal-label:empty{display:none}.team-focus.show-editor .goal-label{display:inline-block;border-bottom:1px solid rgba(255,255,255,0);text-align:left}.team-focus .goal-label:empty:before{content:attr(data-ph)}.team-focus .editable.goal-label:focus{min-width:92px;border-bottom:1px solid rgba(255,255,255,1)}.team-focus .goal{margin-right:7px;font-size:1.25rem;color:rgba(255,255,255,.8);text-align:left}.team-focus .goal:empty{width:0;min-width:auto;margin:0}.team-focus.show-editor .goal{margin-right:7px}.team-focus .goal:empty:before{content:"D ";opacity:0}.team-focus .team-focus-button{padding:7px 19px 8px;display:inline-flex;opacity:0;background:rgba(255,255,255,.7);border-radius:50px;border:none;color:#181c1f;cursor:pointer;font-size:.875rem;font-weight:500;outline:0;transition:all .2s ease}.team-focus:hover .team-focus-button{opacity:1}.team-focus .team-focus-button:hover{background:#fff}.team-focus .team-focus-button i{margin-left:-4px;margin-right:4px}.team-focus .add-team-focus{display:none}.team-focus.no-focus-set .add-team-focus{display:inline-flex}.team-focus.focus-fade-out .team-focus-button{display:none}.team-focus .more{margin-left:4px;display:flex;align-items:center}.team-focus.no-focus-set .more,.team-focus.show-editor .team-focus-button,.team-focus.show-editor ul{display:none}.team-focus .icon-wrapper:after{height:25px;width:25px}.team-focus .more-icon{height:15px}.team-focus-dropdown-wrapper{position:relative;font-size:1rem}.team-focus .dash-dropdown{left:-8px;margin-top:8px}.team-focus .more.invert .dash-dropdown{top:auto;bottom:calc(100% + 5px)}.team-focus-dropdown ul{min-width:90px}.team-focus-dropdown .icon-edit{height:14px;width:11px}.team-focus-dropdown .icon-clear{stroke:var(--icon-color)}@media screen and (max-height:600px){.team-focus .goal-label{font-size:.8125rem}.team-focus .goal{font-size:1rem}}'),
              document.getElementsByTagName("head")[0].appendChild(t);
      }),
      (o.collect.TeamFocus = s.collect.SyncedCollection.extend({
          initialize: function (t, e) {
              ((e = e || {}).name = "teamFocus"),
                  (e.serverIdAttribute = "focusUuid"),
                  (e.model = o.models.TeamFocus),
                  (e.transientProps = ["createdDate"]),
                  (e.apiUrl = s.globals.urlRootApi + "team/focus"),
                  s.collect.SyncedCollection.prototype.initialize.call(this, t, e);
          },
      })),
      (o.models.TeamFocus = Backbone.Model.extend({
          initialize: function () {
              this.idAttribute = this.collection.idAttribute || "csid";
          },
          defaults: function () {
              return { title: "Do the thing", createdDate: s.date(), updatedDate: s.now(), label: "This Week", active: !1, serverSetId: !1 };
          },
      })),
      (o.views.TeamFocus = Backbone.View.extend({
          template: o.templates.teamfocus,
          attributes: { id: "team-focus", class: "team-focus has-dash-icon u--fadeable" },
          events: {
              "click .team-focus-edit": "toggleEditor",
              "click .add-team-focus": "toggleEditor",
              "click .team-focus-clear": "deactivate",
              "click .team-focus-editor-close": "toggleEditor",
              "click .team-focus-editor-save": "save",
              "click .team-focus-dropdown": "eatClick",
              "keydown .goal-label": "handleKeydown",
              "keydown .goal": "handleKeydown",
              "blur .editable": "handleBlur",
              "click .more-dash": "toggleDropdown",
              "focus .editable": "handleFocus",
              "click .team-focus-content": "handleClick",
          },
          initialize: function () {
              (this.defaultLabel = "Team Goal"),
                  (this.dropdownOpen = !1),
                  (this.editorOpen = !1),
                  (this.focusSet = null),
                  this.listenTo(s, "globalEvent:click", this.handleGlobalClick),
                  this.listenTo(this.collection, "sync", this.onSync),
                  this.collection.fetch({ reset: !0 }),
                  this.listenTo(s, "focus:showMessage", this.hideGoal),
                  this.listenTo(s, "focus:hideMessage", this.showGoal);
          },
          render: function () {
              var t = {},
                  e = this.options.order + "To",
                  o = s.models.teamInfo.get("team");
              (t.userIsAdmin = o && o.userIsAdmin),
                  this.model && this.model.get("active")
                      ? ((t.goal = this.model.get("title")), (t.label = this.model.get("label")), (t.active = this.model.get("active")), this.$el.removeClass("no-focus-set"), this.$el.addClass("focus-set"), (this.focusSet = !0))
                      : ((this.model = null), this.$el.removeClass("focus-set"), this.$el.addClass("no-focus-set"), (this.focusSet = !1)),
                  this.$el.toggleClass("hidden", null == this.model && !t.userIsAdmin),
                  this.$el[e]("." + this.options.region)
                      [this.renderedOnce ? "mShow" : "mFadeIn"]()
                      .html(this.template(t)),
                  (this.renderedOnce = !0),
                  i("body").addClass("has-team-focus"),
                  (this.$content = this.$(".team-focus-content")),
                  (this.$goal = this.$(".goal")),
                  (this.$label = this.$(".goal-label")),
                  (this.$dropdownContainer = this.$(".more"));
          },
          hideGoal: function (t) {
              this.$el.mFadeOut(500, !1, t);
          },
          showGoal: function (t) {
              this.$el.mFadeIn(500, !1, t);
          },
          handleClick: function () {
              this.editorOpen || (this.focusSet && this.dropdownOpen ? this.toggleDropdown() : this.focusSet || this.toggleEditor());
          },
          toggleDropdown: function (t, e) {
              t && t.stopImmediatePropagation && t.stopImmediatePropagation();
              var o = !1,
                  s = this.$(".more-dropdown");
              this.$el.offset().top + 125 > window.innerHeight ? ((o = !0), s.removeClass("nipple-top-left"), s.addClass("nipple nipple-bottom-left")) : (s.removeClass("nipple-bottom-left"), s.addClass("nipple nipple-top-left")),
                  void 0 !== e
                      ? ((this.dropdownOpen = e), this.$dropdownContainer.toggleClass("active", e), this.$dropdownContainer.toggleClass("invert", e && o))
                      : ((this.dropdownOpen = !this.dropdownOpen), this.$dropdownContainer.toggleClass("active"), this.$dropdownContainer.toggleClass("invert", o));
          },
          toggleEditor: function (t, e) {
              t && t.stopImmediatePropagation && t.stopImmediatePropagation(),
                  void 0 !== e ? ((this.editorOpen = e), i(this.$el).toggleClass("show-editor", e), this.toggleDropdown(void 0, !1)) : ((this.editorOpen = !this.editorOpen), i(this.$el).toggleClass("show-editor")),
                  this.editorOpen
                      ? (this.$goal.attr("contenteditable", "true"),
                        this.$label.attr("contenteditable", "true"),
                        this.focusSet || this.$label.text(this.defaultLabel),
                        s.utils.setEndOfContentEditable(this.$goal[0]),
                        this.toggleDropdown(void 0, !1))
                      : (this.$goal.attr("contenteditable", "false"), this.$label.attr("contenteditable", "false"));
          },
          handleKeydown: function (t) {
              t && 13 === t.keyCode ? (t.preventDefault(), this.save()) : t && 27 === t.keyCode && ((this.aborting = !0), this.toggleEditor(t, !1), this.revertValues(), (this.aborting = !1));
          },
          revertValues: function () {
              var t = this.model && this.model.get("title"),
                  e = this.model && this.model.get("label");
              t || e ? (this.$goal.text(t || ""), this.$label.text(e || "")) : this.delete();
          },
          save: function () {
              var t = this.$(".goal-label").text(),
                  e = this.$(".goal").text();
              (t = t && t.trim()),
                  (e = e && e.trim()),
                  t || e ? (this.model ? this.model.save({ label: t, title: e }) : this.collection.create({ label: t, title: e, active: !0 })) : this.delete(),
                  this.toggleEditor(void 0, !1),
                  this.toggleDropdown(void 0, !1);
          },
          onSync: function () {
              (this.model =
                  this.collection.models &&
                  this.collection.models.length &&
                  this.collection.max(function (t) {
                      return t.get("active") ? t.get("updatedDate") : 0;
                  })),
                  this.render(),
                  this.listenTo(this.model, "change", this.render);
          },
          deactivate: function () {
              this.toggleDropdown(void 0, !1), this.$el.addClass("focus-fade-out");
              var t = this;
              setTimeout(function () {
                  t.model && t.model.save({ active: !1 }), t.collection.fetch({ reset: !0 }), (t.model = null), t.render(), t.$el.removeClass("focus-fade-out");
              }, 1e3);
          },
          delete: function () {
              this.toggleDropdown(void 0, !1), this.model && this.model.destroy(), (this.model = null), this.render();
          },
          handleGlobalClick: function (t) {
              (this.dropdownOpen || this.editorOpen) && t && !i.contains(this.$content[0], t.target) && (this.toggleDropdown(t, !1), this.toggleEditor(t, !1));
          },
          handleBlur: function (t) {
              this.aborting || i(t.relatedTarget).hasClass("editable") || (this.save && this.save());
          },
          handleFocus: function () {
              this.timeout && clearTimeout(this.timeout);
          },
          eatClick: function (t) {
              t && t.preventDefault(), t && t.stopPropagation();
          },
      })),
      o.styles.style(),
      (s.collect.teamfocus = new o.collect.TeamFocus()),
      (s.views.teamfocus = new o.views.TeamFocus({ collection: s.collect.teamfocus, model: s.models.teamfocus, region: "team-focus-wrapper", order: "append" })),
      s.widgets.push(s.views.teamfocus),
      o
  );
};
m.addinManager && m.addinManager.registerAddinFn("6a448447-dcf8-418e-a7f9-5f9dd1011efd", fn_addin);
