(function(t){function e(e){for(var a,r,c=e[0],s=e[1],l=e[2],u=0,f=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o={app:0},i=[];function c(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{"chunk-26eadea6":"80ec96d4","chunk-2edb2bab":"a12872f3",about:"76b633ac","chunk-7446cf90":"0a020a4a","chunk-2f63909c":"d8bba2cc"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={about:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{"chunk-26eadea6":"31d6cfe0","chunk-2edb2bab":"31d6cfe0",about:"f2aaddf9","chunk-7446cf90":"31d6cfe0","chunk-2f63909c":"31d6cfe0"}[t]+".css",o=s.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===o))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){l=f[c],u=l.getAttribute("data-href");if(u===a||u===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[t],d.parentNode.removeChild(d),n(i)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(t);var f=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}o[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var d=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("744f"),n("6c7b"),n("7514"),n("20d6"),n("1c4c"),n("6762"),n("cadf"),n("e804"),n("55dd"),n("d04f"),n("c8ce"),n("217b"),n("7f7f"),n("f400"),n("7f25"),n("536b"),n("d9ab"),n("f9ab"),n("32d7"),n("25c9"),n("9f3c"),n("042e"),n("c7c6"),n("f4ff"),n("049f"),n("7872"),n("a69f"),n("0b21"),n("6c1a"),n("c7c62"),n("84b4"),n("c5f6"),n("2e37"),n("fca0"),n("7cdf"),n("ee1d"),n("b1b1"),n("87f3"),n("9278"),n("5df2"),n("04ff"),n("f751"),n("4504"),n("fee7"),n("ffc1"),n("0d6d"),n("9986"),n("8e6e"),n("25db"),n("e4f7"),n("b9a1"),n("64d5"),n("9aea"),n("db97"),n("66c8"),n("57f0"),n("165b"),n("456d"),n("cf6a"),n("fd24"),n("8615"),n("551c"),n("097d"),n("df1b"),n("2397"),n("88ca"),n("ba16"),n("d185"),n("ebde"),n("2d34"),n("f6b3"),n("2251"),n("c698"),n("a19f"),n("9253"),n("9275"),n("3b2b"),n("3846"),n("4917"),n("a481"),n("28a5"),n("386d"),n("6b54"),n("4f7f"),n("8a81"),n("ac4d"),n("8449"),n("9c86"),n("fa83"),n("48c0"),n("a032"),n("aef6"),n("d263"),n("6c37"),n("9ec8"),n("5695"),n("2fdb"),n("d0b0"),n("5df3"),n("b54a"),n("f576"),n("ed50"),n("788d"),n("14b9"),n("f386"),n("f559"),n("1448"),n("673e"),n("242a"),n("c66f"),n("b05c"),n("34ef"),n("6aa2"),n("15ac"),n("af56"),n("b6e4"),n("9c29"),n("63d9"),n("4dda"),n("10ad"),n("c02b"),n("4795"),n("130f"),n("ac6a"),n("96cf");var a=n("2b0e"),r=n("ce5b"),o=n.n(r);n("bf40");a["default"].use(o.a,{iconfont:"fa"});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("v-navigation-drawer",{directives:[{name:"show",rawName:"v-show",value:t.isLoggedIn,expression:"isLoggedIn"}],attrs:{fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[n("v-list-tile",{attrs:{"router:":"",to:"/",exact:""}},[n("v-list-tile-action",[n("i",{staticClass:"fas fa-home"})]),n("v-list-tile-content",[n("v-list-tile-title",[t._v("Login")])],1)],1),n("v-list-tile",{attrs:{"router:":"",to:"home",exact:""}},[n("v-list-tile-action",[n("i",{staticClass:"fas fa-home"})]),n("v-list-tile-content",[n("v-list-tile-title",[t._v("About Us")])],1)],1),n("v-list-tile",{attrs:{"router:":"",to:"front",exact:""}},[n("v-list-tile-action",[n("i",{staticClass:"fas fa-user"})]),n("v-list-tile-content",[n("v-list-tile-title",[t._v("Frontend")])],1)],1),n("v-list-tile",{attrs:{"router:":"",to:"back",exact:""}},[n("v-list-tile-action",[n("i",{staticClass:"fas fa-user"})]),n("v-list-tile-content",[n("v-list-tile-title",[t._v("Backend")])],1)],1),n("v-list-tile",{attrs:{"router:":"",to:"ml",exact:""}},[n("v-list-tile-action",[n("i",{staticClass:"fas fa-user"})]),n("v-list-tile-content",[n("v-list-tile-title",[t._v("ML")])],1)],1)],1),n("v-list-tile",{attrs:{"router:":"",to:"store",exact:""}},[n("v-list-tile-action",[n("i",{staticClass:"fas fa-home"})]),n("v-list-tile-content",[n("v-list-tile-title",[t._v("Stored Picture")])],1)],1)],1),n("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-toolbar-title",[t._v("DR.PLANT")]),n("v-content",[n("router-view")],1),n("v-footer",{attrs:{color:"#42b983",app:""}},[n("span",{staticClass:"white--text"},[t._v("© 2017")])])],1)},c=[],s={data:function(){return{drawer:null}},computed:{isLoggedIn:function(){return this.$store.state.isLoggedIn}},props:{source:String},methods:{home:function(){alert("click")}}},l=s,u=n("2877"),f=Object(u["a"])(l,i,c,!1,null,null,null),d=f.exports,p=n("8c4f"),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-slide-y-transition",{attrs:{mode:"out-in"}},[a("v-layout",{attrs:{column:"","align-center":""}},[a("img",{staticClass:"mb-5",attrs:{src:n("cf05"),width:"230px",height:"180px",alt:"Vuetify.js"}}),a("h2",[t._v("WHAT'S DR.PLANT?")]),t._v("\n        “Dr.Plant is a free application that identifies 10 expensive plant disease that individuals or businesses raise.”\n        “Identification of plant diseases through photographs: Automatically informs you of plant diseases when you take pictures of plants.”\n        "),a("h2",[t._v("WHAT'S SPECAIL ABOUT US?")]),t._v("\n        “Make it convnient to manage plants for free. Individuals can get information about plant management”\n\n    ")])],1)],1)},v=[],h=(n("c11d"),{}),m=Object(u["a"])(h,b,v,!1,null,"2976e521",null),g=m.exports;a["default"].use(p["a"]);var y=function(){return n.e("chunk-26eadea6").then(n.bind(null,"bb32"))},w=new p["a"]({mode:"history",base:"/",routes:[{path:"/",name:"login",component:function(){return Promise.all([n.e("chunk-2edb2bab"),n.e("about")]).then(n.bind(null,"dd7b"))}},{path:"/home",name:"home",component:g},{path:"/front",name:"front",component:function(){return Promise.all([n.e("chunk-2edb2bab"),n.e("about")]).then(n.bind(null,"de8a"))}},{path:"/back",name:"back",component:function(){return n.e("chunk-2f63909c").then(n.bind(null,"d8ee"))}},{path:"/ml",name:"ml",component:y},{path:"/store",name:"store",component:function(){return Promise.all([n.e("chunk-2edb2bab"),n.e("chunk-7446cf90")]).then(n.bind(null,"2c25"))}}]}),k=n("2f62");a["default"].use(k["a"]);var _=new k["a"].Store({state:{isLoggedIn:!1},mutations:{loggedin:function(t){console.log("log in."),t.isLoggedIn=!0}},actions:{}});a["default"].config.productionTip=!1,new a["default"]({router:w,store:_,render:function(t){return t(d)}}).$mount("#app")},"750a":function(t,e,n){},c11d:function(t,e,n){"use strict";var a=n("750a"),r=n.n(a);r.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.e7989043.png"}});
//# sourceMappingURL=app.08d8a95d.js.map