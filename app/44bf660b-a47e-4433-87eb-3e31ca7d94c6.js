var fn_addin = function (v, a, t) {
  var o = o || {};
  (o.styles = o.styles || {}),
      (o.commands = o.commands || {}),
      (o.dependencies = t || o.dependencies || {}),
      (o.styles.style = function () {}),
      (o.views = o.views || {}),
      (o.collect = o.collect || {}),
      (o.models = o.models || {}),
      (o.templates = o.templates || {}),
      (o.info = { widget: !0, placeholderType: "none", id: "metric_new_detail", addin: "44bf660b-a47e-4433-87eb-3e31ca7d94c6", dependencies: ["metrics"] }),
      v.console.log(v.elapsed() + ": " + o.info.id + " started"),
      (o.templates = o.templates || {}),
      (o.templates.editMetric = Handlebars.template({
          compiler: [6, ">= 2.0.0-beta.1"],
          main: function (t, e, i, n) {
              var s,
                  a = this.lambda,
                  o = this.escapeExpression;
              return (
                  '\n<div class="smooth-height-wrapper">\n\t<div class="smooth-height-content">\n\t\t<div class="types active">\n\t\t\t<div class="label-group metric-type-header">\n\t\t\t\t<span class="metric-type-label">Choose a Type</span>\n\t\t\t</div>\n\t\t\t<div class="button-list type type-type type-nav">\n\t\t\t\t<div class="button-list-item type-nav-item manual-option" data-tab="manual">\n\t\t\t\t\t<div class="button-list-item-title">' +
                  o(a(null != (s = null != t ? t.labels : t) ? s.manual : s, t)) +
                  '</div>\n\t\t\t\t\t<div class="button-list-item-description">Track manually</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="button-list-item type-nav-item url-option" data-tab="url">\n\t\t\t\t\t<div class="button-list-item-title">' +
                  o(a(null != (s = null != t ? t.labels : t) ? s.url : s, t)) +
                  '</div>\n\t\t\t\t\t<div class="button-list-item-description">Update from a URL</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="button-list-item type-nav-item integration-option" data-tab="integration">\n\t\t\t\t\t<div class="button-list-item-title">' +
                  o(a(null != (s = null != t ? t.labels : t) ? s.integration : s, t)) +
                  '</div>\n\t\t\t\t\t<div class="button-list-item-description">Connect to a service</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class="metric-edit">\n\t\t\t<div class="input-group metric-name-group">\n\t\t\t\t<label for="metric-name">Name</label>\n\t\t\t\t<input type="text" name="metric-name" id="metric-edit-label" class="metric-edit-input" placeholder="" data-test="metric-name" autocomplete="off">\n\t\t\t</div>\n\n\t\t\t<div class="type manual-type">\n\t\t\t\t<div class="input-group value-group">\n\t\t\t\t\t<label for="metric-value">Value</label>\n\t\t\t\t\t<input type="text" name="metric-value" id="metric-edit-value" class="metric-edit-input" placeholder="0" data-test="metric-value" autocomplete="off">\n\t\t\t\t</div>\n\n\t\t\t\t\x3c!-- Reset --\x3e\n\t\t\t\t<div class="input-group has-toggle reset-metric-group" data-test="metric-reset">\n\t\t\t\t\t<label for="reset-metric">Reset</label>\n\t\t\t\t\t<div class="select-wrapper">\n\t\t\t\t\t\t<select name="reset-metric" id="reset-metric">\n\t\t\t\t\t\t\t<option value="none">Never</option>\n\t\t\t\t\t\t\t<option value="daily">Daily</option>\n\t\t\t\t\t\t\t<option value="weekly">Weekly</option>\n\t\t\t\t\t\t\t<option value="monthly">Monthly</option>\n\t\t\t\t\t\t\t<option value="yearly">Yearly</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class="type url-type">\n\t\t\t\t<div class="input-group">\n\t\t\t\t\t<label for="metric-edit-url">Url</label>\n\t\t\t\t\t<input id="metric-edit-url" class="metric-edit-input" data-property=\'url\' name="edit-metric-url" type="text" placeholder="http://" autocomplete="off">\n\t\t\t\t\t<div class="input-description">Enter an API address <a href="https://get.momentumdash.help/hc/en-us/articles/360038089754#h_b3d82248-1a7f-40c1-9304-01b0421dacca" target="_blank">More</a></div>\n\t\t\t\t</div>\n\t\t\t\t<div class="input-group path-group">\n\t\t\t\t\t<label for="path">Value</label>\n\t\t\t\t\t<div class="select-wrapper">\n\t\t\t\t\t\t<select name="path" id="metric-edit-path" class="metric-path" data-test="matric-path"></select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<div class="type integration-type">\n\t\t\t\t<div class="integration-step choose-provider active">\n\t\t\t\t\t<div class="providers">\n\t\t\t\t\t\t<ul class="tile-list integration-list provider-list add-provider">\n\t\t\t\t\t\t\t<li><span class="loading"><i class="loading-icon"></i>Loading...</span></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t<a href="https://suggestions.momentumdash.help/" class="suggest" target="_blank">Suggest integration &rarr;</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="integration-step connect-to-provider">\n\t\t\t\t\t<label>Connect to <span class="connecting-provider"></span></label>\n\n\t\t\t\t\t<div class="description">A secure window will open. Momentum doesn\'t see or access your login info.</div>\n\n\t\t\t\t\t<div class="button-group">\n\t\t\t\t\t\t<span class="button connect">Connect</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="integration-step chosen-provider">\n\n\t\t\t\t\t<div class="provider-info">\n\t\t\t\t\t\t<img class="provider-logo" src=""><span class="provider-name"></span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="input-group provider-metric">\n\t\t\t\t\t\t<label>Value</label>\n\t\t\t\t\t\t<div class="provider-metric-wrapper select-wrapper">\n\t\t\t\t\t\t\t<select class="provider-metric-datapoints"></select>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class="option-wrapper unit-controls add-time u--no-transition countdown">\n\t\t\t\t\t\t\t<div class="time-expand">\n\t\t\t\t\t\t\t\t<label>Unit</label>\n\t\t\t\t\t\t\t\t<span class="x-caret u--no-transition">\n\t\t\t\t\t\t\t\t\t<svg class="icon x-caret-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.16 11.75"><path d="M52.16,26.08A5.87,5.87,0,0,1,46.29,32H5.88A5.88,5.88,0,0,1,0,26.08H0a5.87,5.87,0,0,1,5.88-5.87H46.29a5.87,5.87,0,0,1,5.87,5.87Z" transform="translate(0 -20.21)"/></svg>\n\t\t\t\t\t\t\t\t\t<svg class="icon x-caret-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.16 11.75"><path d="M52.16,26.08A5.87,5.87,0,0,1,46.29,32H5.88A5.88,5.88,0,0,1,0,26.08H0a5.87,5.87,0,0,1,5.88-5.87H46.29a5.87,5.87,0,0,1,5.87,5.87Z" transform="translate(0 -20.21)"/></svg>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="option-form add-time-wrapper">\n\t\t\t\t\t\t\t\t<div class="add-time-group">\n\t\t\t\t\t\t\t\t\t<div class="unit-input">\n\t\t\t\t\t\t\t\t\t\t<input class="unit-edit" type="text">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="select-wrapper unit-position-select">\n\t\t\t\t\t\t\t\t\t\t<select class="unit-prepend-edit">\n\t\t\t\t\t\t\t\t\t\t\t<option value="false">After</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value="true">Before</option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t\t<div class="re-auth">\n\t\t\t\t\t\t<span class="button connect">Reconnect</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="input-group has-toggle create-pinned-group" data-test="metric-pin">\n\t\t\t\t\t<label for="create-pinned">Pinned</label>\n\t\t\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t\t</div>\n\n\n\t\t\t\t<div class="metric-edit-controls">\n\t\t\t\t\t<span class="error-message"><span class="save-error"></span></span>\n\t\t\t\t\t<span class="button save" data-test="countdown-save">Save</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t\x3c!-- Pinned --\x3e\n\t</div>\n</div>\n'
              );
          },
          useData: !0,
      })),
      (o.templates.provider = Handlebars.template({
          1: function (t, e, i, n) {
              return "connect-provider";
          },
          3: function (t, e, i, n) {
              return "use-provider";
          },
          compiler: [6, ">= 2.0.0-beta.1"],
          main: function (t, e, i, n) {
              var s,
                  a,
                  o = e.helperMissing,
                  r = "function",
                  l = this.escapeExpression;
              return (
                  '<div data-provider-id="' +
                  l(typeof (a = null != (a = e.id || (null != t ? t.id : t)) ? a : o) == r ? a.call(t, { name: "id", hash: {}, data: n }) : a) +
                  '" class="' +
                  (null != (s = e.if.call(t, null != t ? t.notConnected : t, { name: "if", hash: {}, fn: this.program(1, n, 0), inverse: this.noop, data: n })) ? s : "") +
                  " " +
                  (null != (s = e.unless.call(t, null != t ? t.notConnected : t, { name: "unless", hash: {}, fn: this.program(3, n, 0), inverse: this.noop, data: n })) ? s : "") +
                  ' available-provider button-list-item">\n\t<img class="button-list-item-img" src="' +
                  l(typeof (a = null != (a = e.small_icon_url || (null != t ? t.small_icon_url : t)) ? a : o) == r ? a.call(t, { name: "small_icon_url", hash: {}, data: n }) : a) +
                  '">\n\t<div class="button-list-item-title">' +
                  l(typeof (a = null != (a = e.provider_title || (null != t ? t.provider_title : t)) ? a : o) == r ? a.call(t, { name: "provider_title", hash: {}, data: n }) : a) +
                  "</div>\n</div>\n"
              );
          },
          useData: !0,
      })),
      (o.styles = o.styles || {}),
      (o.styles.style = function () {
          var t = document.createElement("style");
          (t.type = "text/css"),
              (t.innerHTML =
                  ".button-list-item{margin-bottom:.5rem;padding:6px 9px;border:1px solid var(--border-color);border-radius:3px;cursor:pointer}.button-list .button-list-item:last-child{margin-bottom:0}.button-list-item:hover{background:rgba(255,255,255,.1)}.light .button-list-item:hover{background:rgba(0,0,0,.05)}.button-list-item:hover:active{background:rgba(255,255,255,.2);transition-duration:0s}.light .button-list-item:hover:active{background:rgba(0,0,0,.1)}.button-list-item-title{opacity:.8;font-size:.9375rem}.button-list-item-description{padding-top:1px;opacity:.5;font-size:.75rem}.tile-list{display:flex;flex-wrap:wrap;justify-content:space-between}.tile-list .button-list-item{width:48%;text-align:center}.tile-list .button-list-item-img{max-height:24px;width:24px;padding:3px 0}.tile-list .button-list-item-title{margin:0;font-size:.8125rem}.input-description{margin:.25rem 0 -4px;font-size:.8125rem;opacity:.7}.input-description a{padding:2px;opacity:.65}.input-description a:hover{opacity:.85}.input-description a:active{opacity:1}.smooth-height-wrapper{width:calc(var(--metric-width) - var(--app-padding) * 2);overflow:hidden;transition:height .3s ease}.no-tab-transitions .smooth-height-wrapper{height:auto!important;transition:none}.smooth-height-content{width:100%;position:relative}.metric-edit,.types{width:100%;position:absolute;top:0;right:0;bottom:0;left:0;opacity:0;overflow:hidden;pointer-events:none;transition:.5s opacity ease}.metric-edit.active,.types.active{position:relative;z-index:1;opacity:1;pointer-events:all}.no-tab-transitions .metric-edit,.no-tab-transitions .types{transition:none}.metric-type-header{margin-bottom:9px;display:flex}.editing .metric-type-header{display:none}.metric-type-header .metric-type-label{flex-grow:1;opacity:.8;font-size:.9375rem}.metric-type-header .back-to-types{visibility:hidden}.metric-type-header .back-to-types.active{visibility:visible}.metric-type-header .icon-hide{--size:9px;height:var(--size);width:var(--size);opacity:.5}.chosen-provider .select-wrapper,.path-group .select-wrapper{width:100%}.metric-type-header .icon-wrapper:hover .icon-hide{opacity:.8}.types-smooth-height-wrapper{transition:height .3s ease-in;overflow:hidden}.metric-edit .type{display:none;flex-direction:column;white-space:normal}.metric-edit .type.active{display:flex}.metric-detail .reset-metric-group{display:flex;align-items:center;justify-content:space-between}.app .input-group.path-group{display:none}.app .has-url .input-group.path-group{display:block}.integration-type{margin-bottom:21px}.integration-type .suggest{margin:-2px;padding:2px;opacity:.7;font-size:.75rem;font-weight:500}.integration-type .suggest:hover{opacity:1}.integration-type .empty{min-height:1px;font-size:.8125rem}.integration-step{width:100%;margin:6px 0 0;position:absolute;opacity:0;pointer-events:none;transition:.3s opacity ease}.integration-step.active{position:relative;pointer-events:all;opacity:1}.connect-to-provider label{opacity:.9}.connect-to-provider .description{margin:.5rem 0;opacity:.6;font-size:.8125rem}.connect-to-provider .button-group{margin-top:5px}.chosen-provider .provider-info{margin:2px 0 14px;display:flex;align-items:center}.chosen-provider .provider-logo{height:24px;margin-right:7px}.chosen-provider .provider-metric{margin-bottom:0}.re-auth{display:none;margin:10px 0 0;flex-direction:row}.auth-needed .re-auth{display:flex}.provider-metric-datapoints.select-value-disabled{color:rgba(255,255,255,.5);border-bottom:none}.light .provider-metric-datapoints.select-value-disabled{color:rgba(0,0,0,.4)}.create-pinned-group,.metric-edit-controls,.metric-name-group{height:auto;opacity:1;transition:opacity .3s ease-in;visibility:visible}.preliminary .create-pinned-group,.preliminary .metric-edit-controls,.preliminary .metric-name-group{height:0;margin:0;padding:0;opacity:0;overflow-y:hidden;visibility:hidden}.preliminary .type:not(.type-type),.preliminary .type:not(.type-type) .integration-step{visibility:hidden}.provider-metric .unit-controls{margin-top:5px}.unit-controls .unit-input{display:inline-block;margin-right:2px;width:40%}.unit-controls .unit-position-select{display:inline-block;width:55%}"),
              document.getElementsByTagName("head")[0].appendChild(t);
      });
  var r = o.dependencies.metrics;
  o.views.Metric = Backbone.View.extend({
      events: {
          "paste #metric-edit-url": "updateUrl",
          "change #metric-edit-url": "updateUrl",
          "change #metric-edit-path": "setSaveButton",
          "keyup #metric-edit-url": "checkUrl",
          "keyup #metric-edit-label": "setSaveButton",
          "keyup #metric-edit-value": "setSaveButton",
          "change #reset-metric": "setSaveButton",
          "click .save": "saveMetric",
          "click .create-pinned-group": "togglePinned",
          "click .type-nav-item": "switchTab",
          "click .back-to-types": "switchTab",
          "click .connect-provider": "initiateConnectProvider",
          "click .use-provider": "useProvider",
          "click .connect": "connectProvider",
          "change .provider-metric-datapoints": "changeMetricDataPoint",
          "click .time-expand": "toggleUnitOptions",
          "keyup .unit-edit": "handleUnitChange",
          "change .unit-prepend-edit": "handlePrependChange",
      },
      initialize: function (t) {
          var e = (this.tabs = { MANUAL: "manual", URL: "url", INTEGRATION: "integration", TYPE: "type" }),
              i = (this.labels = {});
          (i[e.MANUAL] = "Manual"),
              (i[e.URL] = "From a URL"),
              (i[e.INTEGRATION] = "From an Integration"),
              (i[e.TYPE] = "Choose a Type"),
              (this.providerStates = { CHOOSE_PROVIDER: "$chooseProvider", CHOSEN_PROVIDER: "$chosenProvider", CONNECT_PROVIDER: "$connectProvider" }),
              (this.collection = t.collection),
              (this.parentView = t.parentView),
              (this.template = o.templates.editMetric),
              (this.integrationCollection = r.models.metricManager.metricProviders),
              (this.selectedTab = this.tabs.TYPE);
          var n = this;
          this.listenTo(this.integrationCollection, "reset", this.integrationCollectionReset), this.refreshData();
          var s = this.parentView.addItemMenu({ text: "Reconnect", class: "reconnect dropdown-list-label" });
          a(
              '<span class="dropdown-list-icon-wrapper"><svg class="dropdown-list-icon icon icon-reconnect" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489.533 489.533"><path d="M268.175 488.161c98.2-11 176.9-89.5 188.1-187.7 14.7-128.4-85.1-237.7-210.2-239.1v-57.6c0-3.2-4-4.9-6.7-2.9l-118.6 87.1c-2 1.5-2 4.4 0 5.9l118.6 87.1c2.7 2 6.7.2 6.7-2.9v-57.5c87.9 1.4 158.3 76.2 152.3 165.6-5.1 76.9-67.8 139.3-144.7 144.2-81.5 5.2-150.8-53-163.2-130-2.3-14.3-14.8-24.7-29.2-24.7-17.9 0-31.9 15.9-29.1 33.6 17.4 109.7 118.7 192 236 178.9z"/></svg></span>'
          ).prependTo(".reconnect"),
              s.on("click", function () {
                  n.parentView.toggleDropdown();
                  var t = v.globals.urlRootApi + "settings/metrics/providers/" + n.activeProvider.get("id");
                  a.ajax({ type: "DELETE", contentType: "application/json", url: t }).done(function () {
                      n.$el.addClass("reconnecting"), n.connectProvider();
                  });
              });
      },
      render: function (t) {
          return ((t = t || {}).labels = this.labels), this.$el.html(this.template(t)), this.collectElements(), this.initializeResizeSensor(), this;
      },
      initializeResizeSensor: function () {
          this.resizeSensor && this.resizeSensor.detach(),
              this.$smoothHeightWrapper.css("height", this.$types.height()),
              (this.resizeSensor = new ResizeSensor(
                  this.$smoothHeightContent,
                  function () {
                      this.$smoothHeightWrapper.css("height", this.$smoothHeightContent.height());
                  }.bind(this)
              ));
      },
      setSaveButton: function () {
          if (0 === this.$label.val().trim().length) this.$saveButton.addClass("disabled");
          else if (this.selectedTab === this.tabs.URL) {
              var t = this.$path[0].selectedIndex;
              this.$saveButton.toggleClass("disabled", t <= 0);
          } else this.selectedTab === this.tabs.INTEGRATION ? this.$saveButton.toggleClass("disabled", null == this.activeProvider || null == this.providerDataPointId) : this.$saveButton.removeClass("disabled");
      },
      checkUrl: function (t) {
          var e = this;
          (this.lastKeyTypedOn = v.now()),
              13 === t.keyCode
                  ? this.updateUrl()
                  : setTimeout(function () {
                        400 < v.now() - e.lastKeyTypedOn && e.updateUrl();
                    }, 500);
      },
      updateUrl: function (e) {
          var i = this,
              n = e && "function" == typeof e,
              t = this.$url.val().trim();
          if (this.lastUrl !== t)
              if (0 !== t.length) {
                  var s = "<option selected class='path-guide'>Loading…</option>";
                  this.$dropdownList.html(""),
                      this.$dropdownList.append(s),
                      this.$el.addClass("has-url"),
                      this.$saveButton.addClass("disabled"),
                      (this.lastUrl = t),
                      a
                          .ajax({ type: "POST", contentType: "application/json", url: v.globals.urlRootApi + "metrics/preview", data: JSON.stringify({ url: t }) })
                          .done(function (t) {
                              (i.suggestionList = t.values),
                                  i.$dropdownList.html(""),
                                  i.$dropdownList.append(s),
                                  n ||
                                      i.$(".metric-path").mFadeOut(300, !1, function () {
                                          i.suggestionList && 0 < i.suggestionList.length ? i.$(".path-guide").html("Select") : (i.$(".path-guide").html("Not found"), i.$saveButton.addClass("disabled")), i.$(".metric-path").mFadeIn(300);
                                      }),
                                  i.suggestionList.forEach(function (t) {
                                      i.$dropdownList.append('<option data-id="' + t.path + '" value="' + t.path + '"><span class="path-option">' + t.name + ":  " + t.value + "</span></option>");
                                  }),
                                  i.$el.removeClass("search-loading"),
                                  n && e();
                          })
                          .fail(function () {
                              i.$(".metric-path").mFadeOut(300, !1, function () {
                                  i.$(".path-guide").html("Not found"), i.$saveButton.addClass("disabled"), i.$(".metric-path").mFadeIn(300);
                              });
                          });
              } else this.$el.removeClass("has-url");
      },
      startAdding: function () {
          this.$el.find(".save").css("display", "block"), this.resetView();
      },
      saveMetric: function (t) {
          t && t.stopPropagation(), this.save(this.model || null, !0);
      },
      save: function (t, e) {
          if (!this.$saveButton.hasClass("disabled")) {
              this.$el.find(".error-message").hide();
              var i = this.$value.val() || (t && t.get("value")) || 0,
                  n = v.utils.capitalizeWords((this.$label.val() || "").trim());
              if (0 !== n.length) {
                  var s = this.$pinned.hasClass("on"),
                      a = parseFloat(i);
                  isNaN(a) || a + "" != i || (i = a);
                  var o = this.$url.val(),
                      r = this.$path.val(),
                      l = this.$("#reset-metric").val(),
                      d = (o = o && o.trim()) && 0 < o.length;
                  if (d || this.selectedTab !== this.tabs.URL) {
                      var c = t ? t.get("providerId") : this.activeProvider ? this.activeProvider.get("id") : null,
                          p = {
                              url: d ? o : null,
                              path: r,
                              value: d ? this.suggestionList[this.$path[0].selectedIndex - 1].value : c && !t ? "Loading…" : i,
                              label: n,
                              pinned: s,
                              cycle: l,
                              modified: v.now(),
                              providerId: c,
                              providerDataPointId: this.providerDataPointId,
                              unit: this.unit,
                              prependUnit: "true" == this.prependUnit,
                          },
                          h = this;
                      return (
                          t
                              ? (t.save(p, { ignoreRender: !0 }), e && this.parentView.switchToListView())
                              : ((p.custom = !0),
                                (this.model = this.parentView.createMetric(p)),
                                c &&
                                    setTimeout(function () {
                                        h.collection.fetch({ skipLocalFetch: !0 });
                                    }, 200)),
                          t || this.model
                      );
                  }
                  this.$url.trigger("focus");
              } else this.focusLabel();
          }
      },
      resetView: function (t, e) {
          (this.model = null),
              t || this.render({}),
              this.$el.removeClass("editing"),
              this.$el.removeClass("auth-needed"),
              this.$saveError.hide(),
              this.$label.val(""),
              this.$("#reset-metric").val(this.collection.Cycles.NONE),
              this.$value.val(""),
              this.$url.val(""),
              this.$path.val(""),
              this.$pinned.removeClass("on"),
              this.$el.removeClass("has-url"),
              this.$saveButton.addClass("disabled"),
              this.$url.val(""),
              this.$path.val(""),
              this.parentView.$(".reconnect").hide(),
              this.updateUrl(),
              (this.lastUrl = null),
              (this.selectedTab = this.tabs.TYPE),
              (this.activeProvider = null),
              (this.providerDataPointId = null),
              (this.unit = null),
              (this.prependUnit = null);
          var i = this;
          e ||
              setTimeout(function () {
                  i.focusLabel();
              }, 350),
              this.toggleUnitOptions(!1),
              this.$unit.val(""),
              (this.$prepend[0].selectedIndex = 0),
              (this.unitsExpanded = !1);
      },
      collectElements: function () {
          (this.$saveError = this.$(".error-message")),
              (this.$saveButton = this.$(".save")),
              (this.$label = this.$("#metric-edit-label")),
              (this.$value = this.$("#metric-edit-value")),
              (this.$url = this.$("#metric-edit-url")),
              (this.$path = this.$("#metric-edit-path")),
              (this.$pinned = this.$(".create-pinned-group")),
              (this.$saveButton = this.$(".save")),
              (this.$dropdownList = this.$(".metric-path")),
              (this.$activeTab = this.$("." + this.selectedTab + "-type")),
              (this.$types = this.$(".types")),
              (this.$smoothHeightContent = this.$(".smooth-height-content")),
              (this.$smoothHeightWrapper = this.$(".smooth-height-wrapper")),
              (this.$metrics = a(this.$el.find(".settings-metrics")[0])),
              (this.$chosenProvider = this.$(".chosen-provider")),
              (this.$connectProvider = this.$(".connect-to-provider")),
              (this.$chooseProvider = this.$(".choose-provider")),
              (this.$connect = this.$(".settings-connect")),
              (this.$backToTypes = this.$(".back-to-types")),
              (this.$connectionProviderLabel = this.$(".connecting-provider")),
              (this.$metricDataPoints = this.$(".provider-metric-datapoints")),
              (this.$xCaret = this.$(".x-caret")),
              (this.$addTimeWrapper = this.$(".add-time-wrapper")),
              (this.$unit = this.$(".unit-edit")),
              (this.$prepend = this.$(".unit-prepend-edit")),
              (this.$providerSelectWrapper = this.$(".provider-metric-wrapper")),
              (this.$unitInputGroup = this.$(".unit-controls"));
      },
      editDetail: function (t, e) {
          this.resetView(!1, e && e.stayOnListView), this.$el.addClass("editing"), (this.model = t), this.$label.val(t.get("label")), this.$("#reset-metric").val(t.get("cycle") || "none");
          var i = t.getValue();
          "Authorization needed." === i ? (this.$el.addClass("auth-needed"), this.$value.val("!")) : this.$value.val(i), this.$url.val(t.get("url"));
          var n = this;
          this.$pinned.toggleClass("on", t.get("pinned")),
              t.hasUrl()
                  ? (this.selectTab(this.tabs.URL),
                    this.updateUrl(function () {
                        n.$path.val(t.get("path"));
                    }))
                  : t.get("providerId")
                  ? (this.parentView.$(".reconnect").css("display", "list-item"),
                    this.setProviderState(this.providerStates.CHOSEN_PROVIDER),
                    this.integrationCollection.models.length ? ((this.activeProvider = this.integrationCollection.findWhere({ id: t.get("providerId") })), this.showActiveProvider()) : (this.loadActiveProvider = !0),
                    this.selectTab(this.tabs.INTEGRATION),
                    (this.unit = t.get("unit")),
                    (this.prependUnit = String(t.get("prependUnit"))),
                    this.$unit.val(this.unit),
                    this.$prepend.val(this.prependUnit),
                    (this.providerDataPointId = t.get("providerDataPointId")),
                    this.hideUnitOptionsIfUnitNotEditable(t),
                    t.get("unit") && this.toggleUnitOptions(!0),
                    e && e.connect && this.connectProvider())
                  : ((this.activeProvider = null), this.selectTab(this.tabs.MANUAL));
      },
      showActiveProvider: function () {
          this.$(".provider-logo").attr("src", this.activeProvider.get("small_icon_url")), this.$(".provider-name").text(this.activeProvider.get("provider_title"));
          var t = v.globals.urlRootApi + "settings/metrics/providers/" + this.activeProvider.get("id") + "/datapoints",
              e = this;
          this.activeProvider.dataPoints && 0 < this.activeProvider.dataPoints.length
              ? this.setDataPointOptions()
              : a.ajax({ type: "GET", contentType: "application/json", url: t }).done(function (t) {
                    (e.activeProvider.dataPoints = t.dataPoints), e.setDataPointOptions();
                });
      },
      getsubviews: function () {
          return (this.subviews && this.subviews.is(":visible")) || (this.subviews = this.$el.find(".subviews.adding-subviews")), this.subviews;
      },
      showOptions: function () {
          this.showPane(), this.sourcesLoaded ? this.showSources() : (this.loading = !0);
      },
      focusLabel: function () {
          this.$label.trigger("focus");
      },
      showPane: function (t) {
          var e = this.getsubviews();
          e.removeClass("second"), e.removeClass("third"), t && e.addClass(t);
      },
      togglePinned: function () {
          this.$pinned.toggleClass("on"), this.setSaveButton();
      },
      selectTab: function (t) {
          this.selectedTab !== t &&
              (t === this.tabs.TYPE && this.resetView(!0),
              (this.selectedTab = t) === this.tabs.INTEGRATION ? this.integrationCollectionReset() : (this.activeProvider = null),
              (this.$activeTab = this.$("." + t + "-type")),
              t === this.tabs.TYPE
                  ? (this.$(".metric-edit").removeClass("active"), this.$types.addClass("active"))
                  : (this.$(".type").removeClass("active"), this.$types.removeClass("active"), this.$activeTab.addClass("active"), this.$(".metric-edit").addClass("active")),
              this.$backToTypes.toggleClass("active", t !== this.tabs.TYPE));
      },
      setProviderState: function (t) {
          this.$(".integration-step").removeClass("active"), this[t].addClass("active");
      },
      switchTab: function (t) {
          this.selectTab(t.delegatedTarget.dataset.tab), this.focusLabel(), this.setProviderState(this.providerStates.CHOOSE_PROVIDER);
      },
      integrationCollectionReset: function () {
          if (this.populateIntegrations()) {
              (this.refreshing = !1),
                  this.loadActiveProvider && this.model && ((this.activeProvider = this.integrationCollection.findWhere({ id: this.model.get("providerId") })), this.showActiveProvider(), (this.loadActiveProvider = !1));
              var t = this;
              (v.connectProvider = function () {
                  t.$connectionProviderLabel.html("Todoist"), t.setProviderState(t.providerStates.CONNECT_PROVIDER);
              }),
                  (v.authNeeded = function () {
                      t.$el.addClass("auth-needed");
                  });
          }
      },
      refreshData: function () {
          (this.refreshing = !0), this.integrationCollection.fetch({ reset: !0 });
      },
      initiateConnectProvider: function (t) {
          if ((t && (t.stopPropagation(), t.preventDefault()), v.conditionalFeatures.featureEnabled("plus"))) {
              var e = parseInt(a(t.delegatedTarget).data("provider-id")),
                  i = this.getProvider(e);
              (this.activeProvider = i).get("active") && (this.$connectionProviderLabel.html(i.get("provider_title")), this.setProviderState(this.providerStates.CONNECT_PROVIDER));
          } else {
              var n = { targetRegion: "metrics", sourceEvent: "metric-" + this.activeProvider.get("id"), buttonText: "Learn more", title: "Metrics", description: "Keep track of your important metrics at a glance" };
              v.commandManager.execute("upsell.message", n);
          }
      },
      hideDetailOverride: function () {
          return !this.model && (this.selectedTab !== this.tabs.TYPE ? (this.selectTab(this.tabs.TYPE), !0) : void 0);
      },
      getProvider: function (t) {
          return this.integrationCollection.findWhere({ id: t });
      },
      connectProvider: function (t) {
    
      },
      useProvider: function (t) {
          if (t) {
              var e = parseInt(a(t.delegatedTarget).data("provider-id"));
              (this.activeProvider = this.getProvider(e)), this.$label.val(this.activeProvider.get("short_description")), this.setSaveButton();
          }
          this.showActiveProvider(), this.$connectionProviderLabel.html(this.activeProvider.get("provider_title")), this.setProviderState(this.providerStates.CHOSEN_PROVIDER);
      },
      cancelConnect: function (t) {
          t && (t.stopPropagation(), t.preventDefault()), this.$connect.hide(), this.$metrics.css("display", "block");
      },
      populateIntegrations: function () {
          if (this.integrationCollection.models.length) {
              var e = this.$el.find(".provider-list");
              return (
                  e.html(""),
                  this.integrationCollection.models.map(function (t) {
                      t.set("notConnected", "Connected" !== t.get("status")), e.append(o.templates.provider(t.attributes));
                  }),
                  !0
              );
          }
          this.refreshing || this.refreshData();
      },
      changeMetricDataPoint: function (t) {
          var e = this.providerDataPointId;
          (this.providerDataPointId = t.target.value), this.model || (this.$label.val() === this.getDataPointLabel(e) && this.$label.val(this.getDataPointLabel(this.providerDataPointId)));
          var i = this;
          this.hideUnitOptionsIfUnitNotEditable(
              this.activeProvider.dataPoints.find(function (t) {
                  return t.id == i.providerDataPointId;
              })
          ),
              this.setSaveButton();
      },
      getDataPointLabel: function (e) {
          return this.activeProvider.dataPoints.find(function (t) {
              return t.id == e;
          }).name;
      },
      setDataPointOptions: function () {
          this.$metricDataPoints[0].options && (this.$metricDataPoints[0].options.length = 0);
          var n = this;
          this.activeProvider.dataPoints.forEach(function (t) {
              var e = n.model ? n.model.get("providerDataPointId") == t.id : n.providerDataPointId,
                  i = new Option(t.name, t.id, !1, e);
              (i.title = t.description), n.$metricDataPoints.append(i);
          }),
              n.model
                  ? (n.$metricDataPoints.attr("disabled", !0), n.$providerSelectWrapper.removeClass("select-wrapper"), n.$metricDataPoints.addClass("select-value-disabled"), this.hideUnitOptionsIfUnitNotEditable(n.model))
                  : this.hideUnitOptionsIfUnitNotEditable(this.activeProvider.dataPoints[0]),
              this.setLabelForNewProviderDataPoint();
      },
      setLabelForNewProviderDataPoint: function () {
          this.model || ((this.providerDataPointId = this.activeProvider.dataPoints[0].id), this.$label.val(this.getDataPointLabel(this.providerDataPointId)), this.setSaveButton());
      },
      toggleUnitOptions: function (t) {
          !0 !== t && (this.unitsExpanded = !this.unitsExpanded);
          var e = this.$unitInputGroup;
          this.$xCaret.removeClass("u--no-transition"), this.$addTimeWrapper.removeClass("u--no-transition"), e.toggleClass("active", t);
      },
      handleUnitChange: function (t) {
          (this.unit = t.target.value), this.setSaveButton();
      },
      handlePrependChange: function (t) {
          (this.prependUnit = t.target.value), this.setSaveButton();
      },
      hideUnitOptionsIfUnitNotEditable: function (t) {
          (t.get && !1 === t.get("canEditUnit")) || !1 === t.can_edit_unit ? (this.$unitInputGroup.hide(), (t.unit = ""), this.$unit.val(""), (this.$prepend[0].selectedIndex = 0), this.toggleUnitOptions(!1)) : this.$unitInputGroup.show();
      },
  });
  var e = o.dependencies.metrics;
  return o.styles.style(), e.views.metrics.setDetailViewClass(o.views.Metric), o;
};
m.addinManager && m.addinManager.registerAddinFn("44bf660b-a47e-4433-87eb-3e31ca7d94c6", fn_addin);
