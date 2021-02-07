var fn_addin = function (r, s, t) {
  var i = i || {};
  (i.styles = i.styles || {}),
      (i.commands = i.commands || {}),
      (i.dependencies = t || i.dependencies || {}),
      (i.styles.style = function () {}),
      (i.views = i.views || {}),
      (i.collect = i.collect || {}),
      (i.models = i.models || {}),
      (i.templates = i.templates || {}),
      (i.info = { widget: !0, placeholderType: "none", id: "countdown_detail", addin: "5c0e5be2-0c14-4e99-85e4-cdc58f0cdd58", dependencies: ["countdown"] }),
      r.console.log(r.elapsed() + ": " + i.info.id + " started"),
      (i.templates = i.templates || {}),
      (i.templates.editCountdown = Handlebars.template({
          1: function (t, e, n, s) {
              var i = this.lambda,
                  a = this.escapeExpression;
              return '\t\t\t\t<option value="' + a(i(t, t)) + '">' + a(i(t, t)) + "</option>\n";
          },
          compiler: [6, ">= 2.0.0-beta.1"],
          main: function (t, e, n, s) {
              var i;
              return (
                  '<div class="input-group">\n\t<label for="countdown-name">Name</label>\n\t<input type="text" name="countdown-name" id="countdown-name" class="countdown-name" placeholder="" data-test="countdown-name" autocomplete="off">\n</div>\n\n<div class="input-group">\n\t<label>Date</label>\n\n\t<div class="select-wrapper">\n\t\t\t<select name="month" id="month" class="month" data-test="countdown-month">\n\t\t\t\t<option value="0">Jan</option>\n\t\t\t\t<option value="1">Feb</option>\n\t\t\t\t<option value="2">Mar</option>\n\t\t\t\t<option value="3">Apr</option>\n\t\t\t\t<option value="4">May</option>\n\t\t\t\t<option value="5">Jun</option>\n\t\t\t\t<option value="6">Jul</option>\n\t\t\t\t<option value="7">Aug</option>\n\t\t\t\t<option value="8">Sep</option>\n\t\t\t\t<option value="9">Oct</option>\n\t\t\t\t<option value="10">Nov</option>\n\t\t\t\t<option value="11">Dec</option>\n\t\t\t</select >\n\t\t</div>\n\n\t<div class="select-wrapper">\n\t\t<select name="day" id="day" class="day" data-test="countdown-day"></select>\n\t</div>\n\n\t<div class="select-wrapper countdown-year-group">\n\t\t<select name="year" id="year" class="year" data-test="countdown-year">\n' +
                  (null != (i = e.each.call(t, null != t ? t.years : t, { name: "each", hash: {}, fn: this.program(1, s, 0), inverse: this.noop, data: s })) ? i : "") +
                  '\t\t\t<option value="other">Other</option>\n\t\t</select>\n\t</div>\n\n\t<div class="input-group countdown-year-other-group">\n\t\t<input type="text" id="countdown-year-other" name="countdown-year-other" placeholder="yyyy" maxlength="4" class="countdown-year-other" data-test="countdown-year-other" autocomplete="off">\n\t</div>\n</div>\n\n<div class="option-wrapper add-time u--no-transition" >\n\t\t<div class="time-expand" data-test="countdown-toggle-time">\n\t\t\t<label>Time</label>\n\t\t\t<span class="x-caret u--no-transition">\n\t\t\t\t<svg class="icon x-caret-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.16 11.75"><path d="M52.16,26.08A5.87,5.87,0,0,1,46.29,32H5.88A5.88,5.88,0,0,1,0,26.08H0a5.87,5.87,0,0,1,5.88-5.87H46.29a5.87,5.87,0,0,1,5.87,5.87Z" transform="translate(0 -20.21)"/></svg>\n\t\t\t\t<svg class="icon x-caret-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.16 11.75"><path d="M52.16,26.08A5.87,5.87,0,0,1,46.29,32H5.88A5.88,5.88,0,0,1,0,26.08H0a5.87,5.87,0,0,1,5.88-5.87H46.29a5.87,5.87,0,0,1,5.87,5.87Z" transform="translate(0 -20.21)"/></svg>\n\t\t\t</span>\n\t\t</div>\n\t\t<div class="option-form add-time-wrapper">\n\t\t\t<div class="add-time-group">\n\t\t\t\t<div class="select-wrapper select-hour">\n\t\t\t\t\t<select name="hour" id="hour" data-test="countdown-hour"></select>\n\t\t\t\t</div>\n\t\t\t\t<span class="hour-punctuation">:</span>\n\n\t\t\t\t<div class="select-wrapper">\n\t\t\t\t\t<select name="minute" id="minute" data-test="countdown-minute"></select>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="select-wrapper period">\n\t\t\t\t\t<select name="period" id="period" data-test="countdown-period">\n\t\t\t\t\t\t<option value="AM">AM</option>\n\t\t\t\t\t\t<option value="PM">PM</option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class="input-group create-pinned-group has-toggle" data-test="countdown-pin">\n\t<label for="create-pinned">Pinned</label>\n\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n</div>\n\n<div class="metric-edit-controls">\n\t<span class="error-message"><span class="save-error"></span></span>\n\t<span class="button save" data-test="countdown-save">Save</span>\n</div>\n'
              );
          },
          useData: !0,
      })),
      (i.styles = i.styles || {}),
      (i.styles.style = function () {
          var t = document.createElement("style");
          (t.type = "text/css"), (t.innerHTML = ".countdown .countdown-name{font-size:1.125rem}"), document.getElementsByTagName("head")[0].appendChild(t);
      }),
      (i.views.Countdown = Backbone.View.extend({
          defaultHour: 9,
          clearTimeTimeoutId: null,
          events: {
              "click .time-expand": "toggleTimeOptions",
              "keydown .countdown-year-other": "onKeydownCountdownYearOther",
              "change select": "changeSelect",
              "keyup #countdown-name": "onKeyupName",
              "paste #countdown-name": "onPasteName",
              "blur #countdown-name": "update",
              "change #day": "updateSaveButtonState",
              "change #year": "updateYear",
              "change #month": "updateSaveButtonState",
              "change #period": "updateSaveButtonState",
              "change #hour": "updateSaveButtonState",
              "change #minute": "updateSaveButtonState",
              "change #countdown-year-other": "onChangeYearOther",
              "click .save": "saveCountdown",
              "click .create-pinned-group": "togglePinned",
          },
          initialize: function (t) {
              (this.collection = t.collection), (this.parentView = t.parentView), (this.template = i.templates.editCountdown), (this.timeOptionsTimeouts = []);
              var e = r.date().getFullYear();
              (this.lastSelectedYear = e), (this.years = []);
              for (var n = e; n < e + 5; n++) this.years.push(n);
          },
          initializeResizeSensor: function () {
              this.resizeSensor && this.resizeSensor.detach(),
                  (this.resizeSensor = new ResizeSensor(
                      this.$addTimeGroup,
                      function () {
                          this.$addTimeWrapper.css("height", this.$addTimeGroup[0].clientHeight);
                      }.bind(this)
                  ));
          },
          render: function (t) {
              return this.$el.html(this.template(t)), this.collectElements(), this.initializeResizeSensor(), this;
          },
          collectElements: function () {
              (this.$name = this.$("#countdown-name")),
                  (this.$year = this.$("#year")),
                  (this.$yearOther = this.$("#countdown-year-other")),
                  (this.$month = this.$("#month")),
                  (this.$day = this.$("#day")),
                  (this.$addTime = this.$(".add-time")),
                  (this.$addTimeWrapper = this.$(".add-time-wrapper")),
                  (this.$addTimeGroup = this.$(".add-time-group")),
                  (this.$xCaret = this.$(".x-caret")),
                  (this.$hour = this.$("#hour")),
                  (this.$minute = this.$("#minute")),
                  (this.$period = this.$(".period")),
                  (this.$periodOptions = this.$("#period option")),
                  (this.$saveError = this.$(".error-message")),
                  (this.$saveButton = this.$(".save")),
                  (this.$pinned = this.$(".create-pinned-group"));
          },
          onKeyupName: function (t) {
              this.$name && (t.keyCode === r.utils.mConst("keyEscape") ? this.revertName() : this.nameIsEmpty() || t.keyCode !== r.utils.mConst("keyReturn") || this.$name.trigger("blur"), this.updateSaveButtonState());
          },
          nameIsEmpty: function () {
              return 0 === this.$name.val().trim().length;
          },
          revertName: function () {
              this.$name.val(this.model ? this.model.get("name") : ""), this.$name.trigger("blur");
          },
          updateSaveButtonState: function () {
              this.$saveButton.toggleClass("disabled", this.nameIsEmpty());
          },
          onPasteName: function () {
              var t = this;
              setTimeout(function () {
                  t.updateSaveButtonState();
              }, 0);
          },
          startAdding: function () {
              this.resetView(), this.$saveButton.text("Create");
          },
          focus: function () {
              (this.$name = this.$name || this.$("#countdown-name")), this.$name.trigger("focus"), (this.$name[0].selectionStart = this.$name[0].selectionEnd = this.$name.val().length);
          },
          updateYear: function (t) {
              if ("other" === t.delegatedTarget.value) {
                  var e = this.lastSelectedYear;
                  this.$yearOther.val(e);
              } else this.lastSelectedYear = parseInt(t.delegatedTarget.value);
          },
          saveCountdown: function (t) {
              t && t.stopPropagation(), this.save(this.model || null, !0);
          },
          save: function (t, e) {
              var n = r.utils.removeTags(r.utils.capitalizeWords(this.$name.val().trim()));
              if (0 !== n.length) {
                  this.parentView.disableBack = !1;
                  var s = this.$addTime.is(".active"),
                      i = this.setHour(s),
                      a = this.$pinned.hasClass("on"),
                      o = { name: n, utcDate: new Date(this.getYear(), this.$month.val(), this.$day.val(), i, this.$minute.val(), 0, 0).getTime(), hasHours: s, pinned: a };
                  return t ? (t.save(o, { ignoreRender: !0 }), e && this.parentView.switchToListView()) : (this.model = this.parentView.createMetric(o)), t || this.model;
              }
              this.parentView.disableBack = !0;
          },
          getYear: function () {
              var t = this.$year.val();
              return "other" === t && (t = this.$yearOther.val()), t;
          },
          setHour: function (t) {
              var e, n;
              return (
                  t
                      ? ((e = parseInt(this.$("#hour").val())), r.models.customization.get("hour12clock") && ((n = this.$("#period").val()), 12 === e && "AM" === n ? (e = 0) : 12 !== e && "PM" === n && (e += 12)))
                      : (e = r.utils.mConst("dateRolloverHour")),
                  e
              );
          },
          onKeydownCountdownYearOther: function (t) {
              -1 !== [46, 8, 9, r.utils.mConst("keyEscape")].indexOf(t.keyCode) ||
                  (65 === t.keyCode && (!0 === t.ctrlKey || !0 === t.metaKey)) ||
                  (67 === t.keyCode && (!0 === t.ctrlKey || !0 === t.metaKey)) ||
                  (88 === t.keyCode && (!0 === t.ctrlKey || !0 === t.metaKey)) ||
                  (35 <= t.keyCode && t.keyCode <= 39) ||
                  (t.keyCode !== r.utils.mConst("keyReturn") ? (t.shiftKey || t.keyCode < 48 || 57 < t.keyCode) && (t.keyCode < 96 || 105 < t.keyCode) && t.preventDefault() : this.$yearOther.trigger("blur"));
          },
          onChangeYearOther: function () {
              this.$yearOther.val() || this.$yearOther.val(this.getRevertYear()), this.updateSaveButtonState();
          },
          getRevertYear: function () {
              return (this.model ? new Date(this.model.get("utcDate")) : r.date()).getFullYear();
          },
          editDetail: function (t) {
              this.resetView(), (this.model = t), this.$name.val(t.get("name"));
              var e = new Date(t.get("utcDate")),
                  n = e.getFullYear(),
                  s = !_.contains(this.years, n);
              this.$("#month option").eq(e.getMonth()).prop("selected", !0),
                  s ? (this.$year.val("other"), this.$yearOther.val(n), this.$el.addClass("show-other")) : (this.$('#year option[value="' + n + '"]').prop("selected", !0), this.$yearOther.val(""), this.$el.removeClass("show-other")),
                  this.populateDays(),
                  this.$dayOptions.eq(e.getDate() - 1).prop("selected", !0),
                  this.populateTimeOptions(),
                  this.selectTimeOptions(t, e),
                  this.$saveError.hide(),
                  this.updateSaveButtonState(),
                  this.$pinned.toggleClass("on", t.get("pinned"));
          },
          populateDays: function () {
              var t = this.$year.val();
              "other" === t && (t = this.lastSelectedYear || this.getYear());
              var e = this.$day.val(),
                  n = r.utils.getDaysInMonth(t, this.$month.val());
              this.$day.empty();
              for (var s = 1; s < n + 1; s++) this.$day.append("<option>" + s + "</option>");
              (this.$dayOptions = this.$("#day option")), n < e && (e = n), e && this.$dayOptions.eq(e - 1).prop("selected", !0);
          },
          populateTimeOptions: function () {
              var t;
              if (r.models.customization.get("hour12clock")) for (this.$period.css("display", "inline-block"), this.hours = [12], t = 1; t < 12; t++) this.hours.push(t);
              else for (this.$period.css("display", "none"), this.hours = [], t = 0; t < 24; t++) this.hours.push(r.utils.twoDigit(t));
              for (this.$hour.empty(), t = 0; t < this.hours.length; t++) this.$hour.append("<option>" + this.hours[t] + "</option>");
              for (this.$hourOptions = this.$("#hour option"), this.selectDefaultHour(), this.minutes = [], t = 0; t < 60; t++) this.minutes.push(r.utils.twoDigit(t));
              for (this.$minute.empty(), t = 0; t < this.minutes.length; t++) this.$minute.append("<option>" + this.minutes[t] + "</option>");
              this.$minuteOptions = this.$("#minute option");
          },
          selectTimeOptions: function (t, e) {
              if (t.get("hasHours")) {
                  var n = e.getHours();
                  if (r.models.customization.get("hour12clock")) {
                      var s = "AM";
                      12 <= n && ((n -= 12), (s = "PM")), this.$("#period option[value='" + s + "']").prop("selected", !0);
                  }
                  this.$hourOptions.eq(n).prop("selected", !0), this.$minuteOptions.eq(e.getMinutes()).prop("selected", !0), this.$addTimeWrapper.addClass("u--no-transition"), this.$addTime.addClass("active");
              } else this.resetHours();
          },
          changeSelect: function (t) {
              var e = s(t.delegatedTarget);
              if (e.is("#year")) {
                  if ("other" === this.$year.val()) return void this.showYearOther();
                  this.lastSelectedYear = this.$year[0].options[this.$year[0].selectedIndex].value;
              }
              (e.is("#month") || e.is("#year")) && this.populateDays();
          },
          showYearOther: function () {
              this.$el.addClass("show-other"), this.$yearOther.trigger("focus");
          },
          resetTimeOptions: function () {
              this.selectDefaultHour(), this.$minuteOptions.eq(0).prop("selected", !0), this.$periodOptions.eq(0).prop("selected", !0), this.updateSaveButtonState();
          },
          selectDefaultHour: function () {
              this.$hourOptions.eq(this.defaultHour).prop("selected", !0);
          },
          resetHours: function () {
              this.$addTime && this.$addTime.hasClass("active") && (this.$addTime.removeClass("active"), this.resetTimeOptions());
          },
          resetView: function () {
              (this.model = null), this.render({ years: this.years, placeholder: "Countdown" }), this.populateDays(), this.populateTimeOptions(), this.resetHours(), this.$name.val("");
              var t = new Date(r.date().getTime() + 7 * r.utils.mConst("msPerDay"));
              (this.lastSelectedYear = t.getFullYear()),
                  this.$el.removeClass("show-other"),
                  this.$("#month option").eq(t.getMonth()).prop("selected", !0),
                  this.$('#year option[value="' + t.getFullYear() + '"]').prop("selected", !0),
                  this.$el.removeClass("show-other"),
                  this.$dayOptions.eq(t.getDate() - 1).prop("selected", !0),
                  this.$saveError.hide(),
                  this.$saveButton.addClass("disabled").css("display", "");
          },
          toggleTimeOptions: function (t) {
              this.timeOptionsTimeouts &&
                  _.each(this.timeOptionsTimeouts, function (t) {
                      clearTimeout(t);
                  });
              var e = s(t.delegatedTarget).closest(".option-wrapper"),
                  n = !e.hasClass("active");
              this.$xCaret.removeClass("u--no-transition"), this.$addTimeWrapper.removeClass("u--no-transition"), e.toggleClass("active"), this.preventClearTimeOptionsFlicker(n);
          },
          preventClearTimeOptionsFlicker: function (t) {
              var e = this;
              t
                  ? (this.clearTimeTimeoutId && (clearTimeout(this.clearTimeTimeoutId), (this.clearTimeTimeoutId = null)), this.resetTimeOptions())
                  : (this.clearTimeTimeoutId = setTimeout(function () {
                        (e.clearTimeTimeoutId = null), e.resetTimeOptions();
                    }, 500));
          },
          togglePinned: function () {
              this.$pinned.toggleClass("on"), this.updateSaveButtonState();
          },
      }));
  var e = i.dependencies.countdown;
  return i.styles.style(), e.views.countdown.setDetailViewClass(i.views.Countdown), i;
};
m.addinManager && m.addinManager.registerAddinFn("5c0e5be2-0c14-4e99-85e4-cdc58f0cdd58", fn_addin);
