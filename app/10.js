(self.webpackChunkmomentum_extension=self.webpackChunkmomentum_extension||[]).push([[10],{7788:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i=function(e,t){var i,s=e[1]||"",n=e[3];if(!n)return s;if(t&&"function"==typeof btoa){var r=(i=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),a=n.sources.map((function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"}));return[s].concat(a).concat([r]).join("\n")}return[s].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+i+"}":i})).join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var s={},n=0;n<this.length;n++){var r=this[n][0];null!=r&&(s[r]=!0)}for(n=0;n<e.length;n++){var a=e[n];null!=a[0]&&s[a[0]]||(i&&!a[2]?a[2]=i:i&&(a[2]="("+a[2]+") and ("+i+")"),t.push(a))}},t}},1010:(e,t,i)=>{"use strict";i.r(t);var s=i(4525),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("transition",{attrs:{name:"fade"}},[e.searchVisible?i("div",{staticClass:"app-container search",attrs:{id:"search","data-test":"search"}},[i("div",{staticClass:"app-dash"},[i("form",{staticClass:"search-form",on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[i("span",{staticClass:"search-underline"}),e._v(" "),i("i",{staticClass:"dash-icon icon-search",attrs:{"data-test":"icon-search"}}),e._v(" "),i("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.hideDropdown,expression:"hideDropdown"}],staticClass:"more source",attrs:{"data-test":"provider-toggle"}},[i("div",{staticClass:"source-toggle",attrs:{tabindex:"0"},on:{click:e.toggleMore}},[i("div",{staticClass:"icons"},e._l(e.$options.searchProviders,(function(t,s){return i("img",{key:s,class:["icon-"+t.id+" icon",{active:e.selectedProvider.id===t.id}],attrs:{src:t.whiteIconSrc||t.iconSrc,"data-test":"icon-"+t.id,tabindex:"0"}})})),0),e._v(" "),i("img",{staticClass:"icon icon-dropdown",attrs:{src:"img/icon-down.svg"}})]),e._v(" "),e.dropdownActive?i("div",{staticClass:"dropdown more-dropdown dash-dropdown nipple nipple-top-right",attrs:{"data-test":"search-dropdown"},on:{click:e.focusSearch}},[i("div",{staticClass:"heading"},[e._v("Search with")]),e._v(" "),i("ul",{staticClass:"dropdown-list"},e._l(e.$options.searchProviders,(function(t,s){return i("li",{key:s,staticClass:"search-provider",class:{active:e.selectedProviderId===e.selectedProvider.id},attrs:{"data-test":"select-"+t.id,"data-provider":t.id},on:{click:function(i){return e.selectProvider(t.id)}}},[i("span",{staticClass:"dropdown-list-icon-wrapper"},[i("img",{staticClass:"dropdown-list-icon icon",class:"icon-"+t.id,attrs:{src:t.iconSrc}})]),e._v(" "),i("span",{staticClass:"dropdown-list-label"},[e._v(e._s(t.name))])])})),0)]):e._e()]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.searchInput,expression:"searchInput",modifiers:{trim:!0}}],ref:"input",staticClass:"search-input",attrs:{id:"search-input","search-url":e.searchUrl,type:"text",autocomplete:"off","data-test":"search-input"},domProps:{value:e.searchInput},on:{input:function(t){t.target.composing||(e.searchInput=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])])]):e._e()])};n._withStripped=!0;const r={info:JSON.parse('{"widget":true,"vue":true,"placeholderType":"metric","id":"search","class":"app-container search","region":"top-left","addin":"162b82d0-f285-427c-8209-924f44ef4d21","autoLoad":true,"visibleSetting":"searchVisible"}')},a={name:"Search",searchProviders:{google:{id:"google",name:"Google",iconSrc:"img/logo-google.svg",searchId:"google-generic",prefix:"https://www.google.com/search?q="},bing:{id:"bing",name:"Bing",iconSrc:"img/logo-bing.svg",searchId:"bing-app-1",prefix:"https://www.bing.com/search?q=",suffix:"&PC=ATMM&FORM=MMXT01"},duckduckgo:{id:"duckduckgo",name:"DuckDuckGo",iconSrc:"img/logo-duckduckgo.svg",whiteIconSrc:"img/logo-duckduckgo-white.svg",searchId:"duckduckgo",prefix:"https://duckduckgo.com/?q="}},data:()=>({searchVisible:m.models.customization.get("searchVisible"),dropdownActive:!1,selectedProviderId:m.models.customization.get("searchProvider"),searchInput:""}),computed:{selectedProvider(){return this.$options.searchProviders[this.selectedProviderId]},searchUrl(){return`${this.selectedProvider.prefix}${encodeURIComponent(this.searchInput)}${this.selectedProvider.suffix||""}`}},created(){this.$e.listenTo(m,"globalEvent:esc",this.blurSearch),this.$e.listenTo(m,"globalEvent:toggleSearch",this.focusSearch),this.$e.listenTo(m.models.customization,"change:searchVisible",this.toggleVisibility),this.$e.listenTo(m.models.customization,"change:searchProvider",this.setSearchProvider),m.widgetManager.appReady(r.info.id)},destroyed(){this.$e.stopListening(m,"globalEvent:esc",this.blurSearch),this.$e.stopListening(m,"globalEvent:toggleSearch",this.focusSearch),this.$e.stopListening(m.models.customization,"change:searchVisible",this.toggleVisibility),this.$e.stopListening(m.models.customization,"change:searchProvider",this.setSearchProvider)},methods:{selectProvider(e){m.models.customization.save("searchProvider",e),this.selectedProviderId=e,this.hideDropdown()},setSearchProvider(){this.selectedProviderId=m.models.customization.get("searchProvider")},toggleVisibility(){this.searchVisible=m.models.customization.get("searchVisible")},focusSearch(){this.$refs.input.focus()},toggleMore(){this.dropdownActive=!this.dropdownActive,this.dropdownActive&&m.sendEvent("Search","Focused")},blurSearch(){this.$refs.input.blur()},hideDropdown(){this.dropdownActive=!1},submit(){this.searchInput.length>0&&this.selectedProvider&&this.selectedProvider.prefix&&(m.usage.save({type:m.usage.types.SEARCH,providerId:this.selectedProvider.searchId},!0,!0),window.location.href=this.searchUrl)}}};i(7605);var o=(0,i(1900).Z)(a,n,[],!1,null,"5f7dbe7c",null);o.options.__file="source/addins-vue/search/Search.vue";const d=o.exports;var c=i(1238);const l={};c.Z.directive("click-outside",{bind:function(e,t){let i,s;e.dataset.justBoundClickOutsideHandler=!0,setTimeout((()=>{e.dataset.justBoundClickOutsideHandler=!1}),100);const n=e=>{s=!1,(e=>e&&e.clientX>window.innerWidth)(e)?s=!0:i=e.target},r=n=>{s||(t.modifiers.bubble||!e.contains(i)&&!e.contains(n.target)&&e!==i&&e!==n.target&&"true"!==e.dataset.justBoundClickOutsideHandler)&&t.value(n)};e.dataset.clickOutsideMouseupHandlerId=Math.random().toString(36).substring(7),e.dataset.clickOutsideMousedownHandlerId=Math.random().toString(36).substring(7),l[e.dataset.clickOutsideMouseupHandlerId]=r,l[e.dataset.clickOutsideMousedownHandlerId]=n,document.addEventListener("mouseup",r),document.addEventListener("mousedown",n)},unbind:function(e){document.removeEventListener("mouseup",l[e.dataset.clickOutsideMouseupHandlerId]),document.removeEventListener("mousedown",l[e.dataset.clickOutsideMousedownHandlerId]),delete l[e.dataset.clickOutsideMouseupHandlerId],delete l[e.dataset.clickOutsideMousedownHandlerId],delete e.dataset.clickOutsideMouseupHandlerId,delete e.dataset.clickOutsideMousedownHandlerId,delete e.dataset.justBoundClickOutsideHandler}}),m.widgetManager.handover("search",null,{region:"top-left",order:"append",bootstrap:function(e){new s.Z({render:e=>e(d)}).$mount(e)}})},4525:(e,t,i)=>{"use strict";i.d(t,{Z:()=>d});var s=i(1238),n=i(1018),r=i(7366),a=i.n(r),o=i(2096);s.Z.use(n.Z,{name:"unreactive"}),s.Z.use(a()),s.Z.prototype.$e=o.Z,new s.Z({bb:()=>({conditionalFeatures:m.conditionalFeatures})}),s.Z.mixin({computed:{$plus:()=>true,$team:()=>m.conditionalFeatures.featureEnabled("team")}});const d=s.Z},7966:(e,t,i)=>{(e.exports=i(7788)(!1)).push([e.id,"\n.more-dropdown[data-v-5f7dbe7c] { display: block;\n} /* TODO. remove this once we remove the use of 'active' class on more icons */\n.search[data-v-5f7dbe7c] { --width: 240px; --icon-size: 16px; min-height: 60px; max-height: var(--max-height); width: 100%; max-width: var(--width); min-width: 100px; position: relative; display: inline-block; flex: 0 1 auto; order: 6; cursor: pointer;\n}\n.search .app-dash[data-v-5f7dbe7c] { height: 100%; padding: 0 var(--side-padding);\n}\n.search .hidden-span[data-v-5f7dbe7c] { display: none;\n}\n.search-form[data-v-5f7dbe7c] { height: 100%; position: relative;\n}\n.search .search-input[data-v-5f7dbe7c] { height: 100%; width: 100%; max-width: var(--width); padding: 0 32px 0 26px; position: relative; z-index: 2; background: none; border: none; color: #fff; cursor: pointer; line-height: 20px; outline: none;\n}\n.search-input[data-v-5f7dbe7c]:focus { cursor: text;\n}\n.search-underline[data-v-5f7dbe7c] { margin-top: 17px; position: absolute; top: 50%; left: 0; right: 0; z-index: 1; border-bottom: 2px solid white; opacity: 0; transition: opacity var(--a-fast) var(--a-curve);\n}\n.search:hover .search-underline[data-v-5f7dbe7c] { opacity: 0.4;\n}\n.search:focus-within .search-underline[data-v-5f7dbe7c] { opacity: 1;\n}\n.search .icon-search[data-v-5f7dbe7c] { margin-top: -10px; position: absolute; left: 1px; top: 50%; z-index: 1; opacity: 0.85; transition: opacity var(--a-fast) var(--a-curve);\n}\n.search:hover .icon-search[data-v-5f7dbe7c], .search.active .icon-search[data-v-5f7dbe7c] { opacity: 1;\n}\n.search .source[data-v-5f7dbe7c] { height: 100%; position: absolute; right: 0; z-index: 3; display: flex; opacity: 0; transition: var(--a-fast) var(--a-curve);\n}\n.search:hover .source[data-v-5f7dbe7c] { opacity: 0.65;\n}\n.search:focus-within .source[data-v-5f7dbe7c] { opacity: 1;\n}\n.search .source .icon[data-v-5f7dbe7c] { --icon-size: 14px; height: var(--icon-size); width: var(--icon-size);\n}\n.search .source-toggle[data-v-5f7dbe7c] { margin-right: -2px; padding: 5px 2px; align-self: center; display: flex; align-items: center; justify-content: center; position: relative; border-radius: var(--toggle-size); cursor: pointer; outline: none;\n}\n\t\t\t\t\t/* icons */\n.search .source-toggle .icons .icon[data-v-5f7dbe7c] { display: none; filter: brightness(100); outline: none;\n}\n.search .source-toggle .icons .icon.active[data-v-5f7dbe7c] { display: block;\n}\n.search .source-toggle .icon-dropdown[data-v-5f7dbe7c] { --size: 14px; height: var(--size); width: var(--size); margin: 1px -2px; display: block; opacity: 0.5; transition: 0.1s var(--a-curve);\n}\n.search .source-toggle:hover .icon-dropdown[data-v-5f7dbe7c] { opacity: 0.8;\n}\n.source.active .source-toggle .icon-dropdown[data-v-5f7dbe7c] { opacity: 1; transition-duration: 0;\n}\n.search .source .dropdown[data-v-5f7dbe7c] { margin-top: 29px; padding: 4px 0; left: auto; top: 50%; right: -8px;\n}\n.search .dropdown.nipple-top-right[data-v-5f7dbe7c]:after { right: 14px;\n}\n.search .dropdown .search-provider[data-v-5f7dbe7c] { outline: none;\n}\n\n\t\t\t\t\t\t/* TODO: Generalize the padding here to match dropdown li headings (might need to just move this direct to general dropdown styling */\n.search .dropdown .heading[data-v-5f7dbe7c] { padding: 6px 14px 0px; opacity: 0.75; cursor: default; font-size: 0.625rem; font-weight: 500; text-transform: uppercase;\n}\n.search .dropdown .dropdown-list-icon[data-v-5f7dbe7c] { --icon-size: 15px;\n}\n.search .dropdown .icon.active[data-v-5f7dbe7c] { opacity: 1;\n}\n\n",""])},7605:(e,t,i)=>{var s=i(7966);"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals),(0,i(1372).Z)("40a3936a",s,!1,{ssrId:!0})},1372:(e,t,i)=>{"use strict";function s(e,t){for(var i=[],s={},n=0;n<t.length;n++){var r=t[n],a=r[0],o={id:e+":"+n,css:r[1],media:r[2],sourceMap:r[3]};s[a]?s[a].parts.push(o):i.push(s[a]={id:a,parts:[o]})}return i}i.d(t,{Z:()=>v});var n="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!n)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var r={},a=n&&(document.head||document.getElementsByTagName("head")[0]),o=null,d=0,c=!1,l=function(){},u=null,p="data-vue-ssr-id",h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(e,t,i,n){c=i,u=n||{};var a=s(e,t);return g(a),function(t){for(var i=[],n=0;n<a.length;n++){var o=a[n];(d=r[o.id]).refs--,i.push(d)}for(t?g(a=s(e,t)):a=[],n=0;n<i.length;n++){var d;if(0===(d=i[n]).refs){for(var c=0;c<d.parts.length;c++)d.parts[c]();delete r[d.id]}}}}function g(e){for(var t=0;t<e.length;t++){var i=e[t],s=r[i.id];if(s){s.refs++;for(var n=0;n<s.parts.length;n++)s.parts[n](i.parts[n]);for(;n<i.parts.length;n++)s.parts.push(m(i.parts[n]));s.parts.length>i.parts.length&&(s.parts.length=i.parts.length)}else{var a=[];for(n=0;n<i.parts.length;n++)a.push(m(i.parts[n]));r[i.id]={id:i.id,refs:1,parts:a}}}}function f(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function m(e){var t,i,s=document.querySelector("style["+p+'~="'+e.id+'"]');if(s){if(c)return l;s.parentNode.removeChild(s)}if(h){var n=d++;s=o||(o=f()),t=x.bind(null,s,n,!1),i=x.bind(null,s,n,!0)}else s=f(),t=y.bind(null,s),i=function(){s.parentNode.removeChild(s)};return t(e),function(s){if(s){if(s.css===e.css&&s.media===e.media&&s.sourceMap===e.sourceMap)return;t(e=s)}else i()}}var b,w=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function x(e,t,i,s){var n=i?"":s.css;if(e.styleSheet)e.styleSheet.cssText=w(t,n);else{var r=document.createTextNode(n),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function y(e,t){var i=t.css,s=t.media,n=t.sourceMap;if(s&&e.setAttribute("media",s),u.ssrId&&e.setAttribute(p,t.id),n&&(i+="\n/*# sourceURL="+n.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}}}]);
//# sourceMappingURL=10.js.map