(function(t){function e(e){for(var r,u,c=e[0],i=e[1],l=e[2],p=0,f=[];p<c.length;p++)u=c[p],o[u]&&f.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);s&&s(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={app:0},a=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var s=i;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"5c48":function(t,e,n){},"7c55":function(t,e,n){"use strict";var r=n("5c48"),o=n.n(r);o.a},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/home"}},[t._v("Home")]),t._v(" |\n    "),n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),n("keep-alive",{attrs:{include:["Home","About"]}},[n("router-view")],1)],1)},a=[],u=(n("7c55"),n("2877")),c={},i=Object(u["a"])(c,o,a,!1,null,null,null),l=i.exports,s=n("8c4f"),p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("p",[t._v("This is Home")]),n("p",[t._v("Development environment I can cache")]),n("input",{attrs:{type:"text"}})])}],b=(n("7f7f"),n("d225")),v=n("b0b4"),d=n("308d"),h=n("6bb5"),m=n("4e2b"),_=n("9ab4"),O=n("60a3"),j=function(t){function e(){return Object(b["a"])(this,e),Object(d["a"])(this,Object(h["a"])(e).apply(this,arguments))}return Object(m["a"])(e,t),Object(v["a"])(e,[{key:"created",value:function(){console.log(this.$options.name)}}]),e}(O["b"]);j=_["a"]([O["a"]],j);var y=j,g=y,w=Object(u["a"])(g,p,f,!1,null,null,null),x=w.exports,$=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("p",[t._v("This is about")]),n("p",[t._v("I can cache both development and production environments")]),n("input",{attrs:{type:"text"}})])}],P=n("013f"),S=function(t){function e(){var t;Object(b["a"])(this,e),t=Object(d["a"])(this,Object(h["a"])(e).call(this)),console.log(t.$options.name);var n=Object(P["a"])(t);return n.$options.__proto__.name="About",console.log(t.$options.name),t}return Object(m["a"])(e,t),e}(O["b"]);S=_["a"]([O["a"]],S);var E=S,T=E,A=Object(u["a"])(T,$,k,!1,null,null,null),H=A.exports;r["default"].use(s["a"]);var M=new s["a"]({routes:[{path:"/home",name:"Home",component:x},{path:"/about",name:"About",component:H}]}),C=n("2f62");r["default"].use(C["a"]);var I=new C["a"].Store({state:{},mutations:{},actions:{}});r["default"].config.productionTip=!1,new r["default"]({router:M,store:I,render:function(t){return t(l)}}).$mount("#app")}});
//# sourceMappingURL=app.ed1dfcae.js.map