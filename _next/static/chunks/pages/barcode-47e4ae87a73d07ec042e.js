_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"3Mv1":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n("q1tI"),r=n.n(o),a=n("vRNQ"),l=n.n(a),i=r.a.createElement;function c(e){return i("div",{className:"card m-3"},i("div",{className:l.a.history},i("div",{className:"card-body p-0 "},i("div",{className:"card-header border-secondary"},i("h5",null,e.testWeek)),e.tests.sort((function(e,t){return new Date(t.date)-new Date(e.date)})).map((function(e){var t,n;return 0==e.result?(n="Negative",t="bg-light"):1==e.result?(n="Positive",t="bg-warning"):(n="Pending",t="bg-secondary"),i("div",{className:"card-text ".concat(t)},i("ul",null,i("li",null,"Status: ",n),i("li",null,"Date Tested: ",new Date(e.date).toDateString())))})))))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var o=n("J4zp"),r=n("284h");t.__esModule=!0,t.default=void 0;var a,l=r(n("q1tI")),i=n("elyg"),c=n("nOHt"),s=new Map,u=window.IntersectionObserver,d={};var f=function(e,t){var n=a||(u?a=new u((function(e){e.forEach((function(e){if(s.has(e.target)){var t=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),s.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),s.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}s.delete(e)}):function(){}};function _(e,t,n,o){(0,i.isLocalURL)(t)&&(e.prefetch(t,n,o).catch((function(e){0})),d[t+"%"+n]=!0)}var p=function(e){var t=!1!==e.prefetch,n=l.default.useState(),r=o(n,2),a=r[0],s=r[1],p=(0,c.useRouter)(),h=p&&p.pathname||"/",m=l.default.useMemo((function(){var t=(0,i.resolveHref)(h,e.href,!0),n=o(t,2),r=n[0],a=n[1];return{href:r,as:e.as?(0,i.resolveHref)(h,e.as):a||r}}),[h,e.href,e.as]),g=m.href,v=m.as;l.default.useEffect((function(){if(t&&u&&a&&a.tagName&&(0,i.isLocalURL)(g)&&!d[g+"%"+v])return f(a,(function(){_(p,g,v)}))}),[t,a,g,v,p]);var b=e.children,w=e.replace,y=e.shallow,H=e.scroll;"string"===typeof b&&(b=l.default.createElement("a",null,b));var N=l.Children.only(b),E={ref:function(e){e&&s(e),N&&"object"===typeof N&&N.ref&&("function"===typeof N.ref?N.ref(e):"object"===typeof N.ref&&(N.ref.current=e))},onClick:function(e){N.props&&"function"===typeof N.props.onClick&&N.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,a,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==l&&(l=o.indexOf("#")<0),t[r?"replace":"push"](n,o,{shallow:a}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())})))}(e,p,g,v,w,y,H)}};return t&&(E.onMouseEnter=function(e){(0,i.isLocalURL)(g)&&(N.props&&"function"===typeof N.props.onMouseEnter&&N.props.onMouseEnter(e),_(p,g,v,{priority:!0}))}),(e.passHref||"a"===N.type&&!("href"in N.props))&&(E.href=(0,i.addBasePath)((0,i.addLocale)(v,p&&p.locale,p&&p.defaultLocale))),l.default.cloneElement(N,E)};t.default=p},lfrA:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var o=n("q1tI"),r=n.n(o),a=(n("3Mv1"),n("6ctO")),l=n("YFqc"),i=n.n(l),c=r.a.createElement;function s(){return c("div",null,c(a.a,{bg:"light"},c(a.a.Brand,{href:"/dashboard"},c("img",{alt:"testme logo",src:"/logo.png",width:"30",height:"30",className:"d-inline-block align-top"}),"TestMe"),c("div",{class:"dropdown"},c("button",{class:"btn btn-primary dropdown-toggle",type:"button",id:"dropdownMenu2","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Menu"),c("div",{class:"dropdown-menu dropdown-menu-right dropdown-menu-lg-left"},c("button",{class:"dropdown-item",type:"button"},c(i.a,{href:"/dashboard"},c("a",null,"Dashboard"))),c("button",{class:"dropdown-item",type:"button"},c(i.a,{href:"/history"},c("a",null,"Your History"))),c("button",{class:"dropdown-item",type:"button"},c(i.a,{href:"https://health.gatech.edu/coronavirus/health-alerts"},c("a",null,"Resources")))))),c("center",null,c("h1",null,"Your Barcode:")),c("div",{className:"col"},c("center",null,c("img",{src:"/barcodeImage.png",alt:"Image of Barcode"}))))}},v04h:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/barcode",function(){return n("lfrA")}])},vRNQ:function(e,t,n){e.exports={container:"Home_container__1EcsU",main:"Home_main__1x8gC",footer:"Home_footer__1WdhD",title:"Home_title__3DjR7",description:"Home_description__17Z4F",code:"Home_code__axx2Y",grid:"Home_grid__2Ei2F",card:"Home_card__2SdtB",history:"Home_history__7JNrp",Dashboard:"Home_Dashboard__3qx86",logo:"Home_logo__1YbrH",mybtn:"Home_mybtn__2hq75",Header:"Home_Header__3kpN5",Title:"Home_Title__19ALb",newTest:"Home_newTest__2laHq",mybtn2:"Home_mybtn2__A6DDI","fa-1x":"Home_fa-1x__1qfUf","navbar-toggler":"Home_navbar-toggler__2bkSt","toggler-example":"Home_toggler-example__kRaZg","dark-blue-text":"Home_dark-blue-text__2z9iv"}}},[["v04h",0,2,1,3]]]);