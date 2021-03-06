(self.webpackChunkmomentum_extension = self.webpackChunkmomentum_extension || []).push([
  [206],
  {
      7788: (t) => {
          "use strict";
          t.exports = function (t) {
              var e = [];
              return (
                  (e.toString = function () {
                      return this.map(function (e) {
                          var n = (function (t, e) {
                              var n,
                                  a = t[1] || "",
                                  o = t[3];
                              if (!o) return a;
                              if (e && "function" == typeof btoa) {
                                  var r = ((n = o), "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */"),
                                      i = o.sources.map(function (t) {
                                          return "/*# sourceURL=" + o.sourceRoot + t + " */";
                                      });
                                  return [a].concat(i).concat([r]).join("\n");
                              }
                              return [a].join("\n");
                          })(e, t);
                          return e[2] ? "@media " + e[2] + "{" + n + "}" : n;
                      }).join("");
                  }),
                  (e.i = function (t, n) {
                      "string" == typeof t && (t = [[null, t, ""]]);
                      for (var a = {}, o = 0; o < this.length; o++) {
                          var r = this[o][0];
                          null != r && (a[r] = !0);
                      }
                      for (o = 0; o < t.length; o++) {
                          var i = t[o];
                          (null != i[0] && a[i[0]]) || (n && !i[2] ? (i[2] = n) : n && (i[2] = "(" + i[2] + ") and (" + n + ")"), e.push(i));
                      }
                  }),
                  e
              );
          };
      },
      8206: (t, e, n) => {
          "use strict";
          n.r(e);
          var a = n(4525),
              o = function () {
                  var t = this,
                      e = t.$createElement,
                      n = t._self._c || e;
                  return n("transition", { attrs: { name: "fade", mode: "out-in" } }, [
                      n(
                          "div",
                          {
                              key: t.background.id,
                              staticClass: "app-container app-dash background-info",
                              class: { "show-hover": t.background.unsplash || t.admiring, "add-shadow": t.admiring, "show-anyway": t.admiring, "hotkey-hover": t.admiring },
                              attrs: { "data-test": "background-info-container" },
                              on: { mouseenter: t.admireOnHover, mouseleave: t.stopAdmire },
                          },
                          [
                              n("span", { staticClass: "background-info-title", attrs: { "data-test": "background-info-title" } }, [t._v(t._s(t.background.title))]),
                              t._v(" "),
                              n("span", { staticClass: "background-info-source" }, [
                                  n("span", { staticClass: "background-info-source-link", attrs: { "data-test": "background-info-source-link", "data-url": t.background.url }, on: { click: t.clickSource } }, [
                                      t._v(t._s(t.background.source)),
                                  ]),
                                  t._v(" "),
                                  n("span", { staticClass: "control control-heart", class: { active: t.background.fav }, attrs: { "data-test": "control-fav" }, on: { click: t.toggleFavorite } }, [
                                      n("img", { staticClass: "icon icon-dash-heart-empty", attrs: { src: "img/icon-heart-empty.svg" } }),
                                      t._v(" "),
                                      n("img", { staticClass: "icon icon-dash-heart", attrs: { src: "img/icon-heart.svg" } }),
                                  ]),
                                  t._v(" "),
                                  n("span", { staticClass: "control control-skip", attrs: { title: "Skip Photo", "data-test": "control-skip" }, on: { click: t.skipBackground } }, [
                                      n("span", { staticClass: "icon-container", class: { active: t.skipping }, attrs: { "data-test": "control-skip-icon-container" } }, [
                                          n("svg", { staticClass: "icon icon-skip", attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 249.05 132.12" } }, [
                                              n("circle", { attrs: { cx: "115.5", cy: "108.62", r: "23" } }),
                                              t._v(" "),
                                              n("path", { attrs: { d: "M291.5,281A22.5,22.5,0,1,1,269,303.5,22.52,22.52,0,0,1,291.5,281m0-1A23.5,23.5,0,1,0,315,303.5,23.5,23.5,0,0,0,291.5,280Z", transform: "translate(-176 -194.88)" } }),
                                              t._v(" "),
                                              n("path", {
                                                  staticClass: "arrow",
                                                  attrs: {
                                                      d:
                                                          "M399,257.5a135.18,135.18,0,0,0-41.16-42.17c-22.7-14.74-49.38-21.92-75.15-20.2a108.71,108.71,0,0,0-65.16,27c-19.91,17.5-33.76,41.79-41.18,72.19a13.52,13.52,0,0,0,9.92,16.32,13.66,13.66,0,0,0,3.21.38,13.51,13.51,0,0,0,13.11-10.3c6.07-24.92,17.1-44.54,32.76-58.31a82,82,0,0,1,49.13-20.32c20-1.33,40.81,4.32,58.65,15.9A108.07,108.07,0,0,1,374,268.51l-30,13.2,72.43,40.36,8.6-76Z",
                                                      transform: "translate(-176 -194.88)",
                                                  },
                                              }),
                                          ]),
                                      ]),
                                  ]),
                              ]),
                          ]
                      ),
                  ]);
              };
          o._withStripped = !0;
          const r = {
              name: "BackgroundInfo",
              data: () => ({ background: { id: "", title: "", source: "", fav: !1 }, skipping: !1, admireTimeoutId: null, admiring: !1 }),
              created() {
                  this.$e.listenTo(m.models.activeBackground, "background:successfullyLoaded", this.setActiveBackground),
                      this.$e.listenTo(m, "photoDetailsChanged", this.updatePhotoDetails),
                      this.$e.listenTo(m, "backgroundInfo:admire:start", this.admire),
                      this.$e.listenTo(m, "backgroundInfo:admire:stop", this.stopAdmire),
                      this.$e.listenTo(m, "globalEvent:windowBlur", this.stopAdmire),
                      this.setActiveBackground();
              },
              destroyed() {
                  this.$e.stopListening(m.models.activeBackground, "background:successfullyLoaded", this.setActiveBackground),
                      this.$e.stopListening(m, "photoDetailsChanged", this.updatePhotoDetails),
                      this.$e.stopListening(m, "backgroundInfo:admire:start", this.admire),
                      this.$e.stopListening(m, "backgroundInfo:admire:stop", this.stopAdmire),
                      this.$e.stopListening(m, "globalEvent:windowBlur", this.stopAdmire);
              },
              methods: {
                  setActiveBackground() {
                      const t = m.models.activeBackground.backgroundItem;
                      t &&
                          (this.background = {
                              id: t.get("_id"),
                              title: t.get("title"),
                              source: t.get("source"),
                              fav: t.get("is_favorite"),
                              url: t.get("sourceUrl"),
                              unsplash: false
                          });
                  },
                  updatePhotoDetails(t) {
                      t.id && t.id === this.background.id && (t.title && "" !== t.title && (this.background.title = t.title), t.source && "" !== t.source && (this.background.source = t.source));
                  },
                  toggleFavorite() {
                      (this.background.fav = !this.background.fav), m.models.backgroundManager.toggleFavorite(this.background.fav), m.sendEvent("Background", this.background.fav ? "Favourite" : "Unfavourite");
                  },
                  skipBackground() {
                      if (false) return m.cmd("modal.open", "UPSELL_BACKGROUND"), void this.stopAdmire();
                      this.skipping ||
                          ((this.skipping = !0),
                          m.models.backgroundManager.skipItem().finally(() => {
                              this.skipping = !1;
                          }),
                          m.sendEvent("Background", "Skip"));
                  },
                  clickSource() {
                      this.background.url && (m.usage.recordClick(m.models.activeBackground.backgroundItem, m.usage.types.PHOTO), window.open(this.background.url, "_blank"));
                  },
                  admire() {
                      if (document.getElementsByClassName("apps")[0].classList.contains("hide-apps")) return;
                      m.usage.recordAdmire(m.models.activeBackground.backgroundItem.id), (this.admiring = !0), m.widgetManager.hideAppsExcept(".apps .background-info");
                      const t = document.getElementsByClassName("background-overlay")[0];
                      t.classList.add("slow"), t.classList.remove("show");
                      try {
                          background.unsplash ? m.usage.recordStickyHover(this.background.id, m.usage.types.PHOTO) : m.usage.recordHover(this.background.id, m.usage.types.PHOTO);
                      } catch (t) {
                          console.error(t);
                      }
                  },
                  admireOnHover() {
                      document.getElementsByClassName("apps")[0].classList.contains("hide-apps") || (this.clearAdmireTimeout(), (this.admireTimeoutId = setTimeout(this.admire, 4e3)));
                  },
                  stopAdmire() {
                      if ((this.clearAdmireTimeout(), !this.admiring)) return;
                      (this.admiring = !1), m.widgetManager.showApps();
                      const t = document.getElementsByClassName("background-overlay")[0];
                      t.classList.remove("slow"), t.classList.add("show");
                  },
                  clearAdmireTimeout() {
                      clearTimeout(this.admireTimeoutId);
                  },
              },
          };
          n(3554);
          var i = (0, n(1900).Z)(r, o, [], !1, null, "1040273e", null);
          i.options.__file = "source/addins-vue/background-info/BackgroundInfo.vue";
          const s = i.exports,
              c = document.querySelector(".region.bottom-left"),
              d = document.createElement("div");
          c.appendChild(d), new a.Z({ render: (t) => t(s) }).$mount(d);
      },
      4525: (t, e, n) => {
          "use strict";
          n.d(e, { Z: () => c });
          var a = n(1238),
              o = n(1018),
              r = n(7366),
              i = n.n(r),
              s = n(2096);
          a.Z.use(o.Z, { name: "unreactive" }),
              a.Z.use(i()),
              (a.Z.prototype.$e = s.Z),
              new a.Z({ bb: () => ({ conditionalFeatures: m.conditionalFeatures }) }),
              a.Z.mixin({ computed: { $plus: () => true, $team: () => m.conditionalFeatures.featureEnabled("team") } });
          const c = a.Z;
      },
      7720: (t, e, n) => {
          (t.exports = n(7788)(!1)).push([
              t.id,
              "\n.background-info[data-v-1040273e] { height: 60px; min-width: 135px; display: inline-flex; flex-direction: column; justify-content: center; transition: all 0s var(--a-curve), opacity 1s var(--a-curve), transform 1s var(--a-curve);\n}\n.background-info[data-v-1040273e]:before { transition: opacity 1s var(--a-curve); content: ''; opacity: 0;\n}\n.background-info.add-shadow[data-v-1040273e]:before { left: -40px; opacity: 0.3;\n}\n.background-info-title[data-v-1040273e], .background-info-source[data-v-1040273e] { height: 18px; transition: all 0.3s ease;\n}\n.background-info-title[data-v-1040273e] { z-index: 2; opacity: 0.8; cursor: default; font-size: 0.8125rem; transform: translateZ(0) translateY(10px); white-space: nowrap;\n}\n.background-info:hover .background-info-title[data-v-1040273e], .show-hover .background-info-title[data-v-1040273e] { transform: translateZ(0) translateY(0);\n}\n.hotkey-hover .background-info-title[data-v-1040273e] { transition-duration: 1s;\n}\n.background-info-source[data-v-1040273e] { opacity: 0; font-size: 0.6875rem; transform: translateZ(0) translateY(-8px); white-space: nowrap;\n}\n.background-info:hover .background-info-source[data-v-1040273e], .show-hover .background-info-source[data-v-1040273e] { opacity: 1; transform: translateZ(0) translateY(0);\n}\n.hotkey-hover .background-info-source[data-v-1040273e] { transition-duration: 0.8s;\n}\n.background-info-source-link[data-v-1040273e] { margin-left: -3px; padding: 3px; opacity: 0.7; cursor: pointer; line-height: 20px; transition: all 0.2s var(--a-curve); vertical-align: top;\n}\n.background-info-source-link[data-v-1040273e]:hover { opacity: 0.9 !important;\n}\n.background-info-source-link svg[data-v-1040273e] { height: 15px; margin: 0 2px 0 3px; fill: #fff; vertical-align: -27%;\n}\n.background-info-source-link.no-link[data-v-1040273e] { cursor: default;\n}\n.background-info-source-link.no-link[data-v-1040273e]:hover { opacity: 0.7 !important;\n}\n.background-info .control[data-v-1040273e] { height: 16px; width: 16px; padding: 3px 1px 4px; position: relative; display: inline-block; opacity: 0.7; cursor: pointer; line-height: 105%; user-select: none;\n}\n.background-info .control[data-v-1040273e]:hover, .background-info .control.active[data-v-1040273e] { opacity: 1;\n}\n.show-hover.background-info .control[data-v-1040273e] { opacity: 0;\n}\n.show-hover.background-info:hover .control[data-v-1040273e] { opacity: 0.7;\n}\n.show-hover.background-info .control[data-v-1040273e]:hover { opacity: 1;\n}\n.background-info-source .icon[data-v-1040273e] { height: 15px; position: absolute; top: 3px; left: 10%;\n}\n.background-info .control-skip[data-v-1040273e] { width: 17px; margin-left: -2px;\n}\n.background-info-source .icon-skip[data-v-1040273e] { height: 13px; width: 16px; top: 3px;\n}\n\n",
              "",
          ]);
      },
      3554: (t, e, n) => {
          var a = n(7720);
          "string" == typeof a && (a = [[t.id, a, ""]]), a.locals && (t.exports = a.locals), (0, n(1372).Z)("70453762", a, !1, { ssrId: !0 });
      },
      1372: (t, e, n) => {
          "use strict";
          function a(t, e) {
              for (var n = [], a = {}, o = 0; o < e.length; o++) {
                  var r = e[o],
                      i = r[0],
                      s = { id: t + ":" + o, css: r[1], media: r[2], sourceMap: r[3] };
                  a[i] ? a[i].parts.push(s) : n.push((a[i] = { id: i, parts: [s] }));
              }
              return n;
          }
          n.d(e, { Z: () => h });
          var o = "undefined" != typeof document;
          if ("undefined" != typeof DEBUG && DEBUG && !o) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
          var r = {},
              i = o && (document.head || document.getElementsByTagName("head")[0]),
              s = null,
              c = 0,
              d = !1,
              u = function () {},
              l = null,
              p = "data-vue-ssr-id",
              g = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
          function h(t, e, n, o) {
              (d = n), (l = o || {});
              var i = a(t, e);
              return (
                  m(i),
                  function (e) {
                      for (var n = [], o = 0; o < i.length; o++) {
                          var s = i[o];
                          (c = r[s.id]).refs--, n.push(c);
                      }
                      for (e ? m((i = a(t, e))) : (i = []), o = 0; o < n.length; o++) {
                          var c;
                          if (0 === (c = n[o]).refs) {
                              for (var d = 0; d < c.parts.length; d++) c.parts[d]();
                              delete r[c.id];
                          }
                      }
                  }
              );
          }
          function m(t) {
              for (var e = 0; e < t.length; e++) {
                  var n = t[e],
                      a = r[n.id];
                  if (a) {
                      a.refs++;
                      for (var o = 0; o < a.parts.length; o++) a.parts[o](n.parts[o]);
                      for (; o < n.parts.length; o++) a.parts.push(f(n.parts[o]));
                      a.parts.length > n.parts.length && (a.parts.length = n.parts.length);
                  } else {
                      var i = [];
                      for (o = 0; o < n.parts.length; o++) i.push(f(n.parts[o]));
                      r[n.id] = { id: n.id, refs: 1, parts: i };
                  }
              }
          }
          function v() {
              var t = document.createElement("style");
              return (t.type = "text/css"), i.appendChild(t), t;
          }
          function f(t) {
              var e,
                  n,
                  a = document.querySelector("style[" + p + '~="' + t.id + '"]');
              if (a) {
                  if (d) return u;
                  a.parentNode.removeChild(a);
              }
              if (g) {
                  var o = c++;
                  (a = s || (s = v())), (e = y.bind(null, a, o, !1)), (n = y.bind(null, a, o, !0));
              } else
                  (a = v()),
                      (e = w.bind(null, a)),
                      (n = function () {
                          a.parentNode.removeChild(a);
                      });
              return (
                  e(t),
                  function (a) {
                      if (a) {
                          if (a.css === t.css && a.media === t.media && a.sourceMap === t.sourceMap) return;
                          e((t = a));
                      } else n();
                  }
              );
          }
          var k,
              b =
                  ((k = []),
                  function (t, e) {
                      return (k[t] = e), k.filter(Boolean).join("\n");
                  });
          function y(t, e, n, a) {
              var o = n ? "" : a.css;
              if (t.styleSheet) t.styleSheet.cssText = b(e, o);
              else {
                  var r = document.createTextNode(o),
                      i = t.childNodes;
                  i[e] && t.removeChild(i[e]), i.length ? t.insertBefore(r, i[e]) : t.appendChild(r);
              }
          }
          function w(t, e) {
              var n = e.css,
                  a = e.media,
                  o = e.sourceMap;
              if (
                  (a && t.setAttribute("media", a),
                  l.ssrId && t.setAttribute(p, e.id),
                  o && ((n += "\n/*# sourceURL=" + o.sources[0] + " */"), (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */")),
                  t.styleSheet)
              )
                  t.styleSheet.cssText = n;
              else {
                  for (; t.firstChild; ) t.removeChild(t.firstChild);
                  t.appendChild(document.createTextNode(n));
              }
          }
      },
  },
]);
//# sourceMappingURL=206.js.map
