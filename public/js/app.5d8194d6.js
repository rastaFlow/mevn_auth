(function(e){function t(t){for(var n,a,u=t[0],i=t[1],c=t[2],l=0,f=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);p&&p(t);while(f.length)f.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,a=1;a<r.length;a++){var u=r[a];0!==o[u]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o={app:0},s=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d217357":"c5e60352","chunk-2d22d746":"3b13a8ed","chunk-3e75be59":"8ccfea66","chunk-b1b00d88":"92bbdcd5"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={"chunk-3e75be59":1,"chunk-b1b00d88":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-2d217357":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-3e75be59":"f0a2056e","chunk-b1b00d88":"a480ac1a"}[e]+".css",o=i.p+n,s=document.getElementsByTagName("link"),u=0;u<s.length;u++){var c=s[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===n||l===o))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){c=f[u],l=c.getAttribute("data-href");if(l===n||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete a[e],p.parentNode.removeChild(p),r(s)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=s);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var f=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(p);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",f.name="ChunkLoadError",f.type=n,f.request=a,r[1](f)}o[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var p=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"50cf":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Navbar"),r("div",{staticClass:"container"},[e.error?r("Errors",{attrs:{msg:e.error}}):e._e(),r("router-view")],1)],1)},o=[],s=r("5530"),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[r("router-link",{staticClass:"navbar-brand",attrs:{to:"/",href:"#"}},[e._v("MEVN AUTH")]),e._m(0),r("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[r("ul",{staticClass:"navbar-nav ml-auto"},[r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/",href:"#"}},[e._v("Home "),r("span",{staticClass:"sr-only"},[e._v("(current)")])])],1),r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/about",href:"#"}},[e._v("About")])],1),e.isLoggedIn?e._e():r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/login",href:"#"}},[e._v("Log In")])],1),e.isLoggedIn?e._e():r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/register",href:"#"}},[e._v("Register ")])],1),e.isLoggedIn?r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/profile",href:"#"}},[e._v("Profile")])],1):e._e(),e.isLoggedIn?r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{to:"/logout",href:"#"},on:{click:function(t){return t.preventDefault(),e.logoutUser(t)}}},[e._v("Lou Out")])]):e._e()])])],1)])},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[r("span",{staticClass:"navbar-toggler-icon"})])}],c=r("2f62"),l={name:"Navbar",computed:Object(s["a"])({},Object(c["c"])(["isLoggedIn"])),methods:Object(s["a"])({},Object(c["b"])(["logout"]),{logoutUser:function(){this.logout()}})},f=l,p=r("2877"),d=Object(p["a"])(f,u,i,!1,null,null,null),g=d.exports,m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"alert alert-danger"},[e._v(" "+e._s(e.msg)+" ")])},h=[],v={props:["msg"]},b=v,_=(r("db3e"),Object(p["a"])(b,m,h,!1,null,"4f607719",null)),k=_.exports,y={components:{Navbar:g,Errors:k},computed:Object(s["a"])({},Object(c["c"])(["error"]))},C=y,w=Object(p["a"])(C,a,o,!1,null,null,null),O=w.exports,j=(r("45fc"),r("d3b7"),r("8c4f")),x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"})},E=[],S={name:"Home"},L=S,I=Object(p["a"])(L,x,E,!1,null,null,null),q=I.exports,A=(r("96cf"),r("1da1")),P=r("bc3a"),T=r.n(P),N={token:localStorage.getItem("token")||"",user:{},status:"",error:null},R={isLoggedIn:function(e){return!!e.token},user:function(e){return e.user},authState:function(e){return e.status},error:function(e){return e.error}},$={login:function(e,t){var r=e.commit;return Object(A["a"])(regeneratorRuntime.mark((function e(){var n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r("auth_request"),e.prev=1,e.next=4,T.a.post("/api/users/login",t);case 4:return n=e.sent,n.data.success&&(a=n.data.token,o=n.data.user,localStorage.setItem("token",a),T.a.defaults.headers.common["authorization"]=a,r("auth_success",a,o)),e.abrupt("return",n);case 9:e.prev=9,e.t0=e["catch"](1),r("auth_error",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))()},register:function(e,t){var r=e.commit;return Object(A["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r("register_request"),e.prev=1,e.next=4,T.a.post("/api/users/register",t);case 4:return n=e.sent,void 0!==n.data.success&&r("register_success"),e.abrupt("return",n);case 9:e.prev=9,e.t0=e["catch"](1),r("register_error",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))()},logout:function(e){var t=e.commit;return Object(A["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,localStorage.removeItem("token");case 2:return t("logout"),delete T.a.defaults.headers.common["authorization"],B.push("/login"),e.abrupt("return");case 6:case"end":return e.stop()}}),e)})))()},getProfile:function(e){var t=e.commit;return Object(A["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t("profile_request"),e.next=3,T.a.get("/api/users/profile");case 3:return r=e.sent,t("user_profile",r.data.user),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))()}},H={auth_request:function(e){e.error=null,e.status="loading"},auth_success:function(e,t,r){e.error=null,e.token=t,e.user=r,e.status="success"},auth_error:function(e,t){e.error=t.response.data.msg},register_request:function(e){e.error=null,e.status="loading"},register_success:function(e){e.error=null,e.status="success"},register_error:function(e,t){e.err=t.response.data.msg},logout:function(e){e.error=null,e.status="",e.token="",e.user=""},profile_request:function(e){e.status="loading"},user_profile:function(e,t){e.user=t}},M={state:N,getters:R,actions:$,mutations:H};n["a"].use(c["a"]);var U=new c["a"].Store({modules:{Auth:M},state:{},mutations:{},actions:{}});n["a"].use(j["a"]);var z=new j["a"]({mode:"history",base:"/",routes:[{path:"/",name:"Home",component:q},{path:"/about",name:"about",component:function(){return r.e("chunk-2d22d746").then(r.bind(null,"f820"))}},{path:"/login",name:"login",component:function(){return r.e("chunk-b1b00d88").then(r.bind(null,"a55b"))},meta:{requiresGuest:!0}},{path:"/register",name:"register",component:function(){return r.e("chunk-3e75be59").then(r.bind(null,"73cf"))},meta:{requiresGuest:!0}},{path:"/profile",name:"profile",component:function(){return r.e("chunk-2d217357").then(r.bind(null,"c66d"))},meta:{requiresAuth:!0}}]});z.beforeEach((function(e,t,r){e.matched.some((function(e){return e.meta.requiresAuth}))?U.getters.isLoggedIn?r():r("/login"):e.matched.some((function(e){return e.meta.requiresGuest}))&&U.getters.isLoggedIn?r("/profile"):r()}));var B=z;n["a"].config.productionTip=!1,n["a"].prototype.$http=T.a;var D=localStorage.getItem("token");D&&(n["a"].prototype.$http.defaults.headers.common["Authorization"]=D),new n["a"]({router:B,store:U,render:function(e){return e(O)}}).$mount("#app")},db3e:function(e,t,r){"use strict";var n=r("50cf"),a=r.n(n);a.a}});
//# sourceMappingURL=app.5d8194d6.js.map