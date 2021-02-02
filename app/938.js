(self.webpackChunkmomentum_extension = self.webpackChunkmomentum_extension || []).push([
  [938],
  {
      7938: (e, t, o) => {
          "use strict";
          o.r(t);
          var r = o(4525),
              i = o(2096),
              s = function () {
                  var e = this,
                      t = e.$createElement,
                      o = e._self._c || t;
                  return o(
                      "div",
                      { directives: [{ name: "click-outside", rawName: "v-click-outside", value: e.closePicker, expression: "closePicker" }], staticClass: "color-picker-wrapper sub-view" },
                      [
                          e.pickerActive
                              ? o("verte", {
                                    attrs: { picker: "square", "color-history": e.colorHistory, "menu-position": "left", display: "widget", draggable: !1, model: "rgb" },
                                    on: {
                                        "update:colorHistory": function (t) {
                                            e.colorHistory = t;
                                        },
                                        "update:color-history": function (t) {
                                            e.colorHistory = t;
                                        },
                                    },
                                    nativeOn: {
                                        mouseup: function (t) {
                                            return e.saveColor(t);
                                        },
                                    },
                                    model: {
                                        value: e.color,
                                        callback: function (t) {
                                            e.color = t;
                                        },
                                        expression: "color",
                                    },
                                })
                              : e._e(),
                          e._v(" "),
                          o("span", { staticClass: "label", attrs: { "data-related-widget": "themeColour", "data-option-value": "custom" }, on: { click: e.togglePicker } }, [
                              o("span", { staticClass: "preview", style: { "background-color": e.color } }),
                              e._v(" "),
                              o("span", [e._v("\n\t\t\tCustom\n\t\t")]),
                          ]),
                      ],
                      1
                  );
              };
          (s._withStripped = !0), o(7831);
          var a = o(9001),
              n = o(8094);
          const c = {
              name: "ColorPicker",
              components: { Verte: a.Z },
              directives: { ClickOutside: n.Z },
              plusUser: true,
              data() {
                  return { color: m.models.customization.get("themeColourCustom") || "00f", colorHistory: localStorage.getObject("colorPicker:history") || this.getEmptyColorHistory(), pickerActive: !1 };
              },
              computed: {
                  colorObject() {
                      return new Colors({ color: this.color }).colors;
                  },
                  notContainedInHistory() {
                      return !this.colorHistory.includes(this.color);
                  },
              },
              watch: {
                  color() {
                      m.models.themeManager.setColorValues("themeColor", this.colorObject);
                  },
                  colorHistory(e) {
                      localStorage.setObject("colorPicker:history", e);
                  },
              },
              methods: {
                  closePicker() {
                      this.pickerActive = !1;
                  },
                  togglePicker() {
                      this.$options.plusUser &&
                          ((this.pickerActive = !this.pickerActive),
                          this.pickerActive &&
                              this.$nextTick(() => {
                                  const e = this.$el.closest(".slide-toggle"),
                                      t = this.$el.closest(".settings-view-container"),
                                      o = e.offsetTop + e.offsetHeight / 2 - t.offsetHeight / 2;
                                  t.scrollTo({ top: o, behavior: "smooth" });
                              }));
                  },
                  saveColor() {
                      this.notContainedInHistory && this.saveToHistory(this.color), m.models.themeManager.saveThemeColour();
                  },
                  getEmptyColorHistory: () => Array.apply(null, new Array(6)).map(() => "transparent"),
                  saveToHistory(e) {
                      this.colorHistory.unshift(e);
                      const t = this.colorHistory.length - 1;
                      ("transparent" === this.colorHistory[t] || this.colorHistory.length > 12) && this.colorHistory.splice(t);
                  },
              },
          };
          o(7445);
          var l = (0, o(1900).Z)(c, s, [], !1, null, "a62956c0", null);
          l.options.__file = "source/addins-vue/colorPicker/ColorPicker.vue";
          const d = l.exports;
          i.Z.listenTo(m, "colorPicker:mount", function (e) {
              m.colorPicker = new r.Z({ render: (e) => e(d) });
              const t = e.querySelector('.toggle-option.themeColour[data-option-value="custom"] .sub-view');
              m.colorPicker.$mount(t);
          }),
              i.Z.listenTo(m, "colorPicker:destroy", function () {
                  m.colorPicker && m.colorPicker.$destroy();
              });
      },
      8094: (e, t, o) => {
          "use strict";
          o.d(t, { Z: () => i });
          let r = {};
          const i = {
              bind: function (e, t) {
                  let o, i;
                  (e.dataset.justBoundClickOutsideHandler = !0),
                      setTimeout(() => {
                          e.dataset.justBoundClickOutsideHandler = !1;
                      }, 100);
                  const s = (e) => {
                          (i = !1), ((e) => e && e.clientX > window.innerWidth)(e) ? (i = !0) : (o = e.target);
                      },
                      a = (r) => {
                          i || ((t.modifiers.bubble || (!e.contains(o) && !e.contains(r.target) && e !== o && e !== r.target && "true" !== e.dataset.justBoundClickOutsideHandler)) && t.value(r));
                      };
                  (e.dataset.clickOutsideMouseupHandlerId = Math.random().toString(36).substring(7)),
                      (e.dataset.clickOutsideMousedownHandlerId = Math.random().toString(36).substring(7)),
                      (r[e.dataset.clickOutsideMouseupHandlerId] = a),
                      (r[e.dataset.clickOutsideMousedownHandlerId] = s),
                      document.addEventListener("mouseup", a),
                      document.addEventListener("mousedown", s);
              },
              unbind: function (e) {
                  document.removeEventListener("mouseup", r[e.dataset.clickOutsideMouseupHandlerId]),
                      document.removeEventListener("mousedown", r[e.dataset.clickOutsideMousedownHandlerId]),
                      delete r[e.dataset.clickOutsideMouseupHandlerId],
                      delete r[e.dataset.clickOutsideMousedownHandlerId],
                      delete e.dataset.clickOutsideMouseupHandlerId,
                      delete e.dataset.clickOutsideMousedownHandlerId,
                      delete e.dataset.justBoundClickOutsideHandler;
              },
          };
      },
      4525: (e, t, o) => {
          "use strict";
          o.d(t, { Z: () => c });
          var r = o(1238),
              i = o(1018),
              s = o(7366),
              a = o.n(s),
              n = o(2096);
          r.Z.use(i.Z, { name: "unreactive" }),
              r.Z.use(a()),
              (r.Z.prototype.$e = n.Z),
              new r.Z({ bb: () => ({ conditionalFeatures: m.conditionalFeatures }) }),
              r.Z.mixin({ computed: { $plus: () => true, $team: () => m.conditionalFeatures.featureEnabled("team") } });
          const c = r.Z;
      },
      691: (e, t, o) => {
          (e.exports = o(7788)(!1)).push([
              e.id,
              "\n.color-picker-wrapper[data-v-a62956c0] { display: inline; position: relative;\n}\n.verte[data-v-a62956c0] { --margin: 5px; position: absolute; left: 0; display: block; cursor: default;\n}\n.verte[data-v-a62956c0] .verte__guide { height: auto; width: auto;\n}\n.verte[data-v-a62956c0] .verte__menu { position: absolute; right: 100%; left: auto; z-index: 2; transform: translateY(-50%) !important; background-color: #282828;\n}\n.verte[data-v-a62956c0] .verte-picker__origin { border-top-right-radius: var(--border-radius); border-top-left-radius: var(--border-radius);\n}\n.verte[data-v-a62956c0] .verte-picker { margin-bottom: 0;\n}\n.verte[data-v-a62956c0] .verte-picker__slider { margin: var(--margin); margin-bottom: 0;\n}\n.verte[data-v-a62956c0] .verte__controller { padding: 2px var(--margin) 8px;\n}\n.verte[data-v-a62956c0] .verte__controller .slider { margin-bottom: 0;\n}\n.verte[data-v-a62956c0] .verte__inputs { display: none;\n}\n.verte[data-v-a62956c0] .verte__recent { margin-top: 6px; padding: 0 3px; justify-content: space-between;\n}\n.verte[data-v-a62956c0] .verte__recent-color { --size: 16px; height: var(--size); width: var(--size); margin: 0;\n}\n.verte[data-v-a62956c0] .verte__recent-color:last-child { margin-right: 0;\n}\n.label[data-v-a62956c0] { padding: 0; color: var(--app-text-color); font-size: 0.8125rem; font-weight: 600; cursor: pointer;\n}\n.label .preview[data-v-a62956c0] { height: 8px; width: 8px; margin-right: 2px; display: inline-block; border-radius: 2px; border: var(--app-text-color) 1px solid;\n}\n\n",
              "",
          ]);
      },
      7445: (e, t, o) => {
          var r = o(691);
          "string" == typeof r && (r = [[e.id, r, ""]]), r.locals && (e.exports = r.locals), (0, o(1372).Z)("dc2c4ecc", r, !1, { ssrId: !0 });
      },
  },
]);
//# sourceMappingURL=938.js.map
