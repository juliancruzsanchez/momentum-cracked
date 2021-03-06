(self.webpackChunkmomentum_extension = self.webpackChunkmomentum_extension || []).push([
  [107, 810],
  {
      7788: (e) => {
          "use strict";
          e.exports = function (e) {
              var t = [];
              return (
                  (t.toString = function () {
                      return this.map(function (t) {
                          var n = (function (e, t) {
                              var n,
                                  r = e[1] || "",
                                  s = e[3];
                              if (!s) return r;
                              if (t && "function" == typeof btoa) {
                                  var a = ((n = s), "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */"),
                                      i = s.sources.map(function (e) {
                                          return "/*# sourceURL=" + s.sourceRoot + e + " */";
                                      });
                                  return [r].concat(i).concat([a]).join("\n");
                              }
                              return [r].join("\n");
                          })(t, e);
                          return t[2] ? "@media " + t[2] + "{" + n + "}" : n;
                      }).join("");
                  }),
                  (t.i = function (e, n) {
                      "string" == typeof e && (e = [[null, e, ""]]);
                      for (var r = {}, s = 0; s < this.length; s++) {
                          var a = this[s][0];
                          null != a && (r[a] = !0);
                      }
                      for (s = 0; s < e.length; s++) {
                          var i = e[s];
                          (null != i[0] && r[i[0]]) || (n && !i[2] ? (i[2] = n) : n && (i[2] = "(" + i[2] + ") and (" + n + ")"), t.push(i));
                      }
                  }),
                  t
              );
          };
      },
      4206: (e, t, n) => {
          (e.exports = n(7788)(!1)).push([e.id, "\n.upsell-no-transform[data-v-c4d6a322] { transform: none;\n}\n", ""]);
      },
      9107: (e, t, n) => {
          "use strict";
          n.r(t), n.d(t, { default: () => i });
          var r = function () {
              var e = this,
                  t = e.$createElement,
                  n = e._self._c || t;
              return n("div", { staticClass: "overlay upsell upsell-no-transform show showfade-in fadein", class: e.targetRegion + "-upsell", attrs: { "data-test": "upsell" } }, [
                  n(
                      "span",
                      {
                          staticClass: "icon-wrapper hide",
                          attrs: { "data-test": "upsell-close" },
                          on: {
                              click: function (t) {
                                  return e.$emit("hide-upsell");
                              },
                          },
                      },
                      [
                          n("svg", { staticClass: "icon", attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 212.982 212.982" } }, [
                              n("path", {
                                  attrs: {
                                      d:
                                          "M131.804 106.491l75.936-75.936c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.491 81.18 30.554 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.989 6.99-6.989 18.323 0 25.312l75.937 75.936-75.937 75.937c-6.989 6.99-6.989 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0l75.937-75.937 75.937 75.937c6.989 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.322 0-25.312l-75.936-75.936z",
                                  },
                              }),
                          ]),
                      ]
                  ),
                  e._v(" "),
                  n("div", { staticClass: "available" }, [e._v("Available on Plus")]),
                  e._v(" "),
                  n("div", { staticClass: "title", attrs: { "data-test": "upsell-title" } }, [e._v(e._s(e.title))]),
                  e._v(" "),
                  n("div", { staticClass: "description", attrs: { "data-test": "upsell-description" } }, [e._v(e._s(e.description))]),
                  e._v(" "),
                  n("a", { staticClass: "button upsell-action", attrs: { "data-test": "upsell-cta" }, on: { click: e.executeCallToAction } }, [e._v(e._s(e.buttonText))]),
              ]);
          };
          r._withStripped = !0;
          const s = {
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
                      let e = "https://momentumdash.com/plus?utm_source=extension&utm_medium=organic";
                      this.sourceEvent && (e += "&utm_campaign=" + encodeURIComponent(this.sourceEvent));
                      const t = localStorage.getItem("offered-plan");
                      t && m.conditionalFeatures.featureEnabled("notes-degraded") && (e += "&resubscribe=" + t),
                          this.experiment && m.sendEvent("Settings", "Upgrade", null, null, this.experiment.correlationId, this.experiment.experimentId, this.experiment.id),
                          m.commandManager.execute("window.open", null, { url: e });
                  },
              },
          };
          n(9092);
          var a = (0, n(1900).Z)(s, r, [], !1, null, "c4d6a322", null);
          a.options.__file = "source/addins-vue/shared_components/Upsell.vue";
          const i = a.exports;
      },
      9092: (e, t, n) => {
          var r = n(4206);
          "string" == typeof r && (r = [[e.id, r, ""]]), r.locals && (e.exports = r.locals), (0, n(1372).Z)("b2767804", r, !1, { ssrId: !0 });
      },
      1372: (e, t, n) => {
          "use strict";
          function r(e, t) {
              for (var n = [], r = {}, s = 0; s < t.length; s++) {
                  var a = t[s],
                      i = a[0],
                      o = { id: e + ":" + s, css: a[1], media: a[2], sourceMap: a[3] };
                  r[i] ? r[i].parts.push(o) : n.push((r[i] = { id: i, parts: [o] }));
              }
              return n;
          }
          n.d(t, { Z: () => v });
          var s = "undefined" != typeof document;
          if ("undefined" != typeof DEBUG && DEBUG && !s) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
          var a = {},
              i = s && (document.head || document.getElementsByTagName("head")[0]),
              o = null,
              l = 0,
              u = !1,
              c = function () {},
              d = null,
              p = "data-vue-ssr-id",
              f = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
          function v(e, t, n, s) {
              (u = n), (d = s || {});
              var i = r(e, t);
              return (
                  m(i),
                  function (t) {
                      for (var n = [], s = 0; s < i.length; s++) {
                          var o = i[s];
                          (l = a[o.id]).refs--, n.push(l);
                      }
                      for (t ? m((i = r(e, t))) : (i = []), s = 0; s < n.length; s++) {
                          var l;
                          if (0 === (l = n[s]).refs) {
                              for (var u = 0; u < l.parts.length; u++) l.parts[u]();
                              delete a[l.id];
                          }
                      }
                  }
              );
          }
          function m(e) {
              for (var t = 0; t < e.length; t++) {
                  var n = e[t],
                      r = a[n.id];
                  if (r) {
                      r.refs++;
                      for (var s = 0; s < r.parts.length; s++) r.parts[s](n.parts[s]);
                      for (; s < n.parts.length; s++) r.parts.push(g(n.parts[s]));
                      r.parts.length > n.parts.length && (r.parts.length = n.parts.length);
                  } else {
                      var i = [];
                      for (s = 0; s < n.parts.length; s++) i.push(g(n.parts[s]));
                      a[n.id] = { id: n.id, refs: 1, parts: i };
                  }
              }
          }
          function h() {
              var e = document.createElement("style");
              return (e.type = "text/css"), i.appendChild(e), e;
          }
          function g(e) {
              var t,
                  n,
                  r = document.querySelector("style[" + p + '~="' + e.id + '"]');
              if (r) {
                  if (u) return c;
                  r.parentNode.removeChild(r);
              }
              if (f) {
                  var s = l++;
                  (r = o || (o = h())), (t = x.bind(null, r, s, !1)), (n = x.bind(null, r, s, !0));
              } else
                  (r = h()),
                      (t = C.bind(null, r)),
                      (n = function () {
                          r.parentNode.removeChild(r);
                      });
              return (
                  t(e),
                  function (r) {
                      if (r) {
                          if (r.css === e.css && r.media === e.media && r.sourceMap === e.sourceMap) return;
                          t((e = r));
                      } else n();
                  }
              );
          }
          var b,
              y =
                  ((b = []),
                  function (e, t) {
                      return (b[e] = t), b.filter(Boolean).join("\n");
                  });
          function x(e, t, n, r) {
              var s = n ? "" : r.css;
              if (e.styleSheet) e.styleSheet.cssText = y(t, s);
              else {
                  var a = document.createTextNode(s),
                      i = e.childNodes;
                  i[t] && e.removeChild(i[t]), i.length ? e.insertBefore(a, i[t]) : e.appendChild(a);
              }
          }
          function C(e, t) {
              var n = t.css,
                  r = t.media,
                  s = t.sourceMap;
              if (
                  (r && e.setAttribute("media", r),
                  d.ssrId && e.setAttribute(p, t.id),
                  s && ((n += "\n/*# sourceURL=" + s.sources[0] + " */"), (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(s)))) + " */")),
                  e.styleSheet)
              )
                  e.styleSheet.cssText = n;
              else {
                  for (; e.firstChild; ) e.removeChild(e.firstChild);
                  e.appendChild(document.createTextNode(n));
              }
          }
      },
  },
]);
//# sourceMappingURL=107.js.map
