var fn_addin=function(m,p,e){var t=t||{};t.styles=t.styles||{},t.commands=t.commands||{},t.dependencies=e||t.dependencies||{},t.styles.style=function(){},t.views=t.views||{},t.collect=t.collect||{},t.models=t.models||{},t.templates=t.templates||{},t.info={addin:"9b62165c-8b05-4f9b-82b3-b093f4e77dc9",dependencies:["settings","bookmarks"],commands:["settings.panels.general"],id:"settings_general"},m.console.log(m.elapsed()+": "+t.info.id+" started"),t.templates=t.templates||{},t.templates.general=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,i,n){return'<header class="settings-header">\n\t<h3 data-test="general-header">General</h3>\n\t<p class="description">Customize your dashboard</p>\n</header>\n\n\n<h4>Show</h4>\n<ul id="apps-list" class="settings-list options-list"></ul>\n\n\n<h4>Customize</h4>\n<ul id="customize-list" class="settings-list options-list"></ul>\n\n\n<h5>Tip</h5>\n<p class="tip no-top-margin">Many items in Momentum can be edited by double-clicking on them, including <strong>your name</strong> and your <strong>to-dos</strong>.\n'},useData:!0});var i=t.dependencies.settings;return t.views.General=i.views.SettingsPanel.extend({attributes:{id:"settings-general",class:"settings-view settings-general","data-test":"settings-general"},template:t.templates.general,panelid:"general",panelTitle:"General",events:{"click .config-button":"configWidget","click .toggle-option":"toggleOption","click .slide-toggle":"toggleSlider","dblclick .slide-toggle":"eatDblClick","click .balanced-message":"switchToBalanceSettings",webkitAnimationEnd:"onAnimationEnd"},initialize:function(){this.model=m.models.customization,this.initializeCustomizeItems(),this.listenTo(this.model,"change",this.customizationModelChanged),m.sendEvent(this.panelTitle,"Panel Opened")},initializeCustomizeItems:function(){var e=m.models.themeManager.getAvailableFonts();this.customizeItems=[{name:"Theme",dataId:"settings-general-theme",field:"themeColour",widget:"themeColour",options:[{label:"Dark",value:"dark"},{label:"Light",value:"light"},{label:"System",value:"system",breakafter:!0},{label:"Photo Match",value:"photo",plusOnly:!0},{label:"",value:"custom",view_opt:{settingName:"themeColour",ignoreClick:!0},plusOnly:!0,show_always:!0,dataTest:"custom"}],default:"system",section:"customize"},{name:"Font",dataId:"settings-general-font",field:"themeFont",widget:"themeFont",options:e,default:"default",plusOnly:!0,requiredFeature:"plus",section:"customize"},{name:"Links",dataId:"settings-general-links",widget:"linksVisible",field:"linksVisible",section:"widgets"},{name:"Bookmarks Bar",dataId:"settings-general-bookmarks-bar",widget:"bookmarksVisible",field:"bookmarksVisible",section:"widgets"},{name:"Search",dataId:"settings-general-search",widget:"searchVisible",field:"searchVisible",section:"widgets"},{name:"Weather",dataId:"settings-general-weather",widget:"weatherVisible",field:"weatherVisible",section:"widgets"},{name:"Focus",dataId:"settings-general-focus",widget:"focusVisible",field:"focusVisible",section:"widgets"},{name:"Todo",dataId:"settings-general-todo",widget:"todoVisible",field:"todoVisible",section:"widgets"},{name:"Quotes",dataId:"settings-general-quote",widget:"quoteVisible",field:"quoteVisible",section:"widgets"},{name:"Mantras",dataId:"settings-general-mantras",widget:"mantraVisible",field:"mantraVisible",message:"Simple phrases to build positive mental habits",section:"widgets",beta:!1},{name:"Countdowns",dataId:"settings-general-countdown",widget:"countdownVisible",field:"countdownVisible",plusOnly:!0,requiredFeature:"countdown",message:"Count down to important dates and deadlines",section:"widgets"},{name:"Metrics",dataId:"settings-general-metric",widget:"metricVisible",field:"metricVisible",plusOnly:!0,requiredFeature:"plus",message:"Keep your important metrics at a glance",section:"widgets"},{name:"Notes",dataId:"settings-general-notes",widget:"notesVisible",field:"notesVisible",plusOnly:!0,requiredFeature:"notes",message:"Take quick notes and store wisdom to review",section:"widgets"},{name:"World Clocks",dataId:"settings-general-world-clocks",widget:"multiClockVisible",field:"multiClockVisible",plusOnly:!0,requiredFeature:"plus",message:"Keep track of time anywhere on Earth",section:"widgets",beta:!1}]},render:function(){var e=m.isLoggedIn();this.$el.html(this.template({loggedIn:e})),this.$popBody=this.$(".pop-body");var t={customize:this.$el.find("#customize-list"),widgets:this.$el.find("#apps-list"),misc:this.$el.find("#misc-list")};return _.each(t,function(e){e.empty()}),_.each(this.customizeItems,function(e){e.hidden||(e.options?t[e.section].append(i.templates["general-toggle-options"](e)):t[e.section].append(i.templates["general-toggle-slider"](e)))}),this.updateControlStates(_.pluck(this.customizeItems,"field")),m.commandManager.execute("settings.color.picker",this.$el[0]),this},onAnimationEnd:function(e){m.utils.removePulseClass(e)},customizationModelChanged:function(e){if(e){var t=e.changedAttributes(),i=_.keys(t);this.updateControlStates(i)}},updateControlStates:function(e){var l=this;_.each(e,function(e){var t=_.findWhere(l.customizeItems,{field:e});if(t){var i=l.model.get(e);if(t.options){t.plusOnly&&!l.featureAvailable(t.requiredFeature)&&(i=t.default),l.$el.find("."+t.widget).removeClass("active"),l.$el.find("."+t.widget+"[data-option-value='"+i+"']").first().addClass("active")}else{var n=l.model.getComputedSetting(e);i=!(t.plusOnly&&!l.featureAvailable(t.requiredFeature))&&!!i;var a=l.$el.find("[data-related-widget='"+t.widget+"']");if(a&&1===a.length){var s=a.first();if(s.toggleClass("on",i),i!==n){var o=l.model.overrides[e];o===l.model.settingOverriders.TEAM?(s.toggleClass("on",n),s.append('<span class="option-message"> &nbsp; &nbsp;Currently managed by team</span>'),s.addClass("balanced")):o===l.model.settingOverriders.BALANCE&&(s.append('<span class="option-message balanced-message"> &nbsp; &nbsp;Currently hidden by Balance mode (Customize here)</span>'),s.addClass("balanced"))}}}}})},setOption:function(e){var t=e.attr("data-related-widget"),i=e.attr("data-option-value"),n=_.findWhere(this.customizeItems,{widget:t});if(!n)return null;var a=_.findWhere(n.options,{value:i});if(n.plusOnly&&!this.featureAvailable(n.requiredFeature)||a&&a.plusOnly&&!this.isPlus()){var s={targetRegion:"settings",sourceEvent:t,buttonText:"Learn more",title:"Custom Themes",description:"Make Momentum your own"};return"photo"===a.value&&(s.title="Photo Match",s.description="Change Momentum’s menus to match your daily photo!"),m.commandManager.execute("upsell.message",s)}if(m.models.activeBackground.isCustom()&&a&&"photo"===a.value&&a.plusOnly&&this.isPlus()){s={header:"Theme",targetRegion:"settings",sourceEvent:t,title:"Photo Match",description:"Photo Match on My Photos coming soon"};return m.commandManager.execute("upsell.message",s)}this.$el.find("."+t).removeClass("active"),e.addClass("active");var o={};return n.boolean?o[n.field]=JSON.parse(i):o[n.field]=i,this.model.save(o),m.sendEvent("General Settings","Set "+t),n},toggleOption:function(e){var t=p(e.delegatedTarget),i=t.attr("data-option-value"),n=this.setOption(t);if(!0!==n){if(n){var a=_.findWhere(n.options,{value:i});if(a&&a.view&&a.view.handleClick){if(0<p(e.target).closest(".sub-view").length&&a.view.ignoreClickEvent&&a.view.ignoreClickEvent(e.target))return;if(a.view.handleClick(e,!0),a.view.scrollIntoViewElement){var s=a.view.scrollIntoViewElement();s&&this.scrollIntoView(s)}}}m.trigger("globalEvent:settingsclick",e)}else e.stopImmediatePropagation()},scrollIntoView:function(e){var t=p(e),i=t.closest(".settings-view-container"),n=t.offset().top,a=i.offset().top;n-a-12<0&&i.animate({scrollTop:i[0].scrollTop+n-a-12})},configWidget:function(e){e.stopImmediatePropagation();var t=p(e.delegatedTarget).closest(".slide-toggle").attr("data-related-widget");if(t){var i=_.findWhere(this.customizeItems,{widget:t});m.commandManager.execute(i.configCommand,null,i.configOptions)}},featureAvailable:function(e){return m.conditionalFeatures.featureEnabled(e)||m.conditionalFeatures.featureEnabled(e+"-degraded")},toggleSlider:function(e){if(!this.eatClicks){this.eatClicks=!0;var t,i=this;setTimeout(function(){i.eatClicks=!1},250);var n=p(".verte");if(!(p(e.target).closest("[data-option-value]").length||0<n.length&&p.contains(n[0],e.target)||p(e.delegatedTarget).hasClass("balanced"))){var a=p(e.delegatedTarget).attr("data-related-widget");if("bookmarksVisible"===a)return this.enableBookmarks(e),void u(a);if(a){var s,o=_.findWhere(this.customizeItems,{widget:a}),l=this.model.get(o.field);if(o.options){var d;for(d=true?o.options:o.options.filter(function(e){return!e.plusOnly}),t=0;t<d.length;t++)if(d[t].value===l){t===d.length-1&&(t=-1),s=d[t+1].value;break}var r=p(e.delegatedTarget).find("."+o.widget+"[data-option-value='"+s+"']").first();this.setOption(r)&&e.stopPropagation()}else{if("mantraVisible"===a&&!m.models.mantraSettings.get("firstMantraActivated"))return m.commandManager.executeAsync("settings.display",null,{section:"mantra-settings"}),void u(a);var g;if(s=!this.model.get(a),o.plusOnly&&!this.featureAvailable(o.requiredFeature))return"Countdowns"===o.name?g={targetRegion:"settings",sourceEvent:a,buttonText:"Learn more",title:"Countdown",description:"Track your upcoming milestones"}:"Metrics"===o.name?g={targetRegion:"settings",sourceEvent:a,buttonText:"Learn more",title:"Metrics",description:"Keep your important metrics at a glance"}:"Notes"===o.name?g={targetRegion:"settings",sourceEvent:a,buttonText:"Learn more",title:"Notes",description:"Take longer form notes"}:"World Clocks"===o.name&&(g={targetRegion:"settings",sourceEvent:a,buttonText:"Learn more",title:"World Clocks",description:"Keep tabs on time anywhere on earth"}),void(m.commandManager.execute("upsell.message",g)&&e.stopPropagation());var c={};c[a]=s,this.model.save(c),u(a)}}m.trigger("globalEvent:settingsclick",e)}}function u(e){m.sendEvent("General Settings","Toggle "+e)}},loginClicked:function(e){e.preventDefault(),e.stopPropagation(),m.sendEvent("Settings","Login","Clicked"),m.commandManager.execute("settings.hide"),m.commandManager.execute("account.login")},logoutClicked:function(e){e.preventDefault(),e.stopPropagation(),p(".action-logout").addClass("action-logout-disabled").text("Logging out..."),m.sendEvent("Settings","Logout","Clicked"),m.commandManager.execute("logout")},accountClicked:function(e){e.preventDefault(),e.stopPropagation(),p(e.delegatedTarget).html("Launching..."),p.ajax({type:"POST",data:JSON.stringify({medium:"account"}),url:m.globals.urlRootApi+"login/onetime"}).done(function(e){e&&e.otp&&e.email&&(window.location.href="http://localhost:8995/onetime?email="+encodeURIComponent(e.email)+"&otp="+encodeURIComponent(e.otp))})},switchToBalanceSettings:function(e){e&&(e.stopPropagation(),e.preventDefault()),m.commandManager.execute("settings.display",null,{section:"balance",showAdvanced:!0})},enableBookmarks:function(e){e&&(e.stopPropagation(),e.preventDefault()),m.commandManager.executeAsync("settings.enableBookmarks",{callback:function(){p(e.delegatedTarget).toggleClass("on",m.models.customization.get("bookmarksVisible"))}})},isPlus:function(){return true}}),t.commands.SettingsPanelGeneral=m.models.Command.extend({defaults:{id:"settings.panels.general"},execute:function(){return t.styleLoaded||(t.styleLoaded=!0,t.styles.style()),new t.views.General}}),t};m.addinManager&&m.addinManager.registerAddinFn("9b62165c-8b05-4f9b-82b3-b093f4e77dc9",fn_addin);