!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t("object"==typeof exports?require("jquery"):jQuery)}(function(t,e){function i(){return new Date(Date.UTC.apply(Date,arguments))}function a(){var t=new Date;return i(t.getFullYear(),t.getMonth(),t.getDate())}function s(t,e){return t.getUTCFullYear()===e.getUTCFullYear()&&t.getUTCMonth()===e.getUTCMonth()&&t.getUTCDate()===e.getUTCDate()}function n(t){return function(){return this[t].apply(this,arguments)}}function o(t){return t&&!isNaN(t.getTime())}function r(e,i){function a(t,e){return e.toLowerCase()}var s=t(e).data(),n={},o=new RegExp("^"+i.toLowerCase()+"([A-Z])");for(var r in i=new RegExp("^"+i.toLowerCase()),s)i.test(r)&&(n[r.replace(o,a)]=s[r]);return n}function h(e){var i={};if(v[e]||(e=e.split("-")[0],v[e])){var a=v[e];return t.each(D,function(t,e){e in a&&(i[e]=a[e])}),i}}var l,d=(l={get:function(t){return this.slice(t)[0]},contains:function(t){for(var e=t&&t.valueOf(),i=0,a=this.length;a>i;i++)if(this[i].valueOf()===e)return i;return-1},remove:function(t){this.splice(t,1)},replace:function(e){e&&(t.isArray(e)||(e=[e]),this.clear(),this.push.apply(this,e))},clear:function(){this.length=0},copy:function(){var t=new d;return t.replace(this),t}},function(){var e=[];return e.push.apply(e,arguments),t.extend(e,l),e}),c=function(e,i){t(e).data("datepicker",this),this._process_options(i),this.dates=new d,this.viewDate=this.o.defaultViewDate,this.focusDate=null,this.element=t(e),this.isInput=this.element.is("input"),this.inputField=this.isInput?this.element:this.element.find("input"),this.component=!!this.element.hasClass("date")&&this.element.find(".add-on, .input-group-addon, .btn"),this.hasInput=this.component&&this.inputField.length,this.component&&0===this.component.length&&(this.component=!1),this.isInline=!this.component&&this.element.is("div"),this.picker=t(y.template),this._check_template(this.o.templates.leftArrow)&&this.picker.find(".prev").html(this.o.templates.leftArrow),this._check_template(this.o.templates.rightArrow)&&this.picker.find(".next").html(this.o.templates.rightArrow),this._buildEvents(),this._attachEvents(),this.isInline?this.picker.addClass("datepicker-inline").appendTo(this.element):this.picker.addClass("datepicker-dropdown dropdown-menu"),this.o.rtl&&this.picker.addClass("datepicker-rtl"),this.viewMode=this.o.startView,this.o.calendarWeeks&&this.picker.find("thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan",function(t,e){return parseInt(e)+1}),this._allow_update=!1,this.setStartDate(this._o.startDate),this.setEndDate(this._o.endDate),this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled),this.setDaysOfWeekHighlighted(this.o.daysOfWeekHighlighted),this.setDatesDisabled(this.o.datesDisabled),this.fillDow(),this.fillMonths(),this._allow_update=!0,this.update(),this.showMode(),this.isInline&&this.show()};c.prototype={constructor:c,_resolveViewName:function(t,i){return 0===t||"days"===t||"month"===t?0:1===t||"months"===t||"year"===t?1:2===t||"years"===t||"decade"===t?2:3===t||"decades"===t||"century"===t?3:4===t||"centuries"===t||"millennium"===t?4:i!==e&&i},_check_template:function(i){try{return i!==e&&""!==i&&((i.match(/[<>]/g)||[]).length<=0||t(i).length>0)}catch(s){return!1}},_process_options:function(e){this._o=t.extend({},this._o,e);var s=this.o=t.extend({},this._o),n=s.language;v[n]||(n=n.split("-")[0],v[n]||(n=g.language)),s.language=n,s.startView=this._resolveViewName(s.startView,0),s.minViewMode=this._resolveViewName(s.minViewMode,0),s.maxViewMode=this._resolveViewName(s.maxViewMode,4),s.startView=Math.min(s.startView,s.maxViewMode),s.startView=Math.max(s.startView,s.minViewMode),!0!==s.multidate&&(s.multidate=Number(s.multidate)||!1,!1!==s.multidate&&(s.multidate=Math.max(0,s.multidate))),s.multidateSeparator=String(s.multidateSeparator),s.weekStart%=7,s.weekEnd=(s.weekStart+6)%7;var o=y.parseFormat(s.format);s.startDate!==-1/0&&(s.startDate?s.startDate instanceof Date?s.startDate=this._local_to_utc(this._zero_time(s.startDate)):s.startDate=y.parseDate(s.startDate,o,s.language,s.assumeNearbyYear):s.startDate=-1/0),s.endDate!==1/0&&(s.endDate?s.endDate instanceof Date?s.endDate=this._local_to_utc(this._zero_time(s.endDate)):s.endDate=y.parseDate(s.endDate,o,s.language,s.assumeNearbyYear):s.endDate=1/0),s.daysOfWeekDisabled=s.daysOfWeekDisabled||[],t.isArray(s.daysOfWeekDisabled)||(s.daysOfWeekDisabled=s.daysOfWeekDisabled.split(/[,\s]*/)),s.daysOfWeekDisabled=t.map(s.daysOfWeekDisabled,function(t){return parseInt(t,10)}),s.daysOfWeekHighlighted=s.daysOfWeekHighlighted||[],t.isArray(s.daysOfWeekHighlighted)||(s.daysOfWeekHighlighted=s.daysOfWeekHighlighted.split(/[,\s]*/)),s.daysOfWeekHighlighted=t.map(s.daysOfWeekHighlighted,function(t){return parseInt(t,10)}),s.datesDisabled=s.datesDisabled||[],t.isArray(s.datesDisabled)||(s.datesDisabled=[s.datesDisabled]),s.datesDisabled=t.map(s.datesDisabled,function(t){return y.parseDate(t,o,s.language,s.assumeNearbyYear)});var r=String(s.orientation).toLowerCase().split(/\s+/g),h=s.orientation.toLowerCase();if(r=t.grep(r,function(t){return/^auto|left|right|top|bottom$/.test(t)}),s.orientation={x:"auto",y:"auto"},h&&"auto"!==h)if(1===r.length)switch(r[0]){case"top":case"bottom":s.orientation.y=r[0];break;case"left":case"right":s.orientation.x=r[0]}else h=t.grep(r,function(t){return/^left|right$/.test(t)}),s.orientation.x=h[0]||"auto",h=t.grep(r,function(t){return/^top|bottom$/.test(t)}),s.orientation.y=h[0]||"auto";if(s.defaultViewDate){var l=s.defaultViewDate.year||(new Date).getFullYear(),d=s.defaultViewDate.month||0,c=s.defaultViewDate.day||1;s.defaultViewDate=i(l,d,c)}else s.defaultViewDate=a()},_events:[],_secondaryEvents:[],_applyEvents:function(t){for(var i,a,s,n=0;n<t.length;n++)i=t[n][0],2===t[n].length?(a=e,s=t[n][1]):3===t[n].length&&(a=t[n][1],s=t[n][2]),i.on(s,a)},_unapplyEvents:function(t){for(var i,a,s,n=0;n<t.length;n++)i=t[n][0],2===t[n].length?(s=e,a=t[n][1]):3===t[n].length&&(s=t[n][1],a=t[n][2]),i.off(a,s)},_buildEvents:function(){var e={keyup:t.proxy(function(e){-1===t.inArray(e.keyCode,[27,37,39,38,40,32,13,9])&&this.update()},this),keydown:t.proxy(this.keydown,this),paste:t.proxy(this.paste,this)};!0===this.o.showOnFocus&&(e.focus=t.proxy(this.show,this)),this.isInput?this._events=[[this.element,e]]:this.component&&this.hasInput?this._events=[[this.inputField,e],[this.component,{click:t.proxy(this.show,this)}]]:this._events=[[this.element,{click:t.proxy(this.show,this),keydown:t.proxy(this.keydown,this)}]],this._events.push([this.element,"*",{blur:t.proxy(function(t){this._focused_from=t.target},this)}],[this.element,{blur:t.proxy(function(t){this._focused_from=t.target},this)}]),this.o.immediateUpdates&&this._events.push([this.element,{"changeYear changeMonth":t.proxy(function(t){this.update(t.date)},this)}]),this._secondaryEvents=[[this.picker,{click:t.proxy(this.click,this)}],[t(window),{resize:t.proxy(this.place,this)}],[t(document),{mousedown:t.proxy(function(t){this.element.is(t.target)||this.element.find(t.target).length||this.picker.is(t.target)||this.picker.find(t.target).length||this.isInline||this.hide()},this)}]]},_attachEvents:function(){this._detachEvents(),this._applyEvents(this._events)},_detachEvents:function(){this._unapplyEvents(this._events)},_attachSecondaryEvents:function(){this._detachSecondaryEvents(),this._applyEvents(this._secondaryEvents)},_detachSecondaryEvents:function(){this._unapplyEvents(this._secondaryEvents)},_trigger:function(e,i){var a=i||this.dates.get(-1),s=this._utc_to_local(a);this.element.trigger({type:e,date:s,dates:t.map(this.dates,this._utc_to_local),format:t.proxy(function(t,e){0===arguments.length?(t=this.dates.length-1,e=this.o.format):"string"==typeof t&&(e=t,t=this.dates.length-1),e=e||this.o.format;var i=this.dates.get(t);return y.formatDate(i,e,this.o.language)},this)})},show:function(){return this.inputField.prop("disabled")||this.inputField.prop("readonly")&&!1===this.o.enableOnReadonly?void 0:(this.isInline||this.picker.appendTo(this.o.container),this.place(),this.picker.show(),this._attachSecondaryEvents(),this._trigger("show"),(window.navigator.msMaxTouchPoints||"ontouchstart"in document)&&this.o.disableTouchKeyboard&&t(this.element).blur(),this)},hide:function(){return this.isInline||!this.picker.is(":visible")?this:(this.focusDate=null,this.picker.hide().detach(),this._detachSecondaryEvents(),this.viewMode=this.o.startView,this.showMode(),this.o.forceParse&&this.inputField.val()&&this.setValue(),this._trigger("hide"),this)},destroy:function(){return this.hide(),this._detachEvents(),this._detachSecondaryEvents(),this.picker.remove(),delete this.element.data().datepicker,this.isInput||delete this.element.data().date,this},paste:function(e){var i;if(e.originalEvent.clipboardData&&e.originalEvent.clipboardData.types&&-1!==t.inArray("text/plain",e.originalEvent.clipboardData.types))i=e.originalEvent.clipboardData.getData("text/plain");else{if(!window.clipboardData)return;i=window.clipboardData.getData("Text")}this.setDate(i),this.update(),e.preventDefault()},_utc_to_local:function(t){return t&&new Date(t.getTime()+6e4*t.getTimezoneOffset())},_local_to_utc:function(t){return t&&new Date(t.getTime()-6e4*t.getTimezoneOffset())},_zero_time:function(t){return t&&new Date(t.getFullYear(),t.getMonth(),t.getDate())},_zero_utc_time:function(t){return t&&new Date(Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()))},getDates:function(){return t.map(this.dates,this._utc_to_local)},getUTCDates:function(){return t.map(this.dates,function(t){return new Date(t)})},getDate:function(){return this._utc_to_local(this.getUTCDate())},getUTCDate:function(){var t=this.dates.get(-1);return void 0!==t?new Date(t):null},clearDates:function(){this.inputField&&this.inputField.val(""),this.update(),this._trigger("changeDate"),this.o.autoclose&&this.hide()},setDates:function(){var e=t.isArray(arguments[0])?arguments[0]:arguments;return this.update.apply(this,e),this._trigger("changeDate"),this.setValue(),this},setUTCDates:function(){var e=t.isArray(arguments[0])?arguments[0]:arguments;return this.update.apply(this,t.map(e,this._utc_to_local)),this._trigger("changeDate"),this.setValue(),this},setDate:n("setDates"),setUTCDate:n("setUTCDates"),remove:n("destroy"),setValue:function(){var t=this.getFormattedDate();return this.inputField.val(t),this},getFormattedDate:function(i){i===e&&(i=this.o.format);var a=this.o.language;return t.map(this.dates,function(t){return y.formatDate(t,i,a)}).join(this.o.multidateSeparator)},getStartDate:function(){return this.o.startDate},setStartDate:function(t){return this._process_options({startDate:t}),this.update(),this.updateNavArrows(),this},getEndDate:function(){return this.o.endDate},setEndDate:function(t){return this._process_options({endDate:t}),this.update(),this.updateNavArrows(),this},setDaysOfWeekDisabled:function(t){return this._process_options({daysOfWeekDisabled:t}),this.update(),this.updateNavArrows(),this},setDaysOfWeekHighlighted:function(t){return this._process_options({daysOfWeekHighlighted:t}),this.update(),this},setDatesDisabled:function(t){this._process_options({datesDisabled:t}),this.update(),this.updateNavArrows()},place:function(){if(this.isInline)return this;var e=this.picker.outerWidth(),i=this.picker.outerHeight(),a=10,s=t(this.o.container),n=s.width(),o="body"===this.o.container?t(document).scrollTop():s.scrollTop(),r=s.offset(),h=[];this.element.parents().each(function(){var e=t(this).css("z-index");"auto"!==e&&0!==e&&h.push(parseInt(e))});var l=Math.max.apply(Math,h)+this.o.zIndexOffset,d=this.component?this.component.parent().offset():this.element.offset(),c=this.component?this.component.outerHeight(!0):this.element.outerHeight(!1),u=this.component?this.component.outerWidth(!0):this.element.outerWidth(!1),p=d.left-r.left,f=d.top-r.top;"body"!==this.o.container&&(f+=o),this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"),"auto"!==this.o.orientation.x?(this.picker.addClass("datepicker-orient-"+this.o.orientation.x),"right"===this.o.orientation.x&&(p-=e-u)):d.left<0?(this.picker.addClass("datepicker-orient-left"),p-=d.left-a):p+e>n?(this.picker.addClass("datepicker-orient-right"),p+=u-e):this.picker.addClass("datepicker-orient-left");var g=this.o.orientation.y;if("auto"===g&&(g=0>-o+f-i?"bottom":"top"),this.picker.addClass("datepicker-orient-"+g),"top"===g?f-=i+parseInt(this.picker.css("padding-top")):f+=c,this.o.rtl){var D=n-(p+u);this.picker.css({top:f,right:D,zIndex:l})}else this.picker.css({top:f,left:p,zIndex:l});return this},_allow_update:!0,update:function(){if(!this._allow_update)return this;var e=this.dates.copy(),i=[],a=!1;return arguments.length?(t.each(arguments,t.proxy(function(t,e){e instanceof Date&&(e=this._local_to_utc(e)),i.push(e)},this)),a=!0):(i=(i=this.isInput?this.element.val():this.element.data("date")||this.inputField.val())&&this.o.multidate?i.split(this.o.multidateSeparator):[i],delete this.element.data().date),i=t.map(i,t.proxy(function(t){return y.parseDate(t,this.o.format,this.o.language,this.o.assumeNearbyYear)},this)),i=t.grep(i,t.proxy(function(t){return!this.dateWithinRange(t)||!t},this),!0),this.dates.replace(i),this.dates.length?this.viewDate=new Date(this.dates.get(-1)):this.viewDate<this.o.startDate?this.viewDate=new Date(this.o.startDate):this.viewDate>this.o.endDate?this.viewDate=new Date(this.o.endDate):this.viewDate=this.o.defaultViewDate,a?this.setValue():i.length&&String(e)!==String(this.dates)&&this._trigger("changeDate"),!this.dates.length&&e.length&&this._trigger("clearDate"),this.fill(),this.element.change(),this},fillDow:function(){var e=this.o.weekStart,i="<tr>";for(this.o.calendarWeeks&&(this.picker.find(".datepicker-days .datepicker-switch").attr("colspan",function(t,e){return parseInt(e)+1}),i+='<th class="cw">&#160;</th>');e<this.o.weekStart+7;)i+='<th class="dow',t.inArray(e,this.o.daysOfWeekDisabled)>-1&&(i+=" disabled"),i+='">'+v[this.o.language].daysMin[e++%7]+"</th>";i+="</tr>",this.picker.find(".datepicker-days thead").append(i)},fillMonths:function(){for(var t=this._utc_to_local(this.viewDate),e="",i=0;12>i;){e+='<span class="month'+(t&&t.getMonth()===i?" focused":"")+'">'+v[this.o.language].monthsShort[i++]+"</span>"}this.picker.find(".datepicker-months td").html(e)},setRange:function(e){e&&e.length?this.range=t.map(e,function(t){return t.valueOf()}):delete this.range,this.fill()},getClassNames:function(e){var i=[],a=this.viewDate.getUTCFullYear(),s=this.viewDate.getUTCMonth(),n=new Date;return e.getUTCFullYear()<a||e.getUTCFullYear()===a&&e.getUTCMonth()<s?i.push("old"):(e.getUTCFullYear()>a||e.getUTCFullYear()===a&&e.getUTCMonth()>s)&&i.push("new"),this.focusDate&&e.valueOf()===this.focusDate.valueOf()&&i.push("focused"),this.o.todayHighlight&&e.getUTCFullYear()===n.getFullYear()&&e.getUTCMonth()===n.getMonth()&&e.getUTCDate()===n.getDate()&&i.push("today"),-1!==this.dates.contains(e)&&i.push("active"),this.dateWithinRange(e)||i.push("disabled"),this.dateIsDisabled(e)&&i.push("disabled","disabled-date"),-1!==t.inArray(e.getUTCDay(),this.o.daysOfWeekHighlighted)&&i.push("highlighted"),this.range&&(e>this.range[0]&&e<this.range[this.range.length-1]&&i.push("range"),-1!==t.inArray(e.valueOf(),this.range)&&i.push("selected"),e.valueOf()===this.range[0]&&i.push("range-start"),e.valueOf()===this.range[this.range.length-1]&&i.push("range-end")),i},_fill_yearsView:function(i,a,s,n,o,r,h,l){var d,c,u,p,f,g,D,v,y,m,w;for(d="",c=this.picker.find(i),u=parseInt(o/s,10)*s,f=parseInt(r/n,10)*n,g=parseInt(h/n,10)*n,p=t.map(this.dates,function(t){return parseInt(t.getUTCFullYear()/n,10)*n}),c.find(".datepicker-switch").text(u+"-"+(u+9*n)),D=u-n,v=-1;11>v;v+=1)y=[a],m=null,-1===v?y.push("old"):10===v&&y.push("new"),-1!==t.inArray(D,p)&&y.push("active"),(f>D||D>g)&&y.push("disabled"),D===this.viewDate.getFullYear()&&y.push("focused"),l!==t.noop&&((w=l(new Date(D,0,1)))===e?w={}:"boolean"==typeof w?w={enabled:w}:"string"==typeof w&&(w={classes:w}),!1===w.enabled&&y.push("disabled"),w.classes&&(y=y.concat(w.classes.split(/\s+/))),w.tooltip&&(m=w.tooltip)),d+='<span class="'+y.join(" ")+'"'+(m?' title="'+m+'"':"")+">"+D+"</span>",D+=n;c.find("td").html(d)},fill:function(){var a,s,n=new Date(this.viewDate),o=n.getUTCFullYear(),r=n.getUTCMonth(),h=this.o.startDate!==-1/0?this.o.startDate.getUTCFullYear():-1/0,l=this.o.startDate!==-1/0?this.o.startDate.getUTCMonth():-1/0,d=this.o.endDate!==1/0?this.o.endDate.getUTCFullYear():1/0,c=this.o.endDate!==1/0?this.o.endDate.getUTCMonth():1/0,u=v[this.o.language].today||v.en.today||"",p=v[this.o.language].clear||v.en.clear||"",f=v[this.o.language].titleFormat||v.en.titleFormat;if(!isNaN(o)&&!isNaN(r)){this.picker.find(".datepicker-days .datepicker-switch").text(y.formatDate(n,f,this.o.language)),this.picker.find("tfoot .today").text(u).toggle(!1!==this.o.todayBtn),this.picker.find("tfoot .clear").text(p).toggle(!1!==this.o.clearBtn),this.picker.find("thead .datepicker-title").text(this.o.title).toggle(""!==this.o.title),this.updateNavArrows(),this.fillMonths();var g=i(o,r-1,28),D=y.getDaysInMonth(g.getUTCFullYear(),g.getUTCMonth());g.setUTCDate(D),g.setUTCDate(D-(g.getUTCDay()-this.o.weekStart+7)%7);var m=new Date(g);g.getUTCFullYear()<100&&m.setUTCFullYear(g.getUTCFullYear()),m.setUTCDate(m.getUTCDate()+42),m=m.valueOf();for(var w,k=[];g.valueOf()<m;){if(g.getUTCDay()===this.o.weekStart&&(k.push("<tr>"),this.o.calendarWeeks)){var C=new Date(+g+(this.o.weekStart-g.getUTCDay()-7)%7*864e5),b=new Date(Number(C)+(11-C.getUTCDay())%7*864e5),_=new Date(Number(_=i(b.getUTCFullYear(),0,1))+(11-_.getUTCDay())%7*864e5),T=(b-_)/864e5/7+1;k.push('<td class="cw">'+T+"</td>")}(w=this.getClassNames(g)).push("day"),this.o.beforeShowDay!==t.noop&&((s=this.o.beforeShowDay(this._utc_to_local(g)))===e?s={}:"boolean"==typeof s?s={enabled:s}:"string"==typeof s&&(s={classes:s}),!1===s.enabled&&w.push("disabled"),s.classes&&(w=w.concat(s.classes.split(/\s+/))),s.tooltip&&(a=s.tooltip)),w=t.isFunction(t.uniqueSort)?t.uniqueSort(w):t.unique(w),k.push('<td class="'+w.join(" ")+'"'+(a?' title="'+a+'"':"")+">"+g.getUTCDate()+"</td>"),a=null,g.getUTCDay()===this.o.weekEnd&&k.push("</tr>"),g.setUTCDate(g.getUTCDate()+1)}this.picker.find(".datepicker-days tbody").empty().append(k.join(""));var M=v[this.o.language].monthsTitle||v.en.monthsTitle||"Months",U=this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode<2?M:o).end().find("span").removeClass("active");if(t.each(this.dates,function(t,e){e.getUTCFullYear()===o&&U.eq(e.getUTCMonth()).addClass("active")}),(h>o||o>d)&&U.addClass("disabled"),o===h&&U.slice(0,l).addClass("disabled"),o===d&&U.slice(c+1).addClass("disabled"),this.o.beforeShowMonth!==t.noop){var F=this;t.each(U,function(i,a){var s=new Date(o,i,1),n=F.o.beforeShowMonth(s);n===e?n={}:"boolean"==typeof n?n={enabled:n}:"string"==typeof n&&(n={classes:n}),!1!==n.enabled||t(a).hasClass("disabled")||t(a).addClass("disabled"),n.classes&&t(a).addClass(n.classes),n.tooltip&&t(a).prop("title",n.tooltip)})}this._fill_yearsView(".datepicker-years","year",10,1,o,h,d,this.o.beforeShowYear),this._fill_yearsView(".datepicker-decades","decade",100,10,o,h,d,this.o.beforeShowDecade),this._fill_yearsView(".datepicker-centuries","century",1e3,100,o,h,d,this.o.beforeShowCentury)}},updateNavArrows:function(){if(this._allow_update){var t=new Date(this.viewDate),e=t.getUTCFullYear(),i=t.getUTCMonth();switch(this.viewMode){case 0:this.o.startDate!==-1/0&&e<=this.o.startDate.getUTCFullYear()&&i<=this.o.startDate.getUTCMonth()?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"}),this.o.endDate!==1/0&&e>=this.o.endDate.getUTCFullYear()&&i>=this.o.endDate.getUTCMonth()?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"});break;case 1:case 2:case 3:case 4:this.o.startDate!==-1/0&&e<=this.o.startDate.getUTCFullYear()||this.o.maxViewMode<2?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"}),this.o.endDate!==1/0&&e>=this.o.endDate.getUTCFullYear()||this.o.maxViewMode<2?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"})}}},click:function(e){var s,n,o,r,h,l,d;e.preventDefault(),e.stopPropagation(),(s=t(e.target)).hasClass("datepicker-switch")&&this.showMode(1);var c=s.closest(".prev, .next");c.length>0&&(n=y.modes[this.viewMode].navStep*(c.hasClass("prev")?-1:1),0===this.viewMode?(this.viewDate=this.moveMonth(this.viewDate,n),this._trigger("changeMonth",this.viewDate)):(this.viewDate=this.moveYear(this.viewDate,n),1===this.viewMode&&this._trigger("changeYear",this.viewDate)),this.fill()),s.hasClass("today")&&!s.hasClass("day")&&(this.showMode(-2),this._setDate(a(),"linked"===this.o.todayBtn?null:"view")),s.hasClass("clear")&&this.clearDates(),s.hasClass("disabled")||(s.hasClass("day")&&(o=parseInt(s.text(),10)||1,r=this.viewDate.getUTCFullYear(),h=this.viewDate.getUTCMonth(),s.hasClass("old")&&(0===h?(h=11,r-=1,l=!0,d=!0):(h-=1,l=!0)),s.hasClass("new")&&(11===h?(h=0,r+=1,l=!0,d=!0):(h+=1,l=!0)),this._setDate(i(r,h,o)),d&&this._trigger("changeYear",this.viewDate),l&&this._trigger("changeMonth",this.viewDate)),s.hasClass("month")&&(this.viewDate.setUTCDate(1),o=1,h=s.parent().find("span").index(s),r=this.viewDate.getUTCFullYear(),this.viewDate.setUTCMonth(h),this._trigger("changeMonth",this.viewDate),1===this.o.minViewMode?(this._setDate(i(r,h,o)),this.showMode()):this.showMode(-1),this.fill()),(s.hasClass("year")||s.hasClass("decade")||s.hasClass("century"))&&(this.viewDate.setUTCDate(1),o=1,h=0,r=parseInt(s.text(),10)||0,this.viewDate.setUTCFullYear(r),s.hasClass("year")&&(this._trigger("changeYear",this.viewDate),2===this.o.minViewMode&&this._setDate(i(r,h,o))),s.hasClass("decade")&&(this._trigger("changeDecade",this.viewDate),3===this.o.minViewMode&&this._setDate(i(r,h,o))),s.hasClass("century")&&(this._trigger("changeCentury",this.viewDate),4===this.o.minViewMode&&this._setDate(i(r,h,o))),this.showMode(-1),this.fill())),this.picker.is(":visible")&&this._focused_from&&t(this._focused_from).focus(),delete this._focused_from},_toggle_multidate:function(t){var e=this.dates.contains(t);if(t||this.dates.clear(),-1!==e?(!0===this.o.multidate||this.o.multidate>1||this.o.toggleActive)&&this.dates.remove(e):!1===this.o.multidate?(this.dates.clear(),this.dates.push(t)):this.dates.push(t),"number"==typeof this.o.multidate)for(;this.dates.length>this.o.multidate;)this.dates.remove(0)},_setDate:function(t,e){e&&"date"!==e||this._toggle_multidate(t&&new Date(t)),e&&"view"!==e||(this.viewDate=t&&new Date(t)),this.fill(),this.setValue(),e&&"view"===e||this._trigger("changeDate"),this.inputField&&this.inputField.change(),!this.o.autoclose||e&&"date"!==e||this.hide()},moveDay:function(t,e){var i=new Date(t);return i.setUTCDate(t.getUTCDate()+e),i},moveWeek:function(t,e){return this.moveDay(t,7*e)},moveMonth:function(t,e){if(!o(t))return this.o.defaultViewDate;if(!e)return t;var i,a,s=new Date(t.valueOf()),n=s.getUTCDate(),r=s.getUTCMonth(),h=Math.abs(e);if(e=e>0?1:-1,1===h)a=-1===e?function(){return s.getUTCMonth()===r}:function(){return s.getUTCMonth()!==i},i=r+e,s.setUTCMonth(i),(0>i||i>11)&&(i=(i+12)%12);else{for(var l=0;h>l;l++)s=this.moveMonth(s,e);i=s.getUTCMonth(),s.setUTCDate(n),a=function(){return i!==s.getUTCMonth()}}for(;a();)s.setUTCDate(--n),s.setUTCMonth(i);return s},moveYear:function(t,e){return this.moveMonth(t,12*e)},moveAvailableDate:function(t,e,i){do{if(t=this[i](t,e),!this.dateWithinRange(t))return!1;i="moveDay"}while(this.dateIsDisabled(t));return t},weekOfDateIsDisabled:function(e){return-1!==t.inArray(e.getUTCDay(),this.o.daysOfWeekDisabled)},dateIsDisabled:function(e){return this.weekOfDateIsDisabled(e)||t.grep(this.o.datesDisabled,function(t){return s(e,t)}).length>0},dateWithinRange:function(t){return t>=this.o.startDate&&t<=this.o.endDate},keydown:function(t){if(this.picker.is(":visible")){var e,i,a=!1,s=this.focusDate||this.viewDate;switch(t.keyCode){case 27:this.focusDate?(this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill()):this.hide(),t.preventDefault(),t.stopPropagation();break;case 37:case 38:case 39:case 40:if(!this.o.keyboardNavigation||7===this.o.daysOfWeekDisabled.length)break;e=37===t.keyCode||38===t.keyCode?-1:1,0===this.viewMode?t.ctrlKey?(i=this.moveAvailableDate(s,e,"moveYear"))&&this._trigger("changeYear",this.viewDate):t.shiftKey?(i=this.moveAvailableDate(s,e,"moveMonth"))&&this._trigger("changeMonth",this.viewDate):37===t.keyCode||39===t.keyCode?i=this.moveAvailableDate(s,e,"moveDay"):this.weekOfDateIsDisabled(s)||(i=this.moveAvailableDate(s,e,"moveWeek")):1===this.viewMode?((38===t.keyCode||40===t.keyCode)&&(e*=4),i=this.moveAvailableDate(s,e,"moveMonth")):2===this.viewMode&&((38===t.keyCode||40===t.keyCode)&&(e*=4),i=this.moveAvailableDate(s,e,"moveYear")),i&&(this.focusDate=this.viewDate=i,this.setValue(),this.fill(),t.preventDefault());break;case 13:if(!this.o.forceParse)break;s=this.focusDate||this.dates.get(-1)||this.viewDate,this.o.keyboardNavigation&&(this._toggle_multidate(s),a=!0),this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.setValue(),this.fill(),this.picker.is(":visible")&&(t.preventDefault(),t.stopPropagation(),this.o.autoclose&&this.hide());break;case 9:this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill(),this.hide()}a&&(this.dates.length?this._trigger("changeDate"):this._trigger("clearDate"),this.inputField&&this.inputField.change())}else(40===t.keyCode||27===t.keyCode)&&(this.show(),t.stopPropagation())},showMode:function(t){t&&(this.viewMode=Math.max(this.o.minViewMode,Math.min(this.o.maxViewMode,this.viewMode+t))),this.picker.children("div").hide().filter(".datepicker-"+y.modes[this.viewMode].clsName).show(),this.updateNavArrows()}};var u=function(e,i){t(e).data("datepicker",this),this.element=t(e),this.inputs=t.map(i.inputs,function(t){return t.jquery?t[0]:t}),delete i.inputs,f.call(t(this.inputs),i).on("changeDate",t.proxy(this.dateUpdated,this)),this.pickers=t.map(this.inputs,function(e){return t(e).data("datepicker")}),this.updateDates()};u.prototype={updateDates:function(){this.dates=t.map(this.pickers,function(t){return t.getUTCDate()}),this.updateRanges()},updateRanges:function(){var e=t.map(this.dates,function(t){return t.valueOf()});t.each(this.pickers,function(t,i){i.setRange(e)})},dateUpdated:function(e){if(!this.updating){this.updating=!0;var i=t(e.target).data("datepicker");if(void 0!==i){var a=i.getUTCDate(),s=t.inArray(e.target,this.inputs),n=s-1,o=s+1,r=this.inputs.length;if(-1!==s){if(t.each(this.pickers,function(t,e){e.getUTCDate()||e.setUTCDate(a)}),a<this.dates[n])for(;n>=0&&a<this.dates[n];)this.pickers[n--].setUTCDate(a);else if(a>this.dates[o])for(;r>o&&a>this.dates[o];)this.pickers[o++].setUTCDate(a);this.updateDates(),delete this.updating}}}},remove:function(){t.map(this.pickers,function(t){t.remove()}),delete this.element.data().datepicker}};var p=t.fn.datepicker,f=function(i){var a,s=Array.apply(null,arguments);if(s.shift(),this.each(function(){var e=t(this),n=e.data("datepicker"),o="object"==typeof i&&i;if(!n){var l=r(this,"date"),d=h(t.extend({},g,l,o).language),p=t.extend({},g,d,l,o);e.hasClass("input-daterange")||p.inputs?(t.extend(p,{inputs:p.inputs||e.find("input").toArray()}),n=new u(this,p)):n=new c(this,p),e.data("datepicker",n)}"string"==typeof i&&"function"==typeof n[i]&&(a=n[i].apply(n,s))}),a===e||a instanceof c||a instanceof u)return this;if(this.length>1)throw new Error("Using only allowed for the collection of a single element ("+i+" function)");return a};t.fn.datepicker=f;var g=t.fn.datepicker.defaults={assumeNearbyYear:!1,autoclose:!1,beforeShowDay:t.noop,beforeShowMonth:t.noop,beforeShowYear:t.noop,beforeShowDecade:t.noop,beforeShowCentury:t.noop,calendarWeeks:!1,clearBtn:!1,toggleActive:!1,daysOfWeekDisabled:[],daysOfWeekHighlighted:[],datesDisabled:[],endDate:1/0,forceParse:!0,format:"mm/dd/yyyy",keyboardNavigation:!0,language:"en",minViewMode:0,maxViewMode:4,multidate:!1,multidateSeparator:",",orientation:"auto",rtl:!1,startDate:-1/0,startView:0,todayBtn:!1,todayHighlight:!1,weekStart:0,disableTouchKeyboard:!1,enableOnReadonly:!0,showOnFocus:!0,zIndexOffset:10,container:"body",immediateUpdates:!1,title:"",templates:{leftArrow:"&laquo;",rightArrow:"&raquo;"}},D=t.fn.datepicker.locale_opts=["format","rtl","weekStart"];t.fn.datepicker.Constructor=c;var v=t.fn.datepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear",titleFormat:"MM yyyy"}},y={modes:[{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10},{clsName:"decades",navFnc:"FullDecade",navStep:100},{clsName:"centuries",navFnc:"FullCentury",navStep:1e3}],isLeapYear:function(t){return t%4==0&&t%100!=0||t%400==0},getDaysInMonth:function(t,e){return[31,y.isLeapYear(t)?29:28,31,30,31,30,31,31,30,31,30,31][e]},validParts:/dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,parseFormat:function(t){if("function"==typeof t.toValue&&"function"==typeof t.toDisplay)return t;var e=t.replace(this.validParts,"\0").split("\0"),i=t.match(this.validParts);if(!e||!e.length||!i||0===i.length)throw new Error("Invalid date format.");return{separators:e,parts:i}},parseDate:function(s,n,o,r){function h(t,e){return!0===e&&(e=10),100>t&&((t+=2e3)>(new Date).getFullYear()+e&&(t-=100)),t}function l(){var t=this.slice(0,D[p].length),e=D[p].slice(0,t.length);return t.toLowerCase()===e.toLowerCase()}if(!s)return e;if(s instanceof Date)return s;if("string"==typeof n&&(n=y.parseFormat(n)),n.toValue)return n.toValue(s,n,o);var d,u,p,f,g=/([\-+]\d+)([dmwy])/,D=s.match(/([\-+]\d+)([dmwy])/g),m={d:"moveDay",m:"moveMonth",w:"moveWeek",y:"moveYear"},w={yesterday:"-1d",today:"+0d",tomorrow:"+1d"};if(/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(s)){for(s=new Date,p=0;p<D.length;p++)d=g.exec(D[p]),u=parseInt(d[1]),f=m[d[2]],s=c.prototype[f](s,u);return i(s.getUTCFullYear(),s.getUTCMonth(),s.getUTCDate())}if("undefined"!=typeof w[s]&&(s=w[s],D=s.match(/([\-+]\d+)([dmwy])/g),/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(s))){for(s=new Date,p=0;p<D.length;p++)d=g.exec(D[p]),u=parseInt(d[1]),f=m[d[2]],s=c.prototype[f](s,u);return i(s.getUTCFullYear(),s.getUTCMonth(),s.getUTCDate())}D=s&&s.match(this.nonpunctuation)||[],s=new Date;var k,C,b={},_=["yyyy","yy","M","MM","m","mm","d","dd"],T={yyyy:function(t,e){return t.setUTCFullYear(r?h(e,r):e)},yy:function(t,e){return t.setUTCFullYear(r?h(e,r):e)},m:function(t,e){if(isNaN(t))return t;for(e-=1;0>e;)e+=12;for(e%=12,t.setUTCMonth(e);t.getUTCMonth()!==e;)t.setUTCDate(t.getUTCDate()-1);return t},d:function(t,e){return t.setUTCDate(e)}};T.M=T.MM=T.mm=T.m,T.dd=T.d,s=a();var M=n.parts.slice();if(D.length!==M.length&&(M=t(M).filter(function(e,i){return-1!==t.inArray(i,_)}).toArray()),D.length===M.length){var U,F,x;for(p=0,U=M.length;U>p;p++){if(k=parseInt(D[p],10),d=M[p],isNaN(k))switch(d){case"MM":C=t(v[o].months).filter(l),k=t.inArray(C[0],v[o].months)+1;break;case"M":C=t(v[o].monthsShort).filter(l),k=t.inArray(C[0],v[o].monthsShort)+1}b[d]=k}for(p=0;p<_.length;p++)(x=_[p])in b&&!isNaN(b[x])&&(F=new Date(s),T[x](F,b[x]),isNaN(F)||(s=F))}return s},formatDate:function(e,i,a){if(!e)return"";if("string"==typeof i&&(i=y.parseFormat(i)),i.toDisplay)return i.toDisplay(e,i,a);var s={d:e.getUTCDate(),D:v[a].daysShort[e.getUTCDay()],DD:v[a].days[e.getUTCDay()],m:e.getUTCMonth()+1,M:v[a].monthsShort[e.getUTCMonth()],MM:v[a].months[e.getUTCMonth()],yy:e.getUTCFullYear().toString().substring(2),yyyy:e.getUTCFullYear()};s.dd=(s.d<10?"0":"")+s.d,s.mm=(s.m<10?"0":"")+s.m,e=[];for(var n=t.extend([],i.separators),o=0,r=i.parts.length;r>=o;o++)n.length&&e.push(n.shift()),e.push(s[i.parts[o]]);return e.join("")},headTemplate:'<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">&laquo;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&raquo;</th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'}
;y.template='<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">'+y.headTemplate+"<tbody></tbody>"+y.footTemplate+'</table></div><div class="datepicker-months"><table class="table-condensed">'+y.headTemplate+y.contTemplate+y.footTemplate+'</table></div><div class="datepicker-years"><table class="table-condensed">'+y.headTemplate+y.contTemplate+y.footTemplate+'</table></div><div class="datepicker-decades"><table class="table-condensed">'+y.headTemplate+y.contTemplate+y.footTemplate+'</table></div><div class="datepicker-centuries"><table class="table-condensed">'+y.headTemplate+y.contTemplate+y.footTemplate+"</table></div></div>",t.fn.datepicker.DPGlobal=y,t.fn.datepicker.noConflict=function(){return t.fn.datepicker=p,this},t.fn.datepicker.version="1.6.4",t(document).on("focus.datepicker.data-api click.datepicker.data-api",'[data-provide="datepicker"]',function(e){var i=t(this);i.data("datepicker")||(e.preventDefault(),f.call(i,"show"))}),t(function(){f.call(t('[data-provide="datepicker-inline"]'))})});