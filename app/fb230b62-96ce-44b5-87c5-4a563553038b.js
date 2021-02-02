var fn_addin=function(r,e,t){var n=n||{};n.styles=n.styles||{},n.commands=n.commands||{},n.dependencies=t||n.dependencies||{},n.styles.style=function(){},n.views=n.views||{},n.collect=n.collect||{},n.models=n.models||{},n.templates=n.templates||{},n.info={widget:!0,placeholderType:"metric",id:"countdown",class:"app-container base-metric metric countdown",region:"top-right",order:"append",addin:"fb230b62-96ce-44b5-87c5-4a563553038b",requiredFeature:"countdown",visibleSetting:"countdownVisible",dependencies:["base_metric"]},r.console.log(r.elapsed()+": "+n.info.id+" started"),n.styles=n.styles||{},n.styles.style=function(){var e=document.createElement("style");e.type="text/css",e.innerHTML=".countdown{order:4}.countdown .app{padding:0}.countdown .hour-punctuation{margin-right:-2px}.countdown .option-cancel{padding:5px 6px;display:inline-block;font-size:81.25%;opacity:.45;transition:all .1s var(--a-curve)}.countdown .option-cancel:hover{cursor:pointer;opacity:.8}.countdown .option-wrapper.add-time{margin-bottom:15px}.countdown-year-group,.countdown-year-other{width:3.75em!important}.Firefox .countdown-year-group{width:4em!important}.Firefox .countdown-year-other{width:3em!important}.countdown-year-other-group{margin-bottom:0!important;display:none}.show-other .countdown-year-group{display:none}.countdown-year-other,.show-other .countdown-year-other-group{display:inline-block}",document.getElementsByTagName("head")[0].appendChild(e)},n.models.Countdown=Backbone.Model.extend({placeholder:"Countdown",nowString:"Now",todayString:"Today",defaults:function(){return{name:"",pinned:!1,utcDate:r.now(),hasHours:!1,past:!1,deleted:!1,archived:!1,serverSetId:!1,selected:!1,random:!1}},initialize:function(e){o.models.BaseMetricModel.prototype.initialize.call(this,e)},mainContent:function(){var e={};return e.name=this.get("name"),e.utcDate=this.get("utcDate"),e},getNameOrPlaceholder:function(){return this.get("name")||this.placeholder},getDetailViewVariables:function(){return{years:this.years,placeholder:this.placeholder}},getViewData:function(){var e=this.formatTime(),t=r.date().getFullYear();this.lastSelectedYear=t,this.years=[];for(var n=t;n<t+5;n++)this.years.push(n);return{id:this.get("id"),pinned:this.get("pinned"),date:new Date(this.get("utcDate")),tooltip:this.generateDateTooltip(),metricType:"Countdown",time:e.number,unit:e.unit,nameOrPlaceholder:this.getNameOrPlaceholder(),placeholder:this.placeholder,years:this.years,archived:this.get("archived"),random:!1}},generateDateTooltip:function(){var e=new Date(this.get("utcDate")),t=r.utils.getFriendlyDate(e);return this.get("hasHours")&&(t+=" "+r.utils.getHoursMinsStr(e)),t},formatTime:function(){var e,t=r.date(),n=new Date(this.get("utcDate")),o=this.calculateTimeLeft(t,n),i=this.get("hasHours"),a="";return o.past!==this.get("past")&&this.save("past",o.past,{silent:!0}),a=i&&o.minsTot<60?(e=0===o.minsTot?this.nowString:o.minsTot,"m"):i&&o.hoursTot<24?(e=o.hoursTot,"h"):(e=i||0!==o.nights?o.nights:this.todayString,"d"),o.past&&(a+=" ago"),e!==this.nowString&&e!==this.todayString||(a=""),{number:e,unit:a,timeData:o}},calculateTimeLeft:function(e,t){var n=(t-e)/6e4,o=n/60,i=r.utils.nightsBetween(e,t,r.utils.mConst("dateRolloverHour")),a=n<0;return{nights:Math.abs(i),hoursTot:Math.abs(Math.round(o)),minsTot:Math.abs(Math.round(n)),past:a}},togglePinned:function(){this.save("pinned",!this.get("pinned"))},toggleArchive:function(){this.save("archived",!this.get("archived"))},delete:function(){this.save("deleted",!0)}}),n.models.CountdownManager=Backbone.Model.extend({initialize:function(){n.collect.countdowns=this.collection=new n.collect.Countdowns,this.collection.fetch({reset:!0})}}),n.collect.Countdowns=r.collect.SyncedCollection.extend({initialize:function(e,t){(t=t||{}).name="countdown",this.accountSitePath="countdowns",t.sorted=!0,t.transientProps=["random","selected","past"],t.model=n.models.Countdown,r.collect.SyncedCollection.prototype.initialize.call(this,e,t)},findPinned:function(){return this.filter(function(e){return!e.get("deleted")&&!e.get("archived")&&e.get("pinned")})},activeItems:function(){var e=this.models.filter(function(e){return!e.get("deleted")}),t=e;try{t=e.sort(function(e,t){return e.get("pinned")&&!t.get("pinned")?-1:!e.get("pinned")&&t.get("pinned")?1:e.get("utcDate")-t.get("utcDate")})}catch(e){}return t},supportEditTeamWidgets:function(){var e=r.models.teamInfo.get("team");return e&&e.userIsAdmin}});var o=n.dependencies.base_metric;return o.info=n.info,n.models.countdownManager=new n.models.CountdownManager,n.styles.style(),n.views.countdown=r.widgetManager.handover("countdown",o.views.BaseMetric,{model:n.models.countdown,region:"top-right",order:"append",metricType:"Countdown",metricTitle:"Countdowns",metricIcon:"icon-countdowns.svg",visibleSetting:"countdownVisible",defaultShowRandomState:!0,metricDescription:"Count down the days until an important date",manager:n.models.countdownManager,detailViewAddin:"countdown_detail",updateInterval:"onWholeMinute"}),r.widgets.push(n.views.countdown),n};m.addinManager&&m.addinManager.registerAddinFn("fb230b62-96ce-44b5-87c5-4a563553038b",fn_addin);