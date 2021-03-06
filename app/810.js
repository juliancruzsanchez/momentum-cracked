(self.webpackChunkmomentum_extension = self.webpackChunkmomentum_extension || []).push([
  [810],
  {
      4206: (t, e, s) => {
          (t.exports = s(7788)(!1)).push([t.id, "\n.upsell-no-transform[data-v-c4d6a322] { transform: none;\n}\n", ""]);
      },
      9107: (t, e, s) => {
          "use strict";
          s.r(e), s.d(e, { default: () => i });
          var n = function () {
              var t = this,
                  e = t.$createElement,
                  s = t._self._c || e;
              return s("div", { staticClass: "overlay upsell upsell-no-transform show showfade-in fadein", class: t.targetRegion + "-upsell", attrs: { "data-test": "upsell" } }, [
                  s(
                      "span",
                      {
                          staticClass: "icon-wrapper hide",
                          attrs: { "data-test": "upsell-close" },
                          on: {
                              click: function (e) {
                                  return t.$emit("hide-upsell");
                              },
                          },
                      },
                      [
                          s("svg", { staticClass: "icon", attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 212.982 212.982" } }, [
                              s("path", {
                                  attrs: {
                                      d:
                                          "M131.804 106.491l75.936-75.936c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.491 81.18 30.554 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.989 6.99-6.989 18.323 0 25.312l75.937 75.936-75.937 75.937c-6.989 6.99-6.989 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0l75.937-75.937 75.937 75.937c6.989 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.322 0-25.312l-75.936-75.936z",
                                  },
                              }),
                          ]),
                      ]
                  ),
                  t._v(" "),
                  s("div", { staticClass: "available" }, [t._v("Available on Plus")]),
                  t._v(" "),
                  s("div", { staticClass: "title", attrs: { "data-test": "upsell-title" } }, [t._v(t._s(t.title))]),
                  t._v(" "),
                  s("div", { staticClass: "description", attrs: { "data-test": "upsell-description" } }, [t._v(t._s(t.description))]),
                  t._v(" "),
                  s("a", { staticClass: "button upsell-action", attrs: { "data-test": "upsell-cta" }, on: { click: t.executeCallToAction } }, [t._v(t._s(t.buttonText))]),
              ]);
          };
          n._withStripped = !0;
          const a = {
              name: "Upsell",
              props: {
                  targetRegion: { type: String, required: !0 },
                  title: { type: String, required: !0 },
                  description: { type: String, required: !0 },
                  buttonText: { type: String, default: "Learn More" },
                  sourceEvent: { type: String, default: "" },
                  experiment: { type: Object, default: null },
              },
              methods: {
                  executeCallToAction() {
                      let t = "https://momentumdash.com/plus?utm_source=extension&utm_medium=organic";
                      this.sourceEvent && (t += "&utm_campaign=" + encodeURIComponent(this.sourceEvent));
                      const e = localStorage.getItem("offered-plan");
                      e && m.conditionalFeatures.featureEnabled("notes-degraded") && (t += "&resubscribe=" + e),
                          this.experiment && m.sendEvent("Settings", "Upgrade", null, null, this.experiment.correlationId, this.experiment.experimentId, this.experiment.id),
                          m.commandManager.execute("window.open", null, { url: t });
                  },
              },
          };
          s(9092);
          var l = (0, s(1900).Z)(a, n, [], !1, null, "c4d6a322", null);
          l.options.__file = "source/addins-vue/shared_components/Upsell.vue";
          const i = l.exports;
      },
      9092: (t, e, s) => {
          var n = s(4206);
          "string" == typeof n && (n = [[t.id, n, ""]]), n.locals && (t.exports = n.locals), (0, s(1372).Z)("b2767804", n, !1, { ssrId: !0 });
      },
  },
]);
//# sourceMappingURL=810.js.map
