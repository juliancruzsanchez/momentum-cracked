(self.webpackChunkmomentum_extension = self.webpackChunkmomentum_extension || []).push([
  [2],
  {
      6935: (t, e, a) => {
          "use strict";
          a.d(e, { CP: () => Ot, Cb: () => zt, $J: () => Tt, V: () => kt, Hb: () => Mt, ZL: () => ut, os: () => mt, EA: () => pt });
          var n = function () {
              var t = this,
                  e = t.$createElement,
                  a = t._self._c || e;
              return a("div", { staticClass: "modal-container" }, [
                  a("div", { staticClass: "modal-overlay", on: { click: t.shakeContainer } }),
                  t._v(" "),
                  a(
                      "div",
                      { staticClass: "modal app", class: [{ shake: t.shake }, t.customClass], style: { "--modal-height": t.modalHeight + "px", "--modal-width": t.modalWidth + "px" }, attrs: { "data-test": "modal" } },
                      [
                          a("transition", { attrs: { name: "banner-fade", mode: "out-in" } }, [
                              t.showSaleBanner
                                  ? a("div", { staticClass: "sale-banner" }, [
                                        a("strong", { staticClass: "sale-title" }, [t._v(t._s(t.saleInfo.title))]),
                                        t._v(" "),
                                        a("span", { staticClass: "sale-description" }, [t._v(t._s(t.saleInfo.percentOff) + "% off")]),
                                    ])
                                  : t._e(),
                          ]),
                          t._v(" "),
                          t.hideClose || t.activeSubStep.hideClose || t.showSaleBanner
                              ? t._e()
                              : a(
                                    "div",
                                    {
                                        staticClass: "icon-wrapper close",
                                        on: {
                                            click: function (e) {
                                                return e.stopPropagation(), t.destroy(e);
                                            },
                                        },
                                    },
                                    [
                                        a("svg", { staticClass: "icon icon-close", attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 212.982 212.982" } }, [
                                            a("path", {
                                                attrs: {
                                                    d:
                                                        "M131.804 106.491l75.936-75.936c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.491 81.18 30.554 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.989 6.99-6.989 18.323 0 25.312l75.937 75.936-75.937 75.937c-6.989 6.99-6.989 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0l75.937-75.937 75.937 75.937c6.989 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.322 0-25.312l-75.936-75.936z",
                                                },
                                            }),
                                        ]),
                                    ]
                                ),
                          t._v(" "),
                          a(
                              "div",
                              { ref: "main", staticClass: "main", class: { reverse: t.reverseTransition }, style: { "--main-width": t.stepWidth } },
                              [
                                  a(
                                      "transition",
                                      {
                                          attrs: { appear: "", name: t.stepTransition, mode: t.stepTransitionMode },
                                          on: { "before-leave": t.beforeSubStepLeave, "after-leave": t.afterSubStepLeave, "before-enter": t.beforeSubStepEnter, "after-enter": t.afterSubStepEnter },
                                      },
                                      [
                                          t.activeSubStep.preRender
                                              ? t._e()
                                              : a(
                                                    "div",
                                                    { key: t.activeSubStepIndex, staticClass: "step-container" },
                                                    [
                                                        t.activeSubStep.component
                                                            ? a(
                                                                  t.activeSubStep.component,
                                                                  t._b(
                                                                      {
                                                                          tag: "component",
                                                                          staticClass: "sub-step",
                                                                          class: { reverse: t.reverseTransition },
                                                                          attrs: { plans: t.plans, sales: t.sales },
                                                                          on: {
                                                                              nextStep: t.completeSubStep,
                                                                              showFooter: t.showFooter,
                                                                              goBack: function (e) {
                                                                                  return t.goToSubStep(t.activeSubStepIndex - 1);
                                                                              },
                                                                          },
                                                                      },
                                                                      "component",
                                                                      t.activeSubStep.subStepProps,
                                                                      !1
                                                                  )
                                                              )
                                                            : t._e(),
                                                    ],
                                                    1
                                                ),
                                      ]
                                  ),
                                  t._v(" "),
                                  a(
                                      "transition",
                                      { attrs: { name: t.stepTransition }, on: { "before-leave": t.beforeSubStepLeave, "after-leave": t.afterSubStepLeave, "before-enter": t.beforeSubStepEnter, "after-enter": t.afterSubStepEnter } },
                                      [
                                          t.preRenderComponent
                                              ? a(
                                                    "div",
                                                    { directives: [{ name: "show", rawName: "v-show", value: t.activeSubStep.preRender, expression: "activeSubStep.preRender" }], staticClass: "step-container", attrs: { appear: "" } },
                                                    [
                                                        a(
                                                            t.preRenderComponent,
                                                            t._b(
                                                                {
                                                                    tag: "component",
                                                                    staticClass: "sub-step pre-render",
                                                                    attrs: { plans: t.plans, sales: t.sales, "transition-active": t.transitionActive, "is-active-step": t.activeSubStep.preRender },
                                                                    on: {
                                                                        nextStep: t.completeSubStep,
                                                                        showFooter: t.showFooter,
                                                                        goBack: function (e) {
                                                                            return t.goToSubStep(t.activeSubStepIndex - 1);
                                                                        },
                                                                    },
                                                                },
                                                                "component",
                                                                t.activeSubStep.subStepProps,
                                                                !1
                                                            )
                                                        ),
                                                    ],
                                                    1
                                                )
                                              : t._e(),
                                      ]
                                  ),
                                  t._v(" "),
                                  a("transition", { attrs: { appear: "", name: "fade", mode: "out-in" } }, [
                                      t.footerVisible
                                          ? a("footer", { key: t.activeSubStepIndex, staticClass: "footer", attrs: { "data-test": "footer" } }, [
                                                t.activeSubStep.showUpgrade
                                                    ? a("button", { staticClass: "button", class: { "button-secondary": !t.swapPrimaryButton }, attrs: { "data-test": "upgrade-button" }, on: { click: t.upgrade } }, [
                                                          t._v("Upgrade to Plus"),
                                                      ])
                                                    : t._e(),
                                                t.hideNextButton
                                                    ? t._e()
                                                    : a(
                                                          "button",
                                                          { staticClass: "button next", class: { "button-secondary": t.swapPrimaryButton }, attrs: { disabled: t.transitionActive, "data-test": "next" }, on: { click: t.completeSubStep } },
                                                          [t._v(t._s(t.activeNextButtonText))]
                                                      ),
                                                a("br"),
                                                t._v(" "),
                                                t.activeSubStep.belowButtonMsg ? a("div", { staticClass: "below-button-msg" }, [t._v(t._s(t.activeSubStep.belowButtonMsg))]) : t._e(),
                                                t._v(" "),
                                                a(
                                                    "div",
                                                    { staticClass: "progress", class: { "hide-progress": t.subSteps.length <= 1 } },
                                                    t._l(t.subSteps.length, function (e) {
                                                        return a(
                                                            "span",
                                                            {
                                                                key: e,
                                                                staticClass: "progress-dot-wrapper",
                                                                class: { active: e - 1 === t.activeSubStepIndex },
                                                                on: {
                                                                    click: function (a) {
                                                                        return t.goToSubStep(e - 1);
                                                                    },
                                                                },
                                                            },
                                                            [a("span", { staticClass: "dot" }, [t._v("•")])]
                                                        );
                                                    }),
                                                    0
                                                ),
                                            ])
                                          : t._e(),
                                  ]),
                                  t._v(" "),
                              //    t.backgroundSrc ? a("div", { staticClass: "onboarding-bg" }, [a("img", { attrs: { src: t.backgroundSrc } })]) : t._e(),
                              ],
                              1
                          ),
                          t._v(" "),
                          t.sidebar ? a(t.sidebar, { tag: "component" }) : t._e(),
                      ],
                      1
                  ),
              ]);
          };
          n._withStripped = !0;
          const s = {
              name: "OnboardingIntro",
              defaultModalWidth: 640,
              defaultModalHeight: 500,
              props: {
                  id: { type: String, required: !0 },
                  nextButtonText: { type: String, default: "Next" },
                  subSteps: { type: Array, default: null },
                  activeSubStepIndex: { type: Number, default: 0 },
                  backgroundSrc: { type: String, default: "" },
                  customClass: { type: String, default: "" },
                  customWidth: { type: Number, default: null },
                  customHeight: { type: Number, default: null },
                  hideNext: { type: Boolean, default: !1 },
                  hideClose: { type: Boolean, default: !1 },
                  sidebar: { type: Object, default: null },
                  transition: { type: String, default: "zoom" },
                  transitionMode: { type: String, default: "out-in" },
                  swapPrimaryButton: { type: Boolean, default: !1 },
                  plans: { type: Object, default: () => ({}) },
                  sales: { type: Object, default: () => ({}) },
                  firstSubStep: { type: Function, default: () => 0 },
              },
              data: () => ({ nippleClass: "", shake: !1, footerVisible: !0, reverseTransition: !1, transitionActive: !1, stepWidth: "auto" }),
              computed: {
                  activeSubStep() {
                      return (this.subSteps && this.subSteps[this.activeSubStepIndex]) || null;
                  },
                  activeNextButtonText() {
                      return (this.activeSubStep && this.activeSubStep.nextButtonText) || this.nextButtonText;
                  },
                  modalWidth() {
                      return this.activeSubStep.customWidth || this.customWidth || this.$options.defaultModalWidth;
                  },
                  modalHeight() {
                      return this.activeSubStep.customHeight || this.customHeight || this.$options.defaultModalHeight;
                  },
                  hideNextButton() {
                      return this.activeSubStep.hideNext || this.hideNext;
                  },
                  preRenderComponent() {
                      const t = this.subSteps.find((t) => t.preRender);
                      return t && t.component;
                  },
                  stepTransition() {
                      return this.activeSubStepIndex !== this.firstSubStep() || this.reverseTransition ? this.transition : "zoom";
                  },
                  stepTransitionMode() {
                      return this.activeSubStepIndex !== this.firstSubStep() || this.reverseTransition ? this.transitionMode : "out-in";
                  },
                  showSaleBanner() {
                      return this.activeSubStep.hasSaleBanner && this.sales && Object.keys(this.sales).length;
                  },
                  saleInfo() {
                      return this.sales && this.sales.yearly;
                  },
              },
              watch: {
                  activeSubStepIndex(t, e) {
                      this.reverseTransition = t < e;
                  },
                  activeSubStep(t) {
                      this.footerVisible = !t.hideFooter;
                  },
              },
              created() {
                  this.activeSubStep.hideFooter && (this.footerVisible = !1), this.$e.listenTo(m, "globalEvent:key:enter", this.completeSubStep);
              },
              mounted() {
                  (this.$apps = document.querySelector(".apps")),
                      m.utils.addClass(this.$apps, "hide-apps"),
                      m.sendEvent("Onboarding", "Step displayed", this.id),
                      this.sidebar && this.$refs.main && (this.stepWidth = this.$refs.main.clientWidth + "px");
              },
              destroyed() {
                  m.utils.removeClass(this.$apps, "hide-apps"), this.$e.stopListening(m, "globalEvent:key:enter", this.completeSubStep);
              },
              methods: {
                  completeSubStep(t) {
                      this.transitionActive || this.$emit("subStepComplete", t);
                  },
                  goToSubStep(t) {
                      this.$emit("goToSubStep", t);
                  },
                  upgrade() {
                      this.$emit("stepComplete", !0), this.$emit("upgrade");
                  },
                  skipOnboarding() {
                      m.sendEvent("Onboarding", "Skipped", this.id), this.$emit("skipOnboarding");
                  },
                  destroy(t) {
                      t || m.sendEvent("Onboarding", "Popup closed", this.id), this.$emit("destroy");
                  },
                  shakeContainer() {
                      (this.shake = !0),
                          setTimeout(() => {
                              this.shake = !1;
                          }, 1e3);
                  },
                  showFooter() {
                      this.footerVisible = !0;
                  },
                  beforeSubStepLeave() {
                      this.transitionActive = !0;
                  },
                  afterSubStepLeave() {
                      this.$emit("afterSubStepLeave");
                  },
                  beforeSubStepEnter() {
                      this.$emit("beforeSubStepEnter");
                  },
                  afterSubStepEnter() {
                      this.transitionActive = !1;
                  },
              },
          };
          a(1741), a(9987);
          var o = a(1900),
              i = (0, o.Z)(s, n, [], !1, null, "dc3de724", null);
          i.options.__file = "source/addins-vue/modal/common/Modal.vue";
          const r = i.exports;
          var c = function () {
              var t = this,
                  e = t.$createElement,
                  a = t._self._c || e;
              return a("div", { staticClass: "onboarding-intro", class: [{ "intro-animation-active": t.introAnimationActive, show: t.showApp }, t.animationCLassList], attrs: { "data-test": "welcome" } }, [
                  a("div", { staticClass: "content" }, [
                      a("h2", { staticClass: "title", style: { "--title-margin-left": t.titleMarginLeft + "px" }, attrs: { id: t.$options.titleId } }, [
                          a("span", { staticClass: "welcome" }, [t._v("Welcome ")]),
                          a("span", { staticClass: "to-momentum" }, [t._v("to Momentum")]),
                          a("span", { staticClass: "comma" }, [t._v(", ")]),
                          a("span", { staticClass: "name" }, [t._v(t._s(t.displayName) + ".")]),
                      ]),
                      t._v(" "),
                      a("div", { staticClass: "subheading" }, [t._v("Momentum is a peaceful start page that keeps you focused on what's most important.")]),
                  ]),
              ]);
          };
          c._withStripped = !0;
          const l = {
              name: "Intro1",
              titleId: "onboarding-modal-title",
              animationSteps: [
                  { classes: "step-1", timeout: 0 },
                  { classes: "step-1 step-1-active", timeout: 40 },
              ],
              data: () => ({ showApp: !1, introAnimationActive: !0, activeAnimationStepIndex: 0, titleMarginLeft: 0, displayName: m.models.customization.get("displayname") }),
              computed: {
                  animationCLassList() {
                      return this.$options.animationSteps[this.activeAnimationStepIndex].classes;
                  },
              },
              mounted() {
                  this.renderIntro();
              },
              methods: {
                  renderIntro() {
                      let t = document.getElementById(this.$options.titleId),
                          e = t.closest(".content"),
                          a = "span:not(.welcome)";
                      if (t.offsetWidth > e.offsetWidth) {
                          let e = t.querySelector(".name");
                          t.insertBefore(document.createElement("br"), e), (a = "span:not(.welcome):not(.name)"), m.utils.addClass(e, "translate");
                      }
                      t.querySelectorAll(a).forEach((t) => {
                          this.titleMarginLeft += t.offsetWidth;
                      }),
                          setTimeout(() => {
                              this.showApp = !0;
                          }, 100),
                          this.$options.animationSteps.forEach((t, e) => {
                              setTimeout(() => {
                                  (this.activeAnimationStepIndex = e),
                                      e === this.$options.animationSteps.length - 1 &&
                                          setTimeout(() => {
                                              (this.introAnimationActive = !1), this.$emit("showFooter");
                                          }, 2e3);
                              }, t.timeout);
                          });
                  },
              },
          };
          a(8069);
          var d = (0, o.Z)(l, c, [], !1, null, "783babda", null);
          d.options.__file = "source/addins-vue/modal/onboarding/Welcome.vue";
          const p = d.exports;
          var u = function () {
              var t = this,
                  e = t.$createElement,
                  a = t._self._c || e;
              return a("div", { staticClass: "onboarding-intro", attrs: { "data-test": t.dataTest } }, [
                  a("div", { staticClass: "content" }, [
                      a("h2", { staticClass: "title" }, [t._v(t._s(t.title))]),
                      t._v(" "),
                      a("div", { key: t.activeDescription, staticClass: "subheading", class: { "subheading-active": "" !== t.activeBenefitDescription } }, [t._v(t._s(t.activeDescription))]),
                  ]),
                  t._v(" "),
                  a(
                      "div",
                      { staticClass: "benefit-icons" },
                      t._l(t.benefits, function (e, n) {
                          return a(
                              "div",
                              {
                                  key: n,
                                  staticClass: "benefit-icon",
                                  on: {
                                      mouseenter: function (a) {
                                          return t.onBenefitEnter(e);
                                      },
                                      mouseleave: t.onBenefitLeave,
                                  },
                              },
                              [a("div", { staticClass: "icon-svg", domProps: { innerHTML: t._s(e.svg) } }), t._v("\n\t\t\t" + t._s(e.name) + "\n\t\t")]
                          );
                      }),
                      0
                  ),
                  t._v(" "),
                  t.benefitList
                      ? a(
                            "ul",
                            { staticClass: "benefit-list" },
                            t._l(t.benefitList, function (e, n) {
                                return a(
                                    "li",
                                    {
                                        key: n,
                                        on: {
                                            mouseenter: function (a) {
                                                return t.onBenefitEnter(e);
                                            },
                                            mouseleave: t.onBenefitLeave,
                                        },
                                    },
                                    [a("span", { staticClass: "icon-container", domProps: { innerHTML: t._s(e.svg) } }), t._v(" "), a("span", { staticClass: "benefit-label" }, [t._v(t._s(e.name))])]
                                );
                            }),
                            0
                        )
                      : t._e(),
                  t._v(" "),
                  t.bottomLink
                      ? a("div", { staticClass: "bottom-link" }, [
                            a("a", { staticClass: "bottom-link-anchor", attrs: { href: t.bottomLink.url, target: "_blank" }, on: { click: t.onLearnMoreClick } }, [
                                t._v("\n\t\t\t" + t._s(t.bottomLink.label)),
                                t.bottomLink.svg ? a("span", { staticClass: "icon-container", domProps: { innerHTML: t._s(t.bottomLink.svg) } }) : t._e(),
                            ]),
                        ])
                      : t._e(),
              ]);
          };
          u._withStripped = !0;
          const v = {
              name: "Features",
              props: {
                  dataTest: { type: String, default: "" },
                  benefits: { type: Array, required: !0 },
                  benefitList: { type: Array, default: null },
                  bottomLink: { type: Object, default: null },
                  title: { type: String, default: "" },
                  description: { type: String, default: "" },
              },
              data: () => ({ activeBenefitDescription: "" }),
              computed: {
                  activeDescription() {
                      return this.activeBenefitDescription || this.description;
                  },
              },
              methods: {
                  onBenefitEnter(t) {
                      this.activeBenefitDescription = t.description;
                  },
                  onBenefitLeave() {
                      this.activeBenefitDescription = "";
                  },
                  onLearnMoreClick() {
                      m.sendEvent("Onboarding", this.title, this.bottomLink.label + " clicked");
                  },
              },
          };
          a(896);
          var h = (0, o.Z)(v, u, [], !1, null, "0a6c765c", null);
          h.options.__file = "source/addins-vue/modal/onboarding/Features.vue";
          const g = h.exports;
          var f = function () {
              var t = this;
              t.$createElement;
              return t._self._c, t._m(0);
          };
          f._withStripped = !0;
          var b = (0, o.Z)(
              { name: "PlusWelcome" },
              f,
              [
                  function () {
                      var t = this,
                          e = t.$createElement,
                          a = t._self._c || e;
                      return a("div", [a("div", { staticClass: "content plus" }, [a("h2", { staticClass: "title" }, [t._v("Welcome to Momentum Plus.")]), t._v(" "), a("div", { staticClass: "body" })])]);
                  },
              ],
              !1,
              null,
              "61746b99",
              null
          );
          b.options.__file = "source/addins-vue/modal/onboarding/PlusWelcome.vue";
          const x = b.exports;
          var w = function () {
              var t = this,
                  e = t.$createElement;
              return (t._self._c || e)("iframe", { ref: "iframe", attrs: { src: t.$options.iframeOrigin, "data-test-loaded": t.loaded, "data-test": "upgrade" } });
          };
          w._withStripped = !0;
          var y = a(6940),
              _ = a.n(y);
          const S = {
              iframeOrigin: m.globals.urlRootAccount + "ext-upgrade",
              name: "Upgrade",
              props: { transitionActive: { type: Boolean, default: !1 }, isActiveStep: { type: Boolean, default: !1 }, plans: { type: Object, default: () => ({}) }, sales: { type: Object, default: () => ({}) } },
              data: () => ({ loaded: !1, selectedPlanId: "" }),
              computed: {
                  planInfo() {
                      const t = this.selectedPlanId || Object.keys(this.plans).find((t) => this.plans[t].default),
                          e = this.plans[t],
                          a = this.sales && this.sales[t],
                          n = { frequency: e.frequency, price: e.friendlyPrice };
                      return a && (n.salePrice = a.friendlyPrice), n;
                  },
              },
              watch: {
                  transitionActive(t) {
                      this.loaded && this.$refs.iframe.contentWindow && this.$refs.iframe.contentWindow.postMessage({ transitioning: t }, m.globals.urlRootAccount);
                  },
                  isActiveStep(t) {
                      t ? (this.focusCardElement(), this.$e.on("modal:interceptSubStepCompletion", this.triggerSubmitFromManager)) : this.$e.off("modal:interceptSubStepCompletion", this.triggerSubmitFromManager);
                  },
              },
              created() {
                  (this.trimmedUrlRootAccount = m.globals.urlRootAccount.slice(0, -1)), this.$e.on("upgradeDataChanged", this.updateSelectedPlan), window.addEventListener("message", this.onMessage), this.updateSelectedPlan();
              },
              destroyed() {
                  window.removeEventListener("message", this.onMessage), this.$e.off("upgradeDataChanged", this.updateSelectedPlan);
              },
              methods: {
                  onMessage(t) {
                      t.origin &&
                          t.origin.startsWith(this.trimmedUrlRootAccount) &&
                          ("upgrade:submit" === t.data.type ? this.onStripeToken(t.data) : "upgrade:goBack" === t.data.type ? this.$emit("goBack") : "upgrade:loaded" === t.data.type && this.onIframeLoaded());
                  },
                  onStripeToken(t) {
                      const e = localStorage.getObject("upgrade-data");
                      this.subscribe(t.result.token.id, e.plan, "subscribe-existing", e.email, t.name, t.recaptchaResult);
                  },
                  subscribe(t, e, a, n, s, o) {
                      const i = (this.sales[e] && this.sales[e].id) || (this.plans[e] && this.plans[e].id);
                      $.ajax({
                          type: "POST",
                          url: m.globals.urlRootApi + "account/subscriptions",
                          dataType: "json",
                          contentType: "application/json",
                          data: JSON.stringify({ stripe_token: t, plan_id: i, action: a, email: n, name: s, recaptcha: o }),
                      })
                          .done((t) => {
                              m.sendEvent("Onboarding", "Upgrade success"),
                                  t.subscribedAccount ? localStorage.setItem("subscribedAccount", t.subscribedAccount) : localStorage.removeItem("unregistered"),
                                  this.$emit("nextStep", !0),
                                  this.sendMessage({ type: "upgrade:submitResponse", success: !0 });
                          })
                          .fail((t) => {
                              const e = t && t.response && t.response.status;
                              (t = (t && t.response && t.response.data && t.response.data.message) || !0), m.sendEvent("Onboarding", "Upgrade error"), this.sendMessage({ type: "upgrade:submitResponse", error: t, status: e });
                          });
                  },
                  updateSelectedPlan() {
                      const t = localStorage.getObject("upgrade-data"),
                          e = t && t.plan;
                      e && ((this.selectedPlanId = e), this.loaded && this.notifyIframePlanChange());
                  },
                  onIframeLoaded() {
                      (this.loaded = !0), this.sendMessage({ type: "upgrade:loadedResponse", css: _(), planInfo: this.planInfo });
                  },
                  triggerSubmitFromManager() {
                      this.sendMessage({ type: "upgrade:submitFromManager" });
                  },
                  focusCardElement() {
                      this.sendMessage({ type: "focus" });
                  },
                  notifyIframePlanChange() {
                      this.sendMessage({ planInfo: this.planInfo });
                  },
                  sendMessage(t) {
                      this.$refs.iframe && this.$refs.iframe.contentWindow && this.$refs.iframe.contentWindow.postMessage(t, m.globals.urlRootAccount);
                  },
              },
          };
          a(6356), a(6220);
          var z = (0, o.Z)(S, w, [], !1, null, "2dff5714", null);
          z.options.__file = "source/addins-vue/modal/upgrade/Upgrade.vue";
          const C = z.exports;
          var k = function () {
              var t = this,
                  e = t.$createElement,
                  a = t._self._c || e;
              return a("section", { staticClass: "upgrade-flow choose-email", attrs: { "data-test": "email" } }, [
                  a("header", [a("h2", [t.unregistered ? a("span", [t._v("Enter")]) : a("span", [t._v("Confirm")]), t._v(" your email")]), t._v(" "), a("div", { staticClass: "description" }, [t._v("Upgrade to Plus")])]),
                  t._v(" "),
                  a("div", { staticClass: "form-body" }, [
                      a("div", { staticClass: "email-row", class: { error: t.errorMessage } }, [
                          t.unregistered
                              ? t._e()
                              : a("div", { staticClass: "label-wrapper" }, [
                                    a("label", [t._v("Email")]),
                                    a("a", { staticClass: "external-upgrade", attrs: { "data-test": "change-email", href: t.$options.externalUpgradeUrl } }, [t._v("Change")]),
                                ]),
                          t._v(" "),
                          a("input", {
                              directives: [{ name: "model", rawName: "v-model.trim", value: t.email, expression: "email", modifiers: { trim: !0 } }],
                              ref: "input",
                              staticClass: "input form-field is-empty input u--no-margin-bottom",
                              attrs: { name: "email", required: "", disabled: !t.unregistered, "data-test": "email-input" },
                              domProps: { value: t.email },
                              on: {
                                  keyup: function (e) {
                                      return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.onEnter(e);
                                  },
                                  input: function (e) {
                                      e.target.composing || (t.email = e.target.value.trim());
                                  },
                                  blur: function (e) {
                                      return t.$forceUpdate();
                                  },
                              },
                          }),
                      ]),
                  ]),
                  t._v(" "),
                  a("footer", [t.errorMessage ? a("div", { staticClass: "form-message error", attrs: { "data-test": "email-error" } }, [t._v(t._s(t.errorMessage))]) : t._e()]),
              ]);
          };
          k._withStripped = !0;
          const M = {
              name: "Email",
              externalUpgradeUrl: m.globals.urlRootAccount + "upgrade",
              data: () => ({ email: localStorage.getItem("email") || "", errorMessage: "" }),
              created() {
                  this.$e.on("modal:interceptSubStepCompletion", this.validateEmail), (this.unregistered = localStorage.getItem("unregistered"));
              },
              mounted() {
                  this.unregistered && this.$refs.input.focus();
              },
              destroyed() {
                  this.$e.off("modal:interceptSubStepCompletion", this.validateEmail);
              },
              methods: {
                  validateEmail() {
                      (this.errorMessage = ""),
                          this.email
                              ? m.utils.validateEmail(this.email)
                                  ? (this.saveEmail(), this.$e.trigger("modal:subStepCompletionIntercepted"))
                                  : (this.errorMessage = "Please enter a valid email.")
                              : (this.errorMessage = "Please enter an email.");
                  },
                  saveEmail() {
                      let t = localStorage.getObject("upgrade-data") || {};
                      (t.email = this.email), localStorage.setObject("upgrade-data", t), localStorage.getItem("email") || localStorage.setItem("email", this.email);
                  },
                  onEnter() {
                      this.$emit("nextStep");
                  },
              },
          };
          a(1733);
          var T = (0, o.Z)(M, k, [], !1, null, "4756e094", null);
          T.options.__file = "source/addins-vue/modal/upgrade/Email.vue";
          const O = T.exports;
          var P = function () {
              var t = this,
                  e = t.$createElement,
                  a = t._self._c || e;
              return a("section", { staticClass: "upgrade-flow choose-plan", attrs: { "data-test": "choose-plan" } }, [
                  a("div", { staticClass: "back icon-wrapper", attrs: { "data-test": "back" }, on: { click: t.goBack } }, [
                      a("svg", { staticClass: "icon icon-back", attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 492 492" } }, [
                          a("path", {
                              attrs: {
                                  d:
                                      "M198.608 246.104L382.664 62.04c5.068-5.056 7.856-11.816 7.856-19.024 0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12C361.476 2.792 354.712 0 347.504 0s-13.964 2.792-19.028 7.864L109.328 227.008c-5.084 5.08-7.868 11.868-7.848 19.084-.02 7.248 2.76 14.028 7.848 19.112l218.944 218.932c5.064 5.072 11.82 7.864 19.032 7.864 7.208 0 13.964-2.792 19.032-7.864l16.124-16.12c10.492-10.492 10.492-27.572 0-38.06L198.608 246.104z",
                              },
                          }),
                      ]),
                      t._v(" "),
                      a("span", { staticClass: "icon-label" }, [t._v("Account")]),
                  ]),
                  t._v(" "),
                  t._m(0),
                  t._v(" "),
                  a("div", { staticClass: "form-body" }, [
                      a(
                          "ul",
                          { staticClass: "plan-list" },
                          t._l(t.plans, function (e, n) {
                              return a(
                                  "li",
                                  {
                                      key: n,
                                      staticClass: "plan-list-item",
                                      class: { active: t.selectedPlanKey === n, "has-sale": t.getSale(n) },
                                      attrs: { tabindex: "0", "data-test": e.frequency.toLowerCase() + "-plan" },
                                      on: {
                                          click: function (e) {
                                              t.selectedPlanKey = n;
                                          },
                                      },
                                  },
                                  [
                                      a("div", { staticClass: "plan-list-radio-wrapper" }, [
                                          a("i", { staticClass: "radio" }, [
                                              a("svg", { staticClass: "icon-check", attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 405.272 405.272" } }, [
                                                  a("path", {
                                                      attrs: {
                                                          d:
                                                              "M393.401 124.425L179.603 338.208c-15.832 15.835-41.514 15.835-57.361 0L11.878 227.836c-15.838-15.835-15.838-41.52 0-57.358 15.841-15.841 41.521-15.841 57.355-.006l81.698 81.699L336.037 67.064c15.841-15.841 41.523-15.829 57.358 0 15.835 15.838 15.835 41.514.006 57.361z",
                                                      },
                                                  }),
                                              ]),
                                          ]),
                                      ]),
                                      t._v(" "),
                                      a("div", { staticClass: "choose-plan-text-wrapper" }, [
                                          a("div", { staticClass: "choose-plan-term" }, [
                                              a("span", { staticClass: "period" }, [t._v(t._s(e.overrideName || "Billed " + e.frequency))]),
                                              t._v(" "),
                                              t.getSale(n)
                                                  ? a("span", { staticClass: "choose-plan-badge" }, [t._v(t._s(t.getSale(n).badgeText))])
                                                  : e.badgeText
                                                  ? a("span", { staticClass: "choose-plan-badge" }, [t._v(t._s(e.badgeText))])
                                                  : t._e(),
                                          ]),
                                          t._v(" "),
                                          a("span", { staticClass: "choose-plan-price", class: { "u--strikeout": t.getSale(n) } }, [t._v("$" + t._s(e.friendlyPrice) + "/" + t._s(e.interval))]),
                                          t._v(" "),
                                          t.getSale(n) ? a("span", { staticClass: "choose-plan-price choose-plan-price-sale" }, [t._v(" $" + t._s(t.getSale(n).friendlyPrice) + "/" + t._s(e.interval))]) : t._e(),
                                          t._v(" "),
                                          e.friendlyMonthlyPrice
                                              ? a("span", { staticClass: "choose-plan-description" }, [
                                                    a("span", [t._v("Equal to ")]),
                                                    t._v(" "),
                                                    a("span", { staticClass: "monthly-price", class: { "u--strikeout": t.getSale(n) } }, [t._v("$" + t._s(e.friendlyMonthlyPrice))]),
                                                    t._v(" "),
                                                    t.getSale(n) ? a("span", { staticClass: "monthly-price" }, [t._v(" $" + t._s(t.getSale(n).friendlyMonthlyPrice))]) : t._e(),
                                                    a("span", [t._v("/month")]),
                                                ])
                                              : t._e(),
                                      ]),
                                  ]
                              );
                          }),
                          0
                      ),
                  ]),
              ]);
          };
          P._withStripped = !0;
          const I = {
              name: "ChoosePlan",
              props: { plans: { type: Object, default: () => ({}) }, sales: { type: Object, default: () => ({}) } },
              data: () => ({ selectedPlanKey: "" }),
              watch: {
                  plans: {
                      handler() {
                          const t = localStorage.getObject("upgrade-data") || {};
                          t.plan ? (this.selectedPlanKey = t.plan) : this.selectDefaultPlan();
                      },
                      immediate: !0,
                  },
              },
              created() {
                  this.$e.on("modal:interceptSubStepCompletion", this.savePlan);
              },
              destroyed() {
                  this.$e.off("modal:interceptSubStepCompletion", this.savePlan);
              },
              methods: {
                  savePlan() {
                      let t = localStorage.getObject("upgrade-data") || {};
                      (t.plan = this.selectedPlanKey), localStorage.setObject("upgrade-data", t), this.$e.trigger("upgradeDataChanged"), this.$e.trigger("modal:subStepCompletionIntercepted");
                  },
                  goBack() {
                      this.$emit("goBack");
                  },
                  selectDefaultPlan() {
                      const t = Object.keys(this.plans).find((t) => this.plans[t].default);
                      t && (this.selectedPlanKey = t), this.savePlan();
                  },
                  getSale(t) {
                      return this.sales[t];
                  },
              },
          };
          a(7743);
          var E = (0, o.Z)(
              I,
              P,
              [
                  function () {
                      var t = this,
                          e = t.$createElement,
                          a = t._self._c || e;
                      return a("header", [a("h2", [t._v("Choose a Plan")]), t._v(" "), a("div", { staticClass: "description" }, [t._v("Upgrade to Plus")])]);
                  },
              ],
              !1,
              null,
              "5464ffd0",
              null
          );
          E.options.__file = "source/addins-vue/modal/upgrade/ChoosePlan.vue";
          const L = E.exports;
          var A = function (t, e) {
              var a = e._c;
              return a("aside", { staticClass: "sidebar" }, [
                  a("div", { staticClass: "include-wrapper" }, [
                      a("h3", { staticClass: "include-heading" }, [e._v("Benefits of Plus")]),
                      e._v(" "),
                      a("ul", { staticClass: "includes" }, [
                          a("li", { staticClass: "include-item" }, [
                              a("span", { staticClass: "include-icon-wrapper" }, [
                                  a("svg", { staticClass: "include-icon", attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 -46 417.813 417" } }, [
                                      a("path", {
                                          attrs: {
                                              d:
                                                  "M159.988 318.582c-3.988 4.012-9.43 6.25-15.082 6.25s-11.094-2.238-15.082-6.25L9.375 198.113c-12.5-12.5-12.5-32.77 0-45.246l15.082-15.086c12.504-12.5 32.75-12.5 45.25 0l75.2 75.203L348.104 9.781c12.504-12.5 32.77-12.5 45.25 0l15.082 15.086c12.5 12.5 12.5 32.766 0 45.246zm0 0",
                                          },
                                      }),
                                  ]),
                              ]),
                              e._v(" "),
                              a("span", { staticClass: "include-item-label" }, [e._v("Unlock more widgets and features")]),
                          ]),
                          e._v(" "),
                          a("li", { staticClass: "include-item" }, [
                              a("span", { staticClass: "include-icon-wrapper" }, [
                                  a("svg", { staticClass: "include-icon", attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 -46 417.813 417" } }, [
                                      a("path", {
                                          attrs: {
                                              d:
                                                  "M159.988 318.582c-3.988 4.012-9.43 6.25-15.082 6.25s-11.094-2.238-15.082-6.25L9.375 198.113c-12.5-12.5-12.5-32.77 0-45.246l15.082-15.086c12.504-12.5 32.75-12.5 45.25 0l75.2 75.203L348.104 9.781c12.504-12.5 32.77-12.5 45.25 0l15.082 15.086c12.5 12.5 12.5 32.766 0 45.246zm0 0",
                                          },
                                      }),
                                  ]),
                              ]),
                              e._v(" "),
                              a("span", { staticClass: "include-item-label" }, [e._v("Connect third-party integrations")]),
                          ]),
                          e._v(" "),
                          a("li", { staticClass: "include-item" }, [
                              a("span", { staticClass: "include-icon-wrapper" }, [
                                  a("svg", { staticClass: "include-icon", attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 -46 417.813 417" } }, [
                                      a("path", {
                                          attrs: {
                                              d:
                                                  "M159.988 318.582c-3.988 4.012-9.43 6.25-15.082 6.25s-11.094-2.238-15.082-6.25L9.375 198.113c-12.5-12.5-12.5-32.77 0-45.246l15.082-15.086c12.504-12.5 32.75-12.5 45.25 0l75.2 75.203L348.104 9.781c12.504-12.5 32.77-12.5 45.25 0l15.082 15.086c12.5 12.5 12.5 32.766 0 45.246zm0 0",
                                          },
                                      }),
                                  ]),
                              ]),
                              e._v(" "),
                              a("span", { staticClass: "include-item-label" }, [e._v("Customize photos, quotes, and mantras")]),
                          ]),
                          e._v(" "),
                          a("li", { staticClass: "include-item" }, [
                              a("span", { staticClass: "include-icon-wrapper" }, [
                                  a("svg", { staticClass: "include-icon", attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 -46 417.813 417" } }, [
                                      a("path", {
                                          attrs: {
                                              d:
                                                  "M159.988 318.582c-3.988 4.012-9.43 6.25-15.082 6.25s-11.094-2.238-15.082-6.25L9.375 198.113c-12.5-12.5-12.5-32.77 0-45.246l15.082-15.086c12.504-12.5 32.75-12.5 45.25 0l75.2 75.203L348.104 9.781c12.504-12.5 32.77-12.5 45.25 0l15.082 15.086c12.5 12.5 12.5 32.766 0 45.246zm0 0",
                                          },
                                      }),
                                  ]),
                              ]),
                              e._v(" "),
                              a("span", { staticClass: "include-item-label" }, [e._v("Early access to new features")]),
                          ]),
                          e._v(" "),
                          a("li", { staticClass: "include-item" }, [
                              a("span", { staticClass: "include-icon-wrapper" }, [
                                  a("svg", { staticClass: "include-icon", attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 -46 417.813 417" } }, [
                                      a("path", {
                                          attrs: {
                                              d:
                                                  "M159.988 318.582c-3.988 4.012-9.43 6.25-15.082 6.25s-11.094-2.238-15.082-6.25L9.375 198.113c-12.5-12.5-12.5-32.77 0-45.246l15.082-15.086c12.504-12.5 32.75-12.5 45.25 0l75.2 75.203L348.104 9.781c12.504-12.5 32.77-12.5 45.25 0l15.082 15.086c12.5 12.5 12.5 32.766 0 45.246zm0 0",
                                          },
                                      }),
                                  ]),
                              ]),
                              e._v(" "),
                              a("span", { staticClass: "include-item-label" }, [e._v("Priority support")]),
                          ]),
                      ]),
                  ]),
                  e._v(" "),
                  e._m(0),
              ]);
          };
          A._withStripped = !0;
          a(7195);
          var B = (0, o.Z)(
              { name: "Sidebar" },
              A,
              [
                  function (t, e) {
                      var a = e._c;
                      return a("div", { staticClass: "social-proof" }, [
                          a("div", { staticClass: "social-quote" }, [
                              a("span", { staticClass: "social-qmark social-qmark-open" }, [e._v("“")]),
                              e._v(
                                  "\n\t\t\tMomentum has brought me so much joy and inspiration in the past few years. So happy to support and get access to awesome features like: custom photos, countdown timers, Todo integrations and more!\n\t\t\t"
                              ),
                              a("span", { staticClass: "social-qmark social-qmark-close" }, [e._v("”")]),
                          ]),
                          e._v(" "),
                          a("div", { staticClass: "social-source" }, [
                              a("img", { staticClass: "social-avatar", attrs: { src: "/img/upgrade-izzy.webp" } }),
                              e._v(" "),
                              a("span", { staticClass: "social-name" }, [e._v("Izzy Piyale-Sheard")]),
                          ]),
                      ]);
                  },
              ],
              !0,
              null,
              "f913af58",
              null
          );
          B.options.__file = "source/addins-vue/modal/upgrade/Sidebar.vue";
          const U = B.exports;
          var H = function () {
              var t = this,
                  e = t.$createElement,
                  a = t._self._c || e;
              return a("div", { staticClass: "thanks", attrs: { "data-test": "thanks" } }, [
                  a("div", { staticClass: "icon-check-wrapper" }, [
                      a("svg", { staticClass: "icon icon-check", attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" } }, [
                          a("path", {
                              attrs: {
                                  d:
                                      "M437.019 74.98C388.667 26.629 324.38 0 256 0 187.619 0 123.332 26.629 74.98 74.98 26.629 123.332 0 187.62 0 256s26.629 132.667 74.98 181.019C123.332 485.371 187.62 512 256 512s132.667-26.629 181.019-74.98C485.371 388.667 512 324.38 512 256s-26.629-132.667-74.981-181.02zm-58.713 120.093L235.241 338.139a14.953 14.953 0 0 1-10.606 4.393 14.953 14.953 0 0 1-10.607-4.393l-80.334-80.333c-5.858-5.857-5.858-15.354 0-21.213 5.857-5.858 15.355-5.858 21.213 0l69.728 69.727 132.458-132.46c5.857-5.858 15.355-5.858 21.213 0 5.858 5.858 5.858 15.355 0 21.213z",
                                  fill: "#0fc100",
                              },
                          }),
                      ]),
                  ]),
                  t._v(" "),
                  t._m(0),
                  t._v(" "),
                  t.subscribedAccount
                      ? a("div", [
                            a("p", [t._v("Please log in to "), a("b", [t._v(t._s(t.subscribedAccount))]), a("br"), t._v(" to enjoy your new Plus features.")]),
                            t._v(" "),
                            a("button", { staticClass: "button", on: { click: t.login } }, [t._v("Log In")]),
                        ])
                      : a("div", [a("p", [t._v("Refresh the page to enjoy your new Plus features.")]), t._v(" "), a("button", { staticClass: "button", attrs: { "data-test": "reload-btn" }, on: { click: t.refresh } }, [t._v("Refresh")])]),
              ]);
          };
          H._withStripped = !0;
          const N = {
              name: "Thanks",
              created() {
                  (this.subscribedAccount = localStorage.getItem("subscribedAccount")),
                      localStorage.removeItem("subscribedAccount"),
                      this.$e.on("modal:interceptSubStepCompletion", this.refresh),
                      document.activeElement.blur(),
                      localStorage.removeItem("upgrade-data");
              },
              destroyed() {
                  this.$e.off("modal:interceptSubStepCompletion", this.refresh);
              },
              methods: {
                  refresh() {
                      m.sendEvent("Onboarding", "Refresh from Thanks page"), location.reload();
                  },
                  login() {
                      m.sendEvent("Onboarding", "Login to correct account"), m.commandManager.execute("account.login");
                  },
              },
          };
          a(3082);
          var V = (0, o.Z)(
              N,
              H,
              [
                  function () {
                      var t = this,
                          e = t.$createElement,
                          a = t._self._c || e;
                      return a("h3", [t._v("You are now subscribed to Momentum Plus."), a("br"), t._v("Thank you!")]);
                  },
              ],
              !1,
              null,
              "18f29881",
              null
          );
          V.options.__file = "source/addins-vue/modal/upgrade/Thanks.vue";
          const R = V.exports;
          var D = function () {
              var t = this,
                  e = t.$createElement,
                  a = t._self._c || e;
              return a(
                  "upsell",
                  {
                      attrs: { type: "pomodoro", "source-event": "centerNavPomodoro" },
                      scopedSlots: t._u([
                          {
                              key: "title",
                              fn: function () {
                                  return [t._v("Pomodoro Timer")];
                              },
                              proxy: !0,
                          },
                          {
                              key: "description",
                              fn: function () {
                                  return [t._v("Organize your day into focused work and break intervals.")];
                              },
                              proxy: !0,
                          },
                      ]),
                  },
                  [
                      t._v(" "),
                      t._v(" "),
                      [
                          a("div", { staticClass: "demo" }, [a("div", { staticClass: "timer" }, [t._v("25:00")]), t._v(" "), a("div", { staticClass: "greeting" }, [t._v("Time to focus.")])]),
                          t._v(" "),
                          a("ul", { staticClass: "features" }, [
                              a(
                                  "li",
                                  [
                                      a(
                                          "feature",
                                          {
                                              scopedSlots: t._u([
                                                  {
                                                      key: "tooltip",
                                                      fn: function () {
                                                          return [t._v("No need for a physical timer or a separate app. Use the Pomodoro technique directly within Momentum.")];
                                                      },
                                                      proxy: !0,
                                                  },
                                              ]),
                                          },
                                          [t._v("\n\t\t\t\t\tAll in one place\n\t\t\t\t\t")]
                                      ),
                                  ],
                                  1
                              ),
                              t._v(" "),
                              a(
                                  "li",
                                  [
                                      a(
                                          "feature",
                                          {
                                              scopedSlots: t._u([
                                                  {
                                                      key: "tooltip",
                                                      fn: function () {
                                                          return [
                                                              t._v("Easily change the timer intervals to fit your work style — for example, "),
                                                              a("strong", [t._v("50 minutes of work")]),
                                                              t._v(" followed by a "),
                                                              a("strong", [t._v("15 minute break")]),
                                                              t._v("."),
                                                          ];
                                                      },
                                                      proxy: !0,
                                                  },
                                              ]),
                                          },
                                          [t._v("\n\t\t\t\t\tCustomizable timers\n\t\t\t\t\t")]
                                      ),
                                  ],
                                  1
                              ),
                              t._v(" "),
                              a(
                                  "li",
                                  [
                                      a(
                                          "feature",
                                          {
                                              scopedSlots: t._u([
                                                  {
                                                      key: "tooltip",
                                                      fn: function () {
                                                          return [
                                                              t._v("Track how many Pomodoro sessions you’ve completed "),
                                                              a("strong", [t._v("today")]),
                                                              t._v(", "),
                                                              a("strong", [t._v("this week")]),
                                                              t._v(", and "),
                                                              a("strong", [t._v("all time")]),
                                                              t._v("."),
                                                          ];
                                                      },
                                                      proxy: !0,
                                                  },
                                              ]),
                                          },
                                          [t._v("\n\t\t\t\t\tPomodoro history\n\t\t\t\t\t")]
                                      ),
                                  ],
                                  1
                              ),
                              t._v(" "),
                              a(
                                  "li",
                                  [
                                      a(
                                          "feature",
                                          {
                                              scopedSlots: t._u([
                                                  {
                                                      key: "tooltip",
                                                      fn: function () {
                                                          return [t._v("Choose between updating your timer every second or showing only the minutes for a calmer view.")];
                                                      },
                                                      proxy: !0,
                                                  },
                                              ]),
                                          },
                                          [t._v("\n\t\t\t\t\tTime visualizations\n\t\t\t\t\t")]
                                      ),
                                  ],
                                  1
                              ),
                              t._v(" "),
                              a(
                                  "li",
                                  [
                                      a(
                                          "feature",
                                          {
                                              scopedSlots: t._u([
                                                  {
                                                      key: "tooltip",
                                                      fn: function () {
                                                          return [t._v("Automatically shift between your "), a("strong", [t._v("Focus")]), t._v(" and "), a("strong", [t._v("Break")]), t._v(" intervals.")];
                                                      },
                                                      proxy: !0,
                                                  },
                                              ]),
                                          },
                                          [t._v("\n\t\t\t\t\tAutoplay\n\t\t\t\t\t")]
                                      ),
                                  ],
                                  1
                              ),
                              t._v(" "),
                              a(
                                  "li",
                                  [
                                      a(
                                          "feature",
                                          {
                                              scopedSlots: t._u([
                                                  {
                                                      key: "tooltip",
                                                      fn: function () {
                                                          return [t._v("Our friendly notification sound lets you know when it’s time to get back to work or start your next break.")];
                                                      },
                                                      proxy: !0,
                                                  },
                                              ]),
                                          },
                                          [t._v("\n\t\t\t\t\tFocus and break sounds\n\t\t\t\t\t")]
                                      ),
                                  ],
                                  1
                              ),
                          ]),
                      ],
                  ],
                  2
              );
          };
          D._withStripped = !0;
          var F = function () {
              var t = this,
                  e = t.$createElement,
                  a = t._self._c || e;
              return a("div", { staticClass: "app-container overlay", attrs: { "data-test": "upsell" } }, [
                  a(
                      "div",
                      {
                          directives: [{ name: "click-outside", rawName: "v-click-outside", value: t.close, expression: "close" }],
                          staticClass: "app onboarding new-upsell",
                          class: t.type + "-upsell",
                          attrs: { "data-test": t.type + "-upsell" },
                      },
                      [
                          a("header", { staticClass: "header" }, [
                              a("div", { staticClass: "header-left", attrs: { "data-test": "back" }, on: { click: t.back } }, [
                                  a("span", { staticClass: "icon-wrapper back" }, [
                                      a("svg", { staticClass: "icon icon-back", attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 55.753 55.753" } }, [
                                          a("path", {
                                              attrs: {
                                                  d:
                                                      "M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 1 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z",
                                              },
                                          }),
                                      ]),
                                  ]),
                              ]),
                              t._v(" "),
                              a("div", { staticClass: "header-title" }, [t._v("Available on Momentum Plus")]),
                              t._v(" "),
                              a("div", { staticClass: "header-right" }, [
                                  a("span", { staticClass: "icon-wrapper hide", attrs: { "data-test": "upsell-close" }, on: { click: t.close } }, [
                                      a("svg", { staticClass: "icon icon-hide", attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 212.982 212.982" } }, [
                                          a("path", {
                                              attrs: {
                                                  d:
                                                      "M131.804 106.491l75.936-75.936c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.491 81.18 30.554 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.989 6.99-6.989 18.323 0 25.312l75.937 75.936-75.937 75.937c-6.989 6.99-6.989 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0l75.937-75.937 75.937 75.937c6.989 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.322 0-25.312l-75.936-75.936z",
                                              },
                                          }),
                                      ]),
                                  ]),
                              ]),
                          ]),
                          t._v(" "),
                          a(
                              "main",
                              { staticClass: "body" },
                              [
                                  a("div", { staticClass: "body-title" }, [
                                      a("div", { staticClass: "title", attrs: { "data-test": "upsell-title" } }, [t._t("title")], 2),
                                      t._v(" "),
                                      a("div", { staticClass: "description", attrs: { "data-test": "upsell-description" } }, [t._t("description")], 2),
                                  ]),
                                  t._v(" "),
                                  t._t("body"),
                                  t._v(" "),
                                  t._t("default"),
                              ],
                              2
                          ),
                          t._v(" "),
                          a("footer", { staticClass: "footer" }, [
                              a("a", { staticClass: "button", attrs: { "data-test": "upsell-cta" }, on: { click: t.upgrade } }, [t._v("Upgrade to Plus")]),
                              t._v(" "),
                              a("div", { staticClass: "button-desc" }, [t._v("\n\t\t\t\t30-day money back guarantee.\n\t\t\t")]),
                          ]),
                      ]
                  ),
              ]);
          };
          F._withStripped = !0;
          const j = {
              name: "Upsell",
              directives: { ClickOutside: a(8094).Z },
              props: { type: { type: String, default: "General" }, sourceEvent: { type: String, default: "" } },
              mounted() {
                  m.sendEvent("Upsell show", this.sourceEvent, this.type), m.commandManager.beforeExecute("upsell.upgrade");
              },
              methods: {
                  back() {
                      this.close(), m.cmd("modal.open", "PLUS_GATE");
                  },
                  close(t) {
                      if (t) {
                          const e = document.querySelector(".dev-panel");
                          if (e && e.contains(t.target)) return;
                      }
                      m.trigger("modal:close");
                  },
                  upgrade() {
                      this.close(), m.cmd("upsell.upgrade", null, { skipPlusFeatures: !0 }), m.sendEvent("Upsell click", this.sourceEvent, this.type);
                  },
              },
          };
          a(8292);
          var Z = (0, o.Z)(j, F, [], !1, null, "030ea954", null);
          Z.options.__file = "source/addins-vue/modal/upsell/components/UpsellModal.vue";
          const Y = Z.exports;
          var W = function () {
              var t = this,
                  e = t.$createElement,
                  a = t._self._c || e;
              return a(
                  "div",
                  { staticClass: "feature" },
                  [
                      a(
                          "div",
                          {
                              staticClass: "name",
                              on: {
                                  mouseover: function (e) {
                                      t.showTooltip = !0;
                                  },
                                  mouseleave: function (e) {
                                      t.showTooltip = !1;
                                  },
                              },
                          },
                          [t._t("default")],
                          2
                      ),
                      t._v(" "),
                      a("transition", { attrs: { name: "slide-fade" } }, [t.showTooltip && t.$slots.tooltip ? a("tooltip", [t._t("tooltip")], 2) : t._e()], 1),
                  ],
                  1
              );
          };
          W._withStripped = !0;
          const q = { name: "UpsellFeature", components: { Tooltip: () => a.e(919).then(a.bind(a, 2919)) }, data: () => ({ showTooltip: !1 }) };
          a(2865);
          var G = (0, o.Z)(q, W, [], !1, null, "3476490a", null);
          G.options.__file = "source/addins-vue/modal/upsell/components/Feature.vue";
          const K = G.exports,
              X = { name: "PomodoroUpsell", components: { Upsell: Y, Feature: K } };
          a(6206);
          var J = (0, o.Z)(X, D, [], !1, null, "2a231b83", null);
          J.options.__file = "source/addins-vue/modal/upsell/PomodoroUpsell.vue";
          const Q = J.exports;
          var tt = function () {
              var t = this,
                  e = t.$createElement,
                  a = t._self._c || e;
              return a("upsell", {
                  attrs: { type: "background", "source-event": "backgroundInfoSkip" },
                  scopedSlots: t._u([
                      {
                          key: "title",
                          fn: function () {
                              return [t._v("Custom Photos")];
                          },
                          proxy: !0,
                      },
                      {
                          key: "description",
                          fn: function () {
                              return [t._v("See the photos that inspire you most.")];
                          },
                          proxy: !0,
                      },
                      {
                          key: "body",
                          fn: function () {
                              return [
                                  a("div", { staticClass: "demo" }),
                                  t._v(" "),
                                  a("ul", { staticClass: "features" }, [
                                      a(
                                          "li",
                                          [
                                              a(
                                                  "feature",
                                                  {
                                                      scopedSlots: t._u([
                                                          {
                                                              key: "tooltip",
                                                              fn: function () {
                                                                  return [t._v("Make Momentum your own by adding your favorite photos.")];
                                                              },
                                                              proxy: !0,
                                                          },
                                                      ]),
                                                  },
                                                  [
                                                      a("svg", { staticClass: "feature-icon", attrs: { viewBox: "0 0 36 36", xmlns: "http://www.w3.org/2000/svg" } }, [
                                                          a("g", { attrs: { id: "BG" } }, [
                                                              a("g", [
                                                                  a("path", {
                                                                      attrs: {
                                                                          d: "m34.904 20.355c-3.782-5.791-3.38-11.727-5.203-14.518s-7.256-7.603-20.093.782-9.572 17.5-7.566 20.569c9.388 14.372 39.561 3.423 32.862-6.833z",
                                                                          fill: "#efefef",
                                                                      },
                                                                  }),
                                                              ]),
                                                          ]),
                                                          a("g", { attrs: { id: "Effect" } }, [
                                                              a("g", [
                                                                  a("g", [a("path", { attrs: { d: "m3.556 2.967h1v2h-1z", fill: "#a4afc1", transform: "matrix(.707 -.707 .707 .707 -1.617 4.029)" } })]),
                                                                  a("g", [a("path", { attrs: { d: "m2.879 7.533h2v1h-2z", fill: "#a4afc1", transform: "matrix(.707 -.707 .707 .707 -4.544 5.096)" } })]),
                                                                  a("g", [a("path", { attrs: { d: "m6.944 3.467h2v1h-2z", fill: "#a4afc1", transform: "matrix(.707 -.707 .707 .707 -.478 6.779)" } })]),
                                                              ]),
                                                              a("g", [
                                                                  a("path", {
                                                                      attrs: {
                                                                          d: "m32.25 30.25c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2c-.275 0-.5.225-.5.5s.225.5.5.5.5-.225.5-.5-.225-.5-.5-.5z",
                                                                          fill: "#a4afc1",
                                                                      },
                                                                  }),
                                                              ]),
                                                          ]),
                                                          a("g", { staticClass: "color" }, [
                                                              a("g", [
                                                                  a("g", [
                                                                      a("g", [
                                                                          a("path", {
                                                                              attrs: {
                                                                                  d: "m19.25 6.75h-6.49-4.01c-1.105 0-2 .895-2 2v8.01 6.49c0 1.105.895 2 2 2h6.49 4.01c1.105 0 2-.895 2-2v-8.01-6.49c0-1.105-.895-2-2-2z",
                                                                                  fill: "#2fdf84",
                                                                              },
                                                                          }),
                                                                      ]),
                                                                      a("g", [a("circle", { attrs: { cx: "11", cy: "13", fill: "#f3f3f1", r: "1.25" } })]),
                                                                      a("g", [
                                                                          a("path", {
                                                                              attrs: {
                                                                                  d:
                                                                                      "m18.71 15.21c-.39-.39-1.03-.39-1.42 0l-5.29 5.29-1.79-1.79c-.39-.39-1.03-.39-1.42 0l-2.04 2.04v2.5c0 1.105.895 2 2 2h6.49 4.01c1.105 0 2-.895 2-2v-5.25l-2-2.25z",
                                                                                  fill: "#2fdf84",
                                                                              },
                                                                          }),
                                                                      ]),
                                                                  ]),
                                                                  a("g", [
                                                                      a("g", [
                                                                          a("path", {
                                                                              attrs: { d: "m9 23.25v-6.49-8.01c0-1.105.895-2 2-2h-2.25c-1.105 0-2 .895-2 2v8.01 6.49c0 1.105.895 2 2 2h2.25c-1.105 0-2-.895-2-2z", fill: "#00b871" },
                                                                          }),
                                                                      ]),
                                                                      a("g", [
                                                                          a("g", [a("path", { attrs: { d: "m14.331 20.669 4.919-4.919-.54-.54c-.391-.391-1.03-.391-1.42 0l-4.54 4.54.919.919c.183.183.479.183.662 0z", fill: "#00b871" } })]),
                                                                          a("g", [
                                                                              a("path", {
                                                                                  attrs: { d: "m8.75 23.75v-2.5l2-2-.54-.54c-.391-.391-1.03-.391-1.42 0l-2.04 2.04v2.5c0 1.105.895 2 2 2h.69c-.42-.367-.69-.899-.69-1.5z", fill: "#00b871" },
                                                                              }),
                                                                          ]),
                                                                      ]),
                                                                  ]),
                                                              ]),
                                                              a("g", [a("circle", { attrs: { cx: "11", cy: "13", fill: "#f3f3f1", r: "1.25" } })]),
                                                              a("g", [
                                                                  a("g", [a("circle", { attrs: { cx: "23.5", cy: "23.5", fill: "#f3f3f1", r: "5.75" } })]),
                                                                  a("g", [
                                                                      a("path", {
                                                                          attrs: {
                                                                              d:
                                                                                  "m20 23.5c0-2.79 1.988-5.115 4.625-5.638-.364-.072-.74-.112-1.125-.112-3.176 0-5.75 2.574-5.75 5.75s2.574 5.75 5.75 5.75c.385 0 .761-.039 1.125-.112-2.637-.523-4.625-2.848-4.625-5.638z",
                                                                              fill: "#d5dbe1",
                                                                          },
                                                                      }),
                                                                  ]),
                                                              ]),
                                                          ]),
                                                          a("g", { attrs: { id: "regular_1.5" } }, [
                                                              a("g", [
                                                                  a("path", {
                                                                      attrs: {
                                                                          d: "m23.5 30c-3.584 0-6.5-2.916-6.5-6.5s2.916-6.5 6.5-6.5 6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5zm0-11.5c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z",
                                                                      },
                                                                  }),
                                                              ]),
                                                              a("g", [a("path", { attrs: { d: "m22.75 20.75h1.5v5.5h-1.5z" } })]),
                                                              a("g", [a("path", { attrs: { d: "m20.75 22.75h5.5v1.5h-5.5z" } })]),
                                                              a("g", [
                                                                  a("path", {
                                                                      attrs: {
                                                                          d:
                                                                              "m15.24 26h-6.49c-1.517 0-2.75-1.233-2.75-2.75v-14.5c0-1.517 1.233-2.75 2.75-2.75h10.5c1.517 0 2.75 1.233 2.75 2.75v6.49h-1.5v-6.49c0-.689-.561-1.25-1.25-1.25h-10.5c-.689 0-1.25.561-1.25 1.25v14.5c0 .689.561 1.25 1.25 1.25h6.49z",
                                                                      },
                                                                  }),
                                                              ]),
                                                              a("g", [a("path", { attrs: { d: "m11 15c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-2.5c-.275 0-.5.224-.5.5s.225.5.5.5.5-.224.5-.5-.225-.5-.5-.5z" } })]),
                                                              a("g", [
                                                                  a("path", {
                                                                      attrs: {
                                                                          d:
                                                                              "m7.28 21.28-1.06-1.06 2.04-2.04c.66-.66 1.82-.661 2.48 0l1.26 1.259 4.76-4.76c.66-.66 1.82-.661 2.48 0l.54.54-1.06 1.061-.54-.54c-.127-.127-.232-.126-.359 0l-5.29 5.291c-.293.293-.768.293-1.061 0l-1.79-1.79c-.127-.127-.232-.127-.359 0z",
                                                                      },
                                                                  }),
                                                              ]),
                                                          ]),
                                                      ]),
                                                      t._v(" "),
                                                      a("div", { staticClass: "feature-title" }, [t._v("Add your own photos")]),
                                                  ]
                                              ),
                                          ],
                                          1
                                      ),
                                      t._v(" "),
                                      a(
                                          "li",
                                          [
                                              a(
                                                  "feature",
                                                  {
                                                      scopedSlots: t._u([
                                                          {
                                                              key: "tooltip",
                                                              fn: function () {
                                                                  return [t._v("Get a new random background photo with one click.")];
                                                              },
                                                              proxy: !0,
                                                          },
                                                      ]),
                                                  },
                                                  [
                                                      a("svg", { staticClass: "feature-icon", attrs: { viewBox: "0 0 36 36", xmlns: "http://www.w3.org/2000/svg" } }, [
                                                          a("g", { attrs: { id: "bg" } }, [
                                                              a("g", [
                                                                  a("path", {
                                                                      attrs: {
                                                                          d: "m8.114 5.647c-1.805 6.677-6.504 10.327-7.374 13.545s-.847 10.475 13.955 14.477 19.432-4.501 20.388-8.041c4.481-16.571-23.772-31.806-26.969-19.981z",
                                                                          fill: "#efefef",
                                                                      },
                                                                  }),
                                                              ]),
                                                          ]),
                                                          a("g", { staticClass: "color" }, [
                                                              a("g", [
                                                                  a("path", {
                                                                      attrs: {
                                                                          d:
                                                                              "m22.75 18c0 .2-.06.4-.17.55l-5 7.25c-.18.27-.48.45-.83.45h-2.5c-.55 0-1-.45-1-1 0-.2.06-.4.17-.55l4.63-6.7-4.63-6.7c-.11-.15-.17-.35-.17-.55 0-.55.45-1 1-1h2.5c.35 0 .65.18.83.45l5 7.25c.11.15.17.35.17.55z",
                                                                          fill: "#2fdf84",
                                                                      },
                                                                  }),
                                                              ]),
                                                              a("g", [
                                                                  a("path", {
                                                                      attrs: {
                                                                          d:
                                                                              "m15.5 25.25c0-.2.06-.4.17-.55l4.149-6.004c.289-.419.289-.973 0-1.392l-4.149-6.004c-.11-.15-.17-.35-.17-.55 0-.55.45-1 1-1h-2.25c-.55 0-1 .45-1 1 0 .2.06.4.17.55l4.63 6.7-4.63 6.7c-.11.15-.17.35-.17.55 0 .55.45 1 1 1h2.25c-.55 0-1-.45-1-1z",
                                                                          fill: "#00b871",
                                                                      },
                                                                  }),
                                                              ]),
                                                              a("g", [
                                                                  a("path", {
                                                                      attrs: {
                                                                          d: "m19.5 31.5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2c-.276 0-.5.225-.5.5s.224.5.5.5.5-.225.5-.5-.224-.5-.5-.5z",
                                                                          fill: "#a4afc1",
                                                                      },
                                                                  }),
                                                              ]),
                                                              a("g", [
                                                                  a("g", [a("path", { attrs: { d: "m12.033 4.306h2v1h-2z", fill: "#a4afc1", transform: "matrix(.707 -.707 .707 .707 .419 10.623)" } })]),
                                                                  a("g", [a("path", { attrs: { d: "m7.967 8.371h2v1h-2z", fill: "#a4afc1", transform: "matrix(.707 -.707 .707 .707 -3.646 8.939)" } })]),
                                                                  a("g", [a("path", { attrs: { d: "m8.467 3.629h1v2h-1z", fill: "#a4afc1", transform: "matrix(.707 -.707 .707 .707 -.646 7.698)" } })]),
                                                              ]),
                                                          ]),
                                                          a("g", { attrs: { id: "regular" } }, [
                                                              a("g", [
                                                                  a("path", {
                                                                      attrs: {
                                                                          d:
                                                                              "m16.75 27h-2.5c-.965 0-1.75-.785-1.75-1.75 0-.364.112-.717.316-.994l4.322-6.256-4.335-6.273c-.19-.26-.303-.612-.303-.977 0-.965.785-1.75 1.75-1.75h2.5c.583 0 1.127.293 1.454.784l4.993 7.24c.191.259.303.612.303.976s-.112.717-.316.994l-4.987 7.231c-.32.482-.864.775-1.447.775zm-2.5-16.5c-.136 0-.25.114-.25.25 0 .053.017.095.024.105l4.643 6.718c.177.257.177.597 0 .854l-4.63 6.7c-.02.028-.037.07-.037.123 0 .136.114.25.25.25h2.5c.112 0 .177-.072.206-.116l5.007-7.26c.02-.029.037-.071.037-.124s-.017-.095-.024-.105l-5.013-7.269c-.036-.054-.101-.126-.213-.126z",
                                                                      },
                                                                  }),
                                                              ]),
                                                          ]),
                                                      ]),
                                                      t._v(" "),
                                                      a("div", { staticClass: "feature-title" }, [t._v("Skip photo")]),
                                                  ]
                                              ),
                                          ],
                                          1
                                      ),
                                      t._v(" "),
                                      a(
                                          "li",
                                          [
                                              a(
                                                  "feature",
                                                  {
                                                      scopedSlots: t._u([
                                                          {
                                                              key: "tooltip",
                                                              fn: function () {
                                                                  return [t._v("Have the freedom to change your photo throughout the day.")];
                                                              },
                                                              proxy: !0,
                                                          },
                                                      ]),
                                                  },
                                                  [
                                                      a("svg", { staticClass: "feature-icon", attrs: { viewBox: "0 0 36 36", xmlns: "http://www.w3.org/2000/svg" } }, [
                                                          a("g", { attrs: { id: "BG" } }, [
                                                              a("g", [
                                                                  a("path", {
                                                                      attrs: {
                                                                          d: "m27.417 3.914c-6.915.129-11.732-3.365-15.064-3.302s-10.296 2.109-10.009 17.44 9.744 17.404 13.41 17.336c17.163-.321 23.911-31.703 11.663-31.474z",
                                                                          fill: "#efefef",
                                                                      },
                                                                  }),
                                                              ]),
                                                          ]),
                                                          a("g", { attrs: { id: "Effect" } }, [
                                                              a("g", [
                                                                  a("g", [a("path", { attrs: { d: "m5.606 3.955h1.999v.999h-1.999z", fill: "#a4afc1", transform: "matrix(.602 -.799 .799 .602 -.929 7.047)" } })]),
                                                                  a("g", [a("path", { attrs: { d: "m2.142 8.545h1.999v.999h-1.999z", fill: "#a4afc1", transform: "matrix(.602 -.799 .799 .602 -5.972 6.108)" } })]),
                                                                  a("g", [a("path", { attrs: { d: "m2.054 3.843h1.001v2h-1.001z", fill: "#a4afc1", transform: "matrix(.603 -.798 .798 .603 -2.85 3.963)" } })]),
                                                              ]),
                                                              a("g", [
                                                                  a("path", {
                                                                      attrs: {
                                                                          d: "m6 27.335c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2c-.276 0-.5.225-.5.5s.224.5.5.5.5-.225.5-.5-.224-.5-.5-.5z",
                                                                          fill: "#a4afc1",
                                                                      },
                                                                  }),
                                                              ]),
                                                          ]),
                                                          a("g", { staticClass: "color" }, [
                                                              a("g", [
                                                                  a("path", {
                                                                      attrs: {
                                                                          d:
                                                                              "m26 10.2v10.6c0 1.21-.99 2.2-2.2 2.2h-15.6c-.08 0-.16 0-.25-.01-1.05-.12-1.88-.99-1.94-2.06-.01-.04-.01-.09-.01-.13v-10.6c0-1.21.99-2.2 2.2-2.2h15.6c1.21 0 2.2.99 2.2 2.2z",
                                                                          fill: "#f3f3f1",
                                                                      },
                                                                  }),
                                                              ]),
                                                              a("g", [
                                                                  a("path", {
                                                                      attrs: {
                                                                          d:
                                                                              "m20.74 12.935c-.68-.663-1.8-.663-2.48 0l-3.811 4.593-1.209-1.179c-.68-.663-1.8-.663-2.48 0l-4.75 4.633c.06 1.044.89 1.892 1.94 2.009.09.009.17.009.25.009h1.708 10.152 3.74c1.21 0 2.2-.966 2.2-2.146v-1.72z",
                                                                          fill: "#2fdf84",
                                                                      },
                                                                  }),
                                                              ]),
                                                              a("g", [
                                                                  a("path", {
                                                                      attrs: {
                                                                          d:
                                                                              "m8.76 20.93c-.01-.04-.01-.09-.01-.13v-10.6c0-1.21.99-2.2 2.2-2.2h-2.75c-1.21 0-2.2.99-2.2 2.2v10.6c0 .04 0 .09.01.13.06 1.07.89 1.94 1.94 2.06.09.01.17.01.25.01h2.75c-.08 0-.16 0-.25-.01-1.05-.12-1.88-.99-1.94-2.06z",
                                                                          fill: "#d5dbe1",
                                                                      },
                                                                  }),
                                                              ]),
                                                              a("g", [
                                                                  a("g", [
                                                                      a("path", {
                                                                          attrs: {
                                                                              d: "m15.066 18.91 1.209 1.209 4.485-5.564c.238-.238.532-.388.841-.46l-.861-1.04c-.68-.68-1.8-.68-2.48 0l-4.317 5.356c.41.027.813.188 1.123.499z",
                                                                              fill: "#00b871",
                                                                          },
                                                                      }),
                                                                  ]),
                                                                  a("g", [
                                                                      a("path", {
                                                                          attrs: {
                                                                              d:
                                                                                  "m8.51 22.43 4.75-4.75c.278-.278.629-.436.993-.487l-1.013-1.013c-.68-.68-1.8-.68-2.48 0l-4.75 4.75c.06 1.07.89 1.94 1.94 2.06.09.01.17.01.25.01h.428c-.061-.182-.107-.371-.118-.57z",
                                                                              fill: "#00b871",
                                                                          },
                                                                      }),
                                                                  ]),
                                                              ]),
                                                              a("g", [a("circle", { attrs: { cx: "11", cy: "12", fill: "#2fdf84", r: "2" } })]),
                                                          ]),
                                                          a("g", { attrs: { id: "regular_1.5" } }, [
                                                              a("g", [
                                                                  a("path", {
                                                                      attrs: {
                                                                          d:
                                                                              "m27.75 28h-11.5c-1.241 0-2.25-1.01-2.25-2.25v-.25h1.5v.25c0 .413.336.75.75.75h11.5c.414 0 .75-.337.75-.75v-8.5c0-.413-.336-.75-.75-.75h-.25v-1.5h.25c1.241 0 2.25 1.01 2.25 2.25v8.5c0 1.24-1.009 2.25-2.25 2.25z",
                                                                      },
                                                                  }),
                                                              ]),
                                                              a("g", [
                                                                  a("path", {
                                                                      attrs: {
                                                                          d:
                                                                              "m23.803 23h-15.606c-1.211 0-2.197-.985-2.197-2.197v-10.606c0-1.212.986-2.197 2.197-2.197h15.605c1.212 0 2.198.985 2.198 2.197v10.605c0 1.213-.986 2.198-2.197 2.198zm-15.606-13.5c-.384 0-.697.312-.697.697v10.605c0 .385.313.697.697.697h15.605c.384 0 .697-.312.697-.697v-10.605c0-.385-.313-.697-.697-.697z",
                                                                      },
                                                                  }),
                                                              ]),
                                                              a("g", [a("path", { attrs: { d: "m11 14c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-2.5c-.276 0-.5.225-.5.5s.224.5.5.5.5-.225.5-.5-.224-.5-.5-.5z" } })]),
                                                              a("g", [
                                                                  a("path", {
                                                                      attrs: {
                                                                          d:
                                                                              "m7.3 21.761-1.06-1.061 4.52-4.521c.684-.684 1.796-.684 2.48 0l1.21 1.209 3.714-4.459c.332-.398.819-.629 1.336-.631h.009c.514 0 .999.224 1.332.616l4.978 5.807-1.139.977-4.98-5.81c-.067-.079-.152-.095-.192-.09-.043 0-.126.012-.191.091l-4.241 5.091c-.135.161-.332.259-.542.269-.214.021-.416-.07-.564-.219l-1.79-1.79c-.098-.098-.262-.098-.36 0z",
                                                                      },
                                                                  }),
                                                              ]),
                                                          ]),
                                                      ]),
                                                      t._v(" "),
                                                      a("div", { staticClass: "feature-title" }, [t._v("Change daily photo")]),
                                                  ]
                                              ),
                                          ],
                                          1
                                      ),
                                  ]),
                              ];
                          },
                          proxy: !0,
                      },
                  ]),
              });
          };
          tt._withStripped = !0;
          const et = { name: "BackgroundUpsell", components: { Upsell: Y, Feature: K } };
          a(2749);
          var at = (0, o.Z)(et, tt, [], !1, null, "48f801c8", null);
          at.options.__file = "source/addins-vue/modal/upsell/BackgroundUpsell.vue";
          const nt = at.exports,
              st = !localStorage.getItem("token"),
              ot = m.conditionalFeatures.featureEnabled("team"),
              it = ot && m.models.teamInfo.get("team").userIsAdmin,
              rt = true && !ot,
              ct = ot && !it,
              lt = !(ot || st || rt);
          let dt;
          st ? (dt = "unregistered") : it ? (dt = "teamAdmin") : ct ? (dt = "teamMember") : rt ? (dt = "plus") : lt && (dt = "free");
          const pt = { state: dt, isUnregistered: st, isTeam: ot, isTeamAdmin: it, isPlus: rt, isTeamMember: ct, isFree: lt },
              ut = { 0: { hoursDelay: 0 }, 1: { hoursDelay: 0 }, 2: { hoursDelay: 2 }, 3: { hoursDelay: 24 } },
              mt = {
                  INTRODUCTION: "29195944-06ae-4067-9ce1-96014d80b27f",
                  TEAM_INTRODUCTION: "b42aae7d-ab19-4308-a1b6-822d58855760",
                  FOCUS: "b134f2b2-20da-46e1-905f-02b3340c6e26",
                  TODO: "90d3d161-a10a-476f-8a0c-d75893564fd1",
                  APP_LAUNCHER: "900b4a49-a704-48c5-975e-48431d832928",
                  SETTINGS: "2228c0b8-f888-44a6-83df-5036d7913897",
                  PLUS_UPSELL_NOTIFICATION: "1c049af2-2bff-4fc9-883b-009c94a1d269",
                  PLUS_GATE: "af4999ed-292b-4a8c-891e-85a0dda89574",
                  PLUS_WELCOME: "c6d78f5e-470f-4f12-a139-4a80fdf3ec13",
                  UPGRADE: "d3df0ffa-0373-4ab2-8745-989678e26253",
                  UPSELL_POMODORO: "fe3821b4-1227-4398-b4cb-3ef0f90ad34d",
                  UPSELL_BACKGROUND: "4f016075-33f5-4d01-889d-a7c60fda1c94",
              },
              vt = { component: O, name: "Email", interceptNextStep: !0, customCss: ".modal { background: white !important; }" },
              ht = { component: L, name: "Choose Plan", interceptNextStep: !0, belowButtonMsg: "Join 40,000+ people who’ve upgraded to Plus!", customCss: ".modal { background: white !important; }" },
              gt = { component: C, name: "Upgrade", hideFooter: !0, interceptNextStep: !0, preRender: !0, customCss: ".modal { max-height: 95vh; overflow: auto !important; background: white !important; }" },
              ft = { component: R, interceptNextStep: !0, name: "Thanks", hideFooter: !0, hideClose: !0 },
              bt = {
                  component: g,
                  name: "Inspiration",
                  subStepProps: {
                      title: "Inspiration",
                      description: "Breathe life into your browser.",
                      dataTest: "inspiration",
                      benefits: [
                          {
                              name: "Photos",
                              description: "Inspiring photography.",
                              svg:
                                  '<svg class="icon-svg-icon icon-photos" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g fill-rule="evenodd" clip-rule="evenodd"><path d="M502 105.799c-5.522 0-10 4.477-10 10v236.052L336.471 220.69a9.998 9.998 0 0 0-12.893 0L194.762 329.323l-67.577-56.99a9.998 9.998 0 0 0-12.893 0L20 351.851V85.799h442c5.522 0 10-4.477 10-10s-4.478-10-10-10H10c-5.523 0-10 4.477-10 10v360.402c0 5.523 4.477 10 10 10h492c5.522 0 10-4.477 10-10V115.799c0-5.523-4.478-10-10-10zm-10 320.402H20v-48.188l100.738-84.955 67.576 56.99a9.997 9.997 0 0 0 12.894 0l128.816-108.633L492 378.013v48.188z"/><path d="M61.965 177.661c0 32.408 26.366 58.774 58.773 58.774 32.408 0 58.774-26.366 58.774-58.774s-26.366-58.774-58.774-58.774c-32.407 0-58.773 26.366-58.773 58.774zm97.548 0c0 21.38-17.395 38.774-38.774 38.774s-38.773-17.394-38.773-38.774c0-21.38 17.394-38.774 38.773-38.774s38.774 17.394 38.774 38.774zM502 85.799c5.508 0 10-4.491 10-10 0-5.508-4.492-10-10-10s-10 4.492-10 10c0 5.509 4.492 10 10 10z"/></g></svg>',
                          },
                          {
                              name: "Quotes",
                              description: "Timeless wisdom.",
                              svg:
                                  '<svg class="icon-svg-icon icon-quotes" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M467.712 112.032c-3.11-4.565-9.33-5.744-13.895-2.634-4.565 3.11-5.744 9.331-2.634 13.895C477.886 162.488 492 208.377 492 256c0 130.131-105.869 236-236 236S20 386.131 20 256 125.869 20 256 20c48.663 0 95.382 14.688 135.106 42.473 4.526 3.166 10.76 2.064 13.926-2.462 3.166-4.526 2.063-10.76-2.462-13.926C359.468 15.936 308.785 0 256 0 187.62 0 123.333 26.628 74.981 74.981 26.628 123.333 0 187.62 0 256s26.628 132.667 74.981 181.02C123.333 485.371 187.62 512 256 512s132.667-26.629 181.019-74.98C485.372 388.667 512 324.38 512 256c0-51.656-15.315-101.439-44.288-143.968z"/><path d="M437.363 75.323l-.342-.343c-3.906-3.905-10.238-3.905-14.143 0-3.905 3.906-3.905 10.238 0 14.143l.342.343c1.952 1.953 4.512 2.929 7.071 2.929s5.118-.977 7.072-2.929c3.905-3.906 3.905-10.238 0-14.143zM199.965 257.022h-30.349c2.826-48.435 26.462-56.432 44.515-58.075a10 10 0 0 0 9.094-9.959v-55.989c0-2.749-1.132-5.378-3.13-7.267a10.017 10.017 0 0 0-7.431-2.717c-40.081 2.255-70.76 16.15-91.185 41.299-20.06 24.7-30.231 60.551-30.231 106.558v84.091c0 18.768 15.269 34.037 34.037 34.037h74.681c18.768 0 34.037-15.269 34.036-34.038v-63.903c0-18.768-15.269-34.037-34.037-34.037zm14.038 97.941c0 7.74-6.297 14.037-14.037 14.037h-74.681c-7.74 0-14.037-6.297-14.037-14.037v-84.091c0-41.297 8.666-72.906 25.756-93.949 15.191-18.704 36.921-29.561 66.222-33.027v36.469c-26.389 5.441-53.889 25.735-53.889 86.658 0 5.522 4.477 10 10 10h40.629c7.74 0 14.037 6.297 14.037 14.037v63.903zM386.714 257.023h-30.349c2.826-48.434 26.462-56.432 44.515-58.075a10 10 0 0 0 9.094-9.959V133c0-2.749-1.132-5.378-3.13-7.267a10.017 10.017 0 0 0-7.431-2.717c-40.082 2.255-70.761 16.15-91.186 41.299-20.059 24.7-30.23 60.551-30.23 106.558v3.461c0 5.522 4.477 10 10 10s10-4.478 10-10v-3.461c0-41.297 8.665-72.906 25.755-93.949 15.191-18.704 36.92-29.561 66.222-33.027v36.468c-26.389 5.442-53.889 25.735-53.889 86.658 0 5.522 4.477 10 10 10h40.629c7.74 0 14.037 6.297 14.037 14.037v63.903c0 7.74-6.297 14.037-14.037 14.037h-74.681c-7.74 0-14.037-6.297-14.037-14.037V349.5c0-5.522-4.477-10-10-10s-10 4.478-10 10v5.463c0 18.768 15.269 34.037 34.037 34.037h74.681c18.768 0 34.037-15.269 34.037-34.037V291.06c0-18.768-15.269-34.037-34.037-34.037z"/><path d="M287.997 299.583c-5.523 0-10 4.478-10 10V310c0 5.522 4.477 10 10 10s10-4.478 10-10v-.417c0-5.522-4.477-10-10-10z"/></svg>',
                          },
                          {
                              name: "Mantras",
                              description: "Positive concepts.",
                              svg:
                                  '<svg class="icon-svg-icon icon-mantras" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M445.583 245.125l-95.688-63.792c-20.896-13.958-49.563-13.958-70.458 0l-2.104 1.406v-61.992c13.796 4.017 26.525 7.253 32 7.253 17.646 0 32-14.354 32-32s-14.354-32-32-32c-5.475 0-18.204 3.236-32 7.253V42.667C277.333 19.135 258.198 0 234.667 0S192 19.135 192 42.667v28.586C178.204 67.236 165.475 64 160 64c-17.646 0-32 14.354-32 32s14.354 32 32 32c5.475 0 18.204-3.236 32-7.253v207.398c0 5.375-3.542 8.135-5.063 9.073-1.531.938-5.615 2.865-10.375.469l-68.5-34.25a45.355 45.355 0 0 0-20.208-4.771c-24.917 0-45.187 20.271-45.187 45.188V352c0 2.958 1.229 5.781 3.385 7.802l123.115 114.896C194.927 498.75 228.531 512 263.792 512h98.875c58.813 0 106.667-47.854 106.667-106.667V289.5a53.22 53.22 0 0 0-23.751-44.375zM309.333 85.333C315.219 85.333 320 90.115 320 96s-4.781 10.667-10.656 10.667c-4.198-.052-20.906-4.688-40.167-10.667 19.261-5.979 35.958-10.615 40.156-10.667zm-96-42.666c0-11.76 9.573-21.333 21.333-21.333 11.76 0 21.333 9.573 21.333 21.333v35.099a1429.042 1429.042 0 0 0-21.333 6.979c-5.32-1.789-12.797-4.26-21.333-6.979V42.667zm-53.333 64c-5.885 0-10.667-4.781-10.667-10.667s4.781-10.667 10.656-10.667c4.198.052 20.906 4.688 40.167 10.667-19.26 5.979-35.958 10.615-40.156 10.667zm288 298.666c0 47.052-38.281 85.333-85.333 85.333h-98.875c-29.833 0-58.271-11.208-80.063-31.563L64 347.365v-3.51C64 330.698 74.698 320 87.854 320c3.677 0 7.375.875 10.667 2.521l68.5 34.25c9.979 4.99 21.646 4.469 31.135-1.396 9.5-5.875 15.177-16.052 15.177-27.229V114.234c8.536-2.719 16.013-5.19 21.333-6.979 5.32 1.789 12.797 4.26 21.333 6.979v88.432c0 3.938 2.167 7.552 5.635 9.406a10.703 10.703 0 0 0 10.948-.531l18.688-12.458c13.896-9.271 32.896-9.271 46.792 0l95.688 63.792A31.93 31.93 0 0 1 448 289.5v115.833z"/></svg>',
                          },
                      ],
                  },
              },
              xt = {
                  component: g,
                  name: "Focus",
                  subStepProps: {
                      title: "Focus",
                      description: "Approach each day with intent.",
                      dataTest: "focus",
                      benefits: [
                          {
                              name: "Daily Focus",
                              description: "Set a daily focus reminder.",
                              svg:
                                  '<svg class="icon-svg-icon icon-focus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 332a76 76 0 1142.37-139.1A76 76 0 01256 332zm0-132a56 56 0 1031.21 9.5A56.06 56.06 0 00256 200zM482 452h-50a10 10 0 010-20h50a10 10 0 0010-10V90a10 10 0 00-10-10h-50a10 10 0 010-20h50a30 30 0 0130 30v332a30 30 0 01-30 30zM10 155.25a10 10 0 01-10-10V90a30 30 0 0130-30h50a10 10 0 010 20H30a10 10 0 00-10 10v55.25a10 10 0 01-10 10zM10 206a9.86 9.86 0 01-2-.2 9.4 9.4 0 01-1.87-.57 9.88 9.88 0 01-1.73-.92 9.6 9.6 0 01-1.52-1.24A10.08 10.08 0 010 196a9.86 9.86 0 01.2-2 9.4 9.4 0 01.57-1.87 9.85 9.85 0 01.92-1.73 9.71 9.71 0 012.76-2.76 9.85 9.85 0 011.73-.92A9.4 9.4 0 018 186.2a10.08 10.08 0 019 2.73 9.6 9.6 0 011.24 1.52 9.88 9.88 0 01.92 1.73 9.4 9.4 0 01.64 1.82 9.86 9.86 0 01.2 2 10 10 0 01-10 10zM80 452H30a30 30 0 01-30-30V246a10 10 0 0120 0v176a10 10 0 0010 10h50a10 10 0 010 20z"/><path d="M10 206a9.86 9.86 0 01-2-.2 9.4 9.4 0 01-1.87-.57 9.88 9.88 0 01-1.73-.92 9.6 9.6 0 01-1.52-1.24A10.08 10.08 0 010 196a9.86 9.86 0 01.2-2 9.4 9.4 0 01.57-1.87 9.85 9.85 0 01.92-1.73 9.71 9.71 0 012.76-2.76 9.85 9.85 0 011.73-.92A9.4 9.4 0 018 186.2a10.08 10.08 0 019 2.73 9.6 9.6 0 011.24 1.52 9.88 9.88 0 01.92 1.73 9.4 9.4 0 01.64 1.82 9.86 9.86 0 01.2 2 10 10 0 01-10 10z"/></svg>',
                          },
                          {
                              name: "To-do",
                              description: "Organize your daily tasks.",
                              svg:
                                  '<svg class="icon-svg-icon icon-todo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 502 502"><path d="M159 171h303c22.056 0 40-17.944 40-40s-17.944-40-40-40H159c-22.056 0-40 17.944-40 40s17.944 40 40 40zm0-60h303c11.028 0 20 8.972 20 20s-8.972 20-20 20H159c-11.028 0-20-8.972-20-20s8.972-20 20-20zM462 211H159c-22.056 0-40 17.944-40 40s17.944 40 40 40h303c22.056 0 40-17.944 40-40s-17.944-40-40-40zm0 60H159c-11.028 0-20-8.972-20-20s8.972-20 20-20h303c11.028 0 20 8.972 20 20s-8.972 20-20 20zM462 331H159c-22.056 0-40 17.944-40 40s17.944 40 40 40h303c22.056 0 40-17.944 40-40s-17.944-40-40-40zm0 60H159c-11.028 0-20-8.972-20-20s8.972-20 20-20h303c11.028 0 20 8.972 20 20s-8.972 20-20 20zM49 82c-27.019 0-49 21.981-49 49s21.981 49 49 49 49-21.981 49-49-21.981-49-49-49zm0 78c-15.991 0-29-13.009-29-29s13.009-29 29-29 29 13.009 29 29-13.009 29-29 29zM49 202c-27.019 0-49 21.981-49 49s21.981 49 49 49 49-21.981 49-49-21.981-49-49-49zm0 78c-15.991 0-29-13.009-29-29s13.009-29 29-29 29 13.009 29 29-13.009 29-29 29zM49 322c-27.019 0-49 21.981-49 49s21.981 49 49 49 49-21.981 49-49-21.981-49-49-49zm0 78c-15.991 0-29-13.009-29-29s13.009-29 29-29 29 13.009 29 29-13.009 29-29 29z"/><path d="M216 139h171c5.523 0 10-4.477 10-10s-4.477-10-10-10H216c-5.523 0-10 4.477-10 10s4.477 10 10 10zM158 139h18c5.523 0 10-4.477 10-10s-4.477-10-10-10h-18c-5.523 0-10 4.477-10 10s4.477 10 10 10z"/></svg>',
                          },
                          {
                              name: "Links",
                              description: "Quickly access your most used websites.",
                              svg:
                                  '<svg class="icon-svg-icon icon-links" xmlns="http://www.w3.org/2000/svg" viewBox="0 -26 512 512"><path d="M166 50c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10zm0 0M126 50c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10zm0 0M86 50c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10zm0 0M436 140H76c-5.523 0-10 4.477-10 10v60c0 5.523 4.477 10 10 10h360c5.523 0 10-4.477 10-10v-60c0-5.523-4.477-10-10-10zm-10 60H86v-40h340zm0 0M256 260H76c-5.523 0-10 4.477-10 10v120c0 5.523 4.477 10 10 10h180c5.523 0 10-4.477 10-10V270c0-5.523-4.477-10-10-10zm-10 120H86V280h160zm0 0M436 260H316c-5.523 0-10 4.477-10 10v120c0 5.523 4.477 10 10 10h120c5.523 0 10-4.477 10-10V270c0-5.523-4.477-10-10-10zm-10 120H326V280h100zm0 0M266 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10zm0 0"/><path d="M482 0H301c-5.523 0-10 4.477-10 10s4.477 10 10 10h181c5.516 0 10 4.484 10 10v50H20V30c0-5.516 4.484-10 10-10h181c5.523 0 10-4.477 10-10s-4.477-10-10-10H30C13.457 0 0 13.457 0 30v400c0 16.543 13.457 30 30 30h452c16.543 0 30-13.457 30-30V30c0-16.543-13.457-30-30-30zm0 440H30c-5.516 0-10-4.484-10-10V100h472v330c0 5.516-4.484 10-10 10zm0 0"/></svg>',
                          },
                      ],
                  },
              },
              wt = {
                  component: g,
                  name: "Plus Features",
                  showUpgrade: !rt,
                  nextButtonText: "Done",
                  hasSaleBanner: !rt,
                  subStepProps: {
                      bottomLink: {
                          url: "https://momentumdash.com/plus",
                          label: "Learn more",
                          svg:
                              '<svg class="icon bottom-link-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492.432 492.432"><path d="M142.238 492.432c-9.79 0-19.588-3.736-27.05-11.209-14.945-14.934-14.945-39.162 0-54.098l180.9-180.909-180.9-180.91c-14.945-14.935-14.945-39.163 0-54.098 14.926-14.944 39.172-14.944 54.098 0l207.96 207.958c14.943 14.935 14.943 39.164 0 54.1l-207.96 207.957c-7.462 7.474-17.26 11.209-27.048 11.209z"></path></svg>',
                      },
                      title: "Do more with Plus",
                      description: "Add integrations, customization, and new apps.\n",
                      dataTest: "plus-features",
                      benefits: [
                          {
                              name: "Custom Content",
                              description: "Personalize with your own photos, quotes, and more!",
                              svg:
                                  '<svg class="icon-svg-icon icon-content" viewBox="0 -73 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M402.586 119.063V28.918C402.586 12.973 389.613 0 373.668 0h-70.84c-5.523 0-10 4.477-10 10s4.477 10 10 10h70.84c4.918 0 8.918 4 8.918 8.918v89.465c-45.469 2.11-84.602 28.89-104.277 67.238l-28.47-40.14a10.014 10.014 0 0 0-8.14-4.215h-.02a9.99 9.99 0 0 0-8.132 4.187l-72.719 101.75-34.855-48.777a10.01 10.01 0 0 0-8.137-4.184 9.999 9.999 0 0 0-8.137 4.184L29.49 310.668a10 10 0 0 0 8.136 15.812h84.984c.172 0 .34-.003.504-.011.164.008.332.011.5.011H298.32a124.51 124.51 0 0 0 22.703 19.016H28.918c-4.918 0-8.918-4-8.918-8.918V28.918C20 24 24 20 28.918 20h183.867c5.524 0 10-4.477 10-10s-4.476-10-10-10H28.918C12.973 0 0 12.973 0 28.918v307.66c0 15.945 12.973 28.918 28.918 28.918h359.457C456.543 365.496 512 310.04 512 241.875c0-63.363-47.914-115.742-109.414-122.813zM117.836 221.44l30.703 42.961-30.07 42.078H57.063zm25.215 85.04l98.601-137.973 27.871 39.297a123.404 123.404 0 0 0-4.77 34.066c0 23.664 6.68 45.797 18.263 64.61zm245.324 39.015c-57.137 0-103.625-46.484-103.625-103.621 0-57.14 46.488-103.625 103.625-103.625 57.14 0 103.625 46.484 103.625 103.625 0 57.137-46.484 103.621-103.625 103.621zm0 0"/><path d="M439.898 213.555h-23.203v-23.203c0-5.524-4.476-10-10-10H370.06c-5.524 0-10 4.476-10 10v23.203h-23.204c-5.52 0-10 4.476-10 10v36.636c0 5.524 4.48 10 10 10h23.204v23.204c0 5.523 4.476 10 10 10h36.636c5.524 0 10-4.477 10-10V270.19h23.203c5.52 0 10-4.476 10-10v-36.636c0-5.524-4.48-10-10-10zm-10 36.636h-23.203c-5.523 0-10 4.477-10 10v23.204H380.06V260.19c0-5.523-4.477-10-10-10h-23.204v-16.636h23.204c5.523 0 10-4.477 10-10v-23.203h16.636v23.203c0 5.523 4.477 10 10 10h23.203zm0 0M131.945 153.191c-30.707 0-55.687-24.98-55.687-55.687 0-30.703 24.98-55.688 55.687-55.688 30.703 0 55.688 24.98 55.688 55.688 0 30.707-24.985 55.687-55.688 55.687zm0-91.375c-19.68 0-35.687 16.008-35.687 35.688 0 19.68 16.008 35.687 35.687 35.687 19.676 0 35.688-16.007 35.688-35.687 0-19.676-16.012-35.688-35.688-35.688zm0 0M257.828 20c-4.168 0-8.015-2.703-9.414-6.633-1.379-3.879-.2-8.328 2.945-10.988 3.29-2.781 8.086-3.121 11.746-.867 3.5 2.156 5.336 6.422 4.524 10.449-.93 4.61-5.086 8.039-9.8 8.039zm0 0"/></svg>',
                          },
                          {
                              name: "To-do integrations",
                              description: "Connect with your favorite to-do list services.",
                              svg:
                                  '<svg class="icon-svg-icon icon-integration" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001"><path d="M427.782 339.969c46.438 0 84.219-37.78 84.219-84.219 0-39.156-26.598-72.412-63.536-81.667A140.192 140.192 0 0 0 452.647 140c0-77.196-62.804-140-140-140-48.516 0-93.203 24.982-118.72 65.772a72.054 72.054 0 0 0-23.942-4.11c-36.261 0-66.317 27.069-71.021 62.063C43.6 128.486 0 175.07 0 231.646c0 59.73 48.594 108.322 108.323 108.322h49.942v78.572H82.49c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10h85.775c5.523 0 10-4.478 10-10v-88.572H246v162.033c0 5.522 4.477 10 10 10 5.522 0 10-4.478 10-10V339.969h83.248v88.572c0 5.522 4.478 10 10 10h85.775c5.522 0 10-4.478 10-10 0-5.523-4.478-10-10-10h-75.774v-78.572h58.533zm-75.604-27.261a10.003 10.003 0 0 0-2.929 7.071v.19H266V205.17l38.217-38.217a34.29 34.29 0 0 0 16.27 4.088c19.023 0 34.5-15.477 34.5-34.5 0-19.024-15.477-34.5-34.5-34.5-19.022 0-34.499 15.477-34.499 34.5 0 5.881 1.482 11.42 4.087 16.269l-41.145 41.146a10.101 10.101 0 0 0-2.929 7.075v118.938h-67.735v-25.201c0-2.626-1.072-5.218-2.929-7.075l-36.898-36.897a34.282 34.282 0 0 0 4.088-16.271c0-19.023-15.477-34.5-34.5-34.5s-34.5 15.477-34.5 34.5 15.477 34.5 34.5 34.5c5.88 0 11.419-1.482 16.269-4.087l33.97 33.97v21.063h-49.942c-48.703-.002-88.325-39.623-88.325-88.325 0-48.701 39.622-88.322 88.323-88.322 5.523 0 10-4.478 10-10 0-28.486 23.175-51.662 51.661-51.662 8.308 0 16.237 1.91 23.568 5.676 4.845 2.49 10.791.643 13.374-4.152C227.918 44.211 268.428 20 312.646 20c66.168 0 120 53.832 120 120 0 13.262-2.149 26.292-6.388 38.73a10 10 0 0 0 8.407 13.17C467.352 195.379 492 222.828 492 255.75c0 35.41-28.809 64.219-64.219 64.219h-54.58l30.016-30.016a34.29 34.29 0 0 0 16.27 4.088c19.023 0 34.5-15.477 34.5-34.5 0-19.024-15.477-34.5-34.5-34.5-19.022 0-34.499 15.476-34.499 34.5 0 5.881 1.482 11.42 4.087 16.27l-36.897 36.897zm-46.19-176.167c0-7.995 6.504-14.5 14.499-14.5s14.5 6.505 14.5 14.5-6.505 14.5-14.5 14.5-14.499-6.505-14.499-14.5zm-183.462 97.982c0 7.995-6.505 14.5-14.5 14.5s-14.5-6.505-14.5-14.5 6.505-14.5 14.5-14.5 14.5 6.505 14.5 14.5zm282.462 25.018c0-7.995 6.504-14.5 14.499-14.5s14.5 6.505 14.5 14.5-6.505 14.5-14.5 14.5-14.499-6.505-14.499-14.5z"/><path d="M316.607 41.573a9.986 9.986 0 0 0-10.592-9.371 107.975 107.975 0 0 0-68.858 30.544c-3.95 3.86-4.023 10.191-.163 14.142a9.969 9.969 0 0 0 7.152 3.011 9.967 9.967 0 0 0 6.989-2.848 87.966 87.966 0 0 1 56.101-24.886c5.512-.337 9.708-5.079 9.371-10.592zM231.362 84.27c-4.855-2.632-10.925-.83-13.557 4.025l-.302.557c-2.632 4.855-.829 10.925 4.026 13.557a10 10 0 0 0 13.557-4.025l.302-.557c2.631-4.856.829-10.926-4.026-13.557z"/></svg>',
                          },
                          {
                              name: "More Functionality",
                              description: "Unlock all of Momentum’s exclusive Plus features.",
                              svg:
                                  '<svg class="icon-svg-icon icon-functionality" viewBox="0 0 512.001 512" xmlns="http://www.w3.org/2000/svg"><path d="M206.715 120H19.437a10.001 10.001 0 0 1-7.39-3.262C4.39 108.344 0 97.145 0 86.016c0-23.688 19.273-42.961 42.96-42.961 1.462 0 2.923.074 4.376.222a36.302 36.302 0 0 1 27.023-10.476C82.625 13.094 101.855 0 123.926 0c14.847 0 29.176 6.223 39.32 17.07.305.328.586.672.844 1.035l6.785 9.54c.258.363.488.742.7 1.136a53.527 53.527 0 0 1 2.581 5.692 49.636 49.636 0 0 1 3.145-.11h.176c26.75 0 48.859 21.7 49.324 48.453.219 12.54-4.274 24.567-12.653 33.875a10.007 10.007 0 0 1-7.433 3.309zM24.293 100h177.57a29.26 29.26 0 0 0 4.942-16.836v.004c-.278-15.906-13.426-28.805-29.328-28.805h-.11c-2.617.012-5.21.364-7.703 1.051a10.003 10.003 0 0 1-12.492-7.812 33.464 33.464 0 0 0-3.012-8.946l-5.96-8.379C141.776 23.645 133.183 20 123.925 20c-15.656 0-29.528 11.074-32.973 26.328a10 10 0 0 1-12.918 7.281 16.275 16.275 0 0 0-5.168-.84 16.311 16.311 0 0 0-13.398 7.032 9.994 9.994 0 0 1-10.723 3.988 23.279 23.279 0 0 0-5.785-.734C30.3 63.055 20 73.355 20 86.015c0 4.872 1.535 9.794 4.293 13.985zm0 0M510.508 147.742l-61.18-99.062a10.002 10.002 0 0 0-17.015 0l-61.18 99.062a10.006 10.006 0 0 0-.227 10.125 10.003 10.003 0 0 0 8.735 5.13h17.261V502c0 5.523 4.477 10 10 10h67.836c5.524 0 10-4.477 10-10V162.996H502a9.997 9.997 0 1 0 8.508-15.254zm-35.77-4.746c-5.52 0-10 4.477-10 10V492h-47.836V162.996h13.356c5.52 0 10-4.476 10-10 0-5.523-4.48-10-10-10H397.57l43.25-70.027 43.25 70.027zm0 0"/><path d="M440.82 279.66c-.648 0-1.308-.07-1.949-.2-.64-.128-1.27-.32-1.879-.57a9.86 9.86 0 0 1-1.722-.921 9.479 9.479 0 0 1-1.52-1.239 9.478 9.478 0 0 1-1.238-1.52 9.657 9.657 0 0 1-.922-1.73 9.494 9.494 0 0 1-.57-1.87 9.912 9.912 0 0 1-.2-1.95c0-.648.07-1.308.2-1.96.12-.63.32-1.259.57-1.868.25-.602.558-1.18.922-1.723a9.653 9.653 0 0 1 1.238-1.52c.46-.46.969-.878 1.52-1.25a10.11 10.11 0 0 1 3.601-1.487 9.776 9.776 0 0 1 3.899 0 10.11 10.11 0 0 1 3.602 1.488c.55.37 1.058.789 1.519 1.25.46.46.879.973 1.242 1.52.36.542.668 1.12.918 1.722.25.61.449 1.238.57 1.867.129.653.2 1.313.2 1.961 0 .652-.071 1.309-.2 1.95-.121.64-.32 1.269-.57 1.87a9.896 9.896 0 0 1-2.16 3.25c-.461.461-.97.88-1.52 1.239a9.86 9.86 0 0 1-1.723.922 10.217 10.217 0 0 1-3.828.77zm0 0M440.82 478.89c-5.52 0-10-4.476-10-10V312.66c0-5.523 4.48-10 10-10 5.524 0 10 4.477 10 10v156.23c0 5.524-4.476 10-10 10zm0 0M140.867 268.633l-61.18-99.059a9.997 9.997 0 0 0-17.015 0l-61.18 99.059A9.998 9.998 0 0 0 10 283.887h17.262V502c0 5.523 4.476 10 10 10h67.836c5.52 0 10-4.477 10-10V283.887h17.261a9.992 9.992 0 0 0 8.73-5.13 9.988 9.988 0 0 0-.222-10.124zm-35.77-4.746c-5.519 0-10 4.476-10 10V492H47.263V283.887h13.355c5.52 0 10-4.477 10-10 0-5.524-4.48-10-10-10H27.93l43.25-70.028 43.25 70.028zm0 0"/><path d="M71.18 349.66a9.644 9.644 0 0 1-1.95-.191c-.64-.13-1.27-.317-1.878-.567-.602-.25-1.18-.562-1.72-.922a9.725 9.725 0 0 1-1.523-1.238 10.093 10.093 0 0 1-2.93-7.082c0-.648.071-1.308.2-1.95.121-.64.32-1.269.57-1.87.25-.598.563-1.18.91-1.73.371-.54.79-1.06 1.25-1.52.461-.461.973-.88 1.52-1.238.543-.36 1.121-.672 1.723-.922.609-.25 1.238-.438 1.878-.57a9.922 9.922 0 0 1 5.77.57c.61.25 1.188.562 1.73.922.551.359 1.06.777 1.52 1.238.46.46.879.98 1.238 1.52.36.55.672 1.132.922 1.73.25.601.45 1.23.57 1.87.13.642.2 1.302.2 1.95 0 .66-.07 1.309-.2 1.961-.12.64-.32 1.27-.57 1.871-.25.598-.562 1.18-.922 1.727a9.865 9.865 0 0 1-1.238 1.523c-.46.457-.969.88-1.52 1.238a10.055 10.055 0 0 1-3.601 1.489 9.589 9.589 0 0 1-1.95.191zm0 0M71.18 478.89c-5.52 0-10-4.476-10-10v-86.222c0-5.523 4.48-10 10-10 5.523 0 10 4.477 10 10v86.223c0 5.523-4.477 10-10 10zm0 0M353.07 331.129a68.064 68.064 0 0 0-12.507-6.582c.054-.34.101-.629.136-.867.012-.075.02-.145.028-.215 5.207-41.668-1.262-85.68-17.743-120.754a9.85 9.85 0 0 0-1.164-1.899c-14.773-30.417-41.66-60.398-59.89-73.488-3.73-2.683-8.864-2.433-12.364.551-.168.14-.441.36-.808.656-24.453 19.781-45.543 45.977-59.383 73.758a9.812 9.812 0 0 0-.762 2.082c-6.758 13.95-11.863 28.54-15.191 43.406-5.152 23.043-4.422 51.785-2.02 71 .012.067.02.133.028.2.015.109.027.183.972 5.199a68.19 68.19 0 0 0-13.476 6.957c-23.938 15.976-33.844 47.672-24.156 77.164l13.503 50.887a9.988 9.988 0 0 0 9.665 7.433 9.994 9.994 0 0 0 7.855-3.812l36.36-46.145H207a50.205 50.205 0 0 0-.945 9.684c0 39.761 42.875 66.644 44.699 67.77a9.993 9.993 0 0 0 10.465.019c1.824-1.117 44.73-27.809 44.73-67.79 0-3.261-.32-6.503-.949-9.683h4.848l36.363 46.145a9.993 9.993 0 0 0 9.879 3.605 10.006 10.006 0 0 0 7.64-7.226l13.504-50.887c9.684-29.496-.222-61.188-24.164-77.168zM206.41 396.66c-3.98-21.117-14.37-76.258-15.195-80.66-2.719-21.977-2.043-47.012 1.726-63.855a178.08 178.08 0 0 1 9.149-28.958c16.793 11.348 37.168 13.047 54.008 13.047 16.797 0 37.12-1.683 53.859-12.93 10.934 29.301 15.012 64.798 10.938 97.567-.946 6.293-9.7 51.188-14.524 75.79zm49.883-248.355c14.836 12.59 33.46 34.605 45.125 56.507-9.965 7.95-24.008 11.422-45.32 11.422-21.34 0-35.418-3.5-45.422-11.523 11.472-20.93 27.37-40.594 45.617-56.406zm-93.824 286.402l-8.446-31.828a7.527 7.527 0 0 0-.175-.598c-6.907-20.719-.098-43.648 16.175-54.511a48.764 48.764 0 0 1 6.164-3.485c2.348 12.45 5.856 31.063 11.106 58.922zm123.48-8.363c0 21.812-20.097 39.64-29.906 47.039-9.797-7.485-29.988-25.528-29.988-47.04 0-3.308.547-6.581 1.601-9.683h56.692a30.092 30.092 0 0 1 1.601 9.684zm72.207-24.063a9.64 9.64 0 0 0-.18.598l-8.445 31.828-24.219-30.734c2.172-11.051 7.688-39.18 11.508-59.2a48.47 48.47 0 0 1 5.149 2.993c16.285 10.867 23.094 33.796 16.187 54.515zm0 0"/><path d="M256 358.61c-28.957 0-52.516-23.56-52.516-52.516s23.559-52.516 52.516-52.516 52.516 23.559 52.516 52.516-23.559 52.515-52.516 52.515zm0-85.032c-17.93 0-32.516 14.586-32.516 32.516S238.07 338.609 256 338.609s32.516-14.586 32.516-32.515S273.93 273.578 256 273.578zm0 0"/></svg>',
                          },
                      ],
                      benefitList: [
                          {
                              name: "Countdowns",
                              description: "Get friendly reminders of your upcoming events.",
                              svg:
                                  '<svg class="icon icon-countdown" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 256c0 68.379-26.629 132.668-74.98 181.02C388.668 485.37 324.379 512 256 512s-132.668-26.629-181.02-74.98C26.63 388.668 0 324.379 0 256c0-11.047 8.953-20 20-20s20 8.953 20 20c0 119.102 96.898 216 216 216s216-96.898 216-216S375.102 40 256 40c-11.047 0-20-8.953-20-20s8.953-20 20-20c68.379 0 132.668 26.629 181.02 74.98C485.37 123.332 512 187.621 512 256zm-371.809-28.75c6.77 8.734 19.332 10.324 28.059 3.559l7.75-6.004V328c0 11.047 8.953 20 20 20s20-8.953 20-20V184a20.004 20.004 0 0 0-11.195-17.96 20 20 0 0 0-21.055 2.151l-40 31c-8.73 6.766-10.324 19.329-3.559 28.059zM246 283v-54c0-35.84 29.16-65 65-65s65 29.16 65 65v54c0 35.84-29.16 65-65 65s-65-29.16-65-65zm40 0c0 13.785 11.215 25 25 25s25-11.215 25-25v-54c0-13.785-11.215-25-25-25s-25 11.215-25 25zM183 51c11.047 0 20-8.953 20-20s-8.953-20-20-20-20 8.953-20 20 8.953 20 20 20zm-66 34c11.047 0 20-8.953 20-20s-8.953-20-20-20-20 8.953-20 20 8.953 20 20 20zm-52 52c11.047 0 20-8.953 20-20s-8.953-20-20-20-20 8.953-20 20 8.953 20 20 20zm-34 66c11.047 0 20-8.953 20-20s-8.953-20-20-20-20 8.953-20 20 8.953 20 20 20zm0 0"/></svg>',
                          },
                          {
                              name: "Notes",
                              description: "Capture your ideas while they’re top of mind.",
                              svg:
                                  '<svg class="icon icon-notes" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352.459 220c0-11.046-8.954-20-20-20h-206c-11.046 0-20 8.954-20 20s8.954 20 20 20h206c11.046 0 20-8.954 20-20zM126.459 280c-11.046 0-20 8.954-20 20s8.954 20 20 20H251.57c11.046 0 20-8.954 20-20s-8.954-20-20-20H126.459z"/><path d="M173.459 472H106.57c-22.056 0-40-17.944-40-40V80c0-22.056 17.944-40 40-40h245.889c22.056 0 40 17.944 40 40v123c0 11.046 8.954 20 20 20s20-8.954 20-20V80c0-44.112-35.888-80-80-80H106.57c-44.112 0-80 35.888-80 80v352c0 44.112 35.888 80 80 80h66.889c11.046 0 20-8.954 20-20s-8.954-20-20-20z"/><path d="M467.884 289.572c-23.394-23.394-61.458-23.395-84.837-.016l-109.803 109.56a20.005 20.005 0 0 0-5.01 8.345l-23.913 78.725a20 20 0 0 0 24.476 25.087l80.725-22.361a19.993 19.993 0 0 0 8.79-5.119l109.573-109.367c23.394-23.394 23.394-61.458-.001-84.854zM333.776 451.768l-40.612 11.25 11.885-39.129 74.089-73.925 28.29 28.29-73.652 73.514zM439.615 346.13l-3.875 3.867-28.285-28.285 3.862-3.854c7.798-7.798 20.486-7.798 28.284 0 7.798 7.798 7.798 20.486.014 28.272zM332.459 120h-206c-11.046 0-20 8.954-20 20s8.954 20 20 20h206c11.046 0 20-8.954 20-20s-8.954-20-20-20z"/></svg>',
                          },
                          {
                              name: "Metrics",
                              description: "Gain a clear view of your progress towards goals.",
                              svg:
                                  '<svg class="icon icon-metric" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M492 357.122c11.046 0 20-8.954 20-20v-141c0-40.804-33.196-74-74-74s-74 33.196-74 74V438c0 40.804 33.196 74 74 74s74-33.196 74-74c0-11.046-8.954-20-20-20s-20 8.954-20 20c0 18.748-15.252 34-34 34s-34-15.252-34-34V196.122c0-18.748 15.252-34 34-34s34 15.252 34 34v141c0 11.046 8.954 20 20 20zM74 183.122c-40.804 0-74 33.196-74 74V438c0 40.804 33.196 74 74 74s74-33.196 74-74V257.122c0-40.804-33.196-74-74-74zM108 438c0 18.748-15.252 34-34 34s-34-15.252-34-34V257.122c0-18.748 15.252-34 34-34s34 15.252 34 34V438zM256 0c-40.804 0-74 33.196-74 74v364c0 40.804 33.196 74 74 74s74-33.196 74-74V74c0-40.804-33.196-74-74-74zm34 438c0 18.748-15.252 34-34 34s-34-15.252-34-34V74c0-18.748 15.252-34 34-34s34 15.252 34 34v364z"/></svg>',
                          },
                          {
                              name: "Tab Groups",
                              description: "Simplify workflows by opening multiple tabs with one click.",
                              svg:
                                  '<svg class="icon icon-tab-groups" viewBox="0 -20 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M465 81.434V60c0-33.086-26.914-60-60-60H60C26.914 0 0 26.914 0 60v352c0 33.086 26.914 60 60 60h392c33.086 0 60-26.914 60-60V140c0-28.617-20.148-52.61-47-58.566zM425 60v20h-90V60a59.657 59.657 0 0 0-3.441-20H405c11.027 0 20 8.973 20 20zM275 40c11.027 0 20 8.973 20 20v20h-91V60a59.657 59.657 0 0 0-3.441-20zm197 372c0 11.027-8.973 20-20 20H60c-11.027 0-20-8.973-20-20V60c0-11.027 8.973-20 20-20h84c11.027 0 20 8.973 20 20v60h288c11.027 0 20 8.973 20 20zm0 0"/></svg>',
                          },
                          {
                              name: "Pomodoro Timer",
                              description: "Improve your workflow with custom focus and rest timers.",
                              svg:
                                  '<svg class="icon icon-pomodoro" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M427.252 93.939c-42.503-26.268-97.046-35.291-143.541-25.641l.01-.021C293.236 49.25 309.9 40 334.667 40c11.046 0 20-8.954 20-20s-8.954-20-20-20C303.084 0 274.696 11.109 256 \t37.029 237.305 11.111 208.918 0 177.333 0c-11.046 0-20 8.954-20 20s8.954 20 20 20c24.333 0 40.828 8.919 50.428 27.267.18.343.351.687.523 1.031C126.652 47.206 0 110.518 0 255.958 0 394.862 96.599 512 256 512c159.009 0 256-116.731 256-256.042 0-70.703-30.098-128.243-84.748-162.019zm-180.196 22.616a20.07 20.07 0 0 0 17.889 0c68.531-34.269 218.655-.395 206.296 158.778h-96.574V256c0-11.046-8.954-20-20-20s-20 8.954-20 20v19.333H276v-58.667c0-11.046-8.954-20-20-20s-20 8.954-20 20v58.667h-58.667V256c0-11.046-8.954-20-20-20s-20 8.954-20 20v19.333H40.76C28.521 117.712 177.219 81.638 247.056 116.555zM256 472c-111.908 0-185.684-65.315-208.727-156.667h417.453C441.728 406.508 368.115 472 256 472zm33.809-92.476c7.811 7.811 7.811 20.474 0 28.284-7.811 7.811-20.474 7.81-28.284 0L256 402.284l-5.524 5.524c-7.811 7.811-20.474 7.811-28.284 0s-7.811-20.474 0-28.284l19.667-19.667c7.811-7.811 20.474-7.811 28.284 0z" /></svg>',
                          },
                          {
                              name: "Autofocus Mode",
                              description: "Always see your next important task front and center.",
                              svg:
                                  '<svg class="icon icon-autofocus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.999 511.999"><path d="M443.86 196.919L141.46 10.514C119.582-2.955 93.131-3.515 70.702 9.016c-22.429 12.529-35.819 35.35-35.819 61.041v371.112c0 38.846 31.3 70.619 69.77 70.829l.313.001c12.022-.001 24.55-3.769 36.251-10.909 9.413-5.743 12.388-18.029 6.645-27.441-5.743-9.414-18.031-12.388-27.441-6.645-5.473 3.338-10.818 5.065-15.553 5.064-14.515-.079-30.056-12.513-30.056-30.898V70.058c0-11.021 5.744-20.808 15.364-26.183 9.621-5.375 20.966-5.135 30.339.636l302.401 186.405c9.089 5.596 14.29 14.927 14.268 25.601-.022 10.673-5.261 19.983-14.4 25.56L204.147 415.945c-9.404 5.758-12.36 18.049-6.602 27.452 5.757 9.404 18.048 12.36 27.452 6.602l218.611-133.852c20.931-12.769 33.457-35.029 33.507-59.55.05-24.518-12.386-46.83-33.255-59.678z"/></svg>',
                          },
                      ],
                  },
              },
              yt = [mt.UPSELL_BACKGROUND, mt.UPSELL_POMODORO],
              _t = [mt.INTRODUCTION],
              St = [mt.INTRODUCTION],
              zt = {
                  [mt.INTRODUCTION]: {
                      name: "Introduction",
                      id: mt.INTRODUCTION,
                      getPlanInfo: !0,
                      stage: 0,
                      component: r,
                      hideOtherApps: !0,
                      backgroundSrc: "/img/onboarding-bg.png",
                      hideClose: !0,
                      subSteps: [{ component: p, name: "Welcome", hideFooter: !0 }, bt, xt, wt],
                  },
                  [mt.TEAM_INTRODUCTION]: {
                      name: "Team Introduction",
                      id: mt.TEAM_INTRODUCTION,
                      stage: 0,
                      component: r,
                      hideOtherApps: !0,
                      hideClose: !0,
                      backgroundSrc: "/img/onboarding-bg.png",
                      subSteps: [{ component: p, name: "Welcome", hideFooter: !0 }, bt, xt],
                  },
                  [mt.PLUS_WELCOME]: { name: "Plus Welcome", id: mt.PLUS_WELCOME, stage: 0, component: r, hideOtherApps: !0, subSteps: [{ component: x, name: "Welcome to Plus" }] },
                  [mt.PLUS_GATE]: {
                      name: "Plus Gate",
                      getPlanInfo: !0,
                      id: mt.PLUS_GATE,
                      component: r,
                      backgroundSrc: "/img/onboarding-bg.png",
                      customClass: "plus-upsell",
                      swapPrimaryButton: !0,
                      subSteps: [{ ...wt, nextButtonText: "No Thanks" }],
                  },
                  [mt.UPGRADE]: {
                      name: "Upgrade",
                      id: mt.UPGRADE,
                      getPlanInfo: !0,
                      firstSubStep: () => (localStorage.getItem("unregistered") ? 0 : 1),
                      component: r,
                      hideOtherApps: !0,
                      customCss: ".progress { visibility: hidden; }",
                      transition: "slide-fade",
                      transitionMode: "",
                      customWidth: 800,
                      customHeight: 610,
                      sidebar: U,
                      subSteps: [vt, ht, gt, ft],
                  },
                  [mt.PLUS_UPSELL_NOTIFICATION]: {
                      name: "Plus Upsell Notification",
                      id: mt.PLUS_UPSELL_NOTIFICATION,
                      stage: 1,
                      prerequisite: mt.INTRODUCTION,
                      headerText: "Upgrade to Momentum Plus",
                      bodyText: "Enjoy added customization, integrations, widgets, and more!",
                      position: "top-right",
                      ctaUrl: "https://momentumdash.com/plus",
                      ctaText: "Learn more",
                      ctaClasses: "button",
                      hideSkip: !0,
                      hideNext: !0,
                      targetElementSelector: "[data-ob=settings-toggle]",
                      targetDistance: 15,
                  },
                  [mt.APP_LAUNCHER]: {
                      name: "App Launcher",
                      id: mt.APP_LAUNCHER,
                      stage: 1,
                      prerequisite: mt.TEAM_INTRODUCTION,
                      headerText: "Quick launcher",
                      bodyText: "Easily access company resources. You can also save your most important websites for easy access.",
                      position: "bottom-right",
                      targetElementSelector: "[data-ob=apps-app-dash]",
                      targetDistance: 15,
                  },
                  [mt.FOCUS]: {
                      name: "Focus",
                      id: mt.FOCUS,
                      prerequisite: ct ? mt.APP_LAUNCHER : mt.INTRODUCTION,
                      stage: 1,
                      headerText: "Single-task focus",
                      bodyText: "Stay focused with a reminder of your most important item for the day.",
                      position: "top-left",
                      ctaUrl: "https://get.momentumdash.help/hc/en-us/articles/115015675507-Getting-Started-with-Extra-weather-info",
                      targetElementSelector: "[data-ob=focus-dash]",
                      targetDistance: 5,
                  },
                  [mt.TODO]: {
                      name: "Todo",
                      id: mt.TODO,
                      prerequisite: mt.FOCUS,
                      stage: 1,
                      headerText: "Organize your day",
                      bodyText: "Track your tasks, sort them in order of priority, and have them populate your focus so you can check them off as you go.",
                      position: "top-left",
                      targetElementSelector: "[data-ob=todo-app-dash]",
                      targetDistance: 5,
                  },
                  [mt.SETTINGS]: {
                      name: "Settings",
                      id: mt.SETTINGS,
                      prerequisite: mt.TODO,
                      stage: 1,
                      headerText: "Customized to you",
                      bodyText: "Find more customization options in here to personalize Momentum to your liking. Show/hide widgets, change the theme, and more.",
                      position: "top-right",
                      targetElementSelector: "[data-ob=settings-toggle]",
                      targetDistance: 5,
                  },
                  [mt.UPSELL_POMODORO]: { name: "Upsell: Pomodoro", id: mt.UPSELL_POMODORO, component: Q },
                  [mt.UPSELL_BACKGROUND]: { name: "Upsell: Background", id: mt.UPSELL_BACKGROUND, component: nt },
              },
              Ct = "introduction:free",
              kt = {
                  [Ct]: {
                      name: "introduction:free",
                      variants: {
                          "upgrade:extension": { steps: [mt.INTRODUCTION], overrides: { [mt.INTRODUCTION]: { notifyServerOfPathCompletion: !0 } } },
                          "upgrade:external": { steps: [mt.INTRODUCTION], overrides: { [mt.INTRODUCTION]: { notifyServerOfPathCompletion: !0 } } },
                      },
                  },
              };
          let Mt = [];
          const Tt = { all: Object.keys(kt), free: [Ct] },
              Ot = { all: Object.keys(zt), upsells: yt, unregistered: [], free: _t, plus: St, teamMember: [], teamAdmin: [] };
      },
      8094: (t, e, a) => {
          "use strict";
          a.d(e, { Z: () => s });
          let n = {};
          const s = {
              bind: function (t, e) {
                  let a, s;
                  (t.dataset.justBoundClickOutsideHandler = !0),
                      setTimeout(() => {
                          t.dataset.justBoundClickOutsideHandler = !1;
                      }, 100);
                  const o = (t) => {
                          (s = !1), ((t) => t && t.clientX > window.innerWidth)(t) ? (s = !0) : (a = t.target);
                      },
                      i = (n) => {
                          s || ((e.modifiers.bubble || (!t.contains(a) && !t.contains(n.target) && t !== a && t !== n.target && "true" !== t.dataset.justBoundClickOutsideHandler)) && e.value(n));
                      };
                  (t.dataset.clickOutsideMouseupHandlerId = Math.random().toString(36).substring(7)),
                      (t.dataset.clickOutsideMousedownHandlerId = Math.random().toString(36).substring(7)),
                      (n[t.dataset.clickOutsideMouseupHandlerId] = i),
                      (n[t.dataset.clickOutsideMousedownHandlerId] = o),
                      document.addEventListener("mouseup", i),
                      document.addEventListener("mousedown", o);
              },
              unbind: function (t) {
                  document.removeEventListener("mouseup", n[t.dataset.clickOutsideMouseupHandlerId]),
                      document.removeEventListener("mousedown", n[t.dataset.clickOutsideMousedownHandlerId]),
                      delete n[t.dataset.clickOutsideMouseupHandlerId],
                      delete n[t.dataset.clickOutsideMousedownHandlerId],
                      delete t.dataset.clickOutsideMouseupHandlerId,
                      delete t.dataset.clickOutsideMousedownHandlerId,
                      delete t.dataset.justBoundClickOutsideHandler;
              },
          };
      },
      4525: (t, e, a) => {
          "use strict";
          a.d(e, { Z: () => c });
          var n = a(1238),
              s = a(1018),
              o = a(7366),
              i = a.n(o),
              r = a(2096);
          n.Z.use(s.Z, { name: "unreactive" }),
              n.Z.use(i()),
              (n.Z.prototype.$e = r.Z),
              new n.Z({ bb: () => ({ conditionalFeatures: m.conditionalFeatures }) }),
              n.Z.mixin({ computed: { $plus: () => true, $team: () => m.conditionalFeatures.featureEnabled("team") } });
          const c = n.Z;
      },
      9992: (t, e, a) => {
          (t.exports = a(7788)(!1)).push([
              t.id,
              "\n:root {\n\t--color-hue: 187;\n}\n.modal-base {\n\t/* Overrides because onboarding is always light mode */\n\t--icon-color: #333;\n\t--icon-wrapper-bg: rgba(0,0,0,0.05);\n}\n.modal { --modal-padding: 40px;\n}\n\n",
              "",
          ]);
      },
      8396: (t, e, a) => {
          (t.exports = a(7788)(!1)).push([
              t.id,
              "\n@keyframes shake-data-v-dc3de724 {\n0% { transform: translateY(0);\n}\n19% { transform: translateY(-12px);\n}\n38% { transform: translateY(0);\n}\n52.25% { transform: translateY(-4px);\n}\n66.5% { transform: translateY(0);\n}\n76.5% { transform: translateY(-2px);\n}\n87% { transform: translateY(0);\n}\n93.5% { transform: translateY(-1px);\n}\n100% { transform: translateY(0);\n}\n}\n.modal-container[data-v-dc3de724] { position: absolute; top: 0; right: 0; bottom: 0; left: 0; z-index: 100; display: flex; align-items: center; justify-content: center;\n}\n.modal-overlay[data-v-dc3de724] { position: absolute; top: 0; right: 0; bottom: 0; left: 0; background-color: rgba(0,0,0,0.5);\n}\n.modal-container .modal[data-v-dc3de724] { --modal-height: 500px; --modal-width: 640px; --onboarding-padding: 40px; height: var(--modal-height); width: var(--modal-width); padding: 0; position: relative; display: flex; align-items: stretch; background: hsl(0, 0%, 94%); box-shadow: 0 22px 60px rgba(0,0,0,0.6); color: rgb(30,30,30); overflow-y: auto; text-align: center; transition: var(--a-default), width 0.5s ease, height 0.5s ease;\n}\n.modal.shake[data-v-dc3de724] { animation: shake-data-v-dc3de724 0.7s ease both;\n}\n.close[data-v-dc3de724] { height: 50px; width: 50px; padding: 0; position: absolute; top: 8px; right: 8px; z-index: 5;\n}\n.close[data-v-dc3de724]:after { --icon-wrapper-size: 33px !important;\n}\n.close[data-v-dc3de724]:hover:after { background: var(--icon-wrapper-bg);\n}\n.icon-close[data-v-dc3de724] { height: 11px; fill: var(--icon-color);\n}\n.sale-banner[data-v-dc3de724] { --gradient-factor: 15; height: 27px; width: 100%; position: absolute; top: 0; left: 0; display: flex; align-items: center; justify-content: center; background: linear-gradient(141deg,hsla(calc(var(--color-hue) - var(--gradient-factor)),59%,44%,1),hsla(calc(var(--color-hue) + var(--gradient-factor)),59%,44%,1)); color: #fff; font-size: .875em; text-transform: uppercase;\n}\n.sale-title[data-v-dc3de724] { margin-right: .75em; margin-left: 1px;\n}\n.sale-description[data-v-dc3de724] { opacity: .85;\n}\n\t\t/*.modal .icon-wrapper-close { padding: 15px; margin: -15px -15px 0 0; opacity: 0.6; transition: opacity 0.3s ease; cursor: pointer; }*/\n.main[data-v-dc3de724] { --leave-transition-translation: -100%; --enter-transition-translation: 0; height: var(--modal-height); min-width: 0; position: relative; flex: 1 1 auto; overflow: hidden;\n}\n.main.reverse[data-v-dc3de724] { --enter-transition-translation: -100%; --leave-transition-translation: 0;\n}\n.step-container[data-v-dc3de724] { height: 100%; width: var(--main-width);\n}\n.modal[data-v-dc3de724] .content { display: flex; flex-direction: column; align-items: center;\n}\n.modal[data-v-dc3de724] .title { margin: 0.25rem 0; display: inline-block; opacity: 1; font-family: Futura, sans-serif; font-size: 31px; font-weight: 600; letter-spacing: -0.4px; user-select: none;\n}\n.modal[data-v-dc3de724] .subheading { margin-top: 1px; color: rgba(30, 30, 30, 0.6); letter-spacing: -0.4px; line-height: 1.5; font-size: 1.25rem; user-select: none;\n}\n.modal[data-v-dc3de724] .subheading-active { /*color: hsl(var(--color-hue), 57%, 42%);*/\n};\n.modal[data-v-dc3de724] .body {\n}\n.modal .footer[data-v-dc3de724] { position: absolute; left: 0; right: 0; bottom: 1.5rem; user-select: none;\n}\n.modal[data-v-dc3de724] .button { min-width: 140px; padding: 12px 31px; background: hsl(var(--color-hue), 48%, 58%); box-shadow: 0 0px 12px hsla(var(--color-hue), 48%, 58%, 0), 0 2px 4px rgba(0,0,0,0.09); color: #fff; font-size: 0.875rem; font-weight: 500; transition: all 0.1s ease; user-select: none;\n}\n.modal[data-v-dc3de724] .button:hover { background: hsl(var(--color-hue), 58%, 60%) !important; box-shadow: 0 3px 12px hsla(var(--color-hue), 54%, 63%, 0.2), 0 2px 4px rgba(0,0,0,0.09);\n}\n.modal[data-v-dc3de724] .button:hover:active { background: hsla(var(--color-hue), 63%, 64%, 1) !important; transform: translateY(1px); transition: all 0s ease;\n}\n.modal[data-v-dc3de724] .button:not(:last-of-type) { margin-right: 0.75rem;\n}\n.below-button-msg[data-v-dc3de724] { margin-top: 0.8rem; opacity: 0.75; font-size: 0.875rem;\n}\n.progress[data-v-dc3de724] { margin-top: 0.5rem;\n}\n.progress.hide-progress[data-v-dc3de724] { visibility: hidden;\n}\n.progress-dot-wrapper[data-v-dc3de724] { padding: 0 2px; opacity: 0.3; cursor: pointer;\n}\n.progress-dot-wrapper.active[data-v-dc3de724] { opacity: 0.8;\n}\n.dot[data-v-dc3de724] { display: inline-block; transition: transform 0.3s ease;\n}\n.progress-dot-wrapper:hover .dot[data-v-dc3de724] { transform: scale(1.5) translateY(-1px);\n}\n.modal[data-v-dc3de724] .onboarding-bg { position: absolute; bottom: -30px; left: 0; z-index: -1; pointer-events: none;\n}\n.modal[data-v-dc3de724] .onboarding-bg img { width: 760px; margin-left: -60px; opacity: 0.125; vertical-align: top;\n}\n\n\n\t\t/* Upgrade to Plus */\n.button.button-secondary[data-v-dc3de724] { opacity: 1 !important; background: hsl(var(--color-hue), 12%, 62%); /*background: white; color: #47a1ad;*/\n}\n.light footer.footer .button.button-secondary[data-v-dc3de724] { color: #fff; background: hsl(var(--color-hue), 12%, 62%);\n}\n.button.button-secondary[data-v-dc3de724]:hover { background: hsl(var(--color-hue), 14%, 57%) !important; box-shadow: 0 3px 12px hsla(var(--color-hue), 14%, 57%, 0.2), 0 2px 4px rgba(0,0,0,0.09)\n}\n.button.button-secondary[data-v-dc3de724]:hover:active { background: hsl(var(--color-hue), 16%, 52%) !important;\n}\n.sidebar[data-v-dc3de724] { height: var(--modal-height);\n}\n\n\n/* Plus Upsell */\n.plus-upsell[data-v-dc3de724] {\n}\n.plus-upsell .onboarding-bg[data-v-dc3de724] { opacity: 0.5;\n}\n.zoom-enter-active[data-v-dc3de724], .zoom-leave-active[data-v-dc3de724] { transition: all 0.8s ease-out !important;\n}\n.zoom-enter[data-v-dc3de724] { opacity: 0 !important; transform: translateY(0.6rem) scale(0.9) !important;\n}\n.zoom-leave-to[data-v-dc3de724] { opacity: 0 !important; transform: translateY(-0.6rem) scale(1.1) !important;\n}\n.fade-enter-active[data-v-dc3de724], .fade-leave-active[data-v-dc3de724] { transition: opacity 500ms var(--a-curve);\n}\n.fade-enter[data-v-dc3de724], .fade-leave-to[data-v-dc3de724] { opacity: 0;\n}\n.banner-fade-enter-active[data-v-dc3de724] { transition: opacity 2s cubic-bezier(1,-0.2,.85,.63);\n}\n.banner-fade-leave-active[data-v-dc3de724] { transition: opacity 1s cubic-bezier(.73,.36,.2,1.25);\n}\n.banner-fade-enter[data-v-dc3de724], .banner-fade-leave-to[data-v-dc3de724] { opacity: 0;\n}\n.slide-fade-enter-active[data-v-dc3de724], .slide-fade-leave-active[data-v-dc3de724] { position: absolute; left: 50%; transform: translateX(-50%); pointer-events: none; z-index: -1;\n}\n.slide-fade-enter-active[data-v-dc3de724] { transition: opacity 1s ease, transform 1s ease;\n}\n.slide-fade-enter[data-v-dc3de724] { transform: translateX(var(--enter-transition-translation));\n}\n.slide-fade-leave[data-v-dc3de724] { transform: translateX(-50%);\n}\n.slide-fade-enter[data-v-dc3de724], .slide-fade-leave-to[data-v-dc3de724] { opacity: 0;\n}\n.slide-fade-leave-to[data-v-dc3de724] { transform: translateX(var(--leave-transition-translation)); transition: opacity .7s ease, transform 1s ease;\n}\n",
              "",
          ]);
      },
      6760: (t, e, a) => {
          (t.exports = a(7788)(!1)).push([
              t.id,
              "\n.onboarding-intro[data-v-0a6c765c] { padding: var(--modal-padding);\n}\n.slide-fade-enter[data-v-0a6c765c] { opacity: 0; transform: translateY(3px);\n}\n.slide-fade-enter-active[data-v-0a6c765c] { transition: all 0.2s ease-out;\n}\n.slide-fade-leave-to[data-v-0a6c765c] { opacity: 0; transform: translateY(-2px);\n}\n.slide-fade-leave-active[data-v-0a6c765c] { transition: all 0.1s ease-out;\n}\n.benefit-icons[data-v-0a6c765c] { margin-top: 2rem; position: relative; z-index: 1; display: flex; user-select: none;\n}\n.benefit-icon[data-v-0a6c765c] { --padding: 1rem; margin: calc(var(--padding) * -1) 0; padding: var(--padding) 0; flex: 0 0 33.333%; display: flex; flex-direction: column; align-items: center; justify-content: center; color: hsl(var(--color-hue), 57%, 42%); font-size: 1.0625rem; font-weight: 600; transition: all 0.5s ease;\n}\n.benefit-icon[data-v-0a6c765c]:hover  { transform: scale(1) translateY(-3px);\n}\n.icon-svg[data-v-0a6c765c] { --icon-size: 65px; height: var(--icon-size); margin-bottom: 9px; display: flex; flex-direction: column; align-items: center; justify-content: center;\n}\n.icon-svg[data-v-0a6c765c]:before { --size: 57px; height: var(--size); width: var(--size); position: absolute; z-index: -1; background: white; border-radius: var(--size); content: '';\n}\n.benefit-icons[data-v-0a6c765c] .icon-svg-icon { height: var(--icon-size); width: var(--icon-size); fill: hsl(var(--color-hue), 46%, 51%);\n}\n.benefit-icons[data-v-0a6c765c] .icon-mantras { margin-top: -4px; margin-left: -4px;\n}\n.benefit-icons[data-v-0a6c765c] .icon-focus { --icon-size: 67px;\n}\n.benefit-icons[data-v-0a6c765c] .icon-todo { --icon-size: 61px;\n}\n.benefit-icons[data-v-0a6c765c] .icon-links { --icon-size: 65px;\n}\n.benefit-icons[data-v-0a6c765c] .icon-notes { margin-right: -1px;\n}\n.benefit-icons[data-v-0a6c765c] .icon-content { --icon-size: 67px; margin-right: -10px;\n}\n.benefit-icons[data-v-0a6c765c] .icon-integration { --icon-size: 63px; position: relative; top: 3px;\n}\n.benefit-icons[data-v-0a6c765c] .icon-functionality { --icon-size: 57px;\n}\n.benefit-list[data-v-0a6c765c] { margin-top: 27px; margin-left: 4%; padding: 0 3rem; display: grid; grid-template-columns: 1fr 1fr; grid-column-gap: var(--spacing); user-select: none;\n}\n.benefit-list li[data-v-0a6c765c] { padding: 4px 0 3px 2.2rem; position: relative; text-align: left; font-size: 0.875rem; font-weight: 500; cursor: default;\n}\n.benefit-list .icon-container[data-v-0a6c765c] { --size: 22px; height: var(--size); width: var(--size); margin-right: 5px; display: inline-flex; align-items: center; justify-content: center; vertical-align: text-bottom;\n}\n.benefit-list[data-v-0a6c765c] .icon { height: 18px; padding-top: 4px; opacity: 0.6; fill: #000;\n}\n.benefit-list[data-v-0a6c765c] .icon-autofocus { height: 16px;\n}\n.benefit-list[data-v-0a6c765c] .icon-tab-groups { height: 17px;\n}\n.bottom-link[data-v-0a6c765c] { margin-top: 4px; user-select: none;\n}\n.bottom-link[data-v-0a6c765c] .icon { height: 8px; margin-left: 4px;\n}\n.bottom-link-anchor[data-v-0a6c765c] { padding: 7px; opacity: 0.65; color: #111; font-size: 0.75rem; font-weight: 500; text-transform: uppercase; transition: var(--a-default);\n}\n.bottom-link-anchor[data-v-0a6c765c]:hover { text-decoration: underline;\n}\n.bottom-link-anchor[data-v-0a6c765c]:hover:active { opacity: 1;\n}\n\n",
              "",
          ]);
      },
      7281: (t, e, a) => {
          (t.exports = a(7788)(!1)).push([
              t.id,
              "\n.onboarding-intro[data-v-783babda] { padding: var(--modal-padding); position: absolute; top: 0; right: 0; bottom: 0; left: 0;\n\t\t--curve: ease;\n\n\t\t--step-1-duration: 2s;\n\t\t--step-1-transition: var(--step-1-duration) ease;\n\n\t\t/*\n\t\t--step-2-duration: 2s;\n\t\t--step-2-transition: var(--step-2-duration) ease;\n\n\t\t--step-3-duration: 0.8s;\n\t\t--step-3-transition: var(--step-2-duration) ease;\n\t\t*/\n}\n.onboarding-intro .title[data-v-783babda] { margin: 2rem 0 1rem !important; white-space: nowrap;\n}\n\t\t\t/* nowrap ensures accurate measurement. <br> will be inserted if needed  */\n\n\t\t/*.onboarding-bg { position: absolute; bottom: -30px; left: 0; z-index: -1; pointer-events: none; }*/\n\t\t\t/*.onboarding-bg img { width: 760px; margin-left: -80px; opacity: 0.125; vertical-align: top; }*/\n\n\n\t/* INTRO ANIMATION */\n\n\t/* general animation css */\n.intro-animation-active[data-v-783babda] { opacity: 0; transform: translateY(20px); transition: all 2s ease-out;\n}\n.intro-animation-active.show[data-v-783babda] { opacity: 1; transform: translateY(0);\n}\n.intro-animation-active .onboarding-bg[data-v-783babda] { opacity: 0; transform: translateY(16px) scale(0.85); transition: all calc(var(--step-1-duration)) var(--curve);\n}\n.intro-animation-active.show .onboarding-bg[data-v-783babda] { opacity: 1; transform: translateY(0) scale(1);\n}\n.intro-animation-active .footer[data-v-783babda] { opacity: 0;\n}\n\n\t/* .step-1 */\n/*\t\t.step-1 .content { transform: translateY(60px); transition: var(--step-1-duration); }\n\n\t\t\t.step-1 .title { opacity: 0; transform: translateY(0px) scale(0.85); transition: var(--step-1-transition); transition-delay: 0s; white-space: nowrap; }\n\t\t\t\t.step-1 span { opacity: 0; }\n\t\t\t\t\t.step-1 .title .welcome { margin-left: var(--title-margin-left); opacity: 1; transition-delay: var(--welcome-delay); }\n\t\t\t\t\t.step-1 .title .to-momentum { transition-delay: calc(var(--welcome-delay) + 300ms); }\n\t\t\t\t\t.step-1 .title .name, .step-1 .title .comma { transition-delay: calc(var(--welcome-delay) + 500ms); }\n\t\t\t\t\t.step-1 .title .name.translate { display: inline-block; transform: translateX(20%); transition: opacity var(--step-1-duration) var(--curve) calc(var(--welcome-delay) + 500ms), transform calc(var(--step-1-duration) * 0.7) var(--curve) calc(var(--welcome-delay) + 500ms); }\n\n\t\t\t.step-1 .subheading { display: none; }\n\n\t\t.step-1 .footer { opacity: 0; }*/\n\n\n\t/* .step-1-active */\n/*\t\t.step-1-active .content { transform: translateY(38px); }\n\n\t\t\t.step-1-active .title { opacity: 1; transform: translateY(0px) scale(1); }\n\t\t\t.step-1-active span { --name-reveal-duration: 1.5s; --welcome-delay: calc(var(--step-1-duration) - 0ms); transition: all var(--name-reveal-duration) ease-in-out; }\n\n\t\t\t\t.step-1-active .title .welcome { margin-left: 0; }\n\t\t\t\t.step-1-active .title .to-momentum, .step-1-active .title .name, .step-1-active .title .comma { opacity: 1; }\n\t\t\t\t.step-1-active .title .name.translate { display: inline-block; transform: none; }*/\n\n\n\t/* .step-1 */\n.step-1 .content[data-v-783babda] { transform: translateY(80px); transition: var(--step-1-transition);\n}\n.step-1 .title[data-v-783babda], .step-1 .subheading[data-v-783babda] { opacity: 0; transition: var(--step-1-transition);\n}\n.step-1 .title[data-v-783babda] {\n}\n.step-1 .subheading[data-v-783babda] { transform: translateY(16px);\n}\n.step-1 .footer[data-v-783babda] { opacity: 0; transform: translateY(10px); transition-duration: 0s;\n}\n\n\n\t/* step-1-active */\n.step-1-active .content[data-v-783babda] { transform: translateY(0);\n}\n.step-1-active .title[data-v-783babda], .step-1-active .subheading[data-v-783babda] { opacity: 1;\n}\n.step-1-active .subheading[data-v-783babda] { transform: translateY(0px); transition-delay: 1000ms;\n}\n.step-1-active .footer[data-v-783babda] { opacity: 1; transform: translateY(0); transition: calc(var(--step-1-transition)); transition-delay: 1000ms; transition-duration: calc(var(--step-1-duration) - 500ms);\n}\n\n",
              "",
          ]);
      },
      3924: (t, e, a) => {
          (e = t.exports = a(7788)(!1)).i(a(93), ""),
              e.push([
                  t.id,
                  "\n.choose-plan[data-v-5464ffd0] {\n}\n.plan-list[data-v-5464ffd0] { width: var(--form-width-narrow); margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); grid-gap: 8px;\n}\n.plan-list-item[data-v-5464ffd0] { --choose-plan-padding: 14px; padding: var(--choose-plan-padding); align-items: center; display: inline-flex; flex-direction: row; flex: 1 0 49%; background: hsl(0, 0%, 98%); box-shadow: inset 0 0 0 1px var(--input-border-color); border-radius: var(--border-radius); cursor: pointer; outline: none; text-align: left; transition: var(--a-medium);\n}\n.plan-list-item[data-v-5464ffd0]:hover { /*background: hsl(var(--color-hue), 6%, 92%) linear-gradient(178deg, rgba(255,255,255,0.25), rgba(0,0,0,0.1));*/\n}\n.plan-list-radio-wrapper[data-v-5464ffd0] { display: flex; flex-direction: column; align-items: center; justify-content: center;\n}\n.choose-plan .radio[data-v-5464ffd0] { --size: 20px; height: var(--size); width: var(--size); display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.12); box-shadow: none;\n}\n.choose-plan .radio .icon-check[data-v-5464ffd0] { --size: 12px; height: var(--size); width: var(--size); display: none;\n}\n.choose-plan-text-wrapper[data-v-5464ffd0] { margin-left: var(--choose-plan-padding);\n}\n.plan-list-title[data-v-5464ffd0] { margin: -1px 0 3px; display: inline-block; font-size: 1.125rem; font-weight: 500;\n}\n.choose-plan-term .period[data-v-5464ffd0] { margin-right: 6px; margin-bottom: 4px; white-space: nowrap;\n}\n.choose-plan-badge[data-v-5464ffd0] { padding: 3px 5px; display: inline; background: white; border: 1px solid hsla(var(--hue), 60%, 45%, 0.5); border-radius: var(--border-radius); color: var(--color-active); font-size: 0.6875rem; font-weight: 600; text-transform: uppercase; vertical-align: 17%; white-space: nowrap;\n}\n.choose-plan-badge[data-v-5464ffd0]:last-child { margin-right: 0;\n}\n.choose-plan-price[data-v-5464ffd0] { opacity: 0.7; font-size: 0.875rem;\n}\n.choose-plan-description[data-v-5464ffd0] { margin-left: 5px; opacity: 0.5; font-size: 0.8125rem;\n}\n.choose-plan .active[data-v-5464ffd0] { opacity: 1 !important; background: hsl(var(--color-hue), 60%, 95%); box-shadow: inset 0 0 0 2px hsl(var(--hue), 50%, 50%); color: #444 !important; transform: translateY(-1px);\n}\n.choose-plan .active .radio[data-v-5464ffd0] { background: var(--color-active);\n}\n.choose-plan .active .radio .icon-check[data-v-5464ffd0] { display: block; fill: #fff;\n}\n\n\n\t/* Sale updates */\n.has-sale[data-v-5464ffd0] { --sale-color: var(--color-active);\n}\n.has-sale .choose-plan-price-sale[data-v-5464ffd0] { opacity: 1; color: hsl(122, 39%, 49%); font-weight: 500;\n}\n.has-sale .choose-plan-badge[data-v-5464ffd0] { border-color: var(--sale-color); background-color: var(--sale-color); color: white;\n}\n.has-sale .choose-plan-description[data-v-5464ffd0] { margin-top: 3px; margin-left: 0; display: block;\n}\n.has-sale .choose-plan-description .u--strikeout[data-v-5464ffd0] { opacity: 0.7;\n}\n\n\n\n",
                  "",
              ]);
      },
      7783: (t, e, a) => {
          (e = t.exports = a(7788)(!1)).i(a(93), ""),
              e.push([
                  t.id,
                  "\n.choose-email[data-v-4756e094] {\n}\n.choose-email .email-row[data-v-4756e094] { width: var(--form-width-narrow); margin: 0 auto;\n}\n.label-wrapper[data-v-4756e094] { display: flex;\n}\n.external-upgrade[data-v-4756e094] { margin-left: 10px; color: hsl(var(--color-hue), 48%, 58%); font-size: var(--label-font-size); text-decoration: underline;\n}\n",
                  "",
              ]);
      },
      2449: (t, e, a) => {
          (t.exports = a(7788)(!1)).push([
              t.id,
              "\n.sidebar[data-v-f913af58] { --hue: 187; width: 210px; padding: 3rem 1.5rem; flex: 0 0 auto; display: flex; flex-direction: column; justify-content: space-between; background: hsl(var(--hue), 30%, 94%) !important; color: hsl(var(--hue), 8%, 38%);\n}\n.include-wrapper[data-v-f913af58] {\n}\n.include-heading[data-v-f913af58] { margin: 0 0 13px; font-family: Futura, sans-serif; font-size: 1.0625rem; line-height: 1.5; font-weight: 700; text-align: left;\n}\n.includes[data-v-f913af58] { margin-bottom: 1rem;\n}\n.include-item[data-v-f913af58] { margin-bottom: 9px; display: flex;\n}\n.include-icon-wrapper[data-v-f913af58] { margin-right: 5px;\n}\n.include-icon[data-v-f913af58] { height: 14px; margin-top: 3px; margin-right: 6px; fill: hsl(var(--hue), 48%, 58%); vertical-align: -7%;\n}\n.include-item-label[data-v-f913af58] { font-size: 14px; line-height: 1.3; text-align: left;\n}\n.social-proof[data-v-f913af58] { padding: 0 10px; line-height: 1.5; text-align: left; font-size: 14px;\n}\n.social-quote[data-v-f913af58] { opacity: 0.9; font-style: italic; line-height: 1.4;\n}\n.social-qmark[data-v-f913af58] { margin-top: -4px; position: absolute; opacity: 0.4; font-family: 'Source Serif Pro', sans-serif; font-size: 150%;\n}\n.social-qmark-open[data-v-f913af58] { margin-left: -14px; margin-right: 2px;\n}\n.social-qmark-close[data-v-f913af58] { margin-left: 2px;\n}\n.social-source[data-v-f913af58] { margin-top: 7px; margin-bottom: -4px; display: flex; align-items: center; font-size: 12px; font-style: normal;\n}\n.social-avatar[data-v-f913af58] { --size: 24px; height: var(--size); width: var(--size); margin-right: 6px; display: inline-block; background: rgba(0,0,0,0.15); border-radius: var(--size);\n}\n.social-name[data-v-f913af58] { opacity: 0.65;\n}\n",
              "",
          ]);
      },
      4748: (t, e, a) => {
          (t.exports = a(7788)(!1)).push([
              t.id,
              "\n.thanks[data-v-18f29881] { height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;\n}\nh3[data-v-18f29881] { line-height: 1.8;\n}\n.icon-check[data-v-18f29881] { height: 50px;\n}\n",
              "",
          ]);
      },
      4178: (t, e, a) => {
          (e = t.exports = a(7788)(!1)).push([t.id, "@import url(https://fonts.googleapis.com/css?family=Source+Serif+Pro&display=swap);", ""]), e.push([t.id, "\n", ""]);
      },
      3780: (t, e, a) => {
          (t.exports = a(7788)(!1)).push([t.id, "\niframe[data-v-2dff5714] { height: 100%; width: 100%; border: none;\n}\n", ""]);
      },
      9557: (t, e, a) => {
          (t.exports = a(7788)(!1)).push([
              t.id,
              "\n.features[data-v-48f801c8] { margin-top: 43px; padding: 0 12px; display: grid; grid-template-columns: 1fr 1fr 1fr; grid-gap: 10px 19px; font-size: 0.875rem; font-weight: 500;\n}\n.features li[data-v-48f801c8] { position: relative; text-align: center;\n}\n.feature[data-v-48f801c8] { font-size: 17px;\n}\n.feature-icon[data-v-48f801c8] { --size: 104px; height: var(--size); width: var(--size);\n}\n\n",
              "",
          ]);
      },
      210: (t, e, a) => {
          (t.exports = a(7788)(!1)).push([
              t.id,
              "\n.demo[data-v-2a231b83] { padding: var(--app-padding); flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; opacity: 0.6;\n}\n.timer[data-v-2a231b83] { font-size: 4rem; font-weight: 600; line-height: 1.1;\n}\n.greeting[data-v-2a231b83] { font-size: 2rem;\n}\n.features[data-v-2a231b83] { padding: 0 12px; display: grid; grid-template-columns: 1fr 1fr 1fr; grid-gap: 10px 19px; font-size: 0.875rem; font-weight: 500;\n}\n.features li[data-v-2a231b83] { position: relative;\n}\n\n",
              "",
          ]);
      },
      1220: (t, e, a) => {
          (t.exports = a(7788)(!1)).push([
              t.id,
              "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*.icon { --size: 14px; height: var(--size); width: var(--size); background: rgba(0,0,0,0.1); border-radius: 3px; }*/\n.name[data-v-3476490a] { --padding: 3px; margin: calc(var(--padding) * -1); padding: var(--padding); display: inline-block;\n}\n\n/* Tooltip animation */\n.slide-fade-enter-active[data-v-3476490a], .slide-fade-leave-active[data-v-3476490a] { transition: all 0.1s ease; transition-delay: 0.15s;\n}\n.slide-fade-enter[data-v-3476490a] { opacity: 0; transform: translateY(-2px);\n}\n.slide-fade-leave-to[data-v-3476490a] { opacity: 0; transform: translateY(2px);\n}\n\n",
              "",
          ]);
      },
      5133: (t, e, a) => {
          (t.exports = a(7788)(!1)).push([
              t.id,
              "\n.app-container[data-v-030ea954] { --app-padding: 32px; --hue: 202; position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 1000; display: flex; align-items: center; background: rgba(0,0,0,0.5);\n}\n.app[data-v-030ea954] { height: 500px; width: 640px; position: relative; display: flex; flex-direction: column; background: #ededed; color: #222; overflow: visible; transform: none;\n}\n.header[data-v-030ea954] { margin: calc(var(--app-padding) * -1); margin-bottom: 0; padding: 4px; flex: 0; display: grid; grid-template-columns: 1fr max-content 1fr;\n}\n.header .icon-wrapper[data-v-030ea954] { height: 100%; width: var(--header-height); padding: 0; display: flex; align-items: center;\n}\n.header .icon-wrapper[data-v-030ea954]:after { --icon-wrapper-size: 33px;\n}\n.header .icon-wrapper[data-v-030ea954]:hover:after { background: var(--icon-wrapper-bg);\n}\n.header .icon[data-v-030ea954] { fill: #333;\n}\n.header-left[data-v-030ea954] {\n}\n.header .back .icon[data-v-030ea954] { height: 12px;\n}\n.header-title[data-v-030ea954] { display: flex; align-items: center; color: hsla(var(--hue) 50% 50%); font-size: 0.6875rem; font-weight: 700; letter-spacing: 0.15ch; text-align: center; text-transform: uppercase;\n}\n.header-right[data-v-030ea954] { height: 100%; display: flex; justify-content: flex-end; text-align: right;\n}\n.header .hide[data-v-030ea954] {\n}\n.header .hide .icon[data-v-030ea954] { height: 11px; width: 11px;\n}\n.body[data-v-030ea954] { padding: 0; flex: 1; display: flex; flex-direction: column;\n}\n.body-title[data-v-030ea954] { margin-top: 10px;  text-align: center;\n}\n.title[data-v-030ea954] { margin-bottom: 0.5rem; font-size: 2rem; font-weight: 800;\n}\n.description[data-v-030ea954] { opacity: 0.75; font-size: 1.25rem; font-weight: 400;\n}\n.footer[data-v-030ea954] { padding: var(--app-padding) 0 4px; flex: 0; display: flex; align-items: center; flex-direction: column;\n}\n\n\t\t\t/* Converge button styling with onboarding styling */\n.footer .button[data-v-030ea954] { min-width: 150px; margin-bottom: 9px; padding: 10px 31px; background: hsl(var(--hue), 48%, 58%) !important; box-shadow: 0 0px 12px hsla(var(--hue), 48%, 58%, 0), 0 2px 4px rgba(0,0,0,0.09); box-sizing: border-box; font-size: 0.875rem; font-weight: 600; text-align: center; transition: all 0.1s ease;\n}\n.footer .button[data-v-030ea954]:hover { background: hsl(var(--hue), 58%, 60%) !important; box-shadow: 0 3px 12px hsla(var(--hue), 54%, 63%, 0.2), 0 2px 4px rgba(0,0,0,0.09);\n}\n.footer .button[data-v-030ea954]:hover:active { background: hsla(var(--hue), 63%, 64%, 1) !important; transform: translateY(1px); transition: all 0s ease;\n}\n.footer .button-desc[data-v-030ea954] { color: hsl(var(--hue), 48%, 58%); font-size: 0.8125rem;\n}\n\n",
              "",
          ]);
      },
      93: (t, e, a) => {
          (t.exports = a(7788)(!1)).push([
              t.id,
              ".upgrade-flow {\n\t--hue: 187;\n\t--color: rgb(30,30,30);\n\t--color-active: hsl(var(--hue), 50%, 50%);\n\t--color-warning: hsl(7, 100%, 57%);\n\n\t--form-width: 400px;\n\t--form-width-narrow: 340px;\n\t--input-padding: 12px;\n\t--input-margin-bottom: 1.25rem;\n\t--input-bg: rgba(0,0,0,0.03);\n\t--input-border-color: hsl(var(--hue), 2%, 72%);\n\t--input-border-radius: 3px;\n\t--label-font-size: 0.875rem;\n\n\t--icon-color: #333;\n\t--icon-wrapper-bg: rgba(0,0,0,0.05);\n\n\t--a-fast: all 0.1s ease;\n\t--a-medium: all 0.2s ease;\n\n\tpadding: 3rem;\n}\n\n\n/* General */\n.u--no-margin-bottom { margin-bottom: 0 !important; }\n\n/* General icon styling from style.css with .upgrade-flow prepended */\n.upgrade-flow .icon-wrapper { padding: 5px; display: inline-flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; -moz-user-select: none; user-select: none; }\n\t.upgrade-flow .icon-wrapper:after { --icon-wrapper-size: 25px; height: var(--icon-wrapper-size); width: var(--icon-wrapper-size); position: absolute; z-index: 0; display: block; border-radius: 50px; content: ''; }\n\t.upgrade-flow .icon-wrapper .icon { opacity: 0.5; }\n\t\t.upgrade-flow .icon-wrapper:hover .icon { opacity: 0.8; }\n\t\t.upgrade-flow .icon-wrapper:hover:active .icon { opacity: 1; }\n/* — */\n\n\t/* Form Header */\n\t.upgrade-flow header { position: relative; }\n\t\t.upgrade-flow header h2 { margin: 0 0 0.4rem; color: var(--color); font-family: Futura, sans-serif; font-size: 1.5rem; }\n\t\t.upgrade-flow header .description { margin-bottom: 2rem; color: #aaa; font-size: 17px; }\n\n\t.upgrade-flow .back { height: 50px; width: 50px; padding: 0; position: absolute; top: 8px; left: 6px; transition: opacity 0.5s ease; }\n\t/* Account site overrides --\x3e */ .upgrade-flow .back { margin: 0; opacity: 1; }\n\t\t.slide-fade-enter-active .upgrade-flow .back, .slide-leave-enter-active .upgrade-flow .back { opacity: 0; pointer-events: none; }\n\n\t\t.upgrade-flow .back .icon { height: 13px; margin-left: -1px; fill: var(--icon-color); }\n\t\t.upgrade-flow .back .icon-label { position: absolute; left: 100%; opacity: 0; color: var(--color); /* <-- Account site override */ font-size: 0.75rem; font-weight: 500; pointer-events: none; text-transform: uppercase; }\n\t\t\t.upgrade-flow .back:hover .icon-label { opacity: 0.65; }\n\t\t\t.upgrade-flow .back:hover:active .icon-label { opacity: 0.85; }\n\t\t.upgrade-flow .icon-wrapper:after { --icon-wrapper-size: 33px; }\n\t\t\t.upgrade-flow .icon-wrapper:hover:after { background: var(--icon-wrapper-bg); }\n\n\n\t/* Form Body */\n\t.upgrade-flow .form-body { margin: 0 auto 2.75rem; }\n\n\t\t.upgrade-flow label { margin-bottom: 6px; display: block; opacity: 0.9; color: var(--color); font-size: var(--label-font-size); font-weight: 500; text-align: left; text-transform: unset; }\n\t\t\t.upgrade-flow label .optional { margin-left: 5px; opacity: 0.45; font-size: 0.9375rem; }\n\t\t\t.upgrade-flow .input-group:first-child label { margin-top: -4px; }\n\t\t.upgrade-flow input, .upgrade-flow select, .upgrade-flow .StripeElement { width: 100%; margin-bottom: var(--input-margin-bottom); padding: var(--input-padding); border: none; background-color: var(--input-bg); box-shadow: inset 0 0 0 1px var(--input-border-color); border-radius: var(--input-border-radius); color: rgb(30,30,30); font-size: 17px; outline: none; transition: background 0.1s ease, box-shadow 0s ease; } /* <-- .input needed for stripe card input */\n\t\t.upgrade-flow select { margin-right: 8px; margin-bottom: 0; padding-right: 30px !important; -webkit-appearance: none; -webkit-border-radius: var(--input-border-radius); -moz-appearance: none; appearance: none; background-position-x: calc(100% - 6px); }\n\t\t\t.Firefox .upgrade-flow select { padding-top: 13px; padding-bottom: 13px; color: rgba(0,0,0,0); text-shadow: 0 0 0 #000; }\n\n\t\t\t.upgrade-flow input:hover, .upgrade-flow select:hover, .upgrade-flow .radio:hover, .upgrade-flow .input:hover { --input-border-color:  hsl(var(--hue), 2%, 52%); }\n\n\t\t\t.upgrade-flow input:focus, .upgrade-flow select:focus, .upgrade-flow .radio:focus, .upgrade-flow .StripeElement--focus { --input-border-color: hsl(var(--hue), 47%, 50%) !important; box-shadow: inset 0 0 0 2px var(--input-border-color) !important; /* <-- !important needed for account site */ }\n\n\n\n\t\t.upgrade-flow .radio { /*height: 22px; width: 22px; margin: 0; padding: 0; display: inline-block; position: relative; background: hsla(var(--hue), 1%, 93%, 0.4);*/ border-radius: 100%; transition: all var(--transition-medium) ease; }\n\t\t\t.upgrade-flow .active .radio { background: var(--color-active); box-shadow: inset 0 0 0 1px rgba(0,0,0,0.075); }\n\n\t\t\t.upgrade-flow .radio-icon { position: absolute; top: 0; right: 0; bottom: 0; left: 0; display: flex; justify-content: center; align-items: center; font-size: 14px; opacity: 0; transition: all var(--transition-medium) ease; }\n\t\t\t\t.upgrade-flow .active .radio-icon { color: white; opacity: 1; }\n\n\t\t/* Select helpers for custom dropdown icon */\n\t\t.upgrade-flow .select-wrapper { margin-bottom: 1.25rem; margin-right: 0; position: relative; display: inline-block; }\n\t\t\t.upgrade-flow .select-wrapper:before { height: 100%; width: 20px; position: absolute; top: 0; right: 5px; z-index: 1; opacity: 0.8; background: url('/img/icon/down.svg') no-repeat 50% 50%; background-size: 20px; content: ''; pointer-events: none; }\n\n\t\t/* Error states */\n\t\t.upgrade-flow .error > input, .upgrade-flow .error > select, .upgrade-flow .error > textarea { box-shadow: inset 0 0 0 2px var(--color-warning) !important; }\n\n\t\t/* Helper message below input */\n\t\t.upgrade-flow .input-message { margin: 5px 0 0; color: hsl(0, 0%, 46%); font-size: 13px; text-align: left; }\n\n\n\t/* Form Footer */\n\n\t.upgrade-flow form footer { /* margin-top: 34px;*/ }\n\n\t\t.upgrade-flow .form-message { margin: -18px 0 20px; color: rgba(0,0,0,0.7); font-size: var(--label-font-size); font-weight: 500; }\n\t\t\t.upgrade-flow .form-message.error, .upgrade-flow .form-message.warning { color: var(--color-form-warning); }\n\n\t\t\t.upgrade-flow .form-message-label { justify-content: center; } /* Override for Account site */\n\t\t\t.upgrade-flow .form-message-label img { margin-bottom: -3px; margin-right: 7px; } /* Override for Account site */\n\n\t\t.upgrade-flow .button { width: auto; min-width: 240px; padding: 13px 34px; background: hsl(var(--hue), 48%, 58%); box-shadow: 0 0px 12px hsla(var(--hue), 48%, 58%, 0), 0 2px 4px rgba(0,0,0,0); font-family: var(--font-san-fran); font-size: 1rem; font-weight: 500; letter-spacing: 0.3px; line-height: normal; transition: var(--a-fast); user-select: none; }\n\t\t\t.upgrade-flow .button:hover { opacity: 1; background: hsl(var(--hue), 53%, 60%) !important; box-shadow: 0 3px 12px hsla(var(--hue), 54%, 63%, 0.2), 0 2px 4px rgba(0,0,0,0.09); }\n\t\t\t.upgrade-flow .button:hover:active { opacity: 1; background: hsla(var(--hue), 59%, 64%, 1) !important; transform: translateY(1px); transition: all 0s ease; }\n\n\t\t.upgrade-flow .thank-you { margin: 18px 0 0; padding: 0; opacity: 0.6; font-size: 12px; line-height: 1.5; text-align: left; }\n\n\n/* Responsive */\n\n.u--mobile-only { display: none; }\n.u--fullscreen-hide { display: none; }\n\n@media handheld and (max-width: 959px), screen and (max-device-width: 959px), screen and (max-width: 959px)  {\n\t.u--fullscreen-only { display: none; }\n\t.u--fullscreen-hide { display: inline; }\n}\n\n@media handheld and (max-width: 740px), screen and (max-device-width: 740px), screen and (max-width: 740px)  {\n\t.u--mobile-only { display: inline; }\n\t.u--mobile-hide { display: none !important; }\n}\n",
              "",
          ]);
      },
      6940: (t, e, a) => {
          var n = a(93);
          t.exports = "string" == typeof n ? n : n.toString();
      },
      1741: (t, e, a) => {
          var n = a(9992);
          "string" == typeof n && (n = [[t.id, n, ""]]), n.locals && (t.exports = n.locals), (0, a(1372).Z)("6a59f6ce", n, !1, { ssrId: !0 });
      },
      9987: (t, e, a) => {
          var n = a(8396);
          "string" == typeof n && (n = [[t.id, n, ""]]), n.locals && (t.exports = n.locals), (0, a(1372).Z)("04374398", n, !1, { ssrId: !0 });
      },
      896: (t, e, a) => {
          var n = a(6760);
          "string" == typeof n && (n = [[t.id, n, ""]]), n.locals && (t.exports = n.locals), (0, a(1372).Z)("695b6596", n, !1, { ssrId: !0 });
      },
      8069: (t, e, a) => {
          var n = a(7281);
          "string" == typeof n && (n = [[t.id, n, ""]]), n.locals && (t.exports = n.locals), (0, a(1372).Z)("12867c49", n, !1, { ssrId: !0 });
      },
      7743: (t, e, a) => {
          var n = a(3924);
          "string" == typeof n && (n = [[t.id, n, ""]]), n.locals && (t.exports = n.locals), (0, a(1372).Z)("2ba70b23", n, !1, { ssrId: !0 });
      },
      1733: (t, e, a) => {
          var n = a(7783);
          "string" == typeof n && (n = [[t.id, n, ""]]), n.locals && (t.exports = n.locals), (0, a(1372).Z)("0705d580", n, !1, { ssrId: !0 });
      },
      7195: (t, e, a) => {
          var n = a(2449);
          "string" == typeof n && (n = [[t.id, n, ""]]), n.locals && (t.exports = n.locals), (0, a(1372).Z)("4463a1da", n, !1, { ssrId: !0 });
      },
      3082: (t, e, a) => {
          var n = a(4748);
          "string" == typeof n && (n = [[t.id, n, ""]]), n.locals && (t.exports = n.locals), (0, a(1372).Z)("2b1cc6d3", n, !1, { ssrId: !0 });
      },
      6356: (t, e, a) => {
          var n = a(4178);
          "string" == typeof n && (n = [[t.id, n, ""]]), n.locals && (t.exports = n.locals), (0, a(1372).Z)("77673bb6", n, !1, { ssrId: !0 });
      },
      6220: (t, e, a) => {
          var n = a(3780);
          "string" == typeof n && (n = [[t.id, n, ""]]), n.locals && (t.exports = n.locals), (0, a(1372).Z)("76dc278e", n, !1, { ssrId: !0 });
      },
      2749: (t, e, a) => {
          var n = a(9557);
          "string" == typeof n && (n = [[t.id, n, ""]]), n.locals && (t.exports = n.locals), (0, a(1372).Z)("54d710f6", n, !1, { ssrId: !0 });
      },
      6206: (t, e, a) => {
          var n = a(210);
          "string" == typeof n && (n = [[t.id, n, ""]]), n.locals && (t.exports = n.locals), (0, a(1372).Z)("4cc9d415", n, !1, { ssrId: !0 });
      },
      2865: (t, e, a) => {
          var n = a(1220);
          "string" == typeof n && (n = [[t.id, n, ""]]), n.locals && (t.exports = n.locals), (0, a(1372).Z)("44c7360b", n, !1, { ssrId: !0 });
      },
      8292: (t, e, a) => {
          var n = a(5133);
          "string" == typeof n && (n = [[t.id, n, ""]]), n.locals && (t.exports = n.locals), (0, a(1372).Z)("c8a730b8", n, !1, { ssrId: !0 });
      },
  },
]);
//# sourceMappingURL=2.js.map
