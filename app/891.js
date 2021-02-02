(self.webpackChunkmomentum_extension = self.webpackChunkmomentum_extension || []).push([
  [891],
  {
      2891: (t, n, a) => {
          "use strict";
          a.r(n), a.d(n, { default: () => c });
          var i = function () {
              var t = this,
                  n = t.$createElement,
                  a = t._self._c || n;
              return a("div", { staticClass: "app-container has-dash-icon has-3-col greeting", attrs: { "data-test": "mantra" } }, [
                  a("div", { staticClass: "side-col" }),
                  t._v(" "),
                  a(
                      "div",
                      { staticClass: "center-col" },
                      [
                          a("message", {
                              attrs: { message: t.mantra, "editing-name": t.editingName },
                              on: { editing: t.editing },
                              model: {
                                  value: t.mantra.name,
                                  callback: function (n) {
                                      t.$set(t.mantra, "name", n);
                                  },
                                  expression: "mantra.name",
                              },
                          }),
                      ],
                      1
                  ),
                  t._v(" "),
                  a(
                      "div",
                      { staticClass: "side-col" },
                      [
                          a(
                              "dropdown",
                              {
                                  attrs: { "show-dropdown": t.showDropdown },
                                  on: { "show-dropdown-change": t.changeShowDropdown },
                                  scopedSlots: t._u([
                                      {
                                          key: "upsell",
                                          fn: function () {
                                              return [
                                                  t.showUpsell
                                                      ? a(
                                                            "upsell",
                                                            t._b(
                                                                {
                                                                    staticClass: "greeting-upsell",
                                                                    on: {
                                                                        "hide-upsell": function (n) {
                                                                            t.showUpsell = !1;
                                                                        },
                                                                    },
                                                                },
                                                                "upsell",
                                                                t.upsellOptions,
                                                                !1
                                                            )
                                                        )
                                                      : t._e(),
                                              ];
                                          },
                                          proxy: !0,
                                      },
                                  ]),
                              },
                              [
                                  t._v(" "),
                                  a(
                                      "dropdown-option",
                                      {
                                          class: { active: t.isFavorite },
                                          attrs: { name: "Favorite", "data-test": "favorite" },
                                          nativeOn: {
                                              click: function (n) {
                                                  return t.toggleFavorite(n);
                                              },
                                          },
                                      },
                                      [
                                          a("svg", { staticClass: "icon dropdown-list-icon icon-heart", attrs: { viewBox: "0 0 953 1000" } }, [
                                              a("path", {
                                                  attrs: {
                                                      d:
                                                          "M1 329q7-115 79-191h2l2-2q88-76 199-76t191 70q32-28 67-45l2-2h2q56-23 117-23 88-2 161 43t110 124v2l2 4q30 106 10 202t-80 175q-62 88-162 172 0 2-2 2-49 45-107 90-34 25-59 41-33 23-55 23l-6 2-5-2q-28-3-59-29-10-6-21-16t-16-13h-2Q125 692 43 540v-2Q-6 444 1 329zm85 1",
                                                  },
                                              }),
                                          ]),
                                      ]
                                  ),
                                  t._v(" "),
                                  a(
                                      "dropdown-option",
                                      {
                                          class: { active: t.isPinned },
                                          attrs: { name: t.pinOrUnpin, "data-test": "pin" },
                                          nativeOn: {
                                              click: function (n) {
                                                  return t.togglePin(n);
                                              },
                                          },
                                      },
                                      [
                                          a("svg", { staticClass: "icon dropdown-list-icon icon-pin", attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 481.71 481.72" } }, [
                                              a("path", {
                                                  attrs: {
                                                      d:
                                                          "M106.12,10.76,10.77,106.13a36.72,36.72,0,0,0,45.92,56.8l109.6,127.41a100.11,100.11,0,0,0,20,113.32,35.27,35.27,0,0,0,49.86,0l57.33-57.31L481.71,481.72,346.35,293.52l57.31-57.31a35.3,35.3,0,0,0,0-49.88,100.16,100.16,0,0,0-113.29-20L162.93,56.67a36.72,36.72,0,0,0-56.81-45.91Z",
                                                      transform: "translate(0 0)",
                                                  },
                                              }),
                                          ]),
                                      ]
                                  ),
                                  t._v(" "),
                                  a(
                                      "dropdown-option",
                                      {
                                          class: { active: t.skipping },
                                          attrs: { name: t.skipOrSkipping, "data-test": "skip" },
                                          nativeOn: {
                                              click: function (n) {
                                                  return t.skip(n);
                                              },
                                          },
                                      },
                                      [
                                          a("svg", { staticClass: "icon dropdown-list-icon icon-skip", attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 259.04 137.93" } }, [
                                              a("circle", { attrs: { cx: "118", cy: "109.43", r: "28" } }),
                                              a("path", {
                                                  attrs: { d: "M291.5,276A27.5,27.5,0,1,1,264,303.5,27.54,27.54,0,0,1,291.5,276m0-1A28.5,28.5,0,1,0,320,303.5,28.5,28.5,0,0,0,291.5,275Z", transform: "translate(-173.5 -194.07)" },
                                              }),
                                              a("path", {
                                                  staticClass: "arrow",
                                                  attrs: {
                                                      d:
                                                          "M403.51,262.47a126.14,126.14,0,0,0-120.77-68.05,112.78,112.78,0,0,0-72.33,33.34c-21,21.52-33.78,52-36.86,88.09a13.5,13.5,0,0,0,12.3,14.6c.39,0,.78.05,1.17.05a13.5,13.5,0,0,0,13.43-12.35c2.54-29.8,12.67-54.53,29.27-71.52,14.59-14.93,33.63-23.67,55.06-25.29a98,98,0,0,1,63.57,17.78,99,99,0,0,1,29.55,32.82l-28.39,10.51L417,327l15.54-75.28Z",
                                                      transform: "translate(-173.5 -194.07)",
                                                  },
                                              }),
                                          ]),
                                      ]
                                  ),
                                  t._v(" "),
                                  t.isCustom
                                      ? t._e()
                                      : a(
                                            "dropdown-option",
                                            {
                                                attrs: { name: "Don't show again", "data-test": "dont-show-again" },
                                                nativeOn: {
                                                    click: function (n) {
                                                        return t.dontShowAgain(n);
                                                    },
                                                },
                                            },
                                            [
                                                a("svg", { staticClass: "icon dropdown-list-icon icon-remove", attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 241.66 241.66" } }, [
                                                    a("path", {
                                                        attrs: {
                                                            d:
                                                                "M210.323 17.93h-17.898c-9.01 0-16.066-5.165-26.848-8.949C150.811 3.865 128.756.025 90.766.025 84.122.025 63.516 0 63.516 0c-6.309 0-11.377 2.882-15.035 6.363-1.392 1.323-2.844 3.245-3.465 6.994-.101.582-.21 3.017-.193 3.346-.478 10.729 6.008 14.614 9.682 15.835-.101.034-.033.126-.235.117l-11.662-.522c-10.352-.472-20.572 6.986-20.572 19.669 0 10.517 8.524 17.933 18.844 18.439l-6.184-.287c-10.352-.455-19.103 7.695-19.582 18.22-.453 10.526 7.567 19.433 17.913 19.906-10.345-.472-19.121 7.677-19.573 18.203-.454 10.526 6.821 19.99 17.174 20.444l68.73 8.63s-14.324 23.959-14.324 59.455c0 23.664 16.905 26.848 26.848 26.848 7.821.002 9.927-15.151 9.927-15.151h.016c1.77-9.717 4.077-18.203 12.091-33.827 8.968-17.512 21.184-15.869 35.446-31.467 2.517-2.747 5.898-7.281 9.195-12.86.269-.295.521-.708.764-1.289.293-.69.646-1.172.956-1.812a102.669 102.669 0 0 0 1.61-3.059c8.826-8.827 22.579-7.925 28.435-7.925 11.746 0 17.898-6.825 17.898-17.898l.005-81.828c.002-12.423-5.082-16.614-17.902-16.614z",
                                                            "fill-rule": "evenodd",
                                                            "clip-rule": "evenodd",
                                                        },
                                                    }),
                                                ]),
                                            ]
                                        ),
                                  t._v(" "),
                                  a("li", { staticClass: "line" }),
                                  t._v(" "),
                                  a("dropdown-option", {
                                      attrs: { name: "Mantra settings", "data-test": "mantra-settings" },
                                      nativeOn: {
                                          click: function (n) {
                                              return t.openMantraSettings(n);
                                          },
                                      },
                                  }),
                                  t._v(" "),
                                  t.mantra.name
                                      ? a("dropdown-option", {
                                            attrs: { name: "Edit your name", "data-test": "edit-name" },
                                            nativeOn: {
                                                click: function (n) {
                                                    (t.editingName = !0), (t.showDropdown = !1);
                                                },
                                            },
                                        })
                                      : t._e(),
                              ],
                              1
                          ),
                      ],
                      1
                  ),
              ]);
          };
          i._withStripped = !0;
          var e = a(545),
              s = a(1238),
              o = a(7366),
              r = a.n(o);
          s.Z.use(r());
          const p = new (s.Z.extend({
                  name: "MantraManager",
                  manager: m.models.mantraManager,
                  bb: () => ({ mantras: m.collect.mantras, mantraSettings: m.models.mantraSettings }),
                  computed: {
                      pinned() {
                          return this.mantraSettings ? this.mantraSettings.pinnedMantra : null;
                      },
                      active() {
                          let t;
                          if (this.pinned) return (t = this.mantras.findWhere({ forDate: "pinned" })), t && t.get("_id") === this.pinned.id ? t : null;
                          if (this.mantras && this.isEnabled()) {
                              if (((t = this.mantras.getActiveItem()), !t)) return m.trigger("sync:download", "mantra"), null;
                              if (t.get("hardSkip")) return null;
                          }
                          return t;
                      },
                  },
                  watch: {
                      active(t) {
                          !t && this.pinned && this.mantras.create({ forDate: "pinned", _id: this.pinned.id, body: this.pinned.body, is_custom: this.pinned.isCustom, is_favorite: this.pinned.isFavorite });
                      },
                  },
                  methods: {
                      isEnabled: function () {
                          return this.$options.manager.isEnabled();
                      },
                      pinMantra: function (t, n) {
                          this.$options.manager.pinMantra(t, n);
                      },
                      toggleFav: function (t) {
                          this.$options.manager.toggleFav(t);
                      },
                      skipItem: function (t) {
                          return this.$options.manager.skipItem(t);
                      },
                      getMantraForDisplay: function (t, n) {
                          return this.$options.manager.getMantraForDisplay(t, n);
                      },
                      markGreetingAsSeenToday: function () {
                          this.$options.manager.markGreetingAsSeenToday();
                      },
                  },
              }))(),
              l = {
                  name: "Mantra",
                  components: { Message: e.Z, Dropdown: () => a.e(568).then(a.bind(a, 9385)), DropdownOption: () => a.e(672).then(a.bind(a, 2672)), Upsell: () => a.e(810).then(a.bind(a, 9107)) },
                  bb: () => ({ customization: m.models.customization }),
                  data: () => ({ showDropdown: !1, editingName: !1, skipping: !1, showUpsell: !1, upsellOptions: {}, useLastShowName: !1 }),
                  pinUpsellOptions: { sourceEvent: "pinMantra", buttonText: "Learn more", title: "Pin Mantra", description: "Always show a mantra instead of the greeting" },
                  skipUpsellOptions: { sourceEvent: "skipMantra", buttonText: "Learn more", title: "Skip Mantra", description: "Get a new mantra anytime" },
                  computed: {
                      isFavorite() {
                          return this.mantra && this.mantra.activeMantra && this.mantra.activeMantra.get("is_favorite");
                      },
                      isPinned() {
                          return this.mantra && this.mantra.activeMantra && this.mantra.activeMantra.isPinned();
                      },
                      isCustom() {
                          return this.mantra && this.mantra.activeMantra && this.mantra.activeMantra.get("is_custom");
                      },
                      mantra() {
                          const t = p.active,
                              n = p.getMantraForDisplay(t, this.useLastShowName);
                          return n ? { activeMantra: t, content: n.start, name: n.name, punctuation: n.end || "." } : { activeMantra: "", content: " ", name: "", punctuation: "" };
                      },
                      skipOrSkipping() {
                          return this.skipping ? "Skipping…" : "Skip";
                      },
                      pinOrUnpin() {
                          return this.isPinned ? "Unpin" : "Pin";
                      },
                  },
                  watch: {
                      mantra() {
                          this.useLastShowName = !0;
                      },
                  },
                  methods: {
                      changeShowDropdown(t) {
                          this.$emit("stop-cycle", t), (this.showDropdown = t), (this.showUpsell = !1);
                      },
                      openMantraSettings() {
                          this.editingName || (m.commandManager.executeAsync("settings.display", null, { section: "mantra-settings" }), (this.showDropdown = !1), m.sendEvent("Mantra dropdown", "Settings open"));
                      },
                      toggleFavorite() {
                          p.toggleFav(this.mantra.activeMantra), m.sendEvent("Mantra dropdown", "Fav toggle");
                      },
                      togglePin() {
                          if (!this.$plus) return (this.upsellOptions = this.$options.pinUpsellOptions), void (this.showUpsell = !0);
                          const t = this.mantra.name === m.models.customization.get("displayname");
                          p.pinMantra(this.mantra.activeMantra, t), m.sendEvent("Mantra dropdown", "Pin toggle");
                      },
                      skip() {
                          return this.$plus
                              ? this.mantra.activeMantra
                                  ? ((this.skipping = !0),
                                    p.skipItem().finally(() => {
                                        (this.showDropdown = !1), (this.skipping = !1), (this.showUpsell = !1);
                                    }),
                                    void m.sendEvent("Mantra dropdown", "Skip"))
                                  : (m.trigger("sync:download", "mantra"), void this.$emit("show-greeting"))
                              : ((this.upsellOptions = this.$options.skipUpsellOptions), void (this.showUpsell = !0));
                      },
                      dontShowAgain() {
                          p.skipItem(!0).finally(() => {
                              (this.showDropdown = !1), (this.showUpsell = !1), this.$plus || this.$emit("show-greeting");
                          }),
                              m.sendEvent("Mantra dropdown", "Dont show again");
                      },
                      editing(t) {
                          this.$emit("stop-cycle", t), (this.editingName = t);
                      },
                  },
              };
          var d = (0, a(1900).Z)(l, i, [], !1, null, null, null);
          d.options.__file = "source/addins-vue/greetings-mantra/Mantra.vue";
          const c = d.exports;
      },
  },
]);
//# sourceMappingURL=891.js.map
